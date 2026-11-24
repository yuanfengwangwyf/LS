const ToastDisplayStyles = `
  .nn-toast-display-demo {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
  }

  .nn-toast-display-dialog.nn-toast {
    width: 360px;
    height: 700px;
    overflow: hidden;
    scrollbar-gutter: auto;
  }

  .nn-toast-display-dialog .nn-toast__close {
    z-index: 2;
  }

  .nn-toast-display-dialog .nn-toast__body {
    flex: 1 1 auto;
    gap: var(--space0);
    padding: var(--space0);
    min-height: 0;
    height: 100%;
    overflow: hidden;
  }

  .nn-toast-display-dialog .nn-toast__header {
    display: none;
  }

  .nn-toast-display-dialog .nn-toast__content {
    flex: 1 1 auto;
    min-height: 0;
    overflow: hidden;
  }

  .nn-toast-display {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space8);
    width: 100%;
    height: 100%;
    min-height: 0;
    padding: var(--space24);
    box-sizing: border-box;
    font-family: var(--font-family-main);
  }

  .nn-toast-display__toolbar {
    display: flex;
    flex-direction: column;
    gap: var(--space16);
    width: 100%;
  }

  .nn-toast-display__tabs {
    display: flex;
    align-items: center;
    gap: var(--space16);
    min-height: 38px;
  }

  .nn-toast-display__country {
    flex: 0 0 auto;
    width: max-content !important;
    max-width: 90px;
  }

  .nn-toast-display__country.nn-dropdown .nn-dropdown-trigger {
    width: max-content;
    max-width: 90px;
    min-height: 24px;
    height: 24px;
    padding: var(--space0);
    border: 0;
    background: transparent;
  }

  .nn-toast-display__country.nn-dropdown .nn-dropdown-trigger:hover {
    background: transparent;
  }

  .nn-toast-display__country.nn-dropdown .nn-dropdown-contents {
    flex: 0 1 auto;
    gap: var(--space2);
    min-width: 0;
  }

  .nn-toast-display__country.nn-dropdown .nn-dropdown-text-stack {
    flex: 0 1 auto;
    padding-left: var(--space0);
    padding-right: var(--space0);
  }

  .nn-toast-display__country.nn-dropdown .nn-dropdown-leading,
  .nn-toast-display__country-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    flex: 0 0 auto;
  }

  .nn-toast-display__country.nn-dropdown .nn-dropdown-leading {
    margin-right: var(--space2);
    font-size: 24px;
    line-height: 24px;
  }

  .nn-toast-display__country-icon img,
  .nn-dropdown-item-leading .nn-toast-display__country-icon img {
    display: block;
    width: var(--icon-size-x12) !important;
    height: var(--icon-size-x12) !important;
    object-fit: contain;
  }

  .nn-toast-display__country.nn-dropdown .nn-dropdown-item-leading {
    width: 24px;
    height: 24px;
    overflow: visible;
    border-radius: 0;
  }

  .nn-toast-display__country.nn-dropdown .nn-dropdown-item-leading img {
    width: 24px !important;
    height: 24px !important;
    object-fit: contain;
  }

  .nn-toast-display__country.nn-dropdown .nn-dropdown-text {
    min-width: 0;
    font-size: 14px;
    font-weight: var(--font-weight-medium);
    line-height: 20px;
  }

  .nn-toast-display__country.nn-dropdown .nn-dropdown-value {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--gray-5) !important;
  }

  .nn-toast-display__country.nn-dropdown .nn-dropdown-trigger:hover .nn-dropdown-value {
    color: var(--gray-4) !important;
  }

  .nn-toast-display__country.nn-dropdown .nn-dropdown-icon-end {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    gap: var(--space0);
    margin-left: var(--space2);
    padding: var(--space0);
  }

  .nn-toast-display__country.nn-dropdown .nn-dropdown-arrow {
    width: 16px;
    height: 16px;
    font-size: 16px;
    line-height: 16px;
  }

  .nn-toast-display__country.nn-dropdown .nn-dropdown-panel {
    width: 160px;
    max-height: 300px;
    overflow-y: auto;
  }

  .nn-toast-display__tab-list.nn-tabs-primary {
    column-gap: var(--space24);
  }

  .nn-toast-display__tab-list.nn-tabs-primary .nn-tab {
    padding-right: var(--space0);
    padding-left: var(--space0);
  }

  .nn-toast-display__filters {
    display: flex;
    align-items: center;
    gap: var(--space8);
    width: 100%;
  }

  .nn-toast-display__search {
    flex: 1 1 auto;
    min-width: 0;
  }

  .nn-toast-display__search .nn-input-wrapper,
  .nn-toast-display__search .nn-input {
    width: 100%;
  }

  .nn-toast-display__refresh-icon {
    transform-origin: center;
  }

  .nn-toast-display__refresh-icon.is-spinning {
    animation: nn-toast-display-refresh-spin 720ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  @keyframes nn-toast-display-refresh-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .nn-toast-display__rooms {
    display: flex;
    flex-direction: column;
    gap: var(--space2);
    width: 100%;
    flex: 1 1 auto;
    min-height: 0;
    max-height: none;
    overflow-x: hidden;
    overflow-y: auto;
    padding: var(--space0) var(--space0) var(--space12) var(--space0);
    box-sizing: border-box;
    scrollbar-width: none;
    scrollbar-color: transparent transparent;
  }

  .nn-toast-display__rooms.nn-community-room-grid {
    gap: var(--space2);
  }

  .nn-toast-display__rooms::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .nn-toast-display__rooms .nn-community-room {
    width: 100%;
    flex: 0 0 54px;
  }

  .nn-toast-display-voice-settings-dialog.nn-toast {
    width: 350px;
    min-height: 356px;
    overflow: visible;
  }

  .nn-toast-display-voice-settings-dialog .nn-toast__body {
    gap: var(--space8);
    padding: var(--space16) var(--space8);
  }

  .nn-toast-display-voice-settings-dialog .nn-toast__header {
    padding: var(--space0) var(--space8) var(--space8);
  }

  .nn-toast-display-voice-settings-dialog .nn-toast__title-row {
    position: relative;
    min-height: 20px;
    padding-right: var(--space28);
  }

  .nn-toast-display-voice-settings-dialog .nn-toast__title {
    color: var(--gray-3);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-semibold);
  }

  .nn-toast-display-voice-settings-dialog .nn-toast__content {
    min-height: 0;
  }

  .nn-toast-display-voice-settings__header-action {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: var(--border-radius-4r);
    background: transparent;
    color: var(--gray-5);
    font-size: 20px;
    line-height: 1;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-toast-display-voice-settings__header-action:hover {
    color: var(--gray-3);
  }

  .nn-toast-display-voice-settings {
    display: flex;
    flex-direction: column;
    gap: var(--space8);
    width: 100%;
    font-family: var(--font-family-main);
  }

  .nn-toast-display-voice-settings__choice {
    display: flex;
    flex-direction: column;
    gap: var(--space8);
    width: 100%;
    padding: var(--space8);
    border-radius: var(--border-radius-2r);
    box-sizing: border-box;
    transition: background-color 0.16s ease;
  }

  .nn-toast-display-voice-settings__choice:hover,
  .nn-toast-display-voice-settings__choice.is-selected,
  .nn-toast-display-voice-settings__choice:focus-within {
    background: var(--gray-10);
  }

  .nn-toast-display-voice-settings__choice .nn-radio {
    width: fit-content;
    gap: var(--space8);
  }

  .nn-toast-display-voice-settings__choice .nn-radio__label {
    color: var(--gray-5);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
  }

  .nn-toast-display-voice-settings__choice .nn-radio.is-disabled .nn-radio__label {
    color: var(--gray-6);
  }

  .nn-toast-display-voice-settings__shortcut {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 32px;
  }

  .nn-toast-display-voice-settings-dialog .nn-toast-display-voice-settings__choice .nn-input-wrapper.nn-toast-display-voice-settings__shortcut {
    width: calc(100% - 24px);
    margin-left: var(--space24);
  }

  .nn-toast-display-voice-settings__shortcut .nn-input {
    width: 100%;
    height: 32px;
    padding: var(--space6) var(--space12) var(--space6) var(--space10);
    border-color: var(--gray-8);
    background: var(--gray-10);
    color: var(--gray-3);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
    text-overflow: ellipsis;
  }

  .nn-toast-display-voice-settings__shortcut.has-clear .nn-input {
    padding-right: var(--space40);
  }

  .nn-toast-display-voice-settings__shortcut.is-muted .nn-input {
    color: var(--gray-6);
  }

  .nn-toast-display-voice-settings__shortcut.is-muted .nn-input:hover {
    background: var(--gray-9);
  }

  .nn-toast-display-voice-settings__shortcut.is-push-to-talk-active .nn-input {
    border-color: var(--gray-7);
    color: var(--gray-3);
  }

  .nn-toast-display-voice-settings__clear {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    display: none;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    color: var(--gray-5);
    font-size: 14px;
    line-height: 1;
    cursor: pointer;
  }

  .nn-toast-display-voice-settings__shortcut.has-clear.has-value .nn-toast-display-voice-settings__clear {
    display: inline-flex;
  }

  .nn-toast-display-voice-settings__group {
    display: flex;
    flex-direction: column;
    gap: var(--space8);
    width: 100%;
    padding: var(--space8) var(--space8) var(--space8) var(--space32);
    border-radius: var(--border-radius-2r);
    box-sizing: border-box;
    transition: background-color 0.16s ease;
  }

  .nn-toast-display-voice-settings__group:hover {
    background: var(--gray-10);
  }

  .nn-toast-display-voice-settings__label {
    color: var(--gray-5);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
    white-space: nowrap;
  }
`;

function injectToastDisplayStyles() {
  if (document.getElementById('nn-toast-display-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-toast-display-styles';
  style.textContent = ToastDisplayStyles;
  document.head.appendChild(style);
}

function getToastDisplayRequiredComponent(name) {
  if (typeof window === 'undefined' || typeof window[name] !== 'function') {
    throw new Error(`Toast Display requires component ${name}.`);
  }
  return window[name];
}

function createCountryFlagIcon(name) {
  const iconName = name === '全部' ? '全网络' : name;
  return `<span class="nn-toast-display__country-icon"><img src="../image/National%20flag/${encodeURIComponent(iconName)}.svg" alt=""></span>`;
}

function createToastDisplayTabs() {
  const createTabs = getToastDisplayRequiredComponent('createTabs');
  const createDropdownMenu = getToastDisplayRequiredComponent('createDropdownMenu');

  const toolbar = document.createElement('div');
  toolbar.className = 'nn-toast-display__tabs';

  const countryNames = ['全部', '中国服', '中国台服', '港服', '亚服', '东南亚服', '新加坡服', '马来西亚服', '日服', '韩服', '美服', '欧服', '德服', '俄服', '澳服', '墨西哥', '国际服', '电信', '网通', '移动', '教育'];
  const countryItems = countryNames.map(function(name) {
    return {
      label: name,
      iconHtml: createCountryFlagIcon(name)
    };
  });
  const country = createDropdownMenu({
    appearance: 'no-padding',
    size: 'small',
    value: '全部',
    selectedIndex: 0,
    fallbackSelectedIndex: 0,
    items: countryItems,
    leadingIcon: createCountryFlagIcon('全部'),
    className: 'nn-toast-display__country'
  });
  toolbar.appendChild(country);

  const tabList = createTabs({
    type: 'primary',
    defaultActive: 0,
    tabs: ['组队', '直播', '互动', '空房'].map(function(name) {
      return { name };
    })
  });
  tabList.classList.add('nn-toast-display__tab-list');
  toolbar.appendChild(tabList);

  return toolbar;
}

function createToastDisplayFilters() {
  const createInput = getToastDisplayRequiredComponent('createInput');
  const createButton = getToastDisplayRequiredComponent('createButton');
  if (typeof window.injectButtonStyles === 'function') {
    window.injectButtonStyles();
  }

  const filters = document.createElement('div');
  filters.className = 'nn-toast-display__filters';

  const search = document.createElement('div');
  search.className = 'nn-toast-display__search';
  search.appendChild(createInput({
    placeholder: '全局搜索关键词',
    size: 'large',
    showSearch: true
  }));
  filters.appendChild(search);

  const refresh = createButton({
    text: '刷新',
    type: 'button',
    variant: 'system',
    level: 'secondary',
    size: 'large',
    iconPosition: 'left',
    iconSize: 'var(--icon-size-x8)',
    icon: '<i class="nn-toast-display__refresh-icon nnicon nicon-a-refresh-fillshuaxin-xianxing"></i>'
  });
  const refreshIcon = refresh.querySelector('.nn-toast-display__refresh-icon');
  refresh.addEventListener('click', function() {
    refreshIcon.classList.remove('is-spinning');
    void refreshIcon.offsetWidth;
    refreshIcon.classList.add('is-spinning');
  });
  refreshIcon.addEventListener('animationend', function() {
    refreshIcon.classList.remove('is-spinning');
  });
  filters.appendChild(refresh);

  return filters;
}

function createToastDisplayRooms() {
  const createCommunityRoom = getToastDisplayRequiredComponent('createCommunityRoom');
  const rooms = document.createElement('div');
  rooms.className = 'nn-toast-display__rooms nn-community-room-grid';

  const items = [
    {
      index: '83',
      title: '铂金2=1 队里一个神话 一个妹妹 来妹妹上分VNV006',
      avatars: ['../image/Avatar/头像480.png', '../image/Avatar/头像441.png', '../image/Avatar/头像496.png', '../image/Avatar/头像655.png'],
      moreCount: '1+'
    },
    {
      index: '33',
      type: 'interactive',
      title: '互动语音房',
      status: 'default',
      showTeam: false,
      avatars: ['../image/Avatar/头像10.png', '../image/Avatar/头像311.png', '../image/Avatar/头像498.png', '../image/Avatar/头像659.png', '../image/Avatar/头像664.png', '../image/Avatar/头像676.png', '../image/Avatar/头像686.png', '../image/Avatar/头像691.png', '../image/Avatar/头像706.png', '../image/Avatar/头像716.png'],
      moreCount: '99+'
    },
    {
      index: '33',
      title: 'SOLO对战房来人速度，来一女搭子',
      status: 'lock',
      avatars: ['../image/Avatar/头像706.png', '../image/Avatar/头像511.png', '../image/Avatar/头像934.png', '../image/Avatar/头像911.png'],
      moreCount: '5+'
    },
    {
      index: '87',
      title: '港服白银黄金=1 RRI100 速开游来人',
      avatars: ['../image/Avatar/头像656.png', '../image/Avatar/头像643.png', '../image/Avatar/头像686.png'],
      moreCount: ''
    },
    {
      index: '2',
      title: '班得尔双排来任意',
      status: 'full',
      avatars: ['../image/Avatar/头像719.png', '../image/Avatar/头像902.png', '../image/Avatar/头像445.png'],
      moreCount: '5+'
    },
    {
      index: '3',
      title: '黄金四等一 招凡神话带队来个妹妹',
      avatars: ['../image/Avatar/头像691.png', '../image/Avatar/头像849.png', '../image/Avatar/头像580.png'],
      moreCount: ''
    },
    {
      index: '4',
      title: '港服下三段分差心态好不压力 二缺一',
      avatars: ['../image/Avatar/头像634.png'],
      moreCount: ''
    },
    {
      index: '5',
      title: '游戏语音房',
      avatars: ['../image/Avatar/头像542.png', '../image/Avatar/头像556.png', '../image/Avatar/头像797.png'],
      moreCount: ''
    },
    {
      index: '6',
      title: '游戏语音房',
      showEmpty: true,
      showTeam: false,
      avatars: [],
      moreCount: ''
    },
    {
      index: '7',
      title: '游戏语音房',
      showEmpty: true,
      showTeam: false,
      avatars: [],
      moreCount: ''
    },
    {
      index: '8',
      title: '游戏语音房',
      showEmpty: true,
      showTeam: false,
      avatars: [],
      moreCount: ''
    },
    {
      index: '9',
      title: '游戏语音房',
      showEmpty: true,
      showTeam: false,
      avatars: [],
      moreCount: ''
    },
    {
      index: '10',
      title: '游戏语音房',
      showEmpty: true,
      showTeam: false,
      avatars: [],
      moreCount: ''
    },
    {
      index: '11',
      title: '游戏语音房',
      showEmpty: true,
      showTeam: false,
      avatars: [],
      moreCount: ''
    },
    {
      index: '12',
      title: '游戏语音房',
      showEmpty: true,
      showTeam: false,
      avatars: [],
      moreCount: ''
    },
    {
      index: '13',
      title: '游戏语音房',
      showEmpty: true,
      showTeam: false,
      avatars: [],
      moreCount: ''
    },
    {
      index: '14',
      title: '游戏语音房',
      showEmpty: true,
      showTeam: false,
      avatars: [],
      moreCount: ''
    },
    {
      index: '15',
      title: '游戏语音房',
      showEmpty: true,
      showTeam: false,
      avatars: [],
      moreCount: ''
    },
    {
      index: '16',
      title: '游戏语音房',
      showEmpty: true,
      showTeam: false,
      avatars: [],
      moreCount: ''
    },
    {
      index: '17',
      title: '游戏语音房',
      showEmpty: true,
      showTeam: false,
      avatars: [],
      moreCount: ''
    },
    {
      index: '18',
      title: '游戏语音房',
      showEmpty: true,
      showTeam: false,
      avatars: [],
      moreCount: ''
    },
    {
      index: '19',
      title: '游戏语音房',
      showEmpty: true,
      showTeam: false,
      avatars: [],
      moreCount: ''
    }
  ];

  items.forEach(function(item) {
    rooms.appendChild(createCommunityRoom(Object.assign({
      showTeam: item.showTeam !== undefined ? item.showTeam : item.status !== 'lock' && item.status !== 'full',
      showAvatarGroup: item.avatars.length > 0,
      showEmpty: Boolean(item.showEmpty)
    }, item)));
  });

  return rooms;
}

function createToastDisplaySearchTeamDialog() {
  injectToastDisplayStyles();
  const createToast = getToastDisplayRequiredComponent('createToast');
  if (typeof window.injectCommunityNavigationStyles === 'function') {
    window.injectCommunityNavigationStyles();
  }

  const content = document.createElement('div');
  content.className = 'nn-toast-display';

  const toolbar = document.createElement('div');
  toolbar.className = 'nn-toast-display__toolbar';
  toolbar.appendChild(createToastDisplayTabs());
  toolbar.appendChild(createToastDisplayFilters());
  content.appendChild(toolbar);
  const rooms = createToastDisplayRooms();
  content.appendChild(rooms);
  const roomScrollbar = typeof window !== 'undefined' && typeof window.createScrollbar === 'function'
    ? window.createScrollbar({
      target: rooms,
      container: content,
      hoverTarget: content,
      variant: 'thin',
      right: 0,
      top: function() {
        const contentRect = content.getBoundingClientRect();
        const roomsRect = rooms.getBoundingClientRect();
        return Math.max(0, roomsRect.top - contentRect.top);
      },
      bottom: 24,
      minThumbSize: 24
    })
    : null;
  requestAnimationFrame(function() {
    if (roomScrollbar) roomScrollbar.update();
  });

  return createToast({
    title: '',
    content,
    scrollableContent: true,
    showClose: true,
    showFooter: false,
    onClose: function(root) {
      root.style.display = 'none';
    },
    className: 'nn-toast-display-dialog'
  });
}

function createVoiceSettingsShortcut(text, options = {}) {
  const createInput = getToastDisplayRequiredComponent('createInput');
  const shortcut = createInput({
    size: 'default',
    value: options.value || '',
    placeholder: text,
    className: 'nn-toast-display-voice-settings__input-control'
  });
  shortcut.classList.add(
    'nn-toast-display-voice-settings__shortcut',
    ...(options.muted ? ['is-muted'] : []),
    ...(options.pushToTalkActive ? ['is-push-to-talk-active'] : []),
    'has-clear'
  );

  function formatShortcutKey(event) {
    const keyMap = {
      ' ': 'SPACE',
      Spacebar: 'SPACE',
      Escape: 'ESC',
      Esc: 'ESC',
      Control: 'CONTROL',
      Meta: 'COMMAND',
      Alt: 'ALT',
      Shift: 'SHIFT',
      ArrowUp: 'ARROW UP',
      ArrowDown: 'ARROW DOWN',
      ArrowLeft: 'ARROW LEFT',
      ArrowRight: 'ARROW RIGHT'
    };
    if (keyMap[event.key]) return keyMap[event.key];
    if (event.key && event.key.length === 1) return event.key.toUpperCase();
    return String(event.key || '').replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase();
  }

  function syncShortcutValueState() {
    shortcut.classList.toggle('has-value', Boolean(shortcut._inputEl && shortcut._inputEl.value));
    if (typeof options.onShortcutChange === 'function' && shortcut._inputEl) {
      options.onShortcutChange(shortcut._inputEl.value);
    }
  }

  if (shortcut._inputEl) {
    shortcut._inputEl.readOnly = true;
    shortcut._inputEl.setAttribute('aria-label', '按键盘设置快捷键');
    shortcut._inputEl.addEventListener('keydown', function(event) {
      if (event.key === 'Tab') return;
      event.preventDefault();
      shortcut._inputEl.value = formatShortcutKey(event);
      syncShortcutValueState();
    });
    syncShortcutValueState();
  }

  const clear = document.createElement('span');
  clear.className = 'nn-toast-display-voice-settings__clear';
  clear.innerHTML = '<i class="nnicon nicon-a-close-lineguanbi-xianxing"></i>';
  clear.addEventListener('click', function(event) {
    event.stopPropagation();
    if (shortcut._inputEl) {
      shortcut._inputEl.value = '';
      shortcut._inputEl.focus();
      syncShortcutValueState();
    }
  });
  shortcut.appendChild(clear);

  return shortcut;
}

function createToastDisplayVoiceSettingsContent(options = {}) {
  injectToastDisplayStyles();
  const createRadio = getToastDisplayRequiredComponent('createRadio');
  const {
    voiceMode = 'sensing',
    onVoiceModeChange = null,
    pushToTalkKey = '',
    onPushToTalkKeyChange = null
  } = options;

  const content = document.createElement('div');
  content.className = 'nn-toast-display-voice-settings';

  const voiceChoice = document.createElement('div');
  voiceChoice.className = 'nn-toast-display-voice-settings__choice';
  voiceChoice.appendChild(createRadio({
    text: '说话感应（连通保持说话感应）',
    checked: voiceMode !== 'pushToTalk',
    interactive: true
  }));
  content.appendChild(voiceChoice);

  const keyChoice = document.createElement('div');
  keyChoice.className = 'nn-toast-display-voice-settings__choice';
  keyChoice.appendChild(createRadio({
    text: '按键说话（按住连通说话、松手断开）',
    interactive: true
  }));
  const pushToTalkInput = createVoiceSettingsShortcut('按键盘设置快捷键', {
    value: pushToTalkKey,
    onShortcutChange: onPushToTalkKeyChange
  });
  keyChoice.appendChild(pushToTalkInput);
  content.appendChild(keyChoice);

  function setVoiceMode(mode) {
    const isSensing = mode === 'sensing';
    const voiceRadio = voiceChoice.querySelector('.nn-radio');
    const voiceDot = voiceChoice.querySelector('.nn-radio__dot');
    const keyRadio = keyChoice.querySelector('.nn-radio');
    const keyDot = keyChoice.querySelector('.nn-radio__dot');

    voiceChoice.classList.toggle('is-selected', isSensing);
    keyChoice.classList.toggle('is-selected', !isSensing);
    pushToTalkInput.classList.toggle('is-push-to-talk-active', !isSensing);
    if (voiceRadio) voiceRadio.classList.toggle('is-checked', isSensing);
    if (keyRadio) keyRadio.classList.toggle('is-checked', !isSensing);
    if (voiceDot) voiceDot.style.display = isSensing ? 'block' : 'none';
    if (keyDot) keyDot.style.display = isSensing ? 'none' : 'block';
    if (!options.silent && typeof onVoiceModeChange === 'function') {
      onVoiceModeChange(mode);
    }
  }

  voiceChoice.addEventListener('click', function() {
    setVoiceMode('sensing');
  });
  keyChoice.addEventListener('click', function() {
    setVoiceMode('pushToTalk');
  });
  options.silent = true;
  setVoiceMode(voiceMode === 'pushToTalk' ? 'pushToTalk' : 'sensing');
  options.silent = false;

  const listGroup = document.createElement('div');
  listGroup.className = 'nn-toast-display-voice-settings__group';
  const listLabel = document.createElement('div');
  listLabel.className = 'nn-toast-display-voice-settings__label';
  listLabel.textContent = '一键快捷开麦/闭麦（主播模式，关闭声音）';
  listGroup.appendChild(listLabel);
  listGroup.appendChild(createVoiceSettingsShortcut('按键盘设置快捷键', {
    muted: true
  }));
  content.appendChild(listGroup);

  const muteGroup = document.createElement('div');
  muteGroup.className = 'nn-toast-display-voice-settings__group';
  const muteLabel = document.createElement('div');
  muteLabel.className = 'nn-toast-display-voice-settings__label';
  muteLabel.textContent = '一键快捷静音（主播模式，关闭声音、麦克风）';
  muteGroup.appendChild(muteLabel);
  muteGroup.appendChild(createVoiceSettingsShortcut('按键盘设置快捷键', {
    muted: true
  }));
  content.appendChild(muteGroup);

  return content;
}

function createToastDisplayVoiceSettingsDialog(options = {}) {
  injectToastDisplayStyles();
  const createToast = getToastDisplayRequiredComponent('createToast');
  const dialog = createToast({
    title: '语音设置',
    content: createToastDisplayVoiceSettingsContent(options),
    showClose: false,
    showFooter: false,
    className: 'nn-toast-display-voice-settings-dialog'
  });

  const titleRow = dialog.querySelector('.nn-toast__title-row');
  const action = document.createElement('button');
  action.type = 'button';
  action.className = 'nn-toast-display-voice-settings__header-action';
  action.setAttribute('aria-label', '语音设置');
  action.innerHTML = '<i class="nnicon nicon-a-settings-lineshezhi-xianxing"></i>';
  titleRow.appendChild(action);

  return dialog;
}

function renderToastDisplay(container) {
  if (typeof container === 'string') {
    container = document.querySelector(container);
  }
  if (!container) return;
  container.innerHTML = '';
  const demo = document.createElement('div');
  demo.className = 'nn-toast-display-demo';
  demo.appendChild(createToastDisplaySearchTeamDialog());
  container.appendChild(demo);
}

function renderToastDisplayVoiceSettings(container) {
  if (typeof container === 'string') {
    container = document.querySelector(container);
  }
  if (!container) return;
  container.innerHTML = '';
  const demo = document.createElement('div');
  demo.className = 'nn-toast-display-demo';
  demo.appendChild(createToastDisplayVoiceSettingsDialog());
  container.appendChild(demo);
}

if (typeof window !== 'undefined') {
  window.injectToastDisplayStyles = injectToastDisplayStyles;
  window.createToastDisplaySearchTeamDialog = createToastDisplaySearchTeamDialog;
  window.createToastDisplayVoiceSettingsDialog = createToastDisplayVoiceSettingsDialog;
  window.renderToastDisplay = renderToastDisplay;
  window.renderToastDisplayVoiceSettings = renderToastDisplayVoiceSettings;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectToastDisplayStyles,
    createToastDisplaySearchTeamDialog,
    createToastDisplayVoiceSettingsDialog,
    renderToastDisplay,
    renderToastDisplayVoiceSettings
  };
}
