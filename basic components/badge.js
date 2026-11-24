const BadgeStyles = `
.nn-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: "MiSans VF", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif;
  flex-shrink: 0;
}

.nn-badge-red {
  background: var(--Esports-Blue);
  color: var(--Neutral-0);
  border-radius: 10px;
  padding: var(--space0) var(--space4);
  min-width: 16px;
  min-height: 16px;
  font-size: 12px;
  font-weight: var(--font-weight-medium);
  line-height: 16px;
  text-align: center;
}

.nn-badge-red.nn-badge-small {
  padding: var(--space0) var(--space4);
  min-width: 12px;
  min-height: 12px;
  font-size: 10px;
  line-height: 12px;
}

.nn-badge-gray {
  background: var(--gray-7);
  color: var(--Neutral-0);
  border-radius: 10px;
  padding: var(--space0) var(--space4);
  min-width: 16px;
  min-height: 16px;
  font-size: 12px;
  font-weight: var(--font-weight-medium);
  line-height: 16px;
  text-align: center;
}

.nn-badge-gray.nn-badge-small {
  padding: var(--space0) var(--space4);
  min-width: 12px;
  min-height: 12px;
  font-size: 10px;
  line-height: 12px;
}

.nn-badge-blue {
  background: var(--Esports-Blue);
  color: var(--Neutral-0);
  border-radius: 10px;
  padding: var(--space0) var(--space4);
  min-width: 16px;
  min-height: 16px;
  font-size: 12px;
  font-weight: var(--font-weight-medium);
  line-height: 16px;
  text-align: center;
}

.nn-badge-blue.nn-badge-small {
  padding: var(--space0) var(--space4);
  min-width: 12px;
  min-height: 12px;
  font-size: 10px;
  line-height: 12px;
}

.nn-badge-black {
  background: var(--gray-3);
  color: var(--gray-3-reverse);
  border-radius: 10px;
  padding: var(--space0) var(--space4);
  min-width: 16px;
  min-height: 16px;
  font-size: 12px;
  font-weight: var(--font-weight-medium);
  line-height: 16px;
  text-align: center;
}

.nn-badge-black.nn-badge-small {
  padding: var(--space0) var(--space4);
  min-width: 12px;
  min-height: 12px;
  font-size: 10px;
  line-height: 12px;
}

.nn-badge-small.nn-badge-single {
  width: 12px;
  min-width: 12px;
  height: 12px;
  min-height: 12px;
  padding: var(--space0);
}



.nn-badge-new {
  display: inline-flex;
  align-items: center;
  width: 28px;
  height: 14px;
  padding-right: var(--space4);
  padding-left: var(--space4);
  border-radius: 2px;
  background: transparent;
  font-size: 8px;
  font-weight: var(--font-weight-bold);
  color: var(--Esports-Blue);
  line-height: 16px;
}

.nn-badge-dot-on {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--Green, #1bb373);
}

.nn-badge-dot-inv {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space2);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--Orange, #f37f19);
}

.nn-badge-dot-inv::before {
  content: '';
  width: 50%;
  height: 15%;
  background: var(--Neutral-0);
  border-radius: 1px;
}

.nn-badge-dot-inv::after {
  content: '';
  width: 50%;
  height: 15%;
  background: var(--Neutral-0);
  border-radius: 1px;
}

.nn-badge-dot-gray {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--gray-7);
}

.nn-badge-dot-red {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--Esports-Blue);
}

.nn-badge-dot-dnd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--Red, #da3639);
}

.nn-badge-dot-dnd::after {
  content: '';
  width: 50%;
  height: 20%;
  background: var(--Neutral-0);
  border-radius: 1px;
}

.nn-badge-mo {
  width: 10px;
  height: 14px;
  aspect-ratio: 10 / 14;
}

.nn-badge-count {
  position: absolute;
  transform: translate(30%, -30%);
}

.nn-badge-wrapper {
  position: relative;
  display: inline-flex;
}
`;

function injectBadgeStyles() {
  if (document.getElementById('nn-badge-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-badge-styles';
  style.textContent = BadgeStyles;
  document.head.appendChild(style);
}

function createBadge(options = {}) {
  const {
    text = '',
    variant = 'red',
    size = 'default',
    dot = false,
    stroke = null,
  } = options;

  injectBadgeStyles();

  const badgeEl = document.createElement('span');
  badgeEl.className = 'nn-badge';

  if (dot) {
    badgeEl.classList.add(`nn-badge-dot-${variant}`);
    if (typeof size === 'number') {
      badgeEl.style.width = size + 'px';
      badgeEl.style.height = size + 'px';
    }
    if (stroke) {
      const colorVar = stroke.color ? `--${stroke.color}` : '--gray-1';
      badgeEl.style.outline = `${stroke.size || 1}px solid var(${colorVar})`;
    }
  } else if (variant === 'mo') {
    badgeEl.classList.add('nn-badge-mo');
    badgeEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 14" fill="none" style="width: 100%; height: 100%;">
      <path d="M8.57143 0C9.36041 0 10 0.626801 10 1.4V12.6C10 13.3732 9.36041 14 8.57143 14H1.42857C0.639593 14 1.15047e-08 13.3732 0 12.6V1.4C1.84076e-07 0.626802 0.639593 3.38234e-08 1.42857 0H8.57143ZM3.54004 12.1509H6.39718V10.7509H3.54004V12.1509ZM1.72154 1.74385V9.37891H8.3517V1.74385H1.72154Z" fill="#1BB373"/>
    </svg>`;
    if (typeof size === 'number') {
      badgeEl.style.width = size + 'px';
      badgeEl.style.height = (size * 1.5) + 'px';
    }
  } else {
    badgeEl.classList.add(`nn-badge-${variant}`);
    if (size === 'small') {
      badgeEl.classList.add('nn-badge-small');
      if (String(text).length === 1) {
        badgeEl.classList.add('nn-badge-single');
      }
    }
    if (stroke) {
      const colorVar = stroke.color ? `--${stroke.color}` : '--gray-1';
      badgeEl.style.outline = `${stroke.size || 1}px solid var(${colorVar})`;
    }
    if (text !== '') {
      badgeEl.textContent = text;
    }
  }

  return badgeEl;
}

function createBadgeWithCount(options = {}) {
  const {
    text = '',
    variant = 'red',
    size = 'default',
  } = options;

  injectBadgeStyles();

  const wrapper = document.createElement('span');
  wrapper.className = 'nn-badge-wrapper';

  const badgeEl = createBadge({ text, variant, size });
  badgeEl.classList.add('nn-badge-count');
  wrapper.appendChild(badgeEl);

  return wrapper;
}
