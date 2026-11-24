const EmptyStyles = `
  .nn-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    color: var(--gray-6);
    font-family: var(--font-family-main);
    text-align: center;
  }

  .nn-empty--page {
    width: 306px;
    gap: var(--space20);
    padding: var(--space40) var(--space20);
  }

  .nn-empty--popup {
    width: 224px;
    gap: var(--space10);
    padding: var(--space20);
  }

  .nn-empty__image-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex: 0 0 auto;
  }

  .nn-empty--page .nn-empty__image-wrap {
    width: 266px;
    height: 160px;
  }

  .nn-empty--popup .nn-empty__image-wrap {
    width: 182.875px;
    height: 110px;
  }

  .nn-empty__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .nn-empty__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 0;
    text-align: center;
  }

  .nn-empty--page .nn-empty__text {
    gap: var(--space8);
  }

  .nn-empty--popup .nn-empty__text {
    gap: var(--space4);
  }

  .nn-empty__title {
    width: 100%;
    margin: var(--space0);
    color: var(--gray-5);
    font-size: 16px;
    font-weight: var(--font-weight-medium);
    line-height: 22px;
    overflow-wrap: anywhere;
  }

  .nn-empty__description {
    width: 100%;
    margin: var(--space0);
    color: var(--gray-7);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
    overflow-wrap: anywhere;
  }

  .nn-empty__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
  }

  .nn-empty--page .nn-empty__actions {
    gap: var(--space20);
  }

  .nn-empty--popup .nn-empty__actions {
    gap: var(--space12);
    height: 24px;
  }

  .nn-empty--page .nn-empty__actions--single {
    padding: var(--space0) var(--space60);
  }

  .nn-empty--popup .nn-empty__actions--single {
    padding: var(--space0) var(--space32);
  }

  .nn-empty__actions .nn-btn {
    flex: 1 1 0;
    width: 100%;
  }

  .nn-empty--page .nn-empty__actions .nn-btn {
    min-width: 86px;
    min-height: 32px;
  }

  .nn-empty--popup .nn-empty__actions .nn-btn {
    min-width: 64px;
    height: 24px;
    min-height: 24px;
  }
`;

const EmptyImageMap = {
  search: '../image/Empty/类型=1,状态=搜索结果为空.png',
  team: '../image/Empty/类型=2,状态=无组队信息.png',
  placeholder: '../image/Empty/类型=3,状态=空占位.png',
  message: '../image/Empty/类型=4,状态=暂无消息.png',
  order: '../image/Empty/类型=5,状态=暂无订单.png',
  network: '../image/Empty/类型=6,状态=网络不好.png',
  common: '../image/Empty/类型=6,状态=通用.png'
};

const EmptyPresetMap = {
  search: {
    title: '暂无搜索',
    description: '没有找到你想要搜索的内容，看看别的吧～'
  },
  team: {
    title: '暂无组队',
    description: '暂时没有可加入的组队信息'
  },
  placeholder: {
    title: '暂无内容',
    description: '这里还没有任何内容'
  },
  message: {
    title: '暂无消息',
    description: '有新消息时会在这里展示'
  },
  order: {
    title: '暂无订单',
    description: '完成下单后可在这里查看订单'
  },
  network: {
    title: '网络不好',
    description: '网络开小差了，请稍后重试'
  },
  common: {
    title: '暂无数据',
    description: '当前暂无可展示的数据'
  }
};

function injectEmptyStyles() {
  if (document.getElementById('nn-empty-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-empty-styles';
  style.textContent = EmptyStyles;
  document.head.appendChild(style);
}

function createEmptyAction(options = {}, scene = 'page') {
  const actionOptions = Object.assign({
    text: 'Button',
    variant: 'system',
    level: 'primary',
    size: scene === 'popup' ? 'small' : 'default'
  }, options);

  if (typeof window !== 'undefined' && typeof window.createButton === 'function') {
    return window.createButton(actionOptions);
  }

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'nn-empty__fallback-button';
  button.textContent = actionOptions.text;
  return button;
}

function createEmpty(options = {}) {
  injectEmptyStyles();

  const {
    scene = 'page',
    type = 'common',
    imageSrc = null,
    title = null,
    description = null,
    showDescription = true,
    actions = [
      { text: 'Button', variant: 'system', level: 'primary' },
      { text: 'Button', variant: 'system', level: 'secondary' }
    ],
    showActions = true,
    paddingTop = null,
    paddingBottom = null,
    className = '',
    id = ''
  } = options;

  const normalizedScene = scene === 'popup' ? 'popup' : 'page';
  const normalizedType = EmptyPresetMap[type] ? type : 'common';
  const preset = EmptyPresetMap[normalizedType];
  const resolvedTitle = title || preset.title;
  const resolvedDescription = description || preset.description;
  const resolvedImageSrc = imageSrc || EmptyImageMap[normalizedType] || EmptyImageMap.common;
  const empty = document.createElement('div');
  empty.className = ['nn-empty', `nn-empty--${normalizedScene}`, className].filter(Boolean).join(' ');
  if (id) empty.id = id;
  if (paddingTop !== null || paddingBottom !== null) {
    const defaultHorizontalPadding = normalizedScene === 'popup' ? '20px' : '20px';
    const defaultVerticalPadding = normalizedScene === 'popup' ? '20px' : '40px';
    const top = paddingTop !== null ? `${Number(paddingTop)}px` : defaultVerticalPadding;
    const bottom = paddingBottom !== null ? `${Number(paddingBottom)}px` : defaultVerticalPadding;
    empty.style.padding = `${top} ${defaultHorizontalPadding} ${bottom}`;
  }

  const imageWrap = document.createElement('div');
  imageWrap.className = 'nn-empty__image-wrap';
  const image = document.createElement('img');
  image.className = 'nn-empty__image';
  image.src = resolvedImageSrc;
  image.alt = resolvedTitle;
  imageWrap.appendChild(image);
  empty.appendChild(imageWrap);

  const textWrap = document.createElement('div');
  textWrap.className = 'nn-empty__text';
  const titleEl = document.createElement('p');
  titleEl.className = 'nn-empty__title';
  titleEl.textContent = resolvedTitle;
  textWrap.appendChild(titleEl);

  if (showDescription && resolvedDescription) {
    const descEl = document.createElement('p');
    descEl.className = 'nn-empty__description';
    descEl.textContent = resolvedDescription;
    textWrap.appendChild(descEl);
  }
  empty.appendChild(textWrap);

  if (showActions && actions && actions.length) {
    const visibleActions = actions.slice(0, 2);
    const actionsWrap = document.createElement('div');
    actionsWrap.className = [
      'nn-empty__actions',
      visibleActions.length === 1 ? 'nn-empty__actions--single' : ''
    ].filter(Boolean).join(' ');

    visibleActions.forEach(function(action) {
      actionsWrap.appendChild(createEmptyAction(action, normalizedScene));
    });
    empty.appendChild(actionsWrap);
  }

  return empty;
}

function createEmptyPage(options = {}) {
  return createEmpty(Object.assign({ scene: 'page' }, options));
}

function createEmptyPopup(options = {}) {
  return createEmpty(Object.assign({ scene: 'popup' }, options));
}

if (typeof window !== 'undefined') {
  window.injectEmptyStyles = injectEmptyStyles;
  window.createEmpty = createEmpty;
  window.createEmptyPage = createEmptyPage;
  window.createEmptyPopup = createEmptyPopup;
  window.EmptyImageMap = EmptyImageMap;
  window.EmptyPresetMap = EmptyPresetMap;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectEmptyStyles,
    createEmpty,
    createEmptyPage,
    createEmptyPopup,
    EmptyImageMap,
    EmptyPresetMap
  };
}
