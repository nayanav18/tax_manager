import {useEffect, useState} from 'react';

export default function MarketSetup({ market, setMarket, goToStep }) {
    const update = (field, value) => setMarket(prev => ({ ...prev, [field]: value }));
    const [marketList, setMarketList] = useState([]);
    const [activeMarket, setActiveMarket] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const API_URL = "/vf-grp-aib-prd-ncl-tax-lab/tax-trans-price-dev/api/market"
    
    useEffect(() => {
        async function fetchMarketList() {
            try {
                const res = await fetch(API_URL, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if(!res.ok) {
                    throw new Error(`HTTP ${res.status}`);
                }
                const result = await res.json();
    
                setMarketList(result.data);
                setLoading(false);
            } catch(err: unknown) {
                console.log(err);
                setError("Unexpected error occurred while fetching the markets");
                setLoading(false);
            }
        };
        fetchMarketList();
    }, [])

  return (
    <>
      <div className="card">
        <h2>Market Setup</h2>
        <p className="subtitle">Configure the local entity and fiscal year for this Local File.</p>
        <div className="form-row">
          <div className="form-group">
              {loading && <>Loading Market....</>}
              {error && (
                <div className="error" style={{color: "red"}}>
                {error}
                </div>
                )}
              {!loading && !error && (
                <>
                    <label>Local Market</label>
                    <select
  value={market.marketCode}
  onChange={e => {
    update('marketCode', e.target.value);
    setActiveMarket(
      marketList.find(r => r.market_name === e.target.value)
    );
  }}
>
                    <option value="">Select market...</option>
                     {marketList.map((market) => (
                        <option value={market.market_name} key={market.market_code}>{market.market_name}</option>
              ))}
            </select>
              </>
            )}
          </div>
          <div className="form-group">
            <label>Fiscal Year End</label>
            <select value={market.fiscalYear} onChange={e => update('fiscalYear', e.target.value)}>
              <option value="2024">31 March 2024</option>
              <option value="2025">31 March 2025</option>
              <option value="2026">31 March 2026</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Legal Entity Name</label>
            <input type="text" value={activeMarket?.legal_entity_name} onChange={e => update('entityName', e.target.value)} placeholder="Select a local market" disabled="disabled"/>
          </div>
          <div className="form-group">
            <label>Country / Territory</label>
            <input type="text" value={activeMarket?.market_name} onChange={e => update('territory', e.target.value)} placeholder="Select a local market" disabled="disabled" />
          </div>
        </div>
      </div>

      <div className="card">
        <h2>4. Local Entity Information</h2>
        <p className="subtitle">Provide market-specific details for the Local Entity section.</p>
        {[
          ['strategy', '4.1 Business and Business Strategy', 'Describe the business and business strategy pursued by the local entity...'],
          ['management', '4.2 Management Structure', 'Describe the management structure of the local entity...'],
          ['restructure', '4.3 Business Restructurings & Intangible Asset Transfers', 'Describe any business restructurings or intangible asset transfers during the year...'],
          ['competitors', '4.4 Key Competitors', 'List key competitors in the local market...'],
        ].map(([field, label, placeholder]) => (
          <div className="form-group" key={field}>
            <label>{label}</label>
            <textarea value={market[field]} placeholder={placeholder} onChange={e => update(field, e.target.value)} />
          </div>
        ))}
      </div>
      <div className="btn-group">
        <button className="btn btn-primary" onClick={() => goToStep(2)}>Continue to Upload →</button>
      </div>
    </>
  );
}
