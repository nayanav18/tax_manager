import { useEffect, useMemo, useState } from 'react';
import AppLayout from './layouts/AppLayout';
import MarketSetup from './pages/MarketSetup';
import UploadTransactions from './pages/UploadTransactions';
import ModuleInput from './pages/ModuleInput';
import ReviewExport from './pages/ReviewExport';
import { ALL_MODULES } from './data/modules';
import './styles/global.css';

export default function App() {
  const [status, setStatus] = useState('Draft');
  const [currentStep, setCurrentStep] = useState(1);
  const [transactions, setTransactions] = useState([]);
  const [selectedModules, setSelectedModules] = useState(new Set());
  const [activeModuleTab, setActiveModuleTab] = useState(null);
  const [market, setMarket] = useState({
    marketCode: 'IE', fiscalYear: '2025', entityName: 'Vodafone Ireland Limited', territory: 'Ireland',
    strategy: '', management: '', restructure: '', competitors: '',
  });
  const [localInputs, setLocalInputs] = useState({});

  useEffect(() => {
    const loaded = {};
    for (const key of Object.keys(localStorage)) {
      if (key.startsWith('lf_')) loaded[key.slice(3)] = localStorage.getItem(key) || '';
    }
    setLocalInputs(loaded);
  }, []);

  const autoSelectModules = (txns) => {
    const next = new Set();
    for (const txn of txns) {
      const txType = txn.type.toLowerCase();
      const cpName = txn.counterparty.toLowerCase();
      for (const mod of ALL_MODULES) {
        if (next.has(mod.id)) continue;
        const kwMatch = mod.keywords.some(kw => txType.includes(kw));
        const cpMatch = mod.counterparties.some(cp => cpName.includes(cp));
        if (kwMatch || cpMatch) {
          if (mod.id === 'handset_ins' && !txType.includes('handset insurance') && !txType.includes('device insurance')) continue;
          if (mod.id === 'insurance' && (txType.includes('handset insurance') || txType.includes('device insurance'))) continue;
          if (mod.id === 'guarantees' && !txType.includes('guarantee')) continue;
          next.add(mod.id);
        }
      }
    }
    return next;
  };

  const getModuleTransactions = (modId, txns = transactions) => {
    const mod = ALL_MODULES.find(m => m.id === modId);
    if (!mod) return [];
    return txns.filter(txn => {
      const txType = txn.type.toLowerCase();
      const cpName = txn.counterparty.toLowerCase();
      return mod.keywords.some(kw => txType.includes(kw)) || mod.counterparties.some(cp => cpName.includes(cp));
    });
  };

  useEffect(() => {
    if (!activeModuleTab || !selectedModules.has(activeModuleTab)) {
      const first = ALL_MODULES.find(m => selectedModules.has(m.id));
      setActiveModuleTab(first?.id || null);
    }
  }, [selectedModules, activeModuleTab]);

  const goToStep = (step) => {
    setCurrentStep(step);
    window.scrollTo(0, 0);
  };

  const pageProps = { goToStep, transactions, selectedModules, localInputs, getModuleTransactions };
  const sidebarProps = { currentStep, selectedModules, activeModuleTab, setActiveModuleTab, goToStep, localInputs };

  return (
    <AppLayout status={status} sidebarProps={sidebarProps}>
      {currentStep === 1 && <MarketSetup market={market} setMarket={setMarket} goToStep={goToStep} />}
      {currentStep === 2 && <UploadTransactions {...pageProps} setTransactions={setTransactions} setSelectedModules={setSelectedModules} autoSelectModules={autoSelectModules} />}
      {currentStep === 3 && <ModuleInput {...pageProps} activeModuleTab={activeModuleTab} setActiveModuleTab={setActiveModuleTab} setLocalInputs={setLocalInputs} />}
      {currentStep === 4 && <ReviewExport {...pageProps} market={market} setStatus={setStatus} />}
    </AppLayout>
  );
}
