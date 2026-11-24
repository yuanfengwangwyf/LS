const DataCardStyles = `
  .play-center-profile-modal {
    position: absolute;
    inset: 0;
    z-index: 120;
    display: none;
    align-items: center;
    justify-content: center;
    padding: var(--space32);
    background: var(--mask);
    box-sizing: border-box;
  }

  .play-center-profile-modal.is-open {
    display: flex;
  }

  .play-center-profile-dialog {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 1000px;
    min-width: 1000px;
    max-width: 1000px;
    height: min(790px, calc(100% - 48px));
    overflow: hidden;
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-4r);
    background:
      linear-gradient(180deg, color-mix(in srgb, var(--play-center-profile-avatar-accent, #5e7bb6) 30%, transparent) 0%, transparent 50%),
      var(--gray-1);
    background-clip: padding-box;
    box-shadow: 0 12px 18px var(--shadow);
    color: var(--gray-3);
    font-family: var(--font-family-main);
    box-sizing: border-box;
  }

  .play-center-profile-close {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 3;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    padding: var(--space0);
    border: none;
    border-radius: var(--border-radius-4r);
    background: transparent;
    color: var(--gray-5);
    cursor: pointer;
  }

  .play-center-profile-close:hover {
    background: var(--gray-10);
    color: var(--gray-3);
  }

  .play-center-profile-voice {
    display: flex;
    align-items: center;
    gap: var(--space16);
    height: 72px;
    padding: var(--space24) var(--space24) var(--space16);
    flex: 0 0 auto;
    box-sizing: border-box;
  }

  .play-center-profile-voice__icons {
    display: flex;
    align-items: center;
    gap: var(--space0);
    color: var(--gray-5);
    font-size: var(--icon-size-x12);
    line-height: var(--icon-size-x12);
  }

  .play-center-profile-voice__icons .nn-voice-panel__volume {
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    flex: 0 0 var(--icon-size-x12);
  }

  .play-center-profile-voice__icons .nn-voice-panel__volume + .nn-voice-panel__volume {
    margin-left: var(--space16);
  }

  .play-center-profile-voice__icons .nnicon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    font-size: var(--icon-size-x12);
    line-height: var(--icon-size-x12);
  }

  .play-center-profile-voice__icons .nn-voice-panel__volume-button {
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    border-radius: 0;
  }

  .play-center-profile-voice__room {
    display: flex;
    align-items: center;
    gap: var(--space10);
    height: 24px;
    min-width: 0;
    font-size: 14px;
    font-weight: var(--font-weight-medium);
    line-height: 20px;
  }

  .play-center-profile-voice__avatars {
    display: flex;
    align-items: center;
    gap: var(--space4);
    height: 18px;
  }

  .play-center-profile-voice__avatars > span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    flex: 0 0 auto;
    line-height: 0;
  }

  .play-center-profile-voice__avatars .nn-avatar {
    width: 18px !important;
    height: 18px !important;
    border-radius: var(--border-radius-4r) !important;
  }

  .play-center-profile-voice__avatars .nn-avatar > img {
    width: 18px !important;
    height: 18px !important;
    border-radius: var(--border-radius-4r) !important;
  }

  .play-center-profile-voice__count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 18px;
    padding: var(--space0) var(--space4);
    border-radius: 99px;
    background: var(--gray-10);
    color: var(--gray-6);
    font-size: 10px;
    font-weight: var(--font-weight-medium);
    line-height: 12px;
  }

  .play-center-profile-body {
    display: grid;
    grid-template-columns: minmax(0, 568px) 360px;
    gap: var(--space24);
    min-height: 0;
    padding: var(--space0) var(--space24) var(--space20);
    flex: 1 1 auto;
    box-sizing: border-box;
  }

  .play-center-profile-main {
    position: relative;
    min-width: 0;
    overflow: hidden;
    background: color-mix(in srgb, var(--gray-14, #fff) 50%, transparent);
  }

  .play-center-profile-banner {
    position: relative;
    z-index: 3;
    height: 120px;
    overflow: visible;
    background: transparent;
  }

  .play-center-profile-banner::before {
    content: "";
    position: absolute;
    inset: 0;
    height: 198px;
    background: var(--play-center-profile-avatar-accent, #5e7bb6);
    clip-path: path("M 4 0 H 564 Q 568 0 568 4 V 120 H 144 V 108 Q 144 70 106 70 H 54 Q 16 70 16 108 V 120 H 0 V 4 Q 0 0 4 0 Z");
    transition: background-color 160ms ease;
    pointer-events: none;
  }

  .play-center-profile-header-mask {
    position: absolute;
    top: 120px;
    right: 0;
    left: 0;
    z-index: 2;
    height: 96px;
    background: color-mix(in srgb, var(--gray-14, #fff) 50%, transparent);
    pointer-events: none;
  }

  .play-center-profile-avatar-slot {
    position: absolute;
    z-index: 4;
    top: 74px;
    left: 20px;
    width: 120px;
    height: 120px;
    overflow: hidden;
    border-radius: 30px;
  }

  .play-center-profile-avatar-slot .nn-avatar,
  .play-center-profile-avatar-slot .nn-avatar > img {
    width: 120px !important;
    height: 120px !important;
    border-radius: 30px !important;
    overflow: hidden;
  }

  .play-center-profile-headline {
    position: absolute;
    z-index: 4;
    top: 134px;
    right: 16px;
    left: 154px;
    display: flex;
    align-items: flex-end;
    gap: var(--space8);
    min-width: 0;
    margin: var(--space0);
  }

  .play-center-profile-identity {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: var(--space2);
    min-width: 0;
  }

  .play-center-profile-name-row {
    display: flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
  }

  .play-center-profile-name {
    margin: var(--space0);
    overflow: hidden;
    color: var(--gray-3);
    font-size: 18px;
    font-weight: var(--font-weight-semibold);
    line-height: 26px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .play-center-profile-gender {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    flex: 0 0 auto;
    color: #ff4db8;
    font-size: 16px;
    line-height: 16px;
  }

  .play-center-profile-nn {
    color: var(--gray-6);
    font-size: 14px;
    line-height: 20px;
  }

  .play-center-profile-actions {
    display: flex;
    align-items: center;
    gap: var(--space12);
    margin-left: auto;
    flex: 0 0 auto;
  }

  .play-center-profile-action {
    min-width: 78px;
    height: 30px;
    font-size: 13px;
    font-weight: var(--font-weight-semibold);
  }

  .play-center-profile-action.nn-btn-default {
    padding: var(--space6) var(--space12);
  }

  .play-center-profile-scroll {
    height: calc(100% - 220px);
    margin-top: var(--space80);
    padding: var(--space0) var(--space16) var(--space80);
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: none;
    box-sizing: border-box;
  }

  .play-center-profile-scroll::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .play-center-profile-scrollbar {
    --nn-scrollbar-width: 8px;
    --nn-scrollbar-min-thumb-height: 32px;
  }

  .play-center-profile-section {
    margin-top: var(--space24);
  }

  .play-center-profile-section__title {
    display: flex;
    align-items: center;
    gap: var(--space6);
    margin: var(--space0) var(--space0) var(--space12);
    color: var(--gray-3);
    font-size: 16px;
    font-weight: var(--font-weight-bold);
    line-height: 22px;
  }

  .play-center-profile-section__title::before {
    content: "";
    width: 3px;
    height: 16px;
    border-radius: 2px;
    background: var(--gray-3);
  }

  .play-center-profile-section__header {
    display: flex;
    align-items: center;
    gap: var(--space8);
    margin: var(--space0) var(--space0) var(--space12);
  }

  .play-center-profile-section__header .play-center-profile-section__title {
    margin: var(--space0);
  }

  .play-center-profile-service-voice {
    display: inline-flex;
    align-items: center;
    gap: var(--space6);
    height: 24px;
    padding: var(--space4) var(--space6);
    border: 0;
    border-radius: 33px;
    background: var(--gray-10);
    color: var(--gray-3);
    font: inherit;
    appearance: none;
    box-sizing: border-box;
    cursor: pointer;
    user-select: none;
  }

  .play-center-profile-service-voice__duration {
    font-size: 12px;
    font-weight: var(--font-weight-bold);
    line-height: 16px;
    white-space: nowrap;
  }

  .play-center-profile-service-voice__wave {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    height: 12px;
  }

  .play-center-profile-service-voice__bar {
    width: 2px;
    border-radius: 20px;
    background: var(--gray-3);
    transform-origin: center;
  }

  .play-center-profile-service-voice__bar:nth-child(1),
  .play-center-profile-service-voice__bar:nth-child(3) {
    height: 10px;
  }

  .play-center-profile-service-voice__bar:nth-child(2),
  .play-center-profile-service-voice__bar:nth-child(4) {
    height: 6px;
  }

  .play-center-profile-service-voice__play {
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 8px solid var(--gray-3);
  }

  .play-center-profile-service-voice.is-playing .play-center-profile-service-voice__bar {
    animation: play-data-card-wave 720ms ease-in-out infinite;
  }

  .play-center-profile-service-voice.is-playing .play-center-profile-service-voice__bar:nth-child(2) {
    animation-delay: 90ms;
  }

  .play-center-profile-service-voice.is-playing .play-center-profile-service-voice__bar:nth-child(3) {
    animation-delay: 180ms;
  }

  .play-center-profile-service-voice.is-playing .play-center-profile-service-voice__bar:nth-child(4) {
    animation-delay: 270ms;
  }

  @keyframes play-data-card-wave {
    0%, 100% {
      transform: scaleY(0.65);
      opacity: 0.72;
    }

    45% {
      transform: scaleY(1.25);
      opacity: 1;
    }
  }

  .play-center-profile-services {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--space12);
  }

  .play-center-profile-game {
    --game-accent: #29a874;
    display: flex;
    align-items: center;
    gap: var(--space8);
    min-width: 0;
    height: 54px;
    padding: var(--space8);
    border: 1px solid var(--gray-9);
    border-radius: var(--border-radius-4r);
    background: transparent;
    color: var(--gray-3);
    cursor: pointer;
    text-align: left;
    transition:
      border-color 160ms ease,
      background-color 160ms ease,
      color 160ms ease;
    box-sizing: border-box;
  }

  .play-center-profile-game:hover {
    border-color: var(--gray-9);
    background: var(--gray-10);
    color: var(--gray-3);
  }

  .play-center-profile-game.is-active {
    border-color: color-mix(in srgb, var(--game-accent) 48%, transparent);
    background: color-mix(in srgb, var(--game-accent) 24%, transparent);
    color: var(--gray-3);
  }

  .play-center-profile-game__icon {
    width: var(--icon-size-x18);
    height: var(--icon-size-x18);
    flex: 0 0 auto;
    overflow: hidden;
    border-radius: 5px;
    object-fit: cover;
  }

  .play-center-profile-game__meta {
    display: flex;
    min-width: 0;
    flex: 1 1 auto;
    flex-direction: column;
    gap: var(--space0);
  }

  .play-center-profile-game__name {
    min-width: 0;
    overflow: hidden;
    color: var(--gray-3);
    font-size: 14px;
    line-height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .play-center-profile-game .nn-equity-rank {
    align-self: flex-start;
  }

  .play-center-profile-skill {
    margin: var(--space24) var(--space0) var(--space0);
    color: var(--gray-6);
    font-size: 14px;
    line-height: 20px;
  }

  .play-center-profile-items {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--space12);
  }

  .play-center-profile-item {
    --item-accent: #e79f4d;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 0;
    height: 58px;
    padding: var(--space8);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-4r);
    background: transparent;
    color: var(--gray-3);
    font-size: 14px;
    line-height: 20px;
    text-align: left;
    box-sizing: border-box;
    cursor: pointer;
    transition:
      border-color 160ms ease,
      background-color 160ms ease;
  }

  .play-center-profile-item:hover {
    border-color: var(--gray-8);
    background: var(--gray-10);
  }

  .play-center-profile-item.is-active {
    border-color: var(--gray-6);
    background: transparent;
  }

  .play-center-profile-item small {
    display: block;
    margin-top: var(--space2);
    color: var(--gray-6);
    font-size: 12px;
    line-height: 16px;
  }

  .play-center-profile-tabs {
    display: flex;
    align-items: center;
    gap: var(--space32);
    height: 38px;
    margin-bottom: var(--space12);
  }

  .play-center-profile-tab {
    position: relative;
    height: 38px;
    border: none;
    background: transparent;
    color: var(--gray-6);
    font-size: 14px;
    font-weight: var(--font-weight-semibold);
    line-height: 20px;
    cursor: pointer;
  }

  .play-center-profile-tab.is-active {
    color: var(--gray-3);
  }

  .play-center-profile-tab.is-active::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 3px;
    border-radius: 99px 99px 0 0;
    background: var(--gray-3);
  }

  .play-center-profile-photos {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--space12);
  }

  .play-center-profile-photos img {
    width: 100%;
    height: 72px;
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-4r);
    object-fit: cover;
    box-sizing: border-box;
  }

  .play-center-profile-price {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: 56px;
    min-height: 0;
    padding: var(--space0) var(--space16) var(--space0);
    border-radius: 0;
    background: var(--gray-1);
    box-sizing: border-box;
  }

  .play-center-profile-price::before {
    content: "";
    position: absolute;
    top: 0;
    right: 1px;
    left: 1px;
    height: 1px;
    background: var(--gray-8);
    pointer-events: none;
  }

  .play-center-profile-price__copy {
    display: flex;
    align-items: flex-end;
    gap: var(--space24);
    min-width: 0;
    height: 36px;
    margin-bottom: var(--space2);
  }

  .play-center-profile-price__value {
    display: inline-flex;
    align-items: baseline;
    gap: var(--space2);
    color: #e79f4d;
    font-family: var(--font-family-din);
    font-size: 32px;
    font-weight: 700;
    line-height: 22px;
  }

  .play-center-profile-price__value span {
    transform: translateY(calc(var(--space2) * -1));
    color: var(--gray-6);
    font-family: var(--font-family-main);
    font-size: 12px;
    line-height: 16px;
  }

  .play-center-profile-price__divider {
    width: 1px;
    height: 26px;
    background: var(--gray-9);
  }

  .play-center-profile-guarantee {
    display: flex;
    flex-direction: column;
    gap: var(--space0);
    min-width: 0;
  }

  .play-center-profile-guarantee strong {
    color: #e79f4d;
    font-size: 14px;
    line-height: 20px;
  }

  .play-center-profile-guarantee span {
    color: var(--gray-6);
    font-size: 12px;
    line-height: 16px;
  }

  .play-center-profile-cta {
    width: 200px;
    height: 40px;
    margin-bottom: var(--space0);
    font-weight: var(--font-weight-semibold);
  }

  .play-center-profile-chat {
    display: flex;
    flex-direction: column;
    width: 360px;
    min-width: 0;
    min-height: 0;
  }

  .play-center-profile-chat__history {
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    padding: var(--space6) var(--space8) var(--space12);
  }

  .play-center-profile-chat__intro {
    display: flex;
    flex-direction: column;
    gap: var(--space8);
    margin-bottom: var(--space20);
  }

  .play-center-profile-chat__intro-avatar .nn-avatar,
  .play-center-profile-chat__intro-avatar .nn-avatar > img {
    width: 70px !important;
    height: 70px !important;
    border-radius: 18px !important;
  }

  .play-center-profile-chat__intro h3 {
    margin: var(--space0);
    color: var(--gray-3);
    font-size: 20px;
    font-weight: var(--font-weight-semibold);
    line-height: 28px;
  }

  .play-center-profile-chat__intro p {
    margin: var(--space0);
    color: var(--gray-6);
    font-size: 14px;
    line-height: 20px;
  }

  .play-center-profile-chat__time {
    display: flex;
    align-items: center;
    gap: var(--space12);
    width: 300px;
    max-width: 100%;
    margin: var(--space20) auto;
    color: var(--gray-6);
    font-size: 12px;
    line-height: 16px;
    white-space: nowrap;
    box-sizing: border-box;
  }

  .play-center-profile-chat__time::before,
  .play-center-profile-chat__time::after {
    content: "";
    height: 1px;
    min-width: 0;
    flex: 1 1 auto;
    background: var(--gray-8);
  }

  .play-center-profile-chat__message {
    display: flex;
    flex-direction: column;
    gap: var(--space16);
    width: 100%;
  }

  .play-center-profile-chat__message .nn-chat-message--other {
    align-items: flex-start;
  }

  .play-center-profile-chat__message .nn-chat-message--other .nn-chat-message__avatar {
    height: auto;
    align-items: flex-start;
    padding-bottom: var(--space0);
  }

  .play-center-profile-chat__status {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 36px;
    color: var(--gray-6);
    font-size: 12px;
    line-height: 16px;
  }

  .play-center-profile-chat__send {
    flex: 0 0 auto;
    width: 100%;
    padding: var(--space0) var(--space8);
  }

  .play-center-profile-chat__send .nn-chat-message-input {
    width: 100%;
    min-width: 0;
  }
`;

function injectDataCardStyles() {
  if (document.getElementById('nn-data-card-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-data-card-styles';
  style.textContent = DataCardStyles;
  document.head.appendChild(style);
}

function createDataCardButton(options) {
  if (typeof window !== 'undefined' && typeof window.nnButton === 'function') {
    return window.nnButton(options);
  }
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `nn-btn nn-btn-${options.variant || 'system'}-${options.level || 'primary'} nn-btn-${options.size || 'default'} ${options.className || ''}`.trim();
  if (options.icon) {
    const icon = document.createElement('span');
    icon.className = 'nn-btn-icon';
    icon.innerHTML = options.icon;
    button.appendChild(icon);
  }
  if (options.text) {
    const text = document.createElement('span');
    text.className = 'nn-btn-text';
    text.textContent = options.text;
    button.appendChild(text);
  }
  return button;
}

function createDataCardAvatar(options) {
  if (typeof window !== 'undefined' && typeof window.createAvatar === 'function') {
    return window.createAvatar(options);
  }
  const img = document.createElement('img');
  img.src = options.src || '';
  img.alt = options.text || 'avatar';
  img.style.width = `${options.size || 40}px`;
  img.style.height = `${options.size || 40}px`;
  img.style.objectFit = 'cover';
  img.style.borderRadius = '100%';
  return img;
}

function extractDataCardAverageColor(image, fallback) {
  try {
    const canvas = document.createElement('canvas');
    const size = 24;
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d');
    if (!context) return fallback;
    context.drawImage(image, 0, 0, size, size);
    const pixels = context.getImageData(0, 0, size, size).data;
    let red = 0;
    let green = 0;
    let blue = 0;
    let weight = 0;
    for (let index = 0; index < pixels.length; index += 4) {
      const alpha = pixels[index + 3] / 255;
      if (alpha < 0.2) continue;
      const currentWeight = alpha;
      red += pixels[index] * currentWeight;
      green += pixels[index + 1] * currentWeight;
      blue += pixels[index + 2] * currentWeight;
      weight += currentWeight;
    }
    if (!weight) return fallback;
    return `rgb(${Math.round(red / weight)}, ${Math.round(green / weight)}, ${Math.round(blue / weight)})`;
  } catch (error) {
    return fallback;
  }
}

function extractDataCardImageAccent(image, fallback) {
  try {
    const canvas = document.createElement('canvas');
    const size = 24;
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d');
    if (!context) return fallback;
    context.drawImage(image, 0, 0, size, size);
    const pixels = context.getImageData(0, 0, size, size).data;
    let red = 0;
    let green = 0;
    let blue = 0;
    let weight = 0;
    for (let index = 0; index < pixels.length; index += 4) {
      const alpha = pixels[index + 3] / 255;
      if (alpha < 0.2) continue;
      const max = Math.max(pixels[index], pixels[index + 1], pixels[index + 2]);
      const min = Math.min(pixels[index], pixels[index + 1], pixels[index + 2]);
      const saturation = (max - min) / 255;
      const brightness = max / 255;
      const currentWeight = alpha * (0.7 + saturation * 1.6) * (0.8 + brightness * 0.6);
      red += pixels[index] * currentWeight;
      green += pixels[index + 1] * currentWeight;
      blue += pixels[index + 2] * currentWeight;
      weight += currentWeight;
    }
    if (!weight) return fallback;
    return `rgb(${Math.round(red / weight)}, ${Math.round(green / weight)}, ${Math.round(blue / weight)})`;
  } catch (error) {
    return fallback;
  }
}

function applyDataCardImageColor(image, fallback, callback, extractor) {
  const syncColor = function() {
    callback(extractor(image, fallback));
  };
  image.addEventListener('load', syncColor, { once: true });
  image.addEventListener('error', function() {
    callback(fallback);
  }, { once: true });
  if (image.complete && image.naturalWidth) {
    syncColor();
  }
}

const DataCardAvatarAccentFallbacks = {
  'Accompany play/1.png': 'rgb(169, 139, 146)',
  'Accompany play/2.png': 'rgb(135, 109, 120)',
  'Accompany play/3.png': 'rgb(167, 158, 168)',
  'Accompany play/4.png': 'rgb(110, 95, 87)',
  'Accompany play/5.png': 'rgb(83, 80, 103)',
  'Accompany play/6.png': 'rgb(133, 124, 116)',
  'Accompany play/7.png': 'rgb(148, 117, 127)',
  'Accompany play/8.png': 'rgb(133, 124, 121)',
  'Accompany play/9.png': 'rgb(112, 98, 94)',
  'Accompany play/10.png': 'rgb(171, 151, 140)'
};

function getDataCardAvatarAccentFallback(src) {
  const normalizedSrc = decodeURIComponent(String(src || '')).replace(/\\/g, '/');
  const matchedKey = Object.keys(DataCardAvatarAccentFallbacks).find(function(key) {
    return normalizedSrc.includes(key);
  });
  return matchedKey ? DataCardAvatarAccentFallbacks[matchedKey] : '#5e7bb6';
}

const DataCardLocalGameIcons = {
  PUBG: '../image/Game%20logo/game1.webp',
  'APEX英雄': '../image/Game%20logo/game2.webp',
  '永劫无间': '../image/Game%20logo/game3.webp',
  '英雄联盟': '../image/Game%20logo/game4.webp',
  CS2: '../image/Game%20logo/game5.webp',
  '无畏契约': '../image/Game%20logo/game7.webp',
  '和平精英': '../image/Game%20logo/game8.webp',
  '三角洲': '../image/Game%20logo/game9.webp',
  '穿越火线': '../image/Game%20logo/game10.webp',
  '王者荣耀': '../image/Game%20logo/game11.webp'
};

function getDataCardLocalGameIcon(item) {
  return DataCardLocalGameIcons[item.name] || item.icon || '../image/Game%20logo/game9.webp';
}

function createDataCard(options = {}) {
  injectDataCardStyles();

  const root = document.createElement('div');
  root.className = ['play-center-profile-modal', options.className || ''].filter(Boolean).join(' ');
  root.setAttribute('aria-hidden', 'true');
  root.innerHTML = `
    <div class="play-center-profile-dialog" role="dialog" aria-modal="true" aria-label="${options.ariaLabel || 'Play Data Card 陪玩资料卡'}">
      <button class="play-center-profile-close" type="button" aria-label="关闭资料卡">
        <i class="nnicon nicon-a-close-lineguanbi-xianxing"></i>
      </button>
      <div class="play-center-profile-voice">
        <div class="play-center-profile-voice__icons">
          <i class="nnicon nicon-a-microphone-linewumaikefeng-xianxing"></i>
          <i class="nnicon nicon-a-headphone-linekaishengyin-xianxing"></i>
        </div>
        <div class="play-center-profile-voice__room">
          <span>临时语音</span>
          <div class="play-center-profile-voice__avatars"></div>
        </div>
      </div>
      <div class="play-center-profile-body">
        <section class="play-center-profile-main">
          <div class="play-center-profile-banner"></div>
          <div class="play-center-profile-header-mask" aria-hidden="true"></div>
          <div class="play-center-profile-avatar-slot"></div>
          <div class="play-center-profile-headline">
            <div class="play-center-profile-identity">
              <div class="play-center-profile-name-row">
                <h2 class="play-center-profile-name"></h2>
                <i class="nnicon nicon-a-Womannv play-center-profile-gender"></i>
              </div>
              <span class="play-center-profile-nn"></span>
            </div>
            <div class="play-center-profile-actions">
              <div class="play-center-profile-report-button"></div>
              <div class="play-center-profile-share-button"></div>
            </div>
          </div>
          <div class="play-center-profile-scroll">
            <section class="play-center-profile-section">
              <div class="play-center-profile-section__header">
                <h3 class="play-center-profile-section__title">TA的服务</h3>
                <button class="play-center-profile-service-voice" type="button" aria-label="播放服务语音" aria-pressed="false">
                  <span class="play-center-profile-service-voice__duration">20S</span>
                  <span class="play-center-profile-service-voice__wave" aria-hidden="true">
                    <span class="play-center-profile-service-voice__bar"></span>
                    <span class="play-center-profile-service-voice__bar"></span>
                    <span class="play-center-profile-service-voice__bar"></span>
                    <span class="play-center-profile-service-voice__bar"></span>
                  </span>
                  <span class="play-center-profile-service-voice__play" aria-hidden="true"></span>
                </button>
              </div>
              <div class="play-center-profile-services"></div>
              <p class="play-center-profile-skill"></p>
            </section>
            <section class="play-center-profile-section">
              <h3 class="play-center-profile-section__title">服务项目</h3>
              <div class="play-center-profile-items"></div>
            </section>
            <section class="play-center-profile-section">
              <div class="play-center-profile-tabs">
                <button class="play-center-profile-tab is-active" type="button">游戏截图</button>
                <button class="play-center-profile-tab" type="button">评价 (0)</button>
              </div>
              <div class="play-center-profile-photos"></div>
            </section>
          </div>
          <div class="play-center-profile-price">
            <div class="play-center-profile-price__copy">
              <div class="play-center-profile-price__value"></div>
              <span class="play-center-profile-price__divider" aria-hidden="true"></span>
              <div class="play-center-profile-guarantee">
                <strong><i class="nnicon nicon-a-Security-Guarantee-fillanquanbaozhang-mianxing"></i> 服务保障</strong>
                <span>全程服务护航，不爽一键包赔</span>
              </div>
            </div>
            <div class="play-center-profile-cta-button"></div>
          </div>
        </section>
        <aside class="play-center-profile-chat" aria-label="私聊记录">
          <div class="play-center-profile-chat__history">
            <div class="play-center-profile-chat__intro">
              <div class="play-center-profile-chat__intro-avatar"></div>
              <h3 class="play-center-profile-chat-name"></h3>
              <p>这里是您与 用户昵称 私信记录的开头。</p>
            </div>
            <div class="play-center-profile-chat__time">2023年7月11日</div>
            <div class="play-center-profile-chat__message"></div>
          </div>
          <div class="play-center-profile-chat__send"></div>
        </aside>
      </div>
    </div>
  `;

  const closeButton = root.querySelector('.play-center-profile-close');
  const profileDialog = root.querySelector('.play-center-profile-dialog');
  const profileMain = root.querySelector('.play-center-profile-main');
  const profileBanner = root.querySelector('.play-center-profile-banner');
  const profileName = root.querySelector('.play-center-profile-name');
  const profileNn = root.querySelector('.play-center-profile-nn');
  const profileAvatarSlot = root.querySelector('.play-center-profile-avatar-slot');
  const voiceIcons = root.querySelector('.play-center-profile-voice__icons');
  const voiceAvatars = root.querySelector('.play-center-profile-voice__avatars');
  const chatAvatarSlot = root.querySelector('.play-center-profile-chat__intro-avatar');
  const chatName = root.querySelector('.play-center-profile-chat-name');
  const chatMessageSlot = root.querySelector('.play-center-profile-chat__message');
  const chatInputSlot = root.querySelector('.play-center-profile-chat__send');
  const profilePrice = root.querySelector('.play-center-profile-price__value');
  const profileSkill = root.querySelector('.play-center-profile-skill');
  const serviceVoice = root.querySelector('.play-center-profile-service-voice');
  const serviceVoiceDuration = root.querySelector('.play-center-profile-service-voice__duration');
  const profileScroll = root.querySelector('.play-center-profile-scroll');
  const profileScrollbar = typeof window !== 'undefined' && typeof window.createScrollbar === 'function'
    ? window.createScrollbar({
      target: profileScroll,
      container: profileMain,
      hoverTarget: profileMain,
      variant: 'page',
      top: 198,
      right: 2,
      bottom: 64,
      minThumbSize: 32,
      className: 'play-center-profile-scrollbar'
    })
    : null;
  const services = root.querySelector('.play-center-profile-services');
  const items = root.querySelector('.play-center-profile-items');
  const photos = root.querySelector('.play-center-profile-photos');

  if (voiceIcons && typeof window !== 'undefined' && typeof window.createVoicePanelVolumeControl === 'function') {
    voiceIcons.innerHTML = '';
    voiceIcons.appendChild(window.createVoicePanelVolumeControl({ type: 'mic', value: 50, showPopover: false }));
    voiceIcons.appendChild(window.createVoicePanelVolumeControl({ type: 'sound', value: 50, showPopover: false }));
  }

  root.querySelector('.play-center-profile-report-button').appendChild(createDataCardButton({
    variant: 'system',
    level: 'tertiary',
    size: 'default',
    text: '举报',
    icon: '<i class="nnicon nicon-a-report-linejubao-xianxing"></i>',
    iconPosition: 'left',
    iconSize: 'var(--icon-size-x8)',
    className: 'play-center-profile-action'
  }));
  root.querySelector('.play-center-profile-share-button').appendChild(createDataCardButton({
    variant: 'system',
    level: 'secondary',
    size: 'default',
    text: '分享',
    icon: '<i class="nnicon nicon-a-Share-linefenxiang-xianxing"></i>',
    iconPosition: 'left',
    iconSize: 'var(--icon-size-x8)',
    className: 'play-center-profile-action play-center-profile-action--share'
  }));
  root.querySelector('.play-center-profile-cta-button').appendChild(createDataCardButton({
    variant: 'primary',
    level: 'primary',
    size: 'large',
    text: '立即找TA玩',
    className: 'play-center-profile-cta'
  }));

  if (serviceVoice) {
    serviceVoice.addEventListener('click', function(event) {
      event.preventDefault();
      const isPlaying = serviceVoice.classList.toggle('is-playing');
      serviceVoice.setAttribute('aria-pressed', isPlaying ? 'true' : 'false');
      serviceVoice.setAttribute('aria-label', isPlaying ? '停止服务语音' : '播放服务语音');
    });
  }

  function renderAvatar(slot, src, size, status) {
    if (!slot) return;
    slot.innerHTML = '';
    slot.appendChild(createDataCardAvatar({ src, size, status: status || null }));
  }

  function renderVoiceAvatars(avatars) {
    voiceAvatars.innerHTML = '';
    avatars.slice(0, 5).forEach(function(src) {
      const slot = document.createElement('span');
      slot.appendChild(createDataCardAvatar({ src, size: 32 }));
      voiceAvatars.appendChild(slot);
    });
    const count = document.createElement('span');
    count.className = 'play-center-profile-voice__count';
    count.textContent = `${Math.max(avatars.length, 5)}+`;
    voiceAvatars.appendChild(count);
  }

  function syncAvatarAccent(src) {
    const fallback = getDataCardAvatarAccentFallback(src);
    const initialColor = fallback;
    profileDialog.style.setProperty('--play-center-profile-avatar-accent', initialColor);
    profileMain.style.setProperty('--play-center-profile-avatar-accent', initialColor);
    profileBanner.style.setProperty('--play-center-profile-avatar-accent', initialColor);
    const image = new Image();
    applyDataCardImageColor(image, initialColor, function(color) {
      profileDialog.style.setProperty('--play-center-profile-avatar-accent', color);
      profileMain.style.setProperty('--play-center-profile-avatar-accent', color);
      profileBanner.style.setProperty('--play-center-profile-avatar-accent', color);
    }, extractDataCardAverageColor);
    image.src = src;
  }

  function setServiceActive(button) {
    services.querySelectorAll('.play-center-profile-game').forEach(function(item) {
      item.classList.toggle('is-active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
  }

  function setProfileItemActive(selectedItem) {
    items.querySelectorAll('.play-center-profile-item').forEach(function(item) {
      item.classList.toggle('is-active', item === selectedItem);
      item.setAttribute('aria-pressed', String(item === selectedItem));
    });
  }

  function createServiceElement(item, index) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `play-center-profile-game${index === 0 ? ' is-active' : ''}`;
    button.setAttribute('aria-pressed', String(index === 0));
    button.style.setProperty('--game-accent', item.accent || item.fallback || '#29a874');

    const icon = document.createElement('img');
    icon.className = 'play-center-profile-game__icon';
    icon.alt = '';
    applyDataCardImageColor(icon, item.accent || item.fallback || '#29a874', function(color) {
      button.style.setProperty('--game-accent', color);
    }, extractDataCardImageAccent);
    icon.src = getDataCardLocalGameIcon(item);
    button.appendChild(icon);

    const meta = document.createElement('span');
    meta.className = 'play-center-profile-game__meta';
    const name = document.createElement('span');
    name.className = 'play-center-profile-game__name';
    name.textContent = item.name;
    meta.appendChild(name);
    if (item.rank && typeof window !== 'undefined' && typeof window.createEquityRank === 'function') {
      meta.appendChild(window.createEquityRank(Object.assign({ size: 'default' }, item.rank)));
    }
    button.appendChild(meta);
    button.addEventListener('click', function() {
      setServiceActive(button);
    });
    return button;
  }

  function createProfileItem(item, index) {
    const rootItem = document.createElement('button');
    rootItem.type = 'button';
    rootItem.className = 'play-center-profile-item';
    rootItem.classList.toggle('is-active', index === 0);
    rootItem.setAttribute('aria-pressed', String(index === 0));
    rootItem.textContent = item.name;
    if (item.accent) rootItem.style.setProperty('--item-accent', item.accent);
    const price = document.createElement('small');
    price.textContent = item.price;
    rootItem.appendChild(price);
    rootItem.addEventListener('click', function() {
      setProfileItemActive(rootItem);
    });
    return rootItem;
  }

  function syncProfileScrollbar() {
    if (profileScrollbar) profileScrollbar.update();
  }

  function renderProfileChatInput(options = {}) {
    if (!chatInputSlot || typeof window === 'undefined' || typeof window.createChatMessageInput !== 'function') return;
    chatInputSlot.innerHTML = '';
    const input = window.createChatMessageInput(Object.assign({
      size: 'small',
      state: 'empty',
      showGift: true,
      showUpload: true,
      showSendButton: false,
      interactive: true
    }, options));
    if (options.state === 'reply') {
      input.dataset.state = 'reply';
      input.classList.add('is-reply-fixed');
    }
    chatInputSlot.appendChild(input);
  }

  function appendProfileChatMessage(options = {}) {
    if (!chatMessageSlot || typeof window === 'undefined' || typeof window.createChatMessage !== 'function') return null;
    if (typeof window.injectChatStyles === 'function') {
      window.injectChatStyles();
    }
    const message = window.createChatMessage(options);
    chatMessageSlot.appendChild(message);
    if (profileScrollbar) {
      requestAnimationFrame(function() {
        profileScrollbar.update();
      });
    }
    return message;
  }

  function appendProfileMineMessage(payload, playerData) {
    const text = payload && payload.text ? payload.text.trim() : '';
    if (!text) return;
    appendProfileChatMessage({
      type: 'mine',
      name: playerData.myChatName || '我',
      time: playerData.myChatMessageTime || '刚刚',
      text,
      avatarSrc: playerData.myChatAvatar || '../image/Avatar/头像496.png',
      showReply: false,
      showRead: true,
      onMenuAction: function(action, actionPayload) {
        handleProfileChatAction(action, actionPayload, Object.assign({}, playerData, {
          chatMessageName: playerData.myChatName || '我',
          chatMessage: text
        }));
      }
    });
  }

  function showProfileChatStatus(text) {
    if (!chatMessageSlot) return;
    chatMessageSlot.innerHTML = '';
    const status = document.createElement('div');
    status.className = 'play-center-profile-chat__status';
    status.textContent = text;
    chatMessageSlot.appendChild(status);
  }

  function handleProfileChatAction(action, payload, playerData) {
    const message = payload && payload.message ? payload.message : null;
    const messageText = message ? message.querySelector('.nn-chat-message__text') : null;
    if (action === 'reply') {
      renderProfileChatInput({
        state: 'reply',
        replyUser: playerData.chatMessageName || '棒棒糖',
        replyText: playerData.chatMessage || '没打完进房间，我们4=1他占个坑，别的人看到房间里5个人都不进来了，还不闭麦，吼得耳膜都要破了，进房间的哥们儿听到他的战吼',
        onSend: function(sendPayload) {
          appendProfileMineMessage(sendPayload, playerData);
          renderProfileChatInput({
            onSend: function(nextPayload) {
              appendProfileMineMessage(nextPayload, playerData);
            }
          });
        }
      });
      return;
    }
    if (action === 'copy' && navigator.clipboard && messageText) {
      navigator.clipboard.writeText(messageText.textContent || '').catch(function() {});
      return;
    }
    if (action === 'recall' && message && messageText) {
      messageText.textContent = '消息已撤回';
      return;
    }
    if (action === 'delete') {
      showProfileChatStatus('消息已删除');
      return;
    }
    if (action === 'clear') {
      showProfileChatStatus('消息已无痕删除');
    }
  }

  function renderProfileChat(playerData) {
    if (chatMessageSlot) {
      if (typeof window !== 'undefined' && typeof window.injectChatStyles === 'function') {
        window.injectChatStyles();
      }
      const chatOptions = {
        type: 'other',
        name: playerData.chatMessageName || '棒棒糖',
        time: playerData.chatMessageTime || '8分钟前',
        text: playerData.chatMessage || '没打完进房间，我们4=1他占个坑，别的人看到房间里5个人都不进来了，还不闭麦，吼得耳膜都要破了，进房间的哥们儿听到他的战吼',
        avatarSrc: playerData.chatMessageAvatar || playerData.imageSrc,
        showReply: false,
        onMenuAction: function(action, payload) {
          handleProfileChatAction(action, payload, playerData);
        }
      };
      if (typeof window !== 'undefined' && typeof window.renderChatMessage === 'function') {
        window.renderChatMessage(chatMessageSlot, chatOptions);
      } else if (typeof window !== 'undefined' && typeof window.createChatMessage === 'function') {
        chatMessageSlot.innerHTML = '';
        chatMessageSlot.appendChild(window.createChatMessage(chatOptions));
      } else {
        chatMessageSlot.innerHTML = `
          <div class="play-center-profile-chat-message-fallback">
            <strong>${chatOptions.name}</strong>
            <span>${chatOptions.time}</span>
            <p>${chatOptions.text}</p>
          </div>
        `;
      }
    }

    renderProfileChatInput({
      onSend: function(payload) {
        appendProfileMineMessage(payload, playerData);
      }
    });
  }

  function setData(data = {}) {
    const playerData = Object.assign({
      imageSrc: '../image/Accompany%20play/1.png',
      name: '赛博机器联盟',
      nn: '555368',
      chatTitle: '和你隔了几片海',
      price: '1.2',
      priceUnit: '元',
      voiceDuration: '20S',
      description: '稳定在线接单，四排沟通清晰，擅长架枪和运营路线规划',
      chatMessageName: '棒棒糖',
      chatMessageTime: '8分钟前',
      chatMessage: '没打完进房间，我们4=1他占个坑，别的人看到房间里5个人都不进来了，还不闭麦，吼得耳膜都要破了，进房间的哥们儿听到他的战吼',
      services: [],
      items: [],
      photos: [],
      voiceAvatars: []
    }, data);

    profileName.textContent = playerData.name;
    profileNn.textContent = `NN: ${playerData.nn}`;
    syncAvatarAccent(playerData.imageSrc);
    renderAvatar(profileAvatarSlot, playerData.imageSrc, 120);
    renderAvatar(chatAvatarSlot, playerData.imageSrc, 70);
    renderVoiceAvatars(playerData.voiceAvatars || []);
    renderProfileChat(playerData);
    chatName.textContent = playerData.chatTitle;
    profilePrice.innerHTML = `${playerData.price}<span>${playerData.priceUnit || '元'}</span>`;
    if (serviceVoiceDuration) serviceVoiceDuration.textContent = playerData.voiceDuration || '20S';
    profileSkill.textContent = `技能介绍：${playerData.description}`;

    services.innerHTML = '';
    playerData.services.slice(0, 8).forEach(function(item, index) {
      services.appendChild(createServiceElement(item, index));
    });

    items.innerHTML = '';
    playerData.items.forEach(function(item, index) {
      items.appendChild(createProfileItem(item, index));
    });

    photos.innerHTML = '';
    playerData.photos.forEach(function(src) {
      const image = document.createElement('img');
      image.src = src;
      image.alt = '';
      photos.appendChild(image);
    });
    requestAnimationFrame(syncProfileScrollbar);
  }

  function open(data) {
    if (data) setData(data);
    root.classList.add('is-open');
    root.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(syncProfileScrollbar);
  }

  function close() {
    root.classList.remove('is-open');
    root.setAttribute('aria-hidden', 'true');
  }

  closeButton.addEventListener('click', close);
  root.addEventListener('click', function(event) {
    if (event.target === root) close();
  });
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && root.classList.contains('is-open')) close();
  });
  if (profileScroll) {
    profileScroll.addEventListener('scroll', syncProfileScrollbar);
  }
  window.addEventListener('resize', syncProfileScrollbar);

  root.setData = setData;
  root.open = open;
  root.close = close;
  if (options.data) setData(options.data);
  return root;
}

function renderDataCard(container, options = {}) {
  const target = typeof container === 'string' ? document.querySelector(container) : container;
  if (!target) return null;
  const card = createDataCard(options);
  target.appendChild(card);
  return card;
}

if (typeof window !== 'undefined') {
  window.injectDataCardStyles = injectDataCardStyles;
  window.createDataCard = createDataCard;
  window.renderDataCard = renderDataCard;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectDataCardStyles,
    createDataCard,
    renderDataCard
  };
}
