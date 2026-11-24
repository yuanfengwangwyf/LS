const AcceleratorImageCarouselStyles = `
  .accelerator-image-carousel {
    position: relative;
    width: 100%;
    aspect-ratio: 928 / 220;
    overflow: hidden;
    background: var(--gray-9);
    font-family: var(--font-family-main);
    isolation: isolate;
  }

  .accelerator-image-carousel--banner {
    aspect-ratio: 1000 / 150;
    border-radius: var(--border-radius-4r);
  }

  .accelerator-image-carousel--banner .accelerator-image-carousel__navigation {
    backdrop-filter: blur(16px);
  }

  .accelerator-image-carousel--banner .accelerator-image-carousel__navigation-item {
    flex: 0 0 40px;
    min-height: 40px;
    transition: flex-basis 0.16s ease, background-color 0.16s ease;
  }

  .accelerator-image-carousel--banner .accelerator-image-carousel__navigation-item:hover,
  .accelerator-image-carousel--banner .accelerator-image-carousel__navigation-item:focus,
  .accelerator-image-carousel--banner .accelerator-image-carousel__navigation-item.is-hovered,
  .accelerator-image-carousel--banner .accelerator-image-carousel__navigation-item.is-active {
    flex-basis: 70px;
  }

  .accelerator-image-carousel__slides {
    position: absolute;
    inset: var(--space0);
    z-index: 0;
  }

  .accelerator-image-carousel__slide {
    position: absolute;
    inset: var(--space0);
    opacity: 0;
    transition: opacity 0.32s ease;
  }

  .accelerator-image-carousel__slide.is-active {
    z-index: 1;
    opacity: 1;
  }

  .accelerator-image-carousel__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  .accelerator-image-carousel__navigation {
    position: absolute;
    top: var(--space0);
    right: var(--space0);
    bottom: var(--space0);
    z-index: 2;
    display: flex;
    flex-direction: column;
    width: 160px;
    max-width: 240px;
    background:
      linear-gradient(var(--White-A10), var(--White-A10)),
      linear-gradient(var(--Black-A40), var(--Black-A40));
  }

  .accelerator-image-carousel__navigation-item {
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    min-height: 70px;
    padding: var(--space8) var(--space12);
    overflow: hidden;
    border: 0;
    box-sizing: border-box;
    background: transparent;
    color: var(--Neutral-0);
    font-family: var(--font-family-main);
    text-align: left;
    white-space: nowrap;
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    transition: background-color 0.16s ease;
  }

  .accelerator-image-carousel__navigation-item:hover,
  .accelerator-image-carousel__navigation-item:focus,
  .accelerator-image-carousel__navigation-item.is-hovered,
  .accelerator-image-carousel__navigation-item.is-active {
    outline: none;
    background: var(--White-A4);
  }

  .accelerator-image-carousel__title,
  .accelerator-image-carousel__subtitle {
    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .accelerator-image-carousel__title {
    color: var(--Neutral-0);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-body);
  }

  .accelerator-image-carousel__subtitle {
    max-height: 0;
    margin-top: var(--space0);
    color: var(--White-A70);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
    opacity: 0;
    transition: max-height 0.16s ease, margin-top 0.16s ease, opacity 0.16s ease;
  }

  .accelerator-image-carousel__navigation-item:hover .accelerator-image-carousel__subtitle,
  .accelerator-image-carousel__navigation-item:focus .accelerator-image-carousel__subtitle,
  .accelerator-image-carousel__navigation-item.is-hovered .accelerator-image-carousel__subtitle,
  .accelerator-image-carousel__navigation-item.is-active .accelerator-image-carousel__subtitle {
    max-height: var(--line-height-caption);
    margin-top: var(--space6);
    opacity: 1;
  }

  .accelerator-image-carousel--search {
    height: 100px;
    aspect-ratio: auto;
    border-radius: var(--border-radius-2r);
  }

  .accelerator-image-carousel--search .accelerator-image-carousel__navigation {
    top: auto;
    right: var(--space0);
    bottom: var(--space0);
    left: var(--space0);
    width: 100%;
    max-width: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--space4);
    background: transparent;
  }

  .accelerator-image-carousel--search .accelerator-image-carousel__navigation-item {
    flex: 0 0 12px;
    width: 12px;
    min-height: 0;
    height: 20px;
    padding: var(--space0);
    overflow: visible;
    justify-content: center;
    background: transparent;
  }

  .accelerator-image-carousel--search .accelerator-image-carousel__navigation-item::after {
    content: '';
    width: 100%;
    height: 3px;
    border-radius: var(--border-radius-2r);
    background: var(--White-A30);
  }

  .accelerator-image-carousel--search .accelerator-image-carousel__navigation-item.is-active {
    flex-basis: 24px;
    width: 24px;
  }

  .accelerator-image-carousel--search .accelerator-image-carousel__navigation-item.is-active::after {
    background: var(--White-A90);
  }

  .accelerator-image-carousel--search .accelerator-image-carousel__navigation-item:focus-visible {
    outline: 1px solid var(--White-A90);
  }

  @media (max-width: 720px) {
    .accelerator-image-carousel__navigation {
      width: 140px;
    }

    .accelerator-image-carousel__navigation-item {
      padding: var(--space6) var(--space10);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .accelerator-image-carousel__slide,
    .accelerator-image-carousel__navigation-item,
    .accelerator-image-carousel__subtitle {
      transition: none;
    }
  }
`;

const AcceleratorImageCarouselDefaultItems = [
  {
    title: '和平精英模拟器',
    subtitle: '官方4K高清手游数据互通',
    imageSrc: '../image/Community/banner1.png'
  },
  {
    title: '雷神暑假嘉年华',
    subtitle: '多重福利限时开放',
    imageSrc: '../image/Community/banner2.png'
  },
  {
    title: '雷神8周年',
    subtitle: '周年活动火热进行中',
    imageSrc: '../image/Community/banner3.png'
  }
];

const AcceleratorBannerCarouselDefaultItems = [
  {
    title: '无畏契约周年好礼',
    subtitle: '周年送祝福得好礼',
    imageSrc: '../image/Steam achievements/banner1.png'
  },
  {
    title: 'PUBG: BATTLEGROUNDS',
    subtitle: 'UGC地图下载使用流程',
    imageSrc: '../image/Steam achievements/banner2.png'
  },
  {
    title: '影之刃零',
    subtitle: '0元得《影之刃零》',
    imageSrc: '../image/Steam achievements/banner3.png'
  }
];

const AcceleratorSearchCarouselDefaultItems = [
  { title: '无畏契约周年好礼', imageSrc: '../image/Steam%20achievements/banner1.png' },
  { title: 'PUBG: BATTLEGROUNDS', imageSrc: '../image/Steam%20achievements/banner2.png' },
  { title: '影之刃零', imageSrc: '../image/Steam%20achievements/banner3.png' }
];

function injectAcceleratorImageCarouselStyles() {
  if (document.getElementById('accelerator-image-carousel-styles')) return;

  const style = document.createElement('style');
  style.id = 'accelerator-image-carousel-styles';
  style.textContent = AcceleratorImageCarouselStyles;
  document.head.appendChild(style);
}

function normalizeAcceleratorImageCarouselItems(items, fallbackItems) {
  const sourceItems = Array.isArray(items) && items.length
    ? items
    : fallbackItems;

  return sourceItems.map(function(item, index) {
    return {
      title: item.title || `轮播项${index + 1}`,
      subtitle: item.subtitle || '',
      imageSrc: item.imageSrc || '../image/Community/banner1.png'
    };
  });
}

function createAcceleratorImageCarousel(options = {}) {
  injectAcceleratorImageCarouselStyles();

  const variant = ['banner', 'search'].includes(options.variant) ? options.variant : 'home';
  const fallbackItems = variant === 'search' ? AcceleratorSearchCarouselDefaultItems : variant === 'banner'
    ? AcceleratorBannerCarouselDefaultItems
    : AcceleratorImageCarouselDefaultItems;
  const carouselItems = normalizeAcceleratorImageCarouselItems(options.items, fallbackItems);
  const autoplay = options.autoplay !== false;
  const autoplayDuration = Math.max(1000, Number(options.autoplayDuration) || 5000);
  const initialIndex = Math.max(0, Math.min(carouselItems.length - 1, Number(options.defaultActive) || 0));
  let currentIndex = initialIndex;
  let autoplayTimer = null;
  let hoveredIndex = -1;

  const root = document.createElement('section');
  root.className = [
    'accelerator-image-carousel',
    `accelerator-image-carousel--${variant}`,
    options.className || ''
  ].filter(Boolean).join(' ');
  root.setAttribute('aria-label', options.ariaLabel || (variant === 'banner' ? '横幅轮播' : '加速器图片轮播'));

  const slides = document.createElement('div');
  slides.className = 'accelerator-image-carousel__slides';

  const navigation = document.createElement('div');
  navigation.className = 'accelerator-image-carousel__navigation';
  navigation.setAttribute('role', 'tablist');
  navigation.setAttribute('aria-label', '轮播图导航');

  const slideElements = [];
  const navigationItems = [];

  function setHovered(nextIndex) {
    hoveredIndex = nextIndex;
    navigationItems.forEach(function(itemElement, index) {
      itemElement.classList.toggle('is-hovered', index === hoveredIndex);
    });
  }

  function setActive(nextIndex, shouldNotify) {
    const normalizedIndex = Math.max(0, Math.min(carouselItems.length - 1, Number(nextIndex) || 0));
    const changed = normalizedIndex !== currentIndex;
    currentIndex = normalizedIndex;

    slideElements.forEach(function(slideElement, index) {
      slideElement.classList.toggle('is-active', index === currentIndex);
      slideElement.setAttribute('aria-hidden', index === currentIndex ? 'false' : 'true');
    });
    navigationItems.forEach(function(itemElement, index) {
      itemElement.classList.toggle('is-active', index === currentIndex);
      itemElement.setAttribute('aria-selected', index === currentIndex ? 'true' : 'false');
      itemElement.tabIndex = index === currentIndex ? 0 : -1;
    });

    if (changed && shouldNotify && typeof options.onChange === 'function') {
      options.onChange({ index: currentIndex, item: carouselItems[currentIndex], items: carouselItems.slice() });
    }
  }

  function stopAutoplay() {
    if (autoplayTimer !== null) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function startAutoplay() {
    stopAutoplay();
    if (!autoplay || carouselItems.length <= 1) return;
    autoplayTimer = setInterval(function() {
      if (!root.isConnected) {
        stopAutoplay();
        return;
      }
      setActive((currentIndex + 1) % carouselItems.length, true);
    }, autoplayDuration);
  }

  carouselItems.forEach(function(item, index) {
    const slide = document.createElement('div');
    slide.className = 'accelerator-image-carousel__slide';
    slide.id = `accelerator-image-carousel-slide-${Date.now()}-${index}`;

    const image = document.createElement('img');
    image.className = 'accelerator-image-carousel__image';
    image.src = item.imageSrc;
    image.alt = item.title;
    slide.appendChild(image);
    slides.appendChild(slide);
    slideElements.push(slide);

    const navigationItem = document.createElement('button');
    navigationItem.type = 'button';
    navigationItem.className = 'accelerator-image-carousel__navigation-item';
    navigationItem.setAttribute('role', 'tab');
    navigationItem.setAttribute('aria-controls', slide.id);

    const title = document.createElement('span');
    title.className = 'accelerator-image-carousel__title';
    title.textContent = item.title;
    if (variant !== 'search') navigationItem.appendChild(title);

    const subtitle = document.createElement('span');
    subtitle.className = 'accelerator-image-carousel__subtitle';
    subtitle.textContent = item.subtitle;
    if (variant !== 'search') navigationItem.appendChild(subtitle);
    if (variant === 'search') navigationItem.setAttribute('aria-label', item.title);

    navigationItem.addEventListener('mouseenter', function() {
      stopAutoplay();
      setHovered(index);
      setActive(index, true);
    });
    navigationItem.addEventListener('mouseleave', function() {
      setHovered(-1);
    });
    navigationItem.addEventListener('focus', function() {
      stopAutoplay();
      setHovered(index);
      setActive(index, true);
    });
    navigationItem.addEventListener('blur', function() {
      setHovered(-1);
    });
    navigationItem.addEventListener('click', function() {
      setActive(index, true);
    });
    navigationItem.addEventListener('keydown', function(event) {
      if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;

      event.preventDefault();
      let nextIndex = currentIndex;
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % carouselItems.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = carouselItems.length - 1;
      setActive(nextIndex, true);
      setHovered(nextIndex);
      navigationItems[nextIndex].focus();
    });

    navigation.appendChild(navigationItem);
    navigationItems.push(navigationItem);
  });

  root.addEventListener('mouseenter', stopAutoplay);
  root.addEventListener('mouseleave', function() {
    setHovered(-1);
    startAutoplay();
  });
  root.addEventListener('focusin', stopAutoplay);
  root.addEventListener('focusout', function(event) {
    if (!root.contains(event.relatedTarget)) startAutoplay();
  });

  root.appendChild(slides);
  root.appendChild(navigation);
  root.slides = slideElements;
  root.navigationItems = navigationItems;
  root.setActive = function(index) {
    setActive(index, true);
    startAutoplay();
  };
  root.play = startAutoplay;
  root.pause = stopAutoplay;
  root.destroy = stopAutoplay;

  setActive(initialIndex, false);
  startAutoplay();
  return root;
}

window.injectAcceleratorImageCarouselStyles = injectAcceleratorImageCarouselStyles;
window.createAcceleratorImageCarousel = createAcceleratorImageCarousel;

