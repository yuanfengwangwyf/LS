const ScrollbarStyles = `
  .nn-scrollbar-target {
    scrollbar-width: none !important;
    -ms-overflow-style: none !important;
  }

  .nn-scrollbar-target::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
  }

  .nn-scrollbar {
    --nn-scrollbar-top: 0px;
    --nn-scrollbar-left: auto;
    --nn-scrollbar-right: 4px;
    --nn-scrollbar-bottom: 0px;
    --nn-scrollbar-width: 6px;
    --nn-scrollbar-height: 6px;
    --nn-scrollbar-track-height: 20px;
    --nn-scrollbar-thumb-top: 0px;
    --nn-scrollbar-thumb-left: 0px;
    --nn-scrollbar-thumb-height: 24px;
    --nn-scrollbar-thumb-width: 60px;
    --nn-scrollbar-thumb-color: var(--gray-8);
    --nn-scrollbar-thumb-hover-color: var(--gray-7);
    position: absolute;
    top: var(--nn-scrollbar-top);
    right: var(--nn-scrollbar-right);
    bottom: var(--nn-scrollbar-bottom);
    z-index: 20;
    display: block;
    width: var(--nn-scrollbar-width);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.16s ease;
    user-select: none;
  }

  .nn-scrollbar.is-scrollable {
    pointer-events: auto;
  }

  .nn-scrollbar.is-visible,
  .nn-scrollbar.is-always-visible.is-scrollable,
  .nn-scrollbar.is-dragging {
    opacity: 1;
  }

  .nn-scrollbar__thumb {
    position: absolute;
    top: var(--nn-scrollbar-thumb-top);
    right: 0;
    width: var(--nn-scrollbar-width);
    min-height: var(--nn-scrollbar-min-thumb-height, 24px);
    height: var(--nn-scrollbar-thumb-height);
    border-radius: 999px;
    background: var(--nn-scrollbar-thumb-color);
    cursor: grab;
    transition: background-color 0.16s ease;
  }

  .nn-scrollbar__thumb:hover,
  .nn-scrollbar.is-always-visible .nn-scrollbar__thumb,
  .nn-scrollbar.is-dragging .nn-scrollbar__thumb {
    background: var(--nn-scrollbar-thumb-hover-color);
  }

  .nn-scrollbar.is-dragging .nn-scrollbar__thumb {
    cursor: grabbing;
  }

  .nn-scrollbar--thin {
    --nn-scrollbar-width: 4px;
    --nn-scrollbar-min-thumb-height: 24px;
  }

  .nn-scrollbar--page {
    --nn-scrollbar-width: 6px;
    --nn-scrollbar-min-thumb-height: 60px;
  }

  .nn-scrollbar--horizontal {
    --nn-scrollbar-min-thumb-width: 60px;
    top: auto;
    right: var(--nn-scrollbar-right);
    bottom: var(--nn-scrollbar-bottom);
    left: var(--nn-scrollbar-left);
    width: auto;
    height: var(--nn-scrollbar-track-height);
  }

  .nn-scrollbar--horizontal .nn-scrollbar__thumb {
    top: 50%;
    right: auto;
    left: var(--nn-scrollbar-thumb-left);
    width: var(--nn-scrollbar-thumb-width);
    min-width: var(--nn-scrollbar-min-thumb-width, 60px);
    height: var(--nn-scrollbar-height);
    min-height: 0;
    transform: translateY(-50%);
  }
`;

function injectScrollbarStyles() {
  if (document.getElementById('nn-scrollbar-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-scrollbar-styles';
  style.textContent = ScrollbarStyles;
  document.head.appendChild(style);
}

function normalizeScrollbarPx(value, fallback = 0) {
  if (typeof value === 'function') return normalizeScrollbarPx(value(), fallback);
  if (typeof value === 'number' && Number.isFinite(value)) return `${value}px`;
  if (typeof value === 'string' && value.trim()) return value;
  return `${fallback}px`;
}

function createScrollbar(options = {}) {
  injectScrollbarStyles();

  const {
    target,
    container = target && target.parentElement,
    hoverTarget = container || target,
    variant = 'page',
    direction = 'vertical',
    className = '',
    right = direction === 'horizontal' ? 0 : 4,
    left = direction === 'horizontal' ? 0 : 'auto',
    top = 0,
    bottom = 0,
    minThumbSize = variant === 'thin' ? 24 : 60,
    thumbSize = null,
    alwaysVisible = false,
    scrollHideDelay = 600
  } = options;

  if (!target || !container) return null;

  const isHorizontal = direction === 'horizontal';
  const isAlwaysVisible = alwaysVisible || isHorizontal;

  const root = document.createElement('div');
  root.className = [
    'nn-scrollbar',
    isHorizontal ? 'nn-scrollbar--horizontal' : `nn-scrollbar--${variant === 'thin' ? 'thin' : 'page'}`,
    isAlwaysVisible ? 'is-always-visible' : '',
    className
  ].filter(Boolean).join(' ');
  root.setAttribute('aria-hidden', 'true');

  const thumb = document.createElement('div');
  thumb.className = 'nn-scrollbar__thumb';
  root.appendChild(thumb);
  container.appendChild(root);

  target.classList.add('nn-scrollbar-target');

  let visibleByHover = false;
  let visibleByScroll = false;
  let dragging = false;
  let hideTimer = null;

  function resolveTrackSize() {
    const rect = root.getBoundingClientRect();
    return Math.max(0, isHorizontal ? rect.width : rect.height);
  }

  function setVisible() {
    root.classList.toggle('is-visible', root.classList.contains('is-scrollable') && (isAlwaysVisible || visibleByHover || visibleByScroll || dragging));
  }

  function update() {
    const scrollSize = isHorizontal ? target.scrollWidth : target.scrollHeight;
    const viewportSize = isHorizontal ? target.clientWidth : target.clientHeight;
    const scrollOffset = isHorizontal ? target.scrollLeft : target.scrollTop;
    const maxScrollOffset = Math.max(1, scrollSize - viewportSize);
    const isScrollable = scrollSize > viewportSize + 1;

    root.style.setProperty('--nn-scrollbar-top', normalizeScrollbarPx(top));
    root.style.setProperty('--nn-scrollbar-left', normalizeScrollbarPx(left));
    root.style.setProperty('--nn-scrollbar-right', normalizeScrollbarPx(right));
    root.style.setProperty('--nn-scrollbar-bottom', normalizeScrollbarPx(bottom));
    root.style.setProperty(isHorizontal ? '--nn-scrollbar-min-thumb-width' : '--nn-scrollbar-min-thumb-height', `${minThumbSize}px`);
    root.classList.toggle('is-scrollable', isScrollable);

    if (!isScrollable) {
      root.style.setProperty(isHorizontal ? '--nn-scrollbar-thumb-width' : '--nn-scrollbar-thumb-height', '0px');
      root.style.setProperty(isHorizontal ? '--nn-scrollbar-thumb-left' : '--nn-scrollbar-thumb-top', '0px');
      root.classList.remove('is-visible');
      return;
    }

    const trackSize = resolveTrackSize();
    const resolvedThumbSize = typeof thumbSize === 'number' && Number.isFinite(thumbSize)
      ? Math.min(trackSize, Math.max(0, thumbSize))
      : Math.min(trackSize, Math.max(minThumbSize, (viewportSize / scrollSize) * trackSize));
    const maxThumbOffset = Math.max(0, trackSize - resolvedThumbSize);
    const thumbOffset = (scrollOffset / maxScrollOffset) * maxThumbOffset;
    root.style.setProperty(isHorizontal ? '--nn-scrollbar-thumb-width' : '--nn-scrollbar-thumb-height', `${resolvedThumbSize}px`);
    root.style.setProperty(isHorizontal ? '--nn-scrollbar-thumb-left' : '--nn-scrollbar-thumb-top', `${thumbOffset}px`);
    setVisible();
  }

  function showDuringScroll() {
    visibleByScroll = true;
    window.clearTimeout(hideTimer);
    hideTimer = window.setTimeout(function() {
      visibleByScroll = false;
      setVisible();
    }, scrollHideDelay);
    update();
  }

  function scrollToClientPoint(clientPoint) {
    const trackRect = root.getBoundingClientRect();
    const thumbRect = thumb.getBoundingClientRect();
    const trackStart = isHorizontal ? trackRect.left : trackRect.top;
    const trackSize = isHorizontal ? trackRect.width : trackRect.height;
    const thumbSize = (isHorizontal ? thumbRect.width : thumbRect.height) || minThumbSize;
    const maxThumbOffset = Math.max(1, trackSize - thumbSize);
    const nextThumbOffset = Math.max(0, Math.min(maxThumbOffset, clientPoint - trackStart - thumbSize / 2));
    const maxScrollOffset = Math.max(1, (isHorizontal ? target.scrollWidth - target.clientWidth : target.scrollHeight - target.clientHeight));
    if (isHorizontal) {
      target.scrollLeft = (nextThumbOffset / maxThumbOffset) * maxScrollOffset;
    } else {
      target.scrollTop = (nextThumbOffset / maxThumbOffset) * maxScrollOffset;
    }
    update();
  }

  function startDrag(event) {
    event.preventDefault();
    event.stopPropagation();
    dragging = true;
    root.classList.add('is-dragging');
    setVisible();

    const startPoint = isHorizontal ? event.clientX : event.clientY;
    const startScrollOffset = isHorizontal ? target.scrollLeft : target.scrollTop;
    const trackSize = resolveTrackSize();
    const thumbRect = thumb.getBoundingClientRect();
    const thumbSize = (isHorizontal ? thumbRect.width : thumbRect.height) || minThumbSize;
    const maxThumbOffset = Math.max(1, trackSize - thumbSize);
    const maxScrollOffset = Math.max(1, isHorizontal ? target.scrollWidth - target.clientWidth : target.scrollHeight - target.clientHeight);

    function handleMove(moveEvent) {
      const currentPoint = isHorizontal ? moveEvent.clientX : moveEvent.clientY;
      const delta = currentPoint - startPoint;
      if (isHorizontal) {
        target.scrollLeft = startScrollOffset + (delta / maxThumbOffset) * maxScrollOffset;
      } else {
        target.scrollTop = startScrollOffset + (delta / maxThumbOffset) * maxScrollOffset;
      }
      update();
    }

    function handleEnd() {
      dragging = false;
      root.classList.remove('is-dragging');
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      setVisible();
    }

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
  }

  target.addEventListener('scroll', showDuringScroll, { passive: true });
  thumb.addEventListener('mousedown', startDrag);
  root.addEventListener('mousedown', function(event) {
    if (event.target === thumb) return;
    event.preventDefault();
    scrollToClientPoint(isHorizontal ? event.clientX : event.clientY);
  });

  if (hoverTarget) {
    hoverTarget.addEventListener('mouseenter', function() {
      visibleByHover = true;
      setVisible();
    });
    hoverTarget.addEventListener('mouseleave', function() {
      visibleByHover = false;
      setVisible();
    });
  }

  window.addEventListener('resize', update);
  requestAnimationFrame(update);

  return {
    element: root,
    thumb,
    target,
    update,
    destroy() {
      window.clearTimeout(hideTimer);
      window.removeEventListener('resize', update);
      root.remove();
      target.classList.remove('nn-scrollbar-target');
    }
  };
}

function bindScrollbar(target, options = {}) {
  return createScrollbar(Object.assign({}, options, { target }));
}

if (typeof window !== 'undefined') {
  window.injectScrollbarStyles = injectScrollbarStyles;
  window.createScrollbar = createScrollbar;
  window.bindScrollbar = bindScrollbar;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectScrollbarStyles,
    createScrollbar,
    bindScrollbar
  };
}
