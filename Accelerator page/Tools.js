(function() {
  if (typeof window.setActiveNav === 'function') window.setActiveNav('accelerator-p-nav-tools');
  window.addEventListener('DOMContentLoaded', function() {
    if (typeof window.initPagePreviewMode === 'function') window.initPagePreviewMode();
  });

  const toolCatalog = [
    { name: '壁纸美化', category: '电脑性能优化', rating: 97, action: 'open', iconSrc: '../image/Accelerator%20tools/tool-22.png' },
    { name: '内存智能清理', category: '电脑性能优化', rating: 96, action: 'toggle', iconSrc: '../image/Accelerator%20tools/tool-15.png' },
    { name: '显卡性能优化', category: '电脑性能优化', rating: 95, action: 'toggle', iconSrc: '../image/Accelerator%20tools/tool-18.png' },
    { name: 'DNS助手', category: '电脑性能优化', rating: 94, action: 'open', iconSrc: '../image/Accelerator%20tools/tool-23.png' },
    { name: 'CPU温度性能监控', category: '电脑性能优化', rating: 93, action: 'toggle', iconSrc: '../image/Accelerator%20tools/tool-16.png' },
    { name: '系统雷达', category: '电脑性能优化', rating: 92, action: 'open', iconSrc: '../image/Accelerator%20tools/tool-20.png' },
    { name: '桌面整理', category: '电脑系统工具', rating: 96, action: 'toggle', iconSrc: '../image/Accelerator%20tools/tool-17.png' },
    { name: '一键屏蔽麦克风', category: '电脑系统工具', rating: 95, action: 'open', iconSrc: '../image/Accelerator%20tools/tool-03.png' },
    { name: '误触屏蔽', category: '电脑系统工具', rating: 94, action: 'open', iconSrc: '../image/Accelerator%20tools/tool-04.png' },
    { name: '窗口快捷切换', category: '电脑系统工具', rating: 93, action: 'toggle', iconSrc: '../image/Accelerator%20tools/tool-10.png' },
    { name: '游戏闪退修复大师', category: '电脑系统工具', rating: 92, action: 'open', iconSrc: '../image/Accelerator%20tools/tool-19.png' },
    { name: 'C 盘空间清理', category: '电脑系统工具', rating: 91, action: 'toggle', iconSrc: '../image/Accelerator%20tools/tool-12.png' }
  ];

  const developers = [
    { name: '阿泽同学', id: '900301', score: '94.5', avatar: '../image/Avatar/头像1095.png' },
    { name: '七喜不加冰', id: '20007', score: '93.8', avatar: '../image/Avatar/头像1086.png' },
    { name: '老周爱折腾', id: '20031', score: '92.9', avatar: '../image/Avatar/头像717.png' },
    { name: '小林装机铺', id: '20102', score: '92.3', avatar: '../image/Avatar/头像311.png' },
    { name: '北川Code', id: '20118', score: '91.7', avatar: '../image/Avatar/头像498.png' },
    { name: '帧率猫', id: '20126', score: '91.2', avatar: '../image/Avatar/头像511.png' },
    { name: '柚子的软件屋', id: '20139', score: '90.8', avatar: '../image/Avatar/头像542.png' },
    { name: '键盘边的阿哲', id: '20157', score: '90.3', avatar: '../image/Avatar/头像551.png' },
    { name: '夏夜调参员', id: '20163', score: '89.9', avatar: '../image/Avatar/头像580.png' },
    { name: '橙子爱装机', id: '20188', score: '89.4', avatar: '../image/Avatar/头像624.png' }
  ];

  const developerToolIndexes = [
    [0, 5, 10, 2, 7],
    [6, 1, 9, 4, 11],
    [2, 8, 3, 10, 0],
    [7, 4, 11, 1, 5],
    [3, 9, 6, 0, 8],
    [5, 10, 2, 7, 4],
    [1, 11, 8, 3, 9],
    [9, 0, 4, 6, 2],
    [11, 7, 5, 1, 10],
    [4, 2, 6, 8, 3]
  ];

  const freebieItems = [
    { name: '恶魔城：暗影之王', image: '../image/Game%20Store/game-castlevania.png', endTime: '11月26日 23:59 结束' },
    { name: '幻兽帕鲁与大潮', image: '../image/Game%20Store/game-tides.png', endTime: '11月28日 23:59 结束' },
    { name: '影之刃零先行礼包', image: '../image/Game%20Store/game-phantom-blade.png', endTime: '12月03日 23:59 结束' },
    { name: '巫师重制版', image: '../image/Game%20Store/game-witcher-remake.png', endTime: '12月05日 23:59 结束' }
  ];

  const twitchItems = [
    { name: '感染隔离区', image: '../image/Game%20vertical/game%20-06.png', event: 'Infection Free Zone Twitch Drops' },
    { name: 'PHASE ZERO', image: '../image/Game%20vertical/game%20-07.png', event: 'PHASE ZERO 限定掉宝' },
    { name: 'Flame Forest & Flood', image: '../image/Game%20vertical/game%20-08.png', event: 'Flame Forest & Flood Twitch Drops' }
  ];

  const twitchStackedItems = [
    { name: '感染隔离区', image: '../image/Game%20vertical/game%20-06.png', event: 'Infection Free Zone Twitch Drops' },
    { name: 'PHASE ZERO', image: '../image/Game%20vertical/game%20-07.png', event: 'PHASE ZERO 限定掉宝' },
    { name: 'Flame Forest & Flood', image: '../image/Game%20vertical/game%20-08.png', event: 'Flame Forest & Flood Twitch Drops' },
    { name: '白银之城', image: '../image/Game%20vertical/game%20-09.png', event: '白银之城 Twitch Drops' },
    { name: 'Trine 6: Together in Time', image: '../image/Game%20vertical/game%20-10.png', event: 'Trine 6 Twitch Drops' },
    { name: '星布谷地', image: '../image/Game%20vertical/game%20-11.png', event: '星布谷地 限定掉宝' },
    { name: 'Loftia', image: '../image/Game%20vertical/game%20-12.png', event: 'Loftia Twitch Drops' },
    { name: '影之刃零', image: '../image/Game%20vertical/game%20-13.png', event: 'Phantom Blade Zero Twitch Drops' },
    { name: 'Flame Forest & Flood', image: '../image/Game%20vertical/game%20-14.png', event: 'Flame Forest & Flood 限定掉宝' },
    { name: 'Disney Dreamlight Valley: The Keepsake Sea', image: '../image/Game%20vertical/game%20-15.png', event: 'Dreamlight Valley 限定掉宝' },
    { name: 'God of War Ragnarök', image: '../image/Game%20vertical/game%20-16.png', event: 'God of War Ragnarök Twitch Drops' }
  ];

  const header = document.getElementById('accelerator-tools-header');
  let acceleratorHeader = null;
  if (header && typeof window.createAcceleratorHeader === 'function') {
    function openGameSearch(value) {
      if (!acceleratorHeader || !window.createAcceleratorGameSearch) return;
      acceleratorHeader.suppressSearchSuggestions();
      const frame = header.closest('.accelerator-tools-frame');
      if (!frame || frame.querySelector('.accelerator-game-search')) return;
      const search = window.createAcceleratorGameSearch({
        mountTarget: frame,
        onClose: function() { acceleratorHeader.suppressSearchSuggestions(); }
      });
      if (value) {
        search.searchInput.value = value;
        search.searchInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }

    acceleratorHeader = window.createAcceleratorHeader({
      width: '100%',
      canGoBack: true,
      enableSearchSuggestions: true,
      onSearchSuggestionSelect: openGameSearch
    });
    header.appendChild(acceleratorHeader);
    const headerInput = acceleratorHeader.search && acceleratorHeader.search.querySelector('input');
    if (headerInput) {
      headerInput.readOnly = true;
      headerInput.setAttribute('aria-haspopup', 'dialog');
    }
    acceleratorHeader.search?.addEventListener('click', function(event) {
      event.preventDefault();
      openGameSearch();
    });
  }

  const sidebar = document.getElementById('accelerator-tools-sidebar');
  if (sidebar && typeof window.createAcceleratorSideNavigationPanel === 'function') {
    const panel = window.createAcceleratorSideNavigationPanel({
      sortable: false,
      functionItems: [
        { text: '首页', iconClass: 'nicon-a-Communityhalls-fillshequshouye-mianxing', onClick: function() { window.location.href = 'Home.html'; } },
        { text: '电脑工具', iconClass: 'nicon-a-Gametools-fillyouxigongju-mianxing' }
      ],
      onChange: function(change) {
        if (change.group !== 'game') return;
        window.location.href = 'GameAccelerator.html?game=' + encodeURIComponent(change.item.id || change.item.text);
      }
    });
    sidebar.appendChild(panel);
    panel.setActiveItem(panel.functionItems[1]);
  }

  const content = document.getElementById('accelerator-tools-content');
  const categoryHost = document.getElementById('accelerator-tools-category-tabs');
  const anchorTargets = ['tools-discover', 'tools-ranking', 'tools-performance', 'tools-system', 'tools-freebies', 'tools-twitch-stacked'];

  function scrollToAnchor(index) {
    const target = document.getElementById(anchorTargets[index]);
    if (!content || !target || !categoryHost) return;
    const contentRect = content.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const top = content.scrollTop + targetRect.top - contentRect.top - 16;
    content.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }

  if (categoryHost && typeof window.createTabs === 'function') {
    const categoryTabs = window.createTabs({
      type: 'primary',
      tabs: [
        { name: '发现' },
        { name: '排行榜' },
        { name: '电脑性能优化' },
        { name: '电脑系统工具' },
        { name: '喜加一' },
        { name: 'Twitch 掉宝' }
      ],
      defaultActive: 0,
      onChange: function(change) { scrollToAnchor(change.index); }
    });
    categoryHost.appendChild(categoryTabs);

    const categoryActions = document.createElement('div');
    categoryActions.className = 'accelerator-tools-category-actions';
    categoryActions.setAttribute('aria-label', '电脑工具快捷入口');
    [
      { text: '我的收藏', icon: 'nicon-a-Heart-Linexin-xianxing' },
      { text: '开发者中心', icon: 'nicon-a-UserProfile-Lineyonghuziliao-xianxing' }
    ].forEach(function(action) {
      if (typeof window.createButton !== 'function') return;
      categoryActions.appendChild(window.createButton({
        text: action.text,
        variant: 'system',
        level: 'secondary',
        size: 'default',
        icon: '<i class="nnicon ' + action.icon + '" aria-hidden="true"></i>',
        iconPosition: 'left',
        className: 'accelerator-tools-category-action',
        onClick: action.text === '我的收藏'
          ? function() { window.location.href = 'ToolFavorites.html'; }
          : function() { window.location.href = 'DeveloperCenter.html'; }
      }));
    });
    categoryHost.appendChild(categoryActions);
  }

  const bannerHost = document.getElementById('accelerator-tools-banner');
  if (bannerHost && typeof window.createAcceleratorImageCarousel === 'function') {
    bannerHost.appendChild(window.createAcceleratorImageCarousel({
      variant: 'banner',
      ariaLabel: '电脑工具广告轮播',
      items: [
        { title: 'UGC地图下载使用流程', subtitle: '探索数字艺术的无限可能', imageSrc: '../image/Steam%20achievements/banner2.png' },
        { title: '先检查环境 再安心开局', subtitle: 'DirectX / 运行库 / 系统 DLL', imageSrc: '../image/Steam%20achievements/tool%20banner1.png' },
        { title: '影之刃零', subtitle: '0元得《影之刃零》', imageSrc: '../image/Steam%20achievements/banner3.png' }
      ]
    }));
  }

  function createToolCard(tool, className) {
    const card = document.createElement('article');
    card.className = ['accelerator-tools-card', className || ''].filter(Boolean).join(' ');
    card.setAttribute('role', 'link');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', '查看' + tool.name + '详情');

    const icon = document.createElement('img');
    icon.className = 'accelerator-tools-card__icon';
    icon.src = tool.iconSrc;
    icon.alt = '';

    const isRankingCard = className === 'accelerator-tools-card--ranking';
    const copy = document.createElement('span');
    copy.className = 'accelerator-tools-card__copy';
    const title = document.createElement('strong');
    title.textContent = tool.name;
    const category = document.createElement('small');
    category.textContent = tool.category;
    const rating = document.createElement('span');
    rating.className = 'accelerator-tools-card__rating';
    if (isRankingCard) {
      rating.innerHTML = '<span class="accelerator-tools-card__rating-value"><span class="accelerator-tools-card__rating-number-box"><span class="accelerator-tools-card__rating-number">' + tool.rating + '</span></span><span class="accelerator-tools-card__rating-percent-box"><span class="accelerator-tools-card__rating-percent">%</span></span></span><span class="accelerator-tools-card__rating-label">好评率</span>';
    } else {
      rating.innerHTML = '<small>好评率</small><strong>' + tool.rating + '%</strong>';
    }
    copy.append(title, category);
    if (!isRankingCard) copy.appendChild(rating);

    const trailing = document.createElement('span');
    trailing.className = 'accelerator-tools-card__trailing';
    if (isRankingCard) trailing.appendChild(rating);
    if (!isRankingCard && tool.action === 'toggle' && typeof window.createSwitch === 'function') {
      const toggle = window.createSwitch({
        checked: false,
        size: 'default',
        state: 'default',
        className: 'accelerator-tools-card__switch',
        onChange: function(checked) { card.dataset.enabled = checked ? 'true' : 'false'; }
      });
      toggle.setAttribute('aria-label', tool.name);
      trailing.appendChild(toggle);
    } else {
      const arrow = document.createElement('i');
      arrow.className = 'nnicon nicon-a-Arrowright-linejiantouyou-xianxing accelerator-tools-card__arrow';
      arrow.setAttribute('aria-hidden', 'true');
      trailing.appendChild(arrow);
    }

    const openDetail = function(event) {
      if (event && event.target instanceof Element && event.target.closest('.nn-switch')) return;
      window.location.href = 'ToolDetail.html?tool=' + encodeURIComponent(tool.name);
    };
    card.addEventListener('click', openDetail);
    card.addEventListener('keydown', function(event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openDetail(event);
    });

    card.append(icon, copy, trailing);
    return card;
  }

  const hotTrack = document.getElementById('tools-hot-track');
  toolCatalog.slice(0, 8).forEach(function(tool) {
    hotTrack?.appendChild(createToolCard(tool, 'accelerator-tools-card--hot'));
  });

  const hotViewport = document.getElementById('tools-hot-viewport');
  const hotActions = document.getElementById('tools-hot-actions');
  if (hotViewport && hotActions && typeof window.createButton === 'function') {
    let arrowLeft;
    let arrowRight;
    const syncHotCarouselArrows = function() {
      const maxScrollLeft = Math.max(0, hotViewport.scrollWidth - hotViewport.clientWidth);
      const scrollLeft = Math.max(0, hotViewport.scrollLeft);
      if (arrowLeft) arrowLeft.disabled = scrollLeft <= 1;
      if (arrowRight) arrowRight.disabled = scrollLeft >= maxScrollLeft - 1;
    };
    arrowLeft = window.createButton({
      text: '', variant: 'system', level: 'tertiary', size: 'small', appearance: 'outline-icon',
      icon: '<i class="nnicon nicon-a-Arrowleft-linejiantouzuo-xianxing" aria-hidden="true"></i>',
      iconPosition: 'only', className: 'accelerator-tools-carousel-arrow',
      onClick: function() { hotViewport.scrollBy({ left: -hotViewport.clientWidth, behavior: 'smooth' }); }
    });
    arrowLeft.setAttribute('aria-label', '上一页热门工具');

    arrowRight = window.createButton({
      text: '', variant: 'system', level: 'tertiary', size: 'small', appearance: 'outline-icon',
      icon: '<i class="nnicon nicon-a-Arrowright-linejiantouyou-xianxing" aria-hidden="true"></i>',
      iconPosition: 'only', className: 'accelerator-tools-carousel-arrow',
      onClick: function() { hotViewport.scrollBy({ left: hotViewport.clientWidth, behavior: 'smooth' }); }
    });
    arrowRight.setAttribute('aria-label', '下一页热门工具');
    hotActions.append(arrowLeft, arrowRight);
    hotViewport.addEventListener('scroll', syncHotCarouselArrows, { passive: true });
    window.addEventListener('resize', syncHotCarouselArrows);
    syncHotCarouselArrows();
  }

  function createDeveloperTool(tool) {
    const item = document.createElement('span');
    item.className = 'accelerator-tools-developer-tool';
    item.setAttribute('role', 'link');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', '查看' + tool.name + '详情');
    const image = document.createElement('img');
    image.src = tool.iconSrc;
    image.alt = '';
    const name = document.createElement('small');
    name.textContent = tool.name;
    const openDetail = function() {
      window.location.href = 'ToolDetail.html?tool=' + encodeURIComponent(tool.name);
    };
    item.addEventListener('click', openDetail);
    item.addEventListener('keydown', function(event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openDetail();
    });
    item.append(image, name);
    return item;
  }

  const developerList = document.getElementById('developer-ranking-list');
  developers.forEach(function(developer, index) {
    const row = document.createElement('div');
    row.className = 'accelerator-tools-developer-row';
    row.setAttribute('role', 'link');
    row.setAttribute('tabindex', '0');
    row.setAttribute('aria-label', '查看' + developer.name + '的主页');
    const openDeveloper = function() {
      window.location.href = 'DeveloperProfile.html?id=' + encodeURIComponent(developer.id);
    };
    row.addEventListener('click', openDeveloper);
    row.addEventListener('keydown', function(event) {
      if (event.target !== row || (event.key !== 'Enter' && event.key !== ' ')) return;
      event.preventDefault();
      openDeveloper();
    });

    const rank = document.createElement('span');
    rank.className = 'accelerator-tools-rank-number';
    rank.textContent = String(index + 1);

    const identity = document.createElement('div');
    identity.className = 'accelerator-tools-developer-identity';
    if (typeof window.createAvatar === 'function') {
      const avatarButton = document.createElement('button');
      avatarButton.type = 'button';
      avatarButton.className = 'accelerator-tools-developer-avatar';
      avatarButton.setAttribute('aria-label', '查看' + developer.name + '的主页');
      avatarButton.appendChild(window.createAvatar({ src: developer.avatar, text: developer.name, size: 40 }));
      avatarButton.addEventListener('click', function(event) {
        event.stopPropagation();
        openDeveloper();
      });
      identity.appendChild(avatarButton);
    }
    const meta = document.createElement('span');
    const details = document.createElement('span');
    details.className = 'accelerator-tools-developer-meta-details';
    const toolCount = document.createElement('small');
    toolCount.className = 'accelerator-tools-developer-tool-count';
    toolCount.append('工具数 ');
    const toolCountValue = document.createElement('span');
    toolCountValue.textContent = String(developerToolIndexes[index % developerToolIndexes.length].length);
    toolCount.appendChild(toolCountValue);
    const score = document.createElement('small');
    score.className = 'accelerator-tools-developer-score';
    const scoreValueBox = document.createElement('span');
    scoreValueBox.className = 'accelerator-tools-developer-score__value-box';
    const scoreValue = document.createElement('span');
    scoreValue.className = 'accelerator-tools-developer-score__value';
    scoreValue.textContent = developer.score;
    scoreValueBox.appendChild(scoreValue);
    const scoreLabel = document.createElement('span');
    scoreLabel.className = 'accelerator-tools-developer-score__label';
    scoreLabel.textContent = '评分';
    score.append(scoreValueBox, scoreLabel);
    const scoreArrow = document.createElement('i');
    scoreArrow.className = 'nnicon nicon-a-Arrowright-linejiantouyou-xianxing accelerator-tools-developer-score__arrow';
    scoreArrow.setAttribute('aria-hidden', 'true');
    details.appendChild(toolCount);
    const name = document.createElement('strong');
    name.textContent = developer.name;
    meta.append(name, details);
    identity.appendChild(meta);

    row.append(rank, identity, score, scoreArrow);
    developerList?.appendChild(row);

  });

  const toolRankingList = document.getElementById('tool-ranking-list');
  toolCatalog.slice(0, 10).forEach(function(tool, index) {
    const row = document.createElement('div');
    row.className = 'accelerator-tools-tool-ranking-row';
    const rank = document.createElement('span');
    rank.className = 'accelerator-tools-rank-number';
    rank.textContent = String(index + 1);
    row.append(rank, createToolCard(tool, 'accelerator-tools-card--ranking'));
    toolRankingList?.appendChild(row);
  });

  function renderToolGrid(hostId, items) {
    const host = document.getElementById(hostId);
    items.forEach(function(tool) { host?.appendChild(createToolCard(tool, 'accelerator-tools-card--grid')); });
  }
  renderToolGrid('tools-performance-grid', toolCatalog.filter(function(tool) { return tool.category === '电脑性能优化'; }));
  renderToolGrid('tools-system-grid', toolCatalog.filter(function(tool) { return tool.category === '电脑系统工具'; }));

  function createMoreButton(hostId, category, href) {
    const host = document.getElementById(hostId);
    if (!host || typeof window.createButton !== 'function') return;
    const button = window.createButton({
      text: '更多', variant: 'system', level: 'tertiary', size: 'default',
      icon: '<i class="nnicon nicon-a-Arrowright-linejiantouyou-xianxing" aria-hidden="true"></i>',
      iconPosition: 'right', iconSize: 'var(--icon-size-x9)', className: 'accelerator-tools-more-button',
      onClick: href ? function() {
        window.location.href = href;
      } : category ? function() {
        window.location.href = 'ToolCategory.html?category=' + encodeURIComponent(category);
      } : null
    });
    button.setAttribute('aria-label', href ? '查看全部掉宝活动' : category ? '查看更多' + category : '更多');
    host.appendChild(button);
  }
  createMoreButton('tools-performance-more', '电脑性能优化');
  createMoreButton('tools-system-more', '电脑系统工具');
  createMoreButton('tools-freebies-more', null, 'Freebies.html');
  createMoreButton('tools-twitch-more', null, 'TwitchDrops.html');
  createMoreButton('tools-twitch-stacked-more', null, 'TwitchDrops.html');

  function createFreebieCard(item) {
    const card = document.createElement('article');
    card.className = 'accelerator-tools-event-card accelerator-tools-event-card--stacked';
    const imageFrame = document.createElement('div');
    imageFrame.className = 'accelerator-tools-event-card__image-frame';
    const image = document.createElement('img');
    image.className = 'accelerator-tools-event-card__image';
    image.src = item.image;
    image.alt = '';
    const platform = document.createElement('span');
    platform.className = 'accelerator-tools-event-card__platform';
    platform.setAttribute('aria-label', 'Epic');
    platform.innerHTML = '<i class="nnicon nicon-a-Epic-lineEpic-xianxing" aria-hidden="true"></i>';
    imageFrame.append(image, platform);
    const body = document.createElement('div');
    body.className = 'accelerator-tools-event-card__body';
    const title = document.createElement('strong');
    title.textContent = item.name;
    const metaRow = document.createElement('span');
    metaRow.className = 'accelerator-tools-event-card__meta-row';
    const statusTag = document.createElement('span');
    statusTag.className = 'accelerator-tools-tag accelerator-tools-tag--free';
    statusTag.textContent = '当前限免';
    const time = document.createElement('small');
    time.textContent = item.endTime;
    metaRow.append(statusTag, time);
    const actions = document.createElement('div');
    actions.className = 'accelerator-tools-event-card__hover-actions';
    if (typeof window.createButton === 'function') {
      actions.appendChild(window.createButton({
        text: '立即领取',
        variant: 'system',
        level: 'primary',
        size: 'large',
        className: 'accelerator-tools-event-card__claim-button',
        onClick: function() {
          if (typeof window.showMessage === 'function') {
            window.showMessage({ text: '活动接口暂未接入。' });
          }
        }
      }));
    }
    body.append(title, metaRow, actions);
    card.append(imageFrame, body);
    return card;
  }

  function createTwitchCard(item) {
    const card = document.createElement('article');
    card.className = 'accelerator-tools-event-card';
    const image = document.createElement('img');
    image.className = 'accelerator-tools-event-card__image accelerator-tools-event-card__image--vertical';
    image.src = item.image;
    image.alt = '';
    const body = document.createElement('div');
    body.className = 'accelerator-tools-event-card__body';
    const titleRow = document.createElement('span');
    titleRow.className = 'accelerator-tools-event-card__title-row';
    titleRow.innerHTML = '<strong></strong>';
    titleRow.querySelector('strong').textContent = item.name;
    const description = document.createElement('small');
    description.textContent = item.event;
    body.append(titleRow, description);
    card.append(image, body);
    return card;
  }

  function createStackedTwitchCard(item) {
    const card = document.createElement('article');
    card.className = 'accelerator-tools-event-card accelerator-tools-event-card--stacked-twitch';
    const posterFrame = document.createElement('div');
    posterFrame.className = 'accelerator-tools-event-card__poster-frame';
    const image = document.createElement('img');
    image.className = 'accelerator-tools-event-card__poster';
    image.src = item.image;
    image.alt = '';
    posterFrame.appendChild(image);
    const body = document.createElement('div');
    body.className = 'accelerator-tools-event-card__stacked-body';
    const title = document.createElement('strong');
    title.textContent = item.name;
    const description = document.createElement('small');
    description.className = 'accelerator-tools-event-card__stacked-description';
    description.textContent = item.event;
    body.append(title, description);
    card.append(posterFrame, body);
    return card;
  }

  const freebieGrid = document.getElementById('tools-freebies-grid');
  freebieItems.forEach(function(item) { freebieGrid?.appendChild(createFreebieCard(item)); });
  const twitchGrid = document.getElementById('tools-twitch-grid');
  twitchItems.forEach(function(item) { twitchGrid?.appendChild(createTwitchCard(item)); });
  const twitchStackedGrid = document.getElementById('tools-twitch-stacked-grid');
  twitchStackedItems.slice(0, 5).forEach(function(item) { twitchStackedGrid?.appendChild(createStackedTwitchCard(item)); });

  if (typeof window.createScrollbar === 'function') {
    if (content) {
      window.createScrollbar({
        target: content, container: content.parentElement, hoverTarget: content,
        variant: 'page', right: 4, top: 54, bottom: 0, minThumbSize: 60
      });
    }
  }
})();
