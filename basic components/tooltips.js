const TooltipStyles = `
.nn-tooltip-primitive {
  display: inline-flex;
  position: relative;
  font-family: "MiSans VF", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif;
  overflow: visible;
}

.nn-tooltip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: var(--gray-2);
  border: 1px solid var(--gray-8);
  border-radius: var(--border-radius-2r);
  box-shadow: var(--shadow-sm);
  padding: var(--space6) var(--space12);
  white-space: nowrap;
  z-index: 9999;
  overflow: visible;
}

.nn-tooltip-text {
  flex-shrink: 0;
  line-height: 20px;
  letter-spacing: 0;
  color: var(--gray-5);
  font-size: 14px;
  font-weight: var(--font-weight-normal);
}

.nn-tooltip-beak {
  position: absolute;
  flex-shrink: 0;
  border-width: 0px 1px 1px 0px;
  border-style: solid;
  border-radius: 0px 0px 2px;
  border-color: var(--gray-8);
  background: var(--gray-2);
  width: 8px;
  height: 8px;
}

.nn-tooltip-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

@keyframes nn-tooltip-appear {
  0% {
    opacity: 0;
    transform: translateX(-50%) scale(0.5);
  }
  70% {
    opacity: 1;
    transform: translateX(-50%) scale(1.01);
  }
  85% {
    transform: translateX(-50%) scale(0.995);
  }
  100% {
    transform: translateX(-50%) scale(1);
  }
}

@keyframes nn-tooltip-appear-top-left {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  70% {
    opacity: 1;
    transform: scale(1.01);
  }
  85% {
    transform: scale(0.995);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes nn-tooltip-appear-top-right {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  70% {
    opacity: 1;
    transform: scale(1.01);
  }
  85% {
    transform: scale(0.995);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes nn-tooltip-appear-bottom {
  0% {
    opacity: 0;
    transform: translateX(-50%) scale(0.5);
  }
  70% {
    opacity: 1;
    transform: translateX(-50%) scale(1.01);
  }
  85% {
    transform: translateX(-50%) scale(0.995);
  }
  100% {
    transform: translateX(-50%) scale(1);
  }
}

@keyframes nn-tooltip-appear-bottom-left {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  70% {
    opacity: 1;
    transform: scale(1.01);
  }
  85% {
    transform: scale(0.995);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes nn-tooltip-appear-bottom-right {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  70% {
    opacity: 1;
    transform: scale(1.01);
  }
  85% {
    transform: scale(0.995);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes nn-tooltip-appear-left {
  0% {
    opacity: 0;
    transform: translateY(-50%) scale(0.5);
  }
  70% {
    opacity: 1;
    transform: translateY(-50%) scale(1.01);
  }
  85% {
    transform: translateY(-50%) scale(0.995);
  }
  100% {
    transform: translateY(-50%) scale(1);
  }
}

@keyframes nn-tooltip-appear-right {
  0% {
    opacity: 0;
    transform: translateY(-50%) scale(0.5);
  }
  70% {
    opacity: 1;
    transform: translateY(-50%) scale(1.01);
  }
  85% {
    transform: translateY(-50%) scale(0.995);
  }
  100% {
    transform: translateY(-50%) scale(1);
  }
}

.nn-tooltip.nn-tooltip-top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: var(--space10);
}

.nn-tooltip.nn-tooltip-top .nn-tooltip-beak {
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
}

.nn-tooltip.nn-tooltip-top-left {
  bottom: 100%;
  left: 0;
  margin-bottom: var(--space10);
}

.nn-tooltip.nn-tooltip-top-left .nn-tooltip-beak {
  bottom: -5px;
  left: 18px;
  transform: rotate(45deg);
}

.nn-tooltip.nn-tooltip-top-right {
  bottom: 100%;
  right: 0;
  margin-bottom: var(--space10);
}

.nn-tooltip.nn-tooltip-top-right .nn-tooltip-beak {
  bottom: -5px;
  right: 18px;
  transform: rotate(45deg);
}

.nn-tooltip.nn-tooltip-bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: var(--space10);
}

.nn-tooltip.nn-tooltip-bottom .nn-tooltip-beak {
  top: -5px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-width: 1px 0px 0px 1px;
  border-radius: 2px 0px 0px;
}

.nn-tooltip.nn-tooltip-bottom-left {
  top: 100%;
  left: 0;
  margin-top: var(--space10);
}

.nn-tooltip.nn-tooltip-bottom-left .nn-tooltip-beak {
  top: -5px;
  left: 18px;
  transform: rotate(45deg);
  border-width: 1px 0px 0px 1px;
  border-radius: 2px 0px 0px;
}

.nn-tooltip.nn-tooltip-bottom-right {
  top: 100%;
  right: 0;
  margin-top: var(--space10);
}

.nn-tooltip.nn-tooltip-bottom-right .nn-tooltip-beak {
  top: -5px;
  right: 18px;
  transform: rotate(45deg);
  border-width: 1px 0px 0px 1px;
  border-radius: 2px 0px 0px;
}

.nn-tooltip.nn-tooltip-left {
  top: 50%;
  right: 100%;
  transform: translateY(-50%);
  margin-right: var(--space10);
}

.nn-tooltip.nn-tooltip-left .nn-tooltip-beak {
  top: 50%;
  right: -5px;
  transform: translateY(-50%) rotate(-45deg);
}

.nn-tooltip.nn-tooltip-right {
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  margin-left: var(--space10);
}

.nn-tooltip.nn-tooltip-right .nn-tooltip-beak {
  top: 50%;
  left: -5px;
  transform: translateY(-50%) rotate(135deg);
}

.nn-tooltip.nn-tooltip-rich {
  flex-direction: column;
  gap: var(--space4);
  padding: var(--space8) var(--space12);
  align-items: flex-start;
  white-space: normal;
}

.nn-tooltip-title {
  font-size: 16px;
  font-weight: var(--font-weight-medium);
  color: var(--gray-3);
  line-height: 22px;
  text-align: left;
  display: block;
}

.nn-tooltip-rich .nn-tooltip-text {
  font-size: 14px;
  font-weight: var(--font-weight-normal);
  color: var(--gray-5);
  line-height: 20px;
  text-align: left;
  display: block;
  white-space: normal;
}

.nn-tooltip-primitive:hover .nn-tooltip {
  display: inline-flex;
}

.nn-tooltip-primitive:hover .nn-tooltip.nn-tooltip-top {
  animation: nn-tooltip-appear 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.nn-tooltip-primitive:hover .nn-tooltip.nn-tooltip-top-left {
  animation: nn-tooltip-appear-top-left 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.nn-tooltip-primitive:hover .nn-tooltip.nn-tooltip-top-right {
  animation: nn-tooltip-appear-top-right 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.nn-tooltip-primitive:hover .nn-tooltip.nn-tooltip-bottom {
  animation: nn-tooltip-appear-bottom 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.nn-tooltip-primitive:hover .nn-tooltip.nn-tooltip-bottom-left {
  animation: nn-tooltip-appear-bottom-left 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.nn-tooltip-primitive:hover .nn-tooltip.nn-tooltip-bottom-right {
  animation: nn-tooltip-appear-bottom-right 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.nn-tooltip-primitive:hover .nn-tooltip.nn-tooltip-left {
  animation: nn-tooltip-appear-left 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.nn-tooltip-primitive:hover .nn-tooltip.nn-tooltip-right {
  animation: nn-tooltip-appear-right 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.nn-tooltip {
  display: none;
}

.nn-tooltip.nn-tooltip-portal {
  position: fixed;
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;
  margin: var(--space0);
  transform: none;
}

.nn-tooltip.nn-tooltip-portal.nn-tooltip-top .nn-tooltip-beak,
.nn-tooltip.nn-tooltip-portal.nn-tooltip-top-left .nn-tooltip-beak,
.nn-tooltip.nn-tooltip-portal.nn-tooltip-top-right .nn-tooltip-beak {
  right: auto;
  left: var(--nn-tooltip-portal-beak-left, 50%);
  transform: translateX(-50%) rotate(45deg);
}

.nn-tooltip.nn-tooltip-portal.nn-tooltip-bottom .nn-tooltip-beak,
.nn-tooltip.nn-tooltip-portal.nn-tooltip-bottom-left .nn-tooltip-beak,
.nn-tooltip.nn-tooltip-portal.nn-tooltip-bottom-right .nn-tooltip-beak {
  right: auto;
  left: var(--nn-tooltip-portal-beak-left, 50%);
  transform: translateX(-50%) rotate(45deg);
}

.nn-tooltip.nn-tooltip-portal.nn-tooltip-left .nn-tooltip-beak,
.nn-tooltip.nn-tooltip-portal.nn-tooltip-right .nn-tooltip-beak {
  top: var(--nn-tooltip-portal-beak-top, 50%);
  transform: translateY(-50%) rotate(-45deg);
}

.nn-tooltip.nn-tooltip-portal.nn-tooltip-right .nn-tooltip-beak {
  transform: translateY(-50%) rotate(135deg);
}
`;

function injectTooltipStyles() {
  if (document.getElementById('nn-tooltip-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-tooltip-styles';
  style.textContent = TooltipStyles;
  document.head.appendChild(style);
}

function createTooltip(options = {}) {
  const {
    content = 'Tooltip text',
    direction = 'top',
    trigger,
    type = 'default',
    title = '',
    width = 'auto',
    portal = false,
  } = options;

  injectTooltipStyles();

  const wrapper = document.createElement('span');
  wrapper.className = 'nn-tooltip-primitive';

  const tooltipEl = document.createElement('span');
  tooltipEl.className = `nn-tooltip nn-tooltip-${direction}`;
  
  if (type === 'rich') {
    tooltipEl.classList.add('nn-tooltip-rich');
    if (width !== 'auto') {
      tooltipEl.style.width = typeof width === 'number' ? width + 'px' : width;
    }
  }

  if (type === 'rich' && title) {
    const titleEl = document.createElement('div');
    titleEl.className = 'nn-tooltip-title';
    titleEl.textContent = title;
    tooltipEl.appendChild(titleEl);
  }

  const textEl = document.createElement('span');
  textEl.className = 'nn-tooltip-text';
  textEl.textContent = content;
  tooltipEl.appendChild(textEl);

  const beakEl = document.createElement('span');
  beakEl.className = 'nn-tooltip-beak';
  tooltipEl.appendChild(beakEl);

  let triggerEl;
  if (typeof trigger === 'string') {
    triggerEl = document.createElement('span');
    triggerEl.innerHTML = trigger;
  } else if (trigger instanceof HTMLElement) {
    triggerEl = trigger;
  } else {
    triggerEl = document.createElement('span');
    triggerEl.textContent = 'Hover me';
  }
  triggerEl.className = (triggerEl.className || '') + ' nn-tooltip-trigger';

  wrapper.appendChild(triggerEl);

  if (portal) {
    tooltipEl.classList.add('nn-tooltip-portal');
    document.body.appendChild(tooltipEl);

    function positionPortalTooltip() {
      const triggerRect = triggerEl.getBoundingClientRect();
      const tooltipRect = tooltipEl.getBoundingClientRect();
      const offset = 10;
      let left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
      let top = triggerRect.top - tooltipRect.height - offset;

      if (direction.indexOf('bottom') === 0) top = triggerRect.bottom + offset;
      if (direction === 'left') {
        left = triggerRect.left - tooltipRect.width - offset;
        top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
      }
      if (direction === 'right') {
        left = triggerRect.right + offset;
        top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
      }
      if (direction.indexOf('left') !== -1 && direction !== 'left') left = triggerRect.left;
      if (direction.indexOf('right') !== -1 && direction !== 'right') left = triggerRect.right - tooltipRect.width;

      const viewportPadding = 8;
      left = Math.min(Math.max(left, viewportPadding), window.innerWidth - tooltipRect.width - viewportPadding);
      top = Math.min(Math.max(top, viewportPadding), window.innerHeight - tooltipRect.height - viewportPadding);
      tooltipEl.style.left = left + 'px';
      tooltipEl.style.top = top + 'px';

      const triggerCenterX = triggerRect.left + triggerRect.width / 2;
      const triggerCenterY = triggerRect.top + triggerRect.height / 2;
      const beakInset = 8;
      const beakLeft = Math.min(Math.max(triggerCenterX - left, beakInset), tooltipRect.width - beakInset);
      const beakTop = Math.min(Math.max(triggerCenterY - top, beakInset), tooltipRect.height - beakInset);
      tooltipEl.style.setProperty('--nn-tooltip-portal-beak-left', beakLeft + 'px');
      tooltipEl.style.setProperty('--nn-tooltip-portal-beak-top', beakTop + 'px');
    }

    function showPortalTooltip() {
      tooltipEl.style.display = 'inline-flex';
      positionPortalTooltip();
    }

    function hidePortalTooltip() {
      tooltipEl.style.display = 'none';
    }

    triggerEl.addEventListener('mouseenter', showPortalTooltip);
    triggerEl.addEventListener('mouseleave', hidePortalTooltip);
    triggerEl.addEventListener('focus', showPortalTooltip);
    triggerEl.addEventListener('blur', hidePortalTooltip);
    window.addEventListener('resize', function() {
      if (tooltipEl.style.display !== 'none') positionPortalTooltip();
    });
    window.addEventListener('scroll', function() {
      if (tooltipEl.style.display !== 'none') positionPortalTooltip();
    }, true);
  } else {
    wrapper.appendChild(tooltipEl);
  }

  return wrapper;
}
