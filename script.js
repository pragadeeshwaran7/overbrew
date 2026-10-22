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

// FinTwin Hero Interactive Simulation Data (Illustrative Demo Data)
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
    log: '<strong>ILLUSTRATIVE DEMO DATA:</strong> Ingested sample banking feeds and simulated ERP ledger. Working capital runway models 18.4 months under base operational assumptions. All disbursements matched against purchase orders with illustrative reconciliation.'
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
    log: '<strong>ILLUSTRATIVE DEMO DATA:</strong> -8.5% gross margin shock and 45-day collection delay simulated. Model identifies runway compression; suggests gating non-essential vendor outlays to preserve liquidity above 11 months.'
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
    log: '<strong>ILLUSTRATIVE DEMO DATA:</strong> Capex expansion modeled against cash flow seasonality. Illustrates operational margins absorbing equipment amortization without credit line drawdowns.'
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

// Quick Engagement Interest Chip Selector (eida.ai Selector style)
window.setInterestChip = function(val, btn) {
  document.querySelectorAll('.interest-chip').forEach(chip => chip.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const selectEl = document.getElementById('form-interest');
  if (selectEl) selectEl.value = val;
};

window.syncChipFromSelect = function(val) {
  document.querySelectorAll('.interest-chip').forEach(chip => {
    if (chip.getAttribute('data-val') === val) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });
};

// Form Submission Handler with Spring Transition
window.handleContactSubmit = function(e) {
  e.preventDefault();
  const form = document.getElementById('project-form');
  const successBox = document.getElementById('form-success');
  const btn = document.getElementById('btn-submit-brief');

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span>Brewing Blueprint...</span>';
  }

  if (form) {
    form.style.opacity = '0';
    form.style.transform = 'translateY(-12px) scale(0.98)';
    form.style.transition = 'all 0.36s cubic-bezier(0.22, 1, 0.36, 1)';
  }

  setTimeout(() => {
    if (form) form.style.display = 'none';
    if (successBox) {
      successBox.style.display = 'block';
      successBox.classList.add('show');
    }
  }, 380);
};

// Select Pricing Plan Helper
window.selectPricingPlan = function(planKey) {
  let val = 'fintwin-pro';
  if (planKey === 'pro') val = 'fintwin-pro';
  else if (planKey === 'free') val = 'fintwin-free';
  else if (planKey === 'custom') val = 'custom-quote';

  const selectEl = document.getElementById('form-interest');
  if (selectEl) {
    selectEl.value = val;
    window.syncChipFromSelect(val);
  }
};

// eida.ai Scroll Reveal & Sticky Navbar Controller
function initScrollAndNavbarAnimations() {
  const header = document.getElementById('site-header');

  // 1. Throttled Scroll Listener (Shrink & On-Dark)
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // Shrink nav bar on scroll
        if (header) {
          if (scrollY > 35) {
            header.classList.add('shrunk');
          } else {
            header.classList.remove('shrunk');
          }

          // Detect if navbar is over a dark section
          const darkElements = document.querySelectorAll('[data-gp-content], .ethos-card, .site-footer');
          let isOverDark = false;
          const headerHeight = header.offsetHeight || 60;

          darkElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= headerHeight && rect.bottom >= 0) {
              isOverDark = true;
            }
          });

          if (isOverDark) {
            header.classList.add('on-dark');
          } else {
            header.classList.remove('on-dark');
          }
        }

        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // 2. IntersectionObserver for Smooth Scroll Reveals (.reveal)
  const targets = document.querySelectorAll(
    '.section-header, .prototype-card, .solution-card, .fintwin-help-card, .lab-card, .principle-card, .about-single-box, .contact-info-panel, .contact-form-card'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('on');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px 80px 0px'
  });

  targets.forEach(el => {
    el.classList.add('reveal');
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 50) {
      el.classList.add('on');
    } else {
      observer.observe(el);
    }
  });
}

// Document Loaded Init
document.addEventListener('DOMContentLoaded', () => {
  // Init default scenario
  switchScenario('base');
  // Init animations & transitions
  initScrollAndNavbarAnimations();
});
