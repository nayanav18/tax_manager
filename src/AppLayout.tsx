import { ALL_MODULES, MODULE_BOILERPLATE } from '../data/modules';

export default function Sidebar({ currentStep, selectedModules, activeModuleTab, setActiveModuleTab, goToStep, localInputs }) {
  const steps = [
    [1, 'Market Setup'],
    [2, 'Upload Transactions'],
    [3, 'Module Input'],
    [4, 'Review & Export'],
  ];
  const mods = ALL_MODULES.filter(m => selectedModules.has(m.id));

  const hasModuleInput = (mod) => {
    const bp = MODULE_BOILERPLATE[mod.id];
    return bp.localFields.some(f => (localInputs[f.id] || '').trim().length > 0);
  };

  return (
    <aside className="sidebar">
      <ul className="step-list">
        {steps.map(([step, label]) => (
          <li
            key={step}
            className={`step-item ${currentStep === step ? 'active' : ''} ${currentStep > step ? 'completed' : ''}`}
            onClick={() => goToStep(step)}
          >
            <span className="step-num">{step}</span> {label}
          </li>
        ))}
      </ul>

      <h3>Selected Modules</h3>
      <ul className="module-list expanded">
        {mods.length === 0 ? (
          <li className="module-item" style={{ color: 'rgba(255,255,255,.3)', paddingLeft: 24, fontStyle: 'italic' }}>
            Upload CSV to see modules
          </li>
        ) : mods.map(mod => (
          <li
            key={mod.id}
            className={`module-item ${mod.id === activeModuleTab ? 'active' : ''}`}
            onClick={() => { setActiveModuleTab(mod.id); goToStep(3); }}
          >
            <span className={`dot ${hasModuleInput(mod) ? 'filled' : 'empty'}`} />
            {mod.section} {mod.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}
