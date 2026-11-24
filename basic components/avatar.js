const AvatarStyles = `
.nn-avatar {
  --nn-avatar-radius: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: "MiSans VF", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimHei, Arial, Helvetica, sans-serif;
  flex-shrink: 0;
  overflow: visible;
  position: relative;
  border-radius: var(--nn-avatar-radius);
}

.nn-avatar-status {
  position: absolute;
}

.nn-avatar--offline {
  opacity: 0.3;
}

.nn-avatar-wrapper {
  position: relative;
  display: inline-flex;
}

.nn-avatar-badge {
  position: absolute;
}

.nn-avatar-group {
  --nn-avatar-radius: 100%;
  position: relative;
  display: inline-block;
  width: var(--nn-avatar-group-size, var(--space24));
  height: var(--nn-avatar-group-size, var(--space24));
  overflow: hidden;
  border-radius: var(--nn-avatar-radius);
  background: var(--gray-3);
  flex-shrink: 0;
}

.nn-avatar-group__item {
  position: absolute;
  overflow: hidden;
  box-sizing: border-box;
}

.nn-avatar-group__separator {
  position: absolute;
  z-index: 1;
  background: var(--gray-1);
  pointer-events: none;
}

.nn-avatar-group__separator--vertical {
  width: calc(var(--space2) / 2);
  transform: translateX(-50%);
}

.nn-avatar-group__separator--horizontal {
  height: calc(var(--space2) / 2);
  transform: translateY(-50%);
}

.nn-avatar-group__item img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nn-avatar-group__text {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: var(--gray-7);
  color: var(--Neutral-0);
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-label);
}

.nn-avatar-16 {
  width: 16px;
  height: 16px;
}

.nn-avatar-18 {
  width: 18px;
  height: 18px;
}

.nn-avatar-20 {
  width: 20px;
  height: 20px;
}

.nn-avatar-24 {
  width: 24px;
  height: 24px;
}

.nn-avatar-28 {
  width: 28px;
  height: 28px;
}

.nn-avatar-32 {
  width: 32px;
  height: 32px;
}

.nn-avatar-36 {
  width: 36px;
  height: 36px;
}

.nn-avatar-38 {
  width: 38px;
  height: 38px;
}

.nn-avatar-40 {
  width: 40px;
  height: 40px;
}

.nn-avatar-44 {
  width: 44px;
  height: 44px;
}

.nn-avatar-46 {
  width: 46px;
  height: 46px;
}

.nn-avatar-48 {
  width: 48px;
  height: 48px;
}

.nn-avatar-60 {
  width: 60px;
  height: 60px;
}

.nn-avatar-70 {
  width: 70px;
  height: 70px;
}

.nn-avatar-80 {
  width: 80px;
  height: 80px;
}

.nn-avatar-120 {
  width: 120px;
  height: 120px;
}

.nn-avatar-160 {
  width: 160px;
  height: 160px;
}
`;

function createAvatarStatusSizeConfig(circleConfig, mobileConfig) {
  return {
    on: Object.assign({}, circleConfig),
    inv: Object.assign({}, circleConfig),
    dnd: Object.assign({}, circleConfig),
    gray: Object.assign({}, circleConfig),
    mo: Object.assign({}, mobileConfig)
  };
}

const avatarStatusConfig = {
  80: createAvatarStatusSizeConfig(
    { offsetX: 58, offsetY: 58, statusSize: 16 },
    { offsetX: 58, offsetY: 50, statusWidth: 16, statusHeight: 20, moSize: 16 }
  ),
  60: createAvatarStatusSizeConfig(
    { offsetX: 44, offsetY: 44, statusSize: 16 },
    { offsetX: 44, offsetY: 37, statusWidth: 16, statusHeight: 20, moSize: 16 }
  ),
  48: createAvatarStatusSizeConfig(
    { offsetX: 31, offsetY: 31, statusSize: 12 },
    { offsetX: 31, offsetY: 25, statusWidth: 12, statusHeight: 15, moSize: 12 }
  ),
  46: createAvatarStatusSizeConfig(
    { offsetX: 30, offsetY: 30, statusSize: 12 },
    { offsetX: 30, offsetY: 24, statusWidth: 12, statusHeight: 15, moSize: 12 }
  ),
  40: createAvatarStatusSizeConfig(
    { offsetX: 26, offsetY: 26, statusSize: 10 },
    { offsetX: 26, offsetY: 21, statusWidth: 10, statusHeight: 13, moSize: 10 }
  ),
  36: createAvatarStatusSizeConfig(
    { offsetX: 22, offsetY: 22, statusSize: 10 },
    { offsetX: 25, offsetY: 20, statusWidth: 8, statusHeight: 11, moSize: 8 }
  ),
  32: createAvatarStatusSizeConfig(
    { offsetX: 19, offsetY: 19, statusSize: 10 },
    { offsetX: 22, offsetY: 17, statusWidth: 8, statusHeight: 12, moSize: 8 }
  ),
  24: createAvatarStatusSizeConfig(
    { offsetX: 16, offsetY: 16, statusSize: 6 },
    { offsetX: 18, offsetY: 15, statusWidth: 5, statusHeight: 7, moSize: 5 }
  )
};

const avatarPath = 'M60 0C71.0457 0 80 8.95431 80 20V60C80 60.1691 79.9973 60.3377 79.9932 60.5059C77.7267 58.9268 74.9718 58 72 58C64.268 58 58 64.268 58 72C58 74.9718 58.9268 77.7267 60.5059 79.9932C60.3377 79.9973 60.1691 80 60 80H20C8.95431 80 0 71.0457 0 60V20C0 8.95431 8.95431 0 20 0H60Z';

const avatarIphonePath = 'M60 0C71.0457 0 80 8.95431 80 20V50H62C59.7909 50 58 51.7909 58 54V80H20C8.95431 80 0 71.0457 0 60V20C0 8.95431 8.95431 0 20 0H60Z';

const avatarPath48 = 'M36 0C42.6274 0 48 5.37258 48 12V32.7822C46.2741 31.6565 44.2142 31 42 31C35.9249 31 31 35.9249 31 42C31 44.2142 31.6565 46.2741 32.7822 48H12C5.37258 48 0 42.6274 0 36V12C0 5.37258 5.37258 0 12 0H36Z';

const avatarIphonePath48 = 'M36 0C42.6274 0 48 5.37258 48 12V25H34C32.3431 25 31 26.3431 31 28V48H12C5.37258 48 0 42.6274 0 36V12C0 5.37258 5.37258 0 12 0H36Z';

const avatarPath46 = 'M34.5 0C40.8513 0 46 5.14873 46 11.5V31.999C44.3287 30.7437 42.2512 30 40 30C34.4772 30 30 34.4772 30 40C30 42.2512 30.7437 44.3287 31.999 46H11.5C5.14873 46 0 40.8513 0 34.5V11.5C0 5.14873 5.14873 0 11.5 0H34.5Z';

const avatarIphonePath46 = 'M34.5 0C40.8513 0 46 5.14873 46 11.5V24H32.875C31.2872 24 30 25.2872 30 26.875V46H11.5C5.14873 46 0 40.8513 0 34.5V11.5C0 5.14873 5.14873 0 11.5 0H34.5Z';

const avatarPath40 = 'M30 0C35.5228 0 40 4.47715 40 10V27.5156C38.5699 26.5583 36.8502 26 35 26C30.0294 26 26 30.0294 26 35C26 36.8504 26.5591 38.5698 27.5166 40H10C4.47715 40 0 35.5228 0 30V10C0 4.47715 4.47715 0 10 0H30Z';

const avatarIphonePath40 = 'M30 0C35.5228 0 40 4.47715 40 10V21H28C26.8954 21 26 21.8954 26 23V40H10C4.47715 40 0 35.5228 0 30V10C0 4.47715 4.47715 0 10 0H30Z';

const avatarPath36 = 'M27 0C31.9706 0 36 4.02944 36 9V23.5156C34.5699 22.5583 32.8502 22 31 22C26.0294 22 22 26.0294 22 31C22 32.8504 22.5591 34.5698 23.5166 36H9C4.02944 36 0 31.9706 0 27V9C0 4.02944 4.02944 0 9 0H27Z';

const avatarIphonePath36 = 'M27 0C31.9706 0 36 4.02944 36 9V21H27C25.8954 21 25 21.8954 25 23V36H9C4.02944 36 0 31.9706 0 27V9C0 4.02944 4.02944 0 9 0H27Z';

const avatarPath32 = 'M24 0C28.4183 0 32 3.58172 32 8V20.7568C30.6302 19.6584 28.8924 19 27 19C22.5817 19 19 22.5817 19 27C19 28.8924 19.6584 30.6302 20.7568 32H8C3.58172 32 0 28.4183 0 24V8C0 3.58172 3.58172 0 8 0H24Z';

const avatarIphonePath32 = 'M24 0C28.4183 0 32 3.58172 32 8V17H23C21.8954 17 21 17.8954 21 19V32H8C3.58172 32 0 28.4183 0 24V8C0 3.58172 3.58172 0 8 0H24Z';

const avatarPath24 = 'M18 0C21.3137 0 24 2.68629 24 6V17C23.1643 16.3722 22.1257 16 21 16C18.2386 16 16 18.2386 16 21C16 22.1257 16.3722 23.1643 17 24H6C2.68629 24 0 21.3137 0 18V6C0 2.68629 2.68629 0 6 0H18Z';

const avatarIphonePath24 = 'M18 0C21.3137 0 24 2.68629 24 6V15H18C17.4477 15 17 15.4477 17 16V24H6C2.68629 24 0 21.3137 0 18V6C0 2.68629 2.68629 0 6 0H18Z';

let avatarInstanceId = 0;

function getAvatarInstanceId() {
  avatarInstanceId += 1;
  return `nn-avatar-${avatarInstanceId}`;
}

function injectAvatarStyles() {
  const existing = document.getElementById('nn-avatar-styles');
  if (existing) {
    existing.textContent = AvatarStyles;
    return;
  }
  const style = document.createElement('style');
  style.id = 'nn-avatar-styles';
  style.textContent = AvatarStyles;
  document.head.appendChild(style);
}

function createAvatar(options = {}) {
  const {
    src = '',
    text = '',
    size = 40,
    status = null,
  } = options;

  injectAvatarStyles();

  const avatarWrapper = document.createElement('span');
  avatarWrapper.className = 'nn-avatar';

  const sizeClass = `nn-avatar-${size}`;
  avatarWrapper.classList.add(sizeClass);

  if (status === 'gray') {
    avatarWrapper.classList.add('nn-avatar--offline');
  }

  if (status && avatarStatusConfig[size] && avatarStatusConfig[size][status]) {
    const config = avatarStatusConfig[size][status];
    const instanceId = getAvatarInstanceId();
    const maskId = `${instanceId}-mask-${status}-${size}`;
    const clipId = `${instanceId}-clip-${status}-${size}`;
    const isMobile = status === 'mo';

    const svgNS = 'http://www.w3.org/2000/svg';

    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    wrapper.style.width = size + 'px';
    wrapper.style.height = size + 'px';

    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    svg.setAttribute('viewBox', `0 0 ${size} ${size}`);
    svg.setAttribute('fill', 'none');
    svg.setAttribute('xmlns', svgNS);
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.borderRadius = '100%';
    svg.style.overflow = 'hidden';

    const defs = document.createElementNS(svgNS, 'defs');

    let currentPath;
    if (size === 48) {
      currentPath = isMobile ? avatarIphonePath48 : avatarPath48;
    } else if (size === 46) {
      currentPath = isMobile ? avatarIphonePath46 : avatarPath46;
    } else if (size === 40) {
      currentPath = isMobile ? avatarIphonePath40 : avatarPath40;
    } else if (size === 36) {
      currentPath = isMobile ? avatarIphonePath36 : avatarPath36;
    } else if (size === 32) {
      currentPath = isMobile ? avatarIphonePath32 : avatarPath32;
    } else if (size === 24) {
      currentPath = isMobile ? avatarIphonePath24 : avatarPath24;
    } else {
      currentPath = isMobile ? avatarIphonePath : avatarPath;
    }

    const clipPath = document.createElementNS(svgNS, 'clipPath');
    clipPath.setAttribute('id', clipId);
    const clipPathEl = document.createElementNS(svgNS, 'path');
    clipPathEl.setAttribute('d', currentPath);
    if (size !== 48 && size !== 46 && size !== 40 && size !== 36 && size !== 32 && size !== 24) {
      clipPathEl.setAttribute('transform', `scale(${size / 80})`);
    }
    clipPath.appendChild(clipPathEl);
    defs.appendChild(clipPath);

    const mask = document.createElementNS(svgNS, 'mask');
    mask.setAttribute('id', maskId);

    const maskBg = document.createElementNS(svgNS, 'rect');
    maskBg.setAttribute('width', size);
    maskBg.setAttribute('height', size);
    maskBg.setAttribute('fill', 'white');
    mask.appendChild(maskBg);

    if (!isMobile) {
      const maskCircle = document.createElementNS(svgNS, 'circle');
      maskCircle.setAttribute('cx', config.offsetX + config.statusSize / 2);
      maskCircle.setAttribute('cy', config.offsetY + config.statusSize / 2);
      maskCircle.setAttribute('r', config.statusSize / 2);
      maskCircle.setAttribute('fill', 'black');
      mask.appendChild(maskCircle);
    } else {
      const maskRect = document.createElementNS(svgNS, 'rect');
      maskRect.setAttribute('x', config.offsetX);
      maskRect.setAttribute('y', config.offsetY);
      maskRect.setAttribute('width', config.statusWidth);
      maskRect.setAttribute('height', config.statusHeight);
      maskRect.setAttribute('fill', 'black');
      mask.appendChild(maskRect);
    }

    defs.appendChild(mask);
    svg.appendChild(defs);

    const bgPath = document.createElementNS(svgNS, 'path');
    bgPath.setAttribute('d', currentPath);
    if (size !== 48 && size !== 46 && size !== 40 && size !== 36 && size !== 32 && size !== 24) {
      bgPath.setAttribute('transform', `scale(${size / 80})`);
    }
    bgPath.setAttribute('fill', 'var(--gray-12)');
    bgPath.setAttribute('mask', `url(#${maskId})`);
    svg.appendChild(bgPath);

    const imgContainer = document.createElementNS(svgNS, 'foreignObject');
    imgContainer.setAttribute('width', size);
    imgContainer.setAttribute('height', size);
    imgContainer.setAttribute('clip-path', `url(#${clipId})`);

    const div = document.createElement('div');
    div.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.overflow = 'hidden';

    if (src !== '') {
      const img = document.createElement('img');
      img.src = src;
      img.alt = text || 'avatar';
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      div.appendChild(img);
    } else if (text !== '') {
      div.textContent = text;
      div.style.display = 'flex';
      div.style.alignItems = 'center';
      div.style.justifyContent = 'center';
      div.style.background = 'var(--gray-7)';
      div.style.color = 'var(--Neutral-0)';
      div.style.fontWeight = 'var(--font-weight-medium)';
      div.style.fontSize = (size * 0.4) + 'px';
    }

    imgContainer.appendChild(div);
    svg.appendChild(imgContainer);
    wrapper.appendChild(svg);

    const statusEl = isMobile
      ? createBadge({ variant: 'mo', size: config.moSize })
      : createBadge({ dot: true, variant: status, size: config.statusSize });
    statusEl.classList.add('nn-avatar-status');
    statusEl.style.right = '0';
    statusEl.style.bottom = '0';

    wrapper.appendChild(statusEl);
    avatarWrapper.appendChild(wrapper);
  } else {
    if (src !== '') {
      const img = document.createElement('img');
      img.src = src;
      img.alt = text || 'avatar';
      img.style.width = size + 'px';
      img.style.height = size + 'px';
      img.style.objectFit = 'cover';
      img.style.borderRadius = '100%';
      avatarWrapper.appendChild(img);
    } else if (text !== '') {
      avatarWrapper.textContent = text;
      avatarWrapper.style.background = 'var(--gray-7)';
      avatarWrapper.style.color = 'var(--Neutral-0)';
      avatarWrapper.style.fontWeight = 'var(--font-weight-medium)';
      avatarWrapper.style.fontSize = (size * 0.4) + 'px';
    }
  }

  return avatarWrapper;
}

function createAvatarWithBadge(avatarOptions = {}, badgeOptions = {}) {
  const wrapper = document.createElement('span');
  wrapper.className = 'nn-avatar-wrapper';
  wrapper.style.position = 'relative';
  wrapper.style.display = 'inline-flex';

  const avatar = createAvatar(avatarOptions);
  wrapper.appendChild(avatar);

  if (badgeOptions.text !== undefined || badgeOptions.dot) {
    const badge = createBadge(badgeOptions);
    badge.classList.add('nn-avatar-badge');
    badge.style.position = 'absolute';
    badge.style.top = '0';
    badge.style.right = '0';
    badge.style.transform = 'translate(50%, -50%)';
    wrapper.appendChild(badge);
  }

  return wrapper;
}

const avatarGroupLayouts = {
  2: [
    [0, 0, 50, 100],
    [50, 0, 50, 100]
  ],
  3: [
    [0, 0, 100, 50],
    [0, 50, 50, 50],
    [50, 50, 50, 50]
  ],
  4: [
    [0, 0, 50, 50],
    [50, 0, 50, 50],
    [0, 50, 50, 50],
    [50, 50, 50, 50]
  ],
  5: [
    [0, 0, 50, 50],
    [50, 0, 50, 50],
    [0, 50, 100 / 3, 50],
    [100 / 3, 50, 100 / 3, 50],
    [(100 / 3) * 2, 50, 100 / 3, 50]
  ],
  6: [
    [0, 0, 100 / 3, 50],
    [100 / 3, 0, 100 / 3, 50],
    [(100 / 3) * 2, 0, 100 / 3, 50],
    [0, 50, 100 / 3, 50],
    [100 / 3, 50, 100 / 3, 50],
    [(100 / 3) * 2, 50, 100 / 3, 50]
  ],
  7: [
    [0, 0, 50, 100 / 3],
    [50, 0, 50, 100 / 3],
    [0, 100 / 3, 50, 100 / 3],
    [50, 100 / 3, 50, 100 / 3],
    [0, (100 / 3) * 2, 100 / 3, 100 / 3],
    [100 / 3, (100 / 3) * 2, 100 / 3, 100 / 3],
    [(100 / 3) * 2, (100 / 3) * 2, 100 / 3, 100 / 3]
  ],
  8: [
    [0, 0, 50, 100 / 3],
    [50, 0, 50, 100 / 3],
    [0, 100 / 3, 100 / 3, 100 / 3],
    [100 / 3, 100 / 3, 100 / 3, 100 / 3],
    [(100 / 3) * 2, 100 / 3, 100 / 3, 100 / 3],
    [0, (100 / 3) * 2, 100 / 3, 100 / 3],
    [100 / 3, (100 / 3) * 2, 100 / 3, 100 / 3],
    [(100 / 3) * 2, (100 / 3) * 2, 100 / 3, 100 / 3]
  ],
  9: [
    [0, 0, 100 / 3, 100 / 3],
    [100 / 3, 0, 100 / 3, 100 / 3],
    [(100 / 3) * 2, 0, 100 / 3, 100 / 3],
    [0, 100 / 3, 100 / 3, 100 / 3],
    [100 / 3, 100 / 3, 100 / 3, 100 / 3],
    [(100 / 3) * 2, 100 / 3, 100 / 3, 100 / 3],
    [0, (100 / 3) * 2, 100 / 3, 100 / 3],
    [100 / 3, (100 / 3) * 2, 100 / 3, 100 / 3],
    [(100 / 3) * 2, (100 / 3) * 2, 100 / 3, 100 / 3]
  ]
};

function normalizeAvatarGroupItem(item) {
  if (typeof item === 'string') {
    return { src: item, text: '' };
  }

  return {
    src: item && item.src ? item.src : '',
    text: item && item.text ? item.text : ''
  };
}

function createAvatarGroupSeparators(layout) {
  const separators = [];
  const seen = new Set();
  const tolerance = 0.001;

  function isSameEdge(a, b) {
    return Math.abs(a - b) < tolerance;
  }

  function isOuterEdge(value) {
    return isSameEdge(value, 0) || isSameEdge(value, 100);
  }

  function addSeparator(type, position, start, length) {
    if (isOuterEdge(position) || length <= tolerance) return;

    const key = [
      type,
      position.toFixed(3),
      start.toFixed(3),
      length.toFixed(3)
    ].join(':');

    if (seen.has(key)) return;
    seen.add(key);
    separators.push({ type, position, start, length });
  }

  layout.forEach(function(rect, index) {
    const left = rect[0];
    const top = rect[1];
    const right = rect[0] + rect[2];
    const bottom = rect[1] + rect[3];

    layout.slice(index + 1).forEach(function(nextRect) {
      const nextLeft = nextRect[0];
      const nextTop = nextRect[1];
      const nextRight = nextRect[0] + nextRect[2];
      const nextBottom = nextRect[1] + nextRect[3];
      const verticalStart = Math.max(top, nextTop);
      const verticalEnd = Math.min(bottom, nextBottom);
      const horizontalStart = Math.max(left, nextLeft);
      const horizontalEnd = Math.min(right, nextRight);

      if (isSameEdge(right, nextLeft)) {
        addSeparator('vertical', right, verticalStart, verticalEnd - verticalStart);
      }

      if (isSameEdge(nextRight, left)) {
        addSeparator('vertical', left, verticalStart, verticalEnd - verticalStart);
      }

      if (isSameEdge(bottom, nextTop)) {
        addSeparator('horizontal', bottom, horizontalStart, horizontalEnd - horizontalStart);
      }

      if (isSameEdge(nextBottom, top)) {
        addSeparator('horizontal', top, horizontalStart, horizontalEnd - horizontalStart);
      }
    });
  });

  const groupedSeparators = separators.reduce(function(groups, separator) {
    const key = [
      separator.type,
      separator.position.toFixed(3)
    ].join(':');

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(separator);
    return groups;
  }, {});

  return Object.values(groupedSeparators).flatMap(function(group) {
    return group
      .sort(function(a, b) {
        return a.start - b.start;
      })
      .reduce(function(merged, separator) {
        const last = merged[merged.length - 1];

        if (!last || separator.start > last.start + last.length + tolerance) {
          merged.push(Object.assign({}, separator));
          return merged;
        }

        const end = Math.max(last.start + last.length, separator.start + separator.length);
        last.length = end - last.start;
        return merged;
      }, []);
  });
}

function createAvatarGroup(options = {}) {
  const {
    avatars = [],
    size = 24,
    max = 9
  } = options;

  injectAvatarStyles();

  const items = avatars.map(normalizeAvatarGroupItem).slice(0, Math.min(Math.max(max, 2), 9));
  if (items.length <= 1) {
    return createAvatar(Object.assign({ size }, items[0] || {}));
  }

  const count = Math.min(Math.max(items.length, 2), 9);
  const layout = avatarGroupLayouts[count] || avatarGroupLayouts[9];
  const group = document.createElement('span');
  group.className = `nn-avatar-group nn-avatar-group-${count}`;
  group.style.setProperty('--nn-avatar-group-size', `${size}px`);

  items.slice(0, count).forEach(function(item, index) {
    const rect = layout[index];
    const cell = document.createElement('span');
    cell.className = 'nn-avatar-group__item';
    cell.style.left = `${rect[0]}%`;
    cell.style.top = `${rect[1]}%`;
    cell.style.width = `${rect[2]}%`;
    cell.style.height = `${rect[3]}%`;

    if (item.src) {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.text || 'avatar';
      cell.appendChild(img);
    } else if (item.text) {
      const text = document.createElement('span');
      text.className = 'nn-avatar-group__text';
      text.textContent = item.text.slice(0, 1);
      cell.appendChild(text);
    }

    group.appendChild(cell);
  });

  createAvatarGroupSeparators(layout).forEach(function(separator) {
    const line = document.createElement('span');
    line.className = `nn-avatar-group__separator nn-avatar-group__separator--${separator.type}`;

    if (separator.type === 'vertical') {
      line.style.left = `${separator.position}%`;
      line.style.top = `${separator.start}%`;
      line.style.height = `${separator.length}%`;
    } else {
      line.style.left = `${separator.start}%`;
      line.style.top = `${separator.position}%`;
      line.style.width = `${separator.length}%`;
    }

    group.appendChild(line);
  });

  return group;
}

window.createAvatar = createAvatar;
window.createAvatarWithBadge = createAvatarWithBadge;
window.createAvatarGroup = createAvatarGroup;
