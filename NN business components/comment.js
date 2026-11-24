const CommentStyles = `
  .nn-comment {
    display: flex;
    align-items: stretch;
    gap: var(--space20);
    width: 635px;
    max-width: 100%;
    padding-right: var(--space20);
    border: 1px solid var(--gray-8);
    background: var(--gray-1);
    color: var(--gray-4);
    font-family: var(--font-family-main);
    box-sizing: border-box;
  }

  .nn-comment--fluid {
    width: 100%;
  }

  .nn-comment__author {
    display: flex;
    flex: 0 0 94px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space4);
    width: 94px;
    padding: var(--space20) var(--space0);
    background: var(--gray-10);
    box-sizing: border-box;
  }

  .nn-comment__author-name {
    max-width: 100%;
    overflow: hidden;
    color: var(--gray-5);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-body);
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-comment__content {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: var(--space16);
    min-width: 0;
    padding: var(--space20) var(--space0);
  }

  .nn-comment__main {
    display: flex;
    flex-direction: column;
    gap: var(--space12);
    min-width: 0;
  }

  .nn-comment__header {
    display: flex;
    align-items: center;
    gap: var(--space8);
    min-width: 0;
    padding-bottom: var(--space16);
    border-bottom: 1px solid var(--gray-10);
  }

  .nn-comment__title {
    display: inline-flex;
    align-items: center;
    gap: var(--space2);
    min-width: 0;
    color: var(--gray-4);
    font-size: var(--font-size-subtitle);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-subtitle);
  }

  .nn-comment__title-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x9);
    height: var(--icon-size-x9);
    flex: 0 0 var(--icon-size-x9);
    color: var(--Esports-Blue-LD);
    font-size: var(--icon-size-x9);
    line-height: var(--icon-size-x9);
  }

  .nn-comment[data-sentiment="negative"] .nn-comment__title-icon {
    color: var(--Red);
    transform: scaleY(-1);
  }

  .nn-comment__date,
  .nn-comment__playtime {
    color: var(--gray-6);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-body);
  }

  .nn-comment__date {
    margin-left: auto;
    white-space: nowrap;
  }

  .nn-comment__date-value,
  .nn-comment__playtime-value {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .nn-comment__playtime {
    display: flex;
    align-items: flex-start;
    min-width: 0;
    white-space: nowrap;
  }

  .nn-comment__body {
    min-width: 0;
    overflow: hidden;
    color: var(--gray-4);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-subtitle);
  }

  .nn-comment__body p {
    margin: var(--space0);
  }

  .nn-comment:not(.is-expanded) .nn-comment__body {
    display: -webkit-box;
    max-height: 66px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .nn-comment__footer {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--space12);
    min-width: 0;
  }

  .nn-comment__reactions {
    display: inline-flex;
    align-items: center;
    gap: var(--space8);
    min-width: 0;
    padding: var(--space4) var(--space8);
    border-radius: var(--border-radius-2r);
    background: var(--gray-10);
    color: var(--gray-4);
    box-sizing: border-box;
  }

  .nn-comment__reaction {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    flex: 0 0 auto;
    border-radius: var(--border-radius-2r);
    color: var(--gray-4);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-body);
    cursor: pointer;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .nn-comment__reaction:focus-visible {
    outline: 1px solid var(--gray-7);
    outline-offset: var(--space2);
  }

  .nn-comment__reaction-icon-motion {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x9);
    height: var(--icon-size-x9);
    flex: 0 0 var(--icon-size-x9);
    transform-origin: 50% 50%;
  }

  .nn-comment__reaction-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x9);
    height: var(--icon-size-x9);
    flex: 0 0 var(--icon-size-x9);
    color: var(--gray-6);
    font-size: var(--icon-size-x9);
    line-height: var(--icon-size-x9);
    transition: color 160ms ease;
  }

  .nn-comment__reaction--dislike .nn-comment__reaction-icon {
    transform: scaleY(-1);
  }

  .nn-comment__reaction.is-active .nn-comment__reaction-icon {
    color: var(--gray-4);
  }

  .nn-comment__reaction.is-animating .nn-comment__reaction-icon-motion {
    will-change: transform;
  }

  .nn-comment__reaction--like.is-animating .nn-comment__reaction-icon-motion {
    animation: nn-comment-reaction-like 300ms cubic-bezier(0.4, 0, 0.2, 1) both;
  }

  .nn-comment__reaction--dislike.is-animating .nn-comment__reaction-icon-motion {
    animation: nn-comment-reaction-dislike 300ms cubic-bezier(0.4, 0, 0.2, 1) both;
  }

  .nn-comment__reaction-feedback {
    position: absolute;
    top: calc(var(--space12) * -1);
    right: calc(var(--space4) * -1);
    z-index: 1;
    color: var(--gray-4);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-caption);
    pointer-events: none;
    animation: nn-comment-reaction-feedback 520ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .nn-comment__reaction-divider {
    width: 1px;
    height: 14px;
    flex: 0 0 1px;
    background: var(--gray-9);
  }

  .nn-comment__toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space2);
    flex: 0 0 auto;
    min-height: 24px;
    margin-left: auto;
    padding: var(--space2) var(--space6);
    border: 0;
    border-radius: var(--border-radius-2r);
    background: transparent;
    color: var(--gray-6);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-body);
    cursor: pointer;
    transition: color 0.16s ease;
    user-select: none;
    -webkit-user-select: none;
  }

  .nn-comment__toggle:hover,
  .nn-comment__toggle:focus-visible {
    outline: none;
    color: var(--gray-4);
  }

  .nn-comment__toggle-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    flex: 0 0 var(--icon-size-x8);
    color: currentColor;
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-comment__toggle[hidden] {
    display: none;
  }

  @keyframes nn-comment-reaction-like {
    0% { transform: rotate(0deg); }
    45% { transform: rotate(-10deg); }
    100% { transform: rotate(0deg); }
  }

  @keyframes nn-comment-reaction-dislike {
    0% { transform: rotate(0deg); }
    45% { transform: rotate(10deg); }
    100% { transform: rotate(0deg); }
  }

  @keyframes nn-comment-reaction-feedback {
    0% {
      opacity: 0;
      transform: translateY(var(--space4));
    }
    24% { opacity: 1; }
    100% {
      opacity: 0;
      transform: translateY(calc(var(--space8) * -1));
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .nn-comment__reaction-icon,
    .nn-comment__reaction-icon-motion,
    .nn-comment__reaction-feedback {
      transition: none;
      animation: none !important;
    }

    .nn-comment__reaction-feedback {
      opacity: 1;
    }
  }

  @media (max-width: 560px) {
    .nn-comment {
      gap: var(--space12);
      padding-right: var(--space12);
    }

    .nn-comment__author {
      flex-basis: 78px;
      width: 78px;
    }

    .nn-comment__header {
      align-items: flex-start;
      flex-direction: column;
      gap: var(--space4);
    }

    .nn-comment__date {
      margin-left: var(--space0);
    }

    .nn-comment__footer {
      align-items: flex-end;
      flex-direction: column;
    }
  }
`;

const DefaultCommentParagraphs = [
  '我先说一下我自己的游戏条件，起手一台i5的1660TI组装机，绝大部分游戏都能带的动，很多类型的游戏都玩，这玩意在当年也是一代神卡，不过陪伴我至今也有八年之久了，这次用来玩暗区突围无限，先来说说游戏画质问题吧，FPS类型的游戏是非常吃画质的，画质做的不好这个游戏基本活不下去，我的电脑开不了高画质，只能调到一般，但是也感觉够用了，地图场景都很清晰，暗区突围无限的画质是我近期玩的FPS里比较好的，尤其是特殊的真实天气系统，看起来真的就仿佛是真实环境中，而不是在一个虚拟游戏里面。',
  '然后是游戏玩法，游戏主要还是搜打撤玩法，我们需要下图搜集物资（搜集的方法大致两种1.搜刮保险箱，地图上散落的一些物品。2.鲨人舔包，这个方式来的最快，但是风险也大），搜集过程中遇到小队以外的AI或者敌人，我们基本都要跟他们打一场，胜者生，败者亡，当然也可以跑路避开，最后需要成功撤离才算结束，不然不管前面搜集再多的物资也是白给。这类玩法刚开始玩可能会觉得比较难，或者不容易上手，但是熟悉之后是真的好玩，尤其是成功收集到贵重物资撤离之后的那种成就感和满足感，是别的游戏无法给予的。',
  '最后说一下游戏我觉得最棒的背景音乐，游戏大厅的BGM整体比较深沉肃穆，也就还行，但是进图之后，每张地图给予的不同的警报声，拉闸时那响彻天空的声响，再加上真实的地图场景，真刺激！',
  '游戏目前我玩了几个小时了，感觉后面会一直玩下去，就目前给我的游戏爆率和游戏体验感来说，是一款好玩的FPS游戏，没有花里胡哨的英雄技能，不需要太刻意地考虑技能搭配，也没有其他氪金游戏变态的枪支属性！'
];

let commentInstanceId = 0;

function injectCommentStyles() {
  if (document.getElementById('nn-comment-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-comment-styles';
  style.textContent = CommentStyles;
  document.head.appendChild(style);
}

function createComment(options = {}) {
  const {
    avatarSrc = '../image/Avatar/default.png',
    username = 'tomin_kk',
    userTag = 'NN用户',
    title = '',
    sentiment = 'positive',
    publishedAt = '2025-04-03',
    playtime = '80小时55分',
    paragraphs = DefaultCommentParagraphs,
    likeCount = '17.3k',
    dislikeCount = 28,
    expanded = false,
    fluid = false,
    onLike = null,
    onDislike = null,
    onToggle = null,
    className = '',
    id = ''
  } = options;

  injectCommentStyles();
  commentInstanceId += 1;

  const isNegative = sentiment === 'negative' || title === '不推荐';
  const resolvedTitle = title || (isNegative ? '不推荐' : '推荐');

  const root = document.createElement('article');
  root.className = ['nn-comment', fluid ? 'nn-comment--fluid' : '', expanded ? 'is-expanded' : '', className].filter(Boolean).join(' ');
  root.dataset.sentiment = isNegative ? 'negative' : 'positive';
  if (id) root.id = id;

  const author = document.createElement('aside');
  author.className = 'nn-comment__author';
  author.appendChild(window.createAvatar({
    src: avatarSrc,
    text: username,
    size: 40
  }));

  const authorName = document.createElement('span');
  authorName.className = 'nn-comment__author-name';
  authorName.textContent = username;
  author.appendChild(authorName);

  author.appendChild(window.createLabel({
    text: userTag,
    color: 'neutral',
    type: 'soft',
    size: 's'
  }));

  const content = document.createElement('div');
  content.className = 'nn-comment__content';

  const main = document.createElement('div');
  main.className = 'nn-comment__main';

  const header = document.createElement('div');
  header.className = 'nn-comment__header';

  const titleEl = document.createElement('span');
  titleEl.className = 'nn-comment__title';
  const titleText = document.createElement('span');
  titleText.textContent = resolvedTitle;
  const titleIcon = document.createElement('i');
  titleIcon.className = 'nn-comment__title-icon nnicon nicon-a-like-Filldianzan-mianxing';
  titleIcon.setAttribute('aria-hidden', 'true');
  titleEl.appendChild(titleText);
  titleEl.appendChild(titleIcon);

  const date = document.createElement('span');
  date.className = 'nn-comment__date';
  const dateLabel = document.createElement('span');
  dateLabel.textContent = '发布于：';
  const dateValue = document.createElement('span');
  dateValue.className = 'nn-comment__date-value';
  dateValue.textContent = publishedAt;
  date.appendChild(dateLabel);
  date.appendChild(dateValue);

  header.appendChild(titleEl);
  header.appendChild(date);

  const playtimeEl = document.createElement('div');
  playtimeEl.className = 'nn-comment__playtime';
  const playtimeLabel = document.createElement('span');
  playtimeLabel.textContent = '游戏时长：';
  const playtimeValue = document.createElement('span');
  playtimeValue.className = 'nn-comment__playtime-value';
  playtimeValue.textContent = playtime;
  playtimeEl.appendChild(playtimeLabel);
  playtimeEl.appendChild(playtimeValue);

  const body = document.createElement('div');
  body.className = 'nn-comment__body';
  body.id = `nn-comment-body-${commentInstanceId}`;
  const safeParagraphs = Array.isArray(paragraphs) ? paragraphs : [paragraphs];
  safeParagraphs.filter(Boolean).forEach(function(paragraph) {
    const paragraphEl = document.createElement('p');
    paragraphEl.textContent = String(paragraph);
    body.appendChild(paragraphEl);
  });

  main.appendChild(header);
  main.appendChild(playtimeEl);
  main.appendChild(body);

  const footer = document.createElement('div');
  footer.className = 'nn-comment__footer';

  const reactions = document.createElement('div');
  reactions.className = 'nn-comment__reactions';

  function createCountState(count) {
    if (typeof count === 'number' && Number.isFinite(count)) {
      return {
        value: count,
        format: function(value) { return String(value); }
      };
    }

    const displayValue = String(count);
    const compactMatch = displayValue.trim().match(/^(\d+(?:\.\d+)?)([kKmM])$/);
    if (compactMatch) {
      const suffix = compactMatch[2];
      const multiplier = suffix.toLowerCase() === 'm' ? 1000000 : 1000;
      const decimals = (compactMatch[1].split('.')[1] || '').length;
      return {
        value: Number(compactMatch[1]) * multiplier,
        format: function(value) {
          return `${(value / multiplier).toFixed(decimals)}${suffix}`;
        }
      };
    }

    const numericValue = Number(displayValue.replace(/,/g, ''));
    if (Number.isFinite(numericValue)) {
      return {
        value: numericValue,
        format: function(value) { return String(value); }
      };
    }

    return {
      value: displayValue,
      format: function() { return displayValue; }
    };
  }

  function updateReactionsLabel() {
    reactions.setAttribute('aria-label', `点赞 ${likeReaction.value.textContent}，点踩 ${dislikeReaction.value.textContent}`);
  }

  function createReaction(kind, count, callback) {
    const reaction = document.createElement('span');
    reaction.className = `nn-comment__reaction nn-comment__reaction--${kind}`;
    reaction.setAttribute('role', 'button');
    reaction.setAttribute('tabindex', '0');
    reaction.setAttribute('aria-pressed', 'false');
    const label = kind === 'like' ? '点赞' : '点踩';

    const iconMotion = document.createElement('span');
    iconMotion.className = 'nn-comment__reaction-icon-motion';
    const icon = document.createElement('i');
    icon.className = 'nn-comment__reaction-icon nnicon nicon-a-like-linedianzan-xianxing';
    icon.setAttribute('aria-hidden', 'true');
    const value = document.createElement('span');
    value.className = 'nn-comment__reaction-value';
    const countState = createCountState(count);
    value.textContent = countState.format(countState.value);
    reaction.setAttribute('aria-label', `${label} ${value.textContent}`);
    iconMotion.appendChild(icon);
    reaction.appendChild(iconMotion);
    reaction.appendChild(value);
    let motionTimer = null;
    let feedbackTimer = null;

    function toggleReaction(event) {
      const nextActive = reaction.getAttribute('aria-pressed') !== 'true';
      const delta = nextActive ? 1 : -1;
      reaction.setAttribute('aria-pressed', String(nextActive));
      reaction.classList.toggle('is-active', nextActive);
      reaction.classList.remove('is-animating');
      void iconMotion.offsetWidth;
      reaction.classList.add('is-animating');
      icon.className = `nn-comment__reaction-icon nnicon ${nextActive ? 'nicon-a-like-Filldianzan-mianxing' : 'nicon-a-like-linedianzan-xianxing'}`;

      if (typeof countState.value === 'number') {
        countState.value += delta;
        value.textContent = countState.format(countState.value);
      }
      reaction.setAttribute('aria-label', `${label} ${value.textContent}`);

      const previousFeedback = reaction.querySelector('.nn-comment__reaction-feedback');
      if (previousFeedback) previousFeedback.remove();
      const feedback = document.createElement('span');
      feedback.className = 'nn-comment__reaction-feedback';
      feedback.textContent = nextActive ? '+1' : '-1';
      feedback.setAttribute('aria-hidden', 'true');
      reaction.appendChild(feedback);
      updateReactionsLabel();

      if (motionTimer) window.clearTimeout(motionTimer);
      if (feedbackTimer) window.clearTimeout(feedbackTimer);
      motionTimer = window.setTimeout(function() {
        reaction.classList.remove('is-animating');
      }, 300);
      feedbackTimer = window.setTimeout(function() {
        feedback.remove();
      }, 540);

      if (typeof callback === 'function') {
        callback({
          type: kind,
          active: nextActive,
          delta,
          count: countState.value,
          displayCount: value.textContent,
          event,
          element: root,
          reaction
        });
      }
    }

    reaction.addEventListener('click', toggleReaction);
    reaction.addEventListener('keydown', function(event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      toggleReaction(event);
    });

    return { element: reaction, value, state: countState };
  }

  const reactionDivider = document.createElement('span');
  reactionDivider.className = 'nn-comment__reaction-divider';
  reactionDivider.setAttribute('aria-hidden', 'true');
  const likeReaction = createReaction('like', likeCount, onLike);
  const dislikeReaction = createReaction('dislike', dislikeCount, onDislike);
  reactions.appendChild(likeReaction.element);
  reactions.appendChild(reactionDivider);
  reactions.appendChild(dislikeReaction.element);
  updateReactionsLabel();

  let isExpanded = Boolean(expanded);
  const toggle = document.createElement('span');
  toggle.className = 'nn-comment__toggle';
  toggle.hidden = true;
  toggle.setAttribute('role', 'button');
  toggle.setAttribute('tabindex', '0');
  toggle.setAttribute('aria-expanded', String(isExpanded));
  toggle.setAttribute('aria-controls', body.id);

  const toggleText = document.createElement('span');
  toggleText.className = 'nn-comment__toggle-text';
  toggleText.textContent = isExpanded ? '收起' : '展开';
  const toggleIcon = document.createElement('i');
  toggleIcon.className = `nn-comment__toggle-icon nnicon ${isExpanded ? 'nicon-a-Arrowup-linejiantoushang-xianxing' : 'nicon-a-Arrow-down-linejiantouxia-xianxing'}`;
  toggleIcon.setAttribute('aria-hidden', 'true');
  toggle.appendChild(toggleText);
  toggle.appendChild(toggleIcon);

  function updateExpandedState(nextExpanded, event) {
    isExpanded = Boolean(nextExpanded);
    root.classList.toggle('is-expanded', isExpanded);
    toggle.setAttribute('aria-expanded', String(isExpanded));
    toggleText.textContent = isExpanded ? '收起' : '展开';
    toggleIcon.className = `nn-comment__toggle-icon nnicon ${isExpanded ? 'nicon-a-Arrowup-linejiantoushang-xianxing' : 'nicon-a-Arrow-down-linejiantouxia-xianxing'}`;
    if (typeof onToggle === 'function') {
      onToggle({ expanded: isExpanded, event, element: root });
    }
  }

  toggle.addEventListener('click', function(event) {
    updateExpandedState(!isExpanded, event);
  });

  toggle.addEventListener('keydown', function(event) {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    updateExpandedState(!isExpanded, event);
  });

  function refreshToggleVisibility() {
    if (!root.isConnected) return;
    const wasExpanded = root.classList.contains('is-expanded');
    root.classList.remove('is-expanded');
    const hasOverflow = body.scrollHeight > body.clientHeight + 1;
    root.classList.toggle('is-expanded', wasExpanded && hasOverflow);
    toggle.hidden = !hasOverflow;

    if (!hasOverflow && isExpanded) {
      isExpanded = false;
      toggle.setAttribute('aria-expanded', 'false');
      toggleText.textContent = '展开';
      toggleIcon.className = 'nn-comment__toggle-icon nnicon nicon-a-Arrow-down-linejiantouxia-xianxing';
    }
  }

  requestAnimationFrame(refreshToggleVisibility);

  if (typeof ResizeObserver !== 'undefined') {
    let measuredWidth = 0;
    const resizeObserver = new ResizeObserver(function(entries) {
      const nextWidth = entries[0] ? entries[0].contentRect.width : 0;
      if (Math.abs(nextWidth - measuredWidth) < 1) return;
      measuredWidth = nextWidth;
      requestAnimationFrame(refreshToggleVisibility);
    });
    resizeObserver.observe(root);
    root.__nnCommentResizeObserver = resizeObserver;
  }

  root.setExpanded = function(nextExpanded) {
    updateExpandedState(nextExpanded, null);
  };
  root.isExpanded = function() {
    return isExpanded;
  };
  root.refreshLayout = refreshToggleVisibility;

  footer.appendChild(reactions);
  footer.appendChild(toggle);
  content.appendChild(main);
  content.appendChild(footer);
  root.appendChild(author);
  root.appendChild(content);

  return root;
}

function renderComment(target, options = {}) {
  const container = typeof target === 'string' ? document.querySelector(target) : target;
  if (!container) return null;
  const comment = createComment(options);
  container.appendChild(comment);
  return comment;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createComment, renderComment, injectCommentStyles };
}

if (typeof window !== 'undefined') {
  window.createComment = createComment;
  window.renderComment = renderComment;
  window.injectCommentStyles = injectCommentStyles;
}
