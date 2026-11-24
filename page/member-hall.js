const memberHallAssets = {
  "member-1.png": "../image/MemberHall/member-1.png",
  "avatar-frame.png": "../image/MemberHall/avatar-frame.png",
  "member-2.png": "../image/MemberHall/member-2.png",
  "member-3.png": "../image/MemberHall/member-3.png",
  "member-4.png": "../image/MemberHall/member-4.png",
  "member-5.png": "../image/MemberHall/member-5.png",
  "member-6.png": "../image/MemberHall/member-6.png",
  "member-7.png": "../image/MemberHall/member-7.png",
  "member-8.png": "../image/MemberHall/member-8.png",
  "member-9.png": "../image/MemberHall/member-9.png",
  "member-10.png": "../image/MemberHall/member-10.png",
  "member-11.png": "../image/MemberHall/member-11.png",
  "member-12.png": "../image/MemberHall/member-12.png",
  "member-13.png": "../image/MemberHall/member-13.png",
  "member-14.png": "../image/MemberHall/member-14.png",
  "member-15.png": "../image/MemberHall/member-15.png",
  "member-16.png": "../image/MemberHall/member-16.png",
  "member-17.png": "../image/MemberHall/member-17.png",
  "member-18.png": "../image/MemberHall/member-18.png",
  "member-19.png": "../image/MemberHall/member-19.png",
  "member-20.png": "../image/MemberHall/member-20.png",
  "chat-1.png": "../image/MemberHall/chat-1.png",
  "chat-2.png": "../image/MemberHall/chat-2.png",
  "chat-3.png": "../image/MemberHall/chat-3.png",
  "chat-4.png": "../image/MemberHall/chat-4.png",
  "chat-5.png": "../image/MemberHall/chat-5.png",
  "chat-6.png": "../image/MemberHall/chat-6.png",
  "chat-7.png": "../image/MemberHall/chat-7.png",
  "chat-8.png": "../image/MemberHall/chat-8.png",
  "chat-9.png": "../image/MemberHall/chat-9.png",
  "chat-10.png": "../image/MemberHall/chat-10.png",
  "chat-11.png": "../image/MemberHall/chat-11.png",
  "chat-12.png": "../image/MemberHall/chat-12.png",
  "chat-13.png": "../image/MemberHall/chat-13.png",
  "self-avatar-oli.jpg": "../image/MemberHall/self-avatar-oli.jpg",
  "banner.png": "../image/MemberHall/banner.png",
  "event-background.png": "https://www.figma.com/api/mcp/asset/2e943b73-cd79-4460-8908-4c75565a4686.png",
  "event-banner.png": "https://www.figma.com/api/mcp/asset/07d09521-c1f1-4937-8e4b-5b6fee9d68b9.png"
};

function createMemberHall() {
  const element = function(tag, className, text) {
    const node = document.createElement(tag);
    node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const root = element('section', 'member-hall');
  root.setAttribute('data-nn-header-align', '');
  const selfProfile = {
    name: '奥莉',
    avatarSrc: memberHallAssets['self-avatar-oli.jpg']
  };
  const otherMemberNames = [
    '普莱士袋熊', '翡翠猫', '慢两拍', '月亮图标', '一行', 'Caroline',
    '星河漫游者', '白桃汽水', '雾岛听风', '长街晚灯', '橘子海', '小熊软糖',
    '北岸初晴', '清风入梦', '银河信使', '晚风来信', '云朵收藏家', '半糖乌龙',
    '夏日晚星', '青柠气泡', '海盐芝士', '落日航班', '森林电台', '山茶花开',
    '微光旅人', '薄荷岛屿', '暮色回声', '蓝莓星球', '风铃小筑', '初雪邮差',
    '晴空一鹤', '夜航星', '可可拿铁', '南巷清风', '拾光者', '银河漫步',
    '桃子乌龙', '日落之前', '小岛来信', '山野千里', '星光派对', '甜橙气泡',
    '凌晨四点', '海边来客', '云端漫游', '月桂旅店', '松间明月', '春日序曲',
    '风吹麦浪', '鲸落南北', '青山远黛', '雾里看花', '橙色黄昏', '雨后初晴',
    '柚子星球', '冬日暖阳', '漫游指南', '岛屿日记', '山川湖海', '夏夜晚风',
    '星野遥', '木棉花开', '白昼流星', '深海回音', '暮云千里', '晴天收藏家'
  ];
  const shuffledOtherNames = otherMemberNames.slice();
  for (let index = shuffledOtherNames.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffledOtherNames[index], shuffledOtherNames[swapIndex]] = [shuffledOtherNames[swapIndex], shuffledOtherNames[index]];
  }
  let otherNameIndex = 0;
  function nextOtherName() {
    const name = shuffledOtherNames[otherNameIndex % shuffledOtherNames.length];
    otherNameIndex += 1;
    return name;
  }
  root.setAttribute('aria-label', '成员大厅');
  const chat = element('div', 'member-hall__chat');
  chat.appendChild(createHeader({
    variant: 'room-header-community-hall',
    width: '100%',
    className: 'member-hall__room-header',
    hallTitle: '英雄联盟社区',
    hallIconClass: 'nicon-a-Lounge-Linexianliaodating-xianxing',
    actions: [{
      text: '邀请/分享',
      variant: 'system',
      level: 'primary',
      size: 'small',
      onClick: function() {
        showMessage({ text: '邀请链接已复制', state: 'normal' });
      }
    }]
  }));
  const historyWrap = element('div', 'member-hall__history-wrap');
  const history = element('div', 'member-hall__history');
  history.setAttribute('aria-label', '聊天记录');
  history.tabIndex = 0;
  const messages = element('div', 'member-hall__messages');
  history.appendChild(messages);
  historyWrap.appendChild(history);
  chat.appendChild(historyWrap);

  function addRoom(main, mine) {
    const room = createButton({ text: '', level: 'tertiary', size: 'small', className: 'member-hall__room' });
    room.setAttribute('aria-label', mine ? '班得尔双排房间' : '俄服FPP匹配房间');
    room.append(element('span', 'member-hall__room-index', mine ? '132' : '52'), element('span', '', mine ? '班得尔双排来任意，黄白金单双' : '俄服FPP匹配'));
    [1,2,3,4].forEach(function(index) { room.appendChild(createAvatar({ size: 16, src: memberHallAssets['chat-' + index + '.png'] })); });
    room.appendChild(element('span', '', mine ? '5+  已满' : '4 / 5'));
    room.addEventListener('click', function() { showMessage({ text: mine ? '该房间已满' : '已选择俄服FPP匹配房间', state: 'normal' }); });
    main.querySelector('.nn-chat-message__meta').after(room);
  }

  function addMessage(data) {
    const messageData = Object.assign({ showRead: false }, data);
    if (messageData.type !== 'mine' && !messageData.name) messageData.name = nextOtherName();
    const row = createChatMessage(messageData);
    const avatar = row.querySelector('.nn-chat-message__avatar');
    avatar.replaceChildren(createAvatar({ size: 40, src: data.avatarSrc }));
    const main = row.querySelector('.nn-chat-message__main');
    const meta = row.querySelector('.nn-chat-message__meta');
    if (data.admin) meta.querySelector('.nn-chat-message__name').after(createEquityCommunityRole({ role: 'super-admin' }));
    if (data.type === 'mine' && data.levels) {
      meta.querySelector('.nn-chat-message__name').before(
        createEquityRank({ lv: 8 }),
        createEquityMemberLevel({ lv: 46 }),
        createEquityPubgNationalPowerRank({ rank: 10 })
      );
    } else if (data.rankLevel) {
      meta.querySelector('.nn-chat-message__name').after(createEquityRank({ lv: data.rankLevel }));
    }
    if (data.room) addRoom(main, data.type === 'mine');
    if (data.warning) {
      const warning = element('div', 'member-hall__warning');
      warning.append(element('i', 'nnicon nicon-a-warning-lineweixianjingshi-xianxing'), element('span', '', '对方设置了私信权限, 陌生人无法发送消息'));
      main.appendChild(warning);
    }
    (data.images || []).forEach(function(src) {
      const img = element('img', 'member-hall__upload'); img.src = src; img.alt = '发送的图片';
      row.querySelector('.nn-chat-message__bubble').appendChild(img);
    });
    messages.appendChild(row);
    return row;
  }

  const historySamples = [
    '刚上线，今晚有人一起组队吗？',
    '我还差一局打完，结束后就进语音房。',
    '刚才那局配合得不错，下一局可以继续走稳健路线，进圈后再找机会打架。',
    '我在广场等人，房间还有两个位置。',
    '可以开麦，平时主要打辅助位和中路，如果队伍需要也可以补其他位置。',
    '刚更新完游戏，我先去训练场试一下手感，等你们开房再拉我。',
    '有人玩绝地求生吗？双排或四排都可以。',
    '这局我们先跳边缘点搜物资，中期提前转移。如果遇到队伍先报方向和人数，不要分散。',
    '收到，我已经进房间了。'
  ];
  Array.from({ length: 54 }, function(_, index) {
    const mine = index % 7 === 3;
    const rankLevel = ((index * 7 + 3) % 11) < 4 ? ((index * 3) % 10) + 1 : null;
    addMessage({
      type: mine ? 'mine' : 'other',
      name: mine ? selfProfile.name : nextOtherName(),
      time: `${Math.max(9, 68 - index)}分钟前`,
      text: historySamples[index % historySamples.length],
      rankLevel,
      avatarSrc: mine
        ? selfProfile.avatarSrc
        : `../image/MemberHall/history-avatars/history-avatar-${String((index % 53) + 1).padStart(2, '0')}.jpg`
    });
  });

  addMessage({ text: '进入社区左侧频道，双击创建临时频道，点击复制链接按钮。\n②：在弹出来的窗口中点击复制邀请链接。', avatarSrc: memberHallAssets['chat-5.png'] });
  addMessage({ text: '翡翠，胖子，玩喷火大锤，找固定队友，我白天晚上都在q 9194763玩62412302她号我一直又账号密码，她隐藏分应该还是高的', avatarSrc: memberHallAssets['chat-6.png'], admin: true, room: true });
  addMessage({ type: 'mine', name: selfProfile.name, time: '5分钟前', text: '有长期的嘛，要求心态好，本人不喷队友，也不想被队友喷。自己一个人单排好久了，所以从黄金二掉到青铜。我主打中型，法玛斯跟ak 都还可以。', avatarSrc: selfProfile.avatarSrc, room: true, levels: true, warning: true });
  messages.appendChild(element('div', 'member-hall__date', '2023年7月11日'));
  addMessage({ text: '没事我上那个女辅助的号玩峡谷，她号我一直又账号密码，她隐藏分应该还是高的没事我上那个女辅助的号玩峡谷，她号我一直又账号密码', avatarSrc: memberHallAssets['chat-13.png'] });
  messages.appendChild(element('div', 'member-hall__recall', '普莱士袋熊 撤回了一条消息'));
  addMessage({ text: '晚上八点开黑，还差一个人。', avatarSrc: memberHallAssets['chat-8.png'] });
  addMessage({ type: 'mine', name: selfProfile.name, time: '4分钟前', text: '我可以，到时候直接拉我。', avatarSrc: selfProfile.avatarSrc, bubbleVariant: 'dragon-king-lv1' });
  addMessage({ text: '先打两局热热手，队伍不限段位，能开麦沟通就行，主要是大家玩得开心。', avatarSrc: memberHallAssets['chat-9.png'] });
  addMessage({ type: 'mine', name: selfProfile.name, time: '3分钟前', text: '我这边网络刚调好，现在进语音房。如果队伍满了就先观战一局，下局再换我上。', avatarSrc: selfProfile.avatarSrc });
  messages.appendChild(element('div', 'member-hall__date', '今天 20:16'));
  addMessage({ text: '我们主要走稳健路线，前期先搜集物资，中期根据安全区位置决定转移方向。遇到队伍先报位置和人数，不要单独冲楼；进入决赛圈后优先保留投掷物，听指挥同步集火，这样容错率会高很多。', avatarSrc: memberHallAssets['chat-10.png'], room: true });
  addMessage({ type: 'mine', name: selfProfile.name, time: '1分钟前', text: '收到，我跟队走，有人靠近会第一时间报点。', avatarSrc: selfProfile.avatarSrc });
  addMessage({ text: '好的，已经给你留位置了。', avatarSrc: memberHallAssets['chat-11.png'] });
  addMessage({ text: '这局结束后大家先休息两分钟，我重新调整一下房间队伍。需要换位置或者修改麦克风设置的可以提前说，下一局我们换个跳点，尽量避开前期的混战区域。', avatarSrc: memberHallAssets['chat-12.png'] });

  const composers = element('div', 'member-hall__composers');
  let dragonKingBubbleLevel = 1;
  composers.appendChild(createChatMessageInput({
    size: 'default',
    showGift: true,
    onSend: function(payload) {
      addMessage({ type: 'mine', name: selfProfile.name, time: '刚刚', text: payload.text, images: payload.images, avatarSrc: selfProfile.avatarSrc, bubbleVariant: `dragon-king-lv${dragonKingBubbleLevel}` });
      dragonKingBubbleLevel = dragonKingBubbleLevel % 5 + 1;
      requestAnimationFrame(function() { history.scrollTop = history.scrollHeight; });
    }
  }));
  chat.appendChild(composers);
  const members = element('aside', 'member-hall__members');
  members.setAttribute('aria-label', '社区成员');
  const search = element('div', 'member-hall__search');
  const memberScroll = element('div', 'member-hall__member-scroll');
  const memberList = element('div', 'member-hall__member-list');
  memberList.tabIndex = 0;
  memberScroll.appendChild(memberList);
  const names = ['SlowLee','Mine Lin','大V','W. F. Y','一行','Caroline','李博文','Hello','Mr.Liu','月亮图标','DQ','汕辻.','邱妹妹','coco cheng','L。','君君','慢两拍','啷个哩个啷','E Chin','两百斤土豆'];
  const rows = names.map(function(name, index) {
    const row = createButton({ text: '', level: 'tertiary', size: 'small', className: 'member-hall__member' });
    row.setAttribute('aria-label', name);
    const avatar = element('span', 'member-hall__member-avatar');
    avatar.appendChild(createAvatar({ src: memberHallAssets['member-' + (index + 1) + '.png'], size: 36, status: 'on' }));
    if (index === 0) {
      const frame = element('img', 'member-hall__avatar-frame'); frame.src = memberHallAssets['avatar-frame.png']; frame.alt = ''; avatar.appendChild(frame);
    }
    const copy = element('span', 'member-hall__member-copy');
    const title = element('span', 'member-hall__member-title');
    title.appendChild(element('span', 'member-hall__member-name', name));
    if (index < 3) title.appendChild(createEquityCommunityRole({ role: ['super-admin','senior-admin','admin'][index] }));
    copy.appendChild(title);
    if (index === 4 || index === 8) copy.appendChild(element('span', 'member-hall__member-status', index === 4 ? '正在玩绝地求生' : '正在玩怪物猎人：世界'));
    row.append(avatar, copy);
    row.addEventListener('click', function() {
      const input = composers.querySelector('textarea');
      if (input) { input.value = '@' + name + ' '; input.dispatchEvent(new Event('input', { bubbles: true })); input.focus(); }
    });
    memberList.appendChild(row);
    return row;
  });
  const empty = element('div', 'member-hall__empty', '没有找到成员'); empty.hidden = true; memberList.appendChild(empty);
  search.appendChild(createInput({ size: 'default', placeholder: '搜索成员', showSearch: true, onInput: function(event) {
    const query = String(typeof event === 'string' ? event : event.target ? event.target.value : event.value || '').trim().toLowerCase();
    rows.forEach(function(row, index) { row.hidden = !names[index].toLowerCase().includes(query); });
    empty.hidden = rows.some(function(row) { return !row.hidden; });
    memberScrollBar.update();
  } }));
  members.append(search, memberScroll);
  root.append(chat, members);
  createScrollbar({
    target: history,
    container: historyWrap,
    variant: 'page',
    className: 'member-hall__history-scrollbar',
    right: -16
  });
  const memberScrollBar = createScrollbar({
    target: memberList,
    container: memberScroll,
    variant: 'page',
    right: -8
  });
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      history.scrollTop = history.scrollHeight;
    });
  });
  return root;
}
