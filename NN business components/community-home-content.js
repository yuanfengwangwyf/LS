const CommunityHomeContentStyles = `
  .home-main {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 280px;
    gap: var(--space24);
    align-items: stretch;
    width: 100%;
    padding-top: var(--space16);
    padding-bottom: var(--space0);
  }

  .home-feed {
    width: 100%;
    min-width: 0;
    overflow: visible;
  }

  .home-feed__toolbar {
    position: sticky;
    top: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    gap: var(--space28);
    width: 100%;
    height: 38px;
    overflow: hidden;
    background: var(--gray-1);
  }

  .home-feed__tabs {
    min-width: 0;
    flex: 0 1 auto;
    height: 38px;
    overflow: visible;
  }

  .home-feed__tabs .nn-tabs-primary {
    width: max-content;
    max-width: 100%;
    column-gap: var(--space28);
  }

  .home-feed__tabs .nn-tabs-primary .nn-tab {
    height: 38px;
    padding-top: var(--space10);
    padding-bottom: var(--space10);
  }

  .home-feed__actions {
    display: inline-flex;
    align-items: center;
    gap: var(--space12);
    flex: 1 0 auto;
    height: 24px;
  }

  .home-feed__clear {
    width: 18px;
    height: 18px;
    min-width: 18px;
    min-height: 18px;
    margin-left: auto;
    padding: var(--space0);
    background: transparent;
    color: var(--gray-5);
    box-shadow: none;
  }

  .home-feed__clear:hover {
    background: transparent;
    color: var(--gray-5);
    box-shadow: none;
  }

  .home-feed__list,
  .home-feed__list > [class^="nn-pugc-"] {
    width: 100%;
  }

  .home-aside {
    display: flex;
    flex-direction: column;
    gap: var(--space16);
    width: 280px;
    min-width: 0;
  }

  .home-aside__leaderboard {
    position: sticky;
    top: 0;
    z-index: 18;
  }

  .home-aside .nn-record-power-profile,
  .home-aside .nn-leaderboard {
    width: 100%;
  }

  .nn-community-home-content.is-wide-content {
    grid-template-columns: minmax(0, 1fr) 320px;
  }

  .nn-community-home-content.is-wide-content .home-aside {
    width: 320px;
  }
`;

function injectCommunityHomeContentStyles() {
  if (document.getElementById('nn-community-home-content-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-community-home-content-styles';
  style.textContent = CommunityHomeContentStyles;
  document.head.appendChild(style);
}

function createCommunityHomeContent(options = {}) {
  injectCommunityHomeContentStyles();

  const {
    showTabs = true,
    showActions = true,
    initialSection = 0,
    itemCount = 20,
    onSectionChange = null
  } = options;

  const root = document.createElement('div');
  root.className = 'home-main nn-community-home-content';

  const feed = document.createElement('section');
  feed.className = 'home-feed';
  feed.setAttribute('aria-label', '社区首页内容列表');

  const toolbar = document.createElement('div');
  toolbar.className = 'home-feed__toolbar';
  const tabsSlot = document.createElement('div');
  tabsSlot.className = 'home-feed__tabs';
  const actionsSlot = document.createElement('div');
  actionsSlot.className = 'home-feed__actions';
  const listSlot = document.createElement('div');
  listSlot.className = 'home-feed__list';

  if (showTabs) toolbar.appendChild(tabsSlot);
  if (showActions) toolbar.appendChild(actionsSlot);
  if (showTabs || showActions) feed.appendChild(toolbar);
  feed.appendChild(listSlot);

  const aside = document.createElement('aside');
  aside.className = 'home-aside';
  aside.setAttribute('aria-label', '战力信息');
  const recordSlot = document.createElement('div');
  recordSlot.className = 'home-aside__record';
  const leaderboardSlot = document.createElement('div');
  leaderboardSlot.className = 'home-aside__leaderboard';
  aside.append(recordSlot, leaderboardSlot);
  root.append(feed, aside);

  if (showActions) {
    actionsSlot.appendChild(createButton({
      variant: 'primary',
      level: 'primary',
      size: 'small',
      text: '发布',
      icon: '<i class="nnicon nicon-a-Publishcontent-linefabuneirong-xianxing"></i>',
      iconPosition: 'left',
      iconSize: 'var(--icon-size-x7)'
    }));
    actionsSlot.appendChild(createButton({
      variant: 'system',
      level: 'secondary',
      size: 'small',
      text: '内容管理'
    }));
    actionsSlot.appendChild(createButton({
      variant: 'system',
      level: 'tertiary',
      size: 'small',
      icon: '<i class="nnicon nicon-a-Clearqingli"></i>',
      iconPosition: 'only',
      iconSize: 'var(--icon-size-x9)',
      className: 'home-feed__clear'
    }));
  }

  const titles = [
    '社区玩家分享了今日精彩击杀集锦',
    '新地图训练房开放，欢迎加入语音开黑',
    '官方社区招募内容创作者，发布攻略赢奖励',
    '本周热门房间榜单更新，快来看看你的排名',
    '玩家自制战术路线图已同步到社区资料库',
    '今晚 8 点社区娱乐赛开启报名',
    '版本更新后武器平衡讨论合集',
    '社区大厅新增沉浸语音模式体验反馈收集',
    '高手复盘：决赛圈站位与投掷物选择',
    '新成员入驻社区，完成认证即可领取权益',
    '今日活跃队伍推荐，缺一名狙击位',
    'PUBG 29.2 版本更新公告与维护说明',
    '社区规范更新：语音房间管理规则调整',
    '战绩数据服务升级通知',
    '官方认证权益开放申请',
    'SGS 电竞《夏鸡大作战》',
    '周末双倍积分活动开启',
    'PUBG 训练营报名倒计时',
    '社区新人任务挑战',
    '全球锦标赛报名开启',
    'NN 娱乐赛进入报名阶段',
    '洲际赛 PCS 待开赛',
    'PCS6 亚洲赛区赛程公布，中国战队蓄势待发',
    '决赛圈烟雾弹铺设路线与时间点',
    '新版本枪械选择与配件推荐',
    '四排信息位沟通模板',
    '热门地图上分点位整理',
    '固定队招募：晚 9 点开黑，缺指挥位',
    '娱乐车队今晚冲分，欢迎麦克风清晰玩家',
    '新手训练队招募，主打轻松交流'
  ];
  const times = ['刚刚', '5分钟前', '12分钟前', '20分钟前', '32分钟前', '45分钟前', '1小时前', '2小时前'];
  const colors = ['#C03E85', '#6A47D8', '#396DDE', '#D58009', '#38B081', '#F2494F'];
  const typeColors = {
    activity: '#C03E85',
    competition: '#6A47D8',
    strategy: '#396DDE',
    team: '#D58009'
  };
  const competitionNames = ['全球赛', '冠军杯', '洲际赛', '社区赛', '娱乐赛', '训练赛', '晋级赛', '挑战赛'];

  function pickPinnedIndexes(total, count) {
    const indexes = Array.from({ length: total }, function(_, index) { return index; });
    for (let index = indexes.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [indexes[index], indexes[swapIndex]] = [indexes[swapIndex], indexes[index]];
    }
    return new Set(indexes.slice(0, count));
  }

  const latestPinned = pickPinnedIndexes(itemCount, Math.min(3, itemCount));
  const titleAt = function(index) { return titles[index % titles.length]; };
  const commentAt = function(index) { return index % 5 === 0 ? '99+' : String(12 + ((index * 7) % 88)); };
  const competitionTitleAt = function(index) {
    return `${competitionNames[index % competitionNames.length].slice(0, 5)}（5.2-5.12）`;
  };

  function createActivityItems(count, itemOptions = {}) {
    const statuses = [
      { status: '6月22日截止' },
      { status: '2天后截止' },
      { status: '5时30分20秒结束', state: 'urgent', countdownSeconds: 5 * 3600 + 30 * 60 + 20 },
      { status: '已结束', state: 'ended', icon: 'nicon-a-Posts-linetiezi-xianxing' }
    ];
    return Array.from({ length: count }, function(_, index) {
      return Object.assign({
        title: titleAt(index),
        count: commentAt(index),
        labelColor: itemOptions.colorful ? colors[index % colors.length] : '',
        pinned: Boolean(itemOptions.pinnedSet && itemOptions.pinnedSet.has(index)),
        showMore: false
      }, statuses[index % statuses.length]);
    });
  }

  function createCompetitionItems(count, itemOptions = {}) {
    const statuses = [
      { status: '进行中', statusTone: 'active' },
      { status: '报名中', statusTone: 'registering' },
      { status: '待开赛', statusTone: 'upcoming' },
      { status: '已结束', statusTone: 'ended' }
    ];
    return Array.from({ length: count }, function(_, index) {
      return Object.assign({
        title: competitionTitleAt(index),
        count: commentAt(index),
        labelColor: itemOptions.colorful ? colors[(index + 1) % colors.length] : '',
        pinned: Boolean(itemOptions.pinnedSet && itemOptions.pinnedSet.has(index)),
        showMore: false
      }, statuses[index % statuses.length]);
    });
  }

  function createTextItems(count, itemOptions = {}) {
    return Array.from({ length: count }, function(_, index) {
      return {
        title: titleAt(index + (itemOptions.offset || 0)),
        time: times[index % times.length],
        commentCount: commentAt(index),
        labelColor: itemOptions.colorful ? colors[(index + (itemOptions.offset || 0)) % colors.length] : '',
        pinned: Boolean(itemOptions.pinnedSet && itemOptions.pinnedSet.has(index)),
        showMore: false
      };
    });
  }

  function createLatestList() {
    const list = document.createElement('div');
    list.className = 'nn-pugc-dynamic-list';
    const latestTypes = ['team', 'activity', 'competition', 'announcement', 'strategy'];
    const latestItems = Array.from({ length: itemCount }, function(_, index) {
      const type = latestTypes[index % latestTypes.length];
      return {
        index: index,
        type: type,
        labelColor: typeColors[type] || '',
        title: type === 'competition' ? competitionTitleAt(index) : titleAt(index),
        pinned: latestPinned.has(index),
        showMore: false
      };
    }).sort(function(a, b) {
      if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
      return a.index - b.index;
    });

    latestItems.forEach(function(item) {
      if (item.type === 'activity') {
        list.appendChild(createPugcActivityItem(Object.assign({}, createActivityItems(1, { colorful: true })[0], item)));
      } else if (item.type === 'competition') {
        list.appendChild(createPugcCompetitionItem(Object.assign({}, createCompetitionItems(1, { colorful: true })[0], item)));
      } else {
        const itemOptions = Object.assign({}, item, {
          time: times[item.index % times.length],
          commentCount: commentAt(item.index)
        });
        if (item.type === 'announcement') list.appendChild(createPugcAnnouncementItem(itemOptions));
        if (item.type === 'strategy') list.appendChild(createPugcStrategyItem(itemOptions));
        if (item.type === 'team') list.appendChild(createPugcTeamItem(itemOptions));
      }
    });
    return list;
  }

  const renderers = [
    function() { return createLatestList(); },
    function() { return createPugcTeamList({ items: createTextItems(itemCount, { offset: 12 }) }); },
    function() { return createPugcActivityList({ items: createActivityItems(itemCount) }); },
    function() { return createPugcCompetitionList({ items: createCompetitionItems(itemCount) }); },
    function() { return createPugcAnnouncementList({ items: createTextItems(itemCount, { offset: 4 }) }); },
    function() { return createPugcStrategyList({ items: createTextItems(itemCount, { offset: 8 }) }); }
  ];

  function renderSection(index) {
    const nextIndex = Math.max(0, Math.min(renderers.length - 1, Number(index) || 0));
    root.dataset.sectionIndex = String(nextIndex);
    listSlot.replaceChildren(renderers[nextIndex]());
    if (typeof onSectionChange === 'function') onSectionChange(nextIndex, root);
  }

  if (showTabs) {
    tabsSlot.appendChild(createTabs({
      type: 'primary',
      tabs: [
        { name: '最新', badge: { dot: true, variant: 'red', size: 8 } },
        { name: '战队' },
        { name: '活动' },
        { name: '赛事', badge: { text: '6', variant: 'red', size: 'small' } },
        { name: '公告' },
        { name: '攻略' }
      ],
      defaultActive: initialSection,
      onChange: function(event) { renderSection(event.index); }
    }));
  }

  recordSlot.appendChild(createRecordPowerProfile({
    playerName: 'Mahail',
    rankText: '生存者',
    rankLevel: 10,
    rankSize: 'large',
    rankImageSrc: '../image/pubg rank/生存者.png'
  }));

  const leaderboardNames = [
    '亚洲暴龙兽', '拖鞋也能赢', '今晚不落地', '决赛圈老六',
    '雨林收割机', '一枪一个梦', '港口狙神', '海岛快递员',
    '苟到天亮', '圈边观察员', '北坡独狼', '楼顶伏地魔'
  ];
  const leaderboardCities = ['武汉', '上海', '广州', '成都', '杭州', '南京', '深圳', '重庆', '长沙', '西安', '苏州', '郑州'];
  const leaderboardRows = Array.from({ length: 100 }, function(_, index) {
    return {
      rank: index + 1,
      name: `${leaderboardNames[index % leaderboardNames.length]}${index >= leaderboardNames.length ? index + 1 : ''}`,
      city: leaderboardCities[index % leaderboardCities.length],
      wins: `吃鸡${Math.max(1, 23 - Math.floor(index / 4))}次`,
      rankLv: Math.max(1, 10 - Math.floor(index / 10))
    };
  });
  leaderboardSlot.appendChild(createLeaderboardRegional({
    rows: leaderboardRows,
    maxRows: 100,
    height: 364
  }));

  root.setCommunityHomeSection = renderSection;
  renderSection(initialSection);

  function syncWidth() {
    root.classList.toggle('is-wide-content', root.getBoundingClientRect().width >= 1200);
  }
  if (typeof ResizeObserver === 'function') {
    const observer = new ResizeObserver(syncWidth);
    observer.observe(root);
  }
  requestAnimationFrame(syncWidth);

  return root;
}

if (typeof window !== 'undefined') {
  window.injectCommunityHomeContentStyles = injectCommunityHomeContentStyles;
  window.createCommunityHomeContent = createCommunityHomeContent;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectCommunityHomeContentStyles,
    createCommunityHomeContent
  };
}
