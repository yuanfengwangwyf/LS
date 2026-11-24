const MessageStyles = `
  .nn-message {
    display: inline-flex;
    align-items: center;
    gap: var(--space8);
    max-width: 100%;
    padding: var(--space8) var(--space16);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-4r);
    background: var(--gray-2);
    box-shadow: 0 3px 9px var(--shadow);
    color: var(--gray-5);
    font-family: var(--font-family-main);
    box-sizing: border-box;
  }

  .nn-message__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    flex: 0 0 auto;
    font-size: var(--icon-size-x10);
    line-height: 1;
  }

  .nn-message__icon .nnicon {
    font-size: var(--icon-size-x10);
    line-height: 1;
  }

  .nn-message--error .nn-message__icon {
    color: var(--Red);
  }

  .nn-message--success .nn-message__icon {
    color: var(--Green);
  }

  .nn-message--warning .nn-message__icon {
    color: var(--Orange);
  }

  .nn-message--normal .nn-message__icon {
    color: var(--Esports-Blue);
  }

  .nn-message__content {
    display: flex;
    flex-direction: column;
    gap: var(--space4);
    min-width: 0;
  }

  .nn-message__text {
    margin: var(--space0);
    color: var(--gray-5);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
    white-space: nowrap;
  }

  .nn-message__action {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    padding-left: var(--space24);
    flex: 0 0 auto;
  }

  .nn-message__action .nn-btn {
    min-height: 24px;
    padding: var(--space4) var(--space8);
  }

  .nn-message__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin: calc(var(--space4) * -1) calc(var(--space6) * -1);
    padding: var(--space6);
    border: none;
    border-radius: var(--border-radius-4r);
    background: transparent;
    color: var(--gray-5);
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-message__close:hover {
    background: var(--gray-10);
    color: var(--gray-4);
  }

  .nn-message__close .nnicon {
    font-size: var(--icon-size-x8);
    line-height: 1;
  }

  .nn-message-portal {
    position: fixed;
    top: 50px;
    left: 50%;
    z-index: 3000;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space8);
    width: max-content;
    max-width: calc(100vw - 32px);
    pointer-events: none;
    transform: translateX(-50%);
  }

  .nn-message-portal .nn-message {
    pointer-events: auto;
    opacity: 0;
    transform: translateY(-16px);
    transition:
      opacity 180ms ease,
      transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .nn-message-portal .nn-message.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .nn-message-portal .nn-message.is-leaving {
    opacity: 0;
    transform: translateY(-12px);
    transition:
      opacity 160ms ease,
      transform 180ms ease;
  }
`;

const MessageConfig = {
  error: {
    text: 'This is an error message',
    icon: 'nicon-a-closewireframeguanbi-xianxing'
  },
  success: {
    text: 'This is a success message',
    icon: 'nicon-a-Checked-lineyigouxuan-xianxing'
  },
  warning: {
    text: 'This is a warning message',
    icon: 'nicon-a-warning-lineweixianjingshi-xianxing'
  },
  normal: {
    text: 'This is a normal message',
    icon: 'nicon-a-Info-linexinxitishi-xianxing'
  }
};

function injectMessageStyles() {
  if (document.getElementById('nn-message-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-message-styles';
  style.textContent = MessageStyles;
  document.head.appendChild(style);
}

function createMessageActionButton(config = {}) {
  if (typeof window !== 'undefined' && typeof window.createButton === 'function') {
    return window.createButton(Object.assign({
      text: '确定',
      variant: 'system',
      level: 'primary',
      size: 'small'
    }, config));
  }

  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = config.text || '确定';
  button.style.cssText = 'min-height:24px;padding:var(--space4) var(--space8);border:0;border-radius:2px;background:var(--gray-3);color:var(--gray-1);font:inherit;font-size:12px;line-height:16px;';
  return button;
}

function createMessage(options = {}) {
  const {
    state = 'error',
    text = null,
    button = false,
    close = false,
    buttonOptions = null,
    className = '',
    id = '',
    onClose = null
  } = options;

  injectMessageStyles();
  if (typeof window !== 'undefined' && typeof window.injectButtonStyles === 'function') {
    window.injectButtonStyles();
  }

  const safeState = Object.prototype.hasOwnProperty.call(MessageConfig, state) ? state : 'normal';
  const config = MessageConfig[safeState];

  const root = document.createElement('div');
  root.className = ['nn-message', `nn-message--${safeState}`, className].filter(Boolean).join(' ');
  if (id) root.id = id;
  root.setAttribute('role', safeState === 'error' || safeState === 'warning' ? 'alert' : 'status');

  const icon = document.createElement('span');
  icon.className = 'nn-message__icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.innerHTML = `<i class="nnicon ${config.icon}"></i>`;
  root.appendChild(icon);

  const content = document.createElement('div');
  content.className = 'nn-message__content';
  const textEl = document.createElement('p');
  textEl.className = 'nn-message__text';
  textEl.textContent = text || config.text;
  content.appendChild(textEl);
  root.appendChild(content);

  if (button) {
    const action = document.createElement('div');
    action.className = 'nn-message__action';
    action.appendChild(createMessageActionButton(buttonOptions || {}));
    root.appendChild(action);
  }

  if (close && !button) {
    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'nn-message__close';
    closeButton.setAttribute('aria-label', '关闭');
    closeButton.innerHTML = '<i class="nnicon nicon-a-close-lineguanbi-xianxing"></i>';
    closeButton.addEventListener('click', function() {
      if (typeof onClose === 'function') {
        onClose(root);
      }
    });
    root.appendChild(closeButton);
  }

  return root;
}

function renderMessages(container, messages = []) {
  if (typeof container === 'string') {
    container = document.querySelector(container);
  }
  if (!container) return;
  injectMessageStyles();
  container.innerHTML = '';
  messages.forEach(function(options) {
    container.appendChild(createMessage(options));
  });
}

function getMessagePortal() {
  injectMessageStyles();
  let portal = document.querySelector('.nn-message-portal');
  if (!portal) {
    portal = document.createElement('div');
    portal.className = 'nn-message-portal';
    document.body.appendChild(portal);
  }
  return portal;
}

function showMessage(options = {}) {
  const {
    duration = 2000
  } = options;
  const portal = getMessagePortal();
  const message = createMessage(options);
  portal.appendChild(message);

  requestAnimationFrame(function() {
    message.classList.add('is-visible');
  });

  function closeMessage() {
    message.classList.remove('is-visible');
    message.classList.add('is-leaving');
    window.setTimeout(function() {
      if (message.parentNode) {
        message.parentNode.removeChild(message);
      }
      if (!portal.children.length && portal.parentNode) {
        portal.parentNode.removeChild(portal);
      }
    }, 190);
  }

  if (duration > 0) {
    window.setTimeout(closeMessage, duration);
  }

  return {
    element: message,
    close: closeMessage
  };
}

if (typeof window !== 'undefined') {
  window.injectMessageStyles = injectMessageStyles;
  window.createMessage = createMessage;
  window.renderMessages = renderMessages;
  window.showMessage = showMessage;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectMessageStyles,
    createMessage,
    renderMessages,
    showMessage
  };
}
