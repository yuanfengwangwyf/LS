const RadioStyles = `
  .nn-radio {
    display: inline-flex;
    align-items: center;
    gap: var(--space8);
    position: relative;
    font-family: var(--font-family-main);
  }

  .nn-radio {
    border: none;
    background: transparent;
    padding: var(--space0);
    appearance: none;
    -webkit-appearance: none;
    text-align: left;
  }

  button.nn-radio:not(.is-disabled),
  button.nn-radio:not(.is-disabled) * {
    cursor: pointer !important;
  }

  .nn-radio:focus {
    outline: none;
  }

  .nn-radio__box {
    position: relative;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    overflow: hidden;
  }

  .nn-radio__ring {
    position: absolute;
    inset: 0;
    border: 2px solid var(--gray-8);
    border-radius: 999px;
    background: var(--gray-10);
    box-sizing: border-box;
  }

  .nn-radio__dot {
    position: absolute;
    inset: 28.13%;
    border-radius: 999px;
    background: var(--gray-5);
  }

  .nn-radio__label {
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-medium);
    color: var(--gray-6);
    white-space: nowrap;
  }

  .nn-radio:hover .nn-radio__ring,
  .nn-radio.is-hover .nn-radio__ring {
    border-color: var(--gray-7);
  }

  .nn-radio:hover .nn-radio__label,
  .nn-radio.is-hover .nn-radio__label {
    color: var(--gray-5);
  }

  .nn-radio.is-checked .nn-radio__ring {
    border-color: var(--gray-5);
  }

  .nn-radio.is-checked .nn-radio__dot {
    background: var(--gray-5);
  }

  .nn-radio.is-disabled {
    pointer-events: none;
    cursor: not-allowed;
  }

  .nn-radio.is-disabled .nn-radio__ring {
    border-color: var(--gray-8);
    background: var(--gray-8);
  }

  .nn-radio.is-disabled.is-checked .nn-radio__ring {
    border-color: var(--gray-7);
  }

  .nn-radio.is-disabled.is-checked .nn-radio__dot {
    background: var(--gray-7);
  }

  .nn-radio.is-disabled .nn-radio__label {
    color: var(--gray-7);
  }

  .nn-radio.is-focused .nn-radio__label {
    color: var(--gray-3);
  }

  .nn-radio.is-disabled.is-focused .nn-radio__label {
    color: var(--gray-6);
  }
`;

function injectRadioStyles() {
  if (document.getElementById('nn-radio-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-radio-styles';
  style.textContent = RadioStyles;
  document.head.appendChild(style);
}

function createRadio(options = {}) {
  const {
    text = 'Radio',
    checked = false,
    disabled = false,
    hover = false,
    showLabel = true,
    interactive = false,
    className = '',
    id = '',
    onChange = null
  } = options;

  injectRadioStyles();

  const root = document.createElement(hover || !showLabel || interactive ? 'button' : 'div');
  root.className = [
    'nn-radio',
    checked ? 'is-checked' : '',
    disabled ? 'is-disabled' : '',
    hover ? 'is-focused' : '',
    hover ? 'is-hover' : '',
    className
  ].filter(Boolean).join(' ');

  if (id) {
    root.id = id;
  }
  if (root.tagName === 'BUTTON') {
    root.type = 'button';
  }

  const box = document.createElement('span');
  box.className = 'nn-radio__box';

  const ring = document.createElement('span');
  ring.className = 'nn-radio__ring';
  box.appendChild(ring);

  const dot = document.createElement('span');
  dot.className = 'nn-radio__dot';
  dot.style.display = checked ? 'block' : 'none';
  box.appendChild(dot);

  root.appendChild(box);

  if (showLabel) {
    const label = document.createElement('span');
    label.className = 'nn-radio__label';
    label.textContent = text;
    root.appendChild(label);
  }

  if (!disabled && (interactive || typeof onChange === 'function')) {
    let currentChecked = checked;
    let currentFocused = hover;

    function syncState() {
      root.classList.toggle('is-checked', currentChecked);
      root.classList.toggle('is-focused', currentFocused);
      dot.style.display = currentChecked ? 'block' : 'none';
    }

    root.addEventListener('click', function() {
      if (interactive) {
        currentChecked = !currentChecked;
        currentFocused = currentChecked;
        syncState();
      }
      if (typeof onChange === 'function') {
        onChange({ checked: !currentChecked });
      }
    });
  }

  return root;
}

function renderRadios(container, radios) {
  if (typeof container === 'string') {
    container = document.querySelector(container);
  }
  if (!container) return;
  radios.forEach(function(options) {
    container.appendChild(createRadio(options));
  });
}

function nnRadio(options) {
  injectRadioStyles();
  return createRadio(options);
}

if (typeof window !== 'undefined') {
  window.createRadio = createRadio;
  window.renderRadios = renderRadios;
  window.nnRadio = nnRadio;
  window.injectRadioStyles = injectRadioStyles;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    createRadio,
    renderRadios,
    nnRadio,
    injectRadioStyles
  };
}
