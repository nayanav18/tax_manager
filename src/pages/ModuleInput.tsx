import { ALL_MODULES, MODULE_BOILERPLATE, MODULE_SECTIONS } from '../data/modules';
import { formatCurrency } from '../utils/format';
 
export default function ModuleInput({ selectedModules, activeModuleTab, setActiveModuleTab, localInputs, setLocalInputs, getModuleTransactions, transactions, goToStep }) {
  const mods = ALL_MODULES.filter(m => selectedModules.has(m.id));
  const activeId = activeModuleTab && selectedModules.has(activeModuleTab) ? activeModuleTab : mods[0]?.id;
  const mod = ALL_MODULES.find(m => m.id === activeId);

  const filled = mods.filter(m => MODULE_BOILERPLATE[m.id].localFields.some(f => (localInputs[f.id] || '').trim())).length;
  const pct = mods.length ? Math.round((filled / mods.length) * 100) : 0;

  const setInput = (field, value) => {
    setLocalInputs(prev => {
      const next = { ...prev, [field]: value };
      localStorage.setItem('lf_' + field, value);
      return next;
    });
  };

  if (mods.length === 0) {
    return <div className="card"><p className="subtitle">No modules selected. Go back and upload transaction data.</p></div>;
  }

  const bp = MODULE_BOILERPLATE[mod.id];
  const modTxns = getModuleTransactions(mod.id, transactions);
  const sections = MODULE_SECTIONS[mod.id] || [{ title: 'Overview', content: `<p>${bp.summary}</p><p><strong>Transfer Pricing Method:</strong> ${bp.method}</p>` }];

  return (
    <>
      <div className="card">
        <h2>Module Input</h2>
        <p className="subtitle">For each selected module, review boilerplate narrative and provide market-specific responses.</p>
        <div className="progress-bar"><div className="fill" style={{ width: `${pct}%` }} /></div>
        <p style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 4 }}>{filled} of {mods.length} modules have local input</p>
      </div>

      <div className="section-tabs">
        {mods.map(m => <div key={m.id} className={`section-tab ${m.id === mod.id ? 'active' : ''}`} title={m.name} onClick={() => setActiveModuleTab(m.id)}>{m.section}</div>)}
      </div>

      <div className="card">
        <h2>{mod.section} {mod.name}</h2>
        <p className="subtitle">Review the boilerplate and provide local market inputs below.</p>

        {modTxns.length > 0 && (
          <div style={{ marginBottom: 16 }}>
            <strong style={{ fontSize: 13, color: 'var(--text-light)' }}>TRANSACTION DATA</strong>
            <table style={{ marginTop: 8 }}>
              <thead><tr><th>Counterparty</th><th>Type</th><th>Currency</th><th style={{ textAlign: 'right' }}>Amount</th></tr></thead>
              <tbody>{modTxns.map((t, idx) => <tr key={idx}><td>{t.counterparty}</td><td>{t.type}</td><td>{t.currency}</td><td style={{ textAlign: 'right' }} className={t.amount < 0 ? 'amount-neg' : 'amount-pos'}>{formatCurrency(t.amount)}</td></tr>)}</tbody>
            </table>
          </div>
        )}

        {sections.map((sec, idx) => <details key={sec.title} open={idx === 0} className="react-details">
          <summary className="collapsible-header open"><h3>{sec.title}</h3><span className="toggle">▼</span></summary>
          <div className="collapsible-body open"><div className="boilerplate" dangerouslySetInnerHTML={{ __html: sec.content }} /></div>
        </details>)}

        <h3 style={{ marginTop: 24, marginBottom: 16, fontSize: 15 }}>Market-Specific Inputs</h3>
        {bp.localFields.map(field => <div className="form-group" key={field.id}>
          <label>{field.label}</label>
          <textarea value={localInputs[field.id] || ''} placeholder={field.placeholder} onChange={e => setInput(field.id, e.target.value)} />
        </div>)}
      </div>

      <div className="btn-group">
        <button className="btn btn-secondary" onClick={() => goToStep(2)}>← Back</button>
        <button className="btn btn-primary" onClick={() => goToStep(4)}>Continue to Review →</button>
      </div>
    </>
  );
}
