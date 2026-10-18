/**
 * Overbrewed — Autonomous AI Agent Studio
 * Flagship Agent: FinTwin (Autonomous Financial Digital Twin)
 * Interactive Controller
 */

// FinTwin Real-Time Ticker & Model Ensemble Knowledge State
const FINTWIN_DATA = {
  'RELIANCE.NS': {
    company: 'Reliance Industries Ltd',
    price: '₹2,984.50',
    change: '+1.84% (Today)',
    isUp: true,
    regime: 'Low Crash Risk',
    news: 'News Ingestion: Q3 refining margins surge 14% on strong export volume',
    models: {
      crashIso: { stat: 'Score: 0.08', status: 'Status: Normal / Resilient', cls: 'status-ok' },
      crashRf: { stat: 'P(Crisis): 1.8%', status: 'Regime: Expansion', cls: 'status-ok' },
      savingsXgb: { stat: 'Runway: +18.4 mo', status: 'Net Trajectory: +14.2% YoY', cls: 'status-ok' },
      loanLgbm: { stat: 'Default Risk: 0.38%', status: 'Rating: AAA Prime', cls: 'status-ok' }
    },
    orch: '"Model ensemble confirms 98.6% solvency stability across live order books. Real-time news sentiment corroborates +14% refining export margin expansion. Dynamic runway model verifies capacity for ₹1,200 Cr capex deployment without debt ceiling breach."',
    chartArea: 'M 0,90 Q 70,80 140,85 T 280,60 T 420,70 T 560,40 T 700,25 L 700,120 L 0,120 Z',
    chartLine: 'M 0,90 Q 70,80 140,85 T 280,60 T 420,70 T 560,40 T 700,25'
  },
  'TCS.NS': {
    company: 'Tata Consultancy Services Ltd',
    price: '₹4,192.10',
    change: '+0.92% (Today)',
    isUp: true,
    regime: 'Cashflow Fortress',
    news: 'News Ingestion: €1.2B multi-year enterprise digital twin deal secured in Europe',
    models: {
      crashIso: { stat: 'Score: 0.04', status: 'Status: Zero Anomaly Drift', cls: 'status-ok' },
      crashRf: { stat: 'P(Crisis): 0.9%', status: 'Regime: Secular Growth', cls: 'status-ok' },
      savingsXgb: { stat: 'Runway: +36.0 mo', status: 'Net Trajectory: +18.9% Margin', cls: 'status-ok' },
      loanLgbm: { stat: 'Default Risk: 0.12%', status: 'Rating: AAA Sovereign', cls: 'status-ok' }
    },
    orch: '"FinTwin Orchestrator: Zero counterparty or debt default risk. Operating margins at 26.2% provide extreme downside buffer. Unsupervised Isolation Forest indicates lowest anomaly dispersion in Nifty 50."',
    chartArea: 'M 0,95 Q 70,90 140,80 T 280,70 T 420,50 T 560,35 T 700,18 L 700,120 L 0,120 Z',
    chartLine: 'M 0,95 Q 70,90 140,80 T 280,70 T 420,50 T 560,35 T 700,18'
  },
  'HDFCBANK.NS': {
    company: 'HDFC Bank Ltd',
    price: '₹1,748.30',
    change: '+1.22% (Today)',
    isUp: true,
    regime: 'Credit Stable',
    news: 'News Ingestion: Gross NPA improves 12 bps to 1.24%; deposit growth outpaces sector',
    models: {
      crashIso: { stat: 'Score: 0.11', status: 'Status: Normal Liquidity', cls: 'status-ok' },
      crashRf: { stat: 'P(Crisis): 2.6%', status: 'Regime: Credit Neutral', cls: 'status-ok' },
      savingsXgb: { stat: 'Runway: +24.0 mo', status: 'Net Trajectory: +11.8% RoE', cls: 'status-ok' },
      loanLgbm: { stat: 'Default Risk: 0.65%', status: 'Rating: AAA Prime Tier-1', cls: 'status-ok' }
    },
    orch: '"FinTwin Orchestrator: CASA ratio expansion verifies systemic deposit stickiness. LightGBM loan classifier detects no aggregate credit stress across retail loan books. Twin stress model comfortably withstands a 75 bps interest rate shock."',
    chartArea: 'M 0,85 Q 70,88 140,75 T 280,78 T 420,60 T 560,45 T 700,32 L 700,120 L 0,120 Z',
    chartLine: 'M 0,85 Q 70,88 140,75 T 280,78 T 420,60 T 560,45 T 700,32'
  },
  'INFY.NS': {
    company: 'Infosys Ltd',
    price: '₹1,885.60',
    change: '-0.45% (Today)',
    isUp: false,
    regime: 'Transient Volatility',
    news: 'News Ingestion: Q2 revenue guidance updated; cloud modernization pipelines active',
    models: {
      crashIso: { stat: 'Score: 0.16', status: 'Status: Mild Divergence', cls: 'status-warn' },
      crashRf: { stat: 'P(Crisis): 3.4%', status: 'Regime: Consolidation', cls: 'status-ok' },
      savingsXgb: { stat: 'Runway: +28.5 mo', status: 'Net Trajectory: +10.4% YoY', cls: 'status-ok' },
      loanLgbm: { stat: 'Default Risk: 0.28%', status: 'Rating: AAA Strong', cls: 'status-ok' }
    },
    orch: '"FinTwin Orchestrator: Minor intraday profit booking detected. XGBoost cash runway remains exceptionally robust at 28.5 months. Crisis probability stays firmly below 5% threshold; zero structural balance-sheet hazard."',
    chartArea: 'M 0,65 Q 70,55 140,70 T 280,82 T 420,68 T 560,75 T 700,60 L 700,120 L 0,120 Z',
    chartLine: 'M 0,65 Q 70,55 140,70 T 280,82 T 420,68 T 560,75 T 700,60'
  }
};

let currentTicker = 'RELIANCE.NS';
let isStressActive = false;

// Ticker Switching
function switchTicker(tickerKey) {
  if (!FINTWIN_DATA[tickerKey]) return;
  currentTicker = tickerKey;
  isStressActive = false;

  // Update Buttons
  const buttons = document.querySelectorAll('.ticker-pill');
  buttons.forEach(btn => {
    if (btn.textContent.trim() === tickerKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const data = FINTWIN_DATA[tickerKey];

  // Update Headers
  const compEl = document.getElementById('twin-company-name');
  const priceEl = document.getElementById('twin-price');
  const changeEl = document.getElementById('twin-change');
  const regimeEl = document.getElementById('twin-regime');
  const newsEl = document.getElementById('twin-news-text');

  if (compEl) compEl.textContent = data.company;
  if (priceEl) priceEl.textContent = data.price;
  if (changeEl) {
    changeEl.textContent = data.change;
    changeEl.className = `fintwin-change ${data.isUp ? 'badge-up' : 'badge-down'}`;
  }
  if (regimeEl) regimeEl.textContent = data.regime;
  if (newsEl) newsEl.textContent = data.news;

  // Update Chart
  const areaPath = document.getElementById('twin-chart-area');
  const linePath = document.getElementById('twin-chart-line');
  if (areaPath) areaPath.setAttribute('d', data.chartArea);
  if (linePath) linePath.setAttribute('d', data.chartLine);

  // Update Model Boxes
  updateModelBox('stat-crash-iso', 'status-crash-iso', data.models.crashIso);
  updateModelBox('stat-crash-rf', 'status-crash-rf', data.models.crashRf);
  updateModelBox('stat-savings-xgb', 'status-savings-xgb', data.models.savingsXgb);
  updateModelBox('stat-loan-lgbm', 'status-loan-lgbm', data.models.loanLgbm);

  // Remove stress classes
  document.querySelectorAll('.model-box').forEach(b => b.classList.remove('stress-active'));

  // Update Orchestrator Text
  const orchEl = document.getElementById('twin-orch-text');
  if (orchEl) orchEl.textContent = data.orch;
}

function updateModelBox(statId, statusId, modelData) {
  const statEl = document.getElementById(statId);
  const statusEl = document.getElementById(statusId);
  if (statEl) statEl.textContent = modelData.stat;
  if (statusEl) {
    statusEl.textContent = modelData.status;
    statusEl.className = `model-status ${modelData.cls}`;
  }
}

// Interactive Simulation: Simulate Market Shock
function runStressSimulation() {
  const btn = document.getElementById('btn-stress-sim');
  const boxes = document.querySelectorAll('.model-box');
  const orchEl = document.getElementById('twin-orch-text');
  const priceEl = document.getElementById('twin-price');
  const changeEl = document.getElementById('twin-change');

  if (!isStressActive) {
    isStressActive = true;
    if (btn) btn.innerHTML = `<span>Reset Simulation</span>`;

    // Visual Stress Feedback
    boxes.forEach(b => b.classList.add('stress-active'));

    if (priceEl) priceEl.textContent = '₹2,763.60 (-7.4%)';
    if (changeEl) {
      changeEl.textContent = '-7.40% (Shock Simulation)';
      changeEl.className = 'fintwin-change badge-down';
    }

    // Update Model Stress Outputs
    const statCrashIso = document.getElementById('stat-crash-iso');
    const statusCrashIso = document.getElementById('status-crash-iso');
    if (statCrashIso) statCrashIso.textContent = 'Score: 0.46 (Spike)';
    if (statusCrashIso) {
      statusCrashIso.textContent = 'Status: Anomaly Detected';
      statusCrashIso.className = 'model-status status-stress';
    }

    const statCrashRf = document.getElementById('stat-crash-rf');
    const statusCrashRf = document.getElementById('status-crash-rf');
    if (statCrashRf) statCrashRf.textContent = 'P(Crisis): 16.8%';
    if (statusCrashRf) {
      statusCrashRf.textContent = 'Regime: High Volatility';
      statusCrashRf.className = 'model-status status-warn';
    }

    const statSavingsXgb = document.getElementById('stat-savings-xgb');
    const statusSavingsXgb = document.getElementById('status-savings-xgb');
    if (statSavingsXgb) statSavingsXgb.textContent = 'Runway: 11.2 mo';
    if (statusSavingsXgb) {
      statusSavingsXgb.textContent = 'Trajectory: Defensive Buffer';
      statusSavingsXgb.className = 'model-status status-warn';
    }

    const statLoanLgbm = document.getElementById('stat-loan-lgbm');
    const statusLoanLgbm = document.getElementById('status-loan-lgbm');
    if (statLoanLgbm) statLoanLgbm.textContent = 'Default Risk: 1.84%';
    if (statusLoanLgbm) {
      statusLoanLgbm.textContent = 'Rating: AA+ Resilient';
      statusLoanLgbm.className = 'model-status status-ok';
    }

    // Orchestrator Response
    if (orchEl) {
      orchEl.textContent = '"STRESS SHOCK SIMULATION: -7.4% sector contraction injected. FinTwin autonomous safety layer dynamically locks non-essential vendor outlays, hedges currency exposure, and re-allocates reserves to preserve an 11.2-month runway without solvency impairment."';
    }
  } else {
    // Reset to normal state
    if (btn) {
      btn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
        <span>Simulate Market Shock</span>
      `;
    }
    switchTicker(currentTicker);
  }
}

// Interactive Simulation: Run Composite Inference
function runCompositeInference() {
  const btn = document.getElementById('btn-composite');
  const orchEl = document.getElementById('twin-orch-text');
  if (!btn) return;

  const originalContent = btn.innerHTML;
  btn.innerHTML = `<span>Computing Composite Inference...</span>`;
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = `<span>✓ Composite Inferred (38ms)</span>`;
    if (orchEl) {
      orchEl.textContent = `"COMPOSITE INFERENCE COMPLETE: Concurrently evaluated Isolation Forest, LightGBM, and XGBoost pipelines in 38ms. Correlation matrix confirms 0.994 deterministic agreement with live market order book."`;
    }
    setTimeout(() => {
      btn.innerHTML = originalContent;
      btn.disabled = false;
    }, 2800);
  }, 650);
}

// Quick Access Capsule Form (Hero Section)
function handleQuickAccess(e) {
  e.preventDefault();
  const emailInput = document.getElementById('quick-email');
  if (!emailInput) return;

  const email = emailInput.value.trim();
  if (!email) return;

  // Pre-fill full form in access section and scroll down smoothly
  const targetInput = document.getElementById('acc-email');
  if (targetInput) targetInput.value = email;

  const accessSec = document.getElementById('access');
  if (accessSec) {
    accessSec.scrollIntoView({ behavior: 'smooth' });
  }
}

// Full Early Access Request Form
function handleAccessSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('access-form');
  const successBox = document.getElementById('access-success');

  if (form) form.style.display = 'none';
  if (successBox) successBox.style.display = 'block';
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // FinTwin default state initialized
});
