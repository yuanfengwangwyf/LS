(function() {
  if (typeof window.setActiveNav === 'function') window.setActiveNav('accelerator-p-nav-tools');
  window.addEventListener('DOMContentLoaded', function() {
    if (typeof window.initPagePreviewMode === 'function') window.initPagePreviewMode();
  });

  const freebieItems = [
    {
      name: '恶魔城：暗影之王',
      platform: 'Epic',
      image: '../image/Game%20Store/game-castlevania.png',
      description: '经典哥特动作冒险重制版限时免费领取，包含完整剧情与全部追加内容，领取后永久入库。',
      claimTime: '11月26日 23:59',
      status: 'current'
    },
    {
      name: '幻兽帕鲁与大潮',
      platform: 'Epic',
      image: '../image/Game%20Store/game-tides.png',
      description: '融合生存建造与幻兽收集玩法，本次限免包含基础游戏及“大潮”扩展内容，并支持四人联机与跨平台存档，活动期间领取即可永久保留。',
      claimTime: '11月28日 23:59',
      status: 'current'
    },
    {
      name: '影之刃零先行礼包',
      platform: 'Epic',
      image: '../image/Game%20Store/game-phantom-blade.png',
      description: '领取后可获得限定外观、专属头像框与游戏内货币礼包，奖励将在活动结束后统一发放至绑定账号。',
      claimTime: '12月03日 23:59',
      status: 'current'
    },
    {
      name: '怪物猎人：荒野-凌越',
      platform: 'Steam',
      image: '../image/Game%20Store/game-monster-hunter.png',
      description: '活动开启后可免费领取“凌越”主题装饰套装，包含随从装备、限定动作与专属称号，数量有限，先到先得。',
      claimTime: '12月10日 23:59',
      status: 'upcoming'
    },
    {
      name: '生化危机：维罗妮卡重制版',
      platform: 'Steam',
      image: '../image/Game%20Store/game-resident-evil.png',
      description: '经典生存恐怖作品重制版即将开放限时领取，支持中文与高清画质，并收录原版服装与额外章节，领取后永久保留在游戏库中。',
      claimTime: '12月18日 23:59',
      status: 'upcoming'
    },
    {
      name: '最终幻想',
      platform: 'Epic',
      image: '../image/Game%20Store/game-final-fantasy.png',
      description: '系列经典作品限时免费，包含主线剧情与追加内容，活动期间登录即可领取，逾期将恢复原价。',
      claimTime: '12月24日 23:59',
      status: 'upcoming'
    }
  ];

  const platformIcons = {
    Epic: 'nicon-a-Epic-lineEpic-xianxing',
    Steam: 'nicon-a-STEAM-fillSTEAM-mianxing',
    WG: 'nicon-a-WG-lineWG-xianxing'
  };

  const byId = function(id) { return document.getElementById(id); };
  const header = byId('accelerator-freebies-header');
  if (header && typeof window.createAcceleratorHeader === 'function') {
    const acceleratorHeader = window.createAcceleratorHeader({
      width: '100%',
      canGoBack: true,
      enableSearchSuggestions: true
    });
    header.appendChild(acceleratorHeader);
    const headerInput = acceleratorHeader.search && acceleratorHeader.search.querySelector('input');
    if (headerInput) {
      headerInput.readOnly = true;
      headerInput.setAttribute('aria-haspopup', 'dialog');
    }
    acceleratorHeader.search?.addEventListener('click', function(event) {
      event.preventDefault();
      const frame = header.closest('.accelerator-tools-frame');
      if (frame && !frame.querySelector('.accelerator-game-search') && window.createAcceleratorGameSearch) {
        window.createAcceleratorGameSearch({ mountTarget: frame });
      }
    });
  }

  const sidebar = byId('accelerator-freebies-sidebar');
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

  const currentGrid = byId('accelerator-freebies-current-grid');
  const currentSection = byId('accelerator-freebies-current-section');
  const upcomingGrid = byId('accelerator-freebies-upcoming-grid');
  const upcomingSection = byId('accelerator-freebies-upcoming-section');
  const pageEmpty = byId('accelerator-freebies-page-empty');
  let selectedPlatform = '全平台';

  function notifyUnavailable() {
    if (typeof window.showMessage === 'function') {
      window.showMessage({ text: '活动接口暂未接入。' });
    }
  }

  function createFreebieCard(item) {
    const card = document.createElement('article');
    card.className = 'accelerator-freebies-card';

    const media = document.createElement('div');
    media.className = 'accelerator-freebies-card__media';
    const image = document.createElement('img');
    image.className = 'accelerator-freebies-card__image';
    image.src = item.image;
    image.alt = item.name;
    const platform = document.createElement('span');
    platform.className = 'accelerator-freebies-card__platform';
    platform.setAttribute('aria-label', item.platform);
    const platformIconClass = item.platformIcon || platformIcons[item.platform];
    if (platformIconClass) {
      const platformIcon = document.createElement('i');
      platformIcon.className = 'nnicon ' + platformIconClass;
      platformIcon.setAttribute('aria-hidden', 'true');
      platform.appendChild(platformIcon);
    } else if (item.platformIconImage) {
      const platformImage = document.createElement('img');
      platformImage.src = item.platformIconImage;
      platformImage.alt = '';
      platform.appendChild(platformImage);
    } else {
      platform.textContent = item.platform.toUpperCase();
    }
    media.append(image, platform);

    const copy = document.createElement('div');
    copy.className = 'accelerator-freebies-card__copy';
    const titleRow = document.createElement('div');
    titleRow.className = 'accelerator-freebies-card__title-row';
    const title = document.createElement('h3');
    title.textContent = item.name;
    titleRow.appendChild(title);
    if (typeof window.createLabel === 'function') {
      titleRow.appendChild(window.createLabel({
        text: item.status === 'current' ? '活动进行中' : '限时活动',
        color: item.status === 'current' ? 'green' : 'red',
        type: 'soft',
        size: 'd'
      }));
    }
    const description = document.createElement('p');
    description.className = 'accelerator-freebies-card__description';
    description.textContent = item.description;
    const claimTime = document.createElement('span');
    claimTime.className = 'accelerator-freebies-card__claim-time';
    if (typeof window.createLabel === 'function') {
      claimTime.appendChild(window.createLabel({
        text: '领取结束时间：' + item.claimTime,
        color: 'neutral',
        type: 'soft',
        size: 'l'
      }));
    } else {
      claimTime.textContent = '领取结束时间：' + item.claimTime;
    }
    copy.append(titleRow, description, claimTime);

    const actions = document.createElement('div');
    actions.className = 'accelerator-freebies-card__actions';
    if (typeof window.createButton === 'function') {
      actions.appendChild(window.createButton({
        text: item.status === 'current' ? '立即领取' : '前往查看',
        variant: 'system',
        level: 'primary',
        size: 'large',
        onClick: item.claimUrl
          ? function() { window.open(item.claimUrl, '_blank', 'noopener,noreferrer'); }
          : notifyUnavailable
      }));
    }

    card.append(media, copy, actions);
    return card;
  }

  function renderFreebies() {
    const filteredItems = freebieItems.filter(function(item) {
      return selectedPlatform === '全平台' || item.platform === selectedPlatform.replace('平台', '');
    });
    const currentItems = filteredItems.filter(function(item) { return item.status === 'current'; });
    const upcomingItems = filteredItems.filter(function(item) { return item.status === 'upcoming'; });
    if (currentGrid) currentGrid.replaceChildren.apply(currentGrid, currentItems.map(createFreebieCard));
    if (upcomingGrid) upcomingGrid.replaceChildren.apply(upcomingGrid, upcomingItems.map(createFreebieCard));
    const hasItems = currentItems.length > 0 || upcomingItems.length > 0;
    if (currentSection) currentSection.hidden = currentItems.length === 0;
    if (upcomingSection) upcomingSection.hidden = upcomingItems.length === 0;
    if (pageEmpty) {
      pageEmpty.hidden = hasItems;
      if (!hasItems && !pageEmpty.children.length && typeof window.createEmpty === 'function') {
        pageEmpty.appendChild(window.createEmpty({
          scene: 'page',
          type: 'placeholder',
          title: '暂无喜加一活动',
          description: '当前筛选条件下没有可领取或即将开放的限免活动',
          showActions: false
        }));
      }
    }
  }

  const tabsHost = byId('accelerator-freebies-tabs');
  if (tabsHost && typeof window.createTabs === 'function') {
    const tabs = window.createTabs({
      type: 'primary',
      tabs: [
        { name: '全平台' },
        { name: 'Epic平台' },
        { name: 'Steam平台' },
        { name: 'Ubisoft平台' }
      ],
      defaultActive: 0,
      onChange: function(change) {
        selectedPlatform = change.tab.name;
        renderFreebies();
      }
    });
    tabsHost.appendChild(tabs);
  }
  renderFreebies();

  const content = byId('accelerator-freebies-content');
  if (content && typeof window.createScrollbar === 'function') {
    window.createScrollbar({ target: content, container: content.parentElement, hoverTarget: content, variant: 'page', right: 4, top: 0, bottom: 0, minThumbSize: 60 });
  }
})();
