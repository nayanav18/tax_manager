import { ALL_MODULES, MODULE_BOILERPLATE, MODULE_SECTIONS } from '../data/modules';
import { escapeHtml, formatCurrency } from '../utils/format';

export default function ReviewExport({ market, transactions, selectedModules, localInputs, getModuleTransactions, setStatus, goToStep }) {
  const buildPreview = () => {
    const entity = market.entityName || '[Entity Name]';
    const fy = market.fiscalYear || '2025';
    let html = `<h1>Local File Transfer Pricing Documentation</h1><p style="text-align:center; color:var(--text-light);">Year Ended 31 March ${fy}</p><hr style="margin:24px 0;">`;
    html += `<h2>1. Purpose of the Report</h2><p>This local file has been prepared by Vodafone to be read in conjunction with the Vodafone master file and the Vodafone country-by-country report in order to provide more detailed information relating to specific intercompany transactions.</p>`;
    html += `<h2>2. The Vodafone Group</h2><p>Please refer to the Vodafone master file for an overview of the Vodafone Group.</p>`;
    html += `<h2>3. Vodafone's Tax Strategy, Conduct and Principles</h2><p>Please refer to the Vodafone master file for details of Vodafone's tax strategy, conduct and principles.</p>`;
    html += `<h2>4. Local Entity</h2>`;
    html += `<h3>4.1 Business and Business Strategy</h3>${market.strategy ? `<p>${escapeHtml(market.strategy)}</p>` : `<p class="placeholder">[Market-specific input required]</p>`}`;
    html += `<p>The overall strategy of ${escapeHtml(entity)} ('the Company') is aligned to that of Vodafone Group Plc. ('VG Plc.'), which is outlined in the Group Strategy Review.</p>`;
    html += `<h3>4.2 Management Structure</h3>${market.management ? `<p>${escapeHtml(market.management)}</p>` : `<p class="placeholder">[Market-specific input required]</p>`}`;
    html += `<h3>4.3 Business Restructurings & Intangible Asset Transfers</h3>${market.restructure ? `<p>${escapeHtml(market.restructure)}</p>` : `<p class="placeholder">[Market-specific input required]</p>`}`;
    html += `<h3>4.4 Key Competitors</h3>${market.competitors ? `<p>${escapeHtml(market.competitors)}</p>` : `<p class="placeholder">[Market-specific input required]</p>`}`;

    if (transactions.length > 0) {
      html += `<h2>5. Controlled Transactions</h2><h3>5.1 Intra-group Payments & Receipts</h3>`;
      html += `<table><thead><tr><th>Entity</th><th>Counterparty</th><th>Country</th><th>Type</th><th>Ccy</th><th style="text-align:right">Amount</th></tr></thead><tbody>`;
      for (const t of transactions) html += `<tr><td>${escapeHtml(t.entity)}</td><td>${escapeHtml(t.counterparty)}</td><td>${escapeHtml(t.country)}</td><td>${escapeHtml(t.type)}</td><td>${t.currency}</td><td style="text-align:right">${formatCurrency(t.amount)}</td></tr>`;
      html += `</tbody></table>`;
    }

    const mods = ALL_MODULES.filter(m => selectedModules.has(m.id));
    for (const mod of mods) {
      const bp = MODULE_BOILERPLATE[mod.id];
      const modTxns = getModuleTransactions(mod.id, transactions);
      html += `<h2>${mod.section} ${mod.name}</h2>`;
      const sections = MODULE_SECTIONS[mod.id] || [{ title: 'Overview', content: `<p>${escapeHtml(bp.summary)}</p>` }];
      for (const sec of sections) html += `<h3>${escapeHtml(sec.title)}</h3>${sec.content}`;
      if (modTxns.length > 0) {
        html += `<h3>Associated Transactions</h3><table><thead><tr><th>Counterparty</th><th>Type</th><th>Ccy</th><th style="text-align:right">Amount</th></tr></thead><tbody>`;
        for (const t of modTxns) html += `<tr><td>${escapeHtml(t.counterparty)}</td><td>${escapeHtml(t.type)}</td><td>${t.currency}</td><td style="text-align:right">${formatCurrency(t.amount)}</td></tr>`;
        html += `</tbody></table>`;
      }
      for (const field of bp.localFields) html += `<h3>${escapeHtml(field.label)}</h3>${localInputs[field.id] ? `<p>${escapeHtml(localInputs[field.id])}</p>` : `<p class="placeholder">[Market-specific input required]</p>`}`;
    }
    html += `<h2>6. Additional Information</h2><p>Copies of intercompany agreements for each category of controlled transaction are included in the appendices.</p>`;
    html += `<h2>7. Financial Information</h2><p>The annual financial accounts for the relevant legal entities have been included in Appendix 2.</p>`;
    return html;
  };

  return (
    <>
      <div className="card">
        <h2>Review & Export</h2>
        <p className="subtitle">Preview the consolidated Local File document.</p>
        <div className="btn-group" style={{ marginTop: 0, marginBottom: 20 }}>
          <button className="btn btn-primary" onClick={() => alert('Export to Word can be added with docx.js or a backend document generation API.')}>📄 Export to Word</button>
          <button className="btn btn-outline" onClick={() => setStatus('In Review')}>Mark as In Review</button>
          <button className="btn btn-outline" onClick={() => setStatus('Final')}>Mark as Final</button>
        </div>
      </div>
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="preview-doc" dangerouslySetInnerHTML={{ __html: buildPreview() }} />
      </div>
      <div className="btn-group"><button className="btn btn-secondary" onClick={() => goToStep(3)}>← Back</button></div>
    </>
  );
}
