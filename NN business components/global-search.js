const GlobalSearchStyles = `
  .nn-global-search {
    position: relative;
    width: 1280px;
    height: 900px;
    overflow: hidden;
    border: none;
    border-radius: var(--border-radius-4r);
    background: var(--gray-2);
    box-shadow: var(--shadow-stroke-inset), var(--shadow-lg);
    box-sizing: border-box;
    color: var(--gray-3);
    font-family: var(--font-family-main);
  }

  .nn-global-search__panel {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space24);
    padding: var(--space24) var(--space40);
    overflow: hidden;
    box-sizing: border-box;
  }

  .nn-global-search__top {
    display: flex;
    width: 100%;
    min-height: 40px;
    flex: 0 0 auto;
    justify-content: center;
  }

  .nn-global-search .nn-global-search__input {
    width: 600px;
    height: 50px;
    padding-right: 44px;
    padding-left: 46px;
  }

  .nn-global-search .nn-global-search__input .nn-header__search-input,
  .nn-global-search .nn-global-search__input .nn-header__search-placeholder {
    height: 24px;
    font-size: 18px;
    line-height: 24px;
  }

  .nn-global-search .nn-global-search__input .nn-header__search-placeholder {
    left: 46px;
    right: 44px;
  }

  .nn-global-search .nn-global-search__input .nn-header__search-placeholder-item {
    height: 24px;
  }

  .nn-global-search .nn-global-search__input .nn-header__search-icon {
    left: 10px;
    width: 28px;
    height: 28px;
    margin-top: -14px;
  }

  .nn-global-search .nn-global-search__input .nn-header__search-icon img {
    width: 28px;
    height: 28px;
  }

  .nn-global-search .nn-global-search__input .nn-header__search-submit {
    right: 10px;
    width: 24px;
    height: 24px;
    font-size: 24px;
  }

  .nn-global-search__close {
    position: absolute;
    top: var(--space24);
    right: var(--space24);
    z-index: 3;
  }

  .nn-global-search__default,
  .nn-global-search__results {
    flex: 1 1 auto;
    min-height: 0;
  }

  .nn-global-search__default {
    display: flex;
    flex-direction: column;
    gap: var(--space24);
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .nn-global-search__search-intro {
    display: flex;
    flex-direction: column;
    gap: var(--space16);
    width: 100%;
    flex: 0 0 auto;
  }

  .nn-global-search__history {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 34px;
    overflow: visible;
  }

  .nn-global-search__history-title {
    flex: 0 0 auto;
    color: var(--gray-3);
    font-size: var(--font-size-equity-id);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-subtitle);
    white-space: nowrap;
  }

  .nn-global-search__history-list {
    display: flex;
    align-items: center;
    gap: var(--space10);
    min-width: 0;
    margin-left: var(--space10);
    overflow: visible;
  }

  .nn-global-search__clear {
    margin-left: var(--space10);
  }

  .nn-global-search__banner {
    width: 100%;
    aspect-ratio: 1200 / 196;
    flex: 0 0 auto;
    overflow: hidden;
    background: var(--gray-9);
  }

  .nn-global-search__banner img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .nn-global-search__filters {
    width: 100%;
    flex: 0 0 auto;
  }

  .nn-global-search__game-grid,
  .nn-global-search__result-grid {
    display: grid;
    width: 100%;
    align-items: start;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    column-gap: var(--space24);
    row-gap: var(--space32);
  }

  .nn-global-search__game-grid .nn-game-release-card,
  .nn-global-search__result-grid .nn-game-release-card,
  .nn-global-search__result-grid .nn-player-community-card {
    width: 100%;
    min-width: 0;
  }

  .nn-global-search__results {
    display: flex;
    gap: var(--space24);
    width: 100%;
    overflow: visible;
  }

  .nn-global-search__result-column-shell {
    position: relative;
    height: 100%;
    min-height: 0;
  }

  .nn-global-search__result-column-shell--content {
    flex: 1 1 auto;
    min-width: 0;
  }

  .nn-global-search__result-column-shell--user {
    width: 292px;
    flex: 0 0 292px;
  }

  .nn-global-search__result-column {
    display: flex;
    flex-direction: column;
    gap: var(--space16);
    width: 100%;
    height: 100%;
    min-height: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .nn-global-search__result-title {
    display: flex;
    align-items: center;
    gap: var(--space10);
    height: 34px;
    flex: 0 0 auto;
    color: var(--gray-5);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
    white-space: nowrap;
  }

  .nn-global-search__result-title-main {
    font-weight: var(--font-weight-semibold);
  }

  .nn-global-search__result-title-count {
    color: var(--gray-6);
    font-weight: var(--font-weight-normal);
  }

  .nn-global-search__result-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .nn-global-search__user-list {
    display: flex;
    flex-direction: column;
    gap: var(--space8);
    width: 100%;
  }

  .nn-global-search-user {
    display: flex;
    align-items: center;
    gap: var(--space16);
    width: 100%;
    min-height: 60px;
    padding: var(--space16) var(--space24) var(--space16) var(--space16);
    border: 1px solid var(--gray-9);
    border-radius: var(--border-radius-8r);
    background: transparent;
    box-sizing: border-box;
  }

  .nn-global-search-user:hover {
    background: var(--gray-10);
  }

  .nn-global-search-user__text {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;
    gap: var(--space6);
    min-width: 0;
  }

  .nn-global-search-user__name,
  .nn-global-search-user__nn {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-global-search-user__name {
    color: var(--gray-4);
    font-size: var(--font-size-subtitle);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-subtitle);
  }

  .nn-global-search-user__nn {
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
  }

  .nn-global-search-user__gender {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    flex: 0 0 auto;
    font-size: var(--icon-size-x8);
    line-height: 1;
  }

  .nn-global-search-user__gender--female { color: var(--Magenta); }
  .nn-global-search-user__gender--male { color: var(--Esports-Blue); }

`;

const GlobalSearchGameData = [
  ['game-monster-hunter.png', '怪物猎人：荒野-凌越', 'Monster Hunter: Wilds - Beyond'],
  ['game-tides.png', '湮灭之潮', 'Tides of Annihilation'],
  ['game-phantom-blade.png', '影之刃：零', 'Phantom Blade Zero'],
  ['game-resident-evil.png', '生化危机：维罗妮卡重制版', 'Resident Evil Code: Veronica Remake'],
  ['game-bloodborne.png', '血源：诅咒', 'Bloodborne'],
  ['game-final-fantasy.png', '最终幻想：共鸣', 'Final Fantasy: Resonance'],
  ['game-castlevania.png', '恶魔城：贝尔蒙特的诅咒', "Castlevania: Belmont's Curse"],
  ['game-onimusha.png', '鬼武者：剑之道', 'Onimusha: Way of the Sword']
].map(function(game) {
  return {
    type: 'game',
    coverSrc: `../image/Game Store/${game[0]}`,
    title: game[1],
    description: game[2],
    rating: '92%',
    platforms: ['steam'],
    tags: ['共斗'],
    age: '16+'
  };
});

const GlobalSearchCommunityResult = {
  type: 'community',
  coverSrc: '../image/Game logo/game9-cover.webp',
  title: '绝地求生中国玩家社区',
  description: '欢迎加入我们的战队大家庭！这里是热爱游戏的你最好的归属。',
  certification: {
    officialSrc: '../image/Community Level/Corporate Certification.svg',
    officialCertColor: 'red'
  },
  communityLevel: { lv: 6, size: 'small' },
  id: { text: '90231', size: 'small' },
  onlineText: '323,344'
};

const GlobalSearchResultData = [
  GlobalSearchGameData[0],
  GlobalSearchCommunityResult,
  GlobalSearchGameData[1],
  GlobalSearchGameData[3],
  GlobalSearchGameData[5],
  GlobalSearchGameData[2],
  GlobalSearchGameData[4],
  GlobalSearchGameData[6],
  GlobalSearchGameData[7]
];

const GlobalSearchUsers = [
  { name: 'DQ', avatar: '../image/Avatar/default.png', gender: 'female' },
  { name: '微甜汽水', avatar: '../image/Avatar/头像809.png', gender: 'male' },
  { name: '长夏晓风', avatar: '../image/Avatar/头像662.png', gender: 'male' },
  { name: '大黑猫Yanni', avatar: '../image/Avatar/头像821.png', gender: 'female' },
  { name: 'Ya ha h', avatar: '../image/Avatar/头像798.png', gender: 'female' },
  { name: '蓝莓之夜', avatar: '../image/Avatar/default.png', gender: 'female' },
  { name: '晨曦微露', avatar: '../image/Avatar/头像809.png', gender: 'male' },
  { name: '秋日私语', avatar: '../image/Avatar/头像662.png', gender: 'male' }
];

function injectGlobalSearchStyles() {
  if (document.getElementById('nn-global-search-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-global-search-styles';
  style.textContent = GlobalSearchStyles;
  document.head.appendChild(style);
}

function createGlobalSearchCloseButton() {
  const button = nnButton({
    text: '',
    variant: 'system',
    level: 'tertiary',
    size: 'default',
    icon: '<i class="nnicon nicon-a-close-lineguanbi-xianxing"></i>',
    iconPosition: 'only',
    iconSize: 'var(--icon-size-x12)',
    className: 'nn-global-search__close'
  });
  button.setAttribute('aria-label', '关闭搜索');
  return button;
}

function createGlobalSearchInput(options = {}) {
  if (typeof window.createHeaderSearch !== 'function') {
    throw new Error('Global Search requires createHeaderSearch from basic components/header.js');
  }
  return window.createHeaderSearch({
    value: options.value || '',
    placeholder: options.placeholder || '搜索游戏、社区、用户名称/ID',
    showSubmitIcon: true,
    className: 'nn-header__search--default nn-global-search__input',
    onInput: options.onInput || null
  });
}

function createGlobalSearchTitle(mainText, resultCount) {
  const title = document.createElement('div');
  title.className = 'nn-global-search__result-title';
  const main = document.createElement('span');
  main.className = 'nn-global-search__result-title-main';
  main.textContent = mainText;
  const count = document.createElement('span');
  count.className = 'nn-global-search__result-title-count';
  count.textContent = `共找到${resultCount}个结果`;
  title.appendChild(main);
  title.appendChild(count);
  return title;
}

function createGlobalSearchGameCard(data) {
  return createGameReleaseCard(Object.assign({}, data, { fluid: true }));
}

function createGlobalSearchDefaultView(options = {}) {
  const history = options.history || ['英雄联盟', 'PUBG', '无畏契约', '36', '带玩', '电竞开黑', 'LOL', '魔兽', '英', 'apex'];
  const games = options.games || GlobalSearchGameData;
  const root = document.createElement('div');
  root.className = 'nn-global-search__default';

  const intro = document.createElement('div');
  intro.className = 'nn-global-search__search-intro';
  const historyRow = document.createElement('div');
  historyRow.className = 'nn-global-search__history';
  const historyTitle = document.createElement('span');
  historyTitle.className = 'nn-global-search__history-title';
  historyTitle.textContent = '历史记录';
  historyRow.appendChild(historyTitle);

  const historyList = document.createElement('div');
  historyList.className = 'nn-global-search__history-list';
  history.forEach(function(text) {
    historyList.appendChild(createLabel({ text, type: 'history', showDelete: true }));
  });
  historyRow.appendChild(historyList);

  const clear = document.createElement('div');
  clear.className = 'nn-global-search__clear';
  clear.appendChild(nnButton({
    variant: 'system',
    level: 'tertiary',
    size: 'small',
    text: '删除记录',
    icon: '<i class="nnicon nicon-a-Clearqingli"></i>',
    iconPosition: 'left',
    iconSize: 'var(--icon-size-x8)'
  }));
  historyRow.appendChild(clear);
  intro.appendChild(historyRow);
  root.appendChild(intro);

  const banner = document.createElement('div');
  banner.className = 'nn-global-search__banner';
  const bannerImage = document.createElement('img');
  bannerImage.src = options.bannerSrc || '../image/Community/play-banner.png';
  bannerImage.alt = '';
  banner.appendChild(bannerImage);
  root.appendChild(banner);

  const filters = createTabs({
    type: 'secondary',
    tabs: [
      { name: '全部游戏', iconLeft: 'nnicon nicon-a-AllGames-Linequanbuyouxi-xianxing' },
      { name: '新上架', iconLeft: 'nnicon nicon-a-Star-Linexingxing-xianxing' },
      { name: '策略' },
      { name: '动作' },
      { name: '休闲' },
      { name: '模拟经营' },
      { name: '解谜' }
    ],
    defaultActive: 0
  });
  filters.classList.add('nn-global-search__filters');
  filters.setAttribute('aria-label', '游戏筛选');
  root.appendChild(filters);

  const grid = document.createElement('div');
  grid.className = 'nn-global-search__game-grid';
  games.forEach(function(game) { grid.appendChild(createGlobalSearchGameCard(game)); });
  root.appendChild(grid);
  return root;
}

function createGlobalSearchUserItem(data) {
  const item = document.createElement('div');
  item.className = 'nn-global-search-user';
  item.appendChild(createAvatar({ src: data.avatar, size: 60, status: 'on' }));

  const text = document.createElement('div');
  text.className = 'nn-global-search-user__text';
  const name = document.createElement('span');
  name.className = 'nn-global-search-user__name';
  name.textContent = data.name;
  const nn = document.createElement('span');
  nn.className = 'nn-global-search-user__nn';
  nn.textContent = `NN：${data.nn || '657270'}`;
  text.appendChild(name);
  text.appendChild(nn);
  item.appendChild(text);

  const gender = document.createElement('span');
  gender.className = `nn-global-search-user__gender nn-global-search-user__gender--${data.gender === 'male' ? 'male' : 'female'}`;
  gender.innerHTML = data.gender === 'male'
    ? '<i class="nnicon nicon-a-Mannan"></i>'
    : '<i class="nnicon nicon-a-Womannv"></i>';
  gender.setAttribute('aria-label', data.gender === 'male' ? '男生' : '女生');
  item.appendChild(gender);
  return item;
}

function createGlobalSearchResultsView(options = {}) {
  injectGlobalSearchStyles();
  const results = options.results || options.communities || GlobalSearchResultData;
  const users = options.users || GlobalSearchUsers;
  const resultCount = options.resultCount == null ? 50 : options.resultCount;
  const root = document.createElement('div');
  root.className = 'nn-global-search__results';

  const contentShell = document.createElement('div');
  contentShell.className = 'nn-global-search__result-column-shell nn-global-search__result-column-shell--content';
  const contentColumn = document.createElement('div');
  contentColumn.className = 'nn-global-search__result-column nn-global-search__result-column--content';
  contentColumn.appendChild(createGlobalSearchTitle('搜索的游戏、社区', resultCount));
  const resultGrid = document.createElement('div');
  resultGrid.className = 'nn-global-search__result-grid';
  results.forEach(function(item) {
    resultGrid.appendChild(item.type === 'community'
      ? createPlayerCommunityCard(Object.assign({}, item, { fluid: true }))
      : createGlobalSearchGameCard(item));
  });
  contentColumn.appendChild(resultGrid);
  contentShell.appendChild(contentColumn);
  root.appendChild(contentShell);

  const userShell = document.createElement('div');
  userShell.className = 'nn-global-search__result-column-shell nn-global-search__result-column-shell--user';
  const userColumn = document.createElement('div');
  userColumn.className = 'nn-global-search__result-column nn-global-search__result-column--user';
  userColumn.appendChild(createGlobalSearchTitle('搜索的用户', resultCount));
  const userList = document.createElement('div');
  userList.className = 'nn-global-search__user-list';
  users.forEach(function(user) { userList.appendChild(createGlobalSearchUserItem(user)); });
  userColumn.appendChild(userList);
  userShell.appendChild(userColumn);
  root.appendChild(userShell);
  return root;
}

function createGlobalSearch(options = {}) {
  if (typeof window.injectLabelStyles === 'function') window.injectLabelStyles();
  if (typeof window.injectTabsStyles === 'function') window.injectTabsStyles();
  if (typeof window.injectScrollbarStyles === 'function') window.injectScrollbarStyles();
  injectGlobalSearchStyles();

  const root = document.createElement('section');
  root.className = 'nn-global-search';
  root.setAttribute('aria-label', 'Global Search 全局搜索');
  const panel = document.createElement('div');
  panel.className = 'nn-global-search__panel';
  const top = document.createElement('div');
  top.className = 'nn-global-search__top';
  const close = createGlobalSearchCloseButton();
  let currentValue = String(options.value || '');
  let activeBody = null;
  let scrollbars = [];

  function destroyScrollbars() {
    scrollbars.forEach(function(scrollbar) {
      if (scrollbar && typeof scrollbar.destroy === 'function') scrollbar.destroy();
    });
    scrollbars = [];
  }

  function bindBodyScrollbars() {
    destroyScrollbars();
    if (typeof window.createScrollbar !== 'function' || !activeBody) return;
    if (activeBody.classList.contains('nn-global-search__default')) {
      scrollbars.push(window.createScrollbar({
        target: activeBody,
        container: root,
        hoverTarget: root,
        variant: 'page',
        right: 4,
        top: 88,
        bottom: 24,
        minThumbSize: 60
      }));
    } else {
      activeBody.querySelectorAll('.nn-global-search__result-column-shell').forEach(function(shell) {
        const column = shell.querySelector('.nn-global-search__result-column');
        if (!column) return;
        scrollbars.push(window.createScrollbar({
          target: column,
          container: shell,
          hoverTarget: shell,
          variant: 'page',
          className: 'nn-global-search__column-scrollbar',
          right: 'calc(var(--space16) * -1)',
          top: 50,
          bottom: 0,
          minThumbSize: 60
        }));
      });
    }
  }

  function renderBody() {
    if (activeBody) activeBody.remove();
    activeBody = currentValue.trim()
      ? createGlobalSearchResultsView(options)
      : createGlobalSearchDefaultView(options);
    panel.appendChild(activeBody);
    requestAnimationFrame(bindBodyScrollbars);
  }

  function focusInput() {
    const inputElement = input && input._inputEl;
    if (!inputElement || !root.isConnected) return;
    try {
      inputElement.focus({ preventScroll: true });
    } catch (error) {
      inputElement.focus();
    }
    const cursorPosition = inputElement.value.length;
    if (typeof inputElement.setSelectionRange === 'function') {
      inputElement.setSelectionRange(cursorPosition, cursorPosition);
    }
  }

  function enter() {
    requestAnimationFrame(function() {
      focusInput();
      window.setTimeout(function() {
        if (!root.isConnected || root.closest('.is-closing')) return;
        const activeElement = document.activeElement;
        if (activeElement === document.body || !root.contains(activeElement)) {
          focusInput();
        }
      }, 400);
    });
  }

  const input = createGlobalSearchInput({
    value: currentValue,
    placeholder: options.placeholder || '',
    onInput: function(event) {
      currentValue = event.value;
      root.dataset.value = currentValue;
      renderBody();
    }
  });
  top.appendChild(input);
  panel.appendChild(top);
  root.appendChild(panel);
  root.appendChild(close);
  close.addEventListener('click', function(event) {
    if (typeof options.onClose === 'function') options.onClose({ event, target: root });
  });
  renderBody();

  root._globalSearch = {
    get value() { return currentValue; },
    enter,
    focus: focusInput,
    setValue: function(nextValue) {
      currentValue = String(nextValue || '');
      if (input._inputEl) {
        input._inputEl.value = currentValue;
        input._inputEl.dispatchEvent(new Event('input', { bubbles: true }));
      } else {
        renderBody();
      }
    },
    update: function() {
      scrollbars.forEach(function(scrollbar) {
        if (scrollbar && typeof scrollbar.update === 'function') scrollbar.update();
      });
    }
  };
  return root;
}

if (typeof window !== 'undefined') {
  window.injectGlobalSearchStyles = injectGlobalSearchStyles;
  window.createGlobalSearch = createGlobalSearch;
  window.createGlobalSearchResultsView = createGlobalSearchResultsView;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { injectGlobalSearchStyles, createGlobalSearch, createGlobalSearchResultsView };
}
