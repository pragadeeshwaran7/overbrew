/**
 * Overbrewed — Independent AI Engineering Studio
 * Interactive Prototype Logic & Experience Controller
 */

// Reset scroll to top on clean reload
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
if (window.location.hash) {
  history.replaceState(null, document.title, window.location.pathname + window.location.search);
}
window.scrollTo(0, 0);

// FinTwin Hero Interactive Simulation Data
const SCENARIOS = {
  base: {
    runway: '18.4 Mo',
    runwaySub: '+14% YoY trajectory',
    runwayClass: 'positive',
    gap: '₹12.4 L',
    gapSub: 'Normal operational buffer',
    gapClass: 'neutral',
    solvency: '94.2 / 100',
    solvencySub: 'Prime Resilient',
    solvencyClass: 'positive',
    leaks: '0 Detected',
    leaksSub: '142 ledger lines reconciled',
    leaksClass: 'positive',
    chartPathArea: 'M 0,85 Q 90,75 180,80 T 360,55 T 540,45 T 720,25 L 720,120 L 0,120 Z',
    chartPathLine: 'M 0,85 Q 90,75 180,80 T 360,55 T 540,45 T 720,25',
    log: '<strong>LIVE TELEMETRY VERIFIED:</strong> Ingested real-time banking feeds and ERP ledger. Working capital runway exceeds 18 months under current burn rate. All disbursements validated against purchase orders with zero anomalies.'
  },
  shock: {
    runway: '11.2 Mo',
    runwaySub: 'Defensive buffer active',
    runwayClass: 'alert',
    gap: '₹46.2 L',
    gapSub: 'Receivables delay projected',
    gapClass: 'alert',
    solvency: '78.6 / 100',
    solvencySub: 'Moderate Volatility',
    solvencyClass: 'alert',
    leaks: '1 Flagged',
    leaksSub: 'Inactive vendor account alert',
    leaksClass: 'alert',
    chartPathArea: 'M 0,85 Q 90,75 180,95 T 360,105 T 540,90 T 720,75 L 720,120 L 0,120 Z',
    chartPathLine: 'M 0,85 Q 90,75 180,95 T 360,105 T 540,90 T 720,75',
    log: '<strong>STRESS TEST TRIGGERED:</strong> -8.5% gross margin shock and 45-day collection delay simulated. FinTwin identifies runway compression; recommends gating non-essential vendor outlays to maintain liquidity above 11 months.'
  },
  growth: {
    runway: '14.8 Mo',
    runwaySub: 'Self-sustaining runway',
    runwayClass: 'positive',
    gap: '₹28.0 L',
    gapSub: 'Capex deployment matched',
    gapClass: 'neutral',
    solvency: '89.4 / 100',
    solvencySub: 'Expansion Regime',
    solvencyClass: 'positive',
    leaks: '0 Detected',
    leaksSub: 'Capacity models verified',
    leaksClass: 'positive',
    chartPathArea: 'M 0,85 Q 90,75 180,70 T 360,40 T 540,30 T 720,15 L 720,120 L 0,120 Z',
    chartPathLine: 'M 0,85 Q 90,75 180,70 T 360,40 T 540,30 T 720,15',
    log: '<strong>EXPANSION SCENARIO:</strong> ₹1,500 L capex deployment modeled against cash flow seasonality. Operational margins absorb equipment amortization without credit line drawdowns.'
  }
};

// Switch Hero Prototype Scenario
window.switchScenario = function(scenarioKey) {
  const data = SCENARIOS[scenarioKey];
  if (!data) return;

  // Update pills active state
  document.querySelectorAll('.scenario-pill').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.getElementById(`pill-${scenarioKey}`);
  if (activeBtn) activeBtn.classList.add('active');

  // Update metric elements with smooth fade
  const updateMetric = (id, val, sub, cls) => {
    const el = document.getElementById(id);
    const subEl = document.getElementById(`${id}-sub`);
    if (el) {
      el.style.opacity = '0.3';
      setTimeout(() => {
        el.textContent = val;
        el.style.opacity = '1';
      }, 120);
    }
    if (subEl) {
      subEl.textContent = sub;
      subEl.className = `metric-sub ${cls}`;
    }
  };

  updateMetric('m-runway', data.runway, data.runwaySub, data.runwayClass);
  updateMetric('m-gap', data.gap, data.gapSub, data.gapClass);
  updateMetric('m-solvency', data.solvency, data.solvencySub, data.solvencyClass);
  updateMetric('m-leaks', data.leaks, data.leaksSub, data.leaksClass);

  // Update SVG chart
  const areaPath = document.getElementById('prototype-chart-area');
  const linePath = document.getElementById('prototype-chart-line');
  if (areaPath) areaPath.setAttribute('d', data.chartPathArea);
  if (linePath) linePath.setAttribute('d', data.chartPathLine);

  // Update synthesis log
  const logEl = document.getElementById('prototype-log-content');
  if (logEl) {
    logEl.innerHTML = data.log;
  }
};

// FinTwin Feature Deep Dive Tabs
window.switchSandboxTab = function(tabKey) {
  document.querySelectorAll('.sandbox-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelectorAll('.sandbox-view-pane').forEach(pane => {
    pane.classList.remove('active');
  });

  const tabBtn = document.getElementById(`tab-btn-${tabKey}`);
  const pane = document.getElementById(`pane-${tabKey}`);
  if (tabBtn) tabBtn.classList.add('active');
  if (pane) pane.classList.add('active');
};

// Form Submission Handler
window.handleContactSubmit = function(e) {
  e.preventDefault();
  const form = document.getElementById('project-form');
  const successBox = document.getElementById('form-success');
  const btn = document.getElementById('btn-submit-brief');

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span>Brewing Blueprint...</span>';
  }

  setTimeout(() => {
    if (form) form.style.display = 'none';
    if (successBox) successBox.style.display = 'block';
  }, 750);
};

// Document Loaded Init
document.addEventListener('DOMContentLoaded', () => {
  // Init default scenario
  switchScenario('base');
});
