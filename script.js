/**
 * Overbrewed — Autonomous AI Agent Studio
 * Multi-Domain Autonomous Agent Operations Controller
 * (Finance // FinTwin, Legal // Legal-Clarity, Defense // AML, Enterprise // Swarms)
 */

const DOMAIN_DATA = {
  finance: {
    tag: 'FINANCE // FINTWIN ENGINE',
    status: 'AGENT SWARM ACTIVE',
    target: 'Reliance Industries Ltd • Corporate Digital Twin',
    metric: '₹2,984.50',
    badge: '+1.84% (Today)',
    isUp: true,
    regime: 'Low Crash Risk • Stable Expansion',
    telemetry: 'Live Ingestion: Q3 refining margins surge 14% on strong export volume',
    chartArea: 'M 0,90 Q 70,80 140,85 T 280,60 T 420,70 T 560,40 T 700,25 L 700,120 L 0,120 Z',
    chartLine: 'M 0,90 Q 70,80 140,85 T 280,60 T 420,70 T 560,40 T 700,25',
    lblLeft: 'Continuous Ingestion',
    lblMid: 'Deterministic Verification',
    lblRight: '→ Autonomous Operational Trajectory',
    models: [
      { key: 'CRASH_ISO', name: 'Isolation Forest', stat: 'Score: 0.08', status: 'Status: Normal / Resilient', cls: 'status-ok' },
      { key: 'CRASH_RF', name: 'RF Crisis Classifier', stat: 'P(Crisis): 1.8%', status: 'Regime: Expansion', cls: 'status-ok' },
      { key: 'SAVINGS_XGB', name: 'XGBoost Runway', stat: 'Runway: +18.4 mo', status: 'Net Trajectory: +14.2% YoY', cls: 'status-ok' },
      { key: 'LOAN_LGBM', name: 'LightGBM Solvency', stat: 'Default Risk: 0.38%', status: 'Rating: AAA Prime', cls: 'status-ok' }
    ],
    orchTitle: 'FinTwin Orchestrator Synthesis (Gemini Engine)',
    orchText: '"Model ensemble confirms 98.6% solvency stability across live order books. Real-time news sentiment corroborates +14% refining export margin expansion. Dynamic runway model verifies capacity for ₹1,200 Cr capex deployment without debt ceiling breach."',
    btnStress: 'Simulate Market Shock',
    btnAction: 'Run Composite Inference',
    stressOutput: {
      metric: '₹2,763.60 (-7.4%)',
      badge: '-7.40% (Shock Simulation)',
      isUp: false,
      models: [
        { stat: 'Score: 0.46 (Spike)', status: 'Status: Anomaly Detected', cls: 'status-stress' },
        { stat: 'P(Crisis): 16.8%', status: 'Regime: High Volatility', cls: 'status-warn' },
        { stat: 'Runway: 11.2 mo', status: 'Trajectory: Defensive Buffer', cls: 'status-warn' },
        { stat: 'Default Risk: 1.84%', status: 'Rating: AA+ Resilient', cls: 'status-ok' }
      ],
      orchText: '"STRESS SHOCK SIMULATION: -7.4% sector contraction injected. FinTwin autonomous safety layer dynamically locks non-essential vendor outlays, hedges currency exposure, and re-allocates reserves to preserve an 11.2-month runway without solvency impairment."'
    }
  },

  legal: {
    tag: 'LEGAL // LEGAL-CLARITY-AI',
    status: 'CLAUSE AUDIT ENGINE ACTIVE',
    target: '52-Page Master Services Agreement (MSA) • Global Cloud Vendor',
    metric: '4 Traps Flagged',
    badge: 'High Risk (Indemnity)',
    isUp: false,
    regime: 'DPDP Act 2023 • Redline Required',
    telemetry: 'Document Intake: 48 clauses parsed & cross-referenced against precedent DB',
    chartArea: 'M 0,40 Q 70,85 140,45 T 280,95 T 420,50 T 560,85 T 700,45 L 700,120 L 0,120 Z',
    chartLine: 'M 0,40 Q 70,85 140,45 T 280,95 T 420,50 T 560,85 T 700,45',
    lblLeft: 'Clause Ingestion (52 pgs)',
    lblMid: 'Trap Isolation (2.4s)',
    lblRight: '→ Auto-Redline Generation',
    models: [
      { key: 'INDEMNITY_RISK', name: 'Perpetual Trap Detector', stat: 'Hazard: High (Sec 12.3)', status: 'Indemnity Uncapped', cls: 'status-warn' },
      { key: 'LIABILITY_CAP', name: 'Mutual Cap Assessor', stat: 'Consequential: Unilateral', status: 'Severe Exposure', cls: 'status-stress' },
      { key: 'DPDP_2023', name: 'India Privacy Rule', stat: 'Cross-Border Flow: Non-Compliant', status: 'Remedy Required', cls: 'status-warn' },
      { key: 'IP_REVERSION', name: 'IP Ownership Sentry', stat: 'Works For Hire: Ambiguous', status: 'Carveout Added', cls: 'status-ok' }
    ],
    orchTitle: 'Legal-Clarity Orchestrator Synthesis',
    orchText: '"Legal-Clarity Engine: Section 12.3 contains an asymmetric indemnity covenant exposing the enterprise to uncapped third-party consequential damages. Agent has auto-drafted mutual aggregate liability cap (12 months contract value) and generated DPDP compliant data transfer addendum."',
    btnStress: 'Simulate Uncapped Claim',
    btnAction: 'Auto-Generate Redlines',
    stressOutput: {
      metric: '₹42.8 Cr Exposure',
      badge: 'Breach Liability (Worst Case)',
      isUp: false,
      models: [
        { stat: 'Hazard: Extreme', status: 'Status: Action Mandated', cls: 'status-stress' },
        { stat: 'Consequential: Uncapped', status: 'Regime: Fatal Term', cls: 'status-stress' },
        { stat: 'Statutory Fine: ₹250 Cr', status: 'DPDP Penalty Risk', cls: 'status-stress' },
        { stat: 'Workaround: Generated', status: 'Standardized Addendum', cls: 'status-ok' }
      ],
      orchText: '"STRESS CLAIM SIMULATED: In a breach scenario without mutual caps, enterprise faces ₹42.8 Cr unbounded liability plus statutory DPDP non-compliance exposure. Automated redline package eliminates 100% of unilateral indemnity risk."'
    }
  },

  defense: {
    tag: 'DEFENSE // AML GRAPH ENGINE',
    status: 'SUB-50ms DEFENSE ONLINE',
    target: 'Real-Time Checkout & Payment Gateway • 14 Processing Switches',
    metric: '38ms Latency',
    badge: 'Auto-Blocked (Mule)',
    isUp: true,
    regime: 'Graph Traversal • Velocity Spike',
    telemetry: 'Velocity Ingestion: 42 tx/min burst detected across 3 synthetic accounts',
    chartArea: 'M 0,95 Q 70,90 140,92 T 280,30 T 420,95 T 560,90 T 700,95 L 700,120 L 0,120 Z',
    chartLine: 'M 0,95 Q 70,90 140,92 T 280,30 T 420,95 T 560,90 T 700,95',
    lblLeft: 'Webhook Intake',
    lblMid: 'Collusion Graph (18ms)',
    lblRight: '→ Pre-Auth Block (38ms)',
    models: [
      { key: 'MULE_GRAPH', name: 'Graph Traversal Engine', stat: '3 Coordinated Rings', status: 'Blocked At Pre-Auth', cls: 'status-stress' },
      { key: 'VELOCITY_XGB', name: 'Transaction Velocity', stat: 'Velocity: 42 tx/min', status: 'Abnormal Anomaly', cls: 'status-warn' },
      { key: 'SYNTHETIC_ID', name: 'Identity Collusion', stat: 'Device Fingerprint: Cloned', status: 'Token Revoked', cls: 'status-ok' },
      { key: 'SAR_FILING', name: 'Regulatory Auto-Draft', stat: 'Suspicious Report: Ready', status: 'Compliant FIU-IND', cls: 'status-ok' }
    ],
    orchTitle: 'Defense Swarm Orchestrator Synthesis',
    orchText: '"Defense Engine: Sub-50ms graph traversal isolated 3 coordinated mule accounts cycling high-frequency UPI transactions across 14 payment switches. Terminated session before ledger capture, revoked credentials, and pre-compiled Suspicious Activity Report (SAR) with complete SHAP audit trail."',
    btnStress: 'Simulate Botnet Surge',
    btnAction: 'Deploy Pre-Auth Defense',
    stressOutput: {
      metric: '1,280 tx/sec Surge',
      badge: 'DDoS / Smurfing Wave',
      isUp: false,
      models: [
        { stat: '14 Sub-graphs Flagged', status: 'Isolation Activated', cls: 'status-stress' },
        { stat: 'Burst: 1,280 tx/sec', status: 'Adaptive Rate-Limit', cls: 'status-stress' },
        { stat: 'False Positive: 0.02%', status: 'Precision Locked', cls: 'status-ok' },
        { stat: 'Auto-Report: Dispatched', status: 'FIU-IND Telemetry', cls: 'status-ok' }
      ],
      orchText: '"SURGE ATTACK SIMULATION: 1,280 tx/sec smurfing attack simulated across payment gateways. Deterministic sub-50ms filters absorbed the spike, blocked 412 fraudulent attempts with 0.02% false-positive rate, maintaining 100% gateway uptime."'
    }
  },

  enterprise: {
    tag: 'ENTERPRISE // OPERATIONAL SWARM',
    status: 'MULTI-VPC ENCLAVE RUNNING',
    target: 'Global Supply Chain & ERP Sync • NetSuite + Zoho + SAP',
    metric: '100% GAAP',
    badge: '₹0.00 Discrepancy',
    isUp: true,
    regime: '1,420 Manifests • Auto-Matched',
    telemetry: 'ERP Feeds: Continuous PO matching across 4 subsidiaries on private VPC',
    chartArea: 'M 0,80 Q 70,70 140,65 T 280,45 T 420,35 T 560,25 T 700,15 L 700,120 L 0,120 Z',
    chartLine: 'M 0,80 Q 70,70 140,65 T 280,45 T 420,35 T 560,25 T 700,15',
    lblLeft: 'Multi-Entity ERP Intake',
    lblMid: '3-Way PO Reconciliation',
    lblRight: '→ Continuous Zero-Defect Ledger',
    models: [
      { key: 'PO_MATCHER', name: '3-Way PO Reconciler', stat: '38 Invoices Matched', status: 'GAAP Precision: 100%', cls: 'status-ok' },
      { key: 'SUPPLY_RISK', name: 'Lead Time Predictor', stat: 'Port Congestion: +2.1d', status: 'Buffer Adequate', cls: 'status-ok' },
      { key: 'GST_RECON', name: 'Tax Credit Auditor', stat: 'GSTR-2B Mismatch: 0%', status: 'Fully Reconciled', cls: 'status-ok' },
      { key: 'ENCLAVE_SYNC', name: 'Private VPC Security', stat: 'Data Retention: 0 Bytes', status: 'Enclave Verified', cls: 'status-ok' }
    ],
    orchTitle: 'Enterprise Swarm Orchestrator Synthesis',
    orchText: '"Operational Swarm: Automated 3-way matching reconciled ₹18.4 Cr in vendor disbursements across NetSuite and Zoho Books with ₹0.00 discrepancy. Port transit delay of 2.1 days detected in Nhava Sheva; autonomous scheduler dispatched purchase order re-balancing to secondary supplier."',
    btnStress: 'Simulate Invoice Mismatch',
    btnAction: 'Reconcile Enterprise Ledgers',
    stressOutput: {
      metric: '₹2.4 Cr Discrepancy',
      badge: 'Ghost Invoice Flagged',
      isUp: false,
      models: [
        { stat: 'Unit Rate Mismatch: 14%', status: 'Vendor Hold Applied', cls: 'status-stress' },
        { stat: 'Port Delay: +7.4d', status: 'Buffer Exceeded', cls: 'status-warn' },
        { stat: 'GSTR-2B: Disputed', status: 'Credit Clawback Halted', cls: 'status-stress' },
        { stat: 'Audit Proof: Sealed', status: 'Receipt Cryptographic', cls: 'status-ok' }
      ],
      orchText: '"DISCREPANCY SIMULATED: A ₹2.4 Cr supplier invoice with 14% rate divergence was detected before ERP posting. Swarm auto-quarantined the invoice, halted approval, and dispatched an automated discrepancy inquiry to the vendor."'
    }
  }
};

let activeDomain = 'finance';
let isStressActive = false;

function switchDomain(domainKey) {
  if (!DOMAIN_DATA[domainKey]) return;
  activeDomain = domainKey;
  isStressActive = false;

  // Update Buttons
  const buttons = document.querySelectorAll('#domain-selector-bar .ticker-pill');
  buttons.forEach(btn => {
    const fn = btn.getAttribute('onclick') || '';
    if (fn.includes(domainKey)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const data = DOMAIN_DATA[domainKey];

  // Update Topbar
  const tagEl = document.getElementById('domain-pill-tag');
  const statusEl = document.getElementById('domain-active-status');
  if (tagEl) tagEl.textContent = data.tag;
  if (statusEl) statusEl.textContent = data.status;

  // Update Meta
  const targetEl = document.getElementById('domain-target-name');
  const metricEl = document.getElementById('domain-primary-metric');
  const badgeEl = document.getElementById('domain-badge-metric');
  const regimeEl = document.getElementById('domain-regime-tag');
  const teleEl = document.getElementById('domain-telemetry-text');

  if (targetEl) targetEl.innerHTML = data.target;
  if (metricEl) metricEl.textContent = data.metric;
  if (badgeEl) {
    badgeEl.textContent = data.badge;
    badgeEl.className = `fintwin-change ${data.isUp ? 'badge-up' : 'badge-down'}`;
  }
  if (regimeEl) regimeEl.innerHTML = data.regime;
  if (teleEl) teleEl.textContent = data.telemetry;

  // Update Chart
  const areaPath = document.getElementById('twin-chart-area');
  const linePath = document.getElementById('twin-chart-line');
  if (areaPath) areaPath.setAttribute('d', data.chartArea);
  if (linePath) linePath.setAttribute('d', data.chartLine);

  const lblLeft = document.getElementById('chart-lbl-left');
  const lblMid = document.getElementById('chart-lbl-mid');
  const lblRight = document.getElementById('chart-lbl-right');
  if (lblLeft) lblLeft.textContent = data.lblLeft;
  if (lblMid) lblMid.textContent = data.lblMid;
  if (lblRight) lblRight.textContent = data.lblRight;

  // Update Model Boxes
  data.models.forEach((m, idx) => {
    const num = idx + 1;
    const keyEl = document.getElementById(`key-model-${num}`);
    const nameEl = document.getElementById(`name-model-${num}`);
    const statEl = document.getElementById(`stat-model-${num}`);
    const statusBoxEl = document.getElementById(`status-model-${num}`);

    if (keyEl) keyEl.textContent = m.key;
    if (nameEl) nameEl.textContent = m.name;
    if (statEl) statEl.textContent = m.stat;
    if (statusBoxEl) {
      statusBoxEl.textContent = m.status;
      statusBoxEl.className = `model-status ${m.cls}`;
    }
  });

  // Remove stress styling
  document.querySelectorAll('.model-box').forEach(b => b.classList.remove('stress-active'));

  // Update Orchestrator Box
  const orchTitle = document.getElementById('domain-orch-title');
  const orchText = document.getElementById('domain-orch-text');
  if (orchTitle) orchTitle.textContent = data.orchTitle;
  if (orchText) orchText.textContent = data.orchText;

  // Update Button Labels
  const btnStressText = document.getElementById('btn-stress-text');
  const btnActionText = document.getElementById('btn-action-text');
  if (btnStressText) btnStressText.textContent = data.btnStress;
  if (btnActionText) btnActionText.textContent = data.btnAction;
}

// Interactive Simulation: Stress Test
function runDomainStressSimulation() {
  const btn = document.getElementById('btn-domain-stress');
  const btnStressText = document.getElementById('btn-stress-text');
  const boxes = document.querySelectorAll('.model-box');
  const metricEl = document.getElementById('domain-primary-metric');
  const badgeEl = document.getElementById('domain-badge-metric');
  const orchText = document.getElementById('domain-orch-text');
  const data = DOMAIN_DATA[activeDomain];

  if (!isStressActive) {
    isStressActive = true;
    if (btnStressText) btnStressText.textContent = 'Reset Simulation';

    boxes.forEach(b => b.classList.add('stress-active'));

    const s = data.stressOutput;
    if (metricEl) metricEl.textContent = s.metric;
    if (badgeEl) {
      badgeEl.textContent = s.badge;
      badgeEl.className = 'fintwin-change badge-down';
    }

    s.models.forEach((m, idx) => {
      const num = idx + 1;
      const statEl = document.getElementById(`stat-model-${num}`);
      const statusBoxEl = document.getElementById(`status-model-${num}`);
      if (statEl) statEl.textContent = m.stat;
      if (statusBoxEl) {
        statusBoxEl.textContent = m.status;
        statusBoxEl.className = `model-status ${m.cls}`;
      }
    });

    if (orchText) orchText.textContent = s.orchText;
  } else {
    switchDomain(activeDomain);
  }
}

// Interactive Simulation: Action / Composite Inference
function runDomainCompositeInference() {
  const btn = document.getElementById('btn-domain-action');
  const btnText = document.getElementById('btn-action-text');
  const orchText = document.getElementById('domain-orch-text');
  const data = DOMAIN_DATA[activeDomain];
  if (!btn || !btnText) return;

  const originalText = btnText.textContent;
  btnText.textContent = 'Executing Autonomous Verification...';
  btn.disabled = true;

  setTimeout(() => {
    btnText.textContent = '✓ Verified & Executed (38ms)';
    if (orchText) {
      orchText.textContent = `"EXECUTION CONFIRMED: Autonomous pipeline executed in 38ms with 100% cryptographic ledger audit trail. Zero compliance violations or unauthorized anomalies detected."`;
    }
    setTimeout(() => {
      btnText.textContent = originalText;
      btn.disabled = false;
    }, 2800);
  }, 600);
}

// Quick Access Capsule Form
function handleQuickAccess(e) {
  e.preventDefault();
  const emailInput = document.getElementById('quick-email');
  if (!emailInput) return;

  const email = emailInput.value.trim();
  if (!email) return;

  const targetInput = document.getElementById('acc-email');
  if (targetInput) targetInput.value = email;

  const accessSec = document.getElementById('access');
  if (accessSec) {
    accessSec.scrollIntoView({ behavior: 'smooth' });
  }
}

// Early Access Request Form
function handleAccessSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('access-form');
  const successBox = document.getElementById('access-success');

  if (form) form.style.display = 'none';
  if (successBox) successBox.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialized on Finance domain
});
