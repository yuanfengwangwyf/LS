const SliderStyles = `
  .nn-slider {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-family-main);
    --nn-slider-track-bg: var(--gray-9);
    --nn-slider-fill-bg: var(--gray-5);
    --nn-slider-value-color: var(--gray-3);
    --nn-slider-tooltip-text: var(--gray-5);
  }

  .nn-slider[data-direction="horizontal"] {
    width: var(--nn-slider-length, 400px);
    height: var(--nn-slider-cross-size, 16px);
  }

  .nn-slider[data-direction="vertical"] {
    flex-direction: column;
    width: var(--nn-slider-cross-size, 16px);
    height: var(--nn-slider-length, 200px);
  }

  .nn-slider.nn-slider-large {
    --nn-slider-track-thickness: 16px;
    --nn-slider-cross-size: 16px;
    --nn-slider-thumb-width: 16px;
    --nn-slider-thumb-height: 24px;
    --nn-slider-thumb-padding-y: 6px;
    --nn-slider-thumb-shadow: var(--shadow-sm);
    --nn-slider-tooltip-offset: 12px;
  }

  .nn-slider.nn-slider-default {
    --nn-slider-track-thickness: 12px;
    --nn-slider-cross-size: 12px;
    --nn-slider-thumb-width: 12px;
    --nn-slider-thumb-height: 20px;
    --nn-slider-thumb-padding-y: 4px;
    --nn-slider-thumb-shadow: var(--shadow-sm);
    --nn-slider-tooltip-offset: 12px;
  }

  .nn-slider.nn-slider-small {
    --nn-slider-track-thickness: 6px;
    --nn-slider-cross-size: 6px;
    --nn-slider-thumb-width: 12px;
    --nn-slider-thumb-height: 14px;
    --nn-slider-thumb-padding-y: 1px;
    --nn-slider-thumb-shadow: 0 3px 9px 0 var(--shadow);
    --nn-slider-tooltip-offset: 10px;
  }

  .nn-slider__main {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 1 0 auto;
  }

  .nn-slider[data-direction="horizontal"] .nn-slider__main {
    width: 100%;
    height: 100%;
  }

  .nn-slider[data-direction="vertical"] .nn-slider__main {
    width: 100%;
    height: 100%;
  }

  .nn-slider__track {
    position: relative;
    overflow: visible;
    background: var(--nn-slider-track-bg);
  }

  .nn-slider[data-direction="horizontal"] .nn-slider__track {
    width: 100%;
    height: var(--nn-slider-track-thickness);
    border-radius: 1px;
  }

  .nn-slider[data-direction="vertical"] .nn-slider__track {
    width: var(--nn-slider-track-thickness);
    height: 100%;
    border-radius: 1px;
  }

  .nn-slider__fill {
    position: absolute;
    background: var(--nn-slider-fill-bg);
    border-radius: 1px;
  }

  .nn-slider[data-direction="horizontal"] .nn-slider__fill {
    top: 0;
    left: 0;
    height: 100%;
    width: calc(var(--nn-slider-ratio, 0) * 100%);
  }

  .nn-slider[data-direction="vertical"] .nn-slider__fill {
    left: 0;
    bottom: 0;
    width: 100%;
    height: calc(var(--nn-slider-ratio, 0) * 100%);
  }

  .nn-slider__thumb-wrap {
    position: absolute;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  .nn-slider[data-direction="horizontal"] .nn-slider__thumb-wrap {
    top: 50%;
    left: calc(var(--nn-slider-ratio, 0) * 100%);
    transform: translate(-50%, -50%);
  }

  .nn-slider[data-direction="vertical"] .nn-slider__thumb-wrap {
    left: 50%;
    bottom: calc(var(--nn-slider-ratio, 0) * 100%);
    transform: translate(-50%, 50%);
  }

  .nn-slider__thumb {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--nn-slider-thumb-width);
    height: var(--nn-slider-thumb-height);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    background: var(--Neutral-0);
    box-shadow: var(--nn-slider-thumb-shadow);
    pointer-events: auto;
    cursor: pointer;
    box-sizing: border-box;
  }

  .nn-slider__thumb::before {
    content: "";
    width: 12px;
    height: 12px;
  }

  .nn-slider[data-direction="vertical"] .nn-slider__thumb {
    transform: rotate(90deg);
  }

  .nn-slider[data-disabled="true"] .nn-slider__thumb {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .nn-slider__input {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    margin: var(--space0);
    appearance: none;
    -webkit-appearance: none;
    background: transparent;
    z-index: 3;
  }

  .nn-slider[data-direction="vertical"] .nn-slider__input {
    width: var(--nn-slider-length, 200px);
    height: var(--nn-slider-cross-size, 16px);
    top: 50%;
    left: 50%;
    inset: auto;
    transform: translate(-50%, -50%) rotate(-90deg);
    transform-origin: center center;
  }

  .nn-slider__input::-webkit-slider-runnable-track {
    appearance: none;
    -webkit-appearance: none;
    background: transparent;
  }

  .nn-slider__input::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    width: var(--nn-slider-thumb-width);
    height: var(--nn-slider-thumb-height);
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .nn-slider__input::-moz-range-track {
    background: transparent;
    border: none;
  }

  .nn-slider__input::-moz-range-thumb {
    width: var(--nn-slider-thumb-width);
    height: var(--nn-slider-thumb-height);
    background: transparent;
    border: none;
    border-radius: 0;
    cursor: pointer;
  }

  .nn-slider[data-disabled="true"] .nn-slider__input {
    cursor: not-allowed;
    pointer-events: none;
  }

  .nn-slider__tooltip {
    position: absolute;
    display: none;
    align-items: center;
    justify-content: center;
    min-width: 48px;
    padding: var(--space6) var(--space12);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    background: var(--gray-2);
    box-shadow: var(--shadow-sm);
    color: var(--nn-slider-tooltip-text);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
    white-space: nowrap;
  }

  .nn-slider__tooltip::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background: var(--gray-2);
    border: 1px solid var(--gray-8);
  }

  .nn-slider[data-tooltip="tooltip"]:hover .nn-slider__tooltip {
    display: inline-flex;
  }

  .nn-slider[data-direction="horizontal"] .nn-slider__tooltip {
    bottom: calc(100% + var(--nn-slider-tooltip-offset));
    left: 50%;
    transform: translateX(-50%);
  }

  .nn-slider[data-direction="horizontal"] .nn-slider__tooltip::after {
    left: 50%;
    bottom: -5px;
    border-width: 0 1px 1px 0;
    border-radius: 0 0 2px 0;
    transform: translateX(-50%) rotate(45deg);
  }

  .nn-slider[data-direction="vertical"] .nn-slider__tooltip {
    top: 50%;
    left: calc(100% + var(--nn-slider-tooltip-offset));
    transform: translateY(-50%);
  }

  .nn-slider[data-direction="vertical"] .nn-slider__tooltip::after {
    left: -5px;
    top: 50%;
    border-width: 0 0 1px 1px;
    border-radius: 0 0 0 2px;
    transform: translateY(-50%) rotate(45deg);
  }

  .nn-slider__number {
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
    color: var(--nn-slider-value-color);
    white-space: nowrap;
  }

  .nn-slider[data-direction="horizontal"] .nn-slider__number {
    margin-left: var(--space12);
    width: 36px;
    flex: 0 0 36px;
    text-align: right;
  }

  .nn-slider[data-direction="vertical"] .nn-slider__number {
    margin-bottom: var(--space12);
  }

  .nn-slider-demo-value {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
  }
`;

function injectSliderStyles() {
  if (document.getElementById('nn-slider-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-slider-styles';
  style.textContent = SliderStyles;
  document.head.appendChild(style);
}

function createSlider(options = {}) {
  const {
    value = 56,
    min = 0,
    max = 100,
    size = 'small',
    direction = 'horizontal',
    tooltip = 'tooltip',
    disabled = false,
    step = 1,
    length = null,
    onChange = null,
    className = '',
    id = ''
  } = options;

  injectSliderStyles();

  const normalizedDirection = direction === 'vertical' ? 'vertical' : 'horizontal';
  const normalizedSize = size === 'large' ? 'large' : size === 'default' ? 'default' : 'small';
  const normalizedTooltip = tooltip === 'number' ? 'number' : 'tooltip';

  const root = document.createElement('div');
  root.className = ['nn-slider', `nn-slider-${normalizedSize}`, className].filter(Boolean).join(' ');
  root.dataset.direction = normalizedDirection;
  root.dataset.disabled = disabled ? 'true' : 'false';
  root.dataset.tooltip = normalizedTooltip;

  if (id) {
    root.id = id;
  }

  if (length) {
    root.style.setProperty('--nn-slider-length', typeof length === 'number' ? `${length}px` : length);
  } else {
    root.style.setProperty('--nn-slider-length', normalizedDirection === 'horizontal' ? '400px' : '200px');
  }

  const numberFirst = normalizedDirection === 'vertical' && normalizedTooltip === 'number';
  if (numberFirst) {
    const numberEl = document.createElement('span');
    numberEl.className = 'nn-slider__number';
    root.appendChild(numberEl);
    root._numberEl = numberEl;
  }

  const main = document.createElement('div');
  main.className = 'nn-slider__main';

  const track = document.createElement('div');
  track.className = 'nn-slider__track';

  const fill = document.createElement('div');
  fill.className = 'nn-slider__fill';

  const thumbWrap = document.createElement('div');
  thumbWrap.className = 'nn-slider__thumb-wrap';

  const thumb = document.createElement('div');
  thumb.className = 'nn-slider__thumb';

  const input = document.createElement('input');
  input.className = 'nn-slider__input';
  input.type = 'range';
  input.min = String(min);
  input.max = String(max);
  input.step = String(step);
  input.value = String(value);
  input.disabled = disabled;

  thumbWrap.appendChild(thumb);
  track.appendChild(fill);
  track.appendChild(thumbWrap);
  main.appendChild(track);
  main.appendChild(input);
  root.appendChild(main);

  if (normalizedTooltip === 'number' && !numberFirst) {
    const numberEl = document.createElement('span');
    numberEl.className = 'nn-slider__number';
    root.appendChild(numberEl);
    root._numberEl = numberEl;
  }

  if (normalizedTooltip === 'tooltip') {
    const tooltipEl = document.createElement('span');
    tooltipEl.className = 'nn-slider__tooltip';
    thumbWrap.appendChild(tooltipEl);
    root._tooltipEl = tooltipEl;
  }

  function clamp(nextValue) {
    return Math.min(max, Math.max(min, Number(nextValue)));
  }

  function getRatio(nextValue) {
    if (max === min) return 0;
    return (clamp(nextValue) - min) / (max - min);
  }

  function formatValue(nextValue) {
    return `${Math.round(getRatio(nextValue) * 100)}%`;
  }

  function emitChange(nextValue) {
    if (typeof onChange === 'function') {
      onChange({
        value: clamp(nextValue),
        percentage: Math.round(getRatio(nextValue) * 100)
      });
    }
  }

  function commitValue(nextValue) {
    const safeValue = clamp(nextValue);
    render(safeValue);
    emitChange(safeValue);
  }

  function render(nextValue) {
    const safeValue = clamp(nextValue);
    const ratio = getRatio(safeValue);
    root.style.setProperty('--nn-slider-ratio', String(ratio));
    input.value = String(safeValue);

    if (root._tooltipEl) {
      root._tooltipEl.textContent = formatValue(safeValue);
    }

    if (root._numberEl) {
      root._numberEl.textContent = formatValue(safeValue);
    }
  }

  function valueFromVerticalPointer(clientY) {
    const rect = track.getBoundingClientRect();
    const offsetFromBottom = rect.bottom - clientY;
    const ratio = Math.min(1, Math.max(0, offsetFromBottom / rect.height));
    return min + ratio * (max - min);
  }

  input.addEventListener('input', function(event) {
    const nextValue = Number(event.target.value);
    commitValue(nextValue);
  });

  if (!disabled) {
    root.addEventListener('wheel', function(event) {
      const delta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      if (delta === 0) return;
      event.preventDefault();
      const stepValue = Number(step) || 1;
      const directionStep = delta < 0 ? stepValue : -stepValue;
      commitValue(Number(input.value) + directionStep);
    }, { passive: false });
  }

  if (normalizedDirection === 'vertical' && !disabled) {
    let isDraggingVertical = false;

    function commitVerticalValue(clientY) {
      const nextValue = valueFromVerticalPointer(clientY);
      commitValue(nextValue);
    }

    track.addEventListener('pointerdown', function(event) {
      isDraggingVertical = true;
      track.setPointerCapture(event.pointerId);
      commitVerticalValue(event.clientY);
      event.preventDefault();
    });

    track.addEventListener('pointermove', function(event) {
      if (!isDraggingVertical) return;
      commitVerticalValue(event.clientY);
    });

    function stopVerticalDrag(event) {
      if (!isDraggingVertical) return;
      isDraggingVertical = false;
      if (event && typeof track.releasePointerCapture === 'function') {
        try {
          track.releasePointerCapture(event.pointerId);
        } catch (error) {
        }
      }
    }

    track.addEventListener('pointerup', stopVerticalDrag);
    track.addEventListener('pointercancel', stopVerticalDrag);
  }

  render(value);

  root._inputEl = input;
  root._render = render;
  return root;
}

window.injectSliderStyles = injectSliderStyles;
window.createSlider = createSlider;
