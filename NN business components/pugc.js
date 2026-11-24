const PugcStyles = `
  .nn-pugc-activity-list {
    display: flex;
    flex-direction: column;
    width: 562px;
    max-width: 100%;
    font-family: var(--font-family-main);
  }

  .nn-pugc-competition-list {
    display: flex;
    flex-direction: column;
    width: 562px;
    max-width: 100%;
    font-family: var(--font-family-main);
  }

  .nn-pugc-announcement-list {
    display: flex;
    flex-direction: column;
    width: 562px;
    max-width: 100%;
    font-family: var(--font-family-main);
  }

  .nn-pugc-strategy-list {
    display: flex;
    flex-direction: column;
    width: 562px;
    max-width: 100%;
    font-family: var(--font-family-main);
  }

  .nn-pugc-team-list {
    display: flex;
    flex-direction: column;
    width: 562px;
    max-width: 100%;
    font-family: var(--font-family-main);
  }

  .nn-pugc-dynamic-list {
    display: flex;
    flex-direction: column;
    width: 562px;
    max-width: 100%;
    font-family: var(--font-family-main);
  }

  .nn-pugc-activity {
    display: flex;
    align-items: center;
    gap: var(--space16);
    position: relative;
    width: 100%;
    min-width: 0;
    min-height: 62px;
    padding: var(--space16) var(--space12) var(--space16) var(--space0);
    border: 0;
    border-bottom: 1px solid var(--gray-9);
    background: transparent;
    color: var(--gray-5);
    text-align: left;
    appearance: none;
    -webkit-appearance: none;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color 0.16s ease, padding-left 0.16s ease;
  }

  .nn-pugc-activity:hover {
    padding-left: var(--space10);
    background: var(--gray-10);
  }

  .nn-pugc-activity__main {
    display: flex;
    align-items: center;
    gap: var(--space16);
    min-width: 0;
    flex: 1 1 auto;
  }

  .nn-pugc-activity__title {
    min-width: 0;
    overflow: hidden;
    color: var(--gray-5);
    font-size: 15px;
    font-weight: var(--font-weight-medium);
    line-height: 22px;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: color 0.16s ease;
  }

  .nn-pugc-activity:hover .nn-pugc-activity__title {
    color: var(--gray-4);
  }

  .nn-pugc-activity.is-ended .nn-pugc-activity__title {
    color: var(--gray-6);
  }

  .nn-pugc-activity__aside {
    display: inline-flex;
    align-items: center;
    gap: var(--space10);
    flex: 0 0 auto;
    min-width: 0;
  }

  .nn-pugc-activity__status {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-5);
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    white-space: nowrap;
  }

  .nn-pugc-activity.is-urgent .nn-pugc-activity__status {
    color: var(--Red);
  }

  .nn-pugc-activity.is-ended .nn-pugc-activity__status {
    color: var(--gray-6);
  }

  .nn-pugc-activity__meta {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
    padding: var(--space2) var(--space0);
    border-radius: var(--border-radius-4r);
    color: var(--gray-6);
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    white-space: nowrap;
  }

  .nn-pugc-activity__meta-icon {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    flex: 0 0 auto;
    color: var(--gray-6);
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-pugc-activity__meta-icon::before {
    color: currentColor;
  }

  .nn-pugc-activity__pin,
  .nn-pugc-competition__pin,
  .nn-pugc-announcement__pin,
  .nn-pugc-strategy__pin,
  .nn-pugc-team__pin,
  .nn-pugc-dynamic__pin {
    position: absolute;
    top: 46px;
    left: 12px;
    width: var(--icon-size-x6);
    height: var(--icon-size-x6);
    color: var(--gray-6);
    font-size: var(--icon-size-x6);
    line-height: var(--icon-size-x6);
    pointer-events: none;
    transition: left 0.16s ease;
  }

  .nn-pugc-activity:hover .nn-pugc-activity__pin,
  .nn-pugc-competition:hover .nn-pugc-competition__pin,
  .nn-pugc-announcement:hover .nn-pugc-announcement__pin,
  .nn-pugc-strategy:hover .nn-pugc-strategy__pin,
  .nn-pugc-team:hover .nn-pugc-team__pin,
  .nn-pugc-dynamic:hover .nn-pugc-dynamic__pin {
    left: 22px;
  }

  .nn-pugc-activity__pin::before,
  .nn-pugc-competition__pin::before,
  .nn-pugc-announcement__pin::before,
  .nn-pugc-strategy__pin::before,
  .nn-pugc-team__pin::before,
  .nn-pugc-dynamic__pin::before {
    color: currentColor;
  }

  .nn-pugc-competition {
    display: flex;
    align-items: center;
    gap: var(--space16);
    position: relative;
    width: 100%;
    min-width: 0;
    min-height: 62px;
    padding: var(--space16) var(--space12) var(--space16) var(--space0);
    border: 0;
    border-bottom: 1px solid var(--gray-9);
    background: transparent;
    color: var(--gray-5);
    text-align: left;
    appearance: none;
    -webkit-appearance: none;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color 0.16s ease, padding-left 0.16s ease;
  }

  .nn-pugc-competition:hover {
    padding-left: var(--space10);
    background: var(--gray-10);
  }

  .nn-pugc-competition__main {
    display: flex;
    align-items: center;
    gap: var(--space24);
    min-width: 0;
    flex: 1 1 auto;
  }

  .nn-pugc-competition__title {
    min-width: 0;
    overflow: hidden;
    color: var(--gray-4);
    font-size: 15px;
    font-weight: var(--font-weight-medium);
    line-height: 22px;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: color 0.16s ease;
  }

  .nn-pugc-competition.is-ended .nn-pugc-competition__title {
    color: var(--gray-6);
  }

  .nn-pugc-competition__aside {
    display: inline-flex;
    align-items: center;
    gap: var(--space10);
    flex: 0 0 auto;
    min-width: 0;
  }

  .nn-pugc-competition__status {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-5);
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    white-space: nowrap;
  }

  .nn-pugc-competition.is-active .nn-pugc-competition__status {
    color: var(--Green);
  }

  .nn-pugc-competition.is-registering .nn-pugc-competition__status {
    color: var(--Red);
  }

  .nn-pugc-competition.is-upcoming .nn-pugc-competition__status {
    color: var(--Esports-Blue-LD);
  }

  .nn-pugc-competition.is-ended .nn-pugc-competition__status {
    color: var(--gray-6);
  }

  .nn-pugc-competition__meta {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
    padding: var(--space2) var(--space0);
    border-radius: var(--border-radius-4r);
    color: var(--gray-6);
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    white-space: nowrap;
  }

  .nn-pugc-competition__meta-icon {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    flex: 0 0 auto;
    color: var(--gray-6);
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-pugc-competition__meta-icon::before {
    color: currentColor;
  }

  .nn-pugc-announcement {
    display: flex;
    align-items: center;
    gap: var(--space16);
    position: relative;
    width: 100%;
    min-width: 0;
    min-height: 62px;
    padding: var(--space16) var(--space12) var(--space16) var(--space0);
    border: 0;
    border-bottom: 1px solid var(--gray-9);
    background: transparent;
    color: var(--gray-5);
    text-align: left;
    appearance: none;
    -webkit-appearance: none;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color 0.16s ease, padding-left 0.16s ease;
  }

  .nn-pugc-announcement:hover {
    padding-left: var(--space10);
    background: var(--gray-10);
  }

  .nn-pugc-announcement__main {
    display: flex;
    align-items: center;
    gap: var(--space16);
    min-width: 0;
    flex: 1 1 auto;
  }

  .nn-pugc-announcement__title {
    min-width: 0;
    overflow: hidden;
    color: var(--gray-5);
    font-size: 15px;
    font-weight: var(--font-weight-medium);
    line-height: 22px;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: color 0.16s ease;
  }

  .nn-pugc-announcement:hover .nn-pugc-announcement__title {
    color: var(--gray-4);
  }

  .nn-pugc-announcement__aside {
    display: inline-flex;
    align-items: center;
    gap: var(--space10);
    flex: 0 0 auto;
    min-width: 0;
  }

  .nn-pugc-announcement__time {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-6);
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    white-space: nowrap;
  }

  .nn-pugc-announcement__comment,
  .nn-pugc-announcement__more {
    display: inline-flex;
    align-items: center;
    min-width: 0;
    padding: var(--space2) var(--space0);
    border-radius: var(--border-radius-4r);
    color: var(--gray-6);
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    white-space: nowrap;
  }

  .nn-pugc-announcement__comment {
    gap: var(--space4);
  }

  .nn-pugc-announcement__more {
    justify-content: center;
    width: 16px;
    height: 20px;
  }

  .nn-pugc-announcement__icon {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    flex: 0 0 auto;
    color: var(--gray-6);
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-pugc-announcement__icon::before {
    color: currentColor;
  }

  .nn-pugc-strategy {
    display: flex;
    align-items: center;
    gap: var(--space16);
    position: relative;
    width: 100%;
    min-width: 0;
    min-height: 62px;
    padding: var(--space16) var(--space12) var(--space16) var(--space0);
    border: 0;
    border-bottom: 1px solid var(--gray-9);
    background: transparent;
    color: var(--gray-5);
    text-align: left;
    appearance: none;
    -webkit-appearance: none;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color 0.16s ease, padding-left 0.16s ease;
  }

  .nn-pugc-strategy:hover {
    padding-left: var(--space10);
    background: var(--gray-10);
  }

  .nn-pugc-strategy__main {
    display: flex;
    align-items: center;
    gap: var(--space16);
    min-width: 0;
    flex: 1 1 auto;
  }

  .nn-pugc-strategy__title {
    min-width: 0;
    overflow: hidden;
    color: var(--gray-5);
    font-size: 15px;
    font-weight: var(--font-weight-medium);
    line-height: 22px;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: color 0.16s ease;
  }

  .nn-pugc-strategy:hover .nn-pugc-strategy__title {
    color: var(--gray-4);
  }

  .nn-pugc-strategy__aside {
    display: inline-flex;
    align-items: center;
    gap: var(--space10);
    flex: 0 0 auto;
    min-width: 0;
  }

  .nn-pugc-strategy__time {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-6);
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    white-space: nowrap;
  }

  .nn-pugc-strategy__comment,
  .nn-pugc-strategy__more {
    display: inline-flex;
    align-items: center;
    min-width: 0;
    padding: var(--space2) var(--space0);
    border-radius: var(--border-radius-4r);
    color: var(--gray-6);
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    white-space: nowrap;
  }

  .nn-pugc-strategy__comment {
    gap: var(--space4);
  }

  .nn-pugc-strategy__more {
    justify-content: center;
    width: 16px;
    height: 20px;
  }

  .nn-pugc-strategy__icon {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    flex: 0 0 auto;
    color: var(--gray-6);
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-pugc-strategy__icon::before {
    color: currentColor;
  }

  .nn-pugc-team {
    display: flex;
    align-items: center;
    gap: var(--space16);
    position: relative;
    width: 100%;
    min-width: 0;
    min-height: 62px;
    padding: var(--space16) var(--space12) var(--space16) var(--space0);
    border: 0;
    border-bottom: 1px solid var(--gray-9);
    background: transparent;
    color: var(--gray-5);
    text-align: left;
    appearance: none;
    -webkit-appearance: none;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color 0.16s ease, padding-left 0.16s ease;
  }

  .nn-pugc-team:hover {
    padding-left: var(--space10);
    background: var(--gray-10);
  }

  .nn-pugc-team__main {
    display: flex;
    align-items: center;
    gap: var(--space16);
    min-width: 0;
    flex: 1 1 auto;
  }

  .nn-pugc-team__title {
    min-width: 0;
    overflow: hidden;
    color: var(--gray-5);
    font-size: 15px;
    font-weight: var(--font-weight-medium);
    line-height: 22px;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: color 0.16s ease;
  }

  .nn-pugc-team:hover .nn-pugc-team__title {
    color: var(--gray-4);
  }

  .nn-pugc-team__aside {
    display: inline-flex;
    align-items: center;
    gap: var(--space10);
    flex: 0 0 auto;
    min-width: 0;
  }

  .nn-pugc-team__time {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-6);
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    white-space: nowrap;
  }

  .nn-pugc-team__comment,
  .nn-pugc-team__more {
    display: inline-flex;
    align-items: center;
    min-width: 0;
    padding: var(--space2) var(--space0);
    border-radius: var(--border-radius-4r);
    color: var(--gray-6);
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    white-space: nowrap;
  }

  .nn-pugc-team__comment {
    gap: var(--space4);
  }

  .nn-pugc-team__more {
    justify-content: center;
    width: 16px;
    height: 20px;
  }

  .nn-pugc-team__icon {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    flex: 0 0 auto;
    color: var(--gray-6);
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-pugc-team__icon::before {
    color: currentColor;
  }

  .nn-pugc-dynamic {
    display: flex;
    align-items: center;
    gap: var(--space16);
    position: relative;
    width: 100%;
    min-width: 0;
    min-height: 62px;
    padding: var(--space16) var(--space12) var(--space16) var(--space0);
    border: 0;
    border-bottom: 1px solid var(--gray-9);
    background: transparent;
    color: var(--gray-5);
    text-align: left;
    appearance: none;
    -webkit-appearance: none;
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color 0.16s ease, padding-left 0.16s ease;
  }

  .nn-pugc-dynamic:hover {
    padding-left: var(--space10);
    background: var(--gray-10);
  }

  .nn-pugc-dynamic__main {
    display: flex;
    align-items: center;
    gap: var(--space24);
    min-width: 0;
    flex: 1 1 auto;
  }

  .nn-pugc-dynamic__title {
    min-width: 0;
    overflow: hidden;
    color: var(--gray-5);
    font-size: 15px;
    font-weight: var(--font-weight-medium);
    line-height: 22px;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: color 0.16s ease;
  }

  .nn-pugc-dynamic:hover .nn-pugc-dynamic__title {
    color: var(--gray-4);
  }

  .nn-pugc-dynamic__aside {
    display: inline-flex;
    align-items: center;
    gap: var(--space10);
    flex: 0 0 auto;
    min-width: 0;
  }

  .nn-pugc-dynamic__time {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-6);
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    white-space: nowrap;
  }

  .nn-pugc-dynamic__comment,
  .nn-pugc-dynamic__more {
    display: inline-flex;
    align-items: center;
    min-width: 0;
    padding: var(--space2) var(--space0);
    border-radius: var(--border-radius-4r);
    color: var(--gray-6);
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    white-space: nowrap;
  }

  .nn-pugc-dynamic__comment {
    gap: var(--space4);
  }

  .nn-pugc-dynamic__more {
    justify-content: center;
    width: 16px;
    height: 20px;
  }

  .nn-pugc-dynamic__icon {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    flex: 0 0 auto;
    color: var(--gray-6);
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-pugc-dynamic__icon::before {
    color: currentColor;
  }

  .nn-pugc-activity__more,
  .nn-pugc-competition__more,
  .nn-pugc-announcement__more,
  .nn-pugc-strategy__more,
  .nn-pugc-team__more,
  .nn-pugc-dynamic__more {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 20px;
    min-width: 0;
    padding: var(--space2) var(--space0);
    border-radius: var(--border-radius-4r);
    color: var(--gray-5);
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    white-space: nowrap;
    cursor: pointer;
    transition: color 0.16s ease;
  }

  .nn-pugc-activity__more:hover,
  .nn-pugc-competition__more:hover,
  .nn-pugc-announcement__more:hover,
  .nn-pugc-strategy__more:hover,
  .nn-pugc-team__more:hover,
  .nn-pugc-dynamic__more:hover {
    color: var(--gray-3);
  }

  .nn-pugc-activity__more-icon,
  .nn-pugc-competition__more-icon,
  .nn-pugc-announcement__more-icon,
  .nn-pugc-strategy__more-icon,
  .nn-pugc-team__more-icon,
  .nn-pugc-dynamic__more-icon {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    flex: 0 0 auto;
    color: currentColor;
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-pugc-activity__more-icon::before,
  .nn-pugc-competition__more-icon::before,
  .nn-pugc-announcement__more-icon::before,
  .nn-pugc-strategy__more-icon::before,
  .nn-pugc-team__more-icon::before,
  .nn-pugc-dynamic__more-icon::before {
    color: currentColor;
  }
`;

function injectPugcStyles() {
  if (document.getElementById('nn-pugc-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-pugc-styles';
  style.textContent = PugcStyles;
  document.head.appendChild(style);
}

function createPugcListLabel(options = {}) {
  const {
    label = '活动',
    labelColor = '',
    muted = false
  } = options;

  if (typeof window !== 'undefined' && typeof window.createLabel === 'function') {
    return window.createLabel({
      text: label,
      type: 'soft',
      size: 'd',
      customColor: labelColor || '',
      color: labelColor ? 'neutral' : 'neutral',
      className: muted ? 'nn-pugc-activity__label is-muted' : 'nn-pugc-activity__label'
    });
  }

  const fallback = document.createElement('span');
  fallback.className = 'nn-pugc-activity__label';
  fallback.textContent = label;
  return fallback;
}

function createPugcActivityLabel(options = {}) {
  return createPugcListLabel(options);
}

function createPugcMoreAction(prefix, icon) {
  const more = document.createElement('span');
  more.className = `${prefix}__more`;
  more.innerHTML = `<i class="${prefix}__more-icon nnicon ${icon}"></i>`;
  return more;
}

function createPugcPinMark(prefix) {
  const pinIcon = document.createElement('i');
  pinIcon.className = `${prefix}__pin nnicon nicon-a-Top-linezhiding-xianxing`;
  pinIcon.setAttribute('aria-hidden', 'true');
  return pinIcon;
}

function formatPugcCountdown(totalSeconds) {
  const safeSeconds = Math.max(0, Math.floor(Number(totalSeconds) || 0));
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const seconds = safeSeconds % 60;

  if (hours > 0) return `${hours}时${minutes}分${seconds}秒结束`;
  if (minutes > 0) return `${minutes}分${seconds}秒结束`;
  return `${seconds}秒结束`;
}

function resolvePugcCountdownTarget(countdownSeconds, countdownEndTime) {
  if (countdownEndTime) {
    if (countdownEndTime instanceof Date) return countdownEndTime.getTime();
    if (typeof countdownEndTime === 'number') return countdownEndTime;
    const parsedTime = Date.parse(countdownEndTime);
    if (!Number.isNaN(parsedTime)) return parsedTime;
  }

  if (typeof countdownSeconds === 'number' && Number.isFinite(countdownSeconds)) {
    return Date.now() + Math.max(0, countdownSeconds) * 1000;
  }

  return 0;
}

function startPugcCountdown(statusEl, item, options = {}) {
  const targetTime = resolvePugcCountdownTarget(options.countdownSeconds, options.countdownEndTime);
  if (!targetTime) return;
  let timer = null;

  function updateCountdown() {
    const remainingSeconds = Math.ceil((targetTime - Date.now()) / 1000);

    if (remainingSeconds <= 0) {
      statusEl.textContent = '已结束';
      item.classList.remove('is-urgent');
      item.classList.add('is-ended');
      if (timer) window.clearInterval(timer);
      return;
    }

    statusEl.textContent = formatPugcCountdown(remainingSeconds);
  }

  updateCountdown();
  if (targetTime > Date.now()) {
    timer = window.setInterval(updateCountdown, 1000);
  }
}

function createPugcActivityItem(options = {}) {
  injectPugcStyles();

  const {
    label = '活动',
    labelColor = '',
    title = 'SGS 电竞《夏鸡大作战》',
    status = '6月22日截止',
    count = '99+',
    icon = 'nicon-a-Fire-Linehuo-xianxing',
    showMore = false,
    moreIcon = 'nicon-a-moregengduo',
    pinned = false,
    countdownSeconds = null,
    countdownEndTime = null,
    state = 'default'
  } = options;

  const item = document.createElement('button');
  item.type = 'button';
  item.className = [
    'nn-pugc-activity',
    state === 'urgent' ? 'is-urgent' : '',
    state === 'ended' ? 'is-ended' : ''
  ].filter(Boolean).join(' ');

  const main = document.createElement('span');
  main.className = 'nn-pugc-activity__main';
  main.appendChild(createPugcActivityLabel({
    label,
    labelColor,
    muted: state === 'ended'
  }));

  const titleEl = document.createElement('span');
  titleEl.className = 'nn-pugc-activity__title';
  titleEl.textContent = title;
  main.appendChild(titleEl);
  item.appendChild(main);

  const aside = document.createElement('span');
  aside.className = 'nn-pugc-activity__aside';

  const statusEl = document.createElement('span');
  statusEl.className = 'nn-pugc-activity__status';
  statusEl.textContent = status;
  aside.appendChild(statusEl);
  startPugcCountdown(statusEl, item, {
    countdownSeconds,
    countdownEndTime
  });

  const meta = document.createElement('span');
  meta.className = 'nn-pugc-activity__meta';
  meta.innerHTML = `<i class="nn-pugc-activity__meta-icon nnicon ${icon}"></i><span>${count}</span>`;
  aside.appendChild(meta);

  if (showMore) {
    aside.appendChild(createPugcMoreAction('nn-pugc-activity', moreIcon));
  }

  item.appendChild(aside);

  if (pinned) {
    item.appendChild(createPugcPinMark('nn-pugc-activity'));
  }

  return item;
}

function createPugcCompetitionItem(options = {}) {
  injectPugcStyles();

  const {
    label = '赛事',
    labelColor = '',
    title = '全球锦标赛（报名中：5.2-5.12）',
    status = '进行中',
    statusTone = 'active',
    count = '99+',
    icon = 'nicon-a-Fire-Linehuo-xianxing',
    showMore = false,
    moreIcon = 'nicon-a-moregengduo',
    pinned = false
  } = options;

  const item = document.createElement('button');
  item.type = 'button';
  item.className = [
    'nn-pugc-competition',
    statusTone === 'active' ? 'is-active' : '',
    statusTone === 'registering' ? 'is-registering' : '',
    statusTone === 'upcoming' ? 'is-upcoming' : '',
    statusTone === 'ended' ? 'is-ended' : ''
  ].filter(Boolean).join(' ');

  const main = document.createElement('span');
  main.className = 'nn-pugc-competition__main';
  main.appendChild(createPugcActivityLabel({
    label,
    labelColor,
    muted: statusTone === 'ended'
  }));

  const titleEl = document.createElement('span');
  titleEl.className = 'nn-pugc-competition__title';
  titleEl.textContent = title;
  main.appendChild(titleEl);
  item.appendChild(main);

  const aside = document.createElement('span');
  aside.className = 'nn-pugc-competition__aside';

  const statusEl = document.createElement('span');
  statusEl.className = 'nn-pugc-competition__status';
  statusEl.textContent = status;
  aside.appendChild(statusEl);

  const meta = document.createElement('span');
  meta.className = 'nn-pugc-competition__meta';
  meta.innerHTML = `<i class="nn-pugc-competition__meta-icon nnicon ${icon}"></i><span>${count}</span>`;
  aside.appendChild(meta);

  if (showMore) {
    aside.appendChild(createPugcMoreAction('nn-pugc-competition', moreIcon));
  }

  item.appendChild(aside);

  if (pinned) {
    item.appendChild(createPugcPinMark('nn-pugc-competition'));
  }

  return item;
}

function createPugcAnnouncementItem(options = {}) {
  injectPugcStyles();

  const {
    label = '公告',
    labelColor = '',
    title = 'SGS 电竞《夏鸡大作战》',
    time = '5分钟前',
    commentCount = '12',
    showMore = false,
    commentIcon = 'nicon-a-Commenton-linepinglun-xianxing',
    moreIcon = 'nicon-a-moregengduo',
    pinned = false
  } = options;

  const item = document.createElement('button');
  item.type = 'button';
  item.className = 'nn-pugc-announcement';

  const main = document.createElement('span');
  main.className = 'nn-pugc-announcement__main';
  main.appendChild(createPugcActivityLabel({
    label,
    labelColor
  }));

  const titleEl = document.createElement('span');
  titleEl.className = 'nn-pugc-announcement__title';
  titleEl.textContent = title;
  main.appendChild(titleEl);
  item.appendChild(main);

  const aside = document.createElement('span');
  aside.className = 'nn-pugc-announcement__aside';

  const timeEl = document.createElement('span');
  timeEl.className = 'nn-pugc-announcement__time';
  timeEl.textContent = time;
  aside.appendChild(timeEl);

  const comment = document.createElement('span');
  comment.className = 'nn-pugc-announcement__comment';
  comment.innerHTML = `<i class="nn-pugc-announcement__icon nnicon ${commentIcon}"></i><span>${commentCount}</span>`;
  aside.appendChild(comment);

  if (showMore) {
    aside.appendChild(createPugcMoreAction('nn-pugc-announcement', moreIcon));
  }

  item.appendChild(aside);

  if (pinned) {
    item.appendChild(createPugcPinMark('nn-pugc-announcement'));
  }

  return item;
}

function createPugcStrategyItem(options = {}) {
  injectPugcStyles();

  const {
    label = '攻略',
    labelColor = '',
    title = 'PCS6亚洲赛区赛程公布，中国战队蓄势待发',
    time = '5分钟前',
    commentCount = '12',
    showMore = false,
    commentIcon = 'nicon-a-Commenton-linepinglun-xianxing',
    moreIcon = 'nicon-a-moregengduo',
    pinned = false
  } = options;

  const item = document.createElement('button');
  item.type = 'button';
  item.className = 'nn-pugc-strategy';

  const main = document.createElement('span');
  main.className = 'nn-pugc-strategy__main';
  main.appendChild(createPugcActivityLabel({
    label,
    labelColor
  }));

  const titleEl = document.createElement('span');
  titleEl.className = 'nn-pugc-strategy__title';
  titleEl.textContent = title;
  main.appendChild(titleEl);
  item.appendChild(main);

  const aside = document.createElement('span');
  aside.className = 'nn-pugc-strategy__aside';

  const timeEl = document.createElement('span');
  timeEl.className = 'nn-pugc-strategy__time';
  timeEl.textContent = time;
  aside.appendChild(timeEl);

  const comment = document.createElement('span');
  comment.className = 'nn-pugc-strategy__comment';
  comment.innerHTML = `<i class="nn-pugc-strategy__icon nnicon ${commentIcon}"></i><span>${commentCount}</span>`;
  aside.appendChild(comment);

  if (showMore) {
    aside.appendChild(createPugcMoreAction('nn-pugc-strategy', moreIcon));
  }

  item.appendChild(aside);

  if (pinned) {
    item.appendChild(createPugcPinMark('nn-pugc-strategy'));
  }

  return item;
}

function createPugcTeamItem(options = {}) {
  injectPugcStyles();

  const {
    label = '战队',
    labelColor = '',
    title = 'PCL春季赛季后赛即将开赛，16支战队争夺冠军',
    time = '5分钟前',
    commentCount = '12',
    showMore = false,
    commentIcon = 'nicon-a-Commenton-linepinglun-xianxing',
    moreIcon = 'nicon-a-moregengduo',
    pinned = false
  } = options;

  const item = document.createElement('button');
  item.type = 'button';
  item.className = 'nn-pugc-team';

  const main = document.createElement('span');
  main.className = 'nn-pugc-team__main';
  main.appendChild(createPugcActivityLabel({
    label,
    labelColor
  }));

  const titleEl = document.createElement('span');
  titleEl.className = 'nn-pugc-team__title';
  titleEl.textContent = title;
  main.appendChild(titleEl);
  item.appendChild(main);

  const aside = document.createElement('span');
  aside.className = 'nn-pugc-team__aside';

  const timeEl = document.createElement('span');
  timeEl.className = 'nn-pugc-team__time';
  timeEl.textContent = time;
  aside.appendChild(timeEl);

  const comment = document.createElement('span');
  comment.className = 'nn-pugc-team__comment';
  comment.innerHTML = `<i class="nn-pugc-team__icon nnicon ${commentIcon}"></i><span>${commentCount}</span>`;
  aside.appendChild(comment);

  if (showMore) {
    aside.appendChild(createPugcMoreAction('nn-pugc-team', moreIcon));
  }

  item.appendChild(aside);

  if (pinned) {
    item.appendChild(createPugcPinMark('nn-pugc-team'));
  }

  return item;
}

function createPugcDynamicItem(options = {}) {
  injectPugcStyles();

  const {
    label = '动态',
    labelColor = '',
    title = 'SGS 电竞《夏鸡大作战》',
    time = '5分钟前',
    commentCount = '12',
    showMore = false,
    commentIcon = 'nicon-a-Commenton-linepinglun-xianxing',
    moreIcon = 'nicon-a-moregengduo',
    pinned = false
  } = options;

  const item = document.createElement('button');
  item.type = 'button';
  item.className = 'nn-pugc-dynamic';

  const main = document.createElement('span');
  main.className = 'nn-pugc-dynamic__main';
  main.appendChild(createPugcActivityLabel({
    label,
    labelColor
  }));

  const titleEl = document.createElement('span');
  titleEl.className = 'nn-pugc-dynamic__title';
  titleEl.textContent = title;
  main.appendChild(titleEl);
  item.appendChild(main);

  const aside = document.createElement('span');
  aside.className = 'nn-pugc-dynamic__aside';

  const timeEl = document.createElement('span');
  timeEl.className = 'nn-pugc-dynamic__time';
  timeEl.textContent = time;
  aside.appendChild(timeEl);

  const comment = document.createElement('span');
  comment.className = 'nn-pugc-dynamic__comment';
  comment.innerHTML = `<i class="nn-pugc-dynamic__icon nnicon ${commentIcon}"></i><span>${commentCount}</span>`;
  aside.appendChild(comment);

  if (showMore) {
    aside.appendChild(createPugcMoreAction('nn-pugc-dynamic', moreIcon));
  }

  item.appendChild(aside);

  if (pinned) {
    item.appendChild(createPugcPinMark('nn-pugc-dynamic'));
  }

  return item;
}

function createPugcActivityList(options = {}) {
  injectPugcStyles();

  const list = document.createElement('div');
  list.className = 'nn-pugc-activity-list';
  const items = options.items || [
    { labelColor: '#C03E85', title: 'SGS 电竞《夏鸡大作战》', status: '6月22日截止', count: '99+' },
    { title: 'SGS 电竞《夏鸡大作战》', status: '6月22日截止', count: '99+' },
    { title: 'PUBG 29.2版本更新公告', status: '5时30分20秒结束', count: '99+', state: 'urgent', countdownSeconds: 5 * 3600 + 30 * 60 + 20 },
    { title: 'PCL春季赛季即将开赛，16支战队争夺冠军', status: '已结束', count: '99+', state: 'ended' }
  ];

  items.forEach(function(item) {
    list.appendChild(createPugcActivityItem(item));
  });

  return list;
}

function createPugcCompetitionList(options = {}) {
  injectPugcStyles();

  const list = document.createElement('div');
  list.className = 'nn-pugc-competition-list';
  const items = options.items || [
    { labelColor: '#6A47D8', title: '全球锦标赛（报名中：5.2-5.12）', status: '进行中', statusTone: 'active', count: '99+' },
    { title: '全球锦标赛（报名中：5.2-5.12）', status: '进行中', statusTone: 'active', count: '99+' },
    { title: 'NN娱乐赛（报名中：5.2-5.12）', status: '报名中', statusTone: 'registering', count: '10w' },
    { title: '洲际赛-PCS （时间：5.2-5.12）', status: '待开赛', statusTone: 'upcoming', count: '99+' },
    { title: '社区晋级赛', status: '已结束', statusTone: 'ended', count: '99+' }
  ];

  items.forEach(function(item) {
    list.appendChild(createPugcCompetitionItem(item));
  });

  return list;
}

function createPugcAnnouncementList(options = {}) {
  injectPugcStyles();

  const list = document.createElement('div');
  list.className = 'nn-pugc-announcement-list';
  const items = options.items || [
    { title: 'SGS 电竞《夏鸡大作战》', time: '5分钟前', commentCount: '12' }
  ];

  items.forEach(function(item) {
    list.appendChild(createPugcAnnouncementItem(item));
  });

  return list;
}

function createPugcStrategyList(options = {}) {
  injectPugcStyles();

  const list = document.createElement('div');
  list.className = 'nn-pugc-strategy-list';
  const items = options.items || [
    {
      labelColor: '#396DDE',
      title: 'PCS6亚洲赛区赛程公布，中国战队蓄势待发',
      time: '5分钟前',
      commentCount: '12'
    },
    {
      title: 'SGS 电竞《夏鸡大作战》',
      time: '5分钟前',
      commentCount: '12'
    }
  ];

  items.forEach(function(item) {
    list.appendChild(createPugcStrategyItem(item));
  });

  return list;
}

function createPugcTeamList(options = {}) {
  injectPugcStyles();

  const list = document.createElement('div');
  list.className = 'nn-pugc-team-list';
  const items = options.items || [
    {
      labelColor: '#D58009',
      title: 'PCL春季赛季后赛即将开赛，16支战队争夺冠军',
      time: '5分钟前',
      commentCount: '12'
    },
    {
      title: 'SGS 电竞《夏鸡大作战》',
      time: '5分钟前',
      commentCount: '12'
    }
  ];

  items.forEach(function(item) {
    list.appendChild(createPugcTeamItem(item));
  });

  return list;
}

function createPugcDynamicList(options = {}) {
  injectPugcStyles();

  const list = document.createElement('div');
  list.className = 'nn-pugc-dynamic-list';
  const items = options.items || [
    {
      title: 'SGS 电竞《夏鸡大作战》',
      time: '5分钟前',
      commentCount: '12'
    }
  ];

  items.forEach(function(item) {
    list.appendChild(createPugcDynamicItem(item));
  });

  return list;
}

if (typeof window !== 'undefined') {
  window.injectPugcStyles = injectPugcStyles;
  window.createPugcActivityItem = createPugcActivityItem;
  window.createPugcListLabel = createPugcListLabel;
  window.createPugcActivityList = createPugcActivityList;
  window.createPugcCompetitionItem = createPugcCompetitionItem;
  window.createPugcCompetitionList = createPugcCompetitionList;
  window.createPugcAnnouncementItem = createPugcAnnouncementItem;
  window.createPugcAnnouncementList = createPugcAnnouncementList;
  window.createPugcStrategyItem = createPugcStrategyItem;
  window.createPugcStrategyList = createPugcStrategyList;
  window.createPugcTeamItem = createPugcTeamItem;
  window.createPugcTeamList = createPugcTeamList;
  window.createPugcDynamicItem = createPugcDynamicItem;
  window.createPugcDynamicList = createPugcDynamicList;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectPugcStyles,
    createPugcListLabel,
    createPugcActivityItem,
    createPugcActivityList,
    createPugcCompetitionItem,
    createPugcCompetitionList,
    createPugcAnnouncementItem,
    createPugcAnnouncementList,
    createPugcStrategyItem,
    createPugcStrategyList,
    createPugcTeamItem,
    createPugcTeamList,
    createPugcDynamicItem,
    createPugcDynamicList
  };
}
