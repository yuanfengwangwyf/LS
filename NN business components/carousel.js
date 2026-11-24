const CarouselStyles = `
  .nn-carousel {
    --nn-carousel-tab-width: 310px;
    --nn-carousel-panel-padding-y: 8px;
    --nn-carousel-tab-padding-y: 14px;
    --nn-carousel-item-font-size: 14px;
    --nn-carousel-item-line-height: 20px;
    --nn-carousel-active-font-size: 18px;
    --nn-carousel-active-line-height: 24px;
    --nn-carousel-progress-duration: 5000ms;
    position: relative;
    width: 100%;
    min-width: 866px;
    max-width: 1200px;
    aspect-ratio: 1200 / 297;
    overflow: hidden;
    border-radius: var(--border-radius-4r);
    background: var(--gray-9);
    font-family: var(--font-family-main);
    isolation: isolate;
  }

  .nn-carousel.is-wide {
    --nn-carousel-panel-padding-y: 12px;
    --nn-carousel-tab-padding-y: 14px;
    --nn-carousel-item-font-size: 16px;
    --nn-carousel-item-line-height: 22px;
    --nn-carousel-active-font-size: 20px;
    --nn-carousel-active-line-height: 28px;
  }

  .nn-carousel__slides {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .nn-carousel__slide {
    position: absolute;
    inset: 0;
    z-index: 0;
    opacity: 0;
    transition: opacity 560ms ease;
    will-change: opacity;
  }

  .nn-carousel__slide.is-active {
    z-index: 2;
    opacity: 1;
  }

  .nn-carousel__slide.is-leaving {
    z-index: 1;
  }

  .nn-carousel__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  .nn-carousel__tabs {
    position: absolute;
    inset: 0 0 0 auto;
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: var(--nn-carousel-tab-width);
    padding: var(--nn-carousel-panel-padding-y) var(--space0);
    box-sizing: border-box;
  }

  .nn-carousel__tab {
    --nn-carousel-accent-rgb: var(--nn-carousel-fallback-accent-rgb);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1 1 0;
    min-height: 0;
    width: 100%;
    padding: var(--nn-carousel-tab-padding-y) var(--space32) var(--nn-carousel-tab-padding-y) var(--space16);
    overflow: hidden;
    border-style: solid;
    border-width: 1px 0;
    border-color: transparent;
    border-image-slice: 1;
    border-image-source: none;
    background: transparent;
    box-sizing: border-box;
    color: var(--White-A70);
    font: inherit;
    text-align: right;
    text-shadow: 0 1px 1px var(--Black-A10);
    white-space: nowrap;
    cursor: pointer;
    transition: color 180ms ease, background 180ms ease;
  }

  .nn-carousel__tab-text {
    position: relative;
    z-index: 2;
    display: block;
    max-width: 300px;
    overflow: hidden;
    font-size: var(--nn-carousel-item-font-size);
    font-weight: var(--font-weight-normal);
    line-height: var(--nn-carousel-item-line-height);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-carousel__tab:hover {
    color: var(--White-A90);
  }

  .nn-carousel__tab.is-active {
    border-color: rgba(var(--nn-carousel-accent-rgb), 0.62);
    border-image-source: linear-gradient(90deg, rgba(var(--nn-carousel-accent-rgb), 0) 0%, rgba(var(--nn-carousel-accent-rgb), 0.18) 42%, rgba(var(--nn-carousel-accent-rgb), 0.62) 100%);
    background:
      radial-gradient(ellipse 274px 17px at 84% 100%, rgba(var(--nn-carousel-accent-rgb), 0.4) 0%, rgba(var(--nn-carousel-accent-rgb), 0) 100%),
      radial-gradient(ellipse 279px 17px at 82% 0%, rgba(var(--nn-carousel-accent-rgb), 0.4) 0%, rgba(var(--nn-carousel-accent-rgb), 0) 100%),
      linear-gradient(90deg, rgba(var(--nn-carousel-accent-rgb), 0) 0%, rgba(var(--nn-carousel-accent-rgb), 0.3) 56.568%);
    color: var(--Neutral-0);
  }

  .nn-carousel__progress {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 0;
    width: 0%;
    height: 100%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.18) 0%, rgba(var(--nn-carousel-accent-rgb), 0.16) 48%, rgba(var(--nn-carousel-accent-rgb), 0.04) 100%);
    opacity: 0;
    pointer-events: none;
  }

  .nn-carousel__progress::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background: rgb(255 255 255 / 9%);
    box-shadow: 0 0 10px rgba(var(--nn-carousel-accent-rgb), 0.42);
    pointer-events: none;
  }

  .nn-carousel.is-progressing .nn-carousel__tab.is-active .nn-carousel__progress {
    opacity: 1;
    animation: nn-carousel-progress var(--nn-carousel-progress-duration) linear forwards;
  }

  @keyframes nn-carousel-progress {
    0% {
      width: 0%;
      opacity: 1;
    }

    75% {
      width: 75%;
      opacity: 1;
    }

    100% {
      width: 100%;
      opacity: 0;
    }
  }

  .nn-carousel.is-wide .nn-carousel__tab.is-active {
    background:
      radial-gradient(ellipse 274px 23px at 84% 100%, rgba(var(--nn-carousel-accent-rgb), 0.4) 0%, rgba(var(--nn-carousel-accent-rgb), 0) 100%),
      radial-gradient(ellipse 279px 23px at 82% 0%, rgba(var(--nn-carousel-accent-rgb), 0.4) 0%, rgba(var(--nn-carousel-accent-rgb), 0) 100%),
      linear-gradient(90deg, rgba(var(--nn-carousel-accent-rgb), 0) 0%, rgba(var(--nn-carousel-accent-rgb), 0.3) 56.568%);
  }

  .nn-carousel__tab.is-active .nn-carousel__tab-text {
    font-size: var(--nn-carousel-active-font-size);
    font-weight: var(--font-weight-semibold);
    line-height: var(--nn-carousel-active-line-height);
  }

  @media (max-width: 900px) {
    .nn-carousel {
      --nn-carousel-tab-width: 36%;
    }

    .nn-carousel__tab {
      padding-right: var(--space20);
      padding-left: var(--space12);
    }

    .nn-carousel__tab-text {
      max-width: 100%;
    }
  }

  .nn-media-carousel {
    --nn-media-carousel-width: 882px;
    --nn-media-carousel-max-width: 1200px;
    position: relative;
    display: grid;
    width: min(100%, var(--nn-media-carousel-width));
    max-width: var(--nn-media-carousel-max-width);
    grid-template-columns: minmax(0, 1fr) minmax(170px, 19.27%);
    gap: var(--space0);
    overflow: hidden;
    border-radius: var(--border-radius-4r);
    background: var(--gray-10);
    font-family: var(--font-family-main);
    isolation: isolate;
  }

  .nn-media-carousel__media {
    position: relative;
    min-width: 0;
    aspect-ratio: 16 / 9;
  }

  .nn-media-carousel__media > .nn-video-player {
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius-4r);
    isolation: auto;
  }

  .nn-media-carousel__media-image {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius-4r);
    object-fit: cover;
  }

  .nn-media-carousel__media-image[hidden] {
    display: none;
  }

  .nn-media-carousel__media .nn-video-player__media {
    position: relative;
    z-index: 0;
  }

  .nn-media-carousel__media .nn-video-player__overlay {
    z-index: auto;
    background: none;
  }

  .nn-media-carousel .nn-media-carousel__media .nn-video-player .nn-video-player__overlay {
    opacity: 1;
  }

  .nn-media-carousel__control-mask {
    position: absolute;
    inset: 0;
    z-index: 4;
    background: linear-gradient(180deg, var(--Black-A0) 47%, var(--Black-A90) 100%);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
  }

  .nn-media-carousel__control-mask.is-visible {
    opacity: 1;
  }

  .nn-media-carousel__media .nn-video-player__toolbar {
    z-index: 6;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
  }

  .nn-media-carousel__media .nn-video-player:hover .nn-video-player__toolbar,
  .nn-media-carousel__media .nn-video-player:focus-within .nn-video-player__toolbar {
    opacity: 1;
  }

  .nn-media-carousel__media .nn-video-player:hover .nn-video-player__toolbar,
  .nn-media-carousel__media .nn-video-player:focus-within .nn-video-player__toolbar {
    pointer-events: auto;
  }

  .nn-media-carousel__video-ambient {
    position: absolute;
    inset: 0;
    pointer-events: none;
    -webkit-mask: linear-gradient(270deg, black 22%, transparent 42%) center / 100% 100% no-repeat;
    mask: linear-gradient(270deg, black 22%, transparent 42%) center / 100% 100% no-repeat;
    mask-mode: alpha;
  }

  .nn-media-carousel__video-ambient {
    z-index: 3;
  }

  .nn-media-carousel__video-ambient-image,
  .nn-media-carousel__video-ambient-media {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    filter: blur(25px);
    transform: scale(1.4);
    transform-origin: center;
  }

  .nn-media-carousel__video-ambient-image {
    background-position: center;
    background-size: cover;
  }

  .nn-media-carousel__video-ambient-image[hidden],
  .nn-media-carousel__video-ambient-media[hidden] {
    display: none;
  }

  .nn-media-carousel__sidebar {
    position: relative;
    z-index: 5;
    min-width: 0;
    overflow: hidden;
  }

  .nn-media-carousel__viewport {
    position: absolute;
    inset: 0;
    z-index: 2;
    padding: var(--space8);
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    scroll-behavior: smooth;
    scroll-snap-type: y proximity;
    scroll-padding-block: var(--space8);
    scrollbar-width: none;
  }

  .nn-media-carousel__viewport::-webkit-scrollbar {
    display: none;
  }

  .nn-media-carousel__track {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    gap: var(--space10);
  }

  .nn-media-carousel__viewport[data-scrollable="false"] .nn-media-carousel__track {
    justify-content: center;
  }

  .nn-media-carousel__viewport[data-scrollable="true"] .nn-media-carousel__track::after {
    content: "";
    flex: 0 0 var(--space8);
    margin-top: calc(var(--space10) * -1);
  }

  .nn-media-carousel:hover .nn-media-carousel__viewport[data-fade-top="true"][data-fade-bottom="true"],
  .nn-media-carousel:focus-within .nn-media-carousel__viewport[data-fade-top="true"][data-fade-bottom="true"] {
    -webkit-mask: linear-gradient(180deg, transparent 0, black 72px, black calc(100% - 72px), transparent 100%);
    mask: linear-gradient(180deg, transparent 0, black 72px, black calc(100% - 72px), transparent 100%);
  }

  .nn-media-carousel:hover .nn-media-carousel__viewport[data-fade-top="true"][data-fade-bottom="false"],
  .nn-media-carousel:focus-within .nn-media-carousel__viewport[data-fade-top="true"][data-fade-bottom="false"] {
    -webkit-mask: linear-gradient(180deg, transparent 0, black 72px, black 100%);
    mask: linear-gradient(180deg, transparent 0, black 72px, black 100%);
  }

  .nn-media-carousel:hover .nn-media-carousel__viewport[data-fade-top="false"][data-fade-bottom="true"],
  .nn-media-carousel:focus-within .nn-media-carousel__viewport[data-fade-top="false"][data-fade-bottom="true"] {
    -webkit-mask: linear-gradient(180deg, black 0, black calc(100% - 72px), transparent 100%);
    mask: linear-gradient(180deg, black 0, black calc(100% - 72px), transparent 100%);
  }

  .nn-media-carousel__thumb {
    position: relative;
    display: block;
    flex: 0 0 calc((100% - (var(--space10) * 3)) / 4);
    width: 100%;
    height: calc((100% - (var(--space10) * 3)) / 4);
    aspect-ratio: 16 / 9;
    padding: var(--space0);
    overflow: hidden;
    border: 2px solid transparent;
    border-radius: var(--border-radius-4r);
    background: transparent;
    box-sizing: border-box;
    cursor: pointer;
    scroll-snap-align: start;
  }

  .nn-media-carousel__thumb:hover,
  .nn-media-carousel__thumb:focus-visible {
    outline: none;
    border-color: var(--White-A60);
  }

  .nn-media-carousel__thumb.is-active {
    border-color: var(--Neutral-0);
  }

  .nn-media-carousel__thumb-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  .nn-media-carousel__edge-control {
    position: absolute;
    right: 0;
    left: 0;
    z-index: 3;
    display: flex;
    height: 72px;
    align-items: center;
    justify-content: center;
    padding: var(--space0);
    border: 0;
    background: transparent;
    color: var(--Neutral-0);
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.16s ease;
  }

  .nn-media-carousel__edge-control--up {
    top: 0;
    align-items: flex-start;
    padding-top: var(--space12);
  }

  .nn-media-carousel__edge-control--up i {
    display: inline-block;
    transform: rotate(180deg);
  }

  .nn-media-carousel__edge-control--down {
    bottom: 0;
    align-items: flex-end;
    padding-bottom: var(--space12);
  }

  .nn-media-carousel__edge-control i {
    font-size: var(--icon-size-x12);
  }

  .nn-media-carousel:hover .nn-media-carousel__edge-control[data-visible="true"],
  .nn-media-carousel:focus-within .nn-media-carousel__edge-control[data-visible="true"] {
    opacity: 1;
    pointer-events: auto;
  }

  @media (max-width: 940px) {
    .nn-media-carousel {
      grid-template-columns: minmax(0, 1fr) minmax(154px, 19.27%);
    }
  }
`;

const defaultCarouselItems = [
  {
    title: '妮姬:胜利女神',
    imageSrc: '../image/Community/banner1.png',
    accentColor: '#528DEF'
  },
  {
    title: '成为工具开发者，享百万分成计划',
    imageSrc: '../image/Community/banner2.png',
    accentColor: '#38B081'
  },
  {
    title: '守望先锋:归来',
    imageSrc: '../image/Community/banner3.png',
    accentColor: '#6467EF'
  },
  {
    title: '星际战甲 (国际服)',
    imageSrc: '../image/Community/banner4.png',
    accentColor: '#F2494F'
  }
];

const NNMediaCarouselAsset = (function() {
  const scriptSource = document.currentScript && document.currentScript.src;
  return function(path) {
    try {
      return new URL(`../image/${path}`, scriptSource || window.location.href).href;
    } catch (error) {
      return `../image/${path}`;
    }
  };
})();

const DefaultMediaCarouselVideo = NNMediaCarouselAsset('Game Detail/monster-hunter-wilds-trailer.mp4');

const defaultMediaCarouselItems = [
  {
    title: 'Monster Hunter Wilds 宣传片',
    mediaType: 'video',
    thumbnailSrc: NNMediaCarouselAsset('Game Detail/monster-hunter-wilds-video-poster.jpg'),
    posterSrc: NNMediaCarouselAsset('Game Detail/monster-hunter-wilds-video-poster.jpg'),
    videoSrc: DefaultMediaCarouselVideo
  },
  {
    title: 'Monster Hunter Wilds 图片 01',
    mediaType: 'image',
    thumbnailSrc: NNMediaCarouselAsset('Game Detail/monster-hunter-wilds-01.jpg')
  },
  {
    title: 'Monster Hunter Wilds 图片 02',
    mediaType: 'image',
    thumbnailSrc: NNMediaCarouselAsset('Game Detail/monster-hunter-wilds-02.jpg')
  },
  {
    title: 'Monster Hunter Wilds 图片 03',
    mediaType: 'image',
    thumbnailSrc: NNMediaCarouselAsset('Game Detail/monster-hunter-wilds-03.jpg')
  },
  {
    title: 'Monster Hunter Wilds 图片 04',
    mediaType: 'image',
    thumbnailSrc: NNMediaCarouselAsset('Game Detail/monster-hunter-wilds-04.jpg')
  },
  {
    title: 'Monster Hunter Wilds 图片 05',
    mediaType: 'image',
    thumbnailSrc: NNMediaCarouselAsset('Game Detail/monster-hunter-wilds-05.jpg')
  }
];
const CarouselFallbackAccentRgb = '255, 255, 255';

function injectCarouselStyles() {
  if (document.getElementById('nn-carousel-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-carousel-styles';
  style.textContent = CarouselStyles;
  document.head.appendChild(style);
}

function normalizeCarouselItems(items) {
  return Array.isArray(items) && items.length
    ? items.map(function(item) {
      return {
        title: item.title || '',
        imageSrc: item.imageSrc || '../image/Community/banner1.png',
        accentColor: item.accentColor || ''
      };
    })
    : defaultCarouselItems.slice();
}

function parseCarouselAccentColor(color) {
  if (!color || typeof color !== 'string') return null;
  const hex = color.trim().match(/^#?([0-9a-f]{6})$/i);
  if (hex) {
    const value = hex[1];
    return [
      parseInt(value.slice(0, 2), 16),
      parseInt(value.slice(2, 4), 16),
      parseInt(value.slice(4, 6), 16)
    ];
  }

  const rgb = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (!rgb) return null;
  return [
    Math.max(0, Math.min(255, Number(rgb[1]) || 0)),
    Math.max(0, Math.min(255, Number(rgb[2]) || 0)),
    Math.max(0, Math.min(255, Number(rgb[3]) || 0))
  ];
}

function setCarouselTabAccent(tab, accent) {
  if (!tab || !accent) return false;
  const parsed = Array.isArray(accent) ? accent : parseCarouselAccentColor(accent);
  if (!parsed) return false;
  tab.style.setProperty('--nn-carousel-accent-rgb', parsed.join(', '));
  return true;
}

function normalizeMediaCarouselItems(items, fallbackVideoSrc) {
  const sourceItems = Array.isArray(items) && items.length ? items : defaultMediaCarouselItems;
  return sourceItems.map(function(item, index) {
    const thumbnailSrc = item.thumbnailSrc || item.imageSrc || defaultMediaCarouselItems[index % defaultMediaCarouselItems.length].thumbnailSrc;
    const requestedMediaType = item.mediaType || item.type;
    const hasVideoSource = Boolean(item.videoSrc || item.src);
    const mediaType = requestedMediaType === 'image'
      ? 'image'
      : (requestedMediaType === 'video' || hasVideoSource || index === 0 ? 'video' : 'image');
    return {
      title: item.title || `媒体 ${index + 1}`,
      mediaType,
      thumbnailSrc,
      posterSrc: item.posterSrc || item.poster || thumbnailSrc,
      videoSrc: mediaType === 'video' ? (item.videoSrc || item.src || fallbackVideoSrc) : ''
    };
  });
}

function createMediaCarousel(options = {}) {
  injectCarouselStyles();

  if (typeof createVideoPlayer !== 'function') {
    throw new Error('createMediaCarousel requires the Video player basic component.');
  }

  const {
    items = defaultMediaCarouselItems,
    defaultActive = 0,
    width = 882,
    maxWidth = 1200,
    videoSrc = DefaultMediaCarouselVideo,
    muted = true,
    className = '',
    ariaLabel = '视频缩略图轮播',
    onChange = null
  } = options;

  const mediaItems = normalizeMediaCarouselItems(items, videoSrc);
  let currentActive = Math.min(mediaItems.length - 1, Math.max(0, Number(defaultActive) || 0));
  const toCssSize = function(value, fallback) {
    if (value == null || value === '') return fallback;
    return typeof value === 'number' ? `${value}px` : String(value);
  };
  const setBackgroundImage = function(element, src) {
    if (!element) return;
    element.style.backgroundImage = src ? `url("${String(src).replace(/"/g, '\\"')}")` : '';
  };

  const root = document.createElement('section');
  root.className = ['nn-media-carousel', className].filter(Boolean).join(' ');
  root.setAttribute('aria-label', ariaLabel);
  root.style.setProperty('--nn-media-carousel-width', toCssSize(width, '882px'));
  root.style.setProperty('--nn-media-carousel-max-width', toCssSize(maxWidth, '1200px'));

  const media = document.createElement('div');
  media.className = 'nn-media-carousel__media';
  const selectedItem = mediaItems[currentActive];
  const initialVideoItem = selectedItem.mediaType === 'video'
    ? selectedItem
    : mediaItems.find(function(item) { return item.mediaType === 'video'; });
  const videoPlayer = createVideoPlayer({
    src: initialVideoItem ? initialVideoItem.videoSrc : '',
    poster: initialVideoItem ? initialVideoItem.posterSrc : '',
    width: '100%',
    height: '100%',
    muted,
    autoplay: true,
    loop: true,
    preload: 'auto',
    showPlaybackRate: false,
    showQuality: false
  });
  const video = videoPlayer._videoPlayer && videoPlayer._videoPlayer.video;
  const mediaImage = document.createElement('img');
  mediaImage.className = 'nn-media-carousel__media-image';
  mediaImage.src = selectedItem.posterSrc;
  mediaImage.alt = selectedItem.title;
  videoPlayer.hidden = selectedItem.mediaType !== 'video';
  mediaImage.hidden = selectedItem.mediaType === 'video';
  const videoAmbient = document.createElement('div');
  videoAmbient.className = 'nn-media-carousel__video-ambient';
  const videoAmbientImage = document.createElement('div');
  videoAmbientImage.className = 'nn-media-carousel__video-ambient-image';
  setBackgroundImage(videoAmbientImage, selectedItem.posterSrc);
  const videoAmbientMedia = document.createElement('video');
  videoAmbientMedia.className = 'nn-media-carousel__video-ambient-media';
  videoAmbientMedia.muted = true;
  videoAmbientMedia.autoplay = true;
  videoAmbientMedia.loop = true;
  videoAmbientMedia.playsInline = true;
  videoAmbientMedia.preload = 'auto';
  videoAmbientMedia.poster = selectedItem.posterSrc;
  videoAmbientMedia.hidden = selectedItem.mediaType !== 'video';
  videoAmbientImage.hidden = selectedItem.mediaType === 'video';
  if (selectedItem.mediaType === 'video') {
    videoAmbientMedia.src = selectedItem.videoSrc;
    videoAmbientMedia.dataset.source = selectedItem.videoSrc;
  }
  videoAmbient.appendChild(videoAmbientImage);
  videoAmbient.appendChild(videoAmbientMedia);
  media.appendChild(videoPlayer);
  media.appendChild(mediaImage);
  const controlMask = document.createElement('div');
  controlMask.className = 'nn-media-carousel__control-mask';
  controlMask.setAttribute('aria-hidden', 'true');

  const showControlMask = function() {
    controlMask.classList.add('is-visible');
  };
  const hideControlMask = function() {
    if (!videoPlayer.matches(':focus-within')) {
      controlMask.classList.remove('is-visible');
    }
  };
  videoPlayer.addEventListener('pointerenter', showControlMask);
  videoPlayer.addEventListener('pointerleave', hideControlMask);
  videoPlayer.addEventListener('focusin', showControlMask);
  videoPlayer.addEventListener('focusout', function(event) {
    if (!videoPlayer.contains(event.relatedTarget)) {
      controlMask.classList.remove('is-visible');
    }
  });

  const syncAmbientVideo = function(forceCurrentTime) {
    if (!video || videoAmbientMedia.hidden) return;
    if (video.readyState > 0 && videoAmbientMedia.readyState > 0) {
      const timeDifference = Math.abs(videoAmbientMedia.currentTime - video.currentTime);
      if (forceCurrentTime || timeDifference > 0.35) {
        videoAmbientMedia.currentTime = video.currentTime;
      }
    }
    videoAmbientMedia.playbackRate = video.playbackRate || 1;
    if (video.paused || video.ended) {
      videoAmbientMedia.pause();
      return;
    }
    const playPromise = videoAmbientMedia.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(function() {});
    }
  };

  const updateAmbientMedia = function(item) {
    const isVideoItem = item.mediaType === 'video';
    setBackgroundImage(videoAmbientImage, item.posterSrc);
    videoAmbientImage.hidden = isVideoItem;
    videoAmbientMedia.hidden = !isVideoItem;
    videoAmbientMedia.poster = item.posterSrc;
    if (!isVideoItem) {
      videoAmbientMedia.pause();
      return;
    }
    if (videoAmbientMedia.dataset.source !== item.videoSrc) {
      videoAmbientMedia.src = item.videoSrc;
      videoAmbientMedia.dataset.source = item.videoSrc;
      videoAmbientMedia.load();
    }
    syncAmbientVideo(true);
  };

  if (video) {
    ['play', 'playing', 'pause', 'seeking', 'seeked', 'ratechange', 'loadedmetadata', 'ended'].forEach(function(eventName) {
      video.addEventListener(eventName, function() {
        syncAmbientVideo(true);
      });
    });
    video.addEventListener('timeupdate', function() {
      syncAmbientVideo(false);
    });
    videoAmbientMedia.addEventListener('loadedmetadata', function() {
      syncAmbientVideo(true);
    });
  }

  const sidebar = document.createElement('div');
  sidebar.className = 'nn-media-carousel__sidebar';

  const viewport = document.createElement('div');
  viewport.className = 'nn-media-carousel__viewport';
  viewport.setAttribute('aria-label', '视频缩略图');
  const track = document.createElement('div');
  track.className = 'nn-media-carousel__track';
  const thumbnailButtons = [];

  const topControl = document.createElement('button');
  topControl.type = 'button';
  topControl.className = 'nn-media-carousel__edge-control nn-media-carousel__edge-control--up';
  topControl.setAttribute('aria-label', '向上浏览');
  topControl.innerHTML = '<i class="nnicon nicon-a-Arrowflattenedbelow-Linejiantoubianxia-xianxing" aria-hidden="true"></i>';

  const bottomControl = document.createElement('button');
  bottomControl.type = 'button';
  bottomControl.className = 'nn-media-carousel__edge-control nn-media-carousel__edge-control--down';
  bottomControl.setAttribute('aria-label', '向下浏览');
  bottomControl.innerHTML = '<i class="nnicon nicon-a-Arrowflattenedbelow-Linejiantoubianxia-xianxing" aria-hidden="true"></i>';

  const updateEdgeControls = function() {
    const tolerance = 2;
    const canScroll = viewport.scrollHeight > viewport.clientHeight + tolerance;
    const canScrollUp = canScroll && viewport.scrollTop > tolerance;
    const canScrollDown = canScroll && viewport.scrollTop + viewport.clientHeight < viewport.scrollHeight - tolerance;
    viewport.dataset.scrollable = canScroll ? 'true' : 'false';
    viewport.dataset.fadeTop = canScrollUp ? 'true' : 'false';
    viewport.dataset.fadeBottom = canScrollDown ? 'true' : 'false';
    topControl.dataset.visible = canScrollUp ? 'true' : 'false';
    bottomControl.dataset.visible = canScrollDown ? 'true' : 'false';
  };

  const scrollOneThumbnail = function(direction) {
    const firstThumbnail = thumbnailButtons[0];
    if (!firstThumbnail) return;
    const gap = parseFloat(window.getComputedStyle(track).rowGap) || 0;
    viewport.scrollBy({
      top: direction * (firstThumbnail.getBoundingClientRect().height + gap),
      behavior: 'smooth'
    });
  };

  const setActive = function(nextIndex, shouldNotify) {
    const safeIndex = Math.min(mediaItems.length - 1, Math.max(0, Number(nextIndex) || 0));
    if (safeIndex === currentActive && thumbnailButtons[safeIndex] && thumbnailButtons[safeIndex].classList.contains('is-active')) return;
    currentActive = safeIndex;
    const nextItem = mediaItems[currentActive];
    thumbnailButtons.forEach(function(button, index) {
      const isActive = index === currentActive;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
    updateAmbientMedia(nextItem);
    const isVideoItem = nextItem.mediaType === 'video';
    videoPlayer.hidden = !isVideoItem;
    mediaImage.hidden = isVideoItem;
    mediaImage.src = nextItem.posterSrc;
    mediaImage.alt = nextItem.title;
    if (video && isVideoItem) {
      video.pause();
      video.poster = nextItem.posterSrc;
      video.src = nextItem.videoSrc;
      video.load();
    } else if (video) {
      video.pause();
    }
    if (shouldNotify && typeof onChange === 'function') {
      onChange({ index: currentActive, item: nextItem, items: mediaItems, video, root });
    }
  };

  mediaItems.forEach(function(item, index) {
    const thumbnail = document.createElement('button');
    thumbnail.type = 'button';
    thumbnail.className = 'nn-media-carousel__thumb';
    thumbnail.setAttribute('aria-label', item.title);
    thumbnail.setAttribute('aria-current', index === currentActive ? 'true' : 'false');
    thumbnail.classList.toggle('is-active', index === currentActive);
    const image = document.createElement('img');
    image.className = 'nn-media-carousel__thumb-image';
    image.src = item.thumbnailSrc;
    image.alt = '';
    thumbnail.appendChild(image);
    thumbnail.addEventListener('click', function() {
      setActive(index, true);
    });
    track.appendChild(thumbnail);
    thumbnailButtons.push(thumbnail);
  });

  viewport.appendChild(track);
  viewport.addEventListener('scroll', updateEdgeControls, { passive: true });
  topControl.addEventListener('click', function() {
    scrollOneThumbnail(-1);
  });
  bottomControl.addEventListener('click', function() {
    scrollOneThumbnail(1);
  });

  sidebar.appendChild(viewport);
  sidebar.appendChild(topControl);
  sidebar.appendChild(bottomControl);
  root.appendChild(media);
  root.appendChild(videoAmbient);
  root.appendChild(controlMask);
  root.appendChild(sidebar);

  requestAnimationFrame(function() {
    viewport.scrollTop = 0;
    updateEdgeControls();
  });
  if (typeof ResizeObserver === 'function') {
    const resizeObserver = new ResizeObserver(updateEdgeControls);
    resizeObserver.observe(root);
    root._mediaCarouselResizeObserver = resizeObserver;
  } else {
    window.addEventListener('resize', updateEdgeControls);
  }

  root._mediaCarousel = {
    videoPlayer,
    viewport,
    setActive: function(index) {
      setActive(index, true);
    },
    getActiveIndex: function() {
      return currentActive;
    },
    update: updateEdgeControls
  };

  return root;
}

function createCarousel(options = {}) {
  injectCarouselStyles();

  if (options.variant === 'video-thumbnails') {
    return createMediaCarousel(options);
  }

  const {
    items = defaultCarouselItems,
    defaultActive = 0,
    autoplayDuration = 5000,
    wideBreakpoint = 1600,
    className = '',
    onChange = null
  } = options;

  const carouselItems = normalizeCarouselItems(items);
  let currentActive = Math.min(carouselItems.length - 1, Math.max(0, Number(defaultActive) || 0));

  const root = document.createElement('section');
  root.className = ['nn-carousel', className].filter(Boolean).join(' ');
  root.style.setProperty('--nn-carousel-fallback-accent-rgb', CarouselFallbackAccentRgb);

  const slides = document.createElement('div');
  slides.className = 'nn-carousel__slides';

  const tabs = document.createElement('div');
  tabs.className = 'nn-carousel__tabs';

  const slideEls = [];
  const tabEls = [];
  const progressEls = [];
  let isHovering = false;
  const leavingSlideTimers = [];

  root.style.setProperty('--nn-carousel-progress-duration', `${Math.max(1000, Number(autoplayDuration) || 5000)}ms`);

  function setActive(nextIndex, shouldNotify) {
    const hasActiveTab = tabEls.some(function(tab) {
      return tab.classList.contains('is-active');
    });
    if (nextIndex === currentActive && hasActiveTab) return;
    const previousActive = currentActive;
    currentActive = nextIndex;
    slideEls.forEach(function(slide, index) {
      if (leavingSlideTimers[index]) {
        clearTimeout(leavingSlideTimers[index]);
        leavingSlideTimers[index] = 0;
      }
      if (hasActiveTab && index === previousActive && index !== currentActive) {
        slide.classList.add('is-leaving');
        leavingSlideTimers[index] = setTimeout(function() {
          slide.classList.remove('is-leaving');
          leavingSlideTimers[index] = 0;
        }, 580);
      } else if (index !== currentActive) {
        slide.classList.remove('is-leaving');
      }
      slide.classList.toggle('is-active', index === currentActive);
    });
    tabEls.forEach(function(tab, index) {
      tab.classList.toggle('is-active', index === currentActive);
      tab.setAttribute('aria-selected', index === currentActive ? 'true' : 'false');
    });
    if (shouldNotify && typeof onChange === 'function') {
      onChange({ index: currentActive, item: carouselItems[currentActive], items: carouselItems });
    }
  }

  function pauseProgress() {
    root.classList.remove('is-progressing');
  }

  function restartProgress() {
    if (isHovering || carouselItems.length <= 1) return;
    root.classList.remove('is-progressing');
    progressEls.forEach(function(progress) {
      progress.style.animation = 'none';
      void progress.offsetWidth;
      progress.style.animation = '';
    });
    void root.offsetWidth;
    root.classList.add('is-progressing');
  }

  function activateFromHover(index) {
    isHovering = true;
    pauseProgress();
    setActive(index, true);
  }

  function updateWideState() {
    root.classList.toggle('is-wide', window.innerWidth >= wideBreakpoint);
  }

  carouselItems.forEach(function(item, index) {
    const slide = document.createElement('div');
    slide.className = 'nn-carousel__slide';
    const image = document.createElement('img');
    image.className = 'nn-carousel__image';
    image.src = item.imageSrc;
    image.alt = item.title;
    slide.appendChild(image);
    slides.appendChild(slide);
    slideEls.push(slide);

    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = 'nn-carousel__tab';
    tab.setAttribute('role', 'tab');
    const tabText = document.createElement('span');
    tabText.className = 'nn-carousel__tab-text';
    tabText.textContent = item.title;
    const progress = document.createElement('span');
    progress.className = 'nn-carousel__progress';
    progress.addEventListener('animationend', function() {
      if (isHovering || !tab.classList.contains('is-active') || !root.classList.contains('is-progressing')) return;
      setActive((currentActive + 1) % carouselItems.length, true);
      restartProgress();
    });
    tab.appendChild(progress);
    tab.appendChild(tabText);
    tab.addEventListener('click', function() {
      setActive(index, true);
      restartProgress();
    });
    tab.addEventListener('mouseenter', function() {
      activateFromHover(index);
    });
    tab.addEventListener('mouseover', function() {
      activateFromHover(index);
    });
    tab.addEventListener('pointerenter', function() {
      activateFromHover(index);
    });
    tabs.appendChild(tab);
    tabEls.push(tab);
    progressEls.push(progress);

    const itemAccent = parseCarouselAccentColor(item.accentColor);
    setCarouselTabAccent(tab, itemAccent || CarouselFallbackAccentRgb);
  });

  root.addEventListener('mouseenter', function() {
    isHovering = true;
    pauseProgress();
  });

  root.addEventListener('mouseover', function() {
    isHovering = true;
    pauseProgress();
  });

  root.addEventListener('pointerenter', function() {
    isHovering = true;
    pauseProgress();
  });

  root.addEventListener('mouseleave', function() {
    isHovering = false;
    restartProgress();
  });

  root.appendChild(slides);
  root.appendChild(tabs);
  setActive(currentActive, false);
  updateWideState();
  requestAnimationFrame(restartProgress);
  window.addEventListener('resize', updateWideState);

  return root;
}

if (typeof window !== 'undefined') {
  window.injectCarouselStyles = injectCarouselStyles;
  window.createCarousel = createCarousel;
  window.createMediaCarousel = createMediaCarousel;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectCarouselStyles,
    createCarousel,
    createMediaCarousel
  };
}
