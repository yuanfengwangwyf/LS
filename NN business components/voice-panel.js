const VoicePanelStyles = `
  :root {
    --voice-panel-morph-ease: cubic-bezier(0.22, 1, 0.36, 1);
    --voice-panel-morph-duration: 420ms;
  }

  @keyframes nn-voice-panel-tooltip-appear-top {
    0% {
      opacity: 0;
      transform: translateX(-50%) scale(0.5);
    }
    70% {
      opacity: 1;
      transform: translateX(-50%) scale(1.01);
    }
    85% {
      transform: translateX(-50%) scale(0.995);
    }
    100% {
      transform: translateX(-50%) scale(1);
    }
  }

  @keyframes nn-voice-panel-tooltip-appear-right {
    0% {
      opacity: 0;
      transform: translateY(-50%) scale(0.5);
    }
    70% {
      opacity: 1;
      transform: translateY(-50%) scale(1.01);
    }
    85% {
      transform: translateY(-50%) scale(0.995);
    }
    100% {
      transform: translateY(-50%) scale(1);
    }
  }

  .nn-voice-panel {
    display: flex;
    flex-direction: column;
    width: 342px;
    box-sizing: border-box;
    overflow: visible;
    border: 0;
    border-radius: var(--border-radius-2r);
    background: transparent;
    color: var(--gray-3);
    font-family: var(--font-family-main);
    will-change: border-radius;
    transition: border-radius var(--voice-panel-morph-duration) var(--voice-panel-morph-ease);
  }

  .nn-voice-panel.is-card-variant {
    box-shadow: inset 0 0 0 1px var(--gray-8);
  }

  .nn-voice-panel.is-status-menu-open {
    position: relative;
    z-index: 3000;
  }

  .nn-voice-panel.is-taskbar-variant {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--space4);
    width: auto;
    height: 56px;
    padding: var(--space0) var(--space16);
    border: 1px solid transparent;
    border-radius: var(--border-radius-8r);
    background: transparent;
    box-sizing: border-box;
    transform-origin: right center;
  }

  .nn-voice-panel.is-taskbar-variant:hover {
    border-color: var(--gray-8);
    background: var(--gray-10);
  }

  .nn-voice-panel.is-taskbar-variant.is-width-animating {
    overflow: hidden;
    transition: width 220ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .nn-voice-panel__taskbar-info {
    display: flex;
    align-items: center;
    gap: var(--space10);
    width: 146px;
    min-width: 0;
    flex: 0 0 146px;
  }

  .nn-voice-panel__taskbar-game {
    display: block;
    width: 36px;
    height: 36px;
    border-radius: 6px;
    object-fit: cover;
    flex: 0 0 36px;
  }

  .nn-voice-panel__taskbar-text {
    display: flex;
    min-width: 0;
    flex: 1 1 auto;
    flex-direction: column;
    gap: var(--space0);
    white-space: nowrap;
  }

  .nn-voice-panel__taskbar-title,
  .nn-voice-panel__taskbar-room {
    display: block;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-voice-panel__taskbar-title {
    color: var(--gray-4);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-semibold);
  }

  .nn-voice-panel__taskbar-room {
    color: var(--gray-6);
    font-size: 12px;
    line-height: 16px;
    font-weight: var(--font-weight-normal);
  }

  .nn-voice-panel__taskbar-info:hover .nn-voice-panel__taskbar-room {
    color: var(--gray-5);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .nn-voice-panel.is-taskbar-left .nn-voice-panel__taskbar-room {
    color: var(--gray-6);
    text-decoration: none;
  }

  .nn-voice-panel.is-taskbar-left .nn-voice-panel__taskbar-info:hover .nn-voice-panel__taskbar-room {
    color: var(--gray-6);
    text-decoration: none;
  }

  .nn-voice-panel.is-taskbar-left .nn-voice-panel__taskbar-info:hover .nn-voice-panel__taskbar-title {
    color: var(--gray-3);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .nn-voice-panel__taskbar-info:hover {
    cursor: pointer;
  }

  .nn-voice-panel.is-taskbar-no-community .nn-voice-panel__taskbar-info {
    display: none;
  }

  .nn-voice-panel__taskbar-voice {
    display: flex;
    align-items: center;
    gap: var(--space4);
    height: 36px;
    padding: var(--space4);
    border: 1px solid var(--Esports-Blue-LD);
    border-radius: var(--border-radius-10r);
    box-sizing: border-box;
    flex: 0 0 auto;
  }

  .nn-voice-panel__taskbar-avatar {
    flex: 0 0 auto;
  }

  .nn-voice-panel__taskbar-wave {
    width: 60px;
    height: 24px;
    color: var(--gray-3);
    --voice-panel-wave-color: var(--gray-3);
  }

  .nn-voice-panel__taskbar-status {
    display: none;
    align-items: center;
    justify-content: center;
    gap: var(--space4);
    width: auto;
    height: 24px;
    color: var(--gray-6);
    font-size: 12px;
    line-height: 16px;
    font-weight: var(--font-weight-normal);
    white-space: nowrap;
  }

  .nn-voice-panel__taskbar-status-dot {
    flex: 0 0 auto;
  }

  .nn-voice-panel.is-taskbar-left .nn-voice-panel__taskbar-wave {
    display: none;
  }

  .nn-voice-panel.is-taskbar-left .nn-voice-panel__taskbar-voice {
    border-color: var(--gray-8);
  }

  .nn-voice-panel.is-taskbar-left .nn-voice-panel__taskbar-voice:hover {
    cursor: pointer;
  }

  .nn-voice-panel.is-taskbar-left .nn-voice-panel__taskbar-status {
    display: inline-flex;
  }

  .nn-voice-panel.is-taskbar-left .nn-voice-panel__leave {
    display: none;
  }

  .nn-voice-panel__taskbar-controls {
    display: flex;
    align-items: center;
    gap: var(--space0);
    flex: 0 0 auto;
  }

  .nn-voice-panel.is-taskbar-variant .nn-voice-panel__volume,
  .nn-voice-panel.is-taskbar-variant .nn-voice-panel__control {
    width: 28px;
    height: 36px;
    flex: 0 0 28px;
    margin: var(--space0);
    border-radius: var(--border-radius-2r);
  }

  .nn-voice-panel.is-taskbar-variant .nn-voice-panel__volume-button {
    width: 28px;
    height: 36px;
    border-radius: var(--border-radius-2r);
  }

  .nn-voice-panel.is-taskbar-variant .nn-voice-panel__volume:hover .nn-voice-panel__volume-button,
  .nn-voice-panel.is-taskbar-variant .nn-voice-panel__leave:hover {
    background: transparent;
  }

  .nn-voice-panel.is-taskbar-variant .nn-voice-panel__push-control {
    width: auto;
    max-width: none;
    height: 36px;
    min-width: 0;
    flex: 0 0 auto;
    padding: var(--space8) var(--space6);
    border-radius: var(--border-radius-2r);
  }

  .nn-voice-panel.is-taskbar-variant .nn-voice-panel__push-content {
    flex: 0 0 auto;
    max-width: none;
  }

  .nn-voice-panel.is-taskbar-variant .nn-voice-panel__push-label {
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
  }

  .nn-voice-panel.is-taskbar-variant .nn-voice-panel__push-arrow {
    flex: 0 0 20px;
  }

  .nn-voice-panel.is-taskbar-variant .nn-voice-panel__leave {
    width: 36px;
    height: 36px;
    flex: 0 0 36px;
    margin: var(--space0);
    border-radius: var(--border-radius-4r);
  }

  .nn-voice-panel.is-taskbar-variant .nn-voice-panel__leave .nnicon {
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    font-size: var(--icon-size-x12);
    line-height: var(--icon-size-x12);
  }

  .nn-voice-panel.is-taskbar-variant .nn-voice-panel__leave-animation {
    inset: auto;
    left: 50%;
    top: 50%;
    right: auto;
    bottom: auto;
    width: 24px;
    height: 24px;
    transform: translate(-50%, -50%);
  }

  .nn-voice-panel__card {
    display: flex;
    flex-direction: column;
    gap: var(--space8);
    width: 100%;
    padding: var(--space8) var(--space8) var(--space0);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    background: var(--gray-1);
    box-sizing: border-box;
    will-change: border-radius, gap, padding;
    transition:
      border-radius var(--voice-panel-morph-duration) var(--voice-panel-morph-ease),
      gap var(--voice-panel-morph-duration) var(--voice-panel-morph-ease),
      padding var(--voice-panel-morph-duration) var(--voice-panel-morph-ease);
  }

  .nn-voice-panel.is-card-variant .nn-voice-panel__card {
    border-color: transparent;
    border-radius: 0;
    background: transparent;
  }

  .nn-voice-panel__top {
    display: flex;
    align-items: center;
    gap: var(--space8);
    width: 100%;
    box-sizing: border-box;
  }

  .nn-voice-panel.is-voice-room-hidden .nn-voice-panel__top {
    max-height: 0;
    margin: calc(var(--space8) * -1) var(--space0) var(--space0);
    opacity: 0;
    overflow: hidden;
    pointer-events: none;
    transform: translateY(8px);
  }

  .nn-voice-panel__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;
    gap: var(--space0);
    min-width: 0;
    padding: var(--space0);
    border-radius: var(--border-radius-4r);
    flex: 1 1 auto;
    box-sizing: border-box;
  }

  .nn-voice-panel__room-switch {
    position: relative;
    display: flex;
    align-self: stretch;
    min-width: 0;
    height: 48px;
    flex: 1 1 auto;
    overflow: clip;
    overflow-clip-margin: var(--space4);
    box-sizing: border-box;
  }

  .nn-voice-panel__room-switch-track {
    display: flex;
    flex-direction: column;
    gap: var(--space8);
    width: 100%;
    min-width: 0;
    height: 104px;
    transform: translateY(0);
    transition: none;
  }

  .nn-voice-panel__room-switch:hover .nn-voice-panel__room-switch-track,
  .nn-voice-panel__room-switch.is-room-switch-hover .nn-voice-panel__room-switch-track,
  .nn-voice-panel__room-switch.is-speaker-cycle-paused .nn-voice-panel__room-switch-track {
    transform: translateY(-56px);
  }

  .nn-voice-panel__room-switch.is-speaker-cycle-paused .nn-voice-panel__room-switch-track {
    transition: none;
  }

  .nn-voice-panel__room-switch.is-speaker-cycle-jump .nn-voice-panel__room-switch-track {
    transition: none;
  }

  .nn-voice-panel__room-switch-panel {
    display: flex;
    align-items: stretch;
    width: 100%;
    min-width: 0;
    height: 48px;
    padding: var(--space0);
    flex: 0 0 48px;
    box-sizing: border-box;
  }

  .nn-voice-panel__room-switch-panel.is-speaker {
    padding: var(--space0);
  }

  .nn-voice-panel__title-row {
    display: flex;
    align-items: center;
    gap: var(--space2);
    width: 100%;
    height: 24px;
    padding: var(--space2) var(--space0);
    min-width: 0;
    box-sizing: border-box;
  }

  .nn-voice-panel__room-no {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 22px;
    height: 18px;
    padding: var(--space0) var(--space4);
    border-radius: var(--border-radius-2r);
    background: var(--Esports-Blue);
    color: var(--Neutral-0);
    font-size: 12px;
    line-height: 18px;
    font-weight: var(--font-weight-medium);
    flex-shrink: 0;
    box-sizing: border-box;
  }

  .nn-voice-panel__title {
    min-width: 0;
    color: var(--Esports-Blue);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-medium);
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-decoration: none;
    text-underline-offset: 3px;
    cursor: pointer;
  }

  .nn-voice-panel__title:hover {
    text-decoration: underline;
  }

  .nn-voice-panel__avatars {
    display: flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
    width: 100%;
    height: 24px;
    overflow: hidden;
  }

  .nn-voice-panel__avatar {
    flex: 0 0 auto;
  }

  .nn-voice-panel__more {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 18px;
    border-radius: 9px;
    background: var(--gray-9);
    color: var(--gray-6);
    font-size: 11px;
    line-height: 18px;
    font-weight: var(--font-weight-medium);
    flex-shrink: 0;
  }

  .nn-voice-panel__meta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space2);
    width: auto;
    color: var(--gray-6);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-medium);
    flex: 0 0 auto;
  }

  .nn-voice-panel__meta-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x9);
    height: var(--icon-size-x9);
    flex: 0 0 var(--icon-size-x9);
    overflow: hidden;
  }

  .nn-voice-panel__meta-icon-img {
    display: block;
    width: var(--icon-size-x9);
    height: var(--icon-size-x9);
    object-fit: contain;
  }

  .nn-voice-panel__meta-icon-img--dark {
    display: none;
  }

  body.dark-mode .nn-voice-panel__meta-icon-img--light {
    display: none;
  }

  body.dark-mode .nn-voice-panel__meta-icon-img--dark {
    display: block;
  }

  .nn-voice-panel__meta-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    color: var(--gray-6);
  }

  .nn-voice-panel__meta-current,
  .nn-voice-panel__meta-total {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
  }

  .nn-voice-panel__meta-slash {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 8px;
  }

  .nn-voice-panel__leave {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    margin-left: var(--space0);
    border: 0;
    border-radius: var(--border-radius-4r);
    background: transparent;
    color: var(--Red);
    font-size: 24px;
    line-height: 1;
    flex: 0 0 44px;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-voice-panel__leave:hover {
    background: var(--gray-10);
  }

  .nn-voice-panel__leave .nnicon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    font-size: var(--icon-size-x12);
    line-height: var(--icon-size-x12);
  }

  .nn-voice-panel__leave-animation {
    position: absolute;
    inset: 10px;
    display: block;
    width: 24px;
    height: 24px;
    opacity: 0;
    pointer-events: none;
    transform-origin: center;
  }

  .nn-voice-panel__leave-animation-mark {
    transform-origin: 11.99px 12.31px;
  }

  .nn-voice-panel__leave:hover .nnicon {
    opacity: 0;
  }

  .nn-voice-panel__leave:hover .nn-voice-panel__leave-animation {
    opacity: 1;
  }

  .nn-voice-panel__leave:hover .nn-voice-panel__leave-animation-mark {
    animation: nn-voice-panel-leave-hover 800ms cubic-bezier(0.4, 0, 0.8, 1) 1;
  }

  @keyframes nn-voice-panel-leave-hover {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }

    12.5% {
      transform: translate(0, 0) rotate(15deg);
    }

    50% {
      transform: translate(0, -2px) rotate(-15deg);
    }

    75% {
      transform: translate(0, -1px) rotate(8deg);
    }

    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }

  .nn-voice-panel__leave-tooltip {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 8px);
    z-index: 30;
    display: inline-flex;
    align-items: center;
    min-height: 34px;
    padding: var(--space6) var(--space12);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    background: var(--gray-2);
    box-shadow: var(--shadow-sm);
    color: var(--gray-5);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateX(-50%);
    transition: opacity 0.16s ease 0s, visibility 0s linear 0.16s;
  }

  .nn-voice-panel__leave-tooltip::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 8px;
    height: 8px;
    border-right: 1px solid var(--gray-8);
    border-bottom: 1px solid var(--gray-8);
    border-radius: 0 0 2px 0;
    background: var(--gray-2);
    transform: translateX(-50%) rotate(45deg);
  }

  .nn-voice-panel__leave:hover .nn-voice-panel__leave-tooltip {
    opacity: 1;
    visibility: visible;
    transition-delay: 1s, 1s;
  }

  .nn-voice-panel__divider {
    width: calc(100% - 16px);
    height: 0;
    margin: var(--space0) var(--space8);
    background: var(--gray-8);
    opacity: 0;
    flex: 0 0 0;
    transform: scaleX(0);
    transform-origin: center;
    transition:
      height var(--voice-panel-morph-duration) var(--voice-panel-morph-ease),
      flex-basis var(--voice-panel-morph-duration) var(--voice-panel-morph-ease),
      opacity 270ms ease,
      transform 540ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .nn-voice-panel.is-card-variant .nn-voice-panel__divider {
    height: 0;
    opacity: 0;
    flex-basis: 0;
    transform: scaleX(0);
  }

  .nn-voice-panel__control-tooltip {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 8px);
    z-index: 10;
    display: inline-flex;
    align-items: center;
    min-height: 34px;
    padding: var(--space6) var(--space12);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    background: var(--gray-2);
    box-shadow: var(--shadow-sm);
    color: var(--gray-5);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateX(-50%);
    transform-origin: 50% calc(100% + 9px);
    transition: visibility 0s linear 0.16s;
  }

  .nn-voice-panel__control-tooltip::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 8px;
    height: 8px;
    border-right: 1px solid var(--gray-8);
    border-bottom: 1px solid var(--gray-8);
    border-radius: 0 0 2px 0;
    background: var(--gray-2);
    transform: translateX(-50%) rotate(45deg);
  }

  .nn-voice-panel__control:hover .nn-voice-panel__control-tooltip,
  .nn-voice-panel__control:focus-visible .nn-voice-panel__control-tooltip {
    opacity: 1;
    visibility: visible;
    animation: nn-voice-panel-tooltip-appear-top 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) both;
    transition-delay: 0s;
  }

  .nn-voice-panel__bar {
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: var(--space4) var(--space0);
    box-sizing: border-box;
    transition: padding var(--voice-panel-morph-duration) var(--voice-panel-morph-ease);
  }

  .nn-voice-panel.is-card-variant .nn-voice-panel__bar {
    padding: var(--space12) var(--space8);
  }

  .nn-voice-panel__back {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin-right: var(--space0);
    border: 0;
    border-radius: var(--border-radius-2r);
    background: transparent;
    color: var(--gray-4);
    font-size: 20px;
    line-height: 1;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-voice-panel__back:hover {
    background: var(--gray-10);
    color: var(--gray-3);
  }

  .nn-voice-panel__back .nnicon,
  .nn-voice-panel__control .nnicon,
  .nn-voice-panel__volume-button .nnicon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    font-size: var(--icon-size-x10);
    line-height: var(--icon-size-x10);
    flex: 0 0 var(--icon-size-x10);
  }

  .nn-voice-panel__back .nnicon {
    transition: transform 240ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .nn-voice-panel__back.is-turned .nnicon {
    transform: rotate(180deg);
  }

  .nn-voice-panel__back .nn-tooltip.nn-tooltip-top-left .nn-tooltip-beak {
    left: 12px;
  }

  .nn-voice-panel__speaker {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 40px;
    margin-right: var(--space0);
    flex: 0 0 52px;
  }

  .nn-voice-panel__control {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin-right: var(--space0);
    border: 0;
    border-radius: var(--border-radius-2r);
    background: transparent;
    color: var(--gray-4);
    font-size: 20px;
    line-height: 1;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-voice-panel__control:hover {
    background: var(--gray-10);
    color: var(--gray-3);
  }

  .nn-voice-panel__control-tooltip-unavailable {
    display: none;
  }

  .nn-voice-panel__volume {
    position: relative;
    display: inline-flex;
    width: 32px;
    height: 32px;
    margin-right: var(--space0);
    flex: 0 0 32px;
  }

  .nn-voice-panel__volume::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 32px;
    z-index: 19;
    width: 32px;
    height: 8px;
  }

  .nn-voice-panel__volume-button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: 0;
    border-radius: var(--border-radius-2r);
    background: transparent;
    color: var(--gray-4);
    font-size: 20px;
    line-height: 1;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-voice-panel__volume-animation {
    position: absolute;
    left: 50%;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    color: inherit;
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, -50%);
  }

  .nn-voice-panel__volume-animation svg {
    display: block;
    width: 20px;
    height: 20px;
  }

  .nn-voice-panel__volume-animation > svg {
    transform: translateZ(0);
  }

  .nn-voice-panel__volume-animation--mic svg [fill],
  .nn-voice-panel__volume-animation--mic-open-hover svg [fill],
  .nn-voice-panel__volume-animation--mic-open-click svg [fill],
  .nn-voice-panel__volume-animation--phone svg [fill],
  .nn-voice-panel__volume-animation--phone-open-hover svg [fill],
  .nn-voice-panel__volume-animation--phone-open-click svg [fill] {
    fill: var(--gray-5) !important;
  }

  .nn-voice-panel__volume-animation--mic svg [stroke],
  .nn-voice-panel__volume-animation--mic-open-hover svg [stroke],
  .nn-voice-panel__volume-animation--mic-open-click svg [stroke],
  .nn-voice-panel__volume-animation--phone svg [stroke],
  .nn-voice-panel__volume-animation--phone-open-hover svg [stroke],
  .nn-voice-panel__volume-animation--phone-open-click svg [stroke] {
    stroke: var(--gray-5) !important;
  }

  .nn-voice-panel__volume-animation--mic-open-hover svg [fill],
  .nn-voice-panel__volume-animation--phone-open-hover svg [fill] {
    fill: var(--gray-3) !important;
  }

  .nn-voice-panel__volume-animation--mic-open-hover svg [stroke],
  .nn-voice-panel__volume-animation--phone-open-hover svg [stroke] {
    stroke: var(--gray-3) !important;
  }

  .nn-voice-panel__volume-animation--mic-close svg [fill],
  .nn-voice-panel__volume-animation--phone-close svg [fill] {
    fill: var(--Red) !important;
  }

  .nn-voice-panel__volume-animation--mic-close svg [stroke],
  .nn-voice-panel__volume-animation--phone-close svg [stroke] {
    stroke: var(--Red) !important;
  }

  .nn-voice-panel__volume.is-mic.is-state-open:not(.is-hovering):not(.is-animating-close):not(.is-animating-open) .nn-voice-panel__volume-animation--mic,
  .nn-voice-panel__volume.is-mic.is-state-closed:not(.is-hovering):not(.is-animating-close):not(.is-animating-open) .nn-voice-panel__volume-animation--mic-close {
    display: none;
  }

  .nn-voice-panel__volume.is-sound .nn-voice-panel__volume-button .nnicon {
    opacity: 0;
  }

  .nn-voice-panel__volume.is-sound.is-state-open:not(.is-hovering):not(.is-animating-close):not(.is-animating-open) .nn-voice-panel__volume-animation--phone,
  .nn-voice-panel__volume.is-sound.is-state-closed:not(.is-hovering):not(.is-animating-close):not(.is-animating-open) .nn-voice-panel__volume-animation--phone-close {
    opacity: 1;
  }

  .nn-voice-panel__volume:not(.is-hover-suppressed):hover .nn-voice-panel__volume-button .nnicon,
  .nn-voice-panel__volume.is-hovering .nn-voice-panel__volume-button .nnicon,
  .nn-voice-panel__volume.is-animating-close .nn-voice-panel__volume-button .nnicon,
  .nn-voice-panel__volume.is-animating-open .nn-voice-panel__volume-button .nnicon {
    opacity: 0;
  }

  .nn-voice-panel__volume.is-mic.is-state-open:not(.is-hover-suppressed):hover:not(.is-animating-close):not(.is-animating-open) .nn-voice-panel__volume-animation--mic-open-hover,
  .nn-voice-panel__volume.is-mic.is-state-open.is-hovering:not(.is-animating-close):not(.is-animating-open) .nn-voice-panel__volume-animation--mic-open-hover,
  .nn-voice-panel__volume.is-mic.is-state-closed:not(.is-hover-suppressed):hover:not(.is-animating-close):not(.is-animating-open) .nn-voice-panel__volume-animation--mic-close-hover,
  .nn-voice-panel__volume.is-mic.is-state-closed.is-hovering:not(.is-animating-close):not(.is-animating-open) .nn-voice-panel__volume-animation--mic-close-hover,
  .nn-voice-panel__volume.is-mic.is-animating-close .nn-voice-panel__volume-animation--mic-close-click,
  .nn-voice-panel__volume.is-mic.is-animating-open .nn-voice-panel__volume-animation--mic-open-click {
    opacity: 1;
  }

  .nn-voice-panel__volume.is-sound.is-state-open:not(.is-hover-suppressed):hover:not(.is-animating-close):not(.is-animating-open) .nn-voice-panel__volume-animation--phone-open-hover,
  .nn-voice-panel__volume.is-sound.is-state-open.is-hovering:not(.is-animating-close):not(.is-animating-open) .nn-voice-panel__volume-animation--phone-open-hover,
  .nn-voice-panel__volume.is-sound.is-state-closed:not(.is-hover-suppressed):hover:not(.is-animating-close):not(.is-animating-open) .nn-voice-panel__volume-animation--phone-close-hover,
  .nn-voice-panel__volume.is-sound.is-state-closed.is-hovering:not(.is-animating-close):not(.is-animating-open) .nn-voice-panel__volume-animation--phone-close-hover,
  .nn-voice-panel__volume.is-sound.is-animating-close .nn-voice-panel__volume-animation--phone-close-click,
  .nn-voice-panel__volume.is-sound.is-animating-open .nn-voice-panel__volume-animation--phone-open-click {
    opacity: 1;
  }

  .nn-voice-panel__volume:hover .nn-voice-panel__volume-button {
    background: var(--gray-10);
    color: var(--gray-3);
  }

  .nn-voice-panel__volume.is-muted .nn-voice-panel__volume-button {
    color: var(--Red);
  }

  .nn-voice-panel__volume-popover {
    position: absolute;
    left: 50%;
    bottom: 38px;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 110px;
    padding: var(--space12) var(--space0);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    background: var(--gray-2);
    box-shadow: 0 20px 24px -4px var(--shadow);
    box-sizing: border-box;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translate(-50%, 8px);
    transition:
      opacity 160ms ease,
      visibility 0s linear 160ms,
      transform 220ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .nn-voice-panel__volume:hover .nn-voice-panel__volume-popover {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translate(-50%, 0);
    transition:
      opacity 160ms ease,
      visibility 0s linear 0s,
      transform 220ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .nn-voice-panel__volume-slider.nn-slider {
    --nn-slider-length: 86px;
    --nn-slider-cross-size: 6px;
    --nn-slider-track-thickness: 6px;
    --nn-slider-fill-bg: var(--gray-5);
    --nn-slider-track-bg: var(--gray-9);
  }

  .nn-voice-panel__volume-slider.nn-slider .nn-slider__thumb {
    width: 12px;
    height: 14px;
    border-radius: var(--border-radius-2r);
  }

  .nn-voice-panel__volume:hover .nn-voice-panel__volume-slider.nn-slider[data-tooltip="tooltip"] .nn-slider__tooltip {
    display: inline-flex;
  }

  .nn-voice-panel__volume.is-muted .nn-voice-panel__volume-slider.nn-slider {
    --nn-slider-fill-bg: transparent;
  }

  .nn-voice-panel__volume-tooltip {
    position: absolute;
    left: calc(100% + 4px);
    top: 50%;
    z-index: 21;
    display: inline-flex;
    align-items: center;
    min-height: 34px;
    padding: var(--space6) var(--space12);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    background: var(--gray-2);
    box-shadow: var(--shadow-sm);
    color: var(--gray-5);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(-50%);
    transform-origin: -9px 50%;
    transition: visibility 0s linear 0.16s;
  }

  .nn-voice-panel__volume-tooltip::before {
    content: "";
    position: absolute;
    left: -5px;
    top: 50%;
    width: 8px;
    height: 8px;
    border-left: 1px solid var(--gray-8);
    border-bottom: 1px solid var(--gray-8);
    border-radius: 0 0 0 2px;
    background: var(--gray-2);
    transform: translateY(-50%) rotate(45deg);
  }

  .nn-voice-panel__volume:hover .nn-voice-panel__volume-tooltip {
    opacity: 1;
    visibility: visible;
    animation: nn-voice-panel-tooltip-appear-right 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) both;
    transition-delay: 0s;
  }

  .nn-voice-panel__wave {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--voice-panel-wave-width, 112px);
    height: 24px;
    color: var(--voice-panel-wave-color, var(--gray-4));
    overflow: hidden;
    flex: 1 1 var(--voice-panel-wave-width, 112px);
    min-width: 0;
  }

  .nn-voice-panel__wave-canvas {
    display: block;
    width: 100%;
    height: 24px;
  }

  .nn-voice-panel__push-control {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space4);
    width: auto;
    height: 32px;
    min-width: 0;
    padding: var(--space6);
    border-radius: var(--border-radius-2r);
    background: transparent;
    color: var(--gray-4);
    font-family: var(--font-family-main);
    font-size: 14px;
    line-height: 20px;
    box-sizing: border-box;
    border: 0;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    flex: 1 1 0;
    overflow: visible;
  }

  .nn-voice-panel.is-voice-room-hidden .nn-voice-panel__control--screen,
  .nn-voice-panel.is-voice-room-hidden .nn-voice-panel__control--bgm {
    color: var(--gray-6);
    cursor: not-allowed;
  }

  .nn-voice-panel.is-voice-room-hidden .nn-voice-panel__control--screen:hover,
  .nn-voice-panel.is-voice-room-hidden .nn-voice-panel__control--bgm:hover {
    background: transparent;
    color: var(--gray-6);
  }

  .nn-voice-panel.is-voice-room-hidden .nn-voice-panel__control--screen .nn-voice-panel__control-tooltip-default,
  .nn-voice-panel.is-voice-room-hidden .nn-voice-panel__control--bgm .nn-voice-panel__control-tooltip-default {
    display: none;
  }

  .nn-voice-panel.is-voice-room-hidden .nn-voice-panel__control--screen .nn-voice-panel__control-tooltip-unavailable,
  .nn-voice-panel.is-voice-room-hidden .nn-voice-panel__control--bgm .nn-voice-panel__control-tooltip-unavailable {
    display: inline;
  }

  .nn-voice-panel__push-control:hover {
    background: var(--gray-10);
  }

  .nn-voice-panel__push-key {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 0;
    width: auto;
    max-width: 100%;
    height: 20px;
    padding: var(--space0) var(--space6);
    border-radius: var(--border-radius-4r);
    background: transparent;
    color: var(--gray-3-reverse, var(--gray-1));
    font-size: 12px;
    line-height: 16px;
    font-weight: var(--font-weight-medium);
    flex: 0 1 auto;
    box-sizing: border-box;
    overflow: hidden;
    isolation: isolate;
  }

  .nn-voice-panel__push-key::before,
  .nn-voice-panel__push-key::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 18px;
    border-radius: var(--border-radius-4r);
  }

  .nn-voice-panel__push-key::before {
    top: 0;
    z-index: -1;
    background: var(--gray-3);
    transition: top 120ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .nn-voice-panel__push-key::after {
    bottom: 0;
    z-index: -2;
    border: 1px solid var(--gray-3);
    box-sizing: border-box;
  }

  .nn-voice-panel__push-key.is-pressed::before {
    top: 2px;
  }

  .nn-voice-panel__push-key-text {
    position: relative;
    top: 0;
    z-index: 1;
    display: block;
    align-items: center;
    min-width: 0;
    max-width: 100%;
    width: 100%;
    height: 18px;
    overflow: hidden;
    box-sizing: border-box;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: top 120ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .nn-voice-panel__push-content {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space4);
    min-width: 0;
    max-width: calc(100% - var(--icon-size-x8) - var(--space4));
    flex: 0 1 auto;
    overflow: hidden;
  }

  .nn-voice-panel__push-control.is-collapsed .nn-voice-panel__push-content {
    justify-content: center;
  }

  .nn-voice-panel__push-control.is-collapsed .nn-voice-panel__push-key {
    flex: 0 0 auto;
  }

  .nn-voice-panel__push-control.is-key-overflow .nn-voice-panel__push-key {
    flex: 1 1 auto;
  }

  .nn-voice-panel__push-control.is-prefix-hidden .nn-voice-panel__push-prefix {
    display: none;
  }

  .nn-voice-panel__push-prefix {
    display: inline-flex;
    align-items: center;
    min-width: 0;
    color: var(--gray-4);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
    white-space: nowrap;
    flex: 0 0 auto;
  }

  .nn-voice-panel__push-key.is-pressed .nn-voice-panel__push-key-text {
    top: 2px;
  }

  .nn-voice-panel__push-label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    color: var(--gray-4);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
    white-space: nowrap;
  }

  .nn-voice-panel__push-sensing-icon {
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    color: var(--gray-5);
    font-size: var(--icon-size-x10);
    line-height: 1;
  }

  .nn-voice-panel__push-arrow {
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

  .nn-voice-panel__push-control .nn-voice-panel__push-arrow {
    margin-left: var(--space0);
  }

  .nn-voice-panel__push-tooltip {
    position: absolute;
    left: 50%;
    bottom: calc(100% + 8px);
    transform: translateX(-50%);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 34px;
    padding: var(--space0) var(--space12);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    background: var(--gray-2);
    box-shadow: var(--shadow-sm);
    color: var(--gray-5);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-normal);
    white-space: nowrap;
    pointer-events: none;
    z-index: 2;
    opacity: 0;
    visibility: hidden;
    transform-origin: 50% calc(100% + 9px);
    transition: visibility 0s linear 0.16s;
  }

  .nn-voice-panel__push-control:hover .nn-voice-panel__push-tooltip {
    opacity: 1;
    visibility: visible;
    animation: nn-voice-panel-tooltip-appear-top 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) both;
    transition-delay: 0s;
  }

  .nn-voice-panel__push-control.is-expanded .nn-voice-panel__push-tooltip {
    display: none;
  }

  .nn-voice-panel__push-tooltip::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 8px;
    height: 8px;
    border-right: 1px solid var(--gray-8);
    border-bottom: 1px solid var(--gray-8);
    background: var(--gray-2);
    transform: translateX(-50%) rotate(45deg);
  }

  .nn-voice-panel__push-settings-popover {
    position: fixed;
    left: 0;
    top: 0;
    display: none;
    z-index: 2000;
  }

  .nn-voice-panel__push-settings-popover.is-visible {
    display: block;
  }

  .nn-voice-panel {
    width: 342px;
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-3r);
    overflow: visible;
    background: var(--gray-1);
  }

  .nn-voice-panel.is-card-variant {
    box-shadow: none;
  }

  .nn-voice-panel__card {
    gap: var(--space8);
    padding: var(--space8) var(--space8) var(--space0);
    border: 0;
    border-radius: var(--border-radius-3r) var(--border-radius-3r) 0 0;
  }

  .nn-voice-panel.is-card-variant .nn-voice-panel__card {
    border-radius: var(--border-radius-3r) var(--border-radius-3r) 0 0;
  }

  .nn-voice-panel__top {
    align-items: stretch;
    max-height: 80px;
    min-height: 48px;
    opacity: 1;
    overflow: visible;
    transform: translateY(0);
    transition:
      max-height var(--voice-panel-morph-duration) var(--voice-panel-morph-ease),
      opacity 180ms ease,
      transform var(--voice-panel-morph-duration) var(--voice-panel-morph-ease),
      margin var(--voice-panel-morph-duration) var(--voice-panel-morph-ease);
  }

  .nn-voice-panel.is-voice-room-hidden .nn-voice-panel__top {
    min-height: 0;
  }

  .nn-voice-panel__info {
    justify-content: center;
    gap: var(--space0);
    min-width: 0;
  }

  .nn-voice-panel__room-switch {
    height: 48px;
  }

  .nn-voice-panel__room-switch-track {
    height: 104px;
  }

  .nn-voice-panel__room-switch:hover .nn-voice-panel__room-switch-track,
  .nn-voice-panel__room-switch.is-room-switch-hover .nn-voice-panel__room-switch-track,
  .nn-voice-panel__room-switch.is-speaker-cycle-paused .nn-voice-panel__room-switch-track {
    transform: translateY(-56px);
  }

  .nn-voice-panel__room-switch.is-speaker-cycle-paused .nn-voice-panel__room-switch-track {
    transition: none;
  }

  .nn-voice-panel__room-switch.is-speaker-cycle-jump .nn-voice-panel__room-switch-track {
    transition: none;
  }

  .nn-voice-panel__room-switch-panel {
    height: 48px;
    flex-basis: 48px;
  }

  .nn-voice-panel__title-row {
    height: 24px;
    gap: var(--space2);
  }

  .nn-voice-panel__room-no {
    min-width: 16px;
    height: 16px;
    padding: var(--space0) var(--space4);
    line-height: 16px;
    color: var(--White-A90);
    background: var(--Esports-Blue);
  }

  .nn-voice-panel__title {
    color: var(--Esports-Blue);
    text-decoration: underline;
  }

  .nn-voice-panel__meta {
    gap: var(--space4);
  }

  .nn-voice-panel__meta-icon {
    width: var(--icon-size-x9);
    height: var(--icon-size-x9);
    border-radius: 999px;
    background: var(--gray-3);
  }

  .nn-voice-panel__meta-count {
    width: 48px;
  }

  .nn-voice-panel__avatar {
    flex: 0 0 auto;
  }

  .nn-voice-panel__more {
    min-width: 24px;
    width: auto;
    padding: var(--space0) var(--space4);
    background: var(--gray-10);
    font-size: 10px;
    line-height: 12px;
    box-sizing: border-box;
  }

  .nn-voice-panel__speaker-card {
    position: relative;
    display: flex;
    align-items: center;
    align-self: stretch;
    gap: var(--space0);
    width: 100%;
    min-width: 0;
    padding: var(--space4) var(--space0);
    border: 0;
    border-radius: 0;
    box-sizing: border-box;
    flex: 1 1 auto;
  }

  .nn-voice-panel__speaker-card-avatar {
    margin-right: var(--space8);
    flex: 0 0 auto;
  }

  .nn-voice-panel__speaker-card-name {
    display: block;
    max-width: 96px;
    min-width: 0;
    overflow: hidden;
    color: var(--gray-4);
    font-size: 14px;
    line-height: 20px;
    font-weight: var(--font-weight-medium);
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 0 1 auto;
  }

  .nn-voice-panel__speaker-wave {
    height: 36px;
    min-width: 0;
    flex: 1 1 auto;
    color: var(--gray-3);
    --voice-panel-wave-width: 100%;
    --voice-panel-wave-color: var(--gray-3);
  }

  .nn-voice-panel__speaker-wave.nn-voice-panel__wave {
    width: 100%;
    flex: 1 1 0;
  }

  .nn-voice-panel__speaker-wave .nn-voice-panel__wave-canvas {
    width: 100%;
  }

  .nn-voice-panel__leave {
    align-self: center;
    color: var(--Red);
  }

  .nn-voice-panel__divider {
    display: none;
  }

  .nn-voice-panel__bar {
    height: 50px;
    padding: var(--space0) var(--space8);
    gap: var(--space0);
    isolation: isolate;
  }

  .nn-voice-panel.is-card-variant .nn-voice-panel__bar {
    padding: var(--space0) var(--space8);
  }

  .nn-voice-panel__back {
    flex: 0 0 32px;
  }

  .nn-voice-panel__speaker {
    width: auto;
    height: 36px;
    margin: var(--space0) var(--space8);
    flex: 0 0 auto;
    overflow: visible;
  }

  .nn-voice-panel__user-pill {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: var(--space6);
    height: 34px;
    padding: var(--space4) var(--space6) var(--space4) var(--space4);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-20r);
    background: transparent;
    box-sizing: border-box;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    font-family: var(--font-family-main);
  }

  .nn-voice-panel__user-pill:hover,
  .nn-voice-panel__user-pill.is-open {
    background: var(--gray-10);
  }

  .nn-voice-panel__user-pill.is-open {
    z-index: 3000;
  }

  .nn-voice-panel__user-avatar {
    flex: 0 0 auto;
  }

  .nn-voice-panel__user-status {
    display: inline-flex;
    align-items: center;
    gap: var(--space2);
    color: var(--gray-6);
    font-size: 12px;
    line-height: 16px;
    font-weight: var(--font-weight-normal);
    white-space: nowrap;
  }

  .nn-voice-panel__user-status-dot {
    flex: 0 0 auto;
  }

  .nn-voice-panel__status-menu.nn-dropdown-panel {
    position: absolute;
    top: auto;
    left: 0;
    bottom: calc(100% + 8px);
    z-index: 3001;
    display: none;
    flex-direction: column;
    width: 130px;
    padding: var(--space8);
    overflow: hidden;
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-4r);
    background: var(--gray-2);
    box-shadow: 0 12px 36px var(--shadow);
    box-sizing: border-box;
  }

  .nn-voice-panel__user-pill.is-open .nn-voice-panel__status-menu.nn-dropdown-panel {
    display: flex;
  }

  .nn-voice-panel__status-menu .nn-dropdown-panel-content {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space2);
    width: 100%;
  }

  .nn-voice-panel__status-menu .nn-dropdown-list {
    display: flex;
    flex-direction: column;
    gap: var(--space2);
    width: 100%;
    max-height: 360px;
    overflow-y: auto;
  }

  .nn-voice-panel__status-menu .nn-dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--space8);
    width: 100%;
    height: 36px;
    min-height: 36px;
    padding: var(--space8);
    border: none;
    border-radius: var(--border-radius-2r);
    background: transparent;
    cursor: pointer;
    text-align: left;
    box-sizing: border-box;
  }

  .nn-voice-panel__status-menu .nn-dropdown-item:hover,
  .nn-voice-panel__status-menu .nn-dropdown-item.is-selected {
    background: var(--gray-10);
  }

  .nn-voice-panel__status-menu .nn-dropdown-item-leading {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    flex: 0 0 14px;
  }

  .nn-voice-panel__status-menu .nn-dropdown-item-copy {
    display: flex;
    align-items: center;
    min-width: 0;
    flex: 1 0 0;
  }

  .nn-voice-panel__status-menu .nn-dropdown-item-title {
    display: block;
    width: 100%;
    overflow: hidden;
    color: var(--gray-4);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-voice-panel__status-menu-dot.nn-badge {
    width: 14px;
    height: 14px;
    min-width: 14px;
    min-height: 14px;
  }

  .nn-voice-panel__control-wrap {
    display: flex;
    align-items: center;
    min-width: 0;
    flex: 1 1 0;
  }

  .nn-voice-panel__control,
  .nn-voice-panel__volume,
  .nn-voice-panel__volume-button {
    width: 32px;
    height: 32px;
    flex-basis: 32px;
  }

  .nn-voice-panel.is-taskbar-variant .nn-voice-panel__volume,
  .nn-voice-panel.is-taskbar-variant .nn-voice-panel__volume-button {
    width: 28px;
    height: 36px;
    flex: 0 0 28px;
    flex-basis: 28px;
  }

  .nn-voice-panel.is-taskbar-variant .nn-voice-panel__volume-button .nnicon,
  .nn-voice-panel.is-taskbar-variant .nn-voice-panel__volume-animation {
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    flex: 0 0 var(--icon-size-x10);
  }

  .nn-voice-panel__push-control .nn-voice-panel__push-key {
    min-width: 0;
    max-width: 100%;
  }

  /* Latest Voice Panel structure: persistent game launch state above voice controls. */
  .nn-voice-panel:not(.is-taskbar-variant) {
    width: 350px;
    padding: var(--space0) var(--space0) var(--space8) var(--space12);
    overflow: visible;
    border: 0;
    border-radius: var(--border-radius-2r);
    background: var(--gray-1);
  }

  .nn-voice-panel:not(.is-taskbar-variant) .nn-voice-panel__launch-row {
    display: flex;
    width: 100%;
    height: 50px;
    margin-top: var(--space8);
    gap: var(--space4);
    flex: 0 0 50px;
  }

  .nn-voice-panel__launch-button,
  .nn-voice-panel__game-list-button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    padding: var(--space0);
    overflow: hidden;
    border: 0;
    box-sizing: border-box;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-voice-panel__launch-button {
    min-width: 0;
    border-radius: var(--border-radius-2r);
    background: var(--gray-3);
    color: var(--gray-1);
    flex: 1 1 auto;
  }

  .nn-voice-panel__launch-button:hover {
    background: var(--gray-4);
  }

  .nn-voice-panel__launch-button:active {
    background: var(--gray-5);
  }

  .nn-voice-panel__launch-button.is-playing {
    background: var(--Red);
    color: var(--White-A90);
  }

  .nn-voice-panel__launch-button.is-playing:hover {
    background: var(--Red);
  }

  .nn-voice-panel__launch-progress {
    position: absolute;
    inset: 0 auto 0 0;
    z-index: 1;
    width: 100%;
    border-radius: var(--border-radius-2r) 0 0 var(--border-radius-2r);
    background: var(--gray-1);
    opacity: 0.2;
    pointer-events: none;
    transform: scaleX(0);
    transform-origin: left center;
    will-change: transform;
  }

  .nn-voice-panel__launch-content {
    position: relative;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    gap: var(--space6);
    will-change: transform;
  }

  .nn-voice-panel__launch-content.is-position-transitioning {
    transition: transform 240ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .nn-voice-panel__launch-state-icon-ghost {
    position: absolute;
    z-index: 3;
    margin: 0;
    opacity: 1;
    pointer-events: none;
    transition: opacity 180ms ease-out;
  }

  .nn-voice-panel__launch-state-icon-ghost.is-fading {
    opacity: 0;
  }

  .nn-voice-panel__launch-logo-frame {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    overflow: visible;
    border: 1px solid var(--gray-1);
    border-radius: var(--border-radius-4r);
    background: var(--PUBG-Yellow);
    box-sizing: border-box;
    flex: 0 0 22px;
  }

  .nn-voice-panel__launch-logo {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: calc(var(--border-radius-4r) - 1px);
    object-fit: contain;
  }

  .nn-voice-panel__launch-logo[hidden] {
    display: none;
  }

  .nn-game-accelerator-card.is-launching .nn-game-accelerator-card__logo-frame::before,
  .nn-game-accelerator-card.is-playing .nn-game-accelerator-card__logo-frame::before {
    position: absolute;
    border: 1px solid var(--Esports-Blue);
    box-sizing: border-box;
    content: '';
    pointer-events: none;
  }

  .nn-game-accelerator-card.is-launching .nn-game-accelerator-card__logo-frame::before,
  .nn-game-accelerator-card.is-playing .nn-game-accelerator-card__logo-frame::before {
    inset: -3px;
    border-radius: var(--border-radius-10r);
  }

  .nn-voice-panel__launch-text-group {
    display: inline-flex;
    align-items: center;
    min-width: 0;
    gap: var(--space6);
  }

  .nn-voice-panel__launch-button.is-loading .nn-voice-panel__launch-text-group {
    gap: var(--space0);
  }

  .nn-voice-panel__launch-label {
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    font-size: var(--font-size-subtitle);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-subtitle);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-voice-panel__launch-progress-value {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 24px;
    font-size: var(--font-size-subtitle);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-subtitle);
    text-align: center;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
    font-feature-settings: "tnum" 1;
    flex: 0 0 50px;
  }

  .nn-voice-panel__launch-button.is-loading .nn-voice-panel__launch-label {
    font-weight: var(--font-weight-semibold);
  }

  .nn-voice-panel__launch-progress-value[hidden] {
    display: none;
  }

  .nn-voice-panel__launch-state-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    font-size: var(--icon-size-x10);
    line-height: var(--icon-size-x10);
    flex: 0 0 var(--icon-size-x10);
  }

  .nn-voice-panel__launch-button.is-loading .nn-voice-panel__launch-state-icon {
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    font-size: var(--icon-size-x10);
    line-height: var(--icon-size-x10);
    flex-basis: var(--icon-size-x10);
  }

  @media (prefers-reduced-motion: reduce) {
    .nn-voice-panel__launch-content.is-position-transitioning,
    .nn-voice-panel__launch-state-icon-ghost {
      transition: none;
    }
  }

  .nn-voice-panel__game-list-button {
    min-width: 44px;
    width: auto;
    padding: var(--space0) var(--space6);
    border: 1px solid var(--gray-9);
    border-radius: var(--border-radius-4r);
    background: var(--gray-9);
    color: var(--gray-4);
    flex: 0 0 auto;
  }

  .nn-voice-panel__launch-state-icon[hidden] {
    display: none;
  }

  .nn-voice-panel__game-list-button:hover {
    border-color: var(--gray-8);
    background: var(--gray-8);
    color: var(--gray-3);
  }

  .nn-voice-panel__game-list-button .nnicon {
    width: var(--icon-size-x12);
    height: var(--icon-size-x12);
    font-size: var(--icon-size-x12);
    line-height: var(--icon-size-x12);
  }

  .nn-voice-panel__game-list-running {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space4);
  }

  .nn-voice-panel__game-list-button.is-overflow {
    padding: var(--space0) var(--space10);
    overflow: visible;
    border-radius: var(--border-radius-2r);
  }

  .nn-voice-panel__game-list-running.is-overflow {
    gap: var(--space6);
  }

  .nn-voice-panel__running-game {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    overflow: visible;
    border: 0;
    border-radius: var(--border-radius-4r);
    background: transparent;
    box-sizing: border-box;
    flex: 0 0 var(--icon-size-x10);
  }

  .nn-voice-panel__running-game-image {
    display: block;
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    border-radius: var(--border-radius-4r);
    object-fit: cover;
  }

  .nn-voice-panel__running-game-count.nn-badge {
    position: absolute;
    z-index: 2;
    top: calc(var(--space8) * -1);
    right: -1px;
  }

  .nn-voice-panel:not(.is-taskbar-variant) .nn-voice-panel__card {
    gap: var(--space0);
    padding: var(--space8) var(--space0) var(--space0);
    border: 0;
    border-radius: 0;
    background: transparent;
  }

  .nn-voice-panel:not(.is-taskbar-variant) .nn-voice-panel__top {
    gap: var(--space8);
    min-height: 48px;
  }

  .nn-voice-panel:not(.is-taskbar-variant).is-voice-room-hidden .nn-voice-panel__card {
    padding-top: var(--space0);
  }

  .nn-voice-panel:not(.is-taskbar-variant).is-voice-room-hidden .nn-voice-panel__top {
    min-height: 0;
    margin: var(--space0);
  }

  .nn-voice-panel:not(.is-taskbar-variant) .nn-voice-panel__bar,
  .nn-voice-panel:not(.is-taskbar-variant).is-card-variant .nn-voice-panel__bar {
    height: 50px;
    padding: var(--space0);
  }

  /* ==================== 游戏加速浮层 ==================== */
  .nn-game-accelerator-popover {
    position: fixed;
    z-index: 1200;
    display: none;
    flex-direction: column;
    gap: var(--space8);
    width: 338px;
    height: 458px;
    max-height: min(458px, calc(100vh - 16px));
    padding: var(--space8) var(--space0) var(--space0);
    border: 0;
    border-radius: var(--border-radius-2r);
    background: var(--gray-1);
    box-sizing: border-box;
    overflow: visible;
    color: var(--gray-3);
    font-family: var(--font-family-main);
  }

  .nn-game-accelerator-popover.is-visible {
    display: flex;
  }

  .nn-game-accelerator-popover__header {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space4);
    height: 68px;
    padding: var(--space10) var(--space12);
    box-sizing: border-box;
    flex: 0 0 68px;
  }

  .nn-game-accelerator-popover__header:hover {
    background: var(--gray-10);
  }

  .nn-game-accelerator-popover__duration-details-panel {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 4;
    width: 100%;
    padding: var(--space16);
    border: 1px solid var(--gray-9);
    border-radius: var(--border-radius-2r);
    background: var(--gray-2);
    box-shadow: var(--shadow-md);
    box-sizing: border-box;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(calc(var(--space0) - var(--space4)));
    transition: opacity 160ms ease, transform 160ms ease, visibility 160ms ease;
  }

  .nn-game-accelerator-popover__duration-details {
    display: flex;
    flex-direction: column;
    gap: var(--space12);
    width: 100%;
    color: var(--gray-3);
    font-family: var(--font-family-main);
  }

  .nn-game-accelerator-popover__duration-details-header,
  .nn-game-accelerator-popover__duration-details-footer,
  .nn-game-accelerator-popover__duration-details-title-row,
  .nn-game-accelerator-popover__duration-details-value-row,
  .nn-game-accelerator-popover__duration-details-meta-row {
    display: flex;
    align-items: center;
  }

  .nn-game-accelerator-popover__duration-details-header,
  .nn-game-accelerator-popover__duration-details-footer,
  .nn-game-accelerator-popover__duration-details-title-row,
  .nn-game-accelerator-popover__duration-details-meta-row {
    justify-content: space-between;
  }

  .nn-game-accelerator-popover__duration-details-heading {
    color: var(--gray-4);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-body);
  }

  .nn-game-accelerator-popover__duration-details-section {
    display: flex;
    flex-direction: column;
    gap: var(--space6);
    padding: var(--space4) var(--space0);
  }

  .nn-game-accelerator-popover__duration-details-label {
    color: var(--gray-5);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }

  .nn-game-accelerator-popover__duration-details-status {
    padding: var(--space2) var(--space6);
    border-radius: var(--border-radius-2r);
    background: var(--gray-9);
    color: var(--gray-5);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }

  .nn-game-accelerator-popover__duration-details-value-row {
    gap: var(--space6);
  }

  .nn-game-accelerator-popover__duration-details-value {
    display: flex;
    height: 22px;
    align-items: baseline;
    gap: var(--space2);
    color: var(--gray-3);
    letter-spacing: 0;
    white-space: nowrap;
  }

  .nn-game-accelerator-popover__duration-details-value-number {
    display: block;
    font-family: var(--font-family-din);
    font-size: var(--font-size-header-2);
    font-weight: var(--font-weight-bold);
    line-height: normal;
  }

  .nn-game-accelerator-popover__duration-details-value-unit {
    display: block;
    transform: translateY(calc(var(--space2) * -1));
    color: var(--gray-5);
    font-family: var(--font-family-main);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-caption);
  }

  .nn-game-accelerator-popover__duration-details-progress-row {
    display: flex;
    align-items: center;
    gap: var(--space8);
  }

  .nn-game-accelerator-popover__duration-details-progress {
    flex: 1 1 auto;
    height: 4px;
    overflow: hidden;
    border-radius: var(--border-radius-2r);
    background: var(--gray-8);
  }

  .nn-game-accelerator-popover__duration-details-progress-fill {
    height: 100%;
    border-radius: inherit;
    background: var(--Esports-Blue-LD);
  }

  .nn-game-accelerator-popover__duration-details-progress-fill--full {
    background: var(--Esports-Blue-LD);
  }

  .nn-game-accelerator-popover__duration-details-progress-fill--blue {
    background: var(--Link);
  }

  .nn-game-accelerator-popover__duration-details-progress-fill--danger {
    background: var(--Red);
  }

  .nn-game-accelerator-popover__duration-details-progress-fill--exhausted {
    background: var(--gray-7);
  }

  .nn-game-accelerator-popover__duration-details-percent {
    min-width: 42px;
    color: var(--gray-4);
    font-family: var(--font-family-din);
    font-size: var(--font-size-subtitle);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-subtitle);
    text-align: right;
  }

  .nn-game-accelerator-popover__duration-details-meta {
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }

  .nn-game-accelerator-popover__duration-details-footer {
    gap: var(--space12);
    padding-top: var(--space4);
  }

  .nn-game-accelerator-popover__duration-details-footer-copy {
    display: flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
    color: var(--gray-5);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }

  .nn-game-accelerator-popover__duration-details-info {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    color: var(--gray-6);
    font-size: var(--icon-size-x8);
    line-height: 1;
  }

  .nn-game-accelerator-popover__duration-details-link {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    gap: var(--space4);
    color: var(--gray-6);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-body);
    cursor: pointer;
    user-select: none;
    transition: color 160ms ease;
  }

  .nn-game-accelerator-popover__duration-details-link:hover,
  .nn-game-accelerator-popover__duration-details-link:focus-visible {
    color: var(--gray-4);
    outline: none;
  }

  .nn-game-accelerator-popover__duration-details-link-icon {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    font-size: var(--icon-size-x8);
    line-height: 1;
  }

  .nn-game-accelerator-popover__header:hover .nn-game-accelerator-popover__duration-details-panel,
  .nn-game-accelerator-popover__header:focus-within .nn-game-accelerator-popover__duration-details-panel {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateY(0);
  }

  .nn-game-accelerator-popover__duration {
    display: flex;
    flex-direction: column;
    gap: var(--space4);
    min-width: 0;
  }

  .nn-game-accelerator-popover__duration-title {
    display: inline-flex;
    align-items: center;
    gap: var(--space2);
    color: var(--gray-6);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-subtitle);
  }

  .nn-game-accelerator-popover__duration-value {
    display: inline-flex;
    height: 22px;
    align-items: baseline;
    gap: var(--space2);
    font-variant-numeric: tabular-nums;
    font-feature-settings: "tnum" 1;
  }

  .nn-game-accelerator-popover__duration-segment {
    display: inline-flex;
    align-items: baseline;
    gap: var(--space2);
    height: 22px;
  }

  .nn-game-accelerator-popover__duration-number {
    display: block;
    color: var(--gray-3);
    font-family: var(--font-family-din);
    font-size: var(--font-size-header-2);
    font-weight: var(--font-weight-bold);
    line-height: normal;
  }

  .nn-game-accelerator-popover__duration-unit {
    display: block;
    transform: translateY(calc(var(--space2) * -1));
    color: var(--gray-5);
    font-family: var(--font-family-main);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-caption);
  }

  .nn-game-accelerator-popover__section-title {
    display: flex;
    align-items: center;
    height: 22px;
    padding: var(--space0) var(--space12);
    color: var(--gray-6);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-subtitle);
    box-sizing: border-box;
    flex: 0 0 22px;
  }

  .nn-game-accelerator-popover__list {
    display: flex;
    flex-direction: column;
    gap: var(--space8);
    min-height: 0;
    padding: var(--space0);
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-width: none;
  }

  .nn-game-accelerator-popover__list::-webkit-scrollbar {
    display: none;
  }

  /* ==================== 游戏启动卡片 ==================== */
  .nn-game-accelerator-card {
    display: flex;
    flex-direction: column;
    gap: var(--space8);
    padding: var(--space8) var(--space12);
    box-sizing: border-box;
    color: var(--gray-3);
    flex: 0 0 auto;
  }

  .nn-game-accelerator-card:hover {
    background: var(--gray-10);
  }

  .nn-game-accelerator-card__main {
    display: flex;
    align-items: center;
    gap: var(--space16);
    width: 100%;
  }

  .nn-game-accelerator-card__game {
    display: flex;
    align-items: center;
    gap: var(--space10);
    min-width: 0;
    flex: 1 1 0;
  }

  .nn-game-accelerator-card__logo {
    display: block;
    width: var(--icon-size-x26);
    height: var(--icon-size-x26);
    border-radius: var(--border-radius-8r);
    background: var(--PUBG-Yellow);
    object-fit: contain;
    flex: 0 0 var(--icon-size-x26);
  }

  .nn-game-accelerator-card__logo-frame {
    position: relative;
    display: inline-flex;
    width: var(--icon-size-x26);
    height: var(--icon-size-x26);
    border-radius: var(--border-radius-8r);
    flex: 0 0 var(--icon-size-x26);
  }

  .nn-game-accelerator-card__info {
    display: flex;
    flex-direction: column;
    gap: var(--space4);
    flex: 0 1 auto;
    min-width: 0;
  }

  .nn-game-accelerator-card__title {
    overflow: hidden;
    color: var(--gray-5);
    font-size: var(--font-size-title);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-title);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-game-accelerator-card__boost {
    display: inline-flex;
    align-items: center;
    gap: var(--space2);
    height: var(--line-height-body);
    overflow: hidden;
    color: var(--gray-6);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
  }

  .nn-game-accelerator-card__boost-rotator {
    display: flex;
    flex-direction: column;
    height: var(--line-height-body);
    transition: transform 480ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .nn-game-accelerator-card__boost-rotator.is-time-visible {
    transform: translateY(calc(var(--line-height-body) * -1));
  }

  .nn-game-accelerator-card__boost-rotator.is-server-repeat-visible {
    transform: translateY(calc(var(--line-height-body) * -2));
  }

  .nn-game-accelerator-card__boost-rotator.is-cycle-resetting {
    transition: none;
    transform: translateY(0);
  }

  .nn-game-accelerator-card__boost-item {
    display: inline-flex;
    align-items: center;
    height: var(--line-height-body);
    gap: var(--space2);
    white-space: nowrap;
    flex: 0 0 var(--line-height-body);
  }

  .nn-game-accelerator-card__boost .nnicon {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-game-accelerator-card__boost-flag {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    border-radius: var(--border-radius-1r);
    object-fit: cover;
    flex: 0 0 var(--icon-size-x8);
  }

  @media (prefers-reduced-motion: reduce) {
    .nn-game-accelerator-card__boost-rotator {
      transition: none;
    }
  }

  .nn-game-accelerator-card__action {
    width: 100%;
    box-sizing: border-box;
  }

  .nn-game-accelerator-card__action-trigger {
    width: 100px;
    margin-left: auto;
    flex: 0 0 100px;
  }

  .nn-game-accelerator-card__action-trigger > .nn-dropdown.nn-game-accelerator-card__action-dropdown {
    width: 100%;
    gap: var(--nn-voice-panel-card-dropdown-gap, var(--space4));
  }

  .nn-game-accelerator-card__action-dropdown > .nn-dropdown-panel {
    top: calc(100% + var(--nn-voice-panel-card-dropdown-gap, var(--space4)));
    width: var(--nn-voice-panel-card-dropdown-panel-width, 100%);
    padding: var(--nn-voice-panel-card-dropdown-panel-padding, var(--space8));
    border-color: var(--nn-voice-panel-card-dropdown-panel-border-color, var(--gray-8));
    border-radius: var(--nn-voice-panel-card-dropdown-panel-radius, var(--border-radius-2r));
    background: var(--nn-voice-panel-card-dropdown-panel-background, var(--gray-2));
    box-shadow: var(--nn-voice-panel-card-dropdown-panel-shadow, var(--shadow-lg));
  }

  .nn-game-accelerator-card__action-dropdown .nn-dropdown-list {
    gap: var(--nn-voice-panel-card-dropdown-item-gap, var(--space6));
  }

  .nn-game-accelerator-card__action-dropdown .nn-dropdown-item {
    justify-content: center;
    min-height: var(--nn-voice-panel-card-dropdown-item-min-height, 32px);
    padding: var(--nn-voice-panel-card-dropdown-item-padding, var(--space6) var(--space8));
    background: var(--nn-voice-panel-card-dropdown-item-background, transparent);
    color: var(--nn-voice-panel-card-dropdown-item-color, var(--gray-4));
    font-size: var(--nn-voice-panel-card-dropdown-item-font-size, var(--font-size-body));
  }

  .nn-game-accelerator-card__action-dropdown .nn-dropdown-item:hover,
  .nn-game-accelerator-card__action-dropdown .nn-dropdown-item.is-selected:hover {
    background: var(--nn-voice-panel-card-dropdown-item-hover-background, var(--gray-9));
  }

  .nn-game-accelerator-card__action-dropdown .nn-dropdown-item.is-selected:not(:hover) {
    background: var(--nn-voice-panel-card-dropdown-item-background, transparent);
  }

  .nn-game-accelerator-card__action-dropdown .nn-dropdown-item-copy,
  .nn-game-accelerator-card__action-dropdown .nn-dropdown-item-title {
    width: auto;
    flex: 0 1 auto;
    color: inherit;
    font-size: inherit;
    text-align: center;
  }

  .nn-game-accelerator-card.is-action-dropdown-open {
    position: relative;
    z-index: 2;
  }

  .nn-game-accelerator-card__meta {
    display: flex;
    align-items: center;
    gap: var(--space2);
    width: 100%;
    min-height: 16px;
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    line-height: var(--line-height-caption);
  }

  .nn-game-accelerator-card__meta .nnicon {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-game-accelerator-card__settings {
    margin-left: auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    padding: var(--space0);
    border: 0;
    background: transparent;
    color: var(--gray-5);
    flex: 0 0 auto;
    cursor: pointer;
  }

  .nn-game-accelerator-card__settings:hover {
    color: var(--gray-3);
  }

  .nn-game-accelerator-card__settings .nnicon {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-game-accelerator-card__progress-area {
    display: flex;
    flex-direction: column;
    gap: var(--space4);
    animation: nn-game-accelerator-progress-enter 160ms ease-out both;
  }

  @keyframes nn-game-accelerator-progress-enter {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .nn-game-accelerator-card__progress {
    position: relative;
    width: 100%;
    height: 6px;
    overflow: hidden;
    border-radius: var(--border-radius-2r);
    background: var(--gray-9);
  }

  .nn-game-accelerator-card__progress-bar {
    position: absolute;
    inset: 0 auto 0 0;
    width: 100%;
    border-radius: var(--border-radius-2r);
    background: var(--gray-3);
    transform: scaleX(0);
    transform-origin: left center;
    will-change: transform;
  }

  .nn-game-accelerator-card__progress-text {
    display: inline-flex;
    align-items: center;
    color: var(--gray-6);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
    font-variant-numeric: tabular-nums;
    font-feature-settings: "tnum" 1;
  }

  .nn-game-accelerator-card__progress-number {
    display: inline-block;
    min-width: 3ch;
  }

  .nn-game-accelerator-popover__duration-enable.nn-btn {
    flex: 0 0 auto;
    width: 100px;
    box-sizing: border-box;
  }

  .nn-game-accelerator-popover__duration-refresh {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    color: var(--gray-5);
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
    flex: 0 0 var(--icon-size-x8);
    cursor: pointer;
  }

  .nn-game-accelerator-popover__duration-refresh:hover {
    color: var(--gray-3);
  }

  .nn-game-accelerator-popover__duration-refresh.is-rotating {
    animation: nn-voice-panel-update-icon-rotate 480ms cubic-bezier(0.4, 0, 0.2, 1) 1;
    will-change: rotate;
  }

  @keyframes nn-voice-panel-update-icon-rotate {
    from {
      rotate: 0deg;
    }

    to {
      rotate: 360deg;
    }
  }

  .nn-voice-panel-acceleration-modal {
    position: fixed;
    inset: var(--space0);
    z-index: 5200;
    display: grid;
    place-items: center;
    padding: var(--space16);
    background: var(--Black-A60);
    box-sizing: border-box;
    font-family: var(--font-family-main);
  }

  .nn-voice-panel-acceleration-modal__dialog.nn-toast {
    width: 880px;
    max-width: calc(100vw - (var(--space16) * 2));
    max-height: calc(100vh - (var(--space16) * 2));
    overflow-y: auto;
  }

  .nn-voice-panel-acceleration-modal__dialog .nn-toast__body {
    gap: var(--space20);
  }

  .nn-voice-panel-launch-path-modal {
    position: fixed;
    inset: var(--space0);
    z-index: 5300;
    display: grid;
    place-items: center;
    padding: var(--space16);
    background: var(--Black-A60);
    box-sizing: border-box;
    font-family: var(--font-family-main);
  }

  .nn-voice-panel-launch-path-modal__dialog.nn-toast {
    width: 480px;
    max-width: calc(100vw - (var(--space16) * 2));
  }

  .nn-voice-panel-launch-path-modal__dialog .nn-toast__body {
    gap: var(--space20);
  }

  .nn-voice-panel-launch-path-modal__content {
    display: flex;
    flex-direction: column;
    gap: var(--space24);
    min-width: 0;
  }

  .nn-voice-panel-launch-path-modal__modes {
    display: flex;
    flex-direction: column;
    gap: var(--space20);
  }

  .nn-voice-panel-launch-path-modal__mode {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--space16);
  }

  .nn-voice-panel-launch-path-modal__mode-copy,
  .nn-voice-panel-launch-path-modal__path {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .nn-voice-panel-launch-path-modal__mode-copy {
    gap: var(--space8);
  }

  .nn-voice-panel-launch-path-modal__path {
    gap: var(--space4);
  }

  .nn-voice-panel-launch-path-modal__path[hidden] {
    display: none;
  }

  .nn-voice-panel-launch-path-modal__mode-title,
  .nn-voice-panel-launch-path-modal__path-label {
    color: var(--gray-5);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-body);
  }

  .nn-voice-panel-launch-path-modal__mode-description {
    color: var(--gray-6);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-body);
  }

  .nn-voice-panel-launch-path-modal__radio {
    margin-top: var(--space2);
    flex: 0 0 auto;
  }

  .nn-voice-panel-launch-path-modal__path-field.nn-input-wrapper {
    width: 100%;
  }

  .nn-voice-panel-launch-path-modal__path-field .nn-input-link-icon {
    display: none;
  }

  .nn-voice-panel-launch-path-modal .nn-voice-panel-launch-path-modal__path-field.nn-input-link-copy .nn-input {
    padding-left: var(--space12);
  }

  .nn-voice-panel-acceleration-modal__content {
    display: flex;
    flex-direction: column;
    gap: var(--space24);
    min-width: 0;
  }

  .nn-voice-panel-acceleration-modal__overview {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 280px;
    gap: var(--space24);
    min-width: 0;
  }

  .nn-voice-panel-acceleration-modal__game-area {
    display: flex;
    flex-direction: column;
    gap: var(--space16);
    min-width: 0;
  }

  .nn-voice-panel-acceleration-modal__summary {
    display: flex;
    align-items: center;
    gap: var(--space16);
    min-width: 0;
  }

  .nn-voice-panel-acceleration-modal__game-logo {
    width: 100px;
    height: 100px;
    border-radius: var(--border-radius-8r);
    object-fit: cover;
    flex: 0 0 100px;
  }

  .nn-voice-panel-acceleration-modal__game-details {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--space8);
    height: 96px;
    min-width: 0;
    box-sizing: border-box;
  }

  .nn-voice-panel-acceleration-modal__game-copy {
    display: flex;
    flex-direction: column;
    gap: var(--space4);
    min-width: 0;
  }

  .nn-voice-panel-acceleration-modal__game-name {
    overflow: hidden;
    color: var(--gray-3);
    font-size: var(--font-size-header-3);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-header-3);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-voice-panel-acceleration-modal__game-platform {
    color: var(--gray-6);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
  }

  .nn-voice-panel-acceleration-modal__duration {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: var(--space16);
    min-width: 0;
  }

  .nn-voice-panel-acceleration-modal__duration-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space12);
  }

  .nn-voice-panel-acceleration-modal__duration-copy {
    display: flex;
    flex-direction: column;
    gap: var(--space4);
  }

  .nn-voice-panel-acceleration-modal__duration-action.nn-btn {
    width: 100%;
  }

  .nn-voice-panel-acceleration-modal__settings {
    display: flex;
    align-items: center;
    gap: var(--space24);
    min-width: 0;
  }

  .nn-voice-panel-acceleration-modal__setting {
    display: flex;
    align-items: center;
    gap: var(--space8);
    min-width: 0;
  }

  .nn-voice-panel-acceleration-modal__setting-title,
  .nn-voice-panel-acceleration-modal__section-title {
    color: var(--gray-4);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-body);
  }

  .nn-voice-panel-acceleration-modal__auto-switch {
    flex: 0 0 auto;
  }

  .nn-voice-panel-acceleration-modal__setting-help {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    color: var(--gray-6);
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
    flex: 0 0 var(--icon-size-x8);
  }

  .nn-voice-panel-acceleration-modal__sync-icons {
    display: inline-flex;
    align-items: center;
    margin-left: var(--space4);
  }

  .nn-voice-panel-acceleration-modal__sync-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    margin-left: calc(var(--space4) * -1);
    border: 1px solid var(--gray-2);
    border-radius: var(--border-radius-round);
    overflow: hidden;
    background: var(--gray-9);
    color: var(--gray-5);
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-voice-panel-acceleration-modal__sync-icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .nn-voice-panel-acceleration-modal__toolbar {
    display: flex;
    align-items: center;
    gap: var(--space12);
  }

  .nn-voice-panel-acceleration-modal__context-tabs {
    max-width: 100%;
  }

  .nn-voice-panel-acceleration-modal__platform-dropdown {
    width: auto;
    gap: var(--space0);
  }

  .nn-voice-panel-acceleration-modal__platform-dropdown .nn-dropdown-panel {
    width: 240px;
  }

  .nn-voice-panel-acceleration-modal__selector {
    display: flex;
    flex-direction: column;
    gap: var(--space12);
    min-width: 0;
  }

  .nn-voice-panel-acceleration-modal__selector-header {
    display: flex;
    align-items: center;
    justify-content: stretch;
    gap: var(--space16);
  }

  .nn-voice-panel-acceleration-modal__selector-tabs {
    width: 100%;
  }

  .nn-voice-panel-acceleration-modal__selector-tabs .nn-tab {
    flex: 1 1 0;
  }

  .nn-voice-panel-acceleration-modal__option-panel {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space8);
  }

  .nn-voice-panel-acceleration-modal__option-panel[hidden] {
    display: none;
  }

  .nn-voice-panel-acceleration-modal__option {
    display: flex;
    align-items: center;
    gap: var(--space8);
    width: 100%;
    min-height: 72px;
    min-width: 0;
    padding: var(--space16);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    box-sizing: border-box;
    background: transparent;
    color: var(--gray-5);
    font-family: var(--font-family-main);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-body);
    justify-content: flex-start;
    text-align: left;
    cursor: pointer;
  }

  .nn-voice-panel-acceleration-modal__option:hover,
  .nn-voice-panel-acceleration-modal__option:focus-visible {
    outline: none;
    background: var(--gray-10);
    color: var(--gray-4);
  }

  .nn-voice-panel-acceleration-modal__option.is-selected {
    border-color: var(--gray-8);
    background: var(--gray-9);
    color: var(--gray-4);
  }

  .nn-voice-panel-acceleration-modal__option-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
    flex: 0 0 var(--icon-size-x8);
  }

  .nn-voice-panel-acceleration-modal__option-icon img {
    display: block;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    border-radius: var(--border-radius-1r);
    object-fit: cover;
  }

  @media (max-width: 720px) {
    .nn-voice-panel-acceleration-modal__overview,
    .nn-voice-panel-acceleration-modal__option-panel {
      grid-template-columns: minmax(0, 1fr);
    }

    .nn-voice-panel-acceleration-modal__duration {
      padding-top: var(--space20);
    }

  }

`;

function injectVoicePanelStyles() {
  if (document.getElementById('nn-voice-panel-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-voice-panel-styles';
  style.textContent = VoicePanelStyles;
  document.head.appendChild(style);
}

function createVoicePanelAvatarElement({ src, size, className, text = 'avatar' }) {
  if (typeof window === 'undefined' || typeof window.createAvatar !== 'function') {
    throw new Error('Voice Panel requires the Avatar basic component.');
  }
  const avatar = window.createAvatar({ src, size, text });
  if (className) avatar.classList.add(className);
  return avatar;
}

function updateVoicePanelAvatarSource(avatar, src) {
  const image = avatar && avatar.querySelector('img');
  if (image) image.src = src;
}

function createVoicePanelAvatar(src, index) {
  return createVoicePanelAvatarElement({
    src,
    size: 18,
    className: 'nn-voice-panel__avatar',
    text: `avatar ${index + 1}`
  });
}

function createVoicePanelSpeakerCard(src, avatarPool = [], speakerName = '昵称', speakerNames = []) {
  const card = document.createElement('div');
  card.className = 'nn-voice-panel__speaker-card';

  const avatar = createVoicePanelAvatarElement({
    src,
    size: 38,
    className: 'nn-voice-panel__speaker-card-avatar',
    text: speakerName
  });
  card.appendChild(avatar);

  const name = document.createElement('span');
  name.className = 'nn-voice-panel__speaker-card-name';
  name.textContent = speakerName;
  card.appendChild(name);

  const wave = createVoicePanelWave({
    width: 120,
    height: 36,
    barCount: 34,
    gap: 2,
    level: 36,
    fillWidth: true
  });
  wave.classList.add('nn-voice-panel__speaker-wave');
  card.appendChild(wave);

  const candidates = [src].concat(avatarPool || []).filter(Boolean);
  const fallbackNames = [
    speakerName,
    '白露',
    '霜月见晴',
    '南栀Echo',
    '星河漫游者',
    'NN快乐补给站'
  ];
  const resolvedNames = Array.isArray(speakerNames) && speakerNames.length > 0
    ? [speakerName].concat(speakerNames)
    : fallbackNames;
  const uniqueCandidates = [];
  candidates.forEach(function(candidateSrc, index) {
    if (uniqueCandidates.some(function(candidate) { return candidate.src === candidateSrc; })) return;
    uniqueCandidates.push({
      src: candidateSrc,
      name: resolvedNames[index] || fallbackNames[index % fallbackNames.length] || speakerName
    });
  });
  if (uniqueCandidates.length > 1) {
    let currentIndex = uniqueCandidates.findIndex(function(candidate) { return candidate.src === src; });
    if (currentIndex < 0) currentIndex = 0;
    let cycleQueue = [];
    let switchTimer = null;
    const finalSpeakerSpeakingDelay = 2000;
    const finalSpeakerRestDelay = 1000;

    function getNextSwitchDelay() {
      return 1600 + Math.round(Math.random() * 2000);
    }

    function buildCycleQueue() {
      cycleQueue = uniqueCandidates
        .map(function(candidate, index) {
          return { candidate, index, sort: Math.random() };
        })
        .filter(function(item) {
          return item.index !== currentIndex;
        })
        .sort(function(a, b) {
          return a.sort - b.sort;
        });
    }

    function applyCandidate(index) {
      currentIndex = index;
      card.classList.remove('is-speaker-cycle-resting');
      if (typeof wave.setVoicePanelWavePaused === 'function') {
        wave.setVoicePanelWavePaused(false);
      }
      updateVoicePanelAvatarSource(avatar, uniqueCandidates[currentIndex].src);
      name.textContent = uniqueCandidates[currentIndex].name;
    }

    function stopSwitchTimer() {
      if (!switchTimer) return;
      window.clearTimeout(switchTimer);
      switchTimer = null;
    }

    function emitCycleComplete() {
      stopSwitchTimer();
      card.dispatchEvent(new CustomEvent('voice-panel:speaker-cycle-complete', {
        bubbles: true,
        detail: {
          card,
          restDelay: finalSpeakerRestDelay
        }
      }));
    }

    function scheduleCycleComplete(delay = finalSpeakerSpeakingDelay) {
      stopSwitchTimer();
      switchTimer = window.setTimeout(function() {
        if (!card.isConnected) return;
        emitCycleComplete();
      }, delay);
    }

    function scheduleNextSwitch(delay = getNextSwitchDelay()) {
      stopSwitchTimer();
      switchTimer = window.setTimeout(function() {
        if (!card.isConnected) return;
        if (cycleQueue.length === 0) {
          buildCycleQueue();
        }
        const next = cycleQueue.shift();
        if (!next) {
          emitCycleComplete();
          return;
        }
        applyCandidate(next.index);
        if (cycleQueue.length === 0) {
          scheduleCycleComplete();
          return;
        }
        scheduleNextSwitch();
      }, delay);
    }

    card.addEventListener('voice-panel:speaker-cycle-restart', function() {
      if (!card.isConnected) return;
      card.classList.remove('is-speaker-cycle-resting');
      if (typeof wave.setVoicePanelWavePaused === 'function') {
        wave.setVoicePanelWavePaused(false);
      }
      buildCycleQueue();
      scheduleNextSwitch();
    });

    buildCycleQueue();
    scheduleNextSwitch();
  }

  return card;
}

function createVoicePanelLeaveAnimation() {
  const wrap = document.createElement('span');
  wrap.className = 'nn-voice-panel__leave-animation';
  wrap.setAttribute('aria-hidden', 'true');
  wrap.dataset.animationSrc = '../image/Animation/挂断.json';
  wrap.innerHTML = createVoicePanelLeaveAnimationSvg();
  return wrap;
}

function createVoicePanelLeaveAnimationSvg() {
  return `
    <svg viewBox="0 0 24 24" width="24" height="24" focusable="false">
      <g class="nn-voice-panel__leave-animation-mark">
        <g transform="translate(11.99 10.45) translate(-9.97 -4.26)">
          <path fill="#DA3639" d="M9.98 0C14.818 0 18.355 1.491 19.7 4.47C20.054 4.835 20.019 5.401 19.66 5.76L17.2 8.23C16.885 8.544 16.4 8.604 16.01 8.39L12.61 6.52C12.257 6.326 12.057 5.941 12.1 5.54C12.142 5.143 12.203 4.361 12.22 4.35C10.877 3.779 9.989 3.765 9.95 3.77C8.601 3.77 7.748 4.685 7.69 4.34C7.748 4.685 7.493 6.217 7.36 6.42L3.86 8.31C3.471 8.52 2.992 8.442 2.68 8.13L0.29 5.74C-0.07 5.38 -0.07 4.809 0.25 4.45C1.599 3.069 5.145 0 9.98 0Z"/>
        </g>
        <g transform="translate(12 17.42) translate(-8.98 -1)">
          <path fill="#DA3639" d="M17.96 2H0V0H17.96V2Z"/>
        </g>
      </g>
    </svg>
  `;
}

function createVoicePanelVolumeAnimation(className, src, svgClassName) {
  const wrap = document.createElement('span');
  wrap.className = ['nn-voice-panel__volume-animation', className].filter(Boolean).join(' ');
  wrap.setAttribute('aria-hidden', 'true');
  wrap.dataset.animationSrc = src;
  wrap.dataset.svgClassName = svgClassName;
  return wrap;
}

function createVoicePanelLottieAnimation(container, options = {}) {
  const player = typeof window !== 'undefined' ? (window.lottie || window.bodymovin) : null;
  if (!container || !player || !container.dataset.animationSrc) return null;
  const animation = player.loadAnimation({
    container,
    renderer: 'svg',
    loop: Boolean(options.loop),
    autoplay: Boolean(options.autoplay),
    path: container.dataset.animationSrc,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    }
  });
  return animation;
}

function playVoicePanelLottieOnce(animation) {
  if (!animation) return;
  animation.stop();
  animation.goToAndPlay(0, true);
}

const VoicePanelLaunchStateAliases = Object.freeze({
  idle: 'idle',
  'not-started': 'idle',
  '未启动': 'idle',
  '启动游戏': 'idle',
  launching: 'launching',
  '启动中': 'launching',
  '游戏启动中': 'launching',
  playing: 'playing',
  '游戏中': 'playing',
  '结束游戏': 'playing'
});

function normalizeVoicePanelLaunchState(value) {
  return VoicePanelLaunchStateAliases[String(value || 'idle')] || 'idle';
}

function createVoicePanelLaunchButton(options = {}) {
  const {
    state = 'idle',
    gameName = '绝地求生',
    gameIcon = '../image/Game logo/game1.webp',
    progress = 58,
    onClick = null
  } = options;
  let currentProgress = Math.max(0, Math.min(100, Number(progress) || 0));
  let lastRenderedState = null;
  let contentTransitionTimer = null;
  let iconGhostTimer = null;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'nn-voice-panel__launch-button';

  const progressBar = document.createElement('span');
  progressBar.className = 'nn-voice-panel__launch-progress';
  progressBar.setAttribute('aria-hidden', 'true');
  button.appendChild(progressBar);

  const content = document.createElement('span');
  content.className = 'nn-voice-panel__launch-content';
  const logoFrame = document.createElement('span');
  logoFrame.className = 'nn-voice-panel__launch-logo-frame';
  const logo = document.createElement('img');
  logo.className = 'nn-voice-panel__launch-logo';
  logo.src = gameIcon;
  logo.alt = '';
  logoFrame.appendChild(logo);
  const stateIcon = document.createElement('i');
  stateIcon.className = 'nnicon nn-voice-panel__launch-state-icon';
  stateIcon.setAttribute('aria-hidden', 'true');
  const label = document.createElement('span');
  label.className = 'nn-voice-panel__launch-label';
  const labelCopy = document.createElement('span');
  labelCopy.className = 'nn-voice-panel__launch-label-copy';
  const progressValue = document.createElement('span');
  progressValue.className = 'nn-voice-panel__launch-progress-value';
  const textGroup = document.createElement('span');
  textGroup.className = 'nn-voice-panel__launch-text-group';
  label.appendChild(labelCopy);
  textGroup.appendChild(label);
  textGroup.appendChild(progressValue);
  textGroup.appendChild(stateIcon);
  content.appendChild(logoFrame);
  content.appendChild(textGroup);
  button.appendChild(content);

  function clearLaunchStateTransition() {
    if (contentTransitionTimer) {
      window.clearTimeout(contentTransitionTimer);
      contentTransitionTimer = null;
    }
    content.classList.remove('is-position-transitioning');
    content.style.transform = '';
  }

  function animateLaunchStateTransition(previousContentRect, previousIconRect, previousIconClassName) {
    if (!previousContentRect) return;
    const nextContentRect = content.getBoundingClientRect();
    const translateX = previousContentRect.left - nextContentRect.left;
    clearLaunchStateTransition();
    if (Math.abs(translateX) >= 0.5) {
      content.style.transform = `translateX(${translateX}px)`;
      void content.offsetWidth;
      content.classList.add('is-position-transitioning');
      window.requestAnimationFrame(function() {
        content.style.transform = 'translateX(0)';
      });
      contentTransitionTimer = window.setTimeout(function() {
        contentTransitionTimer = null;
        content.classList.remove('is-position-transitioning');
        content.style.transform = '';
      }, 280);
    }

    if (!previousIconRect || !previousIconClassName || !stateIcon.hidden) return;
    if (iconGhostTimer) {
      window.clearTimeout(iconGhostTimer);
      iconGhostTimer = null;
    }
    button.querySelectorAll('.nn-voice-panel__launch-state-icon-ghost').forEach(function(ghost) {
      ghost.remove();
    });
    const buttonRect = button.getBoundingClientRect();
    const iconGhost = document.createElement('i');
    iconGhost.className = `${previousIconClassName} nn-voice-panel__launch-state-icon-ghost`;
    iconGhost.setAttribute('aria-hidden', 'true');
    iconGhost.style.left = `${previousIconRect.left - buttonRect.left}px`;
    iconGhost.style.top = `${previousIconRect.top - buttonRect.top}px`;
    button.appendChild(iconGhost);
    window.requestAnimationFrame(function() {
      iconGhost.classList.add('is-fading');
    });
    iconGhostTimer = window.setTimeout(function() {
      iconGhostTimer = null;
      iconGhost.remove();
    }, 220);
  }

  function getStateConfig(resolvedState) {
    return {
      idle: {
        label: '启动游戏',
        icon: 'nicon-a-Start-lineqidong-xianxing',
        showLogo: true,
        showProgress: false
      },
      launching: {
        label: '游戏启动中...',
        icon: '',
        showLogo: true,
        showProgress: true
      },
      playing: {
        label: '结束游戏',
        icon: 'nicon-a-close-lineguanbi-xianxing',
        showLogo: true,
        showProgress: false
      }
    }[resolvedState];
  }

  function renderState() {
    const resolvedState = normalizeVoicePanelLaunchState(button.dataset.launchState);
    const isStateChange = lastRenderedState !== null && lastRenderedState !== resolvedState;
    const stateConfig = getStateConfig(resolvedState);
    const roundedProgress = Math.round(currentProgress);
    const nextProgressText = `${roundedProgress}%`;
    const previousContentRect = isStateChange ? content.getBoundingClientRect() : null;
    const previousIconRect = isStateChange && !stateIcon.hidden ? stateIcon.getBoundingClientRect() : null;
    const previousIconClassName = isStateChange && !stateIcon.hidden ? stateIcon.className : '';
    const accessibleLabel = stateConfig.showProgress
      ? `${stateConfig.label}${roundedProgress}%`
      : stateConfig.label;
    button.classList.toggle('is-playing', resolvedState === 'playing');
    button.classList.toggle('is-launching', resolvedState === 'launching');
    button.classList.toggle('is-loading', stateConfig.showProgress);
    logoFrame.hidden = !stateConfig.showLogo;
    labelCopy.textContent = stateConfig.label;
    progressValue.hidden = !stateConfig.showProgress;
    progressValue.textContent = nextProgressText;
    stateIcon.className = [
      'nnicon',
      'nn-voice-panel__launch-state-icon',
      stateConfig.icon
    ].filter(Boolean).join(' ');
    stateIcon.hidden = !stateConfig.icon;
    progressBar.style.transform = stateConfig.showProgress
      ? `scaleX(${currentProgress / 100})`
      : 'scaleX(0)';
    button.setAttribute('aria-label', stateConfig.actionLabel || accessibleLabel);
    if (isStateChange) {
      animateLaunchStateTransition(previousContentRect, previousIconRect, previousIconClassName);
    }
    lastRenderedState = resolvedState;
  }

  function setState(nextState, nextProgress) {
    const resolvedState = normalizeVoicePanelLaunchState(nextState);
    if (nextProgress !== undefined) {
      currentProgress = Math.max(0, Math.min(100, Number(nextProgress) || 0));
    }
    button.dataset.launchState = resolvedState;
    renderState();
  }

  function setProgress(nextProgress) {
    currentProgress = Math.max(0, Math.min(100, Number(nextProgress) || 0));
    renderState();
  }

  setState(state);
  button.setVoicePanelLaunchState = setState;
  button.setVoicePanelLaunchProgress = setProgress;
  button.getVoicePanelLaunchState = function() {
    return button.dataset.launchState;
  };
  button.getVoicePanelLaunchProgress = function() {
    return currentProgress;
  };
  if (typeof onClick === 'function') {
    button.addEventListener('click', function(event) {
      onClick({
        event,
        state: button.dataset.launchState,
        button
      });
    });
  }
  return button;
}

const VoicePanelGameActionDropdownStyleVariables = Object.freeze({
  panelWidth: '--nn-voice-panel-card-dropdown-panel-width',
  panelGap: '--nn-voice-panel-card-dropdown-gap',
  panelPadding: '--nn-voice-panel-card-dropdown-panel-padding',
  panelBorderColor: '--nn-voice-panel-card-dropdown-panel-border-color',
  panelRadius: '--nn-voice-panel-card-dropdown-panel-radius',
  panelBackground: '--nn-voice-panel-card-dropdown-panel-background',
  panelShadow: '--nn-voice-panel-card-dropdown-panel-shadow',
  itemGap: '--nn-voice-panel-card-dropdown-item-gap',
  itemMinHeight: '--nn-voice-panel-card-dropdown-item-min-height',
  itemPadding: '--nn-voice-panel-card-dropdown-item-padding',
  itemBackground: '--nn-voice-panel-card-dropdown-item-background',
  itemHoverBackground: '--nn-voice-panel-card-dropdown-item-hover-background',
  itemColor: '--nn-voice-panel-card-dropdown-item-color',
  itemFontSize: '--nn-voice-panel-card-dropdown-item-font-size'
});

function applyVoicePanelGameActionDropdownStyle(dropdown, styleOptions = {}) {
  if (!dropdown || !styleOptions || typeof styleOptions !== 'object') return;
  Object.keys(VoicePanelGameActionDropdownStyleVariables).forEach(function(optionName) {
    const value = styleOptions[optionName];
    if (value === undefined || value === null || value === '') return;
    const cssValue = typeof value === 'number' ? `${value}px` : String(value);
    dropdown.style.setProperty(VoicePanelGameActionDropdownStyleVariables[optionName], cssValue);
  });
}

function createVoicePanelGameListButton(onClick) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'nn-voice-panel__game-list-button';
  button.setAttribute('aria-label', '选择游戏');
  button.setAttribute('aria-haspopup', 'dialog');
  button.setAttribute('aria-expanded', 'false');
  function renderRunningGames(games) {
    const runningGames = Array.isArray(games) ? games.slice() : [];
    const isOverflow = runningGames.length > 3;
    button.textContent = '';
    button.classList.toggle('is-running', runningGames.length > 0);
    button.classList.toggle('is-overflow', isOverflow);
    if (!runningGames.length) {
      button.innerHTML = '<i class="nnicon nicon-a-gamelist-lineyouxiliebiao-xianxing" aria-hidden="true"></i>';
      button.setAttribute('aria-label', '选择游戏');
      return;
    }

    const list = document.createElement('span');
    list.className = [
      'nn-voice-panel__game-list-running',
      isOverflow ? 'is-overflow' : ''
    ].filter(Boolean).join(' ');
    const visibleGames = runningGames.slice(0, 3);
    visibleGames.forEach(function(game) {
      const frame = document.createElement('span');
      frame.className = 'nn-voice-panel__running-game';
      const image = document.createElement('img');
      image.className = 'nn-voice-panel__running-game-image';
      image.src = resolveVoicePanelGameLogo(game.gameName, game.gameIcon);
      image.alt = '';
      frame.appendChild(image);
      list.appendChild(frame);
    });
    if (isOverflow && typeof window.createBadge === 'function') {
      const countBadge = window.createBadge({
        text: String(runningGames.length),
        variant: 'blue'
      });
      countBadge.classList.add('nn-voice-panel__running-game-count');
      button.appendChild(countBadge);
    }
    button.appendChild(list);
    button.setAttribute('aria-label', `正在运行：${runningGames.map(function(game) { return game.gameName; }).join('、')}`);
  }

  renderRunningGames([]);
  if (typeof onClick === 'function') {
    button.addEventListener('click', function(event) {
      onClick({ event, button });
    });
  }
  button.setVoicePanelRunningGames = renderRunningGames;
  return button;
}

const VoicePanelGameLaunchActionMap = Object.freeze({
  idle: {
    label: '启动',
    icon: 'nicon-a-play-filebofang-mianxing',
    iconSize: 20,
    variant: 'system',
    level: 'secondary'
  },
  launching: {
    label: '启动中',
    icon: '',
    iconSize: 24,
    variant: 'system',
    level: 'secondary'
  },
  playing: {
    label: '结束',
    icon: 'nicon-a-close-fillguanbi-mianxing',
    iconSize: 16,
    variant: 'warning',
    level: 'primary'
  }
});

const VoicePanelGameLaunchProgressLabelMap = Object.freeze({
  launching: '游戏启动中...'
});

const VoicePanelGameProgressStateMap = Object.freeze({
  launching: { completed: 'playing' }
});

function isVoicePanelGameProgressState(state) {
  return Boolean(VoicePanelGameProgressStateMap[state]);
}

const VoicePanelGameCardStateAliases = Object.freeze({
  idle: 'idle',
  'not-started': 'idle',
  '未启动': 'idle',
  '启动游戏': 'idle',
  launching: 'launching',
  '启动中': 'launching',
  '游戏启动中': 'launching',
  playing: 'playing',
  '游戏中': 'playing',
  '结束游戏': 'playing'
});

const VoicePanelGameLogoMap = Object.freeze({
  '绝地求生': '../image/Game logo/game1.webp',
  '魔兽世界': '../image/Game logo/voice-game-wow.png',
  'APEX英雄': '../image/Game logo/voice-game-apex.png',
  '炉石传说': '../image/Game logo/voice-game-hearthstone.png',
  '最终决战': '../image/Game logo/voice-game-final-showdown.png'
});

function normalizeVoicePanelGameCardState(value) {
  return VoicePanelGameCardStateAliases[String(value || 'idle')] || 'idle';
}

function resolveVoicePanelGameLogo(gameName, gameIcon) {
  return gameIcon || VoicePanelGameLogoMap[gameName] || '../image/Game logo/game1.webp';
}

const VoicePanelGameListDefaults = Object.freeze([
  {
    gameName: '绝地求生',
    gameIcon: '../image/Game logo/game1.webp',
    state: 'idle'
  },
  {
    gameName: '魔兽世界',
    gameIcon: '../image/Game logo/voice-game-wow.png',
    state: 'idle'
  },
  {
    gameName: 'APEX英雄',
    gameIcon: '../image/Game logo/voice-game-apex.png',
    state: 'idle'
  },
  {
    gameName: '炉石传说',
    gameIcon: '../image/Game logo/voice-game-hearthstone.png',
    state: 'idle'
  },
  {
    gameName: '最终决战',
    gameIcon: '../image/Game logo/voice-game-final-showdown.png',
    state: 'idle'
  }
]);

let VoicePanelGamePopoverSequence = 0;

function createVoicePanelInlineIcon(iconClass, className) {
  const el = document.createElement('i');
  el.className = ['nnicon', iconClass, className || ''].filter(Boolean).join(' ');
  el.setAttribute('aria-hidden', 'true');
  return el;
}

function createVoicePanelBasicButton(options = {}) {
  const {
    text = '',
    icon = '',
    variant = 'system',
    level = 'secondary',
    size = 'large',
    iconSize = 20,
    disabled = false,
    onClick = null
  } = options;
  if (typeof window !== 'undefined' && typeof window.createButton === 'function') {
    if (typeof window.injectButtonStyles === 'function') {
      window.injectButtonStyles();
    }
    return window.createButton({
      text,
      icon: icon ? `<i class="nnicon ${icon}" aria-hidden="true"></i>` : null,
      iconPosition: icon && text ? 'left' : null,
      variant,
      level,
      size,
      iconSize,
      disabled,
      onClick
    });
  }
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `nn-btn nn-btn-${variant}-${level} nn-btn-${size}`;
    button.disabled = disabled;
  button.innerHTML = `${icon ? `<span class="nn-btn-icon"><i class="nnicon ${icon}"></i></span>` : ''}${text ? `<span class="nn-btn-text">${text}</span>` : ''}`;
  if (typeof onClick === 'function') {
    button.addEventListener('click', onClick);
  }
  return button;
}

function createVoicePanelIconButton(options = {}) {
  const { icon, label = '', iconSize = 16, onClick = null } = options;
  let button;
  if (typeof window !== 'undefined' && typeof window.createButton === 'function') {
    if (typeof window.injectButtonStyles === 'function') {
      window.injectButtonStyles();
    }
    button = window.createButton({
      icon: `<i class="nnicon ${icon}" aria-hidden="true"></i>`,
      iconPosition: 'only',
      size: 'small',
      variant: 'system',
      level: 'tertiary',
      iconSize,
      onClick
    });
  } else {
    button = document.createElement('button');
    button.type = 'button';
    button.className = 'nn-btn nn-btn-system-tertiary nn-btn-small nn-btn-icon-only';
    button.innerHTML = `<span class="nn-btn-icon"><i class="nnicon ${icon}"></i></span>`;
    if (typeof onClick === 'function') {
      button.addEventListener('click', onClick);
    }
  }
  if (label) {
    button.setAttribute('aria-label', label);
  }
  return button;
}

function createVoicePanelGameLaunchCard(options = {}) {
  injectVoicePanelStyles();
  const {
    gameName = '绝地求生',
    gameIcon = '',
    state = 'idle',
    progress = 0,
    progressDuration = 4000,
    boostText = '未加速',
    boostFlag = '../image/National flag/俄服.svg',
    playingStartedAt = null,
    totalTime = '累计 3679h',
    sessionText = '上次游戏：昨天',
    playingSessionText = '',
    launchDropdown = {},
    onAction = null,
    onSettings = null,
    onStateChange = null,
    onProgressChange = null
  } = options;
  let currentState = normalizeVoicePanelGameCardState(state);
  let currentProgress = Math.max(0, Math.min(100, Number(progress) || 0));
  let progressFrame = null;
  let completionTimer = null;
  let progressCompletedState = null;
  let boostRotationTimer = null;
  let boostRotationResetTimer = null;
  let accelerationStartedAt = Number(playingStartedAt) || (currentState === 'playing' ? Date.now() : null);
  let actionButton = null;
  let actionDropdown = null;
  let actionDropdownCloseTimer = null;
  let progressArea = null;
  let progressTrack = null;
  let progressBar = null;
  let progressLabelElement = null;
  let progressNumberElement = null;
  const resolvedGameIcon = resolveVoicePanelGameLogo(gameName, gameIcon);
  const launchDropdownConfig = launchDropdown && typeof launchDropdown === 'object'
    ? launchDropdown
    : {};
  const resolvedPlayingSessionText = playingSessionText || (
    currentState === 'playing' ? sessionText : '游戏中：刚刚'
  );

  const card = document.createElement('div');
  card.className = 'nn-game-accelerator-card';
  card.setAttribute('role', 'listitem');

  const main = document.createElement('div');
  main.className = 'nn-game-accelerator-card__main';

  const game = document.createElement('div');
  game.className = 'nn-game-accelerator-card__game';

  const logoFrame = document.createElement('span');
  logoFrame.className = 'nn-game-accelerator-card__logo-frame';
  const logo = document.createElement('img');
  logo.className = 'nn-game-accelerator-card__logo';
  logo.src = resolvedGameIcon;
  logo.alt = gameName;
  logoFrame.appendChild(logo);
  game.appendChild(logoFrame);

  const info = document.createElement('div');
  info.className = 'nn-game-accelerator-card__info';
  info.appendChild(createVoicePanelInlineText('nn-game-accelerator-card__title', gameName));

  const boost = document.createElement('span');
  boost.className = 'nn-game-accelerator-card__boost';
  info.appendChild(boost);
  game.appendChild(info);
  main.appendChild(game);

  const actionTrigger = document.createElement('span');
  actionTrigger.className = 'nn-game-accelerator-card__action-trigger';
  main.appendChild(actionTrigger);
  card.appendChild(main);

  const meta = document.createElement('div');
  meta.className = 'nn-game-accelerator-card__meta';
  const metaIcon = createVoicePanelInlineIcon('nicon-a-STEAM-fillSTEAM-mianxing');
  meta.appendChild(metaIcon);
  const metaText = createVoicePanelInlineText('nn-game-accelerator-card__meta-text', '');
  meta.appendChild(metaText);
  const settingsButton = document.createElement('button');
  settingsButton.type = 'button';
  settingsButton.className = 'nn-game-accelerator-card__settings';
  settingsButton.setAttribute('aria-label', '游戏设置');
  settingsButton.appendChild(createVoicePanelInlineIcon('nicon-a-settings-lineshezhi-xianxing'));
  settingsButton.addEventListener('click', function(event) {
    if (typeof onSettings === 'function') {
      onSettings({ event, state: currentState, gameName, card });
    }
  });
  meta.appendChild(settingsButton);
  card.appendChild(meta);

  function stopProgress() {
    if (progressFrame !== null) {
      window.cancelAnimationFrame(progressFrame);
      progressFrame = null;
    }
    if (completionTimer !== null) {
      window.clearTimeout(completionTimer);
      completionTimer = null;
    }
  }

  function ensureProgressArea() {
    if (progressArea) return;
    progressArea = document.createElement('div');
    progressArea.className = 'nn-game-accelerator-card__progress-area';
    progressTrack = document.createElement('div');
    progressTrack.className = 'nn-game-accelerator-card__progress';
    progressTrack.setAttribute('role', 'progressbar');
    progressTrack.setAttribute('aria-valuemin', '0');
    progressTrack.setAttribute('aria-valuemax', '100');
    progressBar = document.createElement('span');
    progressBar.className = 'nn-game-accelerator-card__progress-bar';
    progressTrack.appendChild(progressBar);
    progressArea.appendChild(progressTrack);
    const progressText = document.createElement('span');
    progressText.className = 'nn-game-accelerator-card__progress-text';
    progressLabelElement = document.createElement('span');
    progressLabelElement.className = 'nn-game-accelerator-card__progress-label';
    progressNumberElement = document.createElement('span');
    progressNumberElement.className = 'nn-game-accelerator-card__progress-number';
    progressText.appendChild(progressLabelElement);
    progressText.appendChild(progressNumberElement);
    progressText.appendChild(document.createTextNode('%'));
    progressArea.appendChild(progressText);
    card.appendChild(progressArea);
  }

  function removeProgressArea() {
    if (!progressArea) return;
    progressArea.remove();
    progressArea = null;
    progressTrack = null;
    progressBar = null;
    progressLabelElement = null;
    progressNumberElement = null;
  }

  function updateProgressDisplay() {
    if (!progressArea) return;
    const roundedProgress = Math.round(currentProgress);
    progressTrack.setAttribute('aria-valuenow', String(roundedProgress));
    progressBar.style.transform = `scaleX(${currentProgress / 100})`;
    progressLabelElement.textContent = VoicePanelGameLaunchProgressLabelMap[currentState] || '';
    progressNumberElement.textContent = String(roundedProgress);
    card.setAttribute('aria-label', `${gameName}，${progressLabelElement.textContent}${roundedProgress}%`);
    if (typeof onProgressChange === 'function') {
      onProgressChange({ state: currentState, progress: currentProgress, gameName, card });
    }
  }

  function stopBoostRotation() {
    if (boostRotationTimer !== null) {
      window.clearInterval(boostRotationTimer);
      boostRotationTimer = null;
    }
    if (boostRotationResetTimer !== null) {
      window.clearTimeout(boostRotationResetTimer);
      boostRotationResetTimer = null;
    }
  }

  function formatAccelerationTime(totalSeconds) {
    const safeSeconds = Math.max(0, Math.floor(totalSeconds));
    const hours = Math.floor(safeSeconds / 3600);
    const minutes = Math.floor((safeSeconds % 3600) / 60);
    const seconds = safeSeconds % 60;
    return [hours, minutes, seconds].map(function(value) {
      return String(value).padStart(2, '0');
    }).join(':');
  }

  function renderBoostState() {
    stopBoostRotation();
    boost.textContent = '';
    if (currentState === 'playing' && boostFlag) {
      if (!accelerationStartedAt) {
        accelerationStartedAt = Date.now();
      }
      const rotator = document.createElement('span');
      rotator.className = 'nn-game-accelerator-card__boost-rotator';
      const serverItem = document.createElement('span');
      serverItem.className = 'nn-game-accelerator-card__boost-item';
      const flag = document.createElement('img');
      flag.className = 'nn-game-accelerator-card__boost-flag';
      flag.src = boostFlag;
      flag.alt = '';
      serverItem.appendChild(flag);
      serverItem.appendChild(createVoicePanelInlineText(
        'nn-game-accelerator-card__boost-text',
        boostText === '未加速' ? '俄服 22ms' : boostText
      ));
      const timeItem = document.createElement('span');
      timeItem.className = 'nn-game-accelerator-card__boost-item';
      timeItem.appendChild(createVoicePanelInlineIcon('nicon-a-Time-lineshijian-xianxing'));
      const timeText = createVoicePanelInlineText('nn-game-accelerator-card__boost-time', '00:00:00');
      timeItem.appendChild(timeText);
      rotator.appendChild(serverItem);
      rotator.appendChild(timeItem);
      rotator.appendChild(serverItem.cloneNode(true));
      boost.appendChild(rotator);
      let elapsedTicks = 0;
      let rotationStep = 0;
      function updateAccelerationTime() {
        timeText.textContent = formatAccelerationTime((Date.now() - accelerationStartedAt) / 1000);
      }
      updateAccelerationTime();
      boostRotationTimer = window.setInterval(function() {
        elapsedTicks += 1;
        updateAccelerationTime();
        if (elapsedTicks % 2 === 0) {
          rotationStep += 1;
          if (rotationStep === 1) {
            rotator.classList.add('is-time-visible');
            return;
          }
          rotator.classList.remove('is-time-visible');
          rotator.classList.add('is-server-repeat-visible');
          boostRotationResetTimer = window.setTimeout(function() {
            boostRotationResetTimer = null;
            rotator.classList.add('is-cycle-resetting');
            rotator.classList.remove('is-server-repeat-visible');
            rotationStep = 0;
            window.requestAnimationFrame(function() {
              window.requestAnimationFrame(function() {
                rotator.classList.remove('is-cycle-resetting');
              });
            });
          }, 500);
        }
      }, 1000);
      return;
    } else {
      accelerationStartedAt = null;
      boost.appendChild(createVoicePanelInlineIcon('nicon-a-Lightning-Fillshandian-mianxing'));
    }
    boost.appendChild(createVoicePanelInlineText(
      'nn-game-accelerator-card__boost-text',
      '未加速'
    ));
  }

  function emitStateChange(previousState) {
    if (typeof onStateChange !== 'function' || previousState === currentState) return;
    onStateChange({
      previousState,
      state: currentState,
      progress: currentProgress,
      gameName,
      card
    });
  }

  function clearActionDropdownCloseTimer() {
    if (actionDropdownCloseTimer === null) return;
    window.clearTimeout(actionDropdownCloseTimer);
    actionDropdownCloseTimer = null;
  }

  function setActionDropdownOpen(open) {
    if (!actionDropdown || !actionDropdown._dropdownMenu) return;
    actionDropdown._dropdownMenu.setOpen(Boolean(open) && currentState === 'idle');
  }

  function scheduleActionDropdownClose() {
    clearActionDropdownCloseTimer();
    actionDropdownCloseTimer = window.setTimeout(function() {
      actionDropdownCloseTimer = null;
      setActionDropdownOpen(false);
    }, 120);
  }

  function handleAccelerationAction(dropdownEvent) {
    const previousState = currentState;
    let actionResult;
    if (typeof onAction === 'function') {
      actionResult = onAction({
        event: null,
        dropdownEvent,
        phase: 'accelerate',
        state: previousState,
        nextState: 'playing',
        gameName,
        card
      });
    }
    if (actionResult === false) return;
    stopProgress();
    currentState = 'playing';
    currentProgress = 100;
    accelerationStartedAt = Date.now();
    renderState();
    emitStateChange(previousState);
  }

  function handleActionClick(event) {
    event.stopPropagation();
    setActionDropdownOpen(false);
    const previousState = currentState;
    if (currentState === 'launching') return;
    if (currentState === 'idle') {
      let actionResult;
      if (typeof onAction === 'function') {
        actionResult = onAction({ event, phase: 'start', state: previousState, nextState: 'launching', gameName, card });
      }
      if (actionResult === false) return;
      startProgress('launching', 'playing', 0);
      return;
    }
    if (currentState === 'playing') {
      let actionResult;
      if (typeof onAction === 'function') {
        actionResult = onAction({ event, phase: 'complete', state: previousState, nextState: 'idle', gameName, card });
      }
      if (actionResult === false) return;
      stopProgress();
      currentState = 'idle';
      currentProgress = 0;
      renderState();
      emitStateChange(previousState);
    }
  }

  function renderActionButton() {
    const actionConfig = VoicePanelGameLaunchActionMap[currentState] || VoicePanelGameLaunchActionMap.idle;
    function createActionButton() {
      const button = createVoicePanelBasicButton({
        text: actionConfig.label,
        icon: actionConfig.icon,
        variant: actionConfig.variant,
        level: actionConfig.level,
        size: 'large',
        iconSize: actionConfig.iconSize,
        disabled: currentState === 'launching',
        onClick: handleActionClick
      });
      button.classList.add('nn-game-accelerator-card__action');
      button.setAttribute('aria-label', `${actionConfig.label} ${gameName}`);
      return button;
    }

    if (currentState === 'idle' && launchDropdownConfig.enabled !== false && typeof createDropdownMenu === 'function') {
      if (!actionDropdown) {
        const idleButton = createActionButton();
        const dropdownItems = Array.isArray(launchDropdownConfig.items) && launchDropdownConfig.items.length
          ? launchDropdownConfig.items
          : [{ label: '加速游戏', value: 'accelerate' }];
        idleButton.setAttribute('aria-haspopup', 'true');
        idleButton.setAttribute('aria-expanded', 'false');
        actionDropdown = createDropdownMenu({
          appearance: 'no-padding',
          size: 'large',
          triggerElement: idleButton,
          items: dropdownItems,
          className: 'nn-game-accelerator-card__action-dropdown',
          onOpenChange: function(open) {
            idleButton.setAttribute('aria-expanded', String(open));
            card.classList.toggle('is-action-dropdown-open', open);
          },
          onChange: handleAccelerationAction
        });
        applyVoicePanelGameActionDropdownStyle(actionDropdown, launchDropdownConfig.style);
        actionDropdown.addEventListener('mouseenter', function() {
          clearActionDropdownCloseTimer();
          setActionDropdownOpen(true);
        });
        actionDropdown.addEventListener('mouseleave', scheduleActionDropdownClose);
        idleButton.addEventListener('keydown', function(event) {
          if (event.key !== 'ArrowDown') return;
          event.preventDefault();
          setActionDropdownOpen(true);
          const firstItem = actionDropdown.querySelector('.nn-dropdown-item');
          if (firstItem) firstItem.focus();
        });
      }
      actionButton = actionDropdown.querySelector('.nn-game-accelerator-card__action');
      actionTrigger.replaceChildren(actionDropdown);
      return;
    }

    setActionDropdownOpen(false);
    const nextButton = createActionButton();
    actionTrigger.replaceChildren(nextButton);
    actionButton = nextButton;
  }

  function renderState() {
    const actionConfig = VoicePanelGameLaunchActionMap[currentState] || VoicePanelGameLaunchActionMap.idle;
    const isLoading = Boolean(VoicePanelGameLaunchProgressLabelMap[currentState]);
    card.className = `nn-game-accelerator-card is-${currentState}`;
    card.dataset.state = currentState;
    renderBoostState();
    renderActionButton();
    metaIcon.className = 'nnicon nicon-a-STEAM-fillSTEAM-mianxing';
    metaText.textContent = `${totalTime}  ${currentState === 'playing' ? resolvedPlayingSessionText : sessionText}`;
    if (isLoading) {
      ensureProgressArea();
      updateProgressDisplay();
    } else {
      removeProgressArea();
      card.setAttribute('aria-label', `${gameName}，${actionConfig.label}`);
    }
  }

  function continueProgress() {
    const transientState = currentState;
    const initialProgress = currentProgress;
    const duration = Math.max(600, Number(progressDuration) || 4000) * ((100 - initialProgress) / 100);
    const startTime = window.performance.now();

    function renderProgressFrame(currentTime) {
      if (!card.isConnected) {
        stopProgress();
        return;
      }
      const elapsed = Math.max(0, currentTime - startTime);
      const progressRatio = Math.min(1, duration === 0 ? 1 : elapsed / duration);
      currentProgress = initialProgress + ((100 - initialProgress) * progressRatio);
      updateProgressDisplay();
      if (progressRatio < 1) {
        progressFrame = window.requestAnimationFrame(renderProgressFrame);
        return;
      }
      progressFrame = null;
      completionTimer = window.setTimeout(function() {
        completionTimer = null;
        if (!card.isConnected) return;
        const loadingState = currentState;
        currentState = normalizeVoicePanelGameCardState(progressCompletedState || VoicePanelGameProgressStateMap[transientState].completed);
        currentProgress = 0;
        renderState();
        emitStateChange(loadingState);
        if (typeof onAction === 'function') {
          onAction({
            event: null,
            phase: 'complete',
            state: loadingState,
            nextState: currentState,
            gameName,
            card
          });
        }
      }, 180);
    }

    progressFrame = window.requestAnimationFrame(renderProgressFrame);
  }

  function startProgress(transientState, completedState, startAt) {
    stopProgress();
    const previousState = currentState;
    currentState = normalizeVoicePanelGameCardState(transientState);
    currentProgress = Math.max(0, Math.min(100, Number(startAt) || 0));
    progressCompletedState = completedState;
    renderState();
    emitStateChange(previousState);
    continueProgress();
  }

  function setState(nextState, nextProgress) {
    const resolvedNextState = normalizeVoicePanelGameCardState(nextState);
    const nextProgressValue = nextProgress === undefined ? 0 : nextProgress;
    if (resolvedNextState === 'launching') {
      startProgress('launching', 'playing', nextProgressValue);
      return;
    }
    stopProgress();
    const previousState = currentState;
    currentState = resolvedNextState;
    currentProgress = Math.max(0, Math.min(100, Number(nextProgressValue) || 0));
    renderState();
    emitStateChange(previousState);
  }

  function syncState(nextState, nextProgress) {
    stopProgress();
    currentState = normalizeVoicePanelGameCardState(nextState);
    currentProgress = Math.max(0, Math.min(100, Number(nextProgress) || 0));
    renderState();
  }

  renderState();
  card.setVoicePanelGameCardState = setState;
  card.syncVoicePanelGameCardState = syncState;
  card.setVoicePanelGameCardProgress = function(nextProgress) {
    currentProgress = Math.max(0, Math.min(100, Number(nextProgress) || 0));
    updateProgressDisplay();
  };
  card.getVoicePanelGameCardState = function() {
    return currentState;
  };
  card.getVoicePanelGameCardProgress = function() {
    return currentProgress;
  };
  card.destroyVoicePanelGameCard = function() {
    stopProgress();
    stopBoostRotation();
    clearActionDropdownCloseTimer();
    setActionDropdownOpen(false);
  };

  if (isVoicePanelGameProgressState(currentState)) {
    window.requestAnimationFrame(function() {
      const completionState = currentState === 'launching' ? 'playing' : 'idle';
      startProgress(currentState, completionState, currentProgress);
    });
  }

  return card;
}

function createVoicePanelDurationDetails(options = {}) {
  const durationDetails = options.durationDetails || {};
  const details = document.createElement('div');
  details.className = 'nn-game-accelerator-popover__duration-details';

  const detailsHeader = document.createElement('div');
  detailsHeader.className = 'nn-game-accelerator-popover__duration-details-header';
  detailsHeader.appendChild(createVoicePanelInlineText(
    'nn-game-accelerator-popover__duration-details-heading',
    durationDetails.title || '剩余时长'
  ));
  const detailsLink = document.createElement('span');
  detailsLink.className = 'nn-game-accelerator-popover__duration-details-link';
  detailsLink.setAttribute('role', 'button');
  detailsLink.setAttribute('tabindex', '0');
  detailsLink.appendChild(createVoicePanelInlineText('', durationDetails.linkText || '使用明细'));
  detailsLink.appendChild(createVoicePanelInlineIcon(
    'nicon-a-Arrowright-linejiantouyou-xianxing',
    'nn-game-accelerator-popover__duration-details-link-icon'
  ));
  detailsLink.addEventListener('click', function(event) {
    if (typeof options.onDurationDetailsClick === 'function') {
      options.onDurationDetailsClick(event);
    }
  });
  detailsLink.addEventListener('keydown', function(event) {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    detailsLink.click();
  });
  detailsHeader.appendChild(detailsLink);
  details.appendChild(detailsHeader);

  function resolveProgressState(percent) {
    const value = Math.max(0, Math.min(100, Number(percent) || 0));
    if (value <= 0) return 'exhausted';
    if (value < 30) return 'danger';
    if (value < 70) return 'blue';
    return 'full';
  }

  function parseDurationSeconds(value) {
    const text = String(value || '');
    function readUnit(unit) {
      const match = text.match(new RegExp(`([\\d,]+)\\s*${unit}`));
      return match ? Number(match[1].replace(/,/g, '')) || 0 : 0;
    }
    return readUnit('时') * 3600 + readUnit('分') * 60 + readUnit('秒');
  }

  function formatDurationSeconds(totalSeconds) {
    const safeSeconds = Math.max(0, Math.floor(Number(totalSeconds) || 0));
    const hours = Math.floor(safeSeconds / 3600);
    const minutes = Math.floor((safeSeconds % 3600) / 60);
    const seconds = safeSeconds % 60;
    return `${hours.toLocaleString('en-US')} 时 ${String(minutes).padStart(2, '0')} 分 ${String(seconds).padStart(2, '0')} 秒`;
  }

  function formatTotalHours(totalSeconds) {
    return (Math.max(0, Number(totalSeconds) || 0) / 3600).toLocaleString('en-US', {
      maximumFractionDigits: 2
    });
  }

  function renderDurationValue(valueElement, nextValue) {
    valueElement.textContent = '';
    const valueParts = String(nextValue).match(/[\d,.]+|[^\d,.\s]+/g) || [String(nextValue)];
    valueParts.forEach(function(part) {
      const valuePart = document.createElement('span');
      valuePart.textContent = part;
      if (/[\d]/.test(part)) {
        valuePart.className = 'nn-game-accelerator-popover__duration-details-value-number';
        valueElement.appendChild(valuePart);
        return;
      }
      valuePart.className = 'nn-game-accelerator-popover__duration-details-value-unit';
      valueElement.appendChild(valuePart);
    });
  }

  function appendSection(config) {
    const section = document.createElement('section');
    section.className = 'nn-game-accelerator-popover__duration-details-section';

    const titleRow = document.createElement('div');
    titleRow.className = 'nn-game-accelerator-popover__duration-details-title-row';
    titleRow.appendChild(createVoicePanelInlineText(
      'nn-game-accelerator-popover__duration-details-label',
      config.title
    ));
    titleRow.appendChild(createVoicePanelInlineText(
      'nn-game-accelerator-popover__duration-details-status',
      config.status
    ));
    section.appendChild(titleRow);

    const valueRow = document.createElement('div');
    valueRow.className = 'nn-game-accelerator-popover__duration-details-value-row';
    const value = document.createElement('span');
    value.className = 'nn-game-accelerator-popover__duration-details-value';
    renderDurationValue(value, config.value);
    valueRow.appendChild(value);
    section.appendChild(valueRow);

    const progressRow = document.createElement('div');
    progressRow.className = 'nn-game-accelerator-popover__duration-details-progress-row';
    const progress = document.createElement('div');
    progress.className = 'nn-game-accelerator-popover__duration-details-progress';
    const fill = document.createElement('div');
    const progressValue = Math.max(0, Math.min(100, Number(config.percent) || 0));
    fill.className = [
      'nn-game-accelerator-popover__duration-details-progress-fill',
      `nn-game-accelerator-popover__duration-details-progress-fill--${resolveProgressState(progressValue)}`
    ].join(' ');
    fill.style.width = `${progressValue}%`;
    progress.appendChild(fill);
    progressRow.appendChild(progress);
    section.appendChild(progressRow);

    const metaRow = document.createElement('div');
    metaRow.className = 'nn-game-accelerator-popover__duration-details-meta-row';
    const meta = createVoicePanelInlineText(
      'nn-game-accelerator-popover__duration-details-meta',
      config.meta
    );
    metaRow.appendChild(meta);
    const percent = createVoicePanelInlineText(
      'nn-game-accelerator-popover__duration-details-percent',
      `${config.percent}%`
    );
    metaRow.appendChild(percent);
    section.appendChild(metaRow);
    details.appendChild(section);
    return { status, value, fill, meta, percent };
  }

  const pausedValue = durationDetails.pausedValue || '7,230 时 30 分 04 秒';
  const pausedRemainingSeconds = parseDurationSeconds(pausedValue);
  const pausedTotalSeconds = Math.max(
    pausedRemainingSeconds,
    (Number(durationDetails.pausedTotalHours) || 10000) * 3600
  );
  const pausedUsedPercent = ((pausedTotalSeconds - pausedRemainingSeconds) / pausedTotalSeconds) * 100;
  const pausedSection = appendSection({
    title: durationDetails.pausedTitle || '可暂停时长',
    status: durationDetails.pausedStatus || '暂停中，等待接力',
    value: pausedValue,
    percent: pausedUsedPercent.toFixed(1),
    meta: `累计已用 ${formatDurationSeconds(pausedTotalSeconds - pausedRemainingSeconds)} / 共 ${formatTotalHours(pausedTotalSeconds)} 时`
  });
  const initialActiveValue = durationDetails.activeValue || '5 时 00 分 18 秒';
  const initialActiveRemainingSeconds = parseDurationSeconds(initialActiveValue);
  const activeTotalSeconds = Math.max(
    initialActiveRemainingSeconds,
    (Number(durationDetails.activeTotalHours) || 18) * 3600
  );
  const activeUsedPercent = ((activeTotalSeconds - initialActiveRemainingSeconds) / activeTotalSeconds) * 100;
  const activeSection = appendSection({
    title: durationDetails.activeTitle || '活动时长',
    status: durationDetails.activePausedStatus || '暂停中',
    value: initialActiveValue,
    percent: activeUsedPercent.toFixed(1),
    meta: `已用 ${formatDurationSeconds(activeTotalSeconds - initialActiveRemainingSeconds)} / 共 ${formatTotalHours(activeTotalSeconds)} 时`
  });

  const footer = document.createElement('div');
  footer.className = 'nn-game-accelerator-popover__duration-details-footer';
  const footerCopy = document.createElement('div');
  footerCopy.className = 'nn-game-accelerator-popover__duration-details-footer-copy';
  footerCopy.appendChild(createVoicePanelInlineText('', '活动用完后，自动接可暂停'));
  footerCopy.appendChild(createVoicePanelInlineIcon(
    'nicon-a-Info-linexinxitishi-xianxing',
    'nn-game-accelerator-popover__duration-details-info'
  ));
  footer.appendChild(footerCopy);
  if (typeof window !== 'undefined' && typeof window.createSwitch === 'function') {
    footer.appendChild(window.createSwitch({
      checked: durationDetails.autoContinue !== false,
      size: 'default',
      onChange: options.onDurationAutoContinueChange || null
    }));
  }
  details.appendChild(footer);

  let activeDurationRemainingSeconds = initialActiveRemainingSeconds;
  let activeDurationStartedAt = 0;
  let activeDurationStartSeconds = activeDurationRemainingSeconds;
  let activeDurationTimer = null;

  function syncDurationSection(section, remainingSeconds, totalSeconds, metaPrefix) {
    const safeRemainingSeconds = Math.max(0, Math.min(totalSeconds, remainingSeconds));
    const usedSeconds = Math.max(0, totalSeconds - safeRemainingSeconds);
    const usedPercent = totalSeconds > 0 ? (usedSeconds / totalSeconds) * 100 : 0;
    renderDurationValue(section.value, formatDurationSeconds(safeRemainingSeconds));
    section.meta.textContent = `${metaPrefix}${formatDurationSeconds(usedSeconds)} / 共 ${formatTotalHours(totalSeconds)} 时`;
    section.percent.textContent = `${usedPercent.toFixed(1)}%`;
    section.fill.className = [
      'nn-game-accelerator-popover__duration-details-progress-fill',
      `nn-game-accelerator-popover__duration-details-progress-fill--${resolveProgressState(usedPercent)}`
    ].join(' ');
    section.fill.style.width = `${usedPercent}%`;
  }

  function emitDurationTimeChange() {
    if (typeof options.onDurationTimeChange !== 'function') return;
    options.onDurationTimeChange({
      pausedRemainingSeconds,
      activeRemainingSeconds: activeDurationRemainingSeconds,
      totalRemainingSeconds: pausedRemainingSeconds + activeDurationRemainingSeconds,
      pausedTotalSeconds,
      activeTotalSeconds
    });
  }

  function syncActiveDurationTime() {
    if (activeDurationTimer !== null) {
      activeSection.status.textContent = durationDetails.activeRunningStatus || '计时中';
      const elapsedSeconds = Math.floor((Date.now() - activeDurationStartedAt) / 1000);
      activeDurationRemainingSeconds = Math.max(0, activeDurationStartSeconds - elapsedSeconds);
    }
    syncDurationSection(pausedSection, pausedRemainingSeconds, pausedTotalSeconds, '累计已用 ');
    syncDurationSection(activeSection, activeDurationRemainingSeconds, activeTotalSeconds, '已用 ');
    emitDurationTimeChange();
  }

  function stopActiveDurationTimer() {
    syncActiveDurationTime();
    if (activeDurationTimer !== null) {
      window.clearInterval(activeDurationTimer);
      activeDurationTimer = null;
    }
  }

  details.setDurationActive = function(isActive) {
    if (isActive) {
      if (activeDurationTimer !== null) return;
      activeSection.status.textContent = durationDetails.activeRunningStatus || '计时中';
      activeDurationStartSeconds = activeDurationRemainingSeconds;
      activeDurationStartedAt = Date.now();
      activeDurationTimer = window.setInterval(syncActiveDurationTime, 250);
      syncActiveDurationTime();
      return;
    }
    stopActiveDurationTimer();
    activeSection.status.textContent = durationDetails.activePausedStatus || '暂停中';
  };
  details.getActiveDurationSeconds = function() {
    syncActiveDurationTime();
    return activeDurationRemainingSeconds;
  };
  details.destroyDurationDetails = stopActiveDurationTimer;

  syncActiveDurationTime();

  return details;
}

function createVoicePanelGameListPopover(options = {}) {
  injectVoicePanelStyles();
  const {
    duration = {},
    durationDetails = {},
    launchDropdown = {},
    onDurationRefresh = null,
    onDurationEnable = null,
    onDurationPause = null,
    onDurationDetailsClick = null,
    onDurationAutoContinueChange = null,
    onGameAction = null,
    onGameSettings = null,
    onGameStateChange = null,
    onGameProgressChange = null
  } = options;
  let games = Array.isArray(options.games) ? options.games : VoicePanelGameListDefaults;
  const cards = new Map();
  const {
    hours = '7,230',
    minutes = '30',
    seconds = '04'
  } = duration;

  const popover = document.createElement('div');
  popover.className = 'nn-game-accelerator-popover';
  popover.id = `nn-game-accelerator-popover-${++VoicePanelGamePopoverSequence}`;
  popover.setAttribute('role', 'dialog');
  popover.setAttribute('aria-label', '游戏加速列表');

  const header = document.createElement('div');
  header.className = 'nn-game-accelerator-popover__header';

  const durationBox = document.createElement('div');
  durationBox.className = 'nn-game-accelerator-popover__duration';

  const durationTitle = document.createElement('span');
  durationTitle.className = 'nn-game-accelerator-popover__duration-title';
  durationTitle.appendChild(createVoicePanelInlineText('', '雷神加速时长'));
  const refreshIcon = document.createElement('i');
  refreshIcon.className = 'nnicon nicon-a-refresh-fillshuaxin-xianxing nn-game-accelerator-popover__duration-refresh';
  refreshIcon.setAttribute('role', 'button');
  refreshIcon.setAttribute('tabindex', '0');
  refreshIcon.setAttribute('aria-label', '刷新加速时长');
  refreshIcon.addEventListener('animationend', function() {
    refreshIcon.classList.remove('is-rotating');
  });
  refreshIcon.addEventListener('click', function(event) {
    refreshIcon.classList.remove('is-rotating');
    void refreshIcon.offsetWidth;
    refreshIcon.classList.add('is-rotating');
    if (typeof onDurationRefresh === 'function') {
      onDurationRefresh({ event });
    }
  });
  refreshIcon.addEventListener('keydown', function(event) {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    refreshIcon.click();
  });
  durationTitle.appendChild(refreshIcon);
  durationBox.appendChild(durationTitle);

  const durationValue = document.createElement('span');
  durationValue.className = 'nn-game-accelerator-popover__duration-value';
  function appendDurationSegment(value, unit) {
    const segment = document.createElement('span');
    segment.className = 'nn-game-accelerator-popover__duration-segment';
    segment.appendChild(createVoicePanelInlineText('nn-game-accelerator-popover__duration-number', value));
    segment.appendChild(createVoicePanelInlineText('nn-game-accelerator-popover__duration-unit', unit));
    durationValue.appendChild(segment);
  }
  appendDurationSegment(hours, '时');
  appendDurationSegment(minutes, '分');
  appendDurationSegment(seconds, '秒');
  durationBox.appendChild(durationValue);
  header.appendChild(durationBox);

  function setHeaderDurationSeconds(totalSeconds) {
    const safeSeconds = Math.max(0, Math.floor(Number(totalSeconds) || 0));
    const parts = durationValue.querySelectorAll('.nn-game-accelerator-popover__duration-number');
    if (parts.length < 3) return;
    parts[0].textContent = Math.floor(safeSeconds / 3600).toLocaleString('en-US');
    parts[1].textContent = String(Math.floor((safeSeconds % 3600) / 60)).padStart(2, '0');
    parts[2].textContent = String(safeSeconds % 60).padStart(2, '0');
  }

  let durationButtonState = 'idle';
  let durationProgressFrame = null;
  let durationDetailsView = null;
  const durationProgressTime = 1600;

  function setDurationButtonAppearance(variant, level) {
    if (typeof enableButton.setButtonAppearance === 'function') {
      enableButton.setButtonAppearance({ variant, level });
    }
  }

  function setDurationButtonText(text) {
    if (typeof enableButton.setButtonText === 'function') {
      enableButton.setButtonText(text);
      return;
    }
    const textElement = enableButton.querySelector('.nn-btn-text');
    if (textElement) textElement.textContent = text;
  }

  function setActiveDurationStatus(text) {
    if (!durationDetailsView) return;
    const statusElements = durationDetailsView.querySelectorAll(
      '.nn-game-accelerator-popover__duration-details-status'
    );
    const activeStatus = statusElements[1];
    if (activeStatus) activeStatus.textContent = text;
  }

  function finishDurationEnable() {
    durationProgressFrame = null;
    durationButtonState = 'active';
    enableButton.disabled = false;
    setDurationButtonText('暂停时长');
    setDurationButtonAppearance('warning', 'primary');
    if (durationDetailsView && typeof durationDetailsView.setDurationActive === 'function') {
      durationDetailsView.setDurationActive(true);
    }
    setActiveDurationStatus(durationDetails.activeRunningStatus || '计时中');
    if (typeof onDurationEnable === 'function') {
      onDurationEnable({ event: null, phase: 'complete', state: 'active' });
    }
  }

  function startDurationEnable(event) {
    durationButtonState = 'loading';
    setDurationButtonAppearance('system', 'secondary');
    enableButton.disabled = true;
    setDurationButtonText('开启中...');
    if (typeof onDurationEnable === 'function') {
      onDurationEnable({ event, phase: 'start', state: 'loading' });
    }
    const startTime = window.performance.now();
    function renderDurationProgress(currentTime) {
      if (!popover.isConnected) {
        durationProgressFrame = null;
        return;
      }
      const progress = Math.min(100, ((currentTime - startTime) / durationProgressTime) * 100);
      if (progress < 100) {
        durationProgressFrame = window.requestAnimationFrame(renderDurationProgress);
        return;
      }
      finishDurationEnable();
    }
    durationProgressFrame = window.requestAnimationFrame(renderDurationProgress);
  }

  function pauseDuration(event) {
    if (durationProgressFrame !== null) {
      window.cancelAnimationFrame(durationProgressFrame);
      durationProgressFrame = null;
    }
    durationButtonState = 'idle';
    enableButton.disabled = false;
    setDurationButtonText('开启时长');
    setDurationButtonAppearance('system', 'secondary');
    if (durationDetailsView && typeof durationDetailsView.setDurationActive === 'function') {
      durationDetailsView.setDurationActive(false);
    }
    setActiveDurationStatus(durationDetails.activePausedStatus || '暂停中');
    if (typeof onDurationPause === 'function') {
      onDurationPause({ event, phase: 'pause', state: 'idle' });
    }
  }

  function handleDurationButtonClick(event) {
    if (durationButtonState === 'active') {
      pauseDuration(event);
      return;
    }
    if (durationButtonState === 'idle') {
      startDurationEnable(event);
    }
  }

  const enableButton = createVoicePanelBasicButton({
    text: '开启时长',
    variant: 'system',
    level: 'secondary',
    size: 'large',
    onClick: handleDurationButtonClick
  });
  enableButton.classList.add('nn-game-accelerator-popover__duration-enable');
  header.appendChild(enableButton);

  const durationDetailsPanel = document.createElement('div');
  durationDetailsPanel.className = 'nn-game-accelerator-popover__duration-details-panel';
  const resolvedDurationDetails = Object.assign({
    pausedValue: `${hours} 时 ${minutes} 分 ${seconds} 秒`
  }, durationDetails);
  durationDetailsView = createVoicePanelDurationDetails({
    durationDetails: resolvedDurationDetails,
    onDurationDetailsClick,
    onDurationAutoContinueChange,
    onDurationTimeChange: function(payload) {
      setHeaderDurationSeconds(payload.totalRemainingSeconds);
    }
  });
  durationDetailsPanel.appendChild(durationDetailsView);
  header.appendChild(durationDetailsPanel);
  popover.appendChild(header);

  popover.appendChild(createVoicePanelInlineText('nn-game-accelerator-popover__section-title', '最近'));

  const list = document.createElement('div');
  list.className = 'nn-game-accelerator-popover__list';
  list.setAttribute('role', 'list');
  popover.appendChild(list);

  function renderGames() {
    list.textContent = '';
    cards.clear();
    games.forEach(function(game) {
      const card = createVoicePanelGameLaunchCard({
        gameName: game.gameName,
        gameIcon: game.gameIcon,
        state: game.state,
        progress: game.progress,
        boostText: game.boostText,
        boostFlag: game.boostFlag,
        playingStartedAt: game.playingStartedAt,
        totalTime: game.totalTime,
        sessionText: game.sessionText,
        launchDropdown,
        onAction: function(payload) {
          if (typeof onGameAction === 'function') {
            return onGameAction(Object.assign({ game: game }, payload));
          }
        },
        onStateChange: function(payload) {
          if (typeof onGameStateChange === 'function') {
            onGameStateChange(Object.assign({ game: game }, payload));
          }
        },
        onProgressChange: function(payload) {
          if (typeof onGameProgressChange === 'function') {
            onGameProgressChange(Object.assign({ game: game }, payload));
          }
        },
        onSettings: function(payload) {
          if (typeof onGameSettings === 'function') {
            onGameSettings(Object.assign({ game: game }, payload));
          }
        }
      });
      cards.set(game.gameName, card);
      list.appendChild(card);
    });
  }

  renderGames();

  return {
    element: popover,
    updateGames: function(nextGames) {
      if (Array.isArray(nextGames)) {
        games = nextGames;
        renderGames();
      }
    },
    syncGameState: function(gameName, state, progress) {
      const card = cards.get(gameName);
      if (card && typeof card.syncVoicePanelGameCardState === 'function') {
        card.syncVoicePanelGameCardState(state, progress);
      }
    },
    updateDuration: function(nextDuration) {
      const parts = durationValue.querySelectorAll('.nn-game-accelerator-popover__duration-number');
      if (!parts || parts.length < 3) return;
      const next = nextDuration || {};
      parts[0].textContent = next.hours === undefined ? parts[0].textContent : next.hours;
      parts[1].textContent = next.minutes === undefined ? parts[1].textContent : next.minutes;
      parts[2].textContent = next.seconds === undefined ? parts[2].textContent : next.seconds;
    },
    destroy: function() {
      if (durationProgressFrame !== null) {
        window.cancelAnimationFrame(durationProgressFrame);
        durationProgressFrame = null;
      }
      if (durationDetailsView && typeof durationDetailsView.destroyDurationDetails === 'function') {
        durationDetailsView.destroyDurationDetails();
      }
      cards.forEach(function(card) {
        if (card && typeof card.destroyVoicePanelGameCard === 'function') {
          card.destroyVoicePanelGameCard();
        }
      });
    }
  };
}

function createVoicePanelControl(iconClass, label) {
  const button = document.createElement('button');
  button.type = 'button';
  const modifierMap = {
    '共享屏幕': 'nn-voice-panel__control--screen',
    '开启BGM': 'nn-voice-panel__control--bgm'
  };
  const unavailableTooltipMap = {
    '共享屏幕': '进入语音房开始共享屏幕',
    '开启BGM': '进入语音房开启BGM'
  };
  button.className = ['nn-voice-panel__control', modifierMap[label] || ''].filter(Boolean).join(' ');
  button.setAttribute('aria-label', label);
  if (unavailableTooltipMap[label]) {
    button.setAttribute('aria-disabled', 'false');
    button.innerHTML = `<i class="nnicon ${iconClass}"></i><span class="nn-voice-panel__control-tooltip"><span class="nn-voice-panel__control-tooltip-default">${label}</span><span class="nn-voice-panel__control-tooltip-unavailable">${unavailableTooltipMap[label]}</span></span>`;
  } else {
    button.innerHTML = `<i class="nnicon ${iconClass}"></i><span class="nn-voice-panel__control-tooltip">${label}</span>`;
  }
  return button;
}

function createVoicePanelInlineText(className, text) {
  const el = document.createElement('span');
  el.className = className;
  el.textContent = text;
  return el;
}

const VoicePanelOnlineStatusOptions = [
  { value: 'online', label: '在线', badgeVariant: 'on' },
  { value: 'dnd', label: '忙碌', badgeVariant: 'dnd' },
  { value: 'invisible', label: '隐身', badgeVariant: 'inv' }
];

function createVoicePanelStatusBadge(variant, size) {
  const badgeEl = typeof window !== 'undefined' && typeof window.createBadge === 'function'
    ? window.createBadge({ dot: true, variant, size })
    : document.createElement('span');
  if (!badgeEl.classList.contains('nn-badge')) {
    badgeEl.classList.add('nn-badge', `nn-badge-dot-${variant}`);
  }
  return badgeEl;
}

function createVoicePanelStatusIconHtml(variant) {
  const badge = createVoicePanelStatusBadge(variant, 14);
  badge.classList.add('nn-voice-panel__status-menu-dot');
  return badge.outerHTML;
}

function createVoicePanelOnlineStatusMenu(options = {}) {
  if (typeof window !== 'undefined' && typeof window.injectDropdownMenuStyles === 'function') {
    window.injectDropdownMenuStyles();
  }
  const {
    currentValue = 'online',
    onChange = null
  } = options;
  const panel = document.createElement('div');
  panel.className = 'nn-dropdown-panel nn-voice-panel__status-menu';
  panel.setAttribute('role', 'menu');

  const panelContent = document.createElement('div');
  panelContent.className = 'nn-dropdown-panel-content';

  const list = document.createElement('div');
  list.className = 'nn-dropdown-list';

  VoicePanelOnlineStatusOptions.forEach(function(item) {
    const itemEl = document.createElement('div');
    itemEl.className = [
      'nn-dropdown-item',
      item.value === currentValue ? 'is-selected' : ''
    ].filter(Boolean).join(' ');
    itemEl.dataset.value = item.value;
    itemEl.setAttribute('role', 'button');
    itemEl.setAttribute('tabindex', '0');

    const leading = document.createElement('span');
    leading.className = 'nn-dropdown-item-leading';
    leading.innerHTML = createVoicePanelStatusIconHtml(item.badgeVariant);
    itemEl.appendChild(leading);

    const copy = document.createElement('span');
    copy.className = 'nn-dropdown-item-copy';
    const title = document.createElement('span');
    title.className = 'nn-dropdown-item-title';
    title.textContent = item.label;
    copy.appendChild(title);
    itemEl.appendChild(copy);

    function handleSelect(event) {
      if (event) event.stopPropagation();
      if (typeof onChange === 'function') onChange(item);
    }

    itemEl.addEventListener('click', handleSelect);
    itemEl.addEventListener('keydown', function(event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      handleSelect(event);
    });
    list.appendChild(itemEl);
  });

  panelContent.appendChild(list);
  panel.appendChild(panelContent);
  return panel;
}

function createVoicePanelVolumeControl(options = {}) {
  injectVoicePanelStyles();

  const {
    type = 'mic',
    value = 50,
    showPopover = true,
    showTooltip = true
  } = options;
  const isMic = type === 'mic';
  const root = document.createElement('span');
  root.className = ['nn-voice-panel__volume', isMic ? 'is-mic' : 'is-sound'].join(' ');
  let muted = false;
  let currentValue = value;
  let isAnimatingVolume = false;
  let isAnimatingVolumeToMuted = null;
  let volumeTransitionTimer = null;
  let volumeAnimations = {};
  let volumeCompleteHandler = null;
  let suppressVolumeHover = false;

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'nn-voice-panel__volume-button';
  const iconEl = document.createElement('i');
  iconEl.className = 'nnicon';
  button.appendChild(iconEl);
  const volumeAnimationEls = {};
  const volumeAnimationConfig = isMic
    ? [
      ['open', 'nn-voice-panel__volume-animation--mic', '../image/Animation/mic/mic.json'],
      ['openHover', 'nn-voice-panel__volume-animation--mic-open-hover', '../image/Animation/mic/mic-open-hover.json'],
      ['closeClick', 'nn-voice-panel__volume-animation--mic-close-click', '../image/Animation/mic/mic-close-click.json'],
      ['close', 'nn-voice-panel__volume-animation--mic-close', '../image/Animation/mic/mic-close.json'],
      ['closeHover', 'nn-voice-panel__volume-animation--mic-close-hover', '../image/Animation/mic/mic-close-hover.json'],
      ['openClick', 'nn-voice-panel__volume-animation--mic-open-click', '../image/Animation/mic/mic-open-click2.json']
    ]
    : [
      ['phone', 'nn-voice-panel__volume-animation--phone', '../image/Animation/mic/phone.json'],
      ['phoneOpenHover', 'nn-voice-panel__volume-animation--phone-open-hover', '../image/Animation/mic/phone-open-hover.json'],
      ['phoneCloseClick', 'nn-voice-panel__volume-animation--phone-close-click', '../image/Animation/mic/phone-close-click.json'],
      ['phoneClose', 'nn-voice-panel__volume-animation--phone-close', '../image/Animation/mic/phone-close.json'],
      ['phoneCloseHover', 'nn-voice-panel__volume-animation--phone-close-hover', '../image/Animation/mic/phone-close-hover1.json'],
      ['phoneOpenClick', 'nn-voice-panel__volume-animation--phone-open-click', '../image/Animation/mic/phone-open-click.json']
    ];
  volumeAnimationConfig.forEach(function(item) {
    const [key, className, src] = item;
    const animationEl = createVoicePanelVolumeAnimation(
      className,
      src,
      'nn-voice-panel__volume-animation-mark'
    );
    volumeAnimationEls[key] = animationEl;
    button.appendChild(animationEl);
  });
  root.appendChild(button);

  const popover = document.createElement('span');
  popover.className = 'nn-voice-panel__volume-popover';

  const tooltip = document.createElement('span');
  tooltip.className = 'nn-voice-panel__volume-tooltip';
  if (showTooltip) {
    root.appendChild(tooltip);
  }

  let slider = null;
  if (showPopover && typeof window !== 'undefined' && typeof window.createSlider === 'function') {
    slider = window.createSlider({
      value: currentValue,
      size: 'small',
      direction: 'vertical',
      tooltip: 'tooltip',
      length: 86,
      className: 'nn-voice-panel__volume-slider',
      onChange: function(next) {
        currentValue = next.percentage;
        if (currentValue > 0 && muted) {
          muted = false;
          isAnimatingVolume = false;
          isAnimatingVolumeToMuted = null;
          if (volumeTransitionTimer) {
            window.clearTimeout(volumeTransitionTimer);
            volumeTransitionTimer = null;
          }
          removeVolumeCompleteHandler();
          syncState();
        }
      }
    });
    popover.appendChild(slider);
  }
  if (showPopover) {
    root.appendChild(popover);
  }

  {
    let lottieInitAttempts = 0;
    function initVolumeAnimations() {
      volumeAnimations = {};
      Object.keys(volumeAnimationEls).forEach(function(key) {
        volumeAnimations[key] = createVoicePanelLottieAnimation(volumeAnimationEls[key], {
          loop: false,
          autoplay: false
        });
      });
      const allReady = Object.keys(volumeAnimationEls).every(function(key) {
        return Boolean(volumeAnimations[key]);
      });
      if (!allReady && lottieInitAttempts < 10) {
        lottieInitAttempts += 1;
        window.setTimeout(initVolumeAnimations, 100);
        return;
      }
      Object.keys(volumeAnimations).forEach(function(key) {
        if (volumeAnimations[key]) volumeAnimations[key].goToAndStop(0, true);
      });
      if (allReady) root.classList.add('is-lottie-ready');
    }
    requestAnimationFrame(initVolumeAnimations);
    root.addEventListener('mouseenter', function() {
      if (suppressVolumeHover) return;
      root.classList.add('is-hovering');
      root.classList.remove('is-hover-suppressed');
      if (isAnimatingVolume) return;
      playVoicePanelLottieOnce(getVolumeAnimation(muted ? 'closeHover' : 'openHover'));
    });
    root.addEventListener('mouseleave', function() {
      suppressVolumeHover = false;
      root.classList.remove('is-hovering');
      root.classList.remove('is-hover-suppressed');
      const hoverAnimation = getVolumeAnimation(muted ? 'closeHover' : 'openHover');
      if (hoverAnimation) hoverAnimation.goToAndStop(0, true);
    });
  }

  function getVolumeAnimation(name) {
    if (isMic) return volumeAnimations[name];
    const phoneMap = {
      open: 'phone',
      openHover: 'phoneOpenHover',
      closeClick: 'phoneCloseClick',
      close: 'phoneClose',
      closeHover: 'phoneCloseHover',
      openClick: 'phoneOpenClick'
    };
    return volumeAnimations[phoneMap[name]];
  }

  function syncState() {
    root.classList.toggle('is-muted', muted);
    root.classList.toggle('is-state-open', !muted);
    root.classList.toggle('is-state-closed', muted);
    root.classList.toggle('is-animating-close', isAnimatingVolume && isAnimatingVolumeToMuted === true);
    root.classList.toggle('is-animating-open', isAnimatingVolume && isAnimatingVolumeToMuted === false);
    const icon = isMic
      ? muted ? 'nicon-a-micoff-lineguanmai-xianxing' : 'nicon-a-mic-linekaimai-xianxing'
      : muted ? 'nicon-a-headphoneoff-lineguanshengyin-xianxing' : 'nicon-a-headphone-linekaishengyin-xianxing';
    const label = isMic
      ? muted ? '取消静音' : '静音'
      : muted ? '取消耳机静音' : '耳机静音';
    button.setAttribute('aria-label', label);
    button.removeAttribute('title');
    iconEl.className = `nnicon ${icon}`;
    if (showTooltip) {
      tooltip.textContent = label;
    }
    if (slider && slider._render) {
      slider._render(muted ? 0 : currentValue);
    }
  }

  function removeVolumeCompleteHandler() {
    if (!volumeCompleteHandler) return;
    Object.keys(volumeAnimations).forEach(function(key) {
      if (volumeAnimations[key]) volumeAnimations[key].removeEventListener('complete', volumeCompleteHandler);
    });
    volumeCompleteHandler = null;
  }

  function stopVolumeAnimations() {
    Object.keys(volumeAnimations).forEach(function(key) {
      if (volumeAnimations[key]) volumeAnimations[key].stop();
    });
  }

  function playVolumeTransitionAnimation(animation, nextMuted) {
    if (volumeTransitionTimer) {
      window.clearTimeout(volumeTransitionTimer);
      volumeTransitionTimer = null;
    }
    stopVolumeAnimations();
    removeVolumeCompleteHandler();
    suppressVolumeHover = true;
    root.classList.add('is-hover-suppressed');
    root.classList.remove('is-hovering');
    muted = nextMuted;
    isAnimatingVolume = true;
    isAnimatingVolumeToMuted = nextMuted;
    syncState();
    volumeCompleteHandler = function() {
      isAnimatingVolume = false;
      isAnimatingVolumeToMuted = null;
      volumeTransitionTimer = null;
      removeVolumeCompleteHandler();
      syncState();
    };
    if (animation) {
      animation.addEventListener('complete', volumeCompleteHandler);
      animation.goToAndPlay(0, true);
      return;
    }
    volumeTransitionTimer = window.setTimeout(function() {
      isAnimatingVolume = false;
      isAnimatingVolumeToMuted = null;
      volumeTransitionTimer = null;
      syncState();
    }, 800);
  }

  button.addEventListener('click', function(event) {
    event.stopPropagation();
    if (isAnimatingVolume) return;
    playVolumeTransitionAnimation(getVolumeAnimation(muted ? 'openClick' : 'closeClick'), !muted);
  });

  syncState();
  return root;
}

function formatVoicePanelShortcutKey(event) {
  const keyMap = {
    ' ': 'SPACE',
    Spacebar: 'SPACE',
    Escape: 'ESC',
    Esc: 'ESC',
    Control: 'CONTROL',
    Meta: 'COMMAND',
    Alt: 'ALT',
    Shift: 'SHIFT',
    ArrowUp: 'ARROW UP',
    ArrowDown: 'ARROW DOWN',
    ArrowLeft: 'ARROW LEFT',
    ArrowRight: 'ARROW RIGHT'
  };
  if (keyMap[event.key]) return keyMap[event.key];
  if (event.key && event.key.length === 1) return event.key.toUpperCase();
  return String(event.key || '').replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase();
}

function createVoicePanelWave(options = {}) {
  const {
    width = 112,
    height = 24,
    barCount = 42,
    barWidth = 1,
    gap = 3,
    waveColor = '',
    level = 18,
    fillWidth = false
  } = options;
  const wrap = document.createElement('span');
  wrap.className = 'nn-voice-panel__wave';
  wrap.style.setProperty('--voice-panel-wave-width', `${width}px`);
  if (waveColor) {
    wrap.style.setProperty('--voice-panel-wave-color', waveColor);
  }

  const canvas = document.createElement('canvas');
  canvas.className = 'nn-voice-panel__wave-canvas';
  wrap.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const randomSeed = new Array(barCount).fill(0).map(function() {
    return Math.random();
  });
  let drawWidth = width;
  let drawHeight = height;
  let waveMuted = false;

  function ensureRandomSeedCount(count) {
    while (randomSeed.length < count) {
      randomSeed.push(Math.random());
    }
  }

  function getWaveRgb() {
    const color = getComputedStyle(wrap).color || 'rgb(0, 0, 0)';
    const match = color.match(/rgba?\(([^)]+)\)/);
    if (!match) return '0,0,0';
    return match[1]
      .split(/[,\s/]+/)
      .slice(0, 3)
      .map(function(value) {
        return Math.round(Number.parseFloat(value) || 0);
      })
      .join(',');
  }

  function syncCanvasSize() {
    const rect = wrap.getBoundingClientRect();
    const nextWidth = Math.max(1, Math.round(rect.width || width));
    const nextHeight = Math.max(1, Math.round(rect.height || height));
    const ratio = window.devicePixelRatio || 1;
    const pixelWidth = Math.round(nextWidth * ratio);
    const pixelHeight = Math.round(nextHeight * ratio);
    drawWidth = nextWidth;
    drawHeight = nextHeight;
    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
      canvas.style.width = `${nextWidth}px`;
      canvas.style.height = `${nextHeight}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }
  }

  function draw() {
    syncCanvasSize();
    ctx.clearRect(0, 0, drawWidth, drawHeight);
    const centerY = drawHeight / 2;
    const resolvedBarCount = fillWidth
      ? Math.max(barCount, Math.ceil((drawWidth + gap) / (barWidth + gap)))
      : barCount;
    ensureRandomSeedCount(resolvedBarCount);
    const totalWidth = fillWidth
      ? resolvedBarCount * barWidth + Math.max(0, resolvedBarCount - 1) * gap
      : resolvedBarCount * (barWidth + gap);
    const startX = (drawWidth - totalWidth) / 2;
    const time = Date.now() * 0.006;
    const waveRgb = getWaveRgb();
    const isWaveMuted = waveMuted || Boolean(wrap.closest('.nn-voice-panel__speaker-card.is-speaker-cycle-resting'));

    for (let i = 0; i < resolvedBarCount; i += 1) {
      const x = startX + i * (barWidth + gap);
      const dist = Math.abs(i - resolvedBarCount / 2) / (resolvedBarCount / 2);
      const weight = Math.pow(1 - dist, 2.2);
      const alpha = Math.pow(1 - dist, 1.8);
      const noise =
        Math.sin(time + i * 0.5 + randomSeed[i] * 10) * 0.5 +
        Math.sin(time * 1.5 + i * 0.2) * 0.5;
      const activeBarHeight = level * weight * (0.6 + noise * 0.4);
      const barHeight = isWaveMuted
        ? 2
        : Math.min(drawHeight, Math.max(2, activeBarHeight));
      const y = centerY - barHeight / 2;
      ctx.fillStyle = `rgba(${waveRgb},${alpha})`;
      ctx.fillRect(x, y, barWidth, barHeight);
    }

    requestAnimationFrame(draw);
  }

  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(syncCanvasSize);
    observer.observe(wrap);
  }

  syncCanvasSize();
  requestAnimationFrame(draw);
  wrap.setVoicePanelWavePaused = function(paused) {
    waveMuted = Boolean(paused);
  };
  return wrap;
}

function createVoicePanelPushControl(options = {}) {
  const {
    type = 'push',
    key = 'R',
    tooltipText = '按键说话',
    sensingLabel = '',
    showTooltip = true,
    toggleOnClick = false,
    suffixIcon = 'nicon-a-Arrow-down-linejiantouxia-xianxing',
    interactive = true
  } = options;
  let currentType = type === 'voice' ? 'voice' : 'push';
  let currentKey = key;
  let isExpanded = false;
  let isShortcutPressed = false;
  let shortcutPressedAt = 0;
  let shortcutReleaseTimer = null;
  let collapsedObserver = null;
  let prefixEl = null;

  const root = document.createElement('button');
  root.type = 'button';
  root.className = 'nn-voice-panel__push-control';
  root.setAttribute('aria-label', tooltipText);

  let keyEl = null;
  const content = document.createElement('span');
  content.className = 'nn-voice-panel__push-content';
  root.appendChild(content);

  const arrow = document.createElement('span');
  arrow.className = 'nn-voice-panel__push-arrow';
  arrow.innerHTML = `<i class="nnicon ${suffixIcon}"></i>`;
  root.appendChild(arrow);

  const tooltip = document.createElement('span');
  tooltip.className = 'nn-voice-panel__push-tooltip';
  tooltip.textContent = tooltipText;
  if (showTooltip) {
    root.appendChild(tooltip);
  }

  function getPushTooltipText() {
    return currentKey ? `按 ${currentKey} 键说话` : tooltipText;
  }

  function isCollapsed() {
    const panel = root.closest('.nn-voice-panel');
    return Boolean(panel && panel.classList.contains('is-voice-room-hidden'));
  }

  function getCollapsedPushPrefix() {
    const keyText = String(currentKey || '');
    if (keyText.length <= 1) return '按键说话';
    return '按键';
  }

  function syncCollapsedClasses(collapsed) {
    const keyText = String(currentKey || '');
    root.classList.toggle('is-collapsed', collapsed);
    root.classList.toggle('is-key-long', collapsed && currentType === 'push' && keyText.length > 8);
    root.classList.remove('is-prefix-hidden');
    root.classList.remove('is-key-overflow');
  }

  function createKeyNode() {
    const keyWrap = document.createElement('span');
    keyWrap.className = 'nn-voice-panel__push-key';
    keyWrap.classList.toggle('is-pressed', isShortcutPressed);
    const keyText = document.createElement('span');
    keyText.className = 'nn-voice-panel__push-key-text';
    keyText.textContent = currentKey || '未设置';
    keyWrap.appendChild(keyText);
    keyEl = keyWrap;
    return keyWrap;
  }

  function createSensingIconNode() {
    const label = document.createElement('span');
    label.className = 'nn-voice-panel__push-label';
    label.textContent = sensingLabel || '语音感应';
    return label;
  }

  function renderContent() {
    const collapsed = isCollapsed();
    content.innerHTML = '';
    keyEl = null;
    prefixEl = null;
    syncCollapsedClasses(collapsed);
    if (currentType === 'push') {
      const prefixText = collapsed ? getCollapsedPushPrefix() : '按键';
      if (prefixText) {
        prefixEl = createVoicePanelInlineText('nn-voice-panel__push-prefix', prefixText);
        content.appendChild(prefixEl);
      }
      content.appendChild(createKeyNode());
      if (showTooltip) {
        tooltip.textContent = getPushTooltipText();
      }
      root.setAttribute('aria-label', getPushTooltipText());
      requestAnimationFrame(syncCollapsedPrefixFit);
    } else {
      content.appendChild(createSensingIconNode());
      if (showTooltip) {
        tooltip.textContent = '说话感应';
      }
      root.setAttribute('aria-label', '说话感应');
    }
  }

  function syncCollapsedPrefixFit() {
    if (!isCollapsed() || currentType !== 'push' || !prefixEl) return;
    root.classList.remove('is-prefix-hidden');
    root.classList.remove('is-key-overflow');

    const basePrefix = getCollapsedPushPrefix();
    if (basePrefix === '按键说话') {
      prefixEl.textContent = '按键说话';
      if (!doesCollapsedPushFit() && content.clientWidth > 0) {
        prefixEl.textContent = '按键';
      }
    }

    if (!doesCollapsedPushFit() && content.clientWidth > 0) {
      root.classList.add('is-prefix-hidden');
    }

    if (!doesCollapsedPushFit() && content.clientWidth > 0) {
      root.classList.add('is-key-overflow');
    }
  }

  function doesCollapsedPushFit() {
    if (!keyEl || content.clientWidth <= 0) return true;
    const contentStyle = window.getComputedStyle(content);
    const gap = parseFloat(contentStyle.columnGap || contentStyle.gap || '0') || 0;
    const prefixWidth = prefixEl && !root.classList.contains('is-prefix-hidden') ? prefixEl.scrollWidth : 0;
    const keyWidth = keyEl.scrollWidth;
    return prefixWidth + (prefixWidth > 0 ? gap : 0) + keyWidth <= content.clientWidth;
  }

  function watchCollapsedState() {
    if (collapsedObserver || typeof MutationObserver === 'undefined') return;
    requestAnimationFrame(function() {
      const panel = root.closest('.nn-voice-panel');
      if (!panel || collapsedObserver) return;
      collapsedObserver = new MutationObserver(function(mutations) {
        const shouldRender = mutations.some(function(mutation) {
          return mutation.attributeName === 'class';
        });
        if (shouldRender) renderContent();
      });
      collapsedObserver.observe(panel, { attributes: true, attributeFilter: ['class'] });
      renderContent();
    });
  }

  const settingsPopover = document.createElement('div');
  settingsPopover.className = 'nn-voice-panel__push-settings-popover';
  settingsPopover.addEventListener('click', function(event) {
    event.stopPropagation();
  });

  function ensureSettingsPopoverMounted() {
    if (settingsPopover.parentNode) return;
    document.body.appendChild(settingsPopover);
  }

  function updateSettingsPopoverPosition() {
    if (!isExpanded || !settingsPopover.classList.contains('is-visible')) return;
    const controlRect = root.getBoundingClientRect();
    const popoverRect = settingsPopover.getBoundingClientRect();
    const viewportPadding = 8;
    const gap = 8;
    const maxLeft = Math.max(viewportPadding, window.innerWidth - popoverRect.width - viewportPadding);
    const left = Math.max(viewportPadding, Math.min(controlRect.left, maxLeft));
    const top = Math.max(viewportPadding, controlRect.top - popoverRect.height - gap);
    settingsPopover.style.left = `${Math.round(left)}px`;
    settingsPopover.style.top = `${Math.round(top)}px`;
  }

  function mountSettingsPopover() {
    settingsPopover.innerHTML = '';
    if (typeof window !== 'undefined' && typeof window.createToastDisplayVoiceSettingsDialog === 'function') {
      const dialog = window.createToastDisplayVoiceSettingsDialog({
        voiceMode: currentType === 'push' ? 'pushToTalk' : 'sensing',
        pushToTalkKey: currentKey,
        onVoiceModeChange: function(nextMode) {
          currentType = nextMode === 'pushToTalk' ? 'push' : 'voice';
          syncShortcutPressed(false);
          renderContent();
        },
        onPushToTalkKeyChange: function(nextKey) {
          currentKey = nextKey;
          syncShortcutPressed(false);
          if (currentType === 'push') {
            renderContent();
          }
        }
      });
      settingsPopover.appendChild(dialog);
    }
  }

  function syncExpanded() {
    root.classList.toggle('is-expanded', isExpanded);
    root.setAttribute('aria-expanded', String(isExpanded));
    arrow.innerHTML = `<i class="nnicon ${toggleOnClick ? suffixIcon : isExpanded ? 'nicon-a-Arrowup-linejiantoushang-xianxing' : 'nicon-a-Arrow-down-linejiantouxia-xianxing'}"></i>`;
    if (isExpanded) {
      ensureSettingsPopoverMounted();
      mountSettingsPopover();
      settingsPopover.classList.add('is-visible');
      requestAnimationFrame(updateSettingsPopoverPosition);
    } else {
      settingsPopover.classList.remove('is-visible');
    }
  }

  function syncShortcutPressed(nextPressed) {
    if (isShortcutPressed === nextPressed) return;
    if (shortcutReleaseTimer) {
      window.clearTimeout(shortcutReleaseTimer);
      shortcutReleaseTimer = null;
    }
    if (nextPressed) {
      shortcutPressedAt = Date.now();
    }
    isShortcutPressed = nextPressed;
    if (keyEl) {
      keyEl.classList.toggle('is-pressed', isShortcutPressed);
    }
    root.setAttribute('aria-pressed', isShortcutPressed ? 'true' : 'false');
  }

  function releaseShortcutPressed() {
    const elapsed = Date.now() - shortcutPressedAt;
    const wait = Math.max(0, 140 - elapsed);
    if (shortcutReleaseTimer) {
      window.clearTimeout(shortcutReleaseTimer);
    }
    shortcutReleaseTimer = window.setTimeout(function() {
      shortcutReleaseTimer = null;
      syncShortcutPressed(false);
    }, wait);
  }

  function isMatchingShortcut(event) {
    return currentType === 'push' && Boolean(currentKey) && formatVoicePanelShortcutKey(event) === currentKey;
  }

  function toggleVoiceMode() {
    const panel = toggleOnClick ? root.closest('.nn-voice-panel') : null;
    animateVoicePanelTaskbarWidth(panel, function() {
      currentType = currentType === 'push' ? 'voice' : 'push';
      syncShortcutPressed(false);
      renderContent();
    });
  }

  if (interactive) {
    if (!toggleOnClick) {
      root.setAttribute('aria-haspopup', 'dialog');
    }
    root.addEventListener('mousedown', function() {
      if (currentType !== 'push') return;
      syncShortcutPressed(true);
    });
    root.addEventListener('mouseup', releaseShortcutPressed);
    root.addEventListener('mouseleave', releaseShortcutPressed);
    root.addEventListener('click', function(event) {
      event.stopPropagation();
      if (toggleOnClick) {
        toggleVoiceMode();
        return;
      }
      isExpanded = !isExpanded;
      syncExpanded();
    });
    document.addEventListener('click', function() {
      if (!isExpanded) return;
      isExpanded = false;
      syncExpanded();
    });
    document.addEventListener('keydown', function(event) {
      if (!isMatchingShortcut(event)) return;
      event.preventDefault();
      syncShortcutPressed(true);
    });
    document.addEventListener('keyup', function(event) {
      if (!isMatchingShortcut(event)) return;
      event.preventDefault();
      releaseShortcutPressed();
    });
    window.addEventListener('resize', updateSettingsPopoverPosition);
    window.addEventListener('scroll', updateSettingsPopoverPosition, true);
  }

  root.setAttribute('aria-pressed', 'false');
  renderContent();
  syncExpanded();
  watchCollapsedState();
  return root;
}

function animateVoicePanelTaskbarWidth(root, mutate) {
  if (!root || !root.classList || !root.classList.contains('is-taskbar-variant')) {
    if (typeof mutate === 'function') mutate();
    return;
  }
  const startWidth = root.getBoundingClientRect().width;
  root.classList.add('is-width-animating');
  root.style.width = `${Math.round(startWidth)}px`;
  if (typeof mutate === 'function') mutate();
  root.style.width = 'auto';
  const targetWidth = root.getBoundingClientRect().width;
  root.style.width = `${Math.round(startWidth)}px`;
  void root.offsetWidth;
  requestAnimationFrame(function() {
    root.style.width = `${Math.round(targetWidth)}px`;
    window.setTimeout(function() {
      root.classList.remove('is-width-animating');
      root.style.width = '';
    }, 240);
  });
}

function createVoicePanelTaskbar(options = {}) {
  const {
    gameLogo = '../image/Game logo/game1.webp',
    title = '绝地求生官方社区',
    roomName = '普莱士袋熊的房间',
    speakerAvatar = '../image/Avatar/头像441.png',
    showCommunityInfo = true,
    left = false,
    onLeave = null
  } = options;

  const root = document.createElement('div');
  root.className = [
    'nn-voice-panel',
    'is-taskbar-variant',
    showCommunityInfo ? '' : 'is-taskbar-no-community',
    left ? 'is-taskbar-left' : '',
    options.className || ''
  ].filter(Boolean).join(' ');
  root.dataset.variant = 'taskbar';

  const info = document.createElement('div');
  info.className = 'nn-voice-panel__taskbar-info';
  const game = document.createElement('img');
  game.className = 'nn-voice-panel__taskbar-game';
  game.src = gameLogo;
  game.alt = '';
  info.appendChild(game);

  const text = document.createElement('div');
  text.className = 'nn-voice-panel__taskbar-text';
  const titleEl = createVoicePanelInlineText('nn-voice-panel__taskbar-title', title);
  const roomEl = createVoicePanelInlineText('nn-voice-panel__taskbar-room', left ? '当前未进入房间' : roomName);
  text.appendChild(titleEl);
  text.appendChild(roomEl);
  info.appendChild(text);
  root.appendChild(info);

  const voice = document.createElement('div');
  voice.className = 'nn-voice-panel__taskbar-voice';
  const avatar = createVoicePanelAvatarElement({
    src: speakerAvatar,
    size: 28,
    className: 'nn-voice-panel__taskbar-avatar',
    text: roomName
  });
  voice.appendChild(avatar);
  const wave = createVoicePanelWave({
    width: 60,
    height: 24,
    barCount: 24,
    barWidth: 1,
    gap: 2,
    level: 18
  });
  wave.classList.add('nn-voice-panel__taskbar-wave');
  voice.appendChild(wave);
  const taskbarStatus = document.createElement('span');
  taskbarStatus.className = 'nn-voice-panel__taskbar-status';
  const taskbarStatusDot = createVoicePanelStatusBadge('on', 10);
  taskbarStatusDot.classList.add('nn-voice-panel__taskbar-status-dot');
  taskbarStatus.appendChild(taskbarStatusDot);
  taskbarStatus.appendChild(createVoicePanelInlineText('nn-voice-panel__taskbar-status-text', '在线'));
  voice.appendChild(taskbarStatus);
  root.appendChild(voice);

  const controls = document.createElement('div');
  controls.className = 'nn-voice-panel__taskbar-controls';
  controls.appendChild(createVoicePanelVolumeControl({ type: 'mic', value: 50, showPopover: false, showTooltip: false }));
  controls.appendChild(createVoicePanelVolumeControl({ type: 'sound', value: 50, showPopover: false, showTooltip: false }));
  controls.appendChild(createVoicePanelPushControl({
    type: 'voice',
    sensingLabel: '说话感应',
    showTooltip: false,
    toggleOnClick: true,
    suffixIcon: 'nicon-a-Toggle-lineqiehuan-xianxing',
    tooltipText: '说话感应'
  }));

  const leave = document.createElement('button');
  leave.type = 'button';
  leave.className = 'nn-voice-panel__leave';
  leave.setAttribute('aria-label', '离开语音房');
  leave.innerHTML = '<i class="nnicon nicon-a-ExitVoice-filltuichuyuyin-mianxing-pc"></i>';
  leave.appendChild(createVoicePanelLeaveAnimation());
  leave.addEventListener('mouseenter', function() {
    const mark = leave.querySelector('.nn-voice-panel__leave-animation-mark');
    if (!mark) return;
    mark.style.animation = 'none';
    void mark.offsetHeight;
    mark.style.animation = '';
  });
  leave.addEventListener('click', function() {
    animateVoicePanelTaskbarWidth(root, function() {
      root.classList.add('is-taskbar-left');
      roomEl.textContent = '当前未进入房间';
    });
    if (typeof onLeave === 'function') {
      onLeave({
        panel: root,
        collapsed: false
      });
    }
    root.dispatchEvent(new CustomEvent('voice-panel:leave', {
      bubbles: true,
      detail: {
        panel: root,
        collapsed: false
      }
    }));
  });
  controls.appendChild(leave);
  root.appendChild(controls);
  return root;
}

function createVoicePanelAccelerationDialog(options = {}) {
  injectVoicePanelStyles();
  const requiredComponents = [
    'createToast',
    'createButton',
    'createSwitch',
    'createTabs',
    'createDropdownMenu',
    'createAcceleratorImageCarousel'
  ];
  requiredComponents.forEach(function(componentName) {
    if (typeof window[componentName] !== 'function') {
      throw new Error(`createVoicePanelAccelerationDialog requires the ${componentName} component.`);
    }
  });

  const existing = document.querySelector('.nn-voice-panel-acceleration-modal');
  if (existing) {
    if (typeof existing.close === 'function') existing.close();
    else existing.remove();
  }

  const {
    gameName = '绝地求生',
    gameIcon = '',
    platform = 'Steam / Epic',
    duration = {},
    onConfirm = null,
    onClose = null
  } = options;
  const resolvedGameIcon = resolveVoicePanelGameLogo(gameName, gameIcon);
  const durationParts = [
    [duration.hours === undefined ? '7,230' : duration.hours, '时'],
    [duration.minutes === undefined ? '30' : duration.minutes, '分'],
    [duration.seconds === undefined ? '04' : duration.seconds, '秒']
  ];
  const previousFocus = document.activeElement;
  const overlay = document.createElement('div');
  overlay.className = 'nn-voice-panel-acceleration-modal';

  let selectedServer = '俄服';
  let selectedNode = '智能节点';
  let selectedMode = gameName;
  let autoAcceleration = true;
  let dialog = null;
  let acceleratorCarousel = null;

  function closeDialog(reason = 'close') {
    document.removeEventListener('keydown', handleKeydown);
    if (acceleratorCarousel && typeof acceleratorCarousel.destroy === 'function') {
      acceleratorCarousel.destroy();
    }
    overlay.remove();
    if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
    if (typeof onClose === 'function') onClose({ reason, gameName });
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') closeDialog('escape');
  }

  function createText(className, text) {
    const element = document.createElement('span');
    element.className = className;
    element.textContent = text;
    return element;
  }

  function confirmAcceleration(event) {
    const payload = {
      event,
      gameName,
      gameIcon: resolvedGameIcon,
      server: selectedServer,
      node: selectedNode,
      mode: selectedMode,
      autoAcceleration,
      dialog: overlay
    };
    if (typeof onConfirm === 'function' && onConfirm(payload) === false) return;
    closeDialog('confirm');
  }

  const content = document.createElement('div');
  content.className = 'nn-voice-panel-acceleration-modal__content';

  const overview = document.createElement('div');
  overview.className = 'nn-voice-panel-acceleration-modal__overview';
  const gameArea = document.createElement('div');
  gameArea.className = 'nn-voice-panel-acceleration-modal__game-area';

  const summary = document.createElement('section');
  summary.className = 'nn-voice-panel-acceleration-modal__summary';
  const logo = document.createElement('img');
  logo.className = 'nn-voice-panel-acceleration-modal__game-logo';
  logo.src = resolvedGameIcon;
  logo.alt = gameName;
  summary.appendChild(logo);
  const gameDetails = document.createElement('div');
  gameDetails.className = 'nn-voice-panel-acceleration-modal__game-details';
  const gameCopy = document.createElement('div');
  gameCopy.className = 'nn-voice-panel-acceleration-modal__game-copy';
  gameCopy.appendChild(createText('nn-voice-panel-acceleration-modal__game-name', gameName));
  gameCopy.appendChild(createText('nn-voice-panel-acceleration-modal__game-platform', platform));
  gameDetails.appendChild(gameCopy);

  const settings = document.createElement('div');
  settings.className = 'nn-voice-panel-acceleration-modal__settings';

  const autoSetting = document.createElement('div');
  autoSetting.className = 'nn-voice-panel-acceleration-modal__setting';
  const autoSwitch = window.createSwitch({
    checked: true,
    size: 'default',
    className: 'nn-voice-panel-acceleration-modal__auto-switch',
    onChange: function(checked) {
      autoAcceleration = checked;
      autoStatusText.textContent = checked ? '自动加速已开启' : '自动加速已关闭';
    }
  });
  autoSwitch.setAttribute('aria-label', '自动加速');
  autoSetting.appendChild(autoSwitch);
  const autoStatusText = createText(
    'nn-voice-panel-acceleration-modal__setting-title',
    '自动加速已开启'
  );
  autoSetting.appendChild(autoStatusText);
  const autoHelp = document.createElement('i');
  autoHelp.className = 'nnicon nicon-a-query-lineyiwen-xianxing nn-voice-panel-acceleration-modal__setting-help';
  autoHelp.setAttribute('aria-label', '自动加速说明');
  autoSetting.appendChild(autoHelp);
  settings.appendChild(autoSetting);

  const syncSetting = document.createElement('div');
  syncSetting.className = 'nn-voice-panel-acceleration-modal__setting';
  syncSetting.appendChild(createText('nn-voice-panel-acceleration-modal__setting-title', '同步加速'));
  const syncIcons = document.createElement('span');
  syncIcons.className = 'nn-voice-panel-acceleration-modal__sync-icons';
  const gameSyncIcon = document.createElement('span');
  gameSyncIcon.className = 'nn-voice-panel-acceleration-modal__sync-icon';
  const gameSyncImage = document.createElement('img');
  gameSyncImage.src = resolvedGameIcon;
  gameSyncImage.alt = '';
  gameSyncIcon.appendChild(gameSyncImage);
  syncIcons.appendChild(gameSyncIcon);
  const steamSyncIcon = document.createElement('span');
  steamSyncIcon.className = 'nn-voice-panel-acceleration-modal__sync-icon';
  steamSyncIcon.innerHTML = '<i class="nnicon nicon-a-STEAM-fillSTEAM-mianxing" aria-hidden="true"></i>';
  syncIcons.appendChild(steamSyncIcon);
  const lightningSyncIcon = document.createElement('span');
  lightningSyncIcon.className = 'nn-voice-panel-acceleration-modal__sync-icon';
  lightningSyncIcon.innerHTML = '<i class="nnicon nicon-a-Lightning-Fillshandian-mianxing" aria-hidden="true"></i>';
  syncIcons.appendChild(lightningSyncIcon);
  syncSetting.appendChild(syncIcons);
  settings.appendChild(syncSetting);
  gameDetails.appendChild(settings);
  summary.appendChild(gameDetails);
  gameArea.appendChild(summary);
  overview.appendChild(gameArea);

  const durationAside = document.createElement('aside');
  durationAside.className = 'nn-voice-panel-acceleration-modal__duration';
  const durationHeader = document.createElement('div');
  durationHeader.className = 'nn-voice-panel-acceleration-modal__duration-header';
  const durationCopy = document.createElement('div');
  durationCopy.className = 'nn-voice-panel-acceleration-modal__duration-copy';
  const durationTitle = document.createElement('span');
  durationTitle.className = 'nn-game-accelerator-popover__duration-title';
  durationTitle.appendChild(createText('', '雷神加速时长'));
  const durationRefresh = document.createElement('i');
  durationRefresh.className = 'nnicon nicon-a-refresh-fillshuaxin-xianxing nn-game-accelerator-popover__duration-refresh';
  durationRefresh.setAttribute('role', 'button');
  durationRefresh.setAttribute('tabindex', '0');
  durationRefresh.setAttribute('aria-label', '刷新加速时长');
  durationRefresh.addEventListener('animationend', function() {
    durationRefresh.classList.remove('is-rotating');
  });
  function rotateDurationRefresh() {
    durationRefresh.classList.remove('is-rotating');
    void durationRefresh.offsetWidth;
    durationRefresh.classList.add('is-rotating');
  }
  durationRefresh.addEventListener('click', rotateDurationRefresh);
  durationRefresh.addEventListener('keydown', function(event) {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    rotateDurationRefresh();
  });
  durationTitle.appendChild(durationRefresh);
  durationCopy.appendChild(durationTitle);
  const durationValue = document.createElement('span');
  durationValue.className = 'nn-game-accelerator-popover__duration-value';
  durationParts.forEach(function(part) {
    const segment = document.createElement('span');
    segment.className = 'nn-game-accelerator-popover__duration-segment';
    segment.appendChild(createText('nn-game-accelerator-popover__duration-number', String(part[0])));
    segment.appendChild(createText('nn-game-accelerator-popover__duration-unit', part[1]));
    durationValue.appendChild(segment);
  });
  durationCopy.appendChild(durationValue);
  durationHeader.appendChild(durationCopy);
  durationHeader.appendChild(window.createButton({
    text: '充值',
    variant: 'primary',
    level: 'secondary',
    size: 'default'
  }));
  durationAside.appendChild(durationHeader);
  durationAside.appendChild(window.createButton({
    text: '开始加速',
    variant: 'primary',
    level: 'primary',
    size: 'large',
    icon: '<i class="nnicon nicon-a-Lightning-Fillshandian-mianxing" aria-hidden="true"></i>',
    iconPosition: 'left',
    iconSize: 'var(--icon-size-x8)',
    className: 'nn-voice-panel-acceleration-modal__duration-action',
    onClick: confirmAcceleration
  }));
  overview.appendChild(durationAside);
  content.appendChild(overview);

  const toolbar = document.createElement('div');
  toolbar.className = 'nn-voice-panel-acceleration-modal__toolbar';
  const platformOptions = [
    `${gameName}（PS）`,
    `${gameName}（Xbox）`,
    `${gameName}（SteamDeck）`
  ];
  let selectedPlatformName = platformOptions[0];
  const contextTabs = window.createTabs({
    type: 'secondary',
    tabs: [
      { name: gameName },
      {
        name: selectedPlatformName,
        iconRight: 'nnicon nicon-a-Arrow-down-linejiantouxia-xianxing'
      }
    ],
    defaultActive: 0,
    onChange: function(payload) {
      selectedMode = payload && payload.index === 0 ? gameName : selectedPlatformName;
    }
  });
  contextTabs.classList.add('nn-voice-panel-acceleration-modal__context-tabs');
  contextTabs.setAttribute('aria-label', '游戏与加速平台');
  const platformTab = contextTabs.querySelector('.nn-tab[data-index="1"]');
  let platformDropdownOpen = false;
  const platformDropdown = window.createDropdownMenu({
    appearance: 'no-padding',
    size: 'medium',
    value: selectedPlatformName,
    selectedIndex: 0,
    items: platformOptions.map(function(label) {
      return { label };
    }),
    triggerElement: platformTab,
    className: 'nn-voice-panel-acceleration-modal__platform-dropdown',
    onChange: function(payload) {
      if (!payload || !payload.item) return;
      selectedPlatformName = payload.item.label;
      selectedMode = selectedPlatformName;
      const label = platformTab.querySelector('.nn-tab-label');
      if (label) label.textContent = selectedPlatformName;
    },
    onOpenChange: function(open) {
      platformDropdownOpen = open;
      platformTab.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
  });
  platformTab.setAttribute('role', 'button');
  platformTab.setAttribute('tabindex', '0');
  platformTab.setAttribute('aria-haspopup', 'listbox');
  platformTab.setAttribute('aria-expanded', 'false');
  function setPlatformDropdownOpen(nextOpen) {
    platformDropdownOpen = Boolean(nextOpen);
    platformDropdown._dropdownMenu.setOpen(platformDropdownOpen);
  }
  platformTab.addEventListener('click', function() {
    setPlatformDropdownOpen(!platformDropdownOpen);
  });
  platformTab.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      setPlatformDropdownOpen(false);
      return;
    }
    if (event.key !== 'Enter' && event.key !== ' ' && event.key !== 'ArrowDown') return;
    event.preventDefault();
    setPlatformDropdownOpen(true);
  });
  platformDropdown.addEventListener('click', function(event) {
    if (!event.target.closest('.nn-dropdown-item')) return;
    platformDropdownOpen = false;
  });
  contextTabs.appendChild(platformDropdown);
  toolbar.appendChild(contextTabs);
  content.appendChild(toolbar);

  const selector = document.createElement('section');
  selector.className = 'nn-voice-panel-acceleration-modal__selector';
  const selectorHeader = document.createElement('div');
  selectorHeader.className = 'nn-voice-panel-acceleration-modal__selector-header';
  selector.appendChild(selectorHeader);

  const serverPanel = document.createElement('div');
  serverPanel.className = 'nn-voice-panel-acceleration-modal__option-panel';
  const nodePanel = document.createElement('div');
  nodePanel.className = 'nn-voice-panel-acceleration-modal__option-panel';
  nodePanel.hidden = true;

  function createOptionButton(config, panel, type, isSelected) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = [
      'nn-voice-panel-acceleration-modal__option',
      isSelected ? 'is-selected' : ''
    ].filter(Boolean).join(' ');
    if (config.icon) {
      const icon = document.createElement('span');
      icon.className = 'nn-voice-panel-acceleration-modal__option-icon';
      icon.innerHTML = config.icon;
      button.appendChild(icon);
    }
    button.appendChild(createText(
      'nn-voice-panel-acceleration-modal__option-text',
      config.label
    ));
    button.addEventListener('click', function() {
      panel.querySelectorAll('.nn-voice-panel-acceleration-modal__option').forEach(function(optionButton) {
        optionButton.classList.remove('is-selected');
        optionButton.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('is-selected');
      button.setAttribute('aria-pressed', 'true');
      if (type === 'server') selectedServer = config.label;
      else selectedNode = config.label;
    });
    button.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
    panel.appendChild(button);
  }

  [
    ['俄服', '../image/National flag/俄服.svg'],
    ['亚服', '../image/National flag/亚服.svg'],
    ['东南亚服', '../image/National flag/东南亚服.svg'],
    ['美服', '../image/National flag/美服.svg'],
    ['欧服', '../image/National flag/欧服.svg'],
    ['韩服', '../image/National flag/韩服.svg'],
    ['中国服', '../image/National flag/中国服.svg'],
    ['国际服', '../image/National flag/国际服.svg'],
    ['澳服', '../image/National flag/澳服.svg']
  ].forEach(function(server, index) {
    createOptionButton({
      label: server[0],
      icon: `<img src="${server[1]}" alt="">`
    }, serverPanel, 'server', index === 0);
  });

  ['智能节点', '低延迟节点', '稳定节点'].forEach(function(node, index) {
    createOptionButton({
      label: node,
      icon: '<i class="nnicon nicon-a-Lightning-Lineshandian-xianxing" aria-hidden="true"></i>'
    }, nodePanel, 'node', index === 0);
  });

  const tabs = window.createTabs({
    type: 'tertiary-box',
    tabs: [{ name: '区服' }, { name: '节点' }],
    defaultActive: 0,
    onChange: function(payload) {
      serverPanel.hidden = payload.index !== 0;
      nodePanel.hidden = payload.index !== 1;
    }
  });
  tabs.classList.add('nn-voice-panel-acceleration-modal__selector-tabs');
  tabs.setAttribute('aria-label', '加速线路类型');
  selectorHeader.appendChild(tabs);
  selector.appendChild(serverPanel);
  selector.appendChild(nodePanel);
  content.appendChild(selector);

  acceleratorCarousel = window.createAcceleratorImageCarousel({
    variant: 'banner',
    ariaLabel: '雷神活动轮播图'
  });
  content.appendChild(acceleratorCarousel);

  dialog = window.createToast({
    title: '游戏加速',
    subtitle: '',
    content,
    showClose: true,
    showFooter: false,
    className: 'nn-voice-panel-acceleration-modal__dialog',
    onClose: function() {
      closeDialog('close');
    }
  });
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  const title = dialog.querySelector('.nn-toast__title');
  if (title) {
    title.id = 'nn-voice-panel-acceleration-modal-title';
    dialog.setAttribute('aria-labelledby', title.id);
  }
  const closeButton = dialog.querySelector('.nn-toast__close');
  if (closeButton) closeButton.setAttribute('aria-label', '关闭游戏加速弹窗');
  overlay.appendChild(dialog);
  overlay.addEventListener('click', function(event) {
    if (event.target === overlay) closeDialog('backdrop');
  });
  document.addEventListener('keydown', handleKeydown);
  document.body.appendChild(overlay);
  window.requestAnimationFrame(function() {
    if (closeButton) closeButton.focus();
  });

  overlay.close = closeDialog;
  overlay.dialog = dialog;
  return overlay;
}

function createVoicePanelLaunchPathDialog(options = {}) {
  injectVoicePanelStyles();
  ['createToast', 'createButton', 'createInput', 'createRadio'].forEach(function(componentName) {
    if (typeof window[componentName] !== 'function') {
      throw new Error(`createVoicePanelLaunchPathDialog requires the ${componentName} component.`);
    }
  });

  const existing = document.querySelector('.nn-voice-panel-launch-path-modal');
  if (existing) {
    if (typeof existing.close === 'function') existing.close('replace');
    else existing.remove();
  }

  const {
    gameName = '游戏',
    initialPath = '',
    initialMode = 'manual',
    onConfirm = null,
    onClose = null
  } = options;
  const previousFocus = document.activeElement;
  const overlay = document.createElement('div');
  overlay.className = 'nn-voice-panel-launch-path-modal';
  let dialog = null;
  let currentPath = String(initialPath || '');
  let selectedLaunchMode = initialMode === 'steam' ? 'steam' : 'manual';

  function closeDialog(reason = 'close') {
    document.removeEventListener('keydown', handleKeydown);
    overlay.remove();
    if (previousFocus && typeof previousFocus.focus === 'function') previousFocus.focus();
    if (typeof onClose === 'function') {
      onClose({ reason, gameName, path: currentPath, mode: selectedLaunchMode });
    }
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') closeDialog('escape');
  }

  function createText(className, text) {
    const element = document.createElement('span');
    element.className = className;
    element.textContent = text;
    return element;
  }

  const content = document.createElement('div');
  content.className = 'nn-voice-panel-launch-path-modal__content';

  const modes = document.createElement('div');
  modes.className = 'nn-voice-panel-launch-path-modal__modes';
  modes.setAttribute('role', 'radiogroup');
  modes.setAttribute('aria-label', '游戏启动方式');
  const modeRadios = new Map();
  let pathGroup = null;

  function setLaunchMode(nextMode) {
    selectedLaunchMode = nextMode;
    modeRadios.forEach(function(radio, value) {
      const checked = value === selectedLaunchMode;
      radio.classList.toggle('is-checked', checked);
      radio.setAttribute('aria-checked', checked ? 'true' : 'false');
      const dot = radio.querySelector('.nn-radio__dot');
      if (dot) dot.style.display = checked ? 'block' : 'none';
    });
    if (pathGroup) pathGroup.hidden = selectedLaunchMode === 'steam';
  }

  function appendLaunchMode(value, title, description, checked) {
    const mode = document.createElement('div');
    mode.className = 'nn-voice-panel-launch-path-modal__mode';
    const modeCopy = document.createElement('div');
    modeCopy.className = 'nn-voice-panel-launch-path-modal__mode-copy';
    modeCopy.appendChild(createText('nn-voice-panel-launch-path-modal__mode-title', title));
    modeCopy.appendChild(createText(
      'nn-voice-panel-launch-path-modal__mode-description',
      description
    ));
    mode.appendChild(modeCopy);
    const radio = window.createRadio({
      checked,
      showLabel: false,
      className: 'nn-voice-panel-launch-path-modal__radio'
    });
    radio.setAttribute('role', 'radio');
    radio.setAttribute('aria-checked', checked ? 'true' : 'false');
    radio.setAttribute('aria-label', title);
    radio.addEventListener('click', function() {
      setLaunchMode(value);
    });
    modeRadios.set(value, radio);
    mode.appendChild(radio);
    modes.appendChild(mode);
  }

  appendLaunchMode(
    'steam',
    '从Steam启动',
    '自动从Steam提供的游戏路径启动游戏',
    selectedLaunchMode === 'steam'
  );
  appendLaunchMode(
    'manual',
    '手动指定',
    '手动指定游戏启动路径',
    selectedLaunchMode === 'manual'
  );
  content.appendChild(modes);

  pathGroup = document.createElement('div');
  pathGroup.className = 'nn-voice-panel-launch-path-modal__path';
  pathGroup.hidden = selectedLaunchMode === 'steam';
  pathGroup.appendChild(createText('nn-voice-panel-launch-path-modal__path-label', '选择路径'));
  let pathInput = null;
  const pathField = window.createInput({
    value: currentPath,
    placeholder: '请选择游戏启动路径',
    size: 'large',
    showLinkCopy: true,
    linkActionText: '更换路径',
    linkActionAriaLabel: `更换${gameName}启动路径`,
    className: 'nn-voice-panel-launch-path-modal__path-input',
    onLinkAction: function() {
      currentPath = `D:\\Games\\${gameName}\\${gameName}.exe`;
      pathInput.value = currentPath;
      pathInput.focus();
      pathInput.select();
    }
  });
  pathField.classList.add('nn-voice-panel-launch-path-modal__path-field');
  pathInput = pathField._inputEl || pathField.querySelector('.nn-input');
  pathInput.readOnly = true;
  pathInput.setAttribute('aria-label', `${gameName}启动路径`);
  pathGroup.appendChild(pathField);
  content.appendChild(pathGroup);

  function confirmPath(event) {
    currentPath = pathInput.value.trim();
    const payload = {
      event,
      gameName,
      path: currentPath,
      mode: selectedLaunchMode,
      dialog: overlay
    };
    if (typeof onConfirm === 'function' && onConfirm(payload) === false) return;
    closeDialog('confirm');
  }

  dialog = window.createToast({
    title: '设置启动路径',
    content,
    showClose: true,
    showFooter: true,
    className: 'nn-voice-panel-launch-path-modal__dialog',
    footer: {
      layout: 'double-horizontal',
      buttons: [
        {
          text: '确定',
          variant: 'system',
          level: 'primary',
          size: 'large',
          onClick: confirmPath
        },
        {
          text: '取消',
          variant: 'system',
          level: 'secondary',
          size: 'large',
          onClick: function() {
            closeDialog('cancel');
          }
        }
      ]
    },
    onClose: function() {
      closeDialog('close');
    }
  });
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  const title = dialog.querySelector('.nn-toast__title');
  if (title) {
    title.id = 'nn-voice-panel-launch-path-modal-title';
    dialog.setAttribute('aria-labelledby', title.id);
  }
  const closeButton = dialog.querySelector('.nn-toast__close');
  if (closeButton) closeButton.setAttribute('aria-label', '关闭设置启动路径弹窗');
  overlay.appendChild(dialog);
  overlay.addEventListener('click', function(event) {
    if (event.target === overlay) closeDialog('backdrop');
  });
  document.addEventListener('keydown', handleKeydown);
  document.body.appendChild(overlay);
  window.requestAnimationFrame(function() {
    if (closeButton) closeButton.focus();
  });

  overlay.close = closeDialog;
  overlay.dialog = dialog;
  return overlay;
}

function createVoicePanel(options = {}) {
  injectVoicePanelStyles();
  if (typeof window !== 'undefined' && typeof window.injectAvatarStyles === 'function') {
    window.injectAvatarStyles();
  }
  if (typeof window !== 'undefined' && typeof window.injectSliderStyles === 'function') {
    window.injectSliderStyles();
  }
  if (typeof window !== 'undefined' && typeof window.injectTooltipStyles === 'function') {
    window.injectTooltipStyles();
  }

  const {
    roomNo = '56',
    title = '所在语音房的名称长',
    current = 6,
    total = 10,
    avatars = [
      '../image/Avatar/头像480.png',
      '../image/Avatar/头像441.png',
      '../image/Avatar/头像496.png',
      '../image/Avatar/头像655.png',
      '../image/Avatar/头像686.png'
    ],
    moreText = '5+',
    speakerAvatar = '../image/Avatar/头像441.png',
    speakerName = '普莱士袋熊',
    speakerNames = [
      '白露',
      '霜月见晴',
      '南栀Echo',
      '星河漫游者',
      'NN快乐补给站'
    ],
    showOnline = true,
    launchState = 'idle',
    gameName = '绝地求生',
    gameIcon = '../image/Game logo/game1.webp',
    launchProgress = 58,
    launchDropdown = {},
    variant = 'default',
    className = '',
    gameList = VoicePanelGameListDefaults,
    boostDuration = {},
    boostDurationDetails = {},
    onLaunchAction = null,
    onGameList = null,
    onGameAction = null,
    onGameSettings = null,
    onBoostDurationRefresh = null,
    onBoostDurationEnable = null,
    onBoostDurationPause = null,
    onBoostDurationDetailsClick = null,
    onBoostDurationAutoContinueChange = null,
    onLeave = null,
    collapseOnLeave = true
  } = options;
  if (variant === 'taskbar') {
    return createVoicePanelTaskbar(options);
  }
  const isCardVariant = variant === 'card';

  const root = document.createElement('div');
  root.className = [
    'nn-voice-panel',
    isCardVariant ? 'is-card-variant' : '',
    className
  ].filter(Boolean).join(' ');
  root.dataset.variant = variant;

  let gameListPopover = null;
  let gameListPopoverEl = null;
  let accelerationDialog = null;
  let launchPathDialog = null;
  let launchButton = null;
  let gameListButton = null;
  let lastRunningGameSignature = null;
  const gameProgressControllers = new Map();
  let launchWorkflowState = normalizeVoicePanelLaunchState(launchState);
  let launchWorkflowProgress = Math.max(0, Math.min(100, Number(launchProgress) || 0));

  const sourceGames = Array.isArray(gameList) ? gameList : VoicePanelGameListDefaults;
  const gameModels = sourceGames.map(function(game) {
    const normalizedState = normalizeVoicePanelGameCardState(game.state || 'idle');
    return Object.assign({}, game, {
      gameIcon: resolveVoicePanelGameLogo(game.gameName, game.gameIcon),
      state: normalizedState,
      accelerated: Boolean(game.accelerated),
      progress: Math.max(0, Math.min(100, Number(game.progress) || 0)),
      playingStartedAt: Number(game.playingStartedAt) || (normalizedState === 'playing' ? Date.now() : null)
    });
  });
  let selectedGame = gameModels.find(function(game) {
    return game.gameName === gameName;
  });
  if (!selectedGame) {
    selectedGame = {
      gameName,
      gameIcon: resolveVoicePanelGameLogo(gameName, gameIcon),
      state: normalizeVoicePanelGameCardState(launchState),
      accelerated: false,
      progress: Math.max(0, Math.min(100, Number(launchProgress) || 0)),
      boostText: '未加速',
      totalTime: '累计 3679h',
      sessionText: '上次游戏：昨天',
      playingStartedAt: null
    };
    gameModels.unshift(selectedGame);
  } else {
    selectedGame.gameIcon = resolveVoicePanelGameLogo(gameName, gameIcon);
    selectedGame.state = normalizeVoicePanelGameCardState(launchState);
    selectedGame.progress = Math.max(0, Math.min(100, Number(launchProgress) || 0));
    selectedGame.playingStartedAt = selectedGame.state === 'playing'
      ? (selectedGame.playingStartedAt || Date.now())
      : null;
  }

  function findGameModel(targetGameName) {
    return gameModels.find(function(game) {
      return game.gameName === targetGameName;
    });
  }

  function handleGameSettings(payload = {}) {
    const targetGame = payload.game || findGameModel(payload.gameName) || selectedGame;
    const settingsPayload = Object.assign({
      game: targetGame,
      gameName: targetGame.gameName,
      state: targetGame.state,
      phase: 'open'
    }, payload);
    const externalResult = typeof onGameSettings === 'function'
      ? onGameSettings(settingsPayload)
      : undefined;
    if (externalResult === false) return false;
    closeGameListPopover();
    launchPathDialog = createVoicePanelLaunchPathDialog({
      gameName: targetGame.gameName,
      initialPath: targetGame.launchPath || '',
      initialMode: targetGame.launchMode || 'manual',
      onConfirm: function(dialogPayload) {
        targetGame.launchPath = dialogPayload.path;
        targetGame.launchMode = dialogPayload.mode;
      },
      onClose: function() {
        launchPathDialog = null;
      }
    });
    return true;
  }

  function stopGameProgress(targetGameName) {
    const controller = gameProgressControllers.get(targetGameName);
    if (!controller) return;
    if (controller.frame !== null) {
      window.cancelAnimationFrame(controller.frame);
    }
    if (controller.timer !== null) {
      window.clearTimeout(controller.timer);
    }
    gameProgressControllers.delete(targetGameName);
  }

  function setLaunchWorkflowState(nextState, nextProgress) {
    launchWorkflowState = normalizeVoicePanelLaunchState(nextState);
    if (nextProgress !== undefined) {
      launchWorkflowProgress = Math.max(0, Math.min(100, Number(nextProgress) || 0));
    }
    if (launchButton) {
      launchButton.setVoicePanelLaunchState(launchWorkflowState, launchWorkflowProgress);
    }
  }

  function scheduleGameProgress(game, controller) {
    const initialProgress = game.progress;
    const remainingDuration = controller.duration * ((100 - initialProgress) / 100);
    const startTime = window.performance.now();
    function renderProgressFrame(currentTime) {
      if (!root.isConnected) {
        stopGameProgress(game.gameName);
        return;
      }
      const elapsed = Math.max(0, currentTime - startTime);
      const progressRatio = Math.min(1, remainingDuration === 0 ? 1 : elapsed / remainingDuration);
      setGameState(game, controller.transientState, initialProgress + ((100 - initialProgress) * progressRatio));
      if (progressRatio < 1) {
        controller.frame = window.requestAnimationFrame(renderProgressFrame);
        return;
      }
      controller.frame = null;
      controller.timer = window.setTimeout(function() {
        controller.timer = null;
        gameProgressControllers.delete(game.gameName);
        if (!root.isConnected) return;
        setGameState(game, controller.completedState, controller.completedState === 'playing' ? 100 : 0);
      }, 300);
    }

    controller.frame = window.requestAnimationFrame(renderProgressFrame);
  }

  function syncRunningGames() {
    if (!gameListButton || typeof gameListButton.setVoicePanelRunningGames !== 'function') return;
    const runningGames = gameModels.filter(function(game) {
      return game.gameName !== gameName && game.state === 'playing';
    });
    const signature = runningGames.map(function(game) {
      return `${game.gameName}:${game.gameIcon}`;
    }).join('|');
    if (signature === lastRunningGameSignature) return;
    lastRunningGameSignature = signature;
    gameListButton.setVoicePanelRunningGames(runningGames);
  }

  function syncGameViews(game) {
    if (!game) return;
    if (game.gameName === gameName && launchButton) {
      launchWorkflowState = normalizeVoicePanelLaunchState(game.state);
      launchWorkflowProgress = game.progress;
      launchButton.setVoicePanelLaunchState(game.state, game.progress);
    }
    if (gameListPopover && typeof gameListPopover.syncGameState === 'function') {
      const popoverState = game.accelerated && game.state === 'idle' ? 'playing' : game.state;
      gameListPopover.syncGameState(game.gameName, popoverState, game.progress);
    }
    syncRunningGames();
  }

  function setGameState(game, nextState, nextProgress) {
    if (!game) return;
    const previousState = game.state;
    game.state = normalizeVoicePanelGameCardState(nextState);
    game.accelerated = false;
    if (game.state === 'playing' && previousState !== 'playing') {
      game.playingStartedAt = Date.now();
    } else if (game.state !== 'playing' && previousState === 'playing') {
      game.playingStartedAt = null;
    }
    if (nextProgress !== undefined) {
      game.progress = Math.max(0, Math.min(100, Number(nextProgress) || 0));
    }
    syncGameViews(game);
  }

  function animateGameProgress(game, transientState, completedState) {
    if (!game) return;
    stopGameProgress(game.gameName);
    setGameState(game, transientState, 0);
    const controller = {
      frame: null,
      timer: null,
      transientState,
      completedState,
      duration: 4000
    };
    gameProgressControllers.set(game.gameName, controller);
    scheduleGameProgress(game, controller);
  }

  function runGameAction(game) {
    if (!game) return;
    if (game.state === 'launching') return;
    if (game.state === 'idle') {
      animateGameProgress(game, 'launching', 'playing');
      return;
    }
    if (game.state === 'playing') {
      stopGameProgress(game.gameName);
      setGameState(game, 'idle', 0);
    }
  }

  function handleLaunchButtonClick(payload) {
    const externalResult = typeof onLaunchAction === 'function'
      ? onLaunchAction(Object.assign({ game: selectedGame }, payload))
      : undefined;
    if (externalResult === false) return;
    runGameAction(selectedGame);
  }

  function handlePopoverGameAction(payload) {
    const game = findGameModel(payload.gameName);
    if (game && payload.phase === 'accelerate') {
      accelerationDialog = createVoicePanelAccelerationDialog({
        gameName: game.gameName,
        gameIcon: game.gameIcon,
        platform: game.platform || 'Steam / Epic',
        duration: boostDuration,
        onConfirm: function(dialogPayload) {
          const externalResult = typeof onGameAction === 'function'
            ? onGameAction(Object.assign({
                game,
                confirmed: true,
                phase: 'accelerate'
              }, payload, dialogPayload))
            : undefined;
          if (externalResult === false) return false;
          stopGameProgress(game.gameName);
          game.accelerated = true;
          game.playingStartedAt = Date.now();
          syncGameViews(game);
          return true;
        },
        onClose: function() {
          accelerationDialog = null;
        }
      });
      return false;
    }
    const externalResult = typeof onGameAction === 'function'
      ? onGameAction(Object.assign({ game: game || payload.game }, payload))
      : undefined;
    if (externalResult === false) return false;
    if (game && payload.phase === 'complete' && game.accelerated && game.state === 'idle') {
      game.accelerated = false;
      game.playingStartedAt = null;
      syncGameViews(game);
      return false;
    }
    if (game && payload.progress !== undefined && isVoicePanelGameProgressState(game.state)) {
      game.progress = Math.max(0, Math.min(100, Number(payload.progress) || 0));
    }
    runGameAction(game);
    return false;
  }

  const launchRow = document.createElement('div');
  launchRow.className = 'nn-voice-panel__launch-row';
  launchButton = createVoicePanelLaunchButton({
    state: launchWorkflowState,
    gameName,
    gameIcon: selectedGame.gameIcon,
    progress: launchWorkflowProgress,
    onClick: handleLaunchButtonClick
  });
  launchRow.appendChild(launchButton);
  gameListButton = createVoicePanelGameListButton(function(payload) {
    if (typeof onGameList === 'function') {
      onGameList(payload);
      return;
    }
    toggleGameListPopover();
  });
  launchRow.appendChild(gameListButton);
  root.appendChild(launchRow);
  syncRunningGames();

  function ensureGameListPopover() {
    if (gameListPopover) return gameListPopover;
    gameListPopover = createVoicePanelGameListPopover({
      games: gameModels,
      duration: boostDuration,
      durationDetails: boostDurationDetails,
      launchDropdown,
      onDurationRefresh: onBoostDurationRefresh,
      onDurationEnable: onBoostDurationEnable,
      onDurationPause: onBoostDurationPause,
      onDurationDetailsClick: onBoostDurationDetailsClick,
      onDurationAutoContinueChange: onBoostDurationAutoContinueChange,
      onGameAction: handlePopoverGameAction,
      onGameSettings: handleGameSettings
    });
    gameListPopoverEl = gameListPopover.element;
    gameListButton.setAttribute('aria-controls', gameListPopoverEl.id);
    return gameListPopover;
  }

  function updateGameListPopoverPosition() {
    if (!gameListPopoverEl) return;
    if (!gameListPopoverEl.classList.contains('is-visible')) return;
    if (!root.isConnected) {
      detachGameListPopover();
      return;
    }
    const rowRect = launchRow.getBoundingClientRect();
    const popoverRect = gameListPopoverEl.getBoundingClientRect();
    const viewportPadding = 8;
    const gap = 8;
    const maxLeft = Math.max(
      viewportPadding,
      window.innerWidth - popoverRect.width - viewportPadding
    );
    const left = Math.max(viewportPadding, Math.min(rowRect.left, maxLeft));
    const top = rowRect.top - popoverRect.height - gap;
    gameListPopoverEl.style.left = `${Math.round(left)}px`;
    gameListPopoverEl.style.top = `${Math.round(top)}px`;
  }

  function handleGameListDocumentClick(event) {
    if (!gameListPopoverEl) return;
    if (gameListPopoverEl.contains(event.target)) return;
    if (gameListButton.contains(event.target)) return;
    closeGameListPopover();
  }

  function handleGameListKeydown(event) {
    if (event.key === 'Escape') {
      closeGameListPopover();
    }
  }

  function bindGameListPopoverListeners() {
    document.addEventListener('click', handleGameListDocumentClick);
    document.addEventListener('keydown', handleGameListKeydown);
    window.addEventListener('resize', updateGameListPopoverPosition);
    window.addEventListener('scroll', updateGameListPopoverPosition, true);
  }

  function unbindGameListPopoverListeners() {
    document.removeEventListener('click', handleGameListDocumentClick);
    document.removeEventListener('keydown', handleGameListKeydown);
    window.removeEventListener('resize', updateGameListPopoverPosition);
    window.removeEventListener('scroll', updateGameListPopoverPosition, true);
  }

  function openGameListPopover() {
    ensureGameListPopover();
    gameModels.forEach(syncGameViews);
    if (!gameListPopoverEl.parentNode) {
      document.body.appendChild(gameListPopoverEl);
    }
    gameListPopoverEl.classList.add('is-visible');
    gameListButton.setAttribute('aria-expanded', 'true');
    bindGameListPopoverListeners();
    updateGameListPopoverPosition();
  }

  function closeGameListPopover() {
    if (!gameListPopoverEl) return;
    gameListPopoverEl.classList.remove('is-visible');
    gameListButton.setAttribute('aria-expanded', 'false');
    unbindGameListPopoverListeners();
  }

  function detachGameListPopover() {
    closeGameListPopover();
    if (gameListPopover && typeof gameListPopover.destroy === 'function') {
      gameListPopover.destroy();
    }
    if (gameListPopoverEl && gameListPopoverEl.parentNode) {
      gameListPopoverEl.parentNode.removeChild(gameListPopoverEl);
    }
    gameListPopover = null;
    gameListPopoverEl = null;
  }

  function toggleGameListPopover() {
    if (gameListPopoverEl && gameListPopoverEl.classList.contains('is-visible')) {
      closeGameListPopover();
      return;
    }
    openGameListPopover();
  }

  root.openGameListPopover = openGameListPopover;
  root.closeGameListPopover = closeGameListPopover;
  root.updateGameListPopoverGames = function(nextGames) {
    if (!Array.isArray(nextGames)) return;
    const normalizedGames = nextGames.map(function(nextGame) {
      const currentGame = findGameModel(nextGame.gameName);
      return Object.assign({}, currentGame || {}, nextGame, {
        gameIcon: resolveVoicePanelGameLogo(nextGame.gameName, nextGame.gameIcon || (currentGame && currentGame.gameIcon)),
        state: normalizeVoicePanelGameCardState(
          nextGame.state === undefined && currentGame ? currentGame.state : nextGame.state
        ),
        progress: nextGame.progress === undefined && currentGame
          ? currentGame.progress
          : Math.max(0, Math.min(100, Number(nextGame.progress) || 0))
      });
    });
    let nextSelectedGame = normalizedGames.find(function(game) {
      return game.gameName === gameName;
    });
    if (!nextSelectedGame) {
      nextSelectedGame = selectedGame;
      normalizedGames.unshift(nextSelectedGame);
    }
    gameModels.splice(0, gameModels.length, ...normalizedGames);
    selectedGame = nextSelectedGame;
    lastRunningGameSignature = null;
    ensureGameListPopover().updateGames(gameModels);
    gameModels.forEach(syncGameViews);
  };
  root.updateGameListPopoverDuration = function(nextDuration) {
    ensureGameListPopover().updateDuration(nextDuration);
  };
  root.setVoicePanelGameState = function(targetGameName, nextState, nextProgress) {
    const game = findGameModel(targetGameName);
    if (!game) return false;
    stopGameProgress(targetGameName);
    setGameState(game, nextState, nextProgress);
    return true;
  };
  root.getVoicePanelGameStates = function() {
    return gameModels.map(function(game) {
      return {
        gameName: game.gameName,
        gameIcon: game.gameIcon,
        state: game.state,
        progress: game.progress
      };
    });
  };

  const card = document.createElement('div');
  card.className = 'nn-voice-panel__card';

  const top = document.createElement('div');
  top.className = 'nn-voice-panel__top';

  const info = document.createElement('div');
  info.className = 'nn-voice-panel__info';

  const titleRow = document.createElement('div');
  titleRow.className = 'nn-voice-panel__title-row';

  const roomNoEl = document.createElement('span');
  roomNoEl.className = 'nn-voice-panel__room-no';
  roomNoEl.textContent = roomNo;
  titleRow.appendChild(roomNoEl);

  const titleEl = document.createElement('span');
  titleEl.className = 'nn-voice-panel__title';
  titleEl.textContent = title;
  titleRow.appendChild(titleEl);

  const meta = document.createElement('div');
  meta.className = 'nn-voice-panel__meta';
  meta.innerHTML = `
    <span class="nn-voice-panel__meta-icon">
      <img class="nn-voice-panel__meta-icon-img nn-voice-panel__meta-icon-img--light" src="../image/Animation/light_iSpt.webp" alt="">
      <img class="nn-voice-panel__meta-icon-img nn-voice-panel__meta-icon-img--dark" src="../image/Animation/dark_iSpt.webp" alt="">
    </span>
    <span class="nn-voice-panel__meta-count">
      <span class="nn-voice-panel__meta-current">${current}</span>
      <span class="nn-voice-panel__meta-slash">/</span>
      <span class="nn-voice-panel__meta-total">${total}</span>
    </span>
  `;
  titleRow.appendChild(meta);
  info.appendChild(titleRow);

  const avatarList = document.createElement('div');
  avatarList.className = 'nn-voice-panel__avatars';
  avatars.slice(0, 5).forEach(function(src, index) {
    avatarList.appendChild(createVoicePanelAvatar(src, index));
  });
  if (moreText) {
    const more = document.createElement('span');
    more.className = 'nn-voice-panel__more';
    more.textContent = moreText;
    avatarList.appendChild(more);
  }
  info.appendChild(avatarList);

  const roomSwitch = document.createElement('div');
  roomSwitch.className = 'nn-voice-panel__room-switch';

  const roomSwitchTrack = document.createElement('div');
  roomSwitchTrack.className = 'nn-voice-panel__room-switch-track';

  const speakerPanel = document.createElement('div');
  speakerPanel.className = 'nn-voice-panel__room-switch-panel is-speaker';
  const speakerCard = createVoicePanelSpeakerCard(speakerAvatar, avatars, speakerName, speakerNames);
  speakerPanel.appendChild(speakerCard);

  const infoPanel = document.createElement('div');
  infoPanel.className = 'nn-voice-panel__room-switch-panel is-info';
  infoPanel.appendChild(info);

  roomSwitchTrack.appendChild(speakerPanel);
  roomSwitchTrack.appendChild(infoPanel);
  roomSwitch.appendChild(roomSwitchTrack);
  roomSwitch.addEventListener('mouseenter', function() {
    roomSwitch.classList.add('is-room-switch-hover');
  });
  roomSwitch.addEventListener('mouseleave', function() {
    roomSwitch.classList.remove('is-room-switch-hover');
  });
  roomSwitch.addEventListener('voice-panel:speaker-cycle-complete', function(event) {
    if (!roomSwitch.isConnected) return;
    const detail = event.detail || {};
    const restDelay = Number.isFinite(detail.restDelay)
      ? detail.restDelay
      : 0;
    const completedCard = detail.card || speakerCard;
    const completedWave = completedCard.querySelector('.nn-voice-panel__wave');
    completedCard.classList.add('is-speaker-cycle-resting');
    if (completedWave && typeof completedWave.setVoicePanelWavePaused === 'function') {
      completedWave.setVoicePanelWavePaused(true);
    }
    window.setTimeout(function() {
      if (!roomSwitch.isConnected) return;
      roomSwitch.classList.remove('is-room-switch-hover');
      roomSwitch.classList.add('is-speaker-cycle-paused');
      window.setTimeout(function() {
        if (!roomSwitch.isConnected) return;
        roomSwitch.classList.add('is-speaker-cycle-jump');
        roomSwitch.classList.remove('is-speaker-cycle-paused');
        requestAnimationFrame(function() {
          if (!roomSwitch.isConnected) return;
          roomSwitch.classList.remove('is-speaker-cycle-jump');
          completedCard.classList.remove('is-speaker-cycle-resting');
          if (completedWave && typeof completedWave.setVoicePanelWavePaused === 'function') {
            completedWave.setVoicePanelWavePaused(false);
          }
          speakerCard.dispatchEvent(new CustomEvent('voice-panel:speaker-cycle-restart', {
            bubbles: false
          }));
        });
      }, 2000);
    }, restDelay);
  });
  top.appendChild(roomSwitch);

  const leave = document.createElement('button');
  leave.type = 'button';
  leave.className = 'nn-voice-panel__leave';
  leave.setAttribute('aria-label', '离开语音房');
  leave.innerHTML = '<i class="nnicon nicon-a-ExitVoice-filltuichuyuyin-mianxing-pc"></i><span class="nn-voice-panel__leave-tooltip">退出语音房</span>';
  leave.insertBefore(createVoicePanelLeaveAnimation(), leave.querySelector('.nn-voice-panel__leave-tooltip'));
  leave.addEventListener('mouseenter', function() {
    const mark = leave.querySelector('.nn-voice-panel__leave-animation-mark');
    if (!mark) return;
    mark.style.animation = 'none';
    void mark.offsetHeight;
    mark.style.animation = '';
  });
  leave.addEventListener('click', function() {
    if (collapseOnLeave) {
      root.classList.add('is-voice-room-hidden');
    }
    if (typeof onLeave === 'function') {
      onLeave({
        panel: root,
        collapsed: collapseOnLeave
      });
    }
    root.dispatchEvent(new CustomEvent('voice-panel:leave', {
      bubbles: true,
      detail: {
        panel: root,
        collapsed: collapseOnLeave
      }
    }));
  });
  top.appendChild(leave);

  card.appendChild(top);
  root.appendChild(card);

  const divider = document.createElement('div');
  divider.className = 'nn-voice-panel__divider';
  root.appendChild(divider);

  const bar = document.createElement('div');
  bar.className = 'nn-voice-panel__bar';

  const back = document.createElement('button');
  back.type = 'button';
  back.className = 'nn-voice-panel__back nn-tooltip-primitive';
  back.setAttribute('aria-label', '开启沉浸');
  back.innerHTML = '<i class="nnicon nicon-a-Arrow2left-linejiantouzuo-xianxing"></i><span class="nn-tooltip nn-tooltip-top-left"><span class="nn-tooltip-text">开启沉浸</span><span class="nn-tooltip-beak"></span></span>';
  back.addEventListener('click', function() {
    const isImmersive = back.classList.toggle('is-turned');
    const tooltip = back.querySelector('.nn-tooltip-text');
    const label = isImmersive ? '关闭沉浸' : '开启沉浸';
    back.setAttribute('aria-label', label);
    if (tooltip) tooltip.textContent = label;
  });
  bar.appendChild(back);

  const speaker = document.createElement('span');
  speaker.className = 'nn-voice-panel__speaker';
  const userPill = document.createElement('div');
  userPill.className = 'nn-voice-panel__user-pill';
  const speakerImg = createVoicePanelAvatarElement({
    src: speakerAvatar,
    size: 24,
    className: 'nn-voice-panel__user-avatar',
    text: speakerName
  });
  userPill.appendChild(speakerImg);
  if (showOnline) {
    let currentStatus = VoicePanelOnlineStatusOptions[0];
    userPill.setAttribute('role', 'button');
    userPill.setAttribute('tabindex', '0');
    userPill.setAttribute('aria-haspopup', 'menu');
    userPill.setAttribute('aria-expanded', 'false');

    const status = document.createElement('span');
    status.className = 'nn-voice-panel__user-status';
    let statusDot = createVoicePanelStatusBadge(currentStatus.badgeVariant, 10);
    statusDot.classList.add('nn-voice-panel__user-status-dot');
    const statusText = document.createElement('span');
    statusText.textContent = currentStatus.label;
    status.appendChild(statusDot);
    status.appendChild(statusText);
    userPill.appendChild(status);

    function syncOnlineStatus(nextStatus) {
      currentStatus = nextStatus;
      const nextDot = createVoicePanelStatusBadge(currentStatus.badgeVariant, 10);
      nextDot.classList.add('nn-voice-panel__user-status-dot');
      status.replaceChild(nextDot, statusDot);
      statusDot = nextDot;
      statusText.textContent = currentStatus.label;
      statusMenu.querySelectorAll('.nn-dropdown-item').forEach(function(itemEl) {
        itemEl.classList.toggle('is-selected', itemEl.dataset.value === currentStatus.value);
      });
      userPill.setAttribute('aria-label', currentStatus.label);
    }

    function closeStatusMenu() {
      userPill.classList.remove('is-open');
      root.classList.remove('is-status-menu-open');
      userPill.setAttribute('aria-expanded', 'false');
    }

    const statusMenu = createVoicePanelOnlineStatusMenu({
      currentValue: currentStatus.value,
      onChange: function(nextStatus) {
        syncOnlineStatus(nextStatus);
        closeStatusMenu();
      }
    });
    userPill.appendChild(statusMenu);
    userPill.setAttribute('aria-label', currentStatus.label);
    userPill.addEventListener('click', function(event) {
      if (statusMenu.contains(event.target)) return;
      event.stopPropagation();
      const isOpen = userPill.classList.toggle('is-open');
      root.classList.toggle('is-status-menu-open', isOpen);
      userPill.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    userPill.addEventListener('keydown', function(event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      event.stopPropagation();
      const isOpen = userPill.classList.toggle('is-open');
      root.classList.toggle('is-status-menu-open', isOpen);
      userPill.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    document.addEventListener('click', closeStatusMenu);
  } else {
  }
  speaker.appendChild(userPill);
  bar.appendChild(speaker);

  const controlWrap = document.createElement('div');
  controlWrap.className = 'nn-voice-panel__control-wrap';
  controlWrap.appendChild(createVoicePanelVolumeControl({ type: 'mic', value: 50 }));
  controlWrap.appendChild(createVoicePanelVolumeControl({ type: 'sound', value: 50 }));
  controlWrap.appendChild(createVoicePanelControl('nicon-a-Sharedscreen-linegongxiangpingmu-xianxing', '共享屏幕'));
  controlWrap.appendChild(createVoicePanelControl('nicon-a-BGM2-linefenweiyin2-xianxing', '开启BGM'));

  function syncVoiceRoomControlAvailability() {
    const isHidden = root.classList.contains('is-voice-room-hidden');
    controlWrap.querySelectorAll('.nn-voice-panel__control--screen, .nn-voice-panel__control--bgm').forEach(function(control) {
      control.setAttribute('aria-disabled', isHidden ? 'true' : 'false');
    });
  }

  syncVoiceRoomControlAvailability();
  if (typeof MutationObserver !== 'undefined') {
    const roomStateObserver = new MutationObserver(syncVoiceRoomControlAvailability);
    roomStateObserver.observe(root, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  controlWrap.appendChild(createVoicePanelPushControl({
    type: 'voice',
    key: 'R',
    tooltipText: '说话感应'
  }));
  bar.appendChild(controlWrap);

  root.appendChild(bar);
  root.setLaunchState = function(nextState) {
    setLaunchWorkflowState(nextState, 0);
  };
  root.setLaunchProgress = function(nextProgress) {
    launchButton.setVoicePanelLaunchProgress(nextProgress);
  };
  root.getLaunchState = function() {
    return launchButton.getVoicePanelLaunchState();
  };
  root.getLaunchProgress = function() {
    return launchButton.getVoicePanelLaunchProgress();
  };
  root.launchButton = launchButton;
  root.gameListButton = gameListButton;
  return root;
}

function renderVoicePanel(container, options = {}) {
  if (typeof container === 'string') {
    container = document.querySelector(container);
  }
  if (!container) return;
  container.innerHTML = '';
  container.appendChild(createVoicePanel(options));
}

if (typeof window !== 'undefined') {
  window.injectVoicePanelStyles = injectVoicePanelStyles;
  window.createVoicePanel = createVoicePanel;
  window.createVoicePanelVolumeControl = createVoicePanelVolumeControl;
  window.createVoicePanelPushControl = createVoicePanelPushControl;
  window.createVoicePanelTaskbar = createVoicePanelTaskbar;
  window.createVoicePanelGameLaunchCard = createVoicePanelGameLaunchCard;
  window.createVoicePanelGameListPopover = createVoicePanelGameListPopover;
  window.renderVoicePanel = renderVoicePanel;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectVoicePanelStyles,
    createVoicePanel,
    createVoicePanelVolumeControl,
    createVoicePanelPushControl,
    createVoicePanelTaskbar,
    createVoicePanelGameLaunchCard,
    createVoicePanelGameListPopover,
    renderVoicePanel
  };
}
