export const ALL_MODULES = [
  { id: 'brand',       name: 'Brand Royalty',           section: '5.2',  keywords: ['brand royalty','vssl','brand licence'], counterparties: ['vodafone sales & services'] },
  { id: 'inca',        name: 'INCA',                    section: '5.3',  keywords: ['inca','central services','group technology','group commercial','group support','vodafone business'], counterparties: ['vodafone group services'] },
  { id: 'procurement', name: 'Procurement',             section: '5.4',  keywords: ['procurement','core','terminals','non-core'], counterparties: ['vodafone procurement company'] },
  { id: 'roaming',     name: 'Roaming',                 section: '5.5',  keywords: ['roaming','inbound','outbound','iot'], counterparties: ['vodafone roaming services'] },
  { id: 'financing',   name: 'Financing',               section: '5.6',  keywords: ['financing','loan','interest','commitment fee','rcf'], counterparties: ['vodafone investments'] },
  { id: 'vantage',     name: 'Vantage Towers',          section: '5.7',  keywords: ['vantage','tower','towerco','msa'], counterparties: ['vantage towers'] },
  { id: 'cashpool',    name: 'Multi-Currency Cash Pool', section: '5.8', keywords: ['cash pool','cash pooling','mca'], counterparties: ['vodafone shared services budapest','vssb'] },
  { id: 'carrier',     name: 'Carrier Services',        section: '5.9',  keywords: ['carrier','voice','sms','vegl','vcs'], counterparties: ['vodafone enterprise global'] },
  { id: 'secondments', name: 'Secondments',             section: '5.10', keywords: ['secondment'], counterparties: [] },
  { id: 'handset_rec', name: 'Handset Receivables',     section: '5.11', keywords: ['handset receivable','vofl'], counterparties: ['vodafone overseas finance'] },
  { id: 'insurance',   name: 'Corporate Insurance',     section: '5.12', keywords: ['corporate insurance','insurance','property','casualty','employee benefit'], counterparties: ['vodafone insurance'] },
  { id: 'deposits',    name: 'Deposits',                section: '5.13', keywords: ['deposit'], counterparties: [] },
  { id: 'guarantees',  name: 'Guarantees',              section: '5.14', keywords: ['guarantee'], counterparties: ['vodafone group plc'] },
  { id: 'handset_ins', name: 'Handset Insurance',       section: '5.15', keywords: ['handset insurance','device insurance'], counterparties: [] },
  { id: 'shared_ops',  name: 'Shared Operations',       section: '5.16', keywords: ['shared operations','vsol'], counterparties: ['vodafone shared operations'] },
  { id: 'other_mat',   name: 'Other Material',          section: '5.17', keywords: ['other material'], counterparties: [] },
  { id: 'other_immat', name: 'Other Immaterial',        section: '5.18', keywords: ['other immaterial'], counterparties: [] },
];

export const MODULE_BOILERPLATE = {
  brand: {
    summary: "VG Plc. has granted its indirect subsidiary Vodafone Sales & Services Limited ('VSSL') the exclusive right to promote and exploit the Vodafone brand throughout the world, and thus VSSL sublicenses the right to use the Vodafone brand to the Company via brand licence agreements.",
    method: "CUP Method — Internal CUP benchmarking based on 6 comparable third-party brand licence agreements. Royalty rate of 1.55% on OpCo service revenues falls within IQR of 1.40% to 1.70% (median 1.60%).",
    localFields: [
      { id: 'brand_local_activity', label: 'Local Brand Team Activities', placeholder: 'Describe the local brand team structure, campaigns, and sponsorships...' },
      { id: 'brand_local_sponsors', label: 'Local Sponsorships', placeholder: 'List any local sponsorship deals (e.g. sports teams, events)...' },
    ]
  },
  inca: {
    summary: "VGSL is a core Vodafone group entity responsible for the provision of central group services to the Operating Companies. Charges are made on a full cost plus mark-up basis: 5% for strategy and directorate services, 4% for all other services (including Datacentres).",
    method: "TNMM — Benchmarked across 4 service categories (IT Consulting, Sales & Marketing, Datacentre, Support Services). All mark-ups fall within IQR of comparable companies.",
    localFields: [
      { id: 'inca_local_services', label: 'Key Services Received', placeholder: 'Describe the most significant INCA services received by the local entity...' },
    ]
  },
  procurement: {
    summary: "Vodafone Procurement Company Sarl ('VPC') was established in 2007 to centralise procurement. Commission rates: Core 3%, Non-core 1%, Terminals 1% (from FY25).",
    method: "CUP Method (primary) — Third-party sourcing agreements from RoyaltyStat/ktMINE. Full range 1%-11%, IQR 3.4%-6.0%. TNMM (corroborative) — 10 wholesaler comparables.",
    localFields: [
      { id: 'proc_local', label: 'Local Procurement Context', placeholder: 'Describe any locally-managed procurement activities outside VPC scope...' },
    ]
  },
  roaming: {
    summary: "Vodafone Roaming Services Sarl ('VRS') acts as a wholesale market intermediary for both OpCo-to-OpCo and OpCo-to-third-party roaming transactions for voice, SMS, data and M2M.",
    method: "TNMM for Transactions 1 & 2 (intermediation fee). CUP for Transaction 3 (intra-group IOT rates benchmarked against VRS-third party deals).",
    localFields: [
      { id: 'roaming_local', label: 'Local Roaming Context', placeholder: 'Describe the local roaming traffic patterns (net inbound/outbound position)...' },
    ]
  },
  financing: {
    summary: "The VFEs provide debt financing to the Company in exchange for the repayment of principal, interest and commitment fees. Pricing is based on standalone credit rating and market benchmarks.",
    method: "CUP Method — Four-stage process: credit rating, sourcing comparables, adjustments, pricing within arm's length range.",
    localFields: [
      { id: 'fin_local', label: 'Local Financing Details', placeholder: 'Describe the outstanding loans, facilities and their key terms...' },
    ]
  },
  vantage: {
    summary: "Vantage Towers provides passive tower infrastructure services to the Company under an anchor tenancy MSA. Long-term support services are provided under the LTA at cost plus 4%.",
    method: "TNMM — TowerCo selected as tested party. Comparable companies providing tower infrastructure services identified.",
    localFields: [
      { id: 'vt_local', label: 'Local Vantage Towers Details', placeholder: 'Describe the local TowerCo entity and demerger details...' },
    ]
  },
  cashpool: {
    summary: "Under the Vodafone Group cash pooling arrangement, participating companies can draw down or deposit cash with VSSB. Deposits priced at reference rate less 0.05%, borrowings at reference rate plus 0.125%.",
    method: "CUP Method — Spread benchmarked against external CUP data; falls in IQR, in line with median.",
    localFields: [
      { id: 'cp_local', label: 'Local Cash Pool Context', placeholder: 'Describe the typical cash position (net depositor or borrower)...' },
    ]
  },
  carrier: {
    summary: "Vodafone Carrier Services ('VCS') consolidated wholesale international carrier services. VEGL acts as a hub for both third party and OpCo traffic for international voice and SMS.",
    method: "CUP Method — Termination rates benchmarked against regulated rates and third-party deals.",
    localFields: [
      { id: 'carrier_local', label: 'Local Carrier Services Context', placeholder: 'Describe the international voice/SMS traffic volumes and key routes...' },
    ]
  },
  secondments: {
    summary: "From time to time Vodafone entities may require employees from other Group entities. The Host reimburses the Employer the fully-loaded cost without mark-up.",
    method: "CUP Method — Cost recharge without mark-up, consistent with OECD guidance on secondments.",
    localFields: [
      { id: 'sec_local', label: 'Local Secondment Details', placeholder: 'List current secondments (inbound and outbound), roles and durations...' },
    ]
  },
  handset_rec: {
    summary: "The Company sells handset receivables to third parties via VOFL. VOFL manages the programme centrally and passes all proceeds back to the Company.",
    method: "CUP Method — Discount rate benchmarked against third-party receivable purchase programmes.",
    localFields: [
      { id: 'hr_local', label: 'Local Handset Receivables Details', placeholder: 'Describe the receivable sale programme, volumes and discount rates...' },
    ]
  },
  insurance: {
    summary: "VIL directly underwrites property & casualty risks and indirectly underwrites employee benefits via local fronting insurers. VIL retains approximately €150m risk per annum.",
    method: "Actuarial Analysis (primary) — Premium pricing tested via actuarial models. TNMM (corroborative) — Return on capital benchmarked against comparable insurers.",
    localFields: [
      { id: 'ins_local', label: 'Local Insurance Context', placeholder: 'Describe the insurance coverage types and any material claims in the year...' },
    ]
  },
  deposits: {
    summary: "Cash the Company wishes to hold is typically deposited with VG Plc. Interest rate on monthly call deposits is based on EURIBOR, benchmarked against Bloomberg deposit rates.",
    method: "CUP Method — Deposit rate benchmarked against published Bloomberg EUR deposit rates.",
    localFields: [
      { id: 'dep_local', label: 'Local Deposit Details', placeholder: 'Describe the deposit balances and interest earned during the year...' },
    ]
  },
  guarantees: {
    summary: "VG Plc. enters into guarantee facilities with relationship banks. OpCos counter-indemnify VG Plc. for all fees, claims and losses associated with their use of the facility.",
    method: "Yield Approach / CUP — Guarantee fee based on credit enhancement benefit to the OpCo.",
    localFields: [
      { id: 'guar_local', label: 'Local Guarantee Details', placeholder: 'List outstanding guarantees, beneficiaries and amounts...' },
    ]
  },
  handset_ins: {
    summary: "Vodafone operates handset insurance businesses ultimately reinsured by VIL. OpCos collect premiums and retain a commission; VIL books net profit/loss after all costs.",
    method: "Internal CUP — Based on comparable arrangements following FY25 M&A activity. OpCo commission determined via residual profit split (70/30 target).",
    localFields: [
      { id: 'hi_local', label: 'Local Handset Insurance Details', placeholder: 'Describe the handset insurance product offering and penetration rates...' },
    ]
  },
  shared_ops: {
    summary: "From 1 April 2024, VSOL provides shared services previously under INCA. Fully transitioned services use PxQ pricing; partially transitioned services use cost-plus.",
    method: "TNMM — Full cost mark-up mechanism. VSOL is a risk-taking service provider for transitioned services, limited-risk for others.",
    localFields: [
      { id: 'so_local', label: 'Local Shared Operations Details', placeholder: 'Describe the key services received from VSOL and consumption volumes...' },
    ]
  },
  other_mat: {
    summary: "Other material intercompany transactions not covered by the modules above.",
    method: "Assessed on a case-by-case basis using the most appropriate OECD method.",
    localFields: [
      { id: 'om_local', label: 'Other Material Transaction Details', placeholder: 'Describe any other material intercompany transactions...' },
    ]
  },
  other_immat: {
    summary: "Other smaller transactions that are immaterial in size or intra-country with limited Transfer Pricing risk.",
    method: "Not analysed further due to immateriality.",
    localFields: [
      { id: 'oi_local', label: 'Other Immaterial Transaction Details', placeholder: 'List other immaterial transactions...' },
    ]
  }
};

// Detailed boilerplate sections per module — pulled from the Local File template
export const MODULE_SECTIONS = {
  brand: [
    { title: 'The Material Controlled Transaction & Context', content: `<p>VG Plc. (the ultimate legal owner of the trade names and trademarks) has granted its indirect subsidiary Vodafone Sales & Services Limited ('VSSL') the exclusive right to promote and exploit the Vodafone brand throughout the world, and thus VSSL sublicenses the right to use the Vodafone brand to the Company via brand licence agreements.</p>
<p>Successfully developing, enhancing, maintaining, protecting and exploiting the global Vodafone brand is an integral part of the Group's strategy. Vodafone trades in an extremely competitive sector, and in fierce markets where often there are incumbent operators (e.g. former monopolies who still retain a large market share), and other smaller operators intent on competing on price. Building and continually enhancing a distinct international brand identity, position and strategy, that is activated and executed holistically across all assets, applications and customer touchpoints in all local markets can drive key benefits and economic value for the Vodafone operating companies.</p>
<p>Creating a strong, distinctive and purpose-led brand enables Vodafone to differentiate its product and service offerings from its competitors, simplifying choice and making it an easier decision for customers to choose Vodafone. A strong brand enables the business to grow quicker, and in periods of economic downturn it can help to protect the economic performance of the Vodafone operating companies.</p>
<p>The Vodafone brand is one of the most valuable assets of the Vodafone group and is widely accepted as being one of the most recognisable and valuable brands in the world. In 2025 it was individually valued by third party Brand Finance at $12.0bn (the 13th most valuable telecommunications brand). The overall market cap of the Vodafone Group as at March 2025 was circa $23 billion.</p>` },
    { title: 'Contractual Terms of the Transaction', content: `<p>In the brand licence agreements between VSSL and the operating companies, VSSL grants the operating companies a license to use the following intangibles in relation to the carrying on of the operating companies' businesses:</p>
<ul><li>The 'Brand'</li><li>The 'Brand Materials'</li><li>The 'Vodafone Name'</li></ul>
<p><strong>The Operating Company's Obligations:</strong> The contract confirms that the parties agree to implement a branding strategy in the local territory. The operating companies agree to use the brand as its brand identity for all purposes of business. The operating company undertakes to comply with VSSL's directions to the use of the brand and the brand materials, ensure the brand logo and brand is used in accordance with the brand guidelines, and agrees to not undertake any act which will impair, damage or be detrimental to the reputation or goodwill associated with Vodafone or the brand.</p>
<p><strong>VSSL Obligations:</strong> VSSL agrees to undertake, co-ordinate and implement various brand management functions, including: generating customer insights; leveraging the brand identity to develop and implement a global brand strategy; developing a brand identity; producing Vodafone product names; developing a communications strategy; designing and producing brand campaigns; coordinating international campaigns; negotiating sponsorship agreements; providing advice with respect to physical brand implementation; and maintaining all trademark applications and registrations.</p>` },
    { title: 'Functional Analysis — Development & Enhancement', content: `<p><strong>VSSL Global Brand Team ('GBT'):</strong> The GBT consists of a team of individuals based in Paddington, London. The GBT have overall Group responsibility for the worldwide brand strategy and the long-term positioning of the Vodafone brand. The activities of the GBT are wide-ranging, from setting the governance framework, developing the look and feel of the brand (i.e. the Brand Identity), enhancing the brand through specific brand initiatives and sponsorships, and playing a fundamental role in driving efficiencies and savings through their interactions with creative and media agencies.</p>
<p><strong>Brand Strategy:</strong> VSSL's GBT has designed, developed, and controls Vodafone's global brand positioning/strategy, positioned with the tagline "Together we can". The GBT has created a detailed 'Playbook', which includes all of the detailed strategic elements that operating companies should use to express the Vodafone brand across all channels and types of activity.</p>
<p><strong>Brand Identity:</strong> The GBT develop and maintain the global Brand Identity elements covering: Icons/Logos, Colours, Speechmark, Strapline, Typeface, Photography, Illustration, Iconography, and Tone of Voice. Detailed guidelines exist for touchpoint applications covering Advertising, Device and product guidelines, Co-branding and sponsorship, LGBT Guidelines, and Digital design.</p>
<p><strong>Brand Initiatives:</strong> Purpose-Led Vodafone — Vodafone has shifted to a "purpose-led" organisation. The GBT have developed a suite of 'Purpose' playbooks, assets and tools. Gigabit Network — dynamic visual identities to differentiate and elevate high performing networks. Other initiatives cover Smart Tech, Diversity, Inclusion for All, convergence and device launches.</p>
<p><strong>Sponsorship:</strong> The GBT has prioritised purpose-led partnerships and negotiated a partnership with WWF launched in November 2022, introducing the global platform "One Million Phones for the Planet". The GBT has appointed New Commercial Arts as its global strategic and creative agency partner.</p>
<p><strong>The Operating Company's Brand Team:</strong> The local brand teams are responsible for taking the brand guidance, strategy, assets and initiatives developed by the GBT, and activating the brand strategy in the local market via the execution of campaigns and brand communications that are localised to fit with the specific needs, purpose and culture of the local market.</p>` },
    { title: 'Functional Analysis — Maintenance, Protection & Exploitation', content: `<p><strong>Maintenance:</strong> Many of the identified functions and activities undertaken by the GBT and the local brand teams outlined in the Development and Enhancement sections also underpin the maintenance of the brand. The local brand teams are responsible for implementing the brand strategy in their local markets and developing brand plans in line with the global framework.</p>
<p><strong>Legal Protection:</strong> The Group IP legal team incurs the initial and ongoing cost of registering Vodafone's core trademarks (including the marks "Vodafone", Vodafone speech mark logo, "Together we can") and global product names. Generally, Vodafone Group bears the responsibility and cost of enforcing the Company's licensed brand against infringers globally. The local operating company legal teams bear the cost of maintaining a local portfolio of trademarks.</p>
<p><strong>Exploitation:</strong> Exploitation functions relate to the global strategy for exploiting the brand, and also the localisation strategy to execute the global brand strategy in the local market. The design and development of the Global Brand Framework and the Brand Identity and guidelines enable the exploitation of the global brand strategy in each market.</p>` },
    { title: 'Assets', content: `<p>The GBT provides continual knowledge, experience and know-how to the local markets in its capacity as local market expert consultants. The Vodafone brand site holds all assets which can be grouped as follows:</p>
<ul><li><strong>Documents:</strong> Playbooks spanning Strategy, Identity guidelines, Brand Initiatives, Sponsorship, Digital Media, plus best practice, case studies, training, toolkits, templates</li><li><strong>Images:</strong> Over 7,000 image assets spanning photography, icons, logos and templates</li><li><strong>Videos:</strong> Numerous video assets covering global sponsorships, products, services, Brand Initiatives</li><li><strong>Audio files:</strong> Including All Hands recordings, voice files, music files</li><li><strong>Fonts:</strong> Specific Vodafone fonts for all brand communications</li></ul>
<p><strong>Campaign Assets:</strong> Brand Initiatives, Sponsorship, Creative (digital assets for programmatic), and assets related to partnerships, seasonal events, and Metaverse.</p>
<p><strong>Touchpoint Assets:</strong> Assets across all touchpoints including digital, internal, point of sale, out of home advertising, print, retail, sponsorship and TV.</p>` },
    { title: 'Risks', content: `<p><strong>Marketplace Risks:</strong> Rapid technological change, rapid digital transformation, regulatory intervention, highly competitive markets, changing customer and societal expectations, and the impact of the COVID-19 pandemic.</p>
<p><strong>Strategic Risks:</strong> Both VSSL and the local operating companies assume the marketplace/strategic risks (both take on the upside/downside consequences), and both parties undertake specific functions to manage and mitigate such risks.</p>
<p><strong>Infrastructure or Operational Risks:</strong> The risk that costly marketing activities will prove unsuccessful, or the exploitation of the intangible is not effective in generating the necessary returns. The local operating companies are responsible for the local execution of the brand strategy.</p>
<p><strong>Financial Risks:</strong> Infringement risk, the risk that damage to brand reputation in one market could affect worldwide brand value. Foreign exchange risk for non-euro-denominated operating companies paying royalty fees to VSSL in Euros.</p>
<p><strong>Transactional Risks:</strong> Either party is entitled to terminate the agreement with immediate effect if the local operating company is unable to pay its debts or enters into liquidation, or commits a material breach.</p>` },
    { title: 'Transfer Pricing Method & Economic Analysis', content: `<p><strong>Method:</strong> Comparable Uncontrolled Price (CUP) Method — Internal CUP benchmarking. There are internal CUP transactions that take place between local Vodafone entities and independent third parties for use of the brand. KPMG reviewed all potential internal CUPs to consider their degree of comparability.</p>
<p><strong>Tested Party:</strong> VSSL, because it has a less complex functional analysis than the Company — VSSL is the licensor of the Vodafone brand and undertakes very specific functions with regards to its brand management and exploitation activities.</p>
<p><strong>Results:</strong> 6 final comparable agreements identified. Results fall within a relatively narrow range of 1.30% to 2.00%. The IQR is 1.40% to 1.70% with a median of 1.60%. The royalty rate of 1.55% charged by Vodafone on OpCo service revenues is consistent with arm's length pricing.</p>
<p>An external CUP benchmarking study was also performed using the IntangibleSpring database. No comparable external agreements were identified due to lack of comparability of third-party trademark licence agreements.</p>` }
  ],
  inca: [
    { title: 'The Material Controlled Transaction & Context', content: `<p>In common with many multinationals, the Vodafone Group has centralised certain activities to provide support to its main operations under Vodafone Group Services ("VGS"). Vodafone Group Services Limited ("VGSL") is a core entity responsible for the provision of central group services to the Operating Companies, characterised as a low risk service provider, with the service recipient being the entrepreneur.</p>
<p>VGSL either directly or through a "sub-contract" arrangement with other subsidiaries or via third parties provides these services. They can include back office support, datacentre services, sales support and marketing support, and IT consultancy services for Group Technology, Vodafone Business, Group Commercial and Group Support Functions.</p>
<p>Charges are made on a full cost plus mark-up basis and allocated across all service recipients based on an allocation key to ensure the charge is commensurate to the benefits derived by each service recipient. The mark-up applied for FY25 is:</p>
<ul><li>5% for strategy and directorate services</li><li>4% for all other services (including Datacentres)</li></ul>
<p>Where VGSL has sub-contracted services to other Group members or third parties, no further mark-up is added. If VGSL subsumes the third party service into a VGSL service, then the mark-up above is applied.</p>` },
    { title: 'Functional Analysis', content: `<p>The service activities comprise both support and centralised activities performed by: Vodafone Business; Group Commercial; Group Technology (including VB Products & Solutions); Group Support Functions; and Shared Service Centres.</p>
<p><strong>Group Commercial:</strong> Delivers revenue, margin, growth and customer experience across consumer customers. Provides 'Go to market' strategy, commercialisation of the differentiation strategy, and advisory services on pricing of group-wide service launches.</p>
<p><strong>Group Technology:</strong> Responsible for long-term technology strategy, maintaining Group IT platforms, standardisation and rationalisation of Group IT, data centre and hosting capabilities, and Cyber Security. From a Networks perspective: strategy and architecture, network planning, design/testing/acceptance, solution engineering, lifecycle management, implementation and delivery, customer experience excellence, and optimisation.</p>
<p><strong>Group Support Functions:</strong> Supports the Company through provision of various back office and support services, including specific expertise in finance, HR, Legal, External Affairs.</p>
<p><strong>Vodafone Business:</strong> Specialised business unit for global telecommunication service solutions to business customers. Includes VB International, Carrier Services, IoT, VB Products & Services (Cloud & Edge, Connectivity, Security, Solutions), and VB Marketing.</p>` },
    { title: 'Assets & Intangible Assets', content: `<p>The Company owns and operates the "active" local infrastructure such as antennae and cables, and transmission equipment. The Company also owns the licenses to operate on certain spectrum within their market. These factors create a significant barrier to entry for potential competitors. VGSL could not itself provide telecommunications without the input of the Company.</p>
<p>VGSL's services and primary functions are undertaken by its employees across Group Commercial, Vodafone Business, Group Technology and Group Support Functions departments. VGSL owns and operates datacentres and global service platforms on behalf of the Company.</p>
<p>VGSL does not own any non-routine intangible assets. The Vodafone Brand is licensed to the Company by Vodafone Sales & Services Ltd. under a separate contractual arrangement. VGSL owns some intangibles generated from technology-related activities, but grants the Company a non-exclusive paid up, non-transferable licence to use it.</p>` },
    { title: 'Risks', content: `<p><strong>Investment and Financing Risk:</strong> The decision to invest, how much and when, lies with the Company with advisory input from VGSL. The capital outlay on network infrastructure is significant.</p>
<p><strong>Market Risk:</strong> Typically borne by the Company. Includes increased competition, changes in consumer preferences, and inability to position products. Some measurement through KPIs is provided by VGSL.</p>
<p><strong>Commercial Risk:</strong> Related to normal operational activities. Due to the nature of VGSL's activities, the primary risk derives from the impact of central team decisions.</p>
<p><strong>Reputational Risk:</strong> Primarily manifests in the Company as the primary customer-facing and revenue-generating entity. VGSL itself suffers little reputational risk.</p>
<p><strong>Credit/FX Risk:</strong> Limited credit risk as services are related party. VGSL invoices in EUR, hence FX risks are considered low.</p>` },
    { title: 'Transfer Pricing Method & Economic Analysis', content: `<p><strong>Method:</strong> TNMM incorporating a full cost mark-up mechanism. The formula for VGSL's cost calculation is set out in Schedule 1 of the INCA.</p>
<p><strong>Tested Party:</strong> VGSL as the low risk service provider and least complex entity.</p>
<p><strong>Benchmarking:</strong> Services categorised into four groups, each benchmarked separately:</p>
<ul><li>IT Consulting: 15 comparables, NCP margin IQR 1.9% – 12.9%, median 5.0%</li><li>Sales & Marketing: 9 comparables, NCP margin IQR 1.9% – 8.1%, median 4.4%</li><li>Data Centre Services: 10 comparables, NCP margin IQR 3.0% – 9.6%, median 5.3%</li><li>Support Services: 11 comparables, NCP margin IQR 3.1% – 16.9%, median 9.1%</li></ul>
<p>The 4%–5% mark-ups applied by VGSL fall within the interquartile ranges of the benchmarking results.</p>` }
  ],
  procurement: [
    { title: 'The Material Controlled Transaction & Context', content: `<p>Vodafone Procurement Company Sarl ("VPC") was established in 2007 and began trading in 2008. Vodafone recognised that centralisation of procurement functions would deliver significant benefits including standardisation, sharing of best practice, improved supplier relationships and greater buying power and cost savings.</p>
<p>VPC performs activities that go beyond strategic sourcing and purchase-to-pay procurement, including logistics, ESG initiatives, and innovation. VPC manages spend in four main categories: IT, Networks, Commercial Services and Device Operations.</p>
<p><strong>Pricing groups:</strong></p>
<ul><li>"Core" procurement: IT, networks, and some commercial & services spend — 3% commission (from FY25)</li><li>"Terminals" (Device Operations): accessories, handsets, vouchers — 1% commission (from FY25)</li><li>"Other Non-Core": real estate, limited-involvement spend — 1% commission (from FY25)</li></ul>` },
    { title: 'Functional Analysis — VPC Functions', content: `<p><strong>Sourcing Process (7 steps):</strong> Evaluation of business requirements, supplier identification and evaluation, determine sourcing strategy, sourcing process (RFx), contract negotiations, supplier management, and supplier performance evaluation.</p>
<p><strong>Category Management:</strong> Spend split into IT, networks, commercial services, and devices. Each subcategory managed by a category manager delivering action-orientated business cases with EBIT impact and competitive advantage.</p>
<p><strong>Design2Cost Laboratory:</strong> Created in 2017 with 13 trained D2C experts. Establishes cost-per-component listings through bottom-up analysis. Enables fact-based conversations with suppliers and shifts negotiation focus from price to cost basis.</p>
<p><strong>Logistics:</strong> VPC is responsible for end-to-end supply chain within the Group. A central warehouse in Luxembourg began construction in June 2025 (fully operational 2026), which will remove 80% of logistic partners.</p>
<p><strong>ESG:</strong> Asset re-use through reverse supply-chains, long-term renewable energy contracts (targeting 50-60% of OpCo energy demand in Europe from renewables), and carbon reduction targets embedded in category manager KPIs and tender processes.</p>
<p><strong>Risk Control:</strong> VPC manages geopolitical and macroeconomic risks including mitigating cost inflation (strategies include increasing order sizes, offshore supplier teams, commercial power), managing energy price volatility (hedging activities, PPAs for 10-15 years), and supply chain security.</p>` },
    { title: 'Assets & Risks', content: `<p><strong>Intangible Assets:</strong> Procurement know-how, D2C Lab expertise, ~100 dashboards (€7m CAPEX, €3-4m p.a. running costs), catalogues for standardised procurement, various manuals, and the Price Manager platform for real-time pricing management.</p>
<p><strong>Key Risks:</strong> The OpCos make the ultimate decision about what products/services are procured centrally through VPC or locally. OpCos have the financial capacity to bear the economically significant risks. VPC performs important risk control and mitigation functions including: supply chain security, mitigating inflation, inventory risk, energy risk, ESG and reputational risk, warranty/product liability risk, commitment risk, and credit risk.</p>` },
    { title: 'Transfer Pricing Method & Economic Analysis', content: `<p><strong>Primary Method — CUP:</strong> Third-party sourcing agreements from RoyaltyStat and ktMINE databases. Full range of arm's length commission rates: 1% to 11%, IQR 3.4% to 6.0%.</p>
<p><strong>Corroborative Method — TNMM:</strong> 10 wholesaler comparables identified. Inventory holding adjustment performed to improve comparability. Full range of gross commission rate equivalents: 0.8% to 6.9%, IQR 1.4% to 4.6%.</p>
<p><strong>Gain Share Analysis:</strong> 10 sources identified, all referencing a 50/50 split of gains (or losses).</p>
<p><strong>Conclusion:</strong> Core commission of 3% falls within IQR of CUP analysis. Non-core and Terminals commissions of 1% fall within the full range of CUP and IQR of TNMM analysis. Commission rates are consistent with arm's length pricing.</p>` }
  ],
  roaming: [
    { title: 'The Material Controlled Transaction & Context', content: `<p>Vodafone Roaming Services Sarl ("VRS") began operating as a roaming hub on 1 April 2009. It is the Vodafone Group's primary interface with the wholesale roaming market, acting as a wholesale market intermediary for voice, SMS, data and M2M.</p>
<p><strong>Transaction 1 — VRS Intermediation Fee (OpCo to Third Party):</strong> For inbound traffic, VRS purchases traffic capacity from the Company and sells to third party MNOs. For outbound traffic, VRS purchases from third party MNOs and sells to the Company. The intermediation fee is deducted/added from the negotiated rate.</p>
<p><strong>Transaction 2 — VRS Intermediation Fee (OpCo to OpCo):</strong> VRS settles inbound/outbound traffic between two Vodafone OpCos on a net monthly basis. VRS separately charges its intermediation fee based on outbound traffic.</p>
<p><strong>Transaction 3 — Inter Operator Tariff (IOT):</strong> The intra-group IOT wholesale roaming rate paid by operating companies for roaming between Vodafone Group OpCos. VRS negotiates IOTs with third party operators and adjusts internal rates in line with external rates.</p>` },
    { title: 'Functional Analysis — VRS Functions', content: `<p><strong>Strategy:</strong> VRS sets the strategic direction of Vodafone's wholesale roaming business, developing detailed functional plans for service openings roadmap, commercial marketing plan, HR strategy, and commercial policies.</p>
<p><strong>Negotiation & Contracting:</strong> VRS manages negotiation and execution of roaming contracts. The Wholesale Trading team (12 employees in Luxembourg) negotiates IOTs with third party MNOs, balancing revenue maximisation with footprint maintenance. Nearly all IOT agreements have minimum volume/revenue commitments.</p>
<p><strong>Hub Operator:</strong> VRS operates the 2G/3G/4G signalling hub infrastructure (hosted in Germany and Italy) — a fully redundant and fully meshed architecture. VRS is responsible for implementing, maintaining and upgrading the technical signalling systems, including 5G and VoLTE rollout.</p>
<p><strong>Finance & Data Exchange:</strong> VRS settles inbound/outbound payments through the Vodafone Financial Clearing House (FCH), handling data clearing, financial clearing and settlement, and financial reporting.</p>` },
    { title: 'Assets & Risks', content: `<p><strong>Assets:</strong> Technical roaming platform, Real Time Monitoring and Fraud Detection tools (economically owned by VRS). OpCos provide domestic networks, licences, and customer base.</p>
<p><strong>Credit Risk:</strong> Fully managed and borne by VRS. Bad debt provision reduced from €20.3m (FY24) to €18.4m (Jan 25).</p>
<p><strong>Investment Risk:</strong> VRS bears the costs of developing/upgrading the roaming hub and tools.</p>
<p><strong>Operational Risk:</strong> VRS is accountable for operational issues. Bears significant working capital costs (net outbound). Bears risk of technical platform failure.</p>
<p><strong>Pricing Risk:</strong> VRS actively manages pricing risk on behalf of OpCos by leveraging scope, scale and dedicated expert negotiators.</p>` },
    { title: 'Transfer Pricing Method & Economic Analysis', content: `<p><strong>Transactions 1 & 2 — TNMM:</strong> Operating Margin selected as Net Profit Indicator. Third parties performing comparable buy/sell intermediary functions identified for benchmarking.</p>
<p><strong>Transaction 3 — CUP Method:</strong> Internal CUP agreements between VRS and third parties identified as having close comparability to intra-group transactions. Intra-group IOTs are adjusted in line with external rates to ensure arm's length pricing.</p>
<p><strong>Tested Party:</strong> VRS selected for all transactions as the least complex entity.</p>` }
  ],
  financing: [
    { title: 'The Material Controlled Transaction & Context', content: `<p>The Vodafone Group and its operating companies have significant cash flow and funding requirements. If the Company requires additional funding it can request this from the Vodafone Financing Entities ("VFEs"). This reflects the Group's aim of reinvesting cash internally wherever possible, assisting in structural and strategic goals by ensuring liquidity in the short term and cost efficiency across the Group in the long term.</p>
<p>The VFEs provide debt financing in exchange for repayment of principal, interest and commitment fees. Many transactions are structured as Revolving Credit Facilities (RCFs) allowing draw-down, repayment and redraw.</p>
<p><strong>Key terms set per deal:</strong> Amount, currency, reference interest rate, tenor, credit margin, and commitment fee rate.</p>
<p><strong>Standardised terms:</strong> Events of default, negative pledges, prepayment options, commitment fee (as % of all-in credit margin), penalty interest for late payments.</p>` },
    { title: 'Characteristics & Functional Analysis', content: `<p><strong>Five key pricing characteristics:</strong> Geographic location (country risk), industry (telecoms typically lower risk due to tangible assets), currency, maturity/tenor, and credit rating of the borrower.</p>
<p><strong>Company Functions:</strong> Analyses its own financial requirements, approaches VFEs to request financing, ensures scheduled payments are made on time, and abides by loan covenants.</p>
<p><strong>VFE Functions:</strong> Considers applications via a robust governance policy. Group Treasury analyses credit risk by establishing a standalone credit rating. VFEs perform benchmarking analysis to establish arm's length credit margins. The VFE board considers: size of loan, purpose, repayment term, recommended interest rate, hedging/swap costs, and covenant requirements.</p>` },
    { title: 'Risks', content: `<p><strong>Strategic Risk:</strong> Credit risk — the risk that the Company will not meet its financial obligations. The VFE would not approve finance likely to result in over-leveraging.</p>
<p><strong>Credit Risk:</strong> Assessed thoroughly by the lending VFE during pricing stage. Loan agreements detail protections for the Lender. VFEs monitor covenant compliance and annual credit rating reviews.</p>
<p><strong>Liquidity Risk:</strong> VFEs bear liquidity risk on undrawn facility elements, managed by monitoring commitments vs liquid assets available.</p>
<p><strong>Foreign Exchange Risk:</strong> Where funding creates FX exposure, TQP02 requires 100% hedging via cross currency interest rate swaps or FX swaps with VG Plc.</p>` },
    { title: 'Transfer Pricing Method & Economic Analysis', content: `<p><strong>Method:</strong> CUP Method — Four-stage process:</p>
<ol><li>Carry out credit rating for the borrower including adjusting for implicit support of the Group's parent</li><li>Source relevant comparables for third party loans with same/similar rating and similar terms</li><li>Make necessary adjustments to improve comparability and derive arm's length range</li><li>Price the tested party loan within the arm's length range</li></ol>
<p><strong>Commitment Fees:</strong> External CUPs available as third parties publish RCF terms (including commitment fees) on the SEC website.</p>
<p><strong>Tested Party:</strong> Since CUP method is used, selection of a tested party is not required.</p>` }
  ],
  vantage: [
    { title: 'The Material Controlled Transaction & Context', content: `<p>In July 2019, Vodafone announced its intention to separate out its European tower infrastructure operations. The Vantage Towers restructuring involved the demerger of passive infrastructure assets from the Vodafone operating companies into newly registered tower companies.</p>
<p>The Group underwent an IPO on the Frankfurt Stock Exchange on 18 March 2021. As of March 2023, Vodafone entered into a co-controlled partnership with KKR & GIP. By March 2025, the Consortium held 44.66% of the stake.</p>
<p><strong>Transaction 1 — Main commercial services:</strong> TowerCo provides site access and passive infrastructure support equipment under an anchor tenancy MSA, with base fees per site per annum for Ground-Based Towers and Rooftop Towers (both legacy and built-to-suit sites).</p>
<p><strong>Transaction 2 — Other service provision:</strong> Long-term support services under the LTA (Finance, HR, Legal, Infrastructure operations, Supply chain, Commercial, Technology) at cost plus 4%.</p>` },
    { title: 'Functional Analysis', content: `<p><strong>TowerCo Assets:</strong> Passive infrastructure (mounting equipment, physical towers, masts, poles, access facilities, foundation/fencing, surveillance, cable routing, shelter/service rooms, cooling, power, emergency equipment) plus intangible assets (lease agreements, access rights, landlord/supplier lists, Vantage Towers trademark).</p>
<p><strong>TowerCo Functions:</strong> Business development, site acquisitions, lease portfolio management, infrastructure deployment and design, operations and maintenance, EMF management.</p>
<p><strong>Key Risks borne by TowerCo:</strong> Active-sharing risk, lease risk, passive infrastructure technology risk. The Company bears: regulatory risk, active equipment technology risk.</p>
<p><strong>Conclusion:</strong> The fundamental driver of value is the portfolio of passive infrastructure assets. TowerCo performs value-adding functions directly related to asset ownership. The Company's operating licences and tenancy revenues are also significant value contributors.</p>` },
    { title: 'Transfer Pricing Method', content: `<p><strong>Method:</strong> TNMM — A set of comparable tower infrastructure service companies was identified to benchmark an appropriate profit level for TowerCo.</p>
<p><strong>Tested Party:</strong> TowerCo as the simpler entity in regard to functions, assets and risks.</p>
<p>A multi-year analysis has been performed in respect of the controlled transaction.</p>` }
  ],
  cashpool: [
    { title: 'The Material Controlled Transaction & Context', content: `<p>Cash pooling is a common treasury management tool employed by multinational enterprises. Under the Vodafone Group arrangement, participating companies can draw down or deposit cash with centrally held bank accounts held by Vodafone Shared Services Budapest ("VSSB").</p>
<p>Cash Pooling is a structure whereby the balances of the companies' bank accounts are aggregated by currency and transferred daily to VSSB's bank account. This minimises both the group's Counterparty Risk Exposure (CPR) and external funding requirements by using surplus cash internally to fund deficits.</p>
<p><strong>Interest rates:</strong> Deposits priced at reference rate less 0.05% margin. Borrowings at reference rate plus 0.125% margin. Balances settled monthly against long-term deposit or loan arrangements. Under Group policy, operating companies must not hold more than €5 million overnight without prior approval.</p>` },
    { title: 'Functional Analysis & Risks', content: `<p><strong>VSSB/VG Plc Functions:</strong> Manage aggregate short-term positions, provide additional short-term funding if required, operate automated financial systems for efficient cash pooling, manage relationships with preferred banks.</p>
<p><strong>Company Functions:</strong> Generate cash balances through ordinary business activities, deposit/withdraw at discretion, request additional funding under MCA at short notice.</p>
<p><strong>Key Risks:</strong> VG Plc assumes credit risk (in event of bank counterparty default), liquidity risk (committed to provide funding), and manages counterparty risk exposure across the Group. Transaction risk minimised through three preferred banks. The Company does not commit to provide cash on specific dates.</p>` },
    { title: 'Transfer Pricing Method', content: `<p><strong>Method:</strong> CUP Method — Pricing based on market reference rate. The spread between deposit and borrowing rates remunerates VSSB/VG Plc for liquidity and debt management services. The spread has been benchmarked against external CUP data and falls in the interquartile range, in line with the median.</p>
<p><strong>Tested Party:</strong> The participating company as the lowest risk entity.</p>` }
  ],
  carrier: [
    { title: 'The Material Controlled Transaction & Context', content: `<p>Vodafone Carrier Services ("VCS") consolidated the wholesale international carrier services businesses. Vodafone Enterprise Global Limited ("VEGL") is the contracting legal entity acting as a hub for both third party and OpCo traffic for international voice and SMS.</p>
<p>VCS implemented International Voice Connect (IVC), consolidating multiple supplier arrangements into one contract per supplier to: reduce costs of international termination; improve efficiency by reducing contracts; and improve call quality by keeping Vodafone-to-Vodafone calls on-net.</p>
<p><strong>How it works:</strong> When a Vodafone customer makes an international call, the OpCo passes it to VCS who routes it to a third party carrier for termination. VCS leverages call volumes to encourage return traffic, reducing the net cost of outgoing calls. OpCos are charged termination fees based on the forecast standard cost to a particular destination.</p>` },
    { title: 'Functional Analysis & Risks', content: `<p><strong>VCS Functions:</strong> Negotiations with third party carriers/aggregators, operating the routing platform/A2P SMS hub, fraud management (near real-time monitoring), setting parameters on call routing through session border controllers.</p>
<p><strong>Company Functions:</strong> Operates as entrepreneur in local market, sets objectives and targets for international voice/SMS business, is economic owner of network assets and SBCs, owns the retail customer base.</p>
<p><strong>Risks:</strong> Market risk managed and borne by the Company. VCS assumes: pricing risk (actively manages on behalf of OpCos), limited reputational risk, foreign exchange risk (absorbed monthly), commitment risk (monitors traffic volumes), and credit risk in third-party-to-third-party business.</p>` },
    { title: 'Transfer Pricing Method', content: `<p><strong>Method:</strong> CUP Method — Termination rates for OpCo-to-OpCo transactions benchmarked against regulated termination rates and third-party deals.</p>
<p><strong>Tested Party:</strong> VCS as the least complex party in the transaction.</p>` }
  ],
  secondments: [
    { title: 'The Material Controlled Transaction & Context', content: `<p>The Vodafone Group employs over 80,000 people. From time to time, entities may require the experiences and skills of employees from other Group entities. This is achieved via secondments. The Company can be both provider and recipient of seconded employees.</p>
<p>Under the standard secondment agreements, the Employer seconds its employee to the Host entity on an exclusive and full-time basis. The Host reimburses the Employer the total amount paid (salary, annual bonus, tax payments, social security contributions, overseas allowances, pensions, medical, insurance, and external tax provider costs).</p>
<p><strong>Policy:</strong> No mark-up is applied to secondments between Vodafone Group entities. The OECD acknowledges that in many cases the appropriate arm's length compensation for seconded employees will be the only payment required. The Employer also benefits from employee development, enhanced skillsets, and fostered inter-entity relationships.</p>` }
  ],
  handset_rec: [
    { title: 'The Material Controlled Transaction & Context', content: `<p><strong>Transaction 1 — Sale of Handset Receivable:</strong> When retail customers enter into a mobile phone contract, they may receive a handset up-front in return for monthly payments (typically 18-36 months). The Company sells handset receivable assets to third parties via Vodafone Overseas Finance Limited ("VOFL") at a small discount (~1%).</p>
<p><strong>Transaction 2 — Monthly Contributions:</strong> Following the sale, the Company collects monthly payments from customers and remits them to VOFL, who forwards to the third party. VOFL undertakes very limited functions (no transfer pricing implications on this aspect).</p>
<p><strong>Example:</strong> Customer enters 24-month contract with €1,200 handset. After first instalment, the €1,150 receivable is sold to a third party via VOFL at 1% discount. Third party pays €1,138.61 to VOFL who forwards to the Company. Customer delinquent payment risk is borne by the third party (subject to maximum loss provision).</p>` }
  ],
  insurance: [
    { title: 'The Material Controlled Transaction & Context', content: `<p>Vodafone Insurance Limited ("VIL") is Vodafone's insurance company, registered and tax resident in Malta, established in 2005. VIL has seven dedicated insurance individuals and various committees (Investment, Underwriting, Risk Management, Audit).</p>
<p><strong>Transaction 1A:</strong> VIL directly underwrites property and casualty risk for Vodafone OpCos.</p>
<p><strong>Transaction 1B:</strong> VIL indirectly underwrites property and casualty risk via local fronting insurers (who reinsure 100% of risk to VIL).</p>
<p><strong>Transaction 2:</strong> VIL indirectly underwrites employee benefits and life insurance risk via local fronting insurers.</p>
<p>VIL directly insures 100% of the risk and enters into a cross-class reinsurance programme which caps VIL's risk exposure. VIL currently retains approximately €150m risk per annum for property and casualty, and 100% of employee benefit risk (except catastrophic risk for life and disability).</p>` },
    { title: 'Functional Analysis', content: `<p><strong>Product Management/Development:</strong> VIL issues complex, tailored policies for Vodafone subsidiaries' unique risks. VIL actively seeks new lines of insurance (e.g. patent infringement, cyber products) and can incubate risk until the third party market offers reasonable terms.</p>
<p><strong>Underwriting:</strong> VIL Board determines underwriting policy and risk parameters. The Underwriting Committee advises on risk classification, selection, pricing. VIL determines risk retention levels and negotiates external reinsurance.</p>
<p><strong>Risk Management:</strong> VIL operates specific processes and tools: Risk Committee, Underwriting Committee, Audit Committee, detailed policies and procedures, regular Board meetings monitoring performance, and competent qualified staff.</p>
<p><strong>Contract & Claims Management:</strong> VIL monitors financial performance, reviews major outstanding claims, establishes loss reserves, negotiates fronting insurer contracts, and engages third-party claims administrators.</p>
<p><strong>Asset Management:</strong> VIL Investment Committee oversees investment strategy. Surplus funds invested in corporate and government bonds, ensuring security of principal while maintaining sufficient liquidity for solvency requirements and claims.</p>` },
    { title: 'Risks & Accurate Delineation', content: `<p><strong>Insurance Risk:</strong> VIL assumes the insurance risk. Has suffered significant multi-million Euro claims (switch building fires, floods, earthquakes, business interruption, cyber claims, patent infringement).</p>
<p><strong>Market/Investment Risk:</strong> Risk of lower than expected returns on investments, managed by the Investment Committee.</p>
<p><strong>Credit Risk:</strong> VIL bears risk if premiums are not collected. Only engages with reinsurers with minimum rating of A-.</p>
<p><strong>OECD Captive Insurance Criteria (para 10.199):</strong> VIL meets all indicators: diversification and pooling of risk across multiple business lines and geographies; real economic impact for the Group; regulated entity (MFSA/Solvency II); insured risks would otherwise be insurable externally; requisite skills and experience; and real possibility of suffering losses (up to €150m p.a.).</p>` },
    { title: 'Transfer Pricing Method', content: `<p><strong>Primary Method — Actuarial Analysis (OECD para 10.219):</strong> VIL employs a sophisticated actuarial approach to setting insurance premiums, covering expected losses, administrative costs, and profit for return on capital.</p>
<p><strong>Corroborative Method — TNMM/Return on Capital (OECD para 10.220):</strong> VIL's return on capital benchmarked against comparable insurers to corroborate the actuarial analysis.</p>
<p><strong>Tested Party:</strong> VIL, because it undertakes very specific functions and activities with regards to its insurance business, having a less complex functional analysis than the OpCo.</p>` }
  ],
  deposits: [
    { title: 'The Material Controlled Transaction & Context', content: `<p>Each OpCo has local external bank accounts limited to €5m overnight (TQP02). Balances are swept into the cash pooling arrangement with VSSB. Cash the Company wishes to hold is typically deposited with VG Plc.</p>
<p>VG Plc. usually invests excess funds with Money Market Funds (typically AAA rated). The larger transaction sizes allow the Group to negotiate better terms. Interest rate on monthly call deposits is based on EURIBOR, benchmarked against Bloomberg deposit rates.</p>
<p><strong>Risks:</strong> VG Plc. assumes credit risk (deposit position remains with Plc. in event of Money Market Fund default) and liquidity risk (committed to allow withdrawal on demand). Plc.'s liquidity risk is managed by Group Treasury.</p>` }
  ],
  guarantees: [
    { title: 'The Material Controlled Transaction & Context', content: `<p>A guarantee is an undertaking by a guarantor to answer for the payment or performance of another entity's debt or obligation. Types include financial guarantees, non-financial (commercial) guarantees, and performance guarantees (Vodafone does not issue these).</p>
<p><strong>Guarantee Model (small guarantees):</strong> VG Plc. enters into an uncommitted revolving guarantee Facility with a relationship bank. VG Plc. indemnifies the bank. The OpCo counter-indemnifies VG Plc. At the OpCo's request, the bank issues the guarantee. Administration performed by VOIS Budapest.</p>
<p><strong>Large guarantees (>€5m):</strong> Group Treasury achieves competitive pricing through a tender process with relationship banks, ensuring approval in accordance with internal governance.</p>
<p><strong>Purpose:</strong> Enhance control over contingent liabilities, increase operational efficiencies, and retain the value of the credit differential between the Group and individual OpCos.</p>` },
    { title: 'Functional Analysis & Risks', content: `<p><strong>VG Plc/Group Treasury:</strong> Manages liquidity position, invoices OpCos for utilisation, analyses OpCo credit risk and determines implied credit ratings, manages bank relationships.</p>
<p><strong>OpCo:</strong> Holds relationships with customers/beneficiaries, assesses need for guarantees, reviews and accepts terms.</p>
<p><strong>Risks:</strong> VG Plc assumes credit risk (indemnifies bank in event of OpCo default) and potential liquidity risk (if outstanding guarantee value causes liquidity event). Transactional risk minimised through centralised process with preferred relationship banks.</p>` },
    { title: 'Transfer Pricing Method', content: `<p><strong>Method:</strong> Chapter X of OECD Guidelines identifies pricing approaches for guarantees: CUP Method, Yield Approach, and Cost Approach. The adopted approach calculates the benefit that the guaranteed party receives from the guarantee.</p>
<p><strong>Tested Party:</strong> The OpCo, because the approach calculates the benefit the guaranteed party receives.</p>` }
  ],
  handset_ins: [
    { title: 'The Material Controlled Transaction & Context', content: `<p>Vodafone operates handset insurance businesses ultimately reinsured by VIL (Malta). The customer is offered insurance at point of sale. A third-party fronting insurer agrees contract terms. The OpCo collects the premium and retains a commission. VIL books the net profit/loss after OpCo commission, fronting fee, IPT and claims/logistics costs.</p>
<p><strong>OpCo Commission Rate:</strong> Determined annually via a 4-step process: (1) Calculate Residual Profit for current and next FY, (2) Divide by Net Premium to get Profit Pool %, (3) Multiply by target Profit Split Ratio of 70%, (4) Average the two years. The final percentage is the OpCo Commission Rate.</p>` },
    { title: 'Functional Analysis', content: `<p><strong>VIL:</strong> Product management/development (coverage levels, speed of replacement, device-specific plans, pricing, excess charges, SIM-only products, business plans). Underwriting insured risk (accepts up to 100% of insurance risk). Risk management and reinsurance. Contract and claims management (integrated EIP software platform). Asset management (Investment Committee).</p>
<p><strong>OpCo:</strong> Local distribution through retail stores and online channels (under CCE regulations which significantly limit sales activities). Collects premiums. Bears mis-selling/reputational risk. Shares commercial risk with VIL through commission tied to premiums.</p>` },
    { title: 'Transfer Pricing Method', content: `<p><strong>Method:</strong> Internal CUP — Based on comparable arrangements available following FY25 corporate M&A activity. VIL engages in both controlled and uncontrolled transactions with sufficient comparability.</p>
<p><strong>Tested Party:</strong> VIL, as it has arrangements with both third parties and related parties that are sufficiently comparable.</p>` }
  ],
  shared_ops: [
    { title: 'The Material Controlled Transaction & Context', content: `<p>With effect from 1 April 2024, the Company engaged in intercompany transactions with Vodafone Shared Operations Ltd ("VSOL"). As part of a strategic partnership with Accenture, Vodafone designed a new operating and pricing model.</p>
<p><strong>Fully transitioned services:</strong> PxQ (Price x Quantity) pricing mechanism — fixed unit price established annually, charged based on actual consumption volumes (e.g. invoices processed, support tickets handled).</p>
<p><strong>Partially transitioned services:</strong> Traditional cost-plus methodology with mark-up on actual costs.</p>
<p><strong>Service Towers:</strong> Corporate Functions Service Line (CFSL: ~3,500 headcount), Business/CARE (~10,000 personnel), Intelligent Operations (IO: project-based), TVOIS (technology solutions, 15,000+ employees), Digital & IT (D&IT).</p>` },
    { title: 'Functional Analysis & Risks', content: `<p><strong>VSOL Strategy:</strong> VSOL CEO drives strategy, supported by General Management Team. Key decisions include: service optionality, commercial policy, deal pricing, inflation indices, service excellence, profit/loss treatment, sourcing options and transformation priorities.</p>
<p><strong>Demand Forecasting Risk:</strong> Actual demand may differ from forecast. Company can adjust ±10%. VSOL employs resources based on forecasts that might not materialise. Managed by mandating minimum service levels during transition.</p>
<p><strong>Cost Forecasting Risk:</strong> Uncertainty in predicting fully loaded cost base used to calculate fixed Price (P). Influenced by FX fluctuations, cost allocation accuracy, Production Entity estimates. Higher during transition to new model.</p>
<p><strong>Conclusion:</strong> For fully transitioned services, VSOL is a risk-taking service provider managing demand and cost forecasting risks. For partially transitioned services, VSOL is a limited-risk service provider charged under INCA methodology.</p>` },
    { title: 'Transfer Pricing Method', content: `<p><strong>Method:</strong> TNMM incorporating a full cost mark-up mechanism.</p>
<p><strong>Tested Party:</strong> VSOL as the least complex entity. For fully transitioned services (PxQ), VSOL manages economically significant risks. For partially transitioned services, VSOL is a limited-risk provider.</p>` }
  ],
  other_mat: [
    { title: 'Context', content: `<p>Other material intercompany transactions not covered by the specific modules above are documented in this section. Each transaction is assessed on a case-by-case basis to determine the most appropriate OECD transfer pricing method.</p>` }
  ],
  other_immat: [
    { title: 'Context', content: `<p>During the year the Company entered into other smaller transactions that were either immaterial in size or intra-country which carry limited Transfer Pricing risk. These transactions are listed but not analysed further.</p>` }
  ]
};


export const SAMPLE_CSV = `Entity Name,Counterparty Name,Counterparty Country,Transaction Type,Currency,Transaction Amount
Vodafone Ireland Ltd,Vodafone Sales & Services Ltd,United Kingdom,Brand Royalty,EUR,-18500000
Vodafone Ireland Ltd,Vodafone Group Services Ltd,United Kingdom,INCA - Group Technology,EUR,-12300000
Vodafone Ireland Ltd,Vodafone Group Services Ltd,United Kingdom,INCA - Group Commercial,EUR,-4200000
Vodafone Ireland Ltd,Vodafone Group Services Ltd,United Kingdom,INCA - Group Support Functions,EUR,-3100000
Vodafone Ireland Ltd,Vodafone Group Services Ltd,United Kingdom,INCA - Vodafone Business,EUR,-1850000
Vodafone Ireland Ltd,Vodafone Procurement Company Sarl,Luxembourg,Procurement - Core,EUR,-8750000
Vodafone Ireland Ltd,Vodafone Procurement Company Sarl,Luxembourg,Procurement - Terminals,EUR,-2400000
Vodafone Ireland Ltd,Vodafone Procurement Company Sarl,Luxembourg,Procurement - Non-Core,EUR,-960000
Vodafone Ireland Ltd,Vodafone Roaming Services Sarl,Luxembourg,Roaming - Outbound,EUR,-6800000
Vodafone Ireland Ltd,Vodafone Roaming Services Sarl,Luxembourg,Roaming - Inbound,EUR,9200000
Vodafone Ireland Ltd,Vodafone Investments Luxembourg Sarl,Luxembourg,Financing - Loan Interest,EUR,-5600000
Vodafone Ireland Ltd,Vodafone Investments Luxembourg Sarl,Luxembourg,Financing - Commitment Fee,EUR,-420000
Vodafone Ireland Ltd,Vodafone Shared Services Budapest,Hungary,Multi-Currency Cash Pooling,EUR,-320000
Vodafone Ireland Ltd,Vodafone Enterprise Global Ltd,United Kingdom,Carrier Services - Voice,EUR,-1450000
Vodafone Ireland Ltd,Vodafone Enterprise Global Ltd,United Kingdom,Carrier Services - SMS,EUR,-400000
Vodafone Ireland Ltd,Vodafone Insurance Limited,Malta,Corporate Insurance - Property & Casualty,EUR,-1650000
Vodafone Ireland Ltd,Vodafone Insurance Limited,Malta,Corporate Insurance - Employee Benefits,EUR,-450000
Vodafone Ireland Ltd,Vodafone Group Plc,United Kingdom,Guarantees,EUR,-175000`;

