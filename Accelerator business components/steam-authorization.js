const AcceleratorSteamAuthorizationStyles = `
  .accelerator-steam-authorization {
    position: absolute;
    inset: var(--space0);
    z-index: 120;
    display: grid;
    place-items: center;
    background: var(--Black-A60);
    font-family: var(--font-family-main);
  }

  .accelerator-steam-authorization__dialog.nn-toast {
    width: 500px;
    max-width: calc(100% - var(--space48));
    max-height: calc(100% - var(--space48));
    overflow: auto;
    border-color: var(--gray-8);
    background: var(--gray-2);
    box-shadow: var(--shadow-lg);
  }

  .accelerator-steam-authorization__dialog .nn-toast__body {
    gap: var(--space24);
  }

  .accelerator-steam-authorization__dialog .nn-toast__title {
    font-size: var(--font-size-header-3);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-header-3);
  }

  .accelerator-steam-authorization__dialog .nn-toast__content {
    color: var(--gray-4);
  }

  .accelerator-steam-authorization__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space40);
    width: 100%;
  }

  .accelerator-steam-authorization__steps {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: var(--space8);
    width: 420px;
    max-width: 100%;
  }

  .accelerator-steam-authorization__step {
    display: flex;
    flex: 1 1 0;
    align-items: center;
    gap: var(--space8);
    min-width: 0;
  }

  .accelerator-steam-authorization__step:last-child {
    flex: 0 0 auto;
  }

  .accelerator-steam-authorization__step-dot {
    display: grid;
    width: 20px;
    height: 20px;
    flex: 0 0 20px;
    place-items: center;
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-round);
    box-sizing: border-box;
    color: var(--gray-3);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }

  .accelerator-steam-authorization__step.is-active .accelerator-steam-authorization__step-dot,
  .accelerator-steam-authorization__step.is-complete .accelerator-steam-authorization__step-dot {
    border-color: var(--Esports-Blue-LD);
    color: var(--Esports-Blue-LD);
  }

  .accelerator-steam-authorization__step-dot .nnicon {
    font-size: var(--icon-size-x5);
    line-height: var(--icon-size-x5);
  }

  .accelerator-steam-authorization__step-label {
    color: var(--gray-5);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-body);
    white-space: nowrap;
  }

  .accelerator-steam-authorization__step-line {
    height: 1px;
    flex: 1 1 auto;
    min-width: var(--space8);
    background: var(--gray-8);
  }

  .accelerator-steam-authorization__step.is-complete .accelerator-steam-authorization__step-line {
    background: var(--Esports-Blue-LD);
  }

  .accelerator-steam-authorization__stage {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space16);
    width: 100%;
  }

  .accelerator-steam-authorization__hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space12);
    width: 100%;
    text-align: center;
  }

  .accelerator-steam-authorization__steam-logo {
    display: inline-flex;
    width: 80px;
    height: 80px;
    margin-bottom: var(--space4);
    align-items: center;
    justify-content: center;
    color: var(--gray-4);
    font-size: var(--icon-size-x40);
    line-height: var(--icon-size-x40);
  }

  .accelerator-steam-authorization__steam-logo.nnicon {
    font-size: var(--icon-size-x40);
    line-height: var(--icon-size-x40);
  }

  .accelerator-steam-authorization__title,
  .accelerator-steam-authorization__caption {
    margin: var(--space0);
  }

  .accelerator-steam-authorization__title {
    color: var(--gray-4);
    font-size: var(--font-size-title);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-title);
  }

  .accelerator-steam-authorization__caption {
    color: var(--gray-6);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
  }

  .accelerator-steam-authorization__tasks {
    display: flex;
    flex-direction: column;
    gap: var(--space16);
    width: 100%;
  }

  .accelerator-steam-authorization__task {
    display: flex;
    min-height: 64px;
    align-items: center;
    gap: var(--space32);
    padding: var(--space10);
    border: 1px solid var(--gray-9);
    border-radius: var(--border-radius-4r);
    box-sizing: border-box;
    background: var(--gray-10);
  }

  .accelerator-steam-authorization__task-main {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: var(--space16);
    min-width: 0;
  }

  .accelerator-steam-authorization__task-icon {
    display: grid;
    width: 44px;
    height: 44px;
    flex: 0 0 44px;
    place-items: center;
    border-radius: var(--border-radius-4r);
    background: var(--gray-10);
    color: var(--gray-5);
    font-size: var(--icon-size-x12);
  }

  .accelerator-steam-authorization__task-icon .nnicon {
    font-size: var(--icon-size-x12);
    line-height: var(--icon-size-x12);
  }

  .accelerator-steam-authorization__task-copy {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: var(--space8);
    min-width: 0;
  }

  .accelerator-steam-authorization__task-title {
    color: var(--gray-3);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
  }

  .accelerator-steam-authorization__task-caption {
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }

  .accelerator-steam-authorization__task-link,
  .accelerator-steam-authorization__agreement-link {
    color: var(--Link);
    text-decoration: underline;
    text-underline-offset: var(--space2);
  }

  .accelerator-steam-authorization__status {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    gap: var(--space2);
    padding: var(--space4) var(--space8);
    border-radius: var(--border-radius-2r);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
  }

  .accelerator-steam-authorization__status .nnicon {
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .accelerator-steam-authorization__status.is-pending {
    background: var(--gray-9);
    color: var(--gray-5);
  }

  .accelerator-steam-authorization__status.is-pending .nnicon {
    animation: accelerator-steam-authorization-spin 0.8s linear infinite;
  }

  .accelerator-steam-authorization__status.is-success {
    background: color-mix(in srgb, var(--Green) 12%, transparent);
    color: var(--Green);
  }

  .accelerator-steam-authorization__status.is-error {
    background: color-mix(in srgb, var(--Red) 12%, transparent);
    color: var(--Red);
  }

  .accelerator-steam-authorization__login-image {
    display: block;
    width: 400px;
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }

  .accelerator-steam-authorization__success-icon {
    position: relative;
    display: grid;
    width: 56px;
    height: 56px;
    margin: var(--space28) var(--space0) var(--space4);
    place-items: center;
  }

  .accelerator-steam-authorization__success-rings {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 144px;
    height: 144px;
    pointer-events: none;
    transform: translate(-50%, -50%);
    -webkit-mask-image: linear-gradient(to bottom, var(--Neutral-0) 0%, var(--Neutral-0) 24%, transparent 68%);
    mask-image: linear-gradient(to bottom, var(--Neutral-0) 0%, var(--Neutral-0) 24%, transparent 68%);
  }

  .accelerator-steam-authorization__success-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid var(--Green);
    border-radius: var(--border-radius-round);
    box-sizing: border-box;
    opacity: 0.18;
    transform: translate(-50%, -50%);
  }

  .accelerator-steam-authorization__success-ring--outer {
    width: 144px;
    height: 144px;
  }

  .accelerator-steam-authorization__success-ring--middle {
    width: 104px;
    height: 104px;
  }

  .accelerator-steam-authorization__success-ring--inner {
    width: 72px;
    height: 72px;
  }

  .accelerator-steam-authorization__success-mark {
    position: relative;
    z-index: 1;
    display: grid;
    width: 56px;
    height: 56px;
    place-items: center;
    border-radius: var(--border-radius-round);
    background: var(--gray-2);
    color: var(--Green);
    box-shadow: var(--shadow-md);
  }

  .accelerator-steam-authorization__success-mark .nnicon {
    font-size: var(--icon-size-x16);
    line-height: var(--icon-size-x16);
  }

  .accelerator-steam-authorization__account {
    display: flex;
    width: 100%;
    align-items: center;
    gap: var(--space12);
    padding: var(--space12);
    border: 1px solid var(--gray-9);
    border-radius: var(--border-radius-4r);
    box-sizing: border-box;
    background: var(--gray-10);
  }

  .accelerator-steam-authorization__account-copy {
    display: flex;
    flex-direction: column;
    gap: var(--space4);
    min-width: 0;
  }

  .accelerator-steam-authorization__account-avatar {
    display: grid;
    width: 44px;
    height: 44px;
    flex: 0 0 44px;
    place-items: center;
    border-radius: var(--border-radius-4r);
    background: var(--gray-9);
    color: var(--gray-5);
  }

  .accelerator-steam-authorization__account-avatar .nnicon {
    font-size: var(--icon-size-x12);
    line-height: var(--icon-size-x12);
  }

  .accelerator-steam-authorization__account-name,
  .accelerator-steam-authorization__account-id {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .accelerator-steam-authorization__account-name {
    color: var(--gray-3);
    font-size: var(--font-size-subtitle);
    line-height: var(--line-height-subtitle);
  }

  .accelerator-steam-authorization__account-id {
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }

  .accelerator-steam-authorization__dialog .nn-toast__footer {
    gap: var(--space16);
  }

  .accelerator-steam-authorization__agreement {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .accelerator-steam-authorization__dialog .accelerator-steam-authorization__agreement .nn-checkbox__label {
    color: var(--gray-6);
  }

  .accelerator-steam-authorization__footer-buttons {
    display: flex;
    gap: var(--space16);
    width: 400px;
    max-width: 100%;
  }

  .accelerator-steam-authorization__footer-buttons .nn-btn {
    flex: 1 1 0;
    min-height: 40px;
  }

  .accelerator-steam-authorization__accelerate-button .nn-btn-progress__fill {
    transition: none;
    will-change: width;
  }

  .accelerator-steam-authorization__hint {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: var(--space4);
    color: var(--Red);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
    text-align: center;
  }

  .accelerator-steam-authorization__hint .nnicon {
    flex: 0 0 auto;
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .accelerator-steam-authorization__hint-action.nn-btn {
    min-width: 0;
    min-height: 0;
    padding: var(--space0);
    color: var(--Link);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
    text-decoration: underline;
  }

  @keyframes accelerator-steam-authorization-spin {
    to { transform: rotate(360deg); }
  }

  @media (max-width: 560px) {
    .accelerator-steam-authorization__dialog.nn-toast {
      max-width: calc(100% - var(--space24));
      max-height: calc(100% - var(--space24));
    }

    .accelerator-steam-authorization__step-label {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .accelerator-steam-authorization__status.is-pending .nnicon {
      animation: none;
    }
  }
`;

function injectAcceleratorSteamAuthorizationStyles() {
  const previous = document.getElementById('accelerator-steam-authorization-styles');
  if (previous) previous.remove();
  const style = document.createElement('style');
  style.id = 'accelerator-steam-authorization-styles';
  style.textContent = AcceleratorSteamAuthorizationStyles;
  document.head.appendChild(style);
}

function createAcceleratorSteamAuthorizationModal(options = {}) {
  if (typeof window.createToast !== 'function') throw new Error('Steam authorization requires createToast.');
  if (typeof window.createButton !== 'function') throw new Error('Steam authorization requires createButton.');
  if (typeof window.createCheckbox !== 'function') throw new Error('Steam authorization requires createCheckbox.');
  if (typeof window.createAvatar !== 'function') throw new Error('Steam authorization requires createAvatar.');

  injectAcceleratorSteamAuthorizationStyles();
  if (typeof window.injectButtonStyles === 'function') window.injectButtonStyles();
  if (typeof window.injectCheckboxStyles === 'function') window.injectCheckboxStyles();

  const mountTarget = options.mountTarget
    || (options.trigger && options.trigger.closest('.accelerator-home-frame'))
    || document.body;
  const previousFocus = document.activeElement;
  const overlay = document.createElement('div');
  overlay.className = 'accelerator-steam-authorization';

  const content = document.createElement('div');
  content.className = 'accelerator-steam-authorization__content';

  const state = {
    step: 1,
    accelerating: false,
    progress: 0,
    agreementChecked: options.agreementChecked !== false,
    pageOpened: false,
    authorizationStatus: 'idle',
    authorizationResult: null,
    steamLaunched: false,
    loginChecking: false,
    hint: '',
    account: null
  };

  const authorizationUrl = options.steamAuthorizationUrl || 'https://steamcommunity.com/login/home/';
  const downloadUrl = options.steamDownloadUrl || 'https://store.steampowered.com/about/';
  let dialog = null;
  let closed = false;
  let accelerateButton = null;
  let accelerateProgressFrame = 0;
  let displayedAccelerateProgress = 0;

  function asPromise(value) {
    return value && typeof value.then === 'function' ? value : Promise.resolve(value);
  }

  function openExternal(url) {
    const opened = window.open(url, '_blank', 'noopener,noreferrer');
    if (opened) opened.opener = null;
  }

  function closeModal(reason = 'close') {
    if (closed) return;
    closed = true;
    stopAccelerateProgress();
    document.removeEventListener('keydown', handleKeydown);
    overlay.remove();
    if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
    if (typeof options.onClose === 'function') options.onClose(reason, state);
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') closeModal('escape');
  }

  function createSteps() {
    const labels = ['加速Steam', '授权/设置', '登录Steam', '完成'];
    const steps = document.createElement('div');
    steps.className = 'accelerator-steam-authorization__steps';
    steps.setAttribute('aria-label', 'Steam 授权进度');

    labels.forEach(function(label, index) {
      const number = index + 1;
      const isComplete = number < state.step || (state.step === 4 && number === 4);
      const item = document.createElement('div');
      item.className = [
        'accelerator-steam-authorization__step',
        number === state.step ? 'is-active' : '',
        isComplete ? 'is-complete' : ''
      ].filter(Boolean).join(' ');

      const dot = document.createElement('span');
      dot.className = 'accelerator-steam-authorization__step-dot';
      dot.innerHTML = isComplete
        ? '<i class="nnicon nicon-a-check-boldwancheng-jiacu" aria-hidden="true"></i>'
        : String(number);
      item.appendChild(dot);

      const text = document.createElement('span');
      text.className = 'accelerator-steam-authorization__step-label';
      text.textContent = label;
      item.appendChild(text);

      if (number < labels.length) {
        const line = document.createElement('span');
        line.className = 'accelerator-steam-authorization__step-line';
        item.appendChild(line);
      }
      steps.appendChild(item);
    });
    return steps;
  }

  function createHero(titleText, captionText) {
    const hero = document.createElement('div');
    hero.className = 'accelerator-steam-authorization__hero';
    const title = document.createElement('h4');
    title.className = 'accelerator-steam-authorization__title';
    title.textContent = titleText;
    hero.appendChild(title);
    if (captionText) {
      const caption = document.createElement('p');
      caption.className = 'accelerator-steam-authorization__caption';
      caption.textContent = captionText;
      hero.appendChild(caption);
    }
    return hero;
  }

  function setHint(message) {
    state.hint = message || '';
    render();
  }

  function createHint(message, action) {
    if (!message) return null;
    const hint = document.createElement('div');
    hint.className = 'accelerator-steam-authorization__hint';
    hint.setAttribute('role', 'status');
    const icon = document.createElement('i');
    icon.className = 'nnicon nicon-a-warning-fillweixianjingshi-mianxing';
    icon.setAttribute('aria-hidden', 'true');
    hint.appendChild(icon);
    const text = document.createElement('span');
    text.textContent = message;
    hint.appendChild(text);
    if (action) hint.appendChild(action);
    return hint;
  }

  function createTask(config) {
    const task = document.createElement('div');
    task.className = 'accelerator-steam-authorization__task';
    const main = document.createElement('div');
    main.className = 'accelerator-steam-authorization__task-main';
    const icon = document.createElement('span');
    icon.className = 'accelerator-steam-authorization__task-icon';
    icon.innerHTML = '<i class="nnicon ' + config.icon + '" aria-hidden="true"></i>';
    main.appendChild(icon);
    const copy = document.createElement('div');
    copy.className = 'accelerator-steam-authorization__task-copy';
    const title = document.createElement('span');
    title.className = 'accelerator-steam-authorization__task-title';
    title.textContent = config.title;
    copy.appendChild(title);
    const caption = document.createElement('span');
    caption.className = 'accelerator-steam-authorization__task-caption';
    caption.textContent = config.caption;
    if (config.tutorial) {
      caption.appendChild(document.createTextNode('  '));
      const tutorial = document.createElement('span');
      tutorial.className = 'accelerator-steam-authorization__task-link';
      tutorial.textContent = '查看教程';
      caption.appendChild(tutorial);
    }
    copy.appendChild(caption);
    main.appendChild(copy);
    task.appendChild(main);

    if (config.status && config.status !== 'idle') {
      const statusMap = {
        pending: ['检测中', 'is-pending', 'nicon-a-loadingjiazai'],
        success: ['已完成', 'is-success', 'nicon-a-check-linewancheng-xianxing'],
        error: ['未完成', 'is-error', 'nicon-a-warning-fillweixianjingshi-mianxing']
      };
      const statusData = statusMap[config.status];
      const badge = document.createElement('span');
      badge.className = 'accelerator-steam-authorization__status ' + statusData[1];
      badge.innerHTML = '<i class="nnicon ' + statusData[2] + '" aria-hidden="true"></i><span>' + statusData[0] + '</span>';
      task.appendChild(badge);
    }
    return task;
  }

  function setFooter(nodes) {
    const footer = dialog.querySelector('.nn-toast__footer');
    footer.replaceChildren();
    nodes.filter(Boolean).forEach(function(node) { footer.appendChild(node); });
  }

  function createFooterButtons(configs) {
    const wrap = document.createElement('div');
    wrap.className = 'accelerator-steam-authorization__footer-buttons';
    configs.forEach(function(config) {
      wrap.appendChild(createButton(Object.assign({
        variant: 'system',
        level: 'primary',
        size: 'large'
      }, config)));
    });
    return wrap;
  }

  function stopAccelerateProgress() {
    if (!accelerateProgressFrame) return;
    window.cancelAnimationFrame(accelerateProgressFrame);
    accelerateProgressFrame = 0;
  }

  function setAccelerateProgress(value) {
    const normalized = Math.max(0, Math.min(100, Number(value) || 0));
    const rounded = Math.round(normalized);
    displayedAccelerateProgress = normalized;
    state.progress = rounded;
    if (!accelerateButton || !accelerateButton.isConnected) return;
    accelerateButton.style.setProperty('--nn-btn-progress', normalized + '%');
    accelerateButton.setAttribute('aria-valuenow', String(rounded));
    const text = accelerateButton.querySelector('.nn-btn-text');
    if (text && text.textContent !== '正在加速...' + rounded + '%') {
      text.textContent = '正在加速...' + rounded + '%';
    }
  }

  function animateAccelerateProgress(target, duration, onComplete) {
    stopAccelerateProgress();
    const startValue = displayedAccelerateProgress;
    const distance = target - startValue;
    const reduceMotion = window.matchMedia
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || duration <= 0 || distance <= 0) {
      setAccelerateProgress(target);
      if (typeof onComplete === 'function') onComplete();
      return;
    }

    const startedAt = window.performance.now();
    function tick(now) {
      if (closed || !state.accelerating) {
        accelerateProgressFrame = 0;
        return;
      }
      const elapsed = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setAccelerateProgress(startValue + distance * eased);
      if (elapsed < 1) {
        accelerateProgressFrame = window.requestAnimationFrame(tick);
        return;
      }
      accelerateProgressFrame = 0;
      if (typeof onComplete === 'function') onComplete();
    }
    accelerateProgressFrame = window.requestAnimationFrame(tick);
  }

  function startAccelerateProgress() {
    displayedAccelerateProgress = 0;
    setAccelerateProgress(0);
    animateAccelerateProgress(92, 1400);
  }

  function completeAccelerateProgress(onComplete) {
    animateAccelerateProgress(100, 240, onComplete);
  }

  function renderStepOne(stage) {
    const logo = document.createElement('span');
    logo.className = 'nnicon nicon-a-STEAM-lineSTEAM-xianxing accelerator-steam-authorization__steam-logo';
    logo.setAttribute('role', 'img');
    logo.setAttribute('aria-label', 'Steam');
    stage.appendChild(logo);
    stage.appendChild(createHero('请先加速 Steam 商店', '加速后能确保顺利的打开 Steam 页面'));

    const button = createFooterButtons([{
      text: state.accelerating ? '正在加速...' + state.progress + '%' : '加速 Steam 商店',
      disabled: state.accelerating,
      progress: state.accelerating ? state.progress : null,
      className: 'accelerator-steam-authorization__accelerate-button',
      onClick: accelerateSteam
    }]);
    accelerateButton = button.querySelector('.accelerator-steam-authorization__accelerate-button');
    const hint = createHint(state.hint);
    setFooter([hint, button]);
  }

  function accelerateSteam() {
    if (state.accelerating) return;
    state.accelerating = true;
    state.progress = 0;
    state.hint = '';
    render();
    startAccelerateProgress();
    const request = typeof options.onAccelerateSteam === 'function'
      ? options.onAccelerateSteam(state)
      : new Promise(function(resolve) { window.setTimeout(function() { resolve({ success: true }); }, 650); });
    asPromise(request).then(function(result) {
      if (closed) return;
      if (result === false || (result && result.success === false)) {
        stopAccelerateProgress();
        state.accelerating = false;
        state.progress = 0;
        state.hint = (result && result.message) || 'Steam 商店加速失败，请重试';
        render();
        return;
      }
      completeAccelerateProgress(function() {
        if (closed) return;
        state.accelerating = false;
        state.progress = 100;
        state.step = 2;
        render();
      });
    }).catch(function(error) {
      if (closed) return;
      stopAccelerateProgress();
      state.accelerating = false;
      state.progress = 0;
      state.hint = error && error.message ? error.message : 'Steam 商店加速失败，请重试';
      render();
    });
  }

  function authorizationCardStatus(field) {
    if (state.authorizationStatus === 'pending') return 'pending';
    if (state.authorizationStatus !== 'result' || !state.authorizationResult) return 'idle';
    return state.authorizationResult[field] ? 'success' : 'error';
  }

  function renderStepTwo(stage) {
    stage.appendChild(createHero('请前往 Steam 完成以下任务', '打开 Steam 后，当前页面将自动检测完成情况'));
    const tasks = document.createElement('div');
    tasks.className = 'accelerator-steam-authorization__tasks';
    tasks.appendChild(createTask({
      icon: 'nicon-a-Human-Lineren-xianxing',
      title: '账号授权',
      caption: '在 Steam 端完成登录即可看到授权窗口',
      status: authorizationCardStatus('authorized')
    }));
    tasks.appendChild(createTask({
      icon: 'nicon-a-check-linechakan-xianxing',
      title: '设为公开：个人资料、游戏详情',
      caption: '在账号资料页面将选项设为“公开”',
      tutorial: true,
      status: authorizationCardStatus('profilePublic')
    }));
    stage.appendChild(tasks);

    const footerNodes = [];
    if (!state.pageOpened) {
      const agreement = document.createElement('div');
      agreement.className = 'accelerator-steam-authorization__agreement';
      const checkbox = createCheckbox({
        text: '我已阅读并同意 Steam授权协议',
        checked: state.agreementChecked,
        interactive: true,
        onChange: function() {
          state.agreementChecked = !state.agreementChecked;
          render();
        }
      });
      const label = checkbox.querySelector('.nn-checkbox__label');
      if (label) {
        const text = label.textContent;
        label.textContent = '';
        label.appendChild(document.createTextNode(text.replace('Steam授权协议', '')));
        const link = document.createElement('span');
        link.className = 'accelerator-steam-authorization__agreement-link';
        link.textContent = 'Steam授权协议';
        label.appendChild(link);
      }
      agreement.appendChild(checkbox);
      footerNodes.push(agreement);
      footerNodes.push(createFooterButtons([{
        text: '打开 Steam 页面',
        disabled: !state.agreementChecked,
        onClick: openSteamAuthorization
      }]));
    } else {
      const hint = createHint(state.hint);
      footerNodes.push(hint);
      footerNodes.push(createFooterButtons([
        { text: '我已完成以上操作', disabled: state.authorizationStatus === 'pending', onClick: checkAuthorization },
        { text: '重新打开Steam页面', level: 'secondary', disabled: state.authorizationStatus === 'pending', onClick: openSteamAuthorization }
      ]));
    }
    setFooter(footerNodes);
  }

  function openSteamAuthorization() {
    state.pageOpened = true;
    state.authorizationStatus = 'idle';
    state.authorizationResult = null;
    state.hint = '';
    if (typeof options.onOpenSteamAuthorization === 'function') {
      options.onOpenSteamAuthorization(authorizationUrl, state);
    } else {
      openExternal(authorizationUrl);
    }
    render();
  }

  function checkAuthorization() {
    state.authorizationStatus = 'pending';
    state.authorizationResult = null;
    state.hint = '';
    render();
    const request = typeof options.onCheckAuthorization === 'function'
      ? options.onCheckAuthorization(state)
      : new Promise(function(resolve) {
          window.setTimeout(function() { resolve({ authorized: true, profilePublic: true }); }, 700);
        });
    asPromise(request).then(function(result) {
      const normalized = Object.assign({ authorized: false, profilePublic: false }, result || {});
      state.authorizationStatus = 'result';
      state.authorizationResult = normalized;
      if (!normalized.authorized) {
        state.hint = normalized.message || '检测到 Steam 账号尚未完成授权，请完成授权后重试';
      } else if (!normalized.profilePublic) {
        state.hint = normalized.message || '检测到「个人资料/游戏详情」仍为仅好友可见，请设为公开后重试';
      } else {
        state.hint = '';
      }
      render();
      if (normalized.authorized && normalized.profilePublic) {
        window.setTimeout(function() {
          if (closed || state.step !== 2) return;
          state.step = 3;
          state.authorizationStatus = 'idle';
          render();
        }, 650);
      }
    }).catch(function(error) {
      state.authorizationStatus = 'result';
      state.authorizationResult = { authorized: false, profilePublic: false };
      state.hint = error && error.message ? error.message : '授权状态检测失败，请重试';
      render();
    });
  }

  function renderStepThree(stage) {
    const illustration = document.createElement('img');
    illustration.className = 'accelerator-steam-authorization__login-image';
    illustration.src = options.loginIllustrationSrc || '../image/Steam authorization/login-illustration-provided.png';
    illustration.alt = 'Steam 客户端登录示意';
    stage.appendChild(illustration);
    stage.appendChild(createHero(
      '请打开Steam客户端，并登录授权账号',
      '如登录的Steam账号与授权账号不一致，将优先展示登录账号的内容'
    ));

    let hint = null;
    if (state.hint === 'not-installed') {
      const download = createButton({
        text: '立即前往',
        variant: 'system',
        level: 'tertiary',
        size: 'small',
        className: 'accelerator-steam-authorization__hint-action',
        onClick: function() { openExternal(downloadUrl); }
      });
      hint = createHint('检测到「未安装Steam客户端」请前往Steam官网进行下载', download);
    } else {
      hint = createHint(state.hint);
    }

    setFooter([
      hint,
      createFooterButtons([{
        text: state.steamLaunched ? '我已成功登录Steam' : '登录Steam',
        disabled: state.loginChecking,
        onClick: state.steamLaunched ? checkSteamLogin : launchSteam
      }])
    ]);
  }

  function launchSteam() {
    state.hint = '';
    state.loginChecking = true;
    render();
    if (typeof options.onLaunchSteam === 'function') options.onLaunchSteam('steam://open/main', state);
    const request = typeof options.onCheckSteamInstalled === 'function'
      ? options.onCheckSteamInstalled(state)
      : Promise.resolve({ installed: true, launched: true });
    asPromise(request).then(function(result) {
      state.loginChecking = false;
      if (result === false || (result && result.installed === false)) {
        state.steamLaunched = false;
        state.hint = 'not-installed';
        render();
        return;
      }
      state.steamLaunched = true;
      state.hint = '';
      const isLocalPreview = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost';
      if (typeof options.onLaunchSteam !== 'function' && !isLocalPreview) {
        window.location.href = 'steam://open/main';
      }
      render();
    }).catch(function(error) {
      state.loginChecking = false;
      state.steamLaunched = false;
      state.hint = (error && error.message) || 'not-installed';
      render();
    });
  }

  function checkSteamLogin() {
    state.loginChecking = true;
    state.hint = '';
    render();
    const request = typeof options.onCheckSteamLogin === 'function'
      ? options.onCheckSteamLogin(state)
      : new Promise(function(resolve) {
          window.setTimeout(function() {
            resolve({
              loggedIn: true,
              steamId: '76561198805355097',
              authorizedSteamId: '76561198805355097',
              displayName: '150****8473',
              avatarSrc: '../image/Avatar/头像1095.png'
            });
          }, 650);
        });
    asPromise(request).then(function(result) {
      state.loginChecking = false;
      if (!result || result.loggedIn === false || !result.steamId) {
        state.steamLaunched = false;
        state.hint = (result && result.message) || '检测到您还未登录Steam，请重新登录';
        render();
        return;
      }
      const finish = function(account) {
        state.account = Object.assign({}, result, account || {});
        state.step = 4;
        state.hint = '';
        render();
      };
      if (result.authorizedSteamId && result.authorizedSteamId !== result.steamId && typeof options.onBindSteamAccount === 'function') {
        asPromise(options.onBindSteamAccount(result, state)).then(finish).catch(function(error) {
          state.steamLaunched = false;
          state.hint = error && error.message ? error.message : 'Steam 账号绑定失败，请重试';
          render();
        });
      } else {
        finish(result);
      }
    }).catch(function(error) {
      state.loginChecking = false;
      state.steamLaunched = false;
      state.hint = error && error.message ? error.message : '检测到您还未登录Steam，请重新登录';
      render();
    });
  }

  function renderStepFour(stage) {
    const success = document.createElement('span');
    success.className = 'accelerator-steam-authorization__success-icon';
    const rings = document.createElement('span');
    rings.className = 'accelerator-steam-authorization__success-rings';
    rings.setAttribute('aria-hidden', 'true');
    ['outer', 'middle', 'inner'].forEach(function(size) {
      const ring = document.createElement('span');
      ring.className = 'accelerator-steam-authorization__success-ring accelerator-steam-authorization__success-ring--' + size;
      rings.appendChild(ring);
    });
    const mark = document.createElement('span');
    mark.className = 'accelerator-steam-authorization__success-mark';
    mark.innerHTML = '<i class="nnicon nicon-a-Checked-fillyigouxuan-mianxing" aria-hidden="true"></i>';
    success.appendChild(rings);
    success.appendChild(mark);
    stage.appendChild(success);
    stage.appendChild(createHero('授权成功'));

    const account = state.account || {};
    const card = document.createElement('div');
    card.className = 'accelerator-steam-authorization__account';
    const avatar = document.createElement('span');
    avatar.className = 'accelerator-steam-authorization__account-avatar';
    avatar.setAttribute('aria-hidden', 'true');
    avatar.innerHTML = '<i class="nnicon nicon-a-Human-Lineren-xianxing"></i>';
    card.appendChild(avatar);
    const copy = document.createElement('div');
    copy.className = 'accelerator-steam-authorization__account-copy';
    const name = document.createElement('span');
    name.className = 'accelerator-steam-authorization__account-name';
    name.textContent = account.displayName || '150****8473';
    copy.appendChild(name);
    const id = document.createElement('span');
    id.className = 'accelerator-steam-authorization__account-id';
    id.textContent = 'Steam ID: ' + (account.steamId || '76561198805355097');
    copy.appendChild(id);
    card.appendChild(copy);
    stage.appendChild(card);

    setFooter([createFooterButtons([{
      text: '确定',
      onClick: function() {
        if (typeof options.onComplete === 'function') options.onComplete(state.account, state);
        closeModal('complete');
      }
    }])]);
  }

  function render() {
    if (!dialog) return;
    accelerateButton = null;
    content.replaceChildren();
    content.appendChild(createSteps());
    const stage = document.createElement('div');
    stage.className = 'accelerator-steam-authorization__stage';
    content.appendChild(stage);
    if (state.step === 1) renderStepOne(stage);
    if (state.step === 2) renderStepTwo(stage);
    if (state.step === 3) renderStepThree(stage);
    if (state.step === 4) renderStepFour(stage);
  }

  dialog = createToast({
    title: 'Steam 授权',
    content: content,
    showFooter: true,
    showClose: true,
    footer: { slot: document.createElement('span') },
    className: 'accelerator-steam-authorization__dialog',
    onClose: function() { closeModal('close-button'); }
  });
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-labelledby', 'accelerator-steam-authorization-title');
  const title = dialog.querySelector('.nn-toast__title');
  if (title) title.id = 'accelerator-steam-authorization-title';
  const closeButton = dialog.querySelector('.nn-toast__close');
  if (closeButton) closeButton.setAttribute('aria-label', '关闭 Steam 授权弹窗');

  overlay.appendChild(dialog);
  overlay.addEventListener('click', function(event) {
    if (event.target === overlay) closeModal('backdrop');
  });
  document.addEventListener('keydown', handleKeydown);
  mountTarget.appendChild(overlay);
  render();

  requestAnimationFrame(function() {
    if (closeButton) closeButton.focus();
  });

  overlay.close = closeModal;
  overlay.dialog = dialog;
  overlay.state = state;
  overlay.render = render;
  return overlay;
}

if (typeof window !== 'undefined') {
  window.injectAcceleratorSteamAuthorizationStyles = injectAcceleratorSteamAuthorizationStyles;
  window.createAcceleratorSteamAuthorizationModal = createAcceleratorSteamAuthorizationModal;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectAcceleratorSteamAuthorizationStyles,
    createAcceleratorSteamAuthorizationModal
  };
}
