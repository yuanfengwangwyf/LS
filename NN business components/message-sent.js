const MessageSentStyles = `
  .nn-chat-message-input {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 472px;
    max-width: 100%;
    padding: var(--space0);
    box-sizing: border-box;
    font-family: var(--font-family-main);
    color: var(--gray-4);
  }

  .nn-chat-message-input.is-interactive {
    cursor: text;
  }

  .nn-chat-message-input--small {
    width: 232px;
    padding: var(--space0);
  }

  .nn-chat-message-input__bar,
  .nn-chat-message-input__notice {
    display: flex;
    align-items: flex-start;
    width: 100%;
    min-width: 0;
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    background: var(--gray-10);
    box-sizing: border-box;
  }

  .nn-chat-message-input__bar {
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 50px;
    max-height: 500px;
    padding: var(--space0);
    overflow: hidden;
    transition:
      min-height 0.18s ease,
      background-color 0.18s ease;
  }

  .nn-chat-message-input__record-game-id {
    display: none;
  }

  .nn-chat-message-input--small .nn-chat-message-input__record-game-id {
    display: flex;
    align-items: flex-start;
    width: 100%;
    min-width: 0;
    padding: var(--space6) var(--space8) var(--space10);
    border-bottom: 1px solid var(--gray-8);
    background: var(--gray-1);
    box-sizing: border-box;
  }

  .nn-chat-message-input__record-game-id .nn-record-game-id {
    flex: 1 1 auto;
    width: 100%;
  }

  .nn-chat-message-input__bar-inner {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space0);
    width: 100%;
    min-width: 0;
    padding-right: var(--space12);
    flex: 1 1 auto;
    max-height: 498px;
    box-sizing: border-box;
    overflow-y: hidden;
    -ms-overflow-style: none;
  }

  .nn-chat-message-input.is-y-scroll .nn-chat-message-input__bar-inner {
    overflow-y: auto;
  }

  .nn-chat-message-input__y-scrollbar {
    --nn-scrollbar-width: 6px;
    min-height: 60px;
  }

  .nn-chat-message-input__content-row {
    display: flex;
    align-items: flex-start;
    width: 100%;
    min-width: 0;
    flex: 0 0 auto;
    padding: var(--space12) var(--space4) var(--space12) var(--space16);
    box-sizing: border-box;
  }

  .nn-chat-message-input--small .nn-chat-message-input__bar {
    min-height: 50px;
    max-height: 500px;
    padding: var(--space0);
  }

  .nn-chat-message-input--small .nn-chat-message-input__bar-inner {
    padding-right: var(--space8);
    max-height: 498px;
  }

  .nn-chat-message-input--small .nn-chat-message-input__content-row {
    align-items: flex-start;
    flex: 0 0 auto;
    padding: var(--space12) var(--space4) var(--space12) var(--space16);
  }

  .nn-chat-message-input--small.is-restricted[data-state="muted"] .nn-chat-message-input__content-row {
    padding-top: var(--space8);
    padding-bottom: var(--space8);
  }

  .nn-chat-message-input--small .nn-chat-message-input__enter {
    padding: var(--space0) var(--space6);
  }

  .nn-chat-message-input--small.is-restricted .nn-chat-message-input__enter {
    padding: var(--space0);
  }

  .nn-chat-message-input--small .nn-chat-message-input__visual-text,
  .nn-chat-message-input--small .nn-chat-message-input__placeholder {
    font-size: 14px;
    line-height: 20px;
  }

  .nn-chat-message-input--small .nn-chat-message-input__visual-text {
    min-height: 20px;
    padding: var(--space2) var(--space0);
  }

  .nn-chat-message-input--small .nn-chat-message-input__placeholder {
    top: var(--space2);
  }

  .nn-chat-message-input.is-focus .nn-chat-message-input__bar {
    background: var(--gray-10);
  }

  .nn-chat-message-input__left-icon {
    position: sticky;
    top: var(--space12);
    z-index: 4;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    padding: var(--space0);
    flex: 0 0 auto;
    border: 0;
    background: transparent;
    color: var(--gray-5);
    font-size: var(--icon-size-x12);
    line-height: 1;
    cursor: pointer;
    transition: color 0.16s ease;
  }

  .nn-chat-message-input__left-icon .nnicon {
    font-size: var(--icon-size-x12);
    line-height: 1;
  }

  .nn-chat-message-input__left-icon:hover {
    color: var(--gray-3);
  }

  .nn-chat-message-input--small .nn-chat-message-input__left-icon {
    top: var(--space12);
    margin-top: var(--space2);
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    font-size: var(--icon-size-x10);
  }

  .nn-chat-message-input--small .nn-chat-message-input__left-icon .nnicon {
    font-size: var(--icon-size-x10);
  }

  .nn-chat-message-input__enter {
    display: flex;
    min-width: 0;
    flex: 1 1 auto;
    padding: var(--space0) var(--space16);
  }

  .nn-chat-message-input__text {
    display: flex;
    flex: 1 1 auto;
    align-items: flex-start;
    min-width: 0;
    position: relative;
  }

  .nn-chat-message-input__editable {
    display: none;
  }

  .nn-chat-message-input__visual-text {
    position: static;
    z-index: 2;
    display: block;
    width: 100%;
    min-height: 22px;
    max-height: none;
    padding: var(--space2) var(--space0);
    overflow: visible;
    box-sizing: border-box;
    outline: none;
    background: transparent;
    color: var(--gray-3);
    caret-color: var(--gray-3);
    cursor: text;
    font-size: 16px;
    font-weight: var(--font-weight-normal);
    line-height: 22px;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .nn-chat-message-input__editor-row {
    position: relative;
    display: block;
    width: 100%;
    min-width: 0;
    overflow: hidden;
  }

  .nn-chat-message-input__placeholder {
    position: absolute;
    z-index: 1;
    top: 1px;
    left: 0;
    color: var(--gray-6);
    font-size: 16px;
    font-weight: var(--font-weight-normal);
    line-height: 22px;
    pointer-events: none;
  }

  .nn-chat-message-input.is-has-value .nn-chat-message-input__placeholder {
    display: none;
  }

  .nn-chat-message-input__return-anchor {
    position: absolute;
    z-index: 3;
    display: none;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    color: var(--gray-6);
    font-size: 16px;
    line-height: 16px;
    opacity: 1;
    pointer-events: none;
  }

  .nn-chat-message-input__return-anchor .nnicon {
    display: block;
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-chat-message-input__image-preview {
    display: none;
  }

  .nn-chat-message-input__image-panel {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    min-width: 0;
    padding: var(--space10) var(--space4) var(--space0) var(--space16);
    flex: 0 0 auto;
    overflow: hidden;
    box-sizing: border-box;
  }

  .nn-chat-message-input__image-list {
    display: flex;
    align-items: center;
    gap: var(--space10);
    width: 100%;
    flex: 0 0 auto;
    max-width: 100%;
    min-width: 0;
    margin-bottom: var(--space0);
    box-sizing: border-box;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .nn-chat-message-input.is-has-image .nn-chat-message-input__image-panel {
    display: flex;
  }

  .nn-chat-message-input__image-slider-hold {
    display: none;
    position: relative;
    width: 100%;
    height: 20px;
    flex: 0 0 20px;
    overflow: hidden;
    pointer-events: auto;
  }

  .nn-chat-message-input.is-image-x-scroll .nn-chat-message-input__image-slider-hold {
    display: block;
  }

  .nn-chat-message-input__image-scrollbar {
    --nn-scrollbar-track-height: 20px;
    --nn-scrollbar-height: 6px;
  }

  .nn-chat-message-input__image-item {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    padding: var(--space8);
    flex: 0 0 auto;
    overflow: hidden;
    border: 1px solid var(--gray-9);
    border-radius: var(--border-radius-2r);
    background: var(--gray-9);
    box-sizing: border-box;
    cursor: pointer;
  }

  .nn-chat-message-input__image-item img {
    display: block;
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: contain;
  }

  .nn-chat-message-input__image-remove {
    position: absolute;
    top: 3px;
    right: 3px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: var(--space0);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    background: rgba(0, 0, 0, 0.5);
    color: var(--White-A80);
    font-size: 14px;
    line-height: 1;
    cursor: pointer;
    transition: color 0.16s ease;
  }

  .nn-chat-message-input__image-remove:hover {
    color: var(--Neutral-0);
  }

  .nn-chat-message-input__image-remove .nnicon {
    font-size: var(--icon-size-x7);
    line-height: 1;
  }

  .nn-chat-message-input--small .nn-chat-message-input__image-panel {
    padding: var(--space10) var(--space4) var(--space0) var(--space16);
  }

  .nn-chat-message-input--small .nn-chat-message-input__image-item {
    width: 120px;
    height: 120px;
  }

  .nn-chat-image-viewer {
    position: fixed;
    z-index: 3000;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space48);
    background: rgba(0, 0, 0, 0.72);
    box-sizing: border-box;
  }

  .nn-chat-image-viewer__image {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: var(--border-radius-2r);
  }

  .nn-chat-image-viewer__close {
    position: absolute;
    top: 24px;
    right: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: var(--space0);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    background: rgba(0, 0, 0, 0.5);
    color: var(--White-A80);
    cursor: pointer;
    transition: color 0.16s ease;
  }

  .nn-chat-image-viewer__close:hover {
    color: var(--Neutral-0);
  }

  .nn-chat-image-viewer__close .nnicon {
    font-size: var(--icon-size-x8);
    line-height: 1;
  }

  .nn-chat-message-input__actions {
    position: sticky;
    top: var(--space12);
    z-index: 4;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex: 0 0 auto;
  }

  .nn-chat-message-input:not(.nn-chat-message-input--small) .nn-chat-message-input__left-icon,
  .nn-chat-message-input:not(.nn-chat-message-input--small) .nn-chat-message-input__actions {
    transform: translateY(1px);
  }

  .nn-chat-message-input--small .nn-chat-message-input__actions {
    top: var(--space12);
    align-items: flex-start;
    padding-top: var(--space2);
  }

  .nn-chat-message-input--small .nn-chat-message-input__icons {
    align-items: flex-start;
  }

  .nn-chat-message-input__icons {
    display: flex;
    align-items: flex-start;
    gap: var(--space10);
  }

  .nn-chat-message-input__icon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    padding: var(--space0);
    border: 0;
    background: transparent;
    color: var(--gray-5);
    font-size: var(--icon-size-x12);
    line-height: 1;
    cursor: pointer;
    transition: color 0.16s ease;
  }

  .nn-chat-message-input__icon-btn .nnicon {
    font-size: var(--icon-size-x12);
    line-height: 1;
  }

  .nn-chat-message-input--small .nn-chat-message-input__icon-btn {
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    font-size: var(--icon-size-x10);
  }

  .nn-chat-message-input--small .nn-chat-message-input__icon-btn .nnicon {
    font-size: var(--icon-size-x10);
  }

  .nn-chat-message-input__icon-btn:hover {
    color: var(--gray-3);
  }

  .nn-chat-message-input__send {
    margin-right: var(--space16);
  }

  .nn-chat-message-input__reply {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 56px;
    padding: var(--space8) var(--space16);
    flex: 0 0 auto;
    border-bottom: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r) var(--border-radius-2r) 0 0;
    background: transparent;
    box-shadow: none;
    box-sizing: border-box;
  }

  .nn-chat-message-input--small .nn-chat-message-input__reply {
    align-items: flex-start;
    min-height: 56px;
    padding: var(--space8);
  }

  .nn-chat-message-input--small .nn-chat-message-input__reply-close {
    width: 20px;
    height: 20px;
    align-self: flex-start;
    flex: 0 0 20px;
    font-size: 16px;
  }

  .nn-chat-message-input__reply-content {
    display: flex;
    flex-direction: column;
    gap: var(--space2);
    flex: 1 1 auto;
    min-width: 0;
  }

  .nn-chat-message-input__reply-name {
    display: flex;
    align-items: center;
    gap: var(--space2);
    color: var(--gray-5);
    font-size: 14px;
    line-height: 20px;
  }

  .nn-chat-message-input__reply-text {
    overflow: hidden;
    color: var(--gray-6);
    font-size: 14px;
    line-height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-chat-message-input--small .nn-chat-message-input__reply-text {
    overflow: visible;
    text-overflow: clip;
    white-space: normal;
    word-break: break-word;
  }

  .nn-chat-message-input__reply-close {
    width: 24px;
    height: 24px;
    padding: var(--space0);
    border: 0;
    background: transparent;
    color: var(--gray-6);
    font-size: 16px;
    cursor: pointer;
    transition: color 0.16s ease;
  }

  .nn-chat-message-input__reply-close:hover {
    color: var(--gray-3);
  }

  .nn-chat-message-input__notice {
    align-items: center;
    justify-content: space-between;
    gap: var(--space16);
    min-height: 44px;
    padding: var(--space10) var(--space8) var(--space10) var(--space16);
  }

  .nn-chat-message-input__notice.is-login {
    justify-content: center;
  }

  .nn-chat-message-input__notice.is-login .nn-chat-message-input__notice-text {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--space4);
    width: 100%;
    flex: 0 1 auto;
    text-align: center;
  }

  .nn-chat-message-input__notice-text {
    min-width: 0;
    flex: 1 1 auto;
    overflow: hidden;
    color: var(--gray-6);
    font-size: 14px;
    font-weight: var(--font-weight-medium);
    line-height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-chat-message-input__notice.is-muted .nn-chat-message-input__notice-text {
    display: flex;
    align-items: center;
    gap: var(--space6);
  }

  .nn-chat-message-input__notice.is-muted .nnicon {
    width: var(--icon-size-x9);
    height: var(--icon-size-x9);
    flex: 0 0 auto;
    font-size: var(--icon-size-x9);
    line-height: 1;
  }

  .nn-chat-message-input__login-link {
    color: var(--gray-3);
    font-weight: var(--font-weight-semibold);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .nn-chat-message-input__restricted-text {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space4);
    width: 100%;
    min-width: 0;
    color: var(--gray-6);
    font-size: 14px;
    font-weight: var(--font-weight-medium);
    line-height: 20px;
    text-align: center;
    white-space: nowrap;
  }

  .nn-chat-message-input__restricted-text.is-muted {
    justify-content: flex-start;
    gap: var(--space6);
  }

  .nn-chat-message-input__restricted-text .nnicon {
    width: var(--icon-size-x9);
    height: var(--icon-size-x9);
    flex: 0 0 auto;
    font-size: var(--icon-size-x9);
    line-height: 1;
  }

  .nn-chat-message-input__restricted-action.nn-btn-small {
    min-height: 20px;
    height: 20px;
    padding-top: var(--space2);
    padding-bottom: var(--space2);
    box-sizing: border-box;
  }

  .nn-chat-message-input__upload-input {
    display: none;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }
`;

function injectMessageSentStyles() {
  if (document.getElementById('nn-message-sent-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-message-sent-styles';
  style.textContent = MessageSentStyles;
  document.head.appendChild(style);
}

function createChatIcon(className, extraClass = '') {
  const icon = document.createElement('i');
  icon.className = ['nnicon', className, extraClass].filter(Boolean).join(' ');
  return icon;
}

function createChatIconButton(iconClass, label, onClick) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'nn-chat-message-input__icon-btn';
  button.setAttribute('aria-label', label);
  if (typeof onClick === 'function') {
    button.addEventListener('click', onClick);
  }
  button.appendChild(createChatIcon(iconClass));
  return button;
}

function createChatButton(options) {
  if (typeof window !== 'undefined' && typeof window.nnButton === 'function') {
    return window.nnButton(options);
  }
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'nn-btn';
  button.textContent = options.text || '';
  return button;
}

function createChatNotice(options = {}) {
  const {
    mode = 'join',
    size = 'default',
    joinText = '当前处于预览模式，请加入社区开始聊天吧！',
    mutedText = '你已被禁言，如有疑问请点击申诉',
    loginPrefix = '请',
    loginAction = '登录NN账户',
    loginSuffix = '互动体验完整功能'
  } = options;
  const isSmall = size === 'small';

  const notice = document.createElement('div');
  notice.className = [
    'nn-chat-message-input__notice',
    mode === 'muted' ? 'is-muted' : '',
    mode === 'login' ? 'is-login' : ''
  ].filter(Boolean).join(' ');

  const text = document.createElement('div');
  text.className = 'nn-chat-message-input__notice-text';

  if (isSmall && (mode === 'join' || mode === 'login')) {
    const prefix = document.createElement('span');
    prefix.textContent = mode === 'join' ? '当前预览模式，请' : '游客访问受限，请';
    const action = document.createElement('span');
    action.className = 'nn-chat-message-input__login-link';
    action.textContent = mode === 'join' ? '加入' : '登陆';
    const suffix = document.createElement('span');
    suffix.textContent = '后体验';
    text.append(prefix, action, suffix);
    notice.appendChild(text);
    return notice;
  }

  if (mode === 'login') {
    const prefix = document.createElement('span');
    prefix.textContent = loginPrefix;
    const action = document.createElement('span');
    action.className = 'nn-chat-message-input__login-link';
    action.textContent = loginAction;
    const suffix = document.createElement('span');
    suffix.textContent = loginSuffix;
    text.append(prefix, action, suffix);
    notice.appendChild(text);
    return notice;
  }

  if (mode === 'muted') {
    text.appendChild(createChatIcon('nicon-a-Notalking-linejinyan-xianxing'));
    const label = document.createElement('span');
    label.textContent = isSmall ? '已被禁言' : mutedText;
    text.appendChild(label);
    notice.appendChild(text);
    if (isSmall) return notice;
    notice.appendChild(createChatButton({
      variant: 'system',
      level: 'secondary',
      size: 'small',
      text: '点击申诉'
    }));
    return notice;
  }

  text.textContent = joinText;
  notice.appendChild(text);
  notice.appendChild(createChatButton({
    variant: 'system',
    level: 'primary',
    size: 'small',
    text: '加入社区'
  }));
  return notice;
}

function showChatMessage(text, state = 'normal') {
  if (typeof window !== 'undefined' && typeof window.showMessage === 'function') {
    window.showMessage({ state, text, duration: 1600 });
  }
}

function resolveChatImageList(imageSrc, imageList) {
  if (Array.isArray(imageList) && imageList.length) return imageList.slice();
  if (imageSrc) return [imageSrc];
  return [];
}

function createSmallRestrictedContent(state) {
  const text = document.createElement('div');
  text.className = [
    'nn-chat-message-input__restricted-text',
    state === 'muted' ? 'is-muted' : ''
  ].filter(Boolean).join(' ');

  if (state === 'muted') {
    text.appendChild(createChatIcon('nicon-a-Notalking-linejinyan-xianxing'));
    const label = document.createElement('span');
    label.textContent = '已被禁言';
    text.appendChild(label);
    return text;
  }

  const prefix = document.createElement('span');
  prefix.textContent = state === 'join' ? '当前预览模式，请' : '游客访问受限，请';
  const action = document.createElement('span');
  action.className = 'nn-chat-message-input__login-link';
  action.textContent = state === 'join' ? '加入' : '登陆';
  const suffix = document.createElement('span');
  suffix.textContent = '后体验';
  text.append(prefix, action, suffix);
  return text;
}

function createChatMessageInput(options = {}) {
  injectMessageSentStyles();
  const {
    size = 'default',
    state = 'empty',
    placeholder = '按Enter回车键发送消息',
    textLines = ['有长期的嘛，要求心态好，本人不喷队友，也', '以从黄金二掉到青铜。我主打中型'],
    imageSrc = '../image/Game logo/game1-cover.webp',
    pictureType = 'auto',
    showImage = false,
    showSendButton = false,
    showGift = false,
    showUpload = true,
    showRecordGameId = false,
    imageList = null,
    interactive = true,
    replyUser = '普莱士袋熊',
    replyText = '诺克萨斯灵活翡翠局 4等1 来一个上单',
    onUpload = null,
    onRemoveImage = null,
    onChange = null,
    onSend = null,
    className = ''
  } = options;

  const isSmall = size === 'small';
  const shouldShowRecordGameId = isSmall && (showRecordGameId || state === 'record');
  const isSmallRestrictedState = isSmall && ['join', 'muted', 'login'].includes(state);
  const initialLines = Array.isArray(textLines) ? textLines : [String(textLines || '')];
  const model = {
    state,
    textValue: ['input', 'hover'].includes(state) ? initialLines.filter(Boolean).join('\n') : '',
    imageList: showImage || state === 'hover' ? resolveChatImageList(imageSrc, imageList) : [],
    emptyLineActive: false,
    isComposing: false,
    hasFocus: false
  };
  const root = document.createElement('div');
  root.className = [
    'nn-chat-message-input',
    isSmall ? 'nn-chat-message-input--small' : '',
    state === 'hover' ? 'is-hover' : '',
    state === 'reply' ? 'is-reply-fixed' : '',
    isSmallRestrictedState ? 'is-restricted' : '',
    interactive ? 'is-interactive' : '',
    className
  ].filter(Boolean).join(' ');
  root.dataset.state = state;
  root.dataset.size = size;

  if (!isSmall && ['join', 'muted', 'login'].includes(state)) {
    root.appendChild(createChatNotice({ mode: state, size }));
    return root;
  }

  let reply = null;
  if (state === 'reply') {
    reply = document.createElement('div');
    reply.className = 'nn-chat-message-input__reply';
    const content = document.createElement('div');
    content.className = 'nn-chat-message-input__reply-content';
    const name = document.createElement('div');
    name.className = 'nn-chat-message-input__reply-name';
    name.appendChild(createChatIcon('nicon-a-Reply-linehuifu-xianxing'));
    const nameText = document.createElement('span');
    nameText.textContent = `正在回复：@${replyUser}`;
    name.appendChild(nameText);
    content.appendChild(name);
    const replyDesc = document.createElement('div');
    replyDesc.className = 'nn-chat-message-input__reply-text';
    replyDesc.textContent = replyText;
    content.appendChild(replyDesc);
    reply.appendChild(content);
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'nn-chat-message-input__reply-close';
    close.innerHTML = '<i class="nnicon nicon-a-closewireframeguanbi-xianxing"></i>';
    if (interactive) {
      close.addEventListener('click', function() {
        reply.remove();
        root.classList.remove('is-reply-fixed');
        model.state = model.textValue || model.imageList.length ? 'input' : 'empty';
        root.dataset.state = model.state;
      });
    }
    reply.appendChild(close);
  }

  const bar = document.createElement('div');
  bar.className = 'nn-chat-message-input__bar';
  if (shouldShowRecordGameId) {
    const recordGameId = document.createElement('div');
    recordGameId.className = 'nn-chat-message-input__record-game-id';
    if (typeof window !== 'undefined' && typeof window.createRecordGameIdPanel === 'function') {
      recordGameId.appendChild(window.createRecordGameIdPanel({ state: 'empty' }));
    }
    bar.appendChild(recordGameId);
  }
  const barInner = document.createElement('div');
  barInner.className = 'nn-chat-message-input__bar-inner';
  const imagePanel = document.createElement('div');
  imagePanel.className = 'nn-chat-message-input__image-panel';
  const imageListEl = document.createElement('div');
  imageListEl.className = 'nn-chat-message-input__image-list';
  const imageSliderHold = document.createElement('div');
  imageSliderHold.className = 'nn-chat-message-input__image-slider-hold';
  imagePanel.appendChild(imageListEl);
  imagePanel.appendChild(imageSliderHold);
  const imageScrollbar = typeof window !== 'undefined' && typeof window.createScrollbar === 'function'
    ? window.createScrollbar({
      target: imageListEl,
      container: imageSliderHold,
      hoverTarget: imagePanel,
      direction: 'horizontal',
      left: 0,
      right: 0,
      bottom: 0,
      minThumbSize: 60,
      className: 'nn-chat-message-input__image-scrollbar'
    })
    : null;
  const contentRow = document.createElement('div');
  contentRow.className = 'nn-chat-message-input__content-row';
  const leftIcon = document.createElement('button');
  leftIcon.type = 'button';
  leftIcon.className = 'nn-chat-message-input__left-icon';
  leftIcon.setAttribute('aria-label', '添加表情');
  if (interactive) {
    leftIcon.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  }
  if (!isSmallRestrictedState) {
    leftIcon.appendChild(createChatIcon('nicon-a-AddReaction-linetianjiabiaoqing-xianxing'));
    contentRow.appendChild(leftIcon);
  }

  const enter = document.createElement('div');
  enter.className = 'nn-chat-message-input__enter';
  const text = document.createElement('div');
  text.className = 'nn-chat-message-input__text';

  if (isSmallRestrictedState) {
    text.appendChild(createSmallRestrictedContent(state));
    enter.appendChild(text);
    contentRow.appendChild(enter);

    const actions = document.createElement('div');
    actions.className = 'nn-chat-message-input__actions';
    const icons = document.createElement('div');
    icons.className = 'nn-chat-message-input__icons';
    if (state === 'muted') {
      icons.appendChild(createChatButton({
        variant: 'system',
        level: 'secondary',
        size: 'small',
        text: '点击申诉',
        className: 'nn-chat-message-input__restricted-action'
      }));
    }
    actions.appendChild(icons);
    if (state === 'muted') {
      contentRow.appendChild(actions);
    }
    barInner.appendChild(contentRow);
    bar.appendChild(barInner);
    root.appendChild(bar);
    return root;
  }

  const editable = document.createElement('textarea');
  editable.className = 'nn-chat-message-input__editable';
  editable.rows = 1;
  editable.placeholder = placeholder;
  editable.value = model.textValue;
  editable.setAttribute('aria-label', '聊天输入');
  editable.readOnly = !interactive;
  text.appendChild(editable);

  const visualText = document.createElement('div');
  visualText.className = 'nn-chat-message-input__visual-text';
  visualText.classList.add('chat-input');
  visualText.contentEditable = interactive ? 'true' : 'false';
  visualText.setAttribute('role', 'textbox');
  visualText.setAttribute('aria-label', '聊天输入');
  visualText.spellcheck = false;
  const editorRow = document.createElement('div');
  editorRow.className = 'nn-chat-message-input__editor-row';
  editorRow.appendChild(visualText);
  const placeholderEl = document.createElement('span');
  placeholderEl.className = 'nn-chat-message-input__placeholder';
  placeholderEl.textContent = placeholder;
  editorRow.appendChild(placeholderEl);
  const returnAnchor = document.createElement('span');
  returnAnchor.className = 'nn-chat-message-input__return-anchor';
  returnAnchor.setAttribute('aria-hidden', 'true');
  returnAnchor.appendChild(createChatIcon('nicon-a-CarriageReturn-linehuiche-xianxing'));
  editorRow.appendChild(returnAnchor);
  text.appendChild(editorRow);

  enter.appendChild(text);
  contentRow.appendChild(enter);

  const actions = document.createElement('div');
  actions.className = 'nn-chat-message-input__actions';
  const icons = document.createElement('div');
  icons.className = 'nn-chat-message-input__icons';
  let sendButton = null;
  if (showSendButton) {
    sendButton = createChatButton({
      variant: 'system',
      level: 'primary',
      size: 'small',
      text: '发布',
      className: 'nn-chat-message-input__send'
    });
    icons.appendChild(sendButton);
  }
  if (showGift) {
    icons.appendChild(createChatIconButton('nicon-a-gift-lineliwudashang-xianxing', '礼物', function(event) {
      event.stopPropagation();
    }));
  }
  actions.appendChild(icons);
  contentRow.appendChild(actions);
  barInner.appendChild(imagePanel);
  barInner.appendChild(contentRow);
  const yScrollbar = typeof window !== 'undefined' && typeof window.createScrollbar === 'function'
    ? window.createScrollbar({
      target: barInner,
      container: bar,
      hoverTarget: bar,
      variant: 'page',
      top: function() {
        return barInner.getBoundingClientRect().top - bar.getBoundingClientRect().top;
      },
      right: function() {
        return isSmall ? 1 : 3;
      },
      bottom: function() {
        return bar.getBoundingClientRect().bottom - barInner.getBoundingClientRect().bottom;
      },
      minThumbSize: 60,
      className: 'nn-chat-message-input__y-scrollbar'
    })
    : null;
  if (reply) {
    bar.appendChild(reply);
  }
  bar.appendChild(barInner);

  const uploadInput = document.createElement('input');
  uploadInput.type = 'file';
  uploadInput.accept = 'image/*';
  uploadInput.className = 'nn-chat-message-input__upload-input';

  function resolvePictureType(src, img) {
    const normalized = String(src || '').toLowerCase();
    if (normalized.includes('.gif')) return 'gif';
    if (!img || !img.naturalWidth || !img.naturalHeight) return 'square';
    const ratio = img.naturalWidth / img.naturalHeight;
    if (ratio <= 0.56) return 'long';
    if (ratio <= 0.86) return 'portrait';
    if (ratio >= 1.45) return 'landscape';
    return 'square';
  }

  function applyPictureType(item, type) {
    const safeType = ['square', 'landscape', 'portrait', 'long', 'gif'].includes(type) ? type : 'square';
    item.dataset.pictureType = safeType;
    requestAnimationFrame(updateReturnAnchor);
  }

  function openImageViewer(src) {
    if (!src) return;
    const existing = document.querySelector('.nn-chat-image-viewer');
    if (existing) existing.remove();
    const viewer = document.createElement('div');
    viewer.className = 'nn-chat-image-viewer';
    viewer.setAttribute('role', 'dialog');
    viewer.setAttribute('aria-modal', 'true');
    viewer.setAttribute('aria-label', '图片预览');
    const previewImage = document.createElement('img');
    previewImage.className = 'nn-chat-image-viewer__image';
    previewImage.src = src;
    previewImage.alt = '';
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'nn-chat-image-viewer__close';
    close.setAttribute('aria-label', '关闭预览');
    close.innerHTML = '<i class="nnicon nicon-a-close-lineguanbi-xianxing"></i>';

    function closeViewer() {
      viewer.remove();
      document.removeEventListener('keydown', handleKeydown);
    }

    function handleKeydown(event) {
      if (event.key === 'Escape') closeViewer();
    }

    close.addEventListener('click', function(event) {
      event.stopPropagation();
      closeViewer();
    });
    viewer.addEventListener('click', function(event) {
      if (event.target === viewer) closeViewer();
    });
    document.addEventListener('keydown', handleKeydown);
    viewer.appendChild(previewImage);
    viewer.appendChild(close);
    document.body.appendChild(viewer);
  }

  function createImageItem(src, type = pictureType) {
    const item = document.createElement('span');
    item.className = 'nn-chat-message-input__image-item is-removable';
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', '预览图片');
    applyPictureType(item, type === 'auto' ? 'square' : type);
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.addEventListener('load', function() {
      if (type === 'auto') {
        applyPictureType(item, resolvePictureType(src, img));
      }
      updateImageScrollbar();
    }, { once: true });
    item.appendChild(img);
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'nn-chat-message-input__image-remove';
    remove.setAttribute('aria-label', '删除图片');
    remove.innerHTML = '<i class="nnicon nicon-a-delete-lineshanchulajitong-xianxing"></i>';
    remove.addEventListener('click', function(event) {
      event.stopPropagation();
      const removedSrc = item.dataset.src || src;
      model.imageList = model.imageList.filter(function(image) {
        return image !== removedSrc;
      });
      if (typeof onRemoveImage === 'function') onRemoveImage(removedSrc);
      renderImageList();
      syncState(model.imageList.length || getPlainText().trim() ? 'input' : 'empty');
    });
    item.dataset.src = src;
    item.appendChild(remove);
    item.addEventListener('keydown', function(event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openImageViewer(item.dataset.src || src);
    });
    return item;
  }

  function renderImageList() {
    imageListEl.innerHTML = '';
    model.imageList.forEach(function(src) {
      imageListEl.appendChild(createImageItem(src));
    });
    requestAnimationFrame(updateImageScrollbar);
    requestAnimationFrame(updateReturnAnchor);
  }

  function updateImageScrollbar() {
    const scrollable = model.imageList.length > 0 && imageListEl.scrollWidth > imageListEl.clientWidth + 1;
    root.classList.toggle('is-image-x-scroll', scrollable);
    if (imageScrollbar) {
      imageScrollbar.update();
    }
  }

  function getTextNodes(node) {
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, {
      acceptNode: function() {
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    let current = walker.nextNode();
    while (current) {
      nodes.push(current);
      current = walker.nextNode();
    }
    return nodes;
  }

  function getPlainText() {
    return getTextNodes(visualText).map(function(node) {
      return node.nodeValue;
    }).join('').replace(/\u200b/g, '').replace(/\u00a0/g, ' ');
  }

  function syncEditableValue() {
    editable.value = getPlainText();
  }

  function isRealTextNode(node) {
    return node && node.nodeType === Node.TEXT_NODE && node.nodeValue.replace(/[\u200b\u00a0\s]/g, '').length > 0;
  }

  function isTextLikeElement(node) {
    if (!node || node.nodeType !== Node.ELEMENT_NODE) return false;
    if (node.matches('[data-chat-image="true"]') || node.nodeName === 'BR') return false;
    return Boolean(node.textContent && node.textContent.replace(/[\u200b\u00a0\s]/g, '').length);
  }

  function normalizeImageTextFlow() {
    return false;
  }

  function hasEditableContent() {
    if (model.imageList.length > 0) return true;
    if (getPlainText().trim()) return true;
    if (model.emptyLineActive) return true;
    return Array.from(visualText.childNodes).some(function(node) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        return Boolean(node.textContent && node.textContent.replace(/\u200b/g, '').length);
      }
      return node.nodeType === Node.TEXT_NODE && node.nodeValue.replace(/\u200b/g, '').length > 0;
    });
  }

  function isEditorDomEmpty() {
    if (model.imageList.length > 0) return false;
    if (getPlainText().trim()) return false;
    return !Array.from(visualText.childNodes).some(function(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.nodeValue.replace(/[\u200b\u00a0\s]/g, '').length > 0;
      }
      if (node.nodeType === Node.ELEMENT_NODE) {
        return Boolean(node.textContent && node.textContent.replace(/[\u200b\u00a0\s]/g, '').length);
      }
      return false;
    });
  }

  function isOnlyEmptyEditableMarks() {
    if (model.imageList.length > 0) return false;
    if (getPlainText().replace(/[\u200b\u00a0\s]/g, '').length > 0) return false;
    return Array.from(visualText.childNodes).every(function(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.nodeValue.replace(/[\u200b\u00a0\s]/g, '').length === 0;
      }
      if (node.nodeType === Node.ELEMENT_NODE) {
        return node.nodeName === 'BR' || !node.textContent.replace(/[\u200b\u00a0\s]/g, '').length;
      }
      return true;
    });
  }

  function cleanupEmptyEditorMarks() {
    if (!isOnlyEmptyEditableMarks()) return false;
    visualText.innerHTML = '';
    editable.value = '';
    model.emptyLineActive = false;
    returnAnchor.style.display = 'none';
    return true;
  }

  function safeFocusEditor() {
    if (typeof visualText.focus === 'function') {
      visualText.focus();
    }
  }

  function placeCaretAtEnd() {
    safeFocusEditor();
    const range = document.createRange();
    range.selectNodeContents(visualText);
    range.collapse(false);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  function getEditorSelectionRange() {
    const selection = window.getSelection();
    if (!selection || !selection.rangeCount) return null;
    const range = selection.getRangeAt(0);
    return visualText.contains(range.commonAncestorContainer) ? range : null;
  }

  function insertSoftLineBreak() {
    safeFocusEditor();
    const range = getEditorSelectionRange() || document.createRange();
    if (!visualText.contains(range.commonAncestorContainer)) {
      range.selectNodeContents(visualText);
      range.collapse(true);
    }
    range.deleteContents();
    const lineBreak = document.createElement('br');
    const caretText = document.createTextNode('\u200b');
    range.insertNode(lineBreak);
    lineBreak.after(caretText);
    range.setStart(caretText, 1);
    range.collapse(true);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    model.emptyLineActive = true;
    syncState('input');
    if (caretText.parentNode) {
      range.setStart(caretText, 1);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }

  function renderInitialContent() {
    visualText.innerHTML = '';
    if (model.textValue) {
      visualText.appendChild(document.createTextNode(model.textValue));
    }
    renderImageList();
    syncEditableValue();
  }

  function syncState(nextState) {
    normalizeImageTextFlow();
    syncEditableValue();
    const hasValue = hasEditableContent();
    model.state = nextState || (hasValue ? 'input' : 'empty');
    root.dataset.state = model.state;
    root.classList.toggle('is-hover', model.state === 'hover');
    root.classList.toggle('is-focus', model.hasFocus);
    root.classList.toggle('is-has-value', hasValue);
    root.classList.toggle('is-has-image', model.imageList.length > 0);
    visualText.classList.toggle('is-empty', !hasValue);
    if (sendButton) sendButton.disabled = !hasValue;
    if (typeof onChange === 'function') {
      onChange({
        state: model.state,
        text: editable.value,
        images: model.imageList.slice()
      });
    }
    updateReturnAnchor();
    requestAnimationFrame(function() {
      updateImageScrollbar();
      updateYScrollbar();
      updateReturnAnchor();
    });
  }

  function updateYScrollbar() {
    const scrollable = barInner.scrollHeight > barInner.clientHeight + 1;
    root.classList.toggle('is-y-scroll', scrollable);
    if (yScrollbar) yScrollbar.update();
  }

  function getRangeRect(range) {
    let rect = range.getBoundingClientRect();
    if (rect && (rect.width || rect.height)) return rect;

    const marker = document.createElement('span');
    marker.textContent = '\u200b';
    marker.style.display = 'inline-block';
    marker.style.width = '0';
    marker.style.lineHeight = 'inherit';
    range.insertNode(marker);
    rect = marker.getBoundingClientRect();
    marker.remove();
    return rect;
  }

  function isTrailingLineBreakNode(node) {
    if (!node || node.nodeType !== Node.ELEMENT_NODE) return false;
    if (node.nodeName === 'BR') return true;
    if (!['DIV', 'P'].includes(node.nodeName)) return false;
    return !node.textContent.replace(/[\u200b\u00a0\s]/g, '').length && Boolean(node.querySelector('br') || node.childNodes.length === 0);
  }

  function getEditorEndRect() {
    const marker = document.createElement('span');
    marker.textContent = '\u200b';
    marker.style.display = 'inline-block';
    marker.style.width = '0';
    marker.style.lineHeight = 'inherit';
    visualText.appendChild(marker);
    const rect = marker.getBoundingClientRect();
    marker.remove();
    return rect;
  }

  function getImageNodeEndRect(node) {
    const imageRect = node.getBoundingClientRect();
    return {
      left: imageRect.right,
      top: imageRect.top,
      width: 0,
      height: imageRect.height,
      right: imageRect.right,
      bottom: imageRect.bottom
    };
  }

  function getLastRenderableNode(container, includeTrailingBreaks = model.emptyLineActive) {
    const nodes = Array.from(container.childNodes);
    for (let index = nodes.length - 1; index >= 0; index -= 1) {
      const node = nodes[index];
      if (node.nodeType === Node.TEXT_NODE) {
        if (node.nodeValue.replace(/[\u200b\u00a0]/g, '').length > 0) return node;
        continue;
      }
      if (node.nodeType !== Node.ELEMENT_NODE) continue;
      if (node.matches('[data-chat-image="true"]')) return node;
      if (node.nodeName === 'BR' || isTrailingLineBreakNode(node)) {
        if (includeTrailingBreaks) return node;
        continue;
      }
      const nestedNode = getLastRenderableNode(node, includeTrailingBreaks);
      if (nestedNode) return nestedNode;
    }
    return null;
  }

  function editorEndsWithTrailingBreak() {
    const lastNode = getLastRenderableNode(visualText, true);
    return Boolean(lastNode && lastNode.nodeType === Node.ELEMENT_NODE && (lastNode.nodeName === 'BR' || isTrailingLineBreakNode(lastNode)));
  }

  function getContentEndRect() {
    const lastNode = getLastRenderableNode(visualText);
    if (lastNode && lastNode.nodeType === Node.ELEMENT_NODE && lastNode.matches('[data-chat-image="true"]')) {
      return getImageNodeEndRect(lastNode);
    }
    return getEditorEndRect();
  }

  function updateReturnAnchor() {
    if (!hasEditableContent()) {
      returnAnchor.style.display = 'none';
      returnAnchor.classList.remove('is-image-tail');
      return;
    }
    const rowRect = editorRow.getBoundingClientRect();
    const visibleRect = barInner.getBoundingClientRect();

    function isRectVisible(rect) {
      return rect && rect.bottom > visibleRect.top && rect.top < visibleRect.bottom;
    }

    function applyAnchorPosition(rect, xOffset, yOffset) {
      if (!isRectVisible(rect)) {
        returnAnchor.style.display = 'none';
        return false;
      }
      returnAnchor.style.left = `${rect.left - rowRect.left + xOffset}px`;
      returnAnchor.style.top = `${rect.top - rowRect.top + yOffset}px`;
      returnAnchor.style.display = 'inline-flex';
      return true;
    }

    const lastNode = getLastRenderableNode(visualText, false);
    if (lastNode && lastNode.nodeType === Node.ELEMENT_NODE && lastNode.matches('[data-chat-image="true"]') && !model.emptyLineActive) {
      const imageRect = lastNode.getBoundingClientRect();
      returnAnchor.classList.add('is-image-tail');
      applyAnchorPosition({
        left: imageRect.right,
        top: imageRect.top,
        bottom: imageRect.bottom
      }, 6, 3);
      return;
    }
    const caretRect = getContentEndRect();
    if (!caretRect || !rowRect.width) {
      returnAnchor.style.display = 'none';
      return;
    }
    const lineHeight = caretRect.height > 24
      ? 22
      : Number.parseFloat(getComputedStyle(visualText).lineHeight) || 22;
    returnAnchor.classList.remove('is-image-tail');
    applyAnchorPosition(caretRect, 6, Math.max(0, (lineHeight - 16) / 2));
  }

  function addImage(src, file) {
    if (!src) return;
    model.imageList = model.imageList.concat(src);
    safeFocusEditor();
    renderImageList();
    placeCaretAtEnd();
    syncState('input');
    showChatMessage('图片已添加', 'success');
    if (typeof onUpload === 'function') {
      onUpload({ src, file, images: model.imageList.slice() });
    }
  }

  function clearContent() {
    if (!hasEditableContent()) return false;
    const removedImages = model.imageList.slice();
    visualText.innerHTML = '';
    editable.value = '';
    model.imageList = [];
    model.emptyLineActive = false;
    renderImageList();
    returnAnchor.style.display = 'none';
    syncState('empty');
    removedImages.forEach(function(src) {
      if (typeof onRemoveImage === 'function') onRemoveImage(src);
    });
    return true;
  }

  function sendContent(event) {
    if (event) event.stopPropagation();
    if (!hasEditableContent()) return;
    syncEditableValue();
    const payload = {
      text: editable.value,
      images: model.imageList.slice(),
      state: model.state,
      event: event || null
    };
    if (typeof onSend === 'function') {
      onSend(payload);
    } else {
      showChatMessage('消息已发送', 'success');
    }
    clearContent();
  }

  if (showUpload) {
    icons.appendChild(createChatIconButton('nicon-a-addwireframe-linetianjiadaixiankuang-xianxing', '添加图片', function(event) {
      event.stopPropagation();
      if (!interactive) return;
      uploadInput.click();
    }));
  }
  root.appendChild(bar);
  root.appendChild(uploadInput);

  if (interactive) {
    root.addEventListener('click', function(event) {
      if (event.target.closest('button')) return;
      safeFocusEditor();
    });

    visualText.addEventListener('focus', function() {
      model.hasFocus = true;
      syncState();
    });

    visualText.addEventListener('blur', function() {
      model.hasFocus = false;
      syncState();
    });

    visualText.addEventListener('input', function() {
      if (cleanupEmptyEditorMarks()) {
        syncState('empty');
        return;
      }
      model.emptyLineActive = editorEndsWithTrailingBreak();
      syncState();
    });

    barInner.addEventListener('scroll', function() {
      requestAnimationFrame(function() {
        updateYScrollbar();
        updateReturnAnchor();
      });
    });

    imageListEl.addEventListener('click', function(event) {
      const imageItem = event.target.closest('.nn-chat-message-input__image-item');
      if (!imageItem || event.target.closest('.nn-chat-message-input__image-remove')) return;
      event.stopPropagation();
      openImageViewer(imageItem.dataset.src);
    });

    visualText.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' && event.shiftKey) {
        event.preventDefault();
        insertSoftLineBreak();
        return;
      }
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendContent(event);
      }
      if (event.key === 'Backspace' || event.key === 'Delete') {
        requestAnimationFrame(function() {
          if (cleanupEmptyEditorMarks()) {
            syncState('empty');
          }
        });
      }
    });

    uploadInput.addEventListener('change', function(event) {
      const file = event.target.files && event.target.files[0];
      if (file) {
        addImage(URL.createObjectURL(file), file);
      }
      uploadInput.value = '';
    });

    if (sendButton) {
      sendButton.addEventListener('click', function(event) {
        sendContent(event);
      });
    }
  }

  function handleImageScrollbarResize() {
    if (!root.isConnected) {
      window.removeEventListener('resize', handleImageScrollbarResize);
      return;
    }
    updateImageScrollbar();
  }

  window.addEventListener('resize', handleImageScrollbarResize);

  renderInitialContent();
  syncState(state === 'hover' ? 'hover' : (shouldShowRecordGameId ? 'record' : undefined));
  return root;
}

function renderChatMessageInput(container, options = {}) {
  const target = typeof container === 'string' ? document.querySelector(container) : container;
  if (!target) return;
  target.innerHTML = '';
  target.appendChild(createChatMessageInput(options));
}

if (typeof window !== 'undefined') {
  window.injectMessageSentStyles = injectMessageSentStyles;
  if (typeof window.injectChatStyles !== 'function') {
    window.injectChatStyles = injectMessageSentStyles;
  }
  window.createChatMessageInput = createChatMessageInput;
  window.renderChatMessageInput = renderChatMessageInput;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectMessageSentStyles,
    injectChatStyles: injectMessageSentStyles,
    createChatMessageInput,
    renderChatMessageInput
  };
}
