const GiftDefaultRecipients = [
  { id: 'mic-1', seat: 1, name: 'Ya ha h', avatar: '../image/Avatar/头像619.png' },
  { id: 'mic-2', seat: 2, name: 'Reaka', avatar: '../image/Avatar/头像624.png' },
  { id: 'mic-3', seat: 3, name: '阳光彩虹小白马', avatar: '../image/Avatar/头像546.png' },
  { id: 'mic-4', seat: 4, name: 'KL', avatar: '../image/Avatar/头像746.png' },
  { id: 'mic-5', seat: 5, name: '黄立勤', avatar: '../image/Avatar/头像829.png' },
  { id: 'mic-6', seat: 6, name: '小黑', avatar: '../image/Avatar/头像800.png' },
  { id: 'mic-7', seat: 7, name: 'Mr.Liu', avatar: '../image/Avatar/头像753.png' },
  { id: 'mic-8', seat: 8, name: '哦。', avatar: '../image/Avatar/头像974.png' },
  { id: 'mic-9', seat: 9, name: '南栀Echo', avatar: '../image/Avatar/头像441.png' }
];

const GiftDefaultItems = [
  { id: 'flower', name: '鲜花', price: '10个', image: '../image/gift/2.png', tag: '免费', tagVariant: 'free', description: '送上一朵鲜花，把喜欢和祝福轻轻放在TA身边。' },
  { id: 'friend', name: '好朋友', price: '99N币', image: '../image/gift/3.png', description: '我们的征程是星图大海，把祝福送到每一次相遇里。' },
  { id: 'monday', name: '疯狂星期四', price: '1650N币', image: '../image/gift/4.png', tag: '周星', tagVariant: 'week', description: '今天也是快乐加倍的一天，给TA安排一份专属惊喜。' },
  { id: 'baa', name: '开黑咩', price: '996N币', image: '../image/gift/5.png', description: '一起开黑，一路高能，把并肩作战的默契送给TA。' },
  { id: 'banana', name: '蕉朋友', price: '521N币', image: '../image/gift/6.png', description: '把轻松好玩的心意递给TA，今天也要做快乐搭子。' },
  { id: 'wealth', name: '请发财', price: '99N币', image: '../image/gift/1.png', description: '好运已到账，把财气和祝福一起送到TA面前。' },
  { id: 'water', name: '多喝水', price: '6777N币', image: '../image/gift/7.png', description: '多喝水，多开心，把贴心提醒装进这份礼物里。' },
  { id: 'smoke', name: '烟花', price: '666N币', image: '../image/gift/8.png', description: '为TA点亮一场烟花，把此刻的热闹留在房间里。' },
  { id: 'dish', name: '狸好菜', price: '666N币', image: '../image/gift/9.png', description: '端上一份好菜，把满满心意和氛围感一起送出。' },
  { id: 'moonlight', name: '月影佳人', price: '520N币', image: '../image/gift/10.png', description: '把月色里的温柔和欣赏，送给此刻闪闪发光的TA。' },
  { id: 'rebirth', name: '浴火重生', price: '1314N币', image: '../image/gift/11.png', description: '愿每一次出发都闪耀，把热烈的祝福送给TA。' },
  { id: 'trend', name: '潮流礼物', price: '299N币', image: '../image/gift/12.png', description: '把新鲜有趣的心意，送到TA的身边。' },
  { id: 'penguin', name: '企鹅礼物', price: '399N币', image: '../image/gift/13.png', description: '送上一份可爱的陪伴，让房间多一点快乐。' },
  { id: 'helmet', name: '安全帽礼物', price: '499N币', image: '../image/gift/14.png', description: '把稳稳的守护和好运，一起送给TA。' },
  { id: 'target', name: '靶心礼物', price: '599N币', image: '../image/gift/15.png', description: '正中红心的喜欢，就用这份礼物表达。' },
  { id: 'camera', name: '相机礼物', price: '699N币', image: '../image/gift/16.png', description: '记录此刻的开心，把美好瞬间送给TA。' },
  { id: 'ufo', name: '飞碟礼物', price: '799N币', image: '../image/gift/17.png', description: '带着一点奇想和惊喜，降落在TA身边。' },
  { id: 'goggles', name: '护目镜礼物', price: '899N币', image: '../image/gift/18.png', description: '用满格的元气，为TA的精彩时刻助力。' },
  { id: 'mail', name: '邮件礼物', price: '999N币', image: '../image/gift/19.png', description: '把想说的话装进邮件，送达TA的心里。' },
  { id: 'box', name: '纸箱礼物', price: '1099N币', image: '../image/gift/20.png', description: '打开这份惊喜，把好运和快乐一起送出。' }
];

const GiftDefaultBalance = {
  coin: '12.3K',
  bean: '434'
};

const GiftPanelMotionDuration = 240;

const GiftStyles = `
  .nn-gift {
    --nn-gift-card-motion-duration: 180ms;
    --nn-gift-card-motion-ease: cubic-bezier(0.22, 1, 0.36, 1);
    --nn-gift-panel-motion-ease: cubic-bezier(0.22, 1, 0.36, 1);
    --nn-gift-panel-slide-distance: calc(100% + var(--space8));
    position: relative;
    display: flex;
    width: 100%;
    min-width: 0;
    max-width: none;
    padding-bottom: var(--space8);
    background: var(--gray-1);
    color: var(--gray-3);
    font-family: var(--font-family-main);
    box-sizing: border-box;
    will-change: transform;
  }

  .nn-gift.is-hidden {
    display: none;
  }

  .nn-gift:not(.is-hidden):not(.is-closing) {
    animation: nn-gift-slide-in var(--nn-gift-panel-motion-duration, 240ms) var(--nn-gift-panel-motion-ease) both;
  }

  .nn-gift.is-closing {
    animation: nn-gift-slide-out var(--nn-gift-panel-motion-duration, 240ms) var(--nn-gift-panel-motion-ease) both;
    pointer-events: none;
  }

  @keyframes nn-gift-slide-in {
    from {
      opacity: 0;
      transform: translateY(var(--nn-gift-panel-slide-distance));
    }
    to {
      opacity: 1;
      transform: translateY(var(--space0));
    }
  }

  @keyframes nn-gift-slide-out {
    from {
      opacity: 1;
      transform: translateY(var(--space0));
    }
    to {
      opacity: 0;
      transform: translateY(var(--nn-gift-panel-slide-distance));
    }
  }

  .nn-gift__main {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;
    gap: var(--space4);
    min-width: 0;
  }

  .nn-gift__bar {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: var(--space4);
    width: 100%;
    height: 100px;
    padding: var(--space0);
    border-radius: var(--border-radius-4r) var(--border-radius-4r) var(--space0) var(--space0);
    box-sizing: border-box;
  }

  .nn-gift__recipient {
    position: relative;
    display: flex;
    flex: 0 0 120px;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: var(--space0);
    width: 120px;
    height: 100px;
    max-width: 200px;
    padding: var(--space0);
    border: none;
    border-radius: var(--border-radius-4r);
    background: transparent;
    color: var(--gray-3);
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-gift__recipient:focus {
    outline: none;
  }

  .nn-gift__recipient:hover .nn-gift__recipient-content,
  .nn-gift.is-recipient-open .nn-gift__recipient-content {
    background: var(--gray-10);
  }

  .nn-gift__recipient-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--space8);
    width: 100%;
    height: 84px;
    min-width: 0;
    padding: var(--space10) var(--space8);
    border-radius: var(--border-radius-4r);
    background: transparent;
    transition: background-color 180ms cubic-bezier(0.22, 1, 0.36, 1);
    box-sizing: border-box;
  }

  .nn-gift__recipient-content.is-multiline {
    height: 100px;
  }

  .nn-gift__recipient-idle-icon {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x20);
    height: var(--icon-size-x20);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-10r);
    color: var(--gray-5);
    font-size: var(--icon-size-x10);
    line-height: 1;
    box-sizing: border-box;
    flex: 0 0 var(--icon-size-x20);
  }

  .nn-gift__recipient-idle-icon .nnicon {
    font-size: var(--icon-size-x10);
    line-height: 1;
  }

  .nn-gift__recipient-text {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space0);
    width: 100%;
    min-width: 0;
  }

  .nn-gift__recipient-text.is-multiline {
    align-items: center;
  }

  .nn-gift__recipient-text-main {
    min-width: 0;
    overflow: hidden;
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1 1 auto;
  }

  .nn-gift__recipient-text.is-multiline .nn-gift__recipient-text-main {
    display: -webkit-box;
    white-space: normal;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .nn-gift__recipient-text-main.is-selected {
    color: var(--Esports-Blue-LD);
  }

  .nn-gift__recipient-arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    color: var(--gray-5);
    font-size: var(--icon-size-x8);
    line-height: 1;
    flex: 0 0 var(--icon-size-x8);
  }

  .nn-gift__recipient-avatar {
    display: inline-flex;
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: var(--border-radius-10r);
    flex: 0 0 40px;
  }

  .nn-gift__avatar-grid {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    flex: 0 0 40px;
  }

  .nn-gift__list-wrap {
    position: relative;
    flex: 1 1 auto;
    min-width: 400px;
    height: 100px;
    overflow: visible;
  }

  .nn-gift__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space16);
    width: 100%;
    height: 100%;
    padding-right: var(--space2);
    box-sizing: border-box;
  }

  .nn-gift-card-slot {
    position: relative;
    width: 82px;
    height: 100px;
    flex: 0 0 82px;
    overflow: visible;
  }

  .nn-gift-card-slot.nn-tooltip-primitive {
    display: block;
  }

  .nn-gift-card-slot.nn-tooltip-primitive::after {
    position: absolute;
    left: 50%;
    bottom: 100%;
    z-index: 30;
    display: block;
    width: 380px;
    height: 32px;
    transform: translateX(-50%);
    pointer-events: none;
    content: "";
  }

  .nn-gift-card-slot.nn-tooltip-primitive:hover::after {
    pointer-events: auto;
  }

  .nn-gift-card-slot[hidden] {
    display: none;
  }

  .nn-gift-card {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space4);
    width: 82px;
    height: 100px;
    padding: var(--space4) var(--space0);
    border: 0;
    border-radius: var(--border-radius-4r);
    background: var(--gray-1);
    box-shadow: none;
    color: var(--gray-6);
    transform: translateY(var(--space0));
    transition:
      height var(--nn-gift-card-motion-duration) var(--nn-gift-card-motion-ease),
      padding var(--nn-gift-card-motion-duration) var(--nn-gift-card-motion-ease),
      background-color var(--nn-gift-card-motion-duration) var(--nn-gift-card-motion-ease),
      transform var(--nn-gift-card-motion-duration) var(--nn-gift-card-motion-ease);
    box-sizing: border-box;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    will-change: height, transform;
  }

  .nn-gift-card::before,
  .nn-gift-card::after {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    content: "";
  }

  .nn-gift-card::after {
    transform: scale(0.96);
    transform-origin: center bottom;
    transition:
      opacity var(--nn-gift-card-motion-duration) ease,
      transform var(--nn-gift-card-motion-duration) var(--nn-gift-card-motion-ease);
    will-change: opacity, transform;
  }

  .nn-gift-card::before {
    inset: calc(var(--space2) * -1);
    border: var(--space2) solid var(--Esports-Blue-LD);
    border-radius: calc(var(--border-radius-4r) + var(--space2));
  }

  .nn-gift-card::after {
    inset: var(--space0);
    border-radius: var(--border-radius-4r);
    box-shadow: var(--shadow-lg);
  }

  .nn-gift-card:focus {
    outline: none;
  }

  .nn-gift-card:hover,
  .nn-gift-card-slot.nn-tooltip-primitive:hover .nn-gift-card {
    z-index: 3;
    height: 108px;
    padding-top: var(--space8);
    padding-bottom: var(--space8);
    background: var(--gray-1);
    transform: translateY(calc(var(--space6) * -1));
  }

  .nn-gift-card:hover::after,
  .nn-gift-card-slot.nn-tooltip-primitive:hover .nn-gift-card::after {
    opacity: 1;
    transform: scale(1);
  }

  .nn-gift-card:hover::before,
  .nn-gift-card-slot.nn-tooltip-primitive:hover .nn-gift-card::before {
    opacity: 1;
  }

  .nn-gift-card__image {
    position: relative;
    width: 50px;
    height: 50px;
    overflow: visible;
    flex: 0 0 50px;
    transition:
      width var(--nn-gift-card-motion-duration) var(--nn-gift-card-motion-ease),
      height var(--nn-gift-card-motion-duration) var(--nn-gift-card-motion-ease),
      flex-basis var(--nn-gift-card-motion-duration) var(--nn-gift-card-motion-ease);
  }

  .nn-gift-card__image img {
    position: absolute;
    left: 50%;
    top: 50%;
    display: block;
    width: 50px;
    height: 50px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    transform: translate(-50%, -50%);
    transition: transform var(--nn-gift-card-motion-duration) var(--nn-gift-card-motion-ease);
    will-change: transform;
    pointer-events: none;
  }

  .nn-gift-card:hover .nn-gift-card__image img,
  .nn-gift-card-slot.nn-tooltip-primitive:hover .nn-gift-card__image img {
    transform: translate(-50%, -50%) scale(1.2);
  }

  .nn-gift-card:hover .nn-gift-card__image,
  .nn-gift-card-slot.nn-tooltip-primitive:hover .nn-gift-card__image {
    width: 60px;
    height: 60px;
    flex-basis: 60px;
  }

  .nn-gift-card__copy {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space2);
    width: 100%;
    min-width: 0;
    text-align: center;
    transition: gap var(--nn-gift-card-motion-duration) var(--nn-gift-card-motion-ease);
  }

  .nn-gift-card__name,
  .nn-gift-card__price {
    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-gift-card__name {
    color: var(--gray-4);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-body);
  }

  .nn-gift-card__price {
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
  }

  .nn-gift-card__name {
    max-height: var(--line-height-body);
    opacity: 1;
    transform: translateY(var(--space0));
    transition: transform var(--nn-gift-card-motion-duration) var(--nn-gift-card-motion-ease);
  }

  .nn-gift-card__tag {
    position: absolute;
    left: 0;
    top: 0;
    display: inline-flex;
    align-items: center;
    height: 18px;
    padding: var(--space0) var(--space4);
    border-radius: var(--border-radius-4r) var(--border-radius-4r) var(--border-radius-4r) var(--space0);
    background: var(--Green);
    color: var(--Neutral-0);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-caption);
    white-space: nowrap;
    box-sizing: border-box;
  }

  .nn-gift-card__tag.is-week {
    background: linear-gradient(270deg, var(--Magenta) 0%, var(--Purple) 100%);
  }

  .nn-gift-card-tooltip.nn-tooltip {
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: column;
    gap: var(--space16);
    width: 380px;
    padding: var(--space16);
    border-radius: var(--border-radius-4r);
    box-shadow: var(--shadow-sm);
    white-space: normal;
    z-index: 40;
    box-sizing: border-box;
  }

  .nn-gift-card-tooltip.nn-tooltip.nn-tooltip-top {
    bottom: calc(100% + var(--space32));
    margin-bottom: var(--space0);
    transform-origin: center bottom;
    will-change: opacity, transform;
  }

  .nn-gift-card-slot.nn-tooltip-primitive:hover .nn-gift-card-tooltip.nn-tooltip.nn-tooltip-top {
    animation: nn-gift-card-tooltip-appear 160ms var(--nn-gift-card-motion-ease) forwards;
  }

  .nn-gift-card-tooltip.nn-tooltip.nn-tooltip-top .nn-tooltip-beak {
    bottom: -7px;
    width: 12px;
    height: 12px;
    border-radius: unset;
    border-bottom-right-radius: var(--border-radius-2r);
  }

  @keyframes nn-gift-card-tooltip-appear {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(var(--space4)) scale(0.98);
    }

    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0) scale(1);
    }
  }

  .nn-gift-card-tooltip__main {
    display: flex;
    align-items: center;
    gap: var(--space16);
    width: 100%;
    min-width: 0;
  }

  .nn-gift-card-tooltip__image {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 74px;
    height: 74px;
    overflow: hidden;
    flex: 0 0 74px;
  }

  .nn-gift-card-tooltip__image img {
    display: block;
    width: 74px;
    height: 74px;
    object-fit: contain;
  }

  .nn-gift-card-tooltip__copy {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: var(--space4);
    min-width: 0;
    flex: 1 1 auto;
  }

  .nn-gift-card-tooltip__title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space12);
    width: 100%;
    min-width: 0;
  }

  .nn-gift-card-tooltip__title,
  .nn-gift-card-tooltip__boost {
    overflow: hidden;
    color: var(--gray-3);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-gift-card-tooltip__title {
    text-align: left;
    font-size: var(--font-size-subtitle);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-subtitle);
    flex: 1 1 auto;
  }

  .nn-gift-card-tooltip__boost {
    text-align: right;
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
    flex: 0 0 auto;
  }

  .nn-gift-card-tooltip__boost-strong {
    font-weight: var(--font-weight-semibold);
  }

  .nn-gift-card-tooltip__description {
    margin: var(--space0);
    color: var(--gray-5);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
    text-align: left;
  }

  .nn-gift-card-tooltip__description {
    display: -webkit-box;
    height: 48px;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .nn-gift-card-tooltip__quantities {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space4);
    width: 100%;
  }

  .nn-gift-card-tooltip__quantity {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    height: 26px;
    padding: var(--space4);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    background: transparent;
    color: var(--gray-5);
    font-family: var(--font-family-main);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
    box-sizing: border-box;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    flex: 1 1 0;
  }

  .nn-gift-card-tooltip__quantity:focus {
    outline: none;
  }

  .nn-gift-card-tooltip__quantity.is-active {
    border-color: var(--Esports-Blue);
    background: color-mix(in srgb, var(--Esports-Blue-LD) 10%, transparent);
    color: var(--gray-3);
    font-weight: var(--font-weight-medium);
  }

  .nn-gift-card-tooltip__footer {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space12);
    width: 100%;
    min-height: 32px;
  }

  .nn-gift-card-tooltip__balance {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space0);
    min-width: 0;
  }

  .nn-gift-card-tooltip__cost,
  .nn-gift-card-tooltip__insufficient {
    color: var(--gray-3);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-body);
    white-space: nowrap;
  }

  .nn-gift-card-tooltip__insufficient {
    color: var(--gray-5);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }

  .nn-gift-card-tooltip__button.nn-btn,
  .nn-gift-card-tooltip__button {
    width: 160px;
    flex: 0 0 auto;
  }

  .nn-gift-card-tooltip__button:not(.nn-btn) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    padding: var(--space6) var(--space12);
    border: none;
    border-radius: var(--border-radius-2r);
    background: var(--Esports-Blue);
    color: var(--Neutral-0);
    font-family: var(--font-family-main);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-body);
    cursor: pointer;
    box-sizing: border-box;
  }

  .nn-gift__more-button {
    position: relative;
  }

  .nn-gift__more-arrow {
    position: absolute;
    right: 0;
    bottom: var(--space16);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    border-radius: var(--border-radius-2r);
    background: var(--gray-3);
    color: var(--gray-1);
    font-size: var(--icon-size-x8);
    line-height: 1;
  }

  .nn-gift__more-action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 100px;
    padding: var(--space0);
    border: none;
    border-radius: var(--border-radius-4r);
    background: transparent;
    color: var(--gray-5);
    font-family: var(--font-family-main);
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    flex: 0 0 28px;
  }

  .nn-gift__more-action:focus {
    outline: none;
  }

  .nn-gift__more-action[aria-expanded="true"] .nn-gift__more-action-content {
    background: var(--gray-8);
  }

  .nn-toast.nn-gift__more-popover {
    position: absolute;
    right: var(--space0);
    bottom: calc(100% + var(--space24));
    z-index: 60;
    width: 490px;
    height: 428px;
    max-height: none;
  }

  .nn-toast.nn-gift__more-popover .nn-toast__body {
    gap: var(--space0);
  }

  .nn-toast.nn-gift__more-popover .nn-toast__header {
    padding: var(--space12) var(--space20) var(--space0);
  }

  .nn-toast.nn-gift__more-popover .nn-toast__title-row {
    min-height: 38px;
    padding-right: var(--space40);
  }

  .nn-toast.nn-gift__more-popover .nn-tabs-primary {
    align-self: flex-start;
  }

  .nn-toast.nn-gift__more-popover.nn-toast--scrollable-content .nn-toast__content {
    padding: var(--space8) var(--space20);
    overflow: hidden;
  }

  .nn-gift__more-popover-scroll {
    flex: 1 1 0;
    min-height: 0;
    margin-right: calc((var(--space4) + var(--space2)) * -1);
    margin-left: calc(var(--space2) * -1);
    padding-right: var(--space2);
    padding-left: var(--space2);
    overflow-y: auto;
    scrollbar-width: none;
    box-sizing: border-box;
  }

  .nn-gift__more-popover-content {
    display: flex;
    flex: 1 1 auto;
    min-height: 0;
    overflow: visible;
  }

  .nn-gift__more-popover-scroll::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .nn-gift__more-popover-grid {
    display: grid;
    grid-template-columns: repeat(5, 82px);
    column-gap: var(--space10);
    row-gap: var(--space10);
    width: 450px;
    padding: var(--space12) var(--space0);
  }

  .nn-gift-card-slot--more-popover {
    z-index: 1;
  }

  .nn-gift-card-slot--more-popover:hover {
    z-index: 2;
  }

  .nn-gift-card--more-popover {
    top: var(--space0);
    bottom: auto;
    overflow: visible;
    transform: translateY(var(--space0));
    transition:
      top var(--nn-gift-card-motion-duration) var(--nn-gift-card-motion-ease),
      height var(--nn-gift-card-motion-duration) var(--nn-gift-card-motion-ease),
      padding var(--nn-gift-card-motion-duration) var(--nn-gift-card-motion-ease),
      background-color var(--nn-gift-card-motion-duration) var(--nn-gift-card-motion-ease);
    will-change: top, height;
  }

  .nn-gift-card--more-popover:hover {
    top: calc(var(--space8) * -1);
    z-index: 3;
    height: 116px;
    padding-top: var(--space8);
    padding-bottom: var(--space12);
    border: none;
    background: var(--gray-1);
    box-shadow: var(--shadow-lg);
    transform: translateY(var(--space0));
  }

  .nn-gift-card--more-popover:hover::before {
    opacity: 1;
    border-radius: calc(var(--border-radius-4r) + var(--space2));
  }

  .nn-gift-card--more-popover:hover::after {
    opacity: 0;
  }

  .nn-gift-card--more-popover:hover .nn-gift-card__image {
    width: 50px;
    height: 50px;
    flex-basis: 50px;
  }

  .nn-gift-card--more-popover:hover .nn-gift-card__image img {
    transform: translate(-50%, -50%) scale(1.2);
  }

  .nn-gift-card--more-popover:hover .nn-gift-card__price {
    font-weight: var(--font-weight-medium);
  }

  .nn-gift-card--more-popover__send {
    position: absolute;
    right: calc(var(--space2) * -1);
    bottom: calc(var(--space2) * -1);
    left: calc(var(--space2) * -1);
    display: none;
    align-items: center;
    justify-content: center;
    height: 28px;
    padding: var(--space4) var(--space12);
    border: none;
    border-radius: 0 0 var(--border-radius-4r) var(--border-radius-4r);
    background: var(--Esports-Blue-LD);
    color: var(--Neutral-0);
    font-family: var(--font-family-main);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-body);
    box-sizing: border-box;
    cursor: pointer;
  }

  .nn-gift-card--more-popover:hover .nn-gift-card--more-popover__send,
  .nn-gift-card--more-popover:focus-within .nn-gift-card--more-popover__send {
    display: inline-flex;
  }

  .nn-gift__more-action-content {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: var(--space0);
    width: 28px;
    height: 60px;
    padding: var(--space8) var(--space6) var(--space0);
    border-radius: var(--border-radius-2r);
    background: var(--gray-10);
    transition: background-color var(--nn-gift-card-motion-duration) var(--nn-gift-card-motion-ease);
    box-sizing: border-box;
  }

  .nn-gift__more-action:hover .nn-gift__more-action-content {
    background: var(--gray-8);
  }

  .nn-gift__more-action-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    font-size: var(--icon-size-x8);
    line-height: 1;
    flex: 0 0 var(--icon-size-x8);
  }

  .nn-gift__more-action-text {
    display: block;
    width: 16px;
    min-width: 16px;
    overflow: hidden;
    color: var(--gray-5);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-label);
    text-align: center;
    white-space: normal;
    word-break: break-all;
  }

  .nn-gift__balance {
    display: flex;
    align-items: center;
    gap: var(--space4);
    height: 24px;
    padding: var(--space0) var(--space0) var(--space8) var(--space8);
    color: var(--gray-4);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
    white-space: nowrap;
  }

  .nn-gift__balance-list {
    display: flex;
    align-items: center;
    gap: var(--space12);
  }

  .nn-gift__balance-item {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
  }

  .nn-gift__currency-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x7);
    height: var(--icon-size-x7);
    border-radius: var(--border-radius-20r);
    color: var(--Neutral-0);
    font-size: var(--icon-size-x5);
    line-height: var(--icon-size-x7);
    flex: 0 0 var(--icon-size-x7);
  }

  .nn-gift__currency-icon.is-coin {
    background: var(--Yellow);
  }

  .nn-gift__currency-icon.is-bean {
    background: var(--Orange);
  }

  .nn-gift__balance-link {
    border: none;
    padding: var(--space0);
    background: transparent;
    color: var(--Link);
    font: inherit;
    text-decoration: underline;
    cursor: pointer;
  }

  .nn-gift__recipient-popover {
    position: absolute;
    left: 0;
    bottom: calc(100% + var(--space8));
    z-index: 20;
    display: none;
    flex-direction: column;
    gap: var(--space8);
    width: 260px;
  }

  .nn-gift.is-recipient-open .nn-gift__recipient-popover {
    display: flex;
  }

  .nn-gift__effect-actions {
    display: flex;
    align-items: flex-start;
    gap: var(--space10);
  }

  .nn-gift__effect-action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space4);
    width: 98px;
    padding: var(--space6) var(--space12) var(--space6) var(--space8);
    border: none;
    border-radius: var(--border-radius-2r);
    background: var(--Black-A50);
    color: var(--Neutral-0);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-body);
    box-sizing: border-box;
    cursor: pointer;
  }

  .nn-gift__effect-action .nnicon {
    width: var(--icon-size-x9);
    height: var(--icon-size-x9);
    font-size: var(--icon-size-x9);
    line-height: 1;
  }

  .nn-gift-recipient-panel {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 260px;
    padding: var(--space0);
    overflow: hidden;
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-4r);
    background: var(--gray-2);
    box-shadow: var(--shadow-lg);
    box-sizing: border-box;
  }

  .nn-gift-recipient-panel__content {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space2);
    width: 100%;
    height: 360px;
    padding: var(--space10);
    overflow: hidden;
    box-sizing: border-box;
  }

  .nn-gift-recipient-panel__list {
    display: flex;
    flex-direction: column;
    gap: var(--space2);
    width: 100%;
    height: 100%;
    max-height: none;
    overflow-y: auto;
    scrollbar-width: none;
  }

  .nn-gift-recipient-panel__list::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .nn-gift-recipient-row {
    display: flex;
    align-items: center;
    gap: var(--space8);
    width: 100%;
    min-height: 36px;
    padding: var(--space4) var(--space8);
    border: none;
    border-radius: var(--border-radius-2r);
    background: transparent;
    color: var(--gray-3);
    font-family: var(--font-family-main);
    text-align: left;
    box-sizing: border-box;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-gift-recipient-row:hover,
  .nn-gift-recipient-row.is-hover {
    background: var(--gray-10);
  }

  .nn-gift-recipient-row:focus {
    outline: none;
  }

  .nn-gift-recipient-row .nn-checkbox {
    flex: 0 0 16px;
  }

  .nn-gift-recipient-row.is-selected .nn-checkbox__mark {
    border-color: var(--Esports-Blue-LD);
    background: var(--Esports-Blue-LD);
  }

  .nn-gift-recipient-row.is-selected .nn-checkbox__icon {
    color: var(--Neutral-0);
    opacity: 1;
  }

  .nn-gift-recipient-row__user {
    display: flex;
    align-items: center;
    gap: var(--space6);
    min-width: 0;
    flex: 1 1 auto;
  }

  .nn-gift-recipient-row__seat {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border-radius: var(--border-radius-2r);
    background: var(--gray-5);
    color: var(--gray-1);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-caption);
    flex: 0 0 16px;
  }

  .nn-gift-recipient-row.is-selected .nn-gift-recipient-row__seat {
    background: var(--Esports-Blue-LD);
    color: var(--Neutral-0);
  }

  .nn-gift-recipient-row__name {
    min-width: 0;
    overflow: hidden;
    color: var(--gray-5);
    font-size: var(--font-size-subtitle);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-subtitle);
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1 1 auto;
  }

  .nn-gift-recipient-row.is-active .nn-gift-recipient-row__name {
    color: var(--gray-3);
  }

  .nn-gift-recipient-row--all {
    gap: var(--space8);
  }

  .nn-gift-recipient-row__all-copy {
    display: inline-flex;
    align-items: center;
    gap: var(--space6);
    min-width: 0;
    flex: 0 1 auto;
  }

  .nn-gift-recipient-row__all-text {
    color: var(--gray-3);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-body);
    white-space: nowrap;
  }

  .nn-gift-recipient-row__selected-summary {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
    padding-right: var(--space0);
    margin-right: var(--space0);
    flex: 0 1 auto;
  }

  .nn-gift-recipient-row__avatar-strip {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
    padding-right: var(--space0);
    margin-right: var(--space0);
    flex: 0 1 auto;
  }

  .nn-gift-recipient-row__more {
    margin: var(--space0);
    flex: 0 0 auto;
  }

  .nn-gift-recipient-row__more:not(.nn-badge) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    padding: var(--space0) var(--space4);
    border-radius: var(--border-radius-10r);
    background: var(--gray-8);
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
    white-space: nowrap;
    box-sizing: border-box;
  }

  .nn-gift-recipient-panel__divider {
    width: calc(100% - 12px);
    height: 1px;
    margin: var(--space2) var(--space6);
    background: var(--gray-8);
    flex: 0 0 1px;
  }

  .nn-gift__close {
    position: absolute;
    top: calc(var(--space10) * -1);
    right: calc(var(--space10) * -1);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    border: none;
    border-radius: var(--border-radius-4r);
    background: transparent;
    color: var(--gray-3);
    font-size: var(--icon-size-x10);
    line-height: 1;
    transform: scale(1);
    transform-origin: center;
    transition: transform var(--nn-gift-card-motion-duration) var(--nn-gift-card-motion-ease);
    cursor: pointer;
    will-change: transform;
  }

  .nn-gift__close .nnicon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    font-size: var(--icon-size-x10);
    line-height: 1;
  }

  .nn-gift__close:hover {
    transform: scale(1.2);
  }
`;

function injectGiftStyles() {
  if (typeof document === 'undefined' || document.getElementById('nn-gift-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-gift-styles';
  style.textContent = GiftStyles;
  document.head.appendChild(style);
}

function createGiftAvatar(src, size) {
  if (typeof window !== 'undefined' && typeof window.createAvatar === 'function') {
    return window.createAvatar({ src, size });
  }

  const img = document.createElement('img');
  img.src = src;
  img.alt = '';
  img.style.width = `${size}px`;
  img.style.height = `${size}px`;
  img.style.borderRadius = `${Math.max(2, Math.round(size / 4))}px`;
  img.style.objectFit = 'cover';
  return img;
}

function createGiftCheckbox(checked, half = false) {
  return window.createCheckbox({
    checked,
    half,
    showLabel: false,
    interactive: false
  });
}

function createGiftInlineIcon(className) {
  const icon = document.createElement('i');
  icon.className = `nnicon ${className}`;
  return icon;
}

function getGiftTooltipQuantities(item) {
  return Array.isArray(item.quantities) && item.quantities.length
    ? item.quantities
    : [1, 10, 66, 188, 520, 999, 1314];
}

function getGiftPriceMeta(item) {
  const priceText = String(item.price || '').trim();
  const match = priceText.match(/^(-?\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  return {
    amount: Number(match[1]),
    suffix: match[2] || ''
  };
}

function formatGiftAmount(value) {
  if (!Number.isFinite(value)) return '0';
  const fixed = Math.round(value * 100) / 100;
  return Number.isInteger(fixed) ? String(fixed) : String(fixed).replace(/\.?0+$/, '');
}

function parseGiftBalanceAmount(value) {
  const text = String(value || '').trim().replace(/,/g, '');
  const match = text.match(/^(-?\d+(?:\.\d+)?)(K|k|万)?/);
  if (!match) return 0;
  const amount = Number(match[1]);
  if (!Number.isFinite(amount)) return 0;
  if (match[2] === 'K' || match[2] === 'k') return amount * 1000;
  if (match[2] === '万') return amount * 10000;
  return amount;
}

function getGiftBalanceAmount(item, balance) {
  const price = getGiftPriceMeta(item);
  if (!price) return Infinity;
  const suffix = String(price.suffix || '');
  if (item.balanceType === 'bean' || suffix.includes('豆')) {
    return parseGiftBalanceAmount(balance && balance.bean);
  }
  if (item.balanceType === 'coin' || suffix.includes('N') || suffix.includes('币')) {
    return parseGiftBalanceAmount(balance && balance.coin);
  }
  return Infinity;
}

function getGiftCostText(item, quantity) {
  const price = getGiftPriceMeta(item);
  const count = Number(quantity);
  if (!price || !Number.isFinite(count)) {
    return item.cost || '-0N币';
  }
  return `-${formatGiftAmount(price.amount * count)}${price.suffix}`;
}

function isGiftBalanceEnough(item, quantity, balance) {
  const price = getGiftPriceMeta(item);
  const count = Number(quantity);
  if (!price || !Number.isFinite(count)) return true;
  const available = getGiftBalanceAmount(item, balance || {});
  return available >= price.amount * count;
}

function createGiftTooltipQuantity(value, active, onSelect) {
  const item = document.createElement('button');
  item.type = 'button';
  item.className = ['nn-gift-card-tooltip__quantity', active ? 'is-active' : ''].filter(Boolean).join(' ');
  item.setAttribute('aria-pressed', active ? 'true' : 'false');
  item.textContent = String(value);
  item.addEventListener('click', function(event) {
    event.stopPropagation();
    onSelect(value);
  });
  return item;
}

function setGiftTooltipButtonText(button, text) {
  const textNode = button.querySelector && button.querySelector('.nn-btn-text');
  if (textNode) {
    textNode.textContent = text;
  } else {
    button.textContent = text;
  }
}

function createGiftTooltipButton(text, onClick) {
  let button;
  if (typeof window !== 'undefined' && typeof window.createButton === 'function') {
    button = window.createButton({
      text,
      variant: 'primary',
      level: 'primary',
      size: 'default',
      className: 'nn-gift-card-tooltip__button'
    });
  } else {
    button = document.createElement('button');
    button.type = 'button';
    button.className = 'nn-gift-card-tooltip__button';
    button.textContent = text;
  }

  button.addEventListener('click', function(event) {
    event.stopPropagation();
    if (typeof onClick === 'function') {
      onClick();
    }
  });
  return button;
}

function createGiftCardTooltip(item, context = {}) {
  const tooltip = document.createElement('span');
  tooltip.className = 'nn-tooltip nn-tooltip-top nn-gift-card-tooltip';
  tooltip.setAttribute('role', 'tooltip');

  const main = document.createElement('span');
  main.className = 'nn-gift-card-tooltip__main';

  const image = document.createElement('span');
  image.className = 'nn-gift-card-tooltip__image';
  const img = document.createElement('img');
  img.src = item.image;
  img.alt = '';
  image.appendChild(img);
  main.appendChild(image);

  const copy = document.createElement('span');
  copy.className = 'nn-gift-card-tooltip__copy';

  const titleRow = document.createElement('span');
  titleRow.className = 'nn-gift-card-tooltip__title-row';
  const title = document.createElement('span');
  title.className = 'nn-gift-card-tooltip__title';
  title.textContent = item.name;
  titleRow.appendChild(title);

  const boost = document.createElement('span');
  boost.className = 'nn-gift-card-tooltip__boost';
  const boostText = item.boost || '为Ta加 1230 魅力值';
  const boostMatch = String(boostText).match(/^(.*?)(\d+(?:\.\d+)?)(.*)$/);
  if (boostMatch) {
    boost.appendChild(document.createTextNode(boostMatch[1]));
    const boostValue = document.createElement('span');
    boostValue.className = 'nn-gift-card-tooltip__boost-strong';
    boostValue.textContent = boostMatch[2];
    boost.appendChild(boostValue);
    boost.appendChild(document.createTextNode(boostMatch[3]));
  } else {
    boost.textContent = boostText;
  }
  titleRow.appendChild(boost);
  copy.appendChild(titleRow);

  const description = document.createElement('p');
  description.className = 'nn-gift-card-tooltip__description';
  description.textContent = item.description || '我们的征程是星图大海，把祝福送到每一次相遇里。';
  copy.appendChild(description);

  main.appendChild(copy);
  tooltip.appendChild(main);

  const quantities = document.createElement('span');
  quantities.className = 'nn-gift-card-tooltip__quantities';
  let selectedQuantity = item.selectedQuantity == null ? 1 : item.selectedQuantity;
  let cost;
  let insufficient;
  let actionButton;

  function getActionText() {
    if (!context.selectedRecipientCount) return '选择赠送对象';
    return isGiftBalanceEnough(item, selectedQuantity, context.balance) ? '赠送' : '充值';
  }

  function handleAction() {
    if (!context.selectedRecipientCount) {
      if (typeof context.onNeedRecipient === 'function') {
        context.onNeedRecipient();
      }
      return;
    }
    if (isGiftBalanceEnough(item, selectedQuantity, context.balance)) {
      if (typeof context.onSend === 'function') {
        context.onSend(item.id, selectedQuantity);
      }
      return;
    }
    if (typeof context.onRecharge === 'function') {
      context.onRecharge(item.id, selectedQuantity);
    }
  }

  function updateQuantity(nextQuantity) {
    selectedQuantity = nextQuantity;
    Array.from(quantities.querySelectorAll('.nn-gift-card-tooltip__quantity')).forEach(function(option) {
      const active = option.textContent === String(selectedQuantity);
      option.classList.toggle('is-active', active);
      option.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    if (cost) {
      cost.textContent = getGiftCostText(item, selectedQuantity);
    }
    if (insufficient) {
      insufficient.hidden = isGiftBalanceEnough(item, selectedQuantity, context.balance);
    }
    if (actionButton) {
      setGiftTooltipButtonText(actionButton, getActionText());
    }
  }

  getGiftTooltipQuantities(item).forEach(function(value) {
    quantities.appendChild(createGiftTooltipQuantity(value, String(value) === String(selectedQuantity), updateQuantity));
  });
  tooltip.appendChild(quantities);

  const footer = document.createElement('span');
  footer.className = 'nn-gift-card-tooltip__footer';
  const balance = document.createElement('span');
  balance.className = 'nn-gift-card-tooltip__balance';
  cost = document.createElement('span');
  cost.className = 'nn-gift-card-tooltip__cost';
  cost.textContent = getGiftCostText(item, selectedQuantity);
  balance.appendChild(cost);
  insufficient = document.createElement('span');
  insufficient.className = 'nn-gift-card-tooltip__insufficient';
  insufficient.textContent = item.insufficientText || '余额不足';
  insufficient.hidden = isGiftBalanceEnough(item, selectedQuantity, context.balance);
  balance.appendChild(insufficient);
  footer.appendChild(balance);
  actionButton = createGiftTooltipButton(getActionText(), handleAction);
  footer.appendChild(actionButton);
  tooltip.appendChild(footer);

  const beak = document.createElement('span');
  beak.className = 'nn-tooltip-beak';
  tooltip.appendChild(beak);

  return tooltip;
}

function createGiftCountBadge(text) {
  if (typeof window !== 'undefined' && typeof window.createBadge === 'function') {
    const badge = window.createBadge({ text, variant: 'gray' });
    badge.classList.add('nn-gift-recipient-row__more');
    return badge;
  }

  const badge = document.createElement('span');
  badge.className = 'nn-gift-recipient-row__more';
  badge.textContent = text;
  return badge;
}

function normalizeGiftRecipients(recipients) {
  return (Array.isArray(recipients) && recipients.length ? recipients : GiftDefaultRecipients).map(function(item, index) {
    return Object.assign({
      id: `recipient-${index + 1}`,
      seat: index + 1,
      name: `用户 ${index + 1}`,
      avatar: '../image/Avatar/default.png'
    }, item);
  });
}

function normalizeGiftItems(items) {
  return (Array.isArray(items) && items.length ? items : GiftDefaultItems).map(function(item, index) {
    return Object.assign({
      id: `gift-${index + 1}`,
      name: '',
      price: '',
      image: `../image/gift/${index + 1}.png`,
      description: '我们的征程是星图大海，把祝福送到每一次相遇里。',
      boost: '为Ta加 1230 魅力值',
      selectedQuantity: 1
    }, item);
  });
}

function getSelectedGiftRecipients(recipients, selectedIds) {
  return recipients.filter(function(item) {
    return selectedIds.has(item.id);
  });
}

function createGiftAvatarGrid(recipients) {
  const grid = document.createElement('span');
  grid.className = 'nn-gift__avatar-grid';
  if (typeof window !== 'undefined' && typeof window.createAvatarGroup === 'function') {
    grid.appendChild(window.createAvatarGroup({
      avatars: recipients.map(function(item) {
        return { src: item.avatar, text: item.name };
      }),
      size: 40
    }));
    return grid;
  }

  grid.appendChild(createGiftAvatar(recipients[0] && recipients[0].avatar, 40));
  return grid;
}

function createGiftRecipientArrow(open) {
  const arrow = document.createElement('span');
  arrow.className = 'nn-gift__recipient-arrow';
  arrow.appendChild(createGiftInlineIcon(open ? 'nicon-a-Arrowup-linejiantoushang-xianxing' : 'nicon-a-Arrow-down-linejiantouxia-xianxing'));
  return arrow;
}

function createGiftRecipientText(text, selected, open, showArrow, variant) {
  const wrap = document.createElement('span');
  wrap.className = ['nn-gift__recipient-text', variant ? `is-${variant}` : ''].filter(Boolean).join(' ');
  const main = document.createElement('span');
  main.className = ['nn-gift__recipient-text-main', selected ? 'is-selected' : ''].filter(Boolean).join(' ');
  main.textContent = text;
  wrap.appendChild(main);
  if (showArrow) {
    wrap.appendChild(createGiftRecipientArrow(open));
  }
  return wrap;
}

function createGiftRecipientAvatar(src) {
  const wrap = document.createElement('span');
  wrap.className = 'nn-gift__recipient-avatar';
  wrap.appendChild(createGiftAvatar(src, 40));
  return wrap;
}

function formatGiftRecipientSeats(recipients) {
  const seats = recipients.map(function(item) {
    return item.seat;
  });
  if (seats.length > 6) {
    return `${seats.slice(0, 6).join('、')}...`;
  }
  return seats.join('、');
}

function shouldUseMultilineGiftRecipientText(recipients) {
  return recipients.length > 3;
}

function createGiftRecipientSummary(recipients, selectedIds, open) {
  const selected = getSelectedGiftRecipients(recipients, selectedIds);
  const multiline = selected.length > 1 && shouldUseMultilineGiftRecipientText(selected);
  const content = document.createElement('span');
  content.className = ['nn-gift__recipient-content', multiline ? 'is-multiline' : ''].filter(Boolean).join(' ');

  if (selected.length === 0) {
    const icon = document.createElement('span');
    icon.className = 'nn-gift__recipient-idle-icon';
    icon.appendChild(createGiftInlineIcon(open ? 'nicon-a-Arrowup-linejiantoushang-xianxing' : 'nicon-a-Arrow-down-linejiantouxia-xianxing'));
    content.appendChild(icon);
    content.appendChild(createGiftRecipientText('选择赠送对象', false, false, false));
    return content;
  }

  if (selected.length === 1) {
    content.appendChild(createGiftRecipientAvatar(selected[0].avatar));
    content.appendChild(createGiftRecipientText(`送给 ${selected[0].name}`, true, open, true));
    return content;
  }

  content.appendChild(createGiftAvatarGrid(selected));
  content.appendChild(createGiftRecipientText(`送给 ${formatGiftRecipientSeats(selected)} 号麦`, true, open, true, multiline ? 'multiline' : ''));
  return content;
}

function createGiftRecipientRow(recipient, selected, onToggle) {
  const row = document.createElement('button');
  row.type = 'button';
  row.className = [
    'nn-dropdown-item',
    'nn-dropdown-item-multi',
    'nn-gift-recipient-row',
    selected ? 'is-selected' : '',
    recipient.seat === 4 ? 'is-active' : ''
  ].filter(Boolean).join(' ');
  row.appendChild(createGiftCheckbox(selected));

  const user = document.createElement('span');
  user.className = 'nn-gift-recipient-row__user';

  const seat = document.createElement('span');
  seat.className = 'nn-gift-recipient-row__seat';
  seat.textContent = recipient.seat;
  user.appendChild(seat);

  user.appendChild(createGiftAvatar(recipient.avatar, 28));

  const name = document.createElement('span');
  name.className = 'nn-gift-recipient-row__name';
  name.textContent = recipient.name;
  user.appendChild(name);

  row.appendChild(user);
  row.addEventListener('click', function(event) {
    event.stopPropagation();
    onToggle(recipient.id);
  });
  return row;
}

function createGiftAllRecipientsRow(selectedRecipients, allSelected, halfSelected, onToggleAll) {
  const row = document.createElement('button');
  row.type = 'button';
  row.className = ['nn-dropdown-item', 'nn-dropdown-item-multi', 'nn-gift-recipient-row', 'nn-gift-recipient-row--all', allSelected ? 'is-selected' : ''].join(' ');
  row.appendChild(createGiftCheckbox(allSelected, halfSelected));

  const copy = document.createElement('span');
  copy.className = 'nn-gift-recipient-row__all-copy';
  const text = document.createElement('span');
  text.className = 'nn-gift-recipient-row__all-text';
  text.textContent = '全选';
  copy.appendChild(text);

  if (selectedRecipients.length > 0) {
    const summary = document.createElement('span');
    summary.className = 'nn-gift-recipient-row__selected-summary';

    const strip = document.createElement('span');
    strip.className = 'nn-gift-recipient-row__avatar-strip';
    selectedRecipients.slice(0, 6).forEach(function(item) {
      strip.appendChild(createGiftAvatar(item.avatar, 20));
    });
    summary.appendChild(strip);

    if (selectedRecipients.length > 6) {
      summary.appendChild(createGiftCountBadge(`${selectedRecipients.length}+`));
    }

    copy.appendChild(summary);
  }

  row.appendChild(copy);
  row.addEventListener('click', function(event) {
    event.stopPropagation();
    onToggleAll();
  });
  return row;
}

function createGiftRecipientPopover(state, rerender) {
  const popover = document.createElement('div');
  popover.className = 'nn-gift__recipient-popover';

  const actions = document.createElement('div');
  actions.className = 'nn-gift__effect-actions';
  [
    ['nicon-a-SpecialArrow01', '展示特效'],
    ['nicon-a-Hide-lineyincang-xianxing', '隐藏特效']
  ].forEach(function(action) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'nn-gift__effect-action';
    button.appendChild(createGiftInlineIcon(action[0]));
    const text = document.createElement('span');
    text.textContent = action[1];
    button.appendChild(text);
    button.addEventListener('click', function(event) {
      event.stopPropagation();
    });
    actions.appendChild(button);
  });
  popover.appendChild(actions);

  const panel = document.createElement('div');
  panel.className = 'nn-dropdown-panel nn-gift-recipient-panel';
  const content = document.createElement('div');
  content.className = 'nn-dropdown-panel-content nn-gift-recipient-panel__content';
  const list = document.createElement('div');
  list.className = 'nn-dropdown-list nn-gift-recipient-panel__list';

  const selectedCount = state.recipients.filter(function(item) {
    return state.selectedRecipients.has(item.id);
  }).length;
  const allSelected = selectedCount === state.recipients.length;
  const halfSelected = selectedCount > 0 && !allSelected;

  const selectedRecipients = getSelectedGiftRecipients(state.recipients, state.selectedRecipients);

  list.appendChild(createGiftAllRecipientsRow(selectedRecipients, allSelected, halfSelected, function() {
    if (allSelected) {
      state.selectedRecipients.clear();
    } else {
      state.recipients.forEach(function(item) {
        state.selectedRecipients.add(item.id);
      });
    }
    rerender();
  }));

  const divider = document.createElement('div');
  divider.className = 'nn-gift-recipient-panel__divider';
  list.appendChild(divider);

  state.recipients.forEach(function(recipient) {
    list.appendChild(createGiftRecipientRow(recipient, state.selectedRecipients.has(recipient.id), function(id) {
      if (state.selectedRecipients.has(id)) {
        state.selectedRecipients.delete(id);
      } else {
        state.selectedRecipients.add(id);
      }
      rerender();
    }));
  });

  content.appendChild(list);
  panel.appendChild(content);
  popover.appendChild(panel);
  return popover;
}

function createGiftMorePopover(state, rerender, options) {
  const content = document.createElement('div');
  content.className = 'nn-gift__more-popover-content';
  const scrollArea = document.createElement('div');
  scrollArea.className = 'nn-gift__more-popover-scroll';
  const grid = document.createElement('div');
  grid.className = 'nn-gift__more-popover-grid';

  state.gifts.forEach(function(item) {
    grid.appendChild(createGiftCard(item, {
      variant: 'more-popover',
      selectedRecipientCount: state.selectedRecipients.size,
      balance: state.balance,
      onNeedRecipient: function() {
        state.moreOpen = false;
        state.recipientOpen = true;
        rerender();
      },
      onSelect: function(id) {
        if (typeof options.onGiftChange === 'function') {
          options.onGiftChange(id);
        }
      },
      onSend: function(id, quantity) {
        if (typeof options.onGiftChange === 'function') {
          options.onGiftChange(id, quantity);
        }
      }
    }));
  });

  scrollArea.appendChild(grid);
  content.appendChild(scrollArea);
  const popover = window.createToast({
    title: '热门礼物',
    content,
    showFooter: false,
    scrollableContent: true,
    className: 'nn-gift__more-popover',
    onClose: function() {
      state.moreOpen = false;
      rerender();
    }
  });
  const titleRow = popover.querySelector('.nn-toast__title-row');
  if (titleRow && typeof window.createTabs === 'function') {
    titleRow.replaceChildren(window.createTabs({
      type: 'primary',
      tabs: [{ name: '热门礼物' }],
      defaultActive: 0
    }));
  }
  popover.setAttribute('role', 'dialog');
  popover.setAttribute('aria-label', '热门礼物');
  popover.querySelector('.nn-toast__close').setAttribute('aria-label', '关闭更多礼物');
  return popover;
}

function createGiftCard(item, context = {}) {
  const morePopover = context.variant === 'more-popover';
  const slot = document.createElement('span');
  slot.className = [
    'nn-gift-card-slot',
    morePopover ? 'nn-gift-card-slot--more-popover' : '',
    item.isMore || morePopover ? '' : 'nn-tooltip-primitive'
  ].filter(Boolean).join(' ');

  const card = document.createElement(morePopover ? 'div' : 'button');
  if (!morePopover) {
    card.type = 'button';
  } else {
    card.setAttribute('role', 'button');
    card.tabIndex = 0;
  }
  card.className = [
    'nn-gift-card',
    morePopover ? 'nn-gift-card--more-popover' : '',
    item.isMore ? 'nn-gift__more-button' : ''
  ].filter(Boolean).join(' ');

  if (item.tag) {
    const tag = document.createElement('span');
    tag.className = ['nn-gift-card__tag', item.tagVariant === 'week' ? 'is-week' : ''].filter(Boolean).join(' ');
    tag.textContent = item.tag;
    card.appendChild(tag);
  }

  const image = document.createElement('span');
  image.className = 'nn-gift-card__image';
  const img = document.createElement('img');
  img.src = item.image;
  img.alt = '';
  image.appendChild(img);
  card.appendChild(image);

  const copy = document.createElement('span');
  copy.className = 'nn-gift-card__copy';
  const name = document.createElement('span');
  name.className = 'nn-gift-card__name';
  name.textContent = item.name;
  copy.appendChild(name);
  if (item.price) {
    const price = document.createElement('span');
    price.className = 'nn-gift-card__price';
    price.textContent = item.price;
    copy.appendChild(price);
  }
  card.appendChild(copy);

  if (item.isMore) {
    const arrow = document.createElement('span');
    arrow.className = 'nn-gift__more-arrow';
    arrow.appendChild(createGiftInlineIcon('nicon-a-Arrow-down-linejiantouxia-xianxing'));
    card.appendChild(arrow);
  }

  function selectGift() {
    if (typeof context.onSelect === 'function') {
      context.onSelect(item.id);
    }
  }

  card.addEventListener('click', selectGift);
  if (morePopover) {
    card.addEventListener('keydown', function(event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      selectGift();
    });

    const send = document.createElement('button');
    send.type = 'button';
    send.className = 'nn-gift-card--more-popover__send';
    send.textContent = '赠送';
    send.addEventListener('click', function(event) {
      event.stopPropagation();
      if (!context.selectedRecipientCount) {
        if (typeof context.onNeedRecipient === 'function') {
          context.onNeedRecipient();
        }
        return;
      }
      if (typeof context.onSend === 'function') {
        context.onSend(item.id, 1);
      }
    });
    card.appendChild(send);
  }
  slot.appendChild(card);
  if (!item.isMore && !morePopover) {
    slot.appendChild(createGiftCardTooltip(item, context));
  }
  return slot;
}

function getGiftCardWidth(list) {
  const slot = list.querySelector('.nn-gift-card-slot');
  if (!slot) return 0;

  const rect = slot.getBoundingClientRect();
  return rect.width || slot.offsetWidth || 0;
}

function syncGiftVisibleCards(listWrap) {
  const list = listWrap.querySelector('.nn-gift__list');
  if (!list) return;

  const slots = Array.from(list.querySelectorAll('.nn-gift-card-slot'));
  if (!slots.length) return;

  slots.forEach(function(slot) {
    slot.hidden = false;
  });

  const cardWidth = getGiftCardWidth(list);
  const availableWidth = list.getBoundingClientRect().width;
  if (!cardWidth || !availableWidth) return;

  const cardGap = parseFloat(window.getComputedStyle(list).columnGap) || 0;
  const visibleCount = Math.max(1, Math.min(slots.length, Math.floor((availableWidth + cardGap) / (cardWidth + cardGap))));
  slots.forEach(function(slot, index) {
    slot.hidden = index >= visibleCount;
  });
  listWrap.dataset.visibleCount = String(visibleCount);
}

function createGiftMoreAction(onMore, isOpen, onToggle) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'nn-gift__more-action';
  button.setAttribute('aria-label', '更多礼物');
  button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

  const content = document.createElement('span');
  content.className = 'nn-gift__more-action-content';

  const icon = document.createElement('span');
  icon.className = 'nn-gift__more-action-icon';
  icon.appendChild(createGiftInlineIcon('nicon-a-Arrowup-linejiantoushang-xianxing'));
  content.appendChild(icon);

  const text = document.createElement('span');
  text.className = 'nn-gift__more-action-text';
  text.textContent = '更多';
  content.appendChild(text);

  button.appendChild(content);
  button.addEventListener('click', function(event) {
    event.stopPropagation();
    if (typeof onToggle === 'function') {
      onToggle();
    }
    if (typeof onMore === 'function') {
      onMore();
    }
  });
  return button;
}

function setupGiftCardLayout(root, listWrap) {
  function update() {
    syncGiftVisibleCards(listWrap);
  }

  if (typeof window !== 'undefined' && typeof window.ResizeObserver === 'function') {
    const observer = new window.ResizeObserver(update);
    observer.observe(listWrap);
    root.__nnGiftCardLayoutObserver = observer;
  } else if (typeof window !== 'undefined') {
    window.addEventListener('resize', update);
    root.__nnGiftCardLayoutCleanup = function() {
      window.removeEventListener('resize', update);
    };
  }

  if (typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function') {
    window.requestAnimationFrame(update);
  } else {
    update();
  }
}

function createGiftBalance(balance) {
  const wrap = document.createElement('div');
  wrap.className = 'nn-gift__balance';
  const label = document.createElement('span');
  label.textContent = '余额';
  wrap.appendChild(label);

  const list = document.createElement('span');
  list.className = 'nn-gift__balance-list';

  [
    ['is-coin', 'N', balance.coin || GiftDefaultBalance.coin, '充值'],
    ['is-bean', '豆', balance.bean || GiftDefaultBalance.bean, '获取']
  ].forEach(function(item) {
    const balanceItem = document.createElement('span');
    balanceItem.className = 'nn-gift__balance-item';
    const icon = document.createElement('span');
    icon.className = `nn-gift__currency-icon ${item[0]}`;
    icon.textContent = item[1];
    balanceItem.appendChild(icon);
    const value = document.createElement('span');
    value.textContent = item[2];
    balanceItem.appendChild(value);
    const link = document.createElement('button');
    link.type = 'button';
    link.className = 'nn-gift__balance-link';
    link.textContent = item[3];
    balanceItem.appendChild(link);
    list.appendChild(balanceItem);
  });

  wrap.appendChild(list);
  return wrap;
}

function createGiftBar(options = {}) {
  if (typeof window !== 'undefined' && typeof window.injectTooltipStyles === 'function') {
    window.injectTooltipStyles();
  }
  if (typeof window !== 'undefined' && typeof window.injectButtonStyles === 'function') {
    window.injectButtonStyles();
  }
  if (typeof window !== 'undefined' && typeof window.injectToastStyles === 'function') {
    window.injectToastStyles();
  }
  if (typeof window !== 'undefined' && typeof window.injectDropdownMenuStyles === 'function') {
    window.injectDropdownMenuStyles();
  }
  if (typeof window !== 'undefined' && typeof window.injectCheckboxStyles === 'function') {
    window.injectCheckboxStyles();
  }
  if (typeof window !== 'undefined' && typeof window.injectAvatarStyles === 'function') {
    window.injectAvatarStyles();
  }
  if (typeof window !== 'undefined' && typeof window.injectBadgeStyles === 'function') {
    window.injectBadgeStyles();
  }
  injectGiftStyles();

  const state = {
    recipients: normalizeGiftRecipients(options.recipients),
    gifts: normalizeGiftItems(options.gifts),
    selectedRecipients: new Set(options.selectedRecipientIds || []),
    recipientOpen: Boolean(options.recipientOpen),
    moreOpen: Boolean(options.moreOpen),
    balance: Object.assign({}, GiftDefaultBalance, options.balance || {})
  };
  const panelMotionDuration = Number.isFinite(options.motionDuration)
    ? options.motionDuration
    : GiftPanelMotionDuration;

  const root = document.createElement('div');
  root.style.setProperty('--nn-gift-panel-motion-duration', `${panelMotionDuration}ms`);

  function rerender() {
    if (root.__nnGiftCardLayoutObserver) {
      root.__nnGiftCardLayoutObserver.disconnect();
      root.__nnGiftCardLayoutObserver = null;
    }
    if (root.__nnGiftCardLayoutCleanup) {
      root.__nnGiftCardLayoutCleanup();
      root.__nnGiftCardLayoutCleanup = null;
    }

    root.innerHTML = '';
    root.className = [
      'nn-gift',
      state.recipientOpen ? 'is-recipient-open' : '',
      state.moreOpen ? 'is-more-open' : ''
    ].filter(Boolean).join(' ');

    const main = document.createElement('div');
    main.className = 'nn-gift__main';

    const bar = document.createElement('div');
    bar.className = 'nn-gift__bar';

    const recipient = document.createElement('button');
    recipient.type = 'button';
    recipient.className = 'nn-gift__recipient';
    recipient.appendChild(createGiftRecipientSummary(state.recipients, state.selectedRecipients, state.recipientOpen));
    recipient.addEventListener('click', function(event) {
      event.stopPropagation();
      state.recipientOpen = !state.recipientOpen;
      state.moreOpen = false;
      rerender();
    });
    recipient.appendChild(createGiftRecipientPopover(state, rerender));
    bar.appendChild(recipient);

    const listWrap = document.createElement('div');
    listWrap.className = 'nn-gift__list-wrap';
    const list = document.createElement('div');
    list.className = 'nn-gift__list';
    state.gifts.forEach(function(item) {
      list.appendChild(createGiftCard(item, {
        selectedRecipientCount: state.selectedRecipients.size,
        balance: state.balance,
        onNeedRecipient: function() {
          state.recipientOpen = true;
          rerender();
        },
        onSelect: function(id) {
          if (typeof options.onGiftChange === 'function') {
            options.onGiftChange(id);
          }
        },
        onSend: function(id, quantity) {
          if (typeof options.onGiftChange === 'function') {
            options.onGiftChange(id, quantity);
          }
        }
      }));
    });
    listWrap.appendChild(list);
    bar.appendChild(listWrap);
    bar.appendChild(createGiftMoreAction(options.onMore, state.moreOpen, function() {
      state.moreOpen = !state.moreOpen;
      state.recipientOpen = false;
      rerender();
    }));
    if (state.moreOpen) {
      bar.appendChild(createGiftMorePopover(state, rerender, options));
    }
    setupGiftCardLayout(root, listWrap);
    main.appendChild(bar);
    main.appendChild(createGiftBalance(state.balance));
    root.appendChild(main);

    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'nn-gift__close';
    close.setAttribute('aria-label', '关闭礼物栏');
    close.appendChild(createGiftInlineIcon('nicon-a-close-boldguanbi-jiacu'));
    close.addEventListener('click', function(event) {
      event.stopPropagation();
      if (root.classList.contains('is-closing')) return;
      if (typeof options.onBeforeClose === 'function') {
        options.onBeforeClose();
      }
      root.classList.add('is-closing');
      function finishGiftClose(event) {
        if (event.target !== root || event.animationName !== 'nn-gift-slide-out') return;
        root.removeEventListener('animationend', finishGiftClose);
        root.classList.remove('is-closing');
        root.classList.add('is-hidden');
        if (typeof options.onClose === 'function') {
          options.onClose();
        }
      }
      root.addEventListener('animationend', finishGiftClose);
    });
    root.appendChild(close);
  }

  rerender();

  document.addEventListener('click', function(event) {
    if ((!state.recipientOpen && !state.moreOpen) || root.contains(event.target)) return;
    state.recipientOpen = false;
    state.moreOpen = false;
    rerender();
  });

  return root;
}

function renderGiftBar(container, options = {}) {
  if (!container) return null;
  container.innerHTML = '';
  const gift = createGiftBar(options);
  container.appendChild(gift);
  return gift;
}

if (typeof window !== 'undefined') {
  window.GiftDefaultRecipients = GiftDefaultRecipients;
  window.GiftDefaultItems = GiftDefaultItems;
  window.injectGiftStyles = injectGiftStyles;
  window.createGiftBar = createGiftBar;
  window.renderGiftBar = renderGiftBar;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    GiftDefaultRecipients,
    GiftDefaultItems,
    injectGiftStyles,
    createGiftBar,
    renderGiftBar
  };
}
