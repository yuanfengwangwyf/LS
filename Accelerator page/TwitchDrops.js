(function() {
  if (typeof window.setActiveNav === 'function') window.setActiveNav('accelerator-p-nav-tools');
  window.addEventListener('DOMContentLoaded', function() {
    if (typeof window.initPagePreviewMode === 'function') window.initPagePreviewMode();
  });

  const activities = [
    { id: 'infection-free-zone', game: '感染隔离区', event: 'Infection Free Zone Twitch Drops', image: '../image/Game%20vertical/game%20-06.png' },
    { id: 'phase-zero', game: 'PHASE ZERO', event: 'PHASE ZERO 限定掉宝', image: '../image/Game%20vertical/game%20-07.png' },
    { id: 'flame-forest-flood', game: 'Flame Forest & Flood', event: 'Flame Forest & Flood Twitch Drops', image: '../image/Game%20vertical/game%20-08.png' },
    { id: 'silver-palace', game: '白银之城', event: '白银之城 Twitch Drops', image: '../image/Game%20vertical/game%20-09.png' },
    { id: 'trine-6', game: 'Trine 6: Together in Time', event: 'Trine 6 Twitch Drops', image: '../image/Game%20vertical/game%20-10.png' },
    { id: 'star-valley', game: '星布谷地', event: '星布谷地 限定掉宝', image: '../image/Game%20vertical/game%20-11.png' },
    { id: 'loftia', game: 'Loftia', event: 'Loftia Twitch Drops', image: '../image/Game%20vertical/game%20-12.png' },
    { id: 'phantom-blade-zero', game: '影之刃零', event: 'Phantom Blade Zero Twitch Drops', image: '../image/Game%20vertical/game%20-13.png' },
    { id: 'flame-forest-flood-2', game: 'Flame Forest & Flood', event: 'Flame Forest & Flood 限定掉宝', image: '../image/Game%20vertical/game%20-14.png' },
    { id: 'dreamlight-valley', game: 'Disney Dreamlight Valley: The Keepsake Sea', event: 'Dreamlight Valley 限定掉宝', image: '../image/Game%20vertical/game%20-15.png' },
    { id: 'god-of-war-ragnarok', game: 'God of War Ragnarök', event: 'God of War Ragnarök Twitch Drops', image: '../image/Game%20vertical/game%20-16.png' }
  ];

  const rewardNames = [
    '限定头盔挂饰', '专属喷漆', '动态名牌', '限定挂件', '专属武器贴纸',
    '玩家卡面', '限定徽章', '游戏内道具', '掉宝礼包', '限定头像框',
    '主播专属徽章', '赛季纪念喷漆', '限定载具皮肤', '限定角色名片', '表情包礼包',
    '赛季经验加成', '限定背包挂件', '主题界面皮肤', '专属聊天徽章', '限定音乐包'
  ];

  function buildRewards(status) {
    return rewardNames.map(function(name, index) {
      const day = status === 'claimed' ? 31 - (index % 10) : 20 - (index % 10);
      return {
        id: status + '-' + index,
        name: name,
        image: '../image/gift/' + (index % 9 + 1) + '.png',
        expires: '2026.12.' + String(day).padStart(2, '0') + ' 23:59',
        status: status,
        code: 'DROP-' + String(status === 'claimed' ? 8800 + index : 9900 + index)
      };
    });
  }

  const rewards = buildRewards('claimed').concat(buildRewards('pending'));

  const MAX_ACCOUNTS = 5;
  const accounts = [
    { id: 'twitch-main', name: '雷神小助手', platform: 'Twitch', avatar: '../image/Avatar/头像1095.png', current: true },
    { id: 'steam-neo', name: 'NeoGamer', platform: 'Steam', avatar: '../image/Avatar/头像1086.png', current: false },
    { id: 'epic-owner', name: 'EpicPlayer', platform: 'Epic', avatar: '../image/Avatar/头像717.png', current: false }
  ];
  const accountPool = [
    { name: 'Ubisoft_Leo', platform: 'Ubisoft', avatar: '../image/Avatar/头像311.png' },
    { name: 'Twitch_Raven', platform: 'Twitch', avatar: '../image/Avatar/头像498.png' },
    { name: 'Steam_Wanderer', platform: 'Steam', avatar: '../image/Avatar/头像511.png' },
    { name: 'Epic_Nova', platform: 'Epic', avatar: '../image/Avatar/头像542.png' },
    { name: 'Ubisoft_Mira', platform: 'Ubisoft', avatar: '../image/Avatar/头像551.png' },
    { name: 'Twitch_Kite', platform: 'Twitch', avatar: '../image/Avatar/头像580.png' }
  ];

  const byId = function(id) { return document.getElementById(id); };
  const header = byId('accelerator-twitch-drops-header');

  if (header && typeof window.createAcceleratorHeader === 'function') {
    const acceleratorHeader = window.createAcceleratorHeader({
      width: '100%',
      canGoBack: true,
      enableSearchSuggestions: true,
      onSearchSuggestionSelect: function(value) {
        const frame = header.closest('.accelerator-tools-frame');
        if (!frame || !window.createAcceleratorGameSearch || frame.querySelector('.accelerator-game-search')) return;
        const search = window.createAcceleratorGameSearch({ mountTarget: frame });
        if (value && search.searchInput) {
          search.searchInput.value = value;
          search.searchInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }
    });
    header.appendChild(acceleratorHeader);
    const input = acceleratorHeader.search && acceleratorHeader.search.querySelector('input');
    if (input) {
      input.readOnly = true;
      input.setAttribute('aria-haspopup', 'dialog');
    }
    if (acceleratorHeader.search && window.createAcceleratorGameSearch) {
      acceleratorHeader.search.addEventListener('click', function(event) {
        event.preventDefault();
        const frame = header.closest('.accelerator-tools-frame');
        if (frame && !frame.querySelector('.accelerator-game-search')) {
          window.createAcceleratorGameSearch({ mountTarget: frame });
        }
      });
    }
  }

  const sidebar = byId('accelerator-twitch-drops-sidebar');
  if (sidebar && typeof window.createAcceleratorSideNavigationPanel === 'function') {
    const panel = window.createAcceleratorSideNavigationPanel({
      sortable: false,
      functionItems: [
        { text: '首页', iconClass: 'nicon-a-Communityhalls-fillshequshouye-mianxing', onClick: function() { window.location.href = 'Home.html'; } },
        { text: '电脑工具', iconClass: 'nicon-a-Gametools-fillyouxigongju-mianxing', onClick: function() { window.location.href = 'Tools.html'; } }
      ],
      onChange: function(change) {
        if (change.item && change.item.text === '首页') window.location.href = 'Home.html';
        if (change.item && change.item.text === '电脑工具') window.location.href = 'Tools.html';
      }
    });
    sidebar.appendChild(panel);
    if (panel.functionItems && panel.functionItems[1]) panel.setActiveItem(panel.functionItems[1]);
  }

  const gridHost = byId('twitch-drops-grid');
  const content = byId('accelerator-twitch-drops-content');
  let activitySearchTerm = '';

  function createActivityCard(activity) {
    const card = document.createElement('article');
    card.className = 'accelerator-tools-event-card accelerator-tools-event-card--stacked-twitch';
    const posterFrame = document.createElement('div');
    posterFrame.className = 'accelerator-tools-event-card__poster-frame';
    const image = document.createElement('img');
    image.className = 'accelerator-tools-event-card__poster';
    image.src = activity.image;
    image.alt = '';
    posterFrame.appendChild(image);
    const body = document.createElement('div');
    body.className = 'accelerator-tools-event-card__stacked-body';
    const title = document.createElement('strong');
    title.textContent = activity.game;
    const description = document.createElement('small');
    description.className = 'accelerator-tools-event-card__stacked-description';
    description.textContent = activity.event;
    body.append(title, description);
    card.append(posterFrame, body);
    return card;
  }

  function renderGrid() {
    if (!gridHost) return;
    gridHost.replaceChildren();
    const keyword = activitySearchTerm.trim().toLowerCase();
    const items = activities.filter(function(activity) {
      return !keyword || activity.game.toLowerCase().includes(keyword) || activity.event.toLowerCase().includes(keyword);
    });
    if (!items.length) {
      const empty = document.createElement('p');
      empty.className = 'accelerator-twitch-drops-empty';
      empty.textContent = keyword ? '没有找到符合条件的掉宝活动' : '暂无掉宝活动';
      gridHost.appendChild(empty);
      return;
    }
    items.forEach(function(activity) { gridHost.appendChild(createActivityCard(activity)); });
  }

  let rewardsDialog = null;
  let rewardsList = null;
  let rewardsActiveStatus = 'claimed';

  function copyRewardCode(reward) {
    function done() {
      if (typeof window.showMessage === 'function') window.showMessage({ state: 'success', text: '兑换码已复制' });
    }
    function fail() {
      if (typeof window.showMessage === 'function') window.showMessage({ state: 'error', text: '复制失败，请手动复制兑换码：' + reward.code });
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(reward.code).then(done).catch(fail);
      return;
    }
    fail();
  }

  function createRewardRow(reward) {
    const row = document.createElement('article');
    row.className = 'accelerator-twitch-drops-reward-row';
    const image = document.createElement('img');
    image.className = 'accelerator-twitch-drops-reward-row__image';
    image.src = reward.image;
    image.alt = '';
    const info = document.createElement('div');
    info.className = 'accelerator-twitch-drops-reward-row__info';
    const name = document.createElement('strong');
    name.textContent = reward.name;
    const expires = document.createElement('small');
    expires.textContent = '7天后到期';
    const actions = document.createElement('div');
    actions.className = 'accelerator-twitch-drops-reward-row__actions';
    if (typeof window.createButton === 'function') {
      actions.appendChild(window.createButton({
        text: '复制兑换码',
        variant: 'system',
        level: 'secondary',
        size: 'default',
        icon: '<i class="nnicon nicon-a-Copytext-linefuzhiwenben-xianxing" aria-hidden="true"></i>',
        iconPosition: 'left',
        onClick: function() { copyRewardCode(reward); }
      }));
      actions.appendChild(window.createButton({
        text: '领取规则',
        variant: 'system',
        level: 'tertiary',
        size: 'default',
        onClick: function() {
          if (typeof window.showMessage === 'function') {
            window.showMessage({ text: '领取规则：完成活动观看任务后，奖励将发放至当前账号，请在有效期内兑换。' });
          }
        }
      }));
    }
    info.append(name, expires, actions);
    const media = document.createElement('div');
    media.className = 'accelerator-twitch-drops-reward-row__media';
    media.append(image);

    row.append(media, info);
    return row;
  }

  function renderRewards() {
    if (!rewardsList) return;
    rewardsList.replaceChildren();
    const items = rewards.filter(function(reward) { return reward.status === rewardsActiveStatus; });
    if (!items.length) {
      const empty = document.createElement('p');
      empty.className = 'accelerator-twitch-drops-rewards-empty';
      empty.textContent = rewardsActiveStatus === 'claimed' ? '暂无已领取的奖励' : '暂无待领取的奖励';
      rewardsList.appendChild(empty);
      return;
    }
    items.forEach(function(reward) { rewardsList.appendChild(createRewardRow(reward)); });
  }

  function closeRewardsDialog() {
    if (rewardsDialog) rewardsDialog.hidden = true;
  }

  function ensureRewardsDialog() {
    if (rewardsDialog) return rewardsDialog;
    if (typeof window.createToast !== 'function' || typeof window.createTabs !== 'function') return null;
    const frame = document.querySelector('.accelerator-tools-frame');
    if (!frame) return null;

    const overlay = document.createElement('div');
    overlay.className = 'accelerator-twitch-drops-dialog-overlay';
    overlay.hidden = true;

    const content = document.createElement('div');
    content.className = 'accelerator-twitch-drops-rewards-dialog__content';
    const tabsHostInner = document.createElement('div');
    tabsHostInner.className = 'accelerator-twitch-drops-rewards-dialog__tabs';
    rewardsList = document.createElement('div');
    rewardsList.className = 'accelerator-twitch-drops-rewards-dialog__list';
    content.append(tabsHostInner, rewardsList);

    tabsHostInner.appendChild(window.createTabs({
      type: 'secondary',
      tabs: [{ name: '已领取' }, { name: '待领取' }],
      defaultActive: 0,
      onChange: function(change) {
        rewardsActiveStatus = change.index === 1 ? 'pending' : 'claimed';
        renderRewards();
      }
    }));

    const toast = window.createToast({
      title: '我的奖励',
      content: content,
      showHeader: true,
      showClose: true,
      showFooter: false,
      className: 'accelerator-twitch-drops-rewards-dialog__panel',
      id: 'accelerator-twitch-drops-rewards-dialog',
      onClose: closeRewardsDialog
    });
    toast.setAttribute('role', 'dialog');
    toast.setAttribute('aria-modal', 'true');
    toast.setAttribute('aria-label', '我的奖励');

    overlay.appendChild(toast);
    overlay.addEventListener('click', function(event) {
      if (event.target === overlay) closeRewardsDialog();
    });
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && rewardsDialog && !rewardsDialog.hidden) closeRewardsDialog();
    });
    frame.appendChild(overlay);
    rewardsDialog = overlay;
    return overlay;
  }

  function openRewardsDialog() {
    const dialog = ensureRewardsDialog();
    if (!dialog) {
      if (typeof window.showMessage === 'function') window.showMessage({ text: '奖励接口暂未接入。' });
      return;
    }
    renderRewards();
    dialog.hidden = false;
    const closeButton = dialog.querySelector('.nn-toast__close, .nn-toast__close-button, button');
    if (closeButton) closeButton.focus();
  }

  let accountsDialog = null;
  let accountsList = null;
  let accountsAddHost = null;

  function unbindAccount(accountId) {
    const index = accounts.findIndex(function(account) { return account.id === accountId; });
    if (index === -1) return;
    const wasCurrent = accounts[index].current;
    accounts.splice(index, 1);
    if (wasCurrent && accounts.length) accounts[0].current = true;
    if (typeof window.showMessage === 'function') window.showMessage({ text: '已解绑账号。' });
    renderAccounts();
  }

  function addAccount() {
    if (accounts.length >= MAX_ACCOUNTS || !accountPool.length) return;
    const next = accountPool.shift();
    accounts.push({
      id: 'account-' + Date.now(),
      name: next.name,
      platform: next.platform,
      avatar: next.avatar,
      current: !accounts.some(function(account) { return account.current; })
    });
    if (typeof window.showMessage === 'function') window.showMessage({ state: 'success', text: '账号添加成功。' });
    renderAccounts();
  }

  function createAccountRow(account) {
    const row = document.createElement('article');
    row.className = 'accelerator-twitch-drops-account-row';
    const avatarHost = document.createElement('span');
    avatarHost.className = 'accelerator-twitch-drops-account-row__avatar';
    if (typeof window.createAvatar === 'function') {
      avatarHost.appendChild(window.createAvatar({ src: account.avatar, text: account.name, size: 40 }));
    }
    const info = document.createElement('div');
    info.className = 'accelerator-twitch-drops-account-row__info';
    const heading = document.createElement('div');
    heading.className = 'accelerator-twitch-drops-account-row__heading';
    const name = document.createElement('strong');
    name.textContent = account.name;
    heading.appendChild(name);
    if (account.current && typeof window.createLabel === 'function') {
      heading.appendChild(window.createLabel({
        text: '当前账号',
        color: 'blue',
        type: 'soft',
        size: 'd',
        showDelete: false
      }));
    }
    const platform = document.createElement('small');
    platform.textContent = account.platform + ' · 已绑定';
    info.append(heading, platform);
    const actions = document.createElement('div');
    actions.className = 'accelerator-twitch-drops-account-row__actions';
    if (typeof window.createButton === 'function') {
      actions.appendChild(window.createButton({
        text: '解绑',
        variant: 'system',
        level: 'tertiary',
        size: 'small',
        onClick: function() { unbindAccount(account.id); }
      }));
    }
    row.append(avatarHost, info, actions);
    return row;
  }

  function renderAccounts() {
    if (!accountsList) return;
    accountsList.replaceChildren();
    if (!accounts.length) {
      const empty = document.createElement('p');
      empty.className = 'accelerator-twitch-drops-accounts-empty';
      empty.textContent = '暂未绑定账号';
      accountsList.appendChild(empty);
    } else {
      accounts.forEach(function(account) { accountsList.appendChild(createAccountRow(account)); });
    }
    if (accountsAddHost && typeof window.createButton === 'function') {
      accountsAddHost.replaceChildren();
      const addButton = window.createButton({
        text: '添加账号',
        variant: 'system',
        level: 'secondary',
        size: 'default',
        icon: '<i class="nnicon nicon-a-add-linetianjia-xianxing" aria-hidden="true"></i>',
        iconPosition: 'left',
        disabled: accounts.length >= MAX_ACCOUNTS || !accountPool.length,
        className: 'accelerator-twitch-drops-accounts-add-button',
        onClick: addAccount
      });
      accountsAddHost.appendChild(addButton);
    }
  }

  function closeAccountsDialog() {
    if (accountsDialog) accountsDialog.hidden = true;
  }

  function ensureAccountsDialog() {
    if (accountsDialog) return accountsDialog;
    if (typeof window.createToast !== 'function') return null;
    const frame = document.querySelector('.accelerator-tools-frame');
    if (!frame) return null;

    const overlay = document.createElement('div');
    overlay.className = 'accelerator-twitch-drops-dialog-overlay';
    overlay.hidden = true;

    const content = document.createElement('div');
    content.className = 'accelerator-twitch-drops-accounts-dialog__content';
    accountsList = document.createElement('div');
    accountsList.className = 'accelerator-twitch-drops-accounts-dialog__list';
    accountsAddHost = document.createElement('div');
    accountsAddHost.className = 'accelerator-twitch-drops-accounts-dialog__add';
    content.append(accountsList, accountsAddHost);

    const toast = window.createToast({
      title: '账号管理',
      subtitle: '已绑定账号将用于对应平台的掉宝时长累计与奖励发放',
      content: content,
      showHeader: true,
      showClose: true,
      showFooter: false,
      className: 'accelerator-twitch-drops-accounts-dialog__panel',
      id: 'accelerator-twitch-drops-accounts-dialog',
      onClose: closeAccountsDialog
    });
    toast.setAttribute('role', 'dialog');
    toast.setAttribute('aria-modal', 'true');
    toast.setAttribute('aria-label', '账号管理');

    overlay.appendChild(toast);
    overlay.addEventListener('click', function(event) {
      if (event.target === overlay) closeAccountsDialog();
    });
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && accountsDialog && !accountsDialog.hidden) closeAccountsDialog();
    });
    frame.appendChild(overlay);
    accountsDialog = overlay;
    return overlay;
  }

  function openAccountsDialog() {
    const dialog = ensureAccountsDialog();
    if (!dialog) {
      if (typeof window.showMessage === 'function') window.showMessage({ text: '账号管理接口暂未接入。' });
      return;
    }
    renderAccounts();
    dialog.hidden = false;
    const closeButton = dialog.querySelector('.nn-toast__close');
    if (closeButton) closeButton.focus();
  }

  const searchHost = byId('twitch-drops-search');
  if (searchHost && typeof window.createInput === 'function') {
    searchHost.appendChild(window.createInput({
      placeholder: '搜索 Twitch 掉宝活动',
      size: 'default',
      showSearch: true,
      onInput: function(payload) {
        activitySearchTerm = payload.value || '';
        renderGrid();
      },
      onSearch: function(payload) {
        activitySearchTerm = payload.value || '';
        renderGrid();
      }
    }));
  }
  renderGrid();

  if (content && typeof window.createScrollbar === 'function') {
    window.createScrollbar({ target: content, container: content.parentElement, hoverTarget: content, variant: 'page', right: 4, top: 0, bottom: 0, minThumbSize: 60 });
  }
})();
