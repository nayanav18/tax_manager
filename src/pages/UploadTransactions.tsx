import { ALL_MODULES, SAMPLE_CSV } from '../data/modules';
import { parseTransactionsCSV } from '../utils/csv';
import { formatCurrency } from '../utils/format';

export default function UploadTransactions({ transactions, setTransactions, selectedModules, setSelectedModules, goToStep, getModuleTransactions, autoSelectModules }) {
  const payments = transactions.filter(t => t.amount < 0).reduce((s, t) => s + t.amount, 0);
  const receipts = transactions.filter(t => t.amount > 0).reduce((s, t) => s + t.amount, 0);

  const processText = (text) => {
    const parsed = parseTransactionsCSV(text);
    setTransactions(parsed);
    setSelectedModules(autoSelectModules(parsed));
  };

  const handleFile = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => processText(ev.target.result);
    reader.readAsText(file);
  };

  const toggleModule = (id) => {
    setSelectedModules(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <>
      <div className="card">
        <h2>Upload Transaction Data</h2>
        <p className="subtitle">Upload a CSV file containing intercompany transactions. The app will auto-detect relevant Local File modules.</p>
        <div
          className="upload-zone"
          onDragOver={e => e.preventDefault()}
          onDrop={e => { e.preventDefault(); handleFile(e.dataTransfer.files[0]); }}
        >
          <div className="icon">📄</div>
          <p><strong>Drag & drop CSV file here</strong> or click to browse</p>
          <p style={{ fontSize: 12, marginTop: 8, color: '#b2bec3' }}>
            Expected columns: Entity Name, Counterparty Name, Counterparty Country, Transaction Type, Currency, Transaction Amount
          </p>
          <input className="file-input-overlay" type="file" accept=".csv" onChange={e => handleFile(e.target.files[0])} />
        </div>
        <div style={{ marginTop: 16, textAlign: 'center' }}>
          <button className="btn btn-outline btn-sm" onClick={() => processText(SAMPLE_CSV)}>Load Sample Data (Vodafone Ireland)</button>
        </div>
      </div>

      {transactions.length > 0 && (
        <>
          <div className="stats-row">
            <div className="stat-card"><div className="stat-value">{transactions.length}</div><div className="stat-label">Transactions</div></div>
            <div className="stat-card"><div className="stat-value">{selectedModules.size}</div><div className="stat-label">Modules Detected</div></div>
            <div className="stat-card"><div className="stat-value">{formatCurrency(payments)}</div><div className="stat-label">Total Payments</div></div>
            <div className="stat-card"><div className="stat-value">{formatCurrency(receipts)}</div><div className="stat-label">Total Receipts</div></div>
          </div>

          <div className="card">
            <h2>5.1 Intra-group Payments & Receipts</h2>
            <p className="subtitle">Auto-populated from your CSV upload.</p>
            <div style={{ overflowX: 'auto' }}>
              <table>
                <thead><tr><th>Entity Name</th><th>Counterparty Name</th><th>Country</th><th>Transaction Type</th><th>Currency</th><th style={{ textAlign: 'right' }}>Amount</th></tr></thead>
                <tbody>{transactions.map((t, idx) => <tr key={idx}><td>{t.entity}</td><td>{t.counterparty}</td><td>{t.country}</td><td>{t.type}</td><td>{t.currency}</td><td style={{ textAlign: 'right' }} className={t.amount < 0 ? 'amount-neg' : 'amount-pos'}>{formatCurrency(t.amount)}</td></tr>)}</tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <h2>Module Selection</h2>
            <p className="subtitle">Auto-selected modules can be toggled on/off as needed.</p>
            <div className="module-chips">
              {ALL_MODULES.map(mod => {
                const isSelected = selectedModules.has(mod.id);
                const modTxns = getModuleTransactions(mod.id, transactions);
                const total = modTxns.reduce((s, t) => s + t.amount, 0);
                return (
                  <div key={mod.id} className={`chip ${isSelected ? 'selected' : ''}`} onClick={() => toggleModule(mod.id)}>
                    <span className="chip-check">{isSelected ? '✓' : ''}</span>
                    {mod.section} {mod.name}
                    {modTxns.length > 0 && <span className="chip-amount">{formatCurrency(total)}</span>}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="btn-group">
            <button className="btn btn-secondary" onClick={() => goToStep(1)}>← Back</button>
            <button className="btn btn-primary" onClick={() => goToStep(3)}>Continue to Module Input →</button>
          </div>
        </>
      )}
    </>
  );
}
