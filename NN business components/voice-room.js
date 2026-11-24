const VoiceRoomStyles = `
  .nn-voice-room-action-group {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space16);
    width: 48px;
    overflow: visible;
    font-family: var(--font-family-main);
  }

  .nn-voice-room-live-broadcast {
    container-type: inline-size;
    position: relative;
    width: min(100%, var(--nn-voice-room-live-broadcast-width, 500px));
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: var(--border-radius-4r);
    background: var(--Neutral-1);
    color: var(--Neutral-0);
    font-family: var(--font-family-main);
    isolation: isolate;
  }

  .nn-voice-room-live-broadcast.is-compact-preview {
    position: absolute;
    inset: var(--space0);
    width: 100%;
    height: 100%;
    aspect-ratio: auto;
  }

  .nn-voice-room-live-broadcast__media {
    position: absolute;
    inset: var(--space0);
    z-index: -1;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .nn-voice-room-live-broadcast__media--video {
    background: var(--Neutral-1);
  }

  .nn-voice-room-live-broadcast__status {
    position: absolute;
    top: var(--space6);
    right: var(--space6);
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space4);
    height: 24px;
    padding: var(--space4) var(--space6);
    border-radius: var(--border-radius-2r);
    background: var(--Black-A50);
    color: var(--Neutral-0);
    font-size: 12px;
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    box-sizing: border-box;
  }

  .nn-voice-room-live-broadcast__status-dot {
    width: 6px;
    height: 6px;
    flex: 0 0 6px;
    border-radius: 50%;
    background: var(--Red);
  }

  .nn-voice-room-live-broadcast__hint {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space4);
    width: 124px;
    height: 36px;
    border-radius: var(--border-radius-2r);
    background: var(--Black-A50);
    color: var(--Neutral-0);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-body);
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: opacity 0.12s ease;
  }

  .nn-voice-room-live-broadcast__hint-gesture {
    position: relative;
    display: inline-flex;
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    flex: 0 0 var(--icon-size-x10);
  }

  .nn-voice-room-live-broadcast__hint-gesture img {
    position: absolute;
    display: block;
    pointer-events: none;
  }

  .nn-voice-room-live-broadcast__hint-ring-outer {
    top: var(--space0);
    left: 22.5%;
    width: 55%;
    height: 55%;
    transform-origin: center;
  }

  .nn-voice-room-live-broadcast__hint-ring-inner {
    top: 13.75%;
    left: 36.25%;
    width: 27.5%;
    height: 27.5%;
    transform-origin: center;
  }

  .nn-voice-room-live-broadcast__hint-hand {
    top: 33.333%;
    left: 16.667%;
    width: 66.666%;
    height: 66.666%;
    transform-origin: center bottom;
  }

  .nn-voice-room-live-broadcast:hover .nn-voice-room-live-broadcast__hint,
  .nn-voice-room-live-broadcast.is-hover-preview .nn-voice-room-live-broadcast__hint {
    opacity: 1;
  }

  .nn-voice-room-live-broadcast:hover .nn-voice-room-live-broadcast__hint-ring-outer,
  .nn-voice-room-live-broadcast.is-hover-preview .nn-voice-room-live-broadcast__hint-ring-outer {
    animation: nn-voice-room-live-broadcast-ring-pulse 1.1s ease-in-out infinite alternate;
  }

  .nn-voice-room-live-broadcast:hover .nn-voice-room-live-broadcast__hint-ring-inner,
  .nn-voice-room-live-broadcast.is-hover-preview .nn-voice-room-live-broadcast__hint-ring-inner {
    animation: nn-voice-room-live-broadcast-ring-pulse 0.9s ease-in-out 0.14s infinite alternate;
  }

  .nn-voice-room-live-broadcast:hover .nn-voice-room-live-broadcast__hint-hand,
  .nn-voice-room-live-broadcast.is-hover-preview .nn-voice-room-live-broadcast__hint-hand {
    animation: nn-voice-room-live-broadcast-hand-float 0.9s ease-in-out infinite alternate;
  }

  @keyframes nn-voice-room-live-broadcast-ring-pulse {
    from { transform: scale(0.94); }
    to { transform: scale(1.06); }
  }

  @keyframes nn-voice-room-live-broadcast-hand-float {
    from { transform: translateY(var(--space0)); }
    to { transform: translateY(calc(-1 * var(--space2))); }
  }

  @media (prefers-reduced-motion: reduce) {
    .nn-voice-room-live-broadcast:hover .nn-voice-room-live-broadcast__hint-ring-outer,
    .nn-voice-room-live-broadcast:hover .nn-voice-room-live-broadcast__hint-ring-inner,
    .nn-voice-room-live-broadcast:hover .nn-voice-room-live-broadcast__hint-hand,
    .nn-voice-room-live-broadcast.is-hover-preview .nn-voice-room-live-broadcast__hint-ring-outer,
    .nn-voice-room-live-broadcast.is-hover-preview .nn-voice-room-live-broadcast__hint-ring-inner,
    .nn-voice-room-live-broadcast.is-hover-preview .nn-voice-room-live-broadcast__hint-hand {
      animation: none;
    }
  }

  .nn-voice-room-live-broadcast__user-icon .nnicon {
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    font-size: var(--icon-size-x10);
    line-height: var(--icon-size-x10);
  }

  .nn-voice-room-live-broadcast__controls {
    position: absolute;
    right: var(--space0);
    bottom: var(--space0);
    left: var(--space0);
    z-index: 1;
    display: flex;
    align-items: center;
    height: 52px;
    padding: var(--space10);
    background: var(--Black-A50);
    box-sizing: border-box;
  }

  .nn-voice-room-live-broadcast__control-row {
    display: flex;
    align-items: center;
    gap: var(--space4);
    width: 100%;
    min-width: 0;
  }

  .nn-voice-room-live-broadcast__user {
    display: flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
    height: 24px;
    flex: 1 1 auto;
    overflow: hidden;
  }

  .nn-voice-room-live-broadcast__user-icon {
    display: inline-flex;
    flex: 0 0 var(--icon-size-x10);
    color: var(--Neutral-0);
  }

  .nn-voice-room-live-broadcast__user-name {
    min-width: 0;
    overflow: hidden;
    color: var(--Neutral-0);
    font-size: 16px;
    font-weight: var(--font-weight-medium);
    line-height: 22px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-voice-room-live-broadcast__level {
    display: block;
    width: 24px;
    height: 24px;
    flex: 0 0 24px;
    object-fit: contain;
  }

  .nn-voice-room-live-broadcast__actions {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
    flex: 0 0 auto;
  }

  .nn-voice-room-live-broadcast__action {
    height: 32px;
    padding: var(--space6) var(--space8);
    border: 0;
    border-radius: var(--border-radius-8r);
    background: transparent;
    color: var(--White-A70);
    font-family: var(--font-family-main);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
    white-space: nowrap;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-voice-room-live-broadcast__action:hover,
  .nn-voice-room-live-broadcast__action:focus-visible {
    color: var(--Neutral-0);
  }

  .nn-voice-room-live-broadcast__action:focus-visible {
    outline: 1px solid var(--Neutral-0);
    outline-offset: -1px;
  }

  .nn-voice-room-live-broadcast__action.is-selected {
    color: var(--Neutral-0);
  }

  .nn-voice-room-floating-live-broadcast {
    position: relative;
    width: min(100%, var(--nn-voice-room-floating-live-broadcast-width, 232px));
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    background: var(--Neutral-1);
    box-shadow: var(--shadow-lg);
    color: var(--Neutral-0);
    font-family: var(--font-family-main);
    isolation: isolate;
  }

  .nn-voice-room-floating-live-broadcast__media {
    position: absolute;
    inset: var(--space0);
    z-index: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: var(--Neutral-1);
    object-fit: cover;
    pointer-events: none;
  }

  .nn-voice-room-floating-live-broadcast__overlay {
    position: absolute;
    inset: var(--space0);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--Black-A60);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.12s ease;
  }

  .nn-voice-room-floating-live-broadcast:hover .nn-voice-room-floating-live-broadcast__overlay,
  .nn-voice-room-floating-live-broadcast:focus-within .nn-voice-room-floating-live-broadcast__overlay {
    opacity: 1;
    pointer-events: auto;
  }

  .nn-voice-room-floating-live-broadcast__playback {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x16);
    height: var(--icon-size-x16);
    padding: var(--space0);
    border: 0;
    background: transparent;
    color: var(--Neutral-0);
    cursor: pointer;
    font-size: var(--icon-size-x16);
    line-height: 1;
  }

  .nn-voice-room-floating-live-broadcast__playback .nnicon {
    font-size: inherit;
    line-height: 1;
  }

  .nn-voice-room-floating-live-broadcast__playback:hover,
  .nn-voice-room-floating-live-broadcast__playback:focus-visible {
    background: transparent;
    color: var(--Neutral-0);
  }

  .nn-voice-room-floating-live-broadcast__user {
    position: absolute;
    top: var(--space0);
    left: var(--space0);
    z-index: 2;
    display: flex;
    align-items: center;
    width: 100%;
    height: 32px;
    padding: var(--space6) var(--space10);
    box-sizing: border-box;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.12s ease;
  }

  .nn-voice-room-floating-live-broadcast:hover .nn-voice-room-floating-live-broadcast__user,
  .nn-voice-room-floating-live-broadcast:focus-within .nn-voice-room-floating-live-broadcast__user {
    opacity: 1;
  }

  .nn-voice-room-floating-live-broadcast__user-name {
    overflow: hidden;
    color: var(--Neutral-0);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-body);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @container (max-width: 360px) {
    .nn-voice-room-live-broadcast__level {
      display: none;
    }
  }

  .nn-voice-room-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: clamp(140px, var(--nn-voice-room-card-width, 300px), 400px);
    min-width: 140px;
    max-width: 400px;
    overflow: hidden;
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-4r);
    background: var(--gray-1);
    color: var(--gray-3);
    font-family: var(--font-family-main);
    box-sizing: border-box;
  }

  button.nn-voice-room-card {
    padding: var(--space0);
    text-align: left;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-voice-room-card__image {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    flex: 0 0 auto;
    overflow: hidden;
    background: var(--gray-1);
  }

  .nn-voice-room-card__user-image {
    position: absolute;
    inset: var(--space0);
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  .nn-voice-room-card__seat {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 86.67%;
    aspect-ratio: 1 / 1;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  .nn-voice-room-card__seat::before {
    display: none;
  }

  .nn-voice-room-card__seat img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .dark-mode .nn-voice-room-card__seat img {
    filter: invert(1);
  }

  .nn-voice-room-card__corner {
    position: absolute;
    top: var(--space6);
    left: var(--space6);
    z-index: 3;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    overflow: hidden;
    border-radius: var(--border-radius-4r) var(--space0) var(--border-radius-4r) var(--space0);
    background: var(--gray-10);
    color: var(--gray-7);
    font-size: 14px;
    font-weight: var(--font-weight-bold);
    line-height: 16px;
    box-sizing: border-box;
  }

  .nn-voice-room-card.is-speaking .nn-voice-room-card__corner {
    background: var(--Neutral-1);
    color: var(--White-A90);
  }

  .nn-voice-room-card__corner .nnicon {
    font-size: var(--icon-size-x10);
    font-weight: var(--font-weight-normal);
    line-height: var(--icon-size-x10);
  }

  .nn-voice-room-card__footer {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space4);
    width: 100%;
    height: 74px;
    flex: 0 0 74px;
    padding: var(--space12);
    background: transparent;
    box-sizing: border-box;
  }

  .nn-voice-room-card.is-speaking .nn-voice-room-card__footer {
    background: var(--gray-1);
  }

  .nn-voice-room-card.is-empty .nn-voice-room-card__footer {
    justify-content: flex-end;
    gap: var(--space10);
    padding: var(--space12) var(--space12) var(--space20);
  }

  .nn-voice-room-card__hint {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space4);
    max-width: 100%;
    opacity: 0;
    color: var(--gray-7);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
    white-space: nowrap;
    transition: opacity 0.12s ease;
  }

  .nn-voice-room-card.is-permission .nn-voice-room-card__hint {
    color: var(--gray-6);
  }

  .nn-voice-room-card:hover .nn-voice-room-card__hint,
  .nn-voice-room-card.is-hover-preview .nn-voice-room-card__hint {
    opacity: 1;
  }

  .nn-voice-room-card__hint .nnicon {
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    flex: 0 0 var(--icon-size-x10);
    font-size: var(--icon-size-x10);
    line-height: var(--icon-size-x10);
  }

  .nn-voice-room-card__join-button.nn-btn {
    width: 100%;
    max-width: 360px;
  }

  .nn-voice-room-card.is-guest .nn-voice-room-card__footer {
    justify-content: flex-end;
  }

  .nn-voice-room-card__user {
    display: flex;
    align-items: center;
    min-width: 0;
    width: 100%;
    height: 24px;
    overflow: hidden;
  }

  .nn-voice-room-card__name {
    display: block;
    min-width: 0;
    overflow: hidden;
    color: var(--gray-3);
    font-size: 16px;
    font-weight: var(--font-weight-normal);
    line-height: 22px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-voice-room-card__live-share-icon {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    margin-left: var(--space4);
    flex: 0 0 var(--icon-size-x8);
    color: var(--Esports-Blue);
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-voice-room-card.is-live-share-collapsed {
    cursor: pointer;
  }

  .nn-voice-room-card__status {
    display: flex;
    align-items: center;
    gap: var(--space4);
    width: 100%;
    min-height: 20px;
    overflow: hidden;
  }

  .nn-voice-room-card__badge {
    display: block;
    height: 20px;
    width: auto;
    max-width: 100%;
    flex: 0 0 auto;
    object-fit: contain;
  }

  .nn-voice-room-action {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: var(--space0);
    width: 48px;
    height: 48px;
    padding: var(--space6) var(--space4) var(--space4);
    border: 0;
    border-radius: var(--border-radius-4r);
    --nn-voice-room-action-bg: var(--Esports-Blue);
    background: var(--nn-voice-room-action-bg);
    color: var(--Neutral-0);
    font-family: var(--font-family-main);
    cursor: pointer;
    box-sizing: border-box;
    appearance: none;
    -webkit-appearance: none;
    transition: background-color 0.16s ease, transform 0.16s ease;
  }

  .nn-voice-room-action.is-full-image {
    justify-content: center;
    padding: var(--space0);
  }

  .nn-voice-room-action__full-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: fill;
    pointer-events: none;
  }

  .nn-voice-room-action:hover,
  .nn-voice-room-action.is-hover {
    background:
      linear-gradient(var(--gray-8), var(--gray-8)),
      var(--nn-voice-room-action-bg);
  }

  .nn-voice-room-action:active {
    transform: translateY(1px);
  }

  .nn-voice-room-action.is-danger {
    --nn-voice-room-action-bg: color-mix(in srgb, var(--Red) 90%, var(--Black-A90));
    background: var(--nn-voice-room-action-bg);
  }

  .nn-voice-room-action.is-danger:hover,
  .nn-voice-room-action.is-danger.is-hover {
    background:
      linear-gradient(var(--gray-8), var(--gray-8)),
      var(--nn-voice-room-action-bg);
  }

  .nn-voice-room-action__icon {
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

  .nn-voice-room-action__icon .nnicon {
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-voice-room-action__gift {
    display: block;
    width: 32px;
    height: 32px;
    margin-bottom: var(--space4);
    object-fit: contain;
    pointer-events: none;
  }

  .nn-voice-room-action__label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20px;
    overflow: hidden;
    color: currentColor;
    font-size: 14px;
    font-weight: var(--font-weight-semibold);
    line-height: 20px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-voice-room-action__label-image {
    display: block;
    width: 28px;
    height: 20px;
    object-fit: contain;
    pointer-events: none;
  }

  .nn-voice-room-action__badge {
    position: absolute;
    top: calc(var(--space4) * -1);
    right: calc(var(--space8) * -1);
    z-index: 3;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 16px;
    height: 16px;
    padding: var(--space0) var(--space2);
    border: 2px solid var(--gray-1);
    border-radius: 10px;
    background: var(--Red);
    color: var(--Neutral-0);
    font-size: 10px;
    font-weight: var(--font-weight-medium);
    line-height: 12px;
    box-sizing: border-box;
  }

  .nn-voice-room-mic {
    position: relative;
    width: 48px;
    height: 48px;
    overflow: visible;
  }

  .nn-voice-room-mic > .nn-voice-room-action {
    z-index: 15;
  }

  .nn-voice-room-mic.is-popover-open {
    z-index: 30;
  }

  .nn-voice-room-mic__hover-zone {
    position: absolute;
    right: calc(var(--space8) * -1);
    bottom: var(--space0);
    z-index: 10;
    display: none;
    width: 316px;
    height: 420px;
    pointer-events: auto;
  }

  .nn-voice-room-mic.is-host.is-popover-open .nn-voice-room-mic__hover-zone {
    display: block;
  }

  .nn-voice-room-mic-tip {
    position: absolute;
    right: var(--space0);
    bottom: calc(100% + var(--space8));
    z-index: 18;
    display: inline-flex;
    align-items: center;
    gap: var(--space6);
    max-width: 260px;
    padding: var(--space8);
    border: 1px solid var(--Esports-Blue-LD);
    border-radius: var(--border-radius-4r);
    background: var(--gray-2);
    box-shadow: 0 12px 18px var(--shadow);
    box-sizing: border-box;
    animation: nn-voice-room-mic-tip-float-in 0.22s ease-out both;
    pointer-events: none;
  }

  .nn-voice-room-mic-tip.is-leaving {
    animation: nn-voice-room-mic-tip-float-out 0.18s ease-in both;
  }

  .nn-voice-room-mic-tip__avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    flex: 0 0 20px;
    overflow: hidden;
    border-radius: 5px;
  }

  .nn-voice-room-mic-tip__avatar img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .nn-voice-room-mic-tip__name,
  .nn-voice-room-mic-tip__text {
    display: block;
    min-width: 0;
    overflow: hidden;
    font-size: 16px;
    line-height: 22px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-voice-room-mic-tip__name {
    max-width: 120px;
    color: var(--gray-4);
    font-weight: var(--font-weight-medium);
  }

  .nn-voice-room-mic-tip__text {
    color: var(--gray-5);
    font-weight: var(--font-weight-normal);
  }

  .nn-voice-room-invite-toast.nn-toast {
    position: absolute;
    right: var(--space0);
    bottom: calc(100% + var(--space8));
    z-index: 24;
    width: 278px;
    max-height: none;
    overflow: hidden;
    background: var(--gray-2);
    animation: nn-voice-room-mic-tip-float-in 0.22s ease-out both;
  }

  .nn-voice-room-invite-toast .nn-toast__body {
    gap: var(--space0);
    padding: var(--space24) var(--space24) var(--space16);
  }

  .nn-voice-room-invite-toast .nn-toast__content {
    gap: var(--space10);
  }

  .nn-voice-room-invite-toast__content {
    display: flex;
    align-items: center;
    gap: var(--space6);
    width: 100%;
    min-width: 0;
  }

  .nn-voice-room-invite-toast__avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    flex: 0 0 20px;
    overflow: hidden;
    border-radius: 5px;
  }

  .nn-voice-room-invite-toast__avatar img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .nn-voice-room-invite-toast__text {
    display: flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
    overflow: hidden;
    color: var(--gray-6);
    font-size: 16px;
    font-weight: var(--font-weight-normal);
    line-height: 22px;
    white-space: nowrap;
  }

  .nn-voice-room-invite-toast__name {
    max-width: 96px;
    overflow: hidden;
    color: var(--gray-4);
    font-weight: var(--font-weight-medium);
    text-overflow: ellipsis;
  }

  .nn-voice-room-invite-toast__message {
    flex: 0 0 auto;
  }

  .nn-voice-room-invite-toast .nn-toast__footer {
    padding: var(--space0) var(--space24) var(--space24);
  }

  .nn-voice-room-invite-toast .nn-toast__footer-slot {
    gap: var(--space16);
  }

  .nn-voice-room-invite-toast .nn-toast__footer-slot .nn-btn {
    min-width: 86px;
    min-height: 32px;
  }

  .nn-voice-room-invite-toast__progress {
    position: absolute;
    left: var(--space0);
    bottom: var(--space0);
    width: 100%;
    height: 4px;
    background: var(--Esports-Blue);
    transform-origin: left center;
    animation: nn-voice-room-invite-countdown var(--nn-voice-room-invite-duration, 30s) linear forwards;
    pointer-events: none;
  }

  @keyframes nn-voice-room-invite-countdown {
    from {
      transform: scaleX(1);
    }

    to {
      transform: scaleX(0);
    }
  }

  @keyframes nn-voice-room-mic-tip-float-in {
    from {
      opacity: 0;
      transform: translateY(var(--space8)) scale(0.98);
    }

    to {
      opacity: 1;
      transform: translateY(var(--space0)) scale(1);
    }
  }

  @keyframes nn-voice-room-mic-tip-float-out {
    from {
      opacity: 1;
      transform: translateY(var(--space0)) scale(1);
    }

    to {
      opacity: 0;
      transform: translateY(calc(var(--space8) * -1)) scale(0.98);
    }
  }

  @keyframes nn-voice-room-mic-popover-float-in {
    from {
      opacity: 0;
      transform: translateY(var(--space8)) scale(0.98);
    }

    to {
      opacity: 1;
      transform: translateY(var(--space0)) scale(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .nn-voice-room-mic-tip,
    .nn-voice-room-invite-toast,
    .nn-voice-room-invite-toast__progress,
    .nn-voice-room-mic-popover.nn-dropdown-panel {
      animation: none;
    }
  }

  .nn-voice-room-mic-popover.nn-dropdown-panel {
    position: absolute;
    top: auto;
    left: auto;
    right: var(--space0);
    bottom: calc(100% + var(--space8));
    z-index: 20;
    width: 300px;
    box-sizing: border-box;
    color: var(--gray-3);
    transform-origin: right bottom;
  }

  .nn-voice-room-mic.is-popover-open .nn-voice-room-mic-popover {
    display: flex;
    animation: nn-voice-room-mic-popover-float-in 0.12s ease-out both;
  }

  .nn-voice-room-mic:hover .nn-voice-room-mic-popover {
    display: flex;
    animation: nn-voice-room-mic-popover-float-in 0.12s ease-out both;
  }

  .nn-voice-room-mic-popover.is-animation-muted {
    animation: none !important;
  }

  .nn-voice-room-mic-popover .nn-dropdown-panel-content {
    position: static;
    gap: var(--space8);
    align-items: flex-start;
  }

  .nn-voice-room-mic-popover.is-empty .nn-dropdown-panel-content {
    gap: var(--space8);
  }

  .nn-voice-room-mic-popover__header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--space4);
    width: 100%;
    min-height: 18px;
    padding: var(--space4) var(--space4) var(--space0);
    box-sizing: border-box;
  }

  .nn-voice-room-mic-popover__title {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    min-width: 0;
    font-size: 14px;
    font-weight: var(--font-weight-semibold);
    line-height: 18px;
    color: var(--gray-3);
  }

  .nn-voice-room-mic-popover__count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 18px;
    height: 18px;
    padding: var(--space0) var(--space4);
    border-radius: 99px;
    background: var(--gray-9);
    color: var(--gray-6);
    font-size: 10px;
    font-weight: var(--font-weight-medium);
    line-height: 12px;
    box-sizing: border-box;
  }

  .nn-voice-room-mic-queue {
    display: flex;
    flex-direction: column;
    gap: var(--space2);
    width: 100%;
    max-height: none;
    overflow: visible;
  }

  .nn-voice-room-mic-queue__item.nn-dropdown-item {
    display: flex;
    align-items: center;
    gap: var(--space8);
    width: 100%;
    min-width: 0;
    height: 36px;
    min-height: 36px;
    padding: var(--space4);
    border-radius: var(--border-radius-2r);
    box-sizing: border-box;
    cursor: default;
  }

  .nn-voice-room-mic-queue__item.nn-dropdown-item.is-editable:hover,
  .nn-voice-room-mic-queue__item.nn-dropdown-item.is-drag-over {
    background: var(--gray-10);
  }

  .nn-voice-room-mic-queue__item.nn-dropdown-item:hover {
    background: transparent;
  }

  .nn-voice-room-mic-queue__item.nn-dropdown-item.is-self,
  .nn-voice-room-mic-queue__item.nn-dropdown-item.is-self:hover,
  .nn-voice-room-mic-queue__item.nn-dropdown-item.is-self.is-drag-over {
    background: color-mix(in srgb, var(--Esports-Blue-dark) 10%, transparent);
  }

  .nn-voice-room-mic-queue__item.nn-dropdown-item.is-invite-pending,
  .nn-voice-room-mic-queue__item.nn-dropdown-item.is-invite-pending:hover,
  .nn-voice-room-mic-queue__item.nn-dropdown-item.is-invite-pending.is-drag-over {
    background: color-mix(in srgb, var(--Purple) 10%, transparent);
  }

  .nn-voice-room-mic-queue__item.is-dragging {
    opacity: 0.55;
  }

  .nn-voice-room-mic-queue__user {
    display: flex;
    align-items: center;
    gap: var(--space6);
    min-width: 0;
    flex: 1 1 auto;
  }

  .nn-voice-room-mic-queue__drag {
    position: relative;
    display: none;
    width: 14px;
    height: 16px;
    flex: 0 0 14px;
    border: 0;
    background: transparent;
    color: var(--gray-6);
    cursor: grab;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-voice-room-mic-queue__drag::before {
    content: "";
    position: absolute;
    left: 4px;
    top: 3px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: currentColor;
    box-shadow:
      0 5px 0 currentColor,
      0 10px 0 currentColor,
      5px 0 0 currentColor,
      5px 5px 0 currentColor,
      5px 10px 0 currentColor;
  }

  .nn-voice-room-mic-queue__item.is-editable .nn-voice-room-mic-queue__drag {
    display: inline-flex;
  }

  .nn-voice-room-mic-queue__rank {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    flex: 0 0 16px;
    border-radius: var(--border-radius-2r);
    background: var(--gray-9);
    color: var(--gray-6);
    font-size: 12px;
    font-weight: var(--font-weight-semibold);
    line-height: 16px;
  }

  .nn-voice-room-mic-queue__avatar {
    display: block;
    width: 20px;
    height: 20px;
    flex: 0 0 20px;
    border-radius: 5px;
    object-fit: cover;
  }

  .nn-voice-room-mic-queue__name {
    display: block;
    min-width: 0;
    overflow: hidden;
    color: var(--gray-5);
    font-size: 16px;
    font-weight: var(--font-weight-normal);
    line-height: 22px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-voice-room-mic-queue__item.is-self .nn-voice-room-mic-queue__name {
    color: var(--gray-3);
  }

  .nn-voice-room-mic-queue__item.is-invite-pending .nn-voice-room-mic-queue__name {
    color: var(--gray-3);
  }

  .nn-voice-room-mic-queue__status.nn-label {
    min-height: 20px;
    margin-left: auto;
  }

  .nn-voice-room-mic-queue__take {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 24px;
    padding: var(--space4) var(--space8);
    border: 0;
    border-radius: var(--border-radius-2r);
    background: var(--Esports-Blue);
    color: var(--Neutral-0);
    font-size: 12px;
    font-weight: var(--font-weight-medium);
    line-height: 16px;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  .nn-voice-room-mic-queue__take:hover {
    background:
      linear-gradient(var(--gray-8), var(--gray-8)),
      var(--Esports-Blue);
  }

  .nn-voice-room-mic-queue__actions {
    display: none;
    align-items: center;
    gap: var(--space4);
    flex: 0 0 auto;
  }

  .nn-voice-room-mic-queue__item.is-editable:hover .nn-voice-room-mic-queue__actions,
  .nn-voice-room-mic-queue__item.is-editable:focus-within .nn-voice-room-mic-queue__actions {
    display: inline-flex;
  }

  .nn-voice-room-mic-queue__action.nn-btn {
    min-height: 24px;
    padding: var(--space4) var(--space8);
    font-size: 12px;
    line-height: 16px;
  }

  .nn-voice-room-mic-empty-slot {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: var(--space0) var(--space2);
    box-sizing: border-box;
  }

  .nn-voice-room-mic-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space10);
    font-family: var(--font-family-main);
    text-align: center;
    box-sizing: border-box;
  }

  .nn-voice-room-mic-empty .nn-empty__image-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 182.875px;
    height: 110px;
    margin: var(--space0) auto;
    overflow: hidden;
  }

  .nn-voice-room-mic-empty .nn-empty__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .nn-voice-room-mic-empty .nn-empty__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space4);
    width: 100%;
    text-align: center;
  }

  .nn-voice-room-mic-empty .nn-empty__title {
    width: 100%;
    margin: var(--space0);
    color: var(--gray-5);
    font-size: 16px;
    font-weight: var(--font-weight-medium);
    line-height: 22px;
  }

  .nn-voice-room-mic-empty .nn-empty__description {
    width: 100%;
    margin: var(--space0);
    color: var(--gray-7);
    font-size: 14px;
    font-weight: var(--font-weight-normal);
    line-height: 20px;
  }
`;

const VoiceRoomDefaultQueue = [
  { name: 'Yan', avatar: '../image/Avatar/头像1098.png' },
  { name: '哐当一响灵感来了', avatar: '../image/Avatar/头像619.png' },
  { name: '暖暖阳光min', avatar: '../image/Avatar/头像624.png' },
  { name: '怕黑的cat', avatar: '../image/Avatar/头像546.png' },
  { name: 'HOUO FU', avatar: '../image/Avatar/头像746.png' },
  { name: 'rainbow', avatar: '../image/Avatar/头像829.png' },
  { name: '青春扬', avatar: '../image/Avatar/头像800.png' },
  { name: '一行', avatar: '../image/Avatar/头像551.png' }
];

function injectVoiceRoomStyles() {
  if (typeof window !== 'undefined' && typeof window.injectDropdownMenuStyles === 'function') {
    window.injectDropdownMenuStyles();
  }
  if (typeof window !== 'undefined' && typeof window.injectButtonStyles === 'function') {
    window.injectButtonStyles();
  }
  if (typeof window !== 'undefined' && typeof window.injectToastStyles === 'function') {
    window.injectToastStyles();
  }
  if (document.getElementById('nn-voice-room-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-voice-room-styles';
  style.textContent = VoiceRoomStyles;
  document.head.appendChild(style);
}

function createVoiceRoomIcon(iconClass) {
  const icon = document.createElement('span');
  icon.className = 'nn-voice-room-action__icon';
  icon.innerHTML = `<i class="nnicon ${iconClass}"></i>`;
  return icon;
}

function createVoiceRoomLiveBroadcast(options = {}) {
  injectVoiceRoomStyles();

  const {
    width = 500,
    image = '',
    mediaStream = null,
    user = {
      name: 'ArtMagic',
      levelImage: '../image/User Level/Digital badge/ULVN14.svg'
    },
    liveLabel = '直播中',
    qualityLabel = '高清',
    replaceLabel = '更换窗口',
    fullscreenLabel = '全屏',
    endLabel = '结束直播',
    hover = false,
    hoverHint = '双击缩小屏幕',
    compactPreview = false,
    paused = false,
    onReplace = null,
    onFullscreen = null,
    onEnd = null,
    onDoubleClick = null
  } = options;

  const root = document.createElement('div');
  const liveUser = user && typeof user === 'object' ? user : {};
  root.className = [
    'nn-voice-room-live-broadcast',
    compactPreview ? 'is-compact-preview' : '',
    hover ? 'is-hover-preview' : ''
  ].filter(Boolean).join(' ');
  root.style.setProperty(
    '--nn-voice-room-live-broadcast-width',
    typeof width === 'number' ? `${width}px` : width
  );
  root.setAttribute('aria-label', liveLabel);
  if (typeof onDoubleClick === 'function') {
    root.addEventListener('dblclick', onDoubleClick);
  }

  if (mediaStream) {
    const media = document.createElement('video');
    media.className = 'nn-voice-room-live-broadcast__media';
    media.classList.add('nn-voice-room-live-broadcast__media--video');
    media.autoplay = !paused;
    media.muted = true;
    media.playsInline = true;
    media.srcObject = mediaStream;
    root.appendChild(media);
    const playMedia = function() {
      const playback = media.play();
      if (playback && typeof playback.catch === 'function') playback.catch(function() {});
    };
    if (!paused) {
      media.addEventListener('loadedmetadata', playMedia, { once: true });
      playMedia();
    }
  } else if (image) {
    const media = document.createElement('img');
    media.className = 'nn-voice-room-live-broadcast__media';
    media.src = image;
    media.alt = '';
    root.appendChild(media);
  }

  const hint = document.createElement('div');
  hint.className = 'nn-voice-room-live-broadcast__hint';
  hint.setAttribute('aria-hidden', 'true');
  const hintGesture = document.createElement('span');
  hintGesture.className = 'nn-voice-room-live-broadcast__hint-gesture';
  hintGesture.setAttribute('aria-hidden', 'true');
  [
    ['nn-voice-room-live-broadcast__hint-ring-outer', '../image/Community/live-broadcast-double-click-ring-outer.svg'],
    ['nn-voice-room-live-broadcast__hint-ring-inner', '../image/Community/live-broadcast-double-click-ring-inner.svg'],
    ['nn-voice-room-live-broadcast__hint-hand', '../image/Community/live-broadcast-double-click-hand.svg']
  ].forEach(function(asset) {
    const image = document.createElement('img');
    image.className = asset[0];
    image.src = asset[1];
    image.alt = '';
    hintGesture.appendChild(image);
  });
  const hintText = document.createElement('span');
  hintText.textContent = hoverHint;
  hint.append(hintGesture, hintText);
  root.appendChild(hint);

  if (!compactPreview) {
    const status = document.createElement('div');
    status.className = 'nn-voice-room-live-broadcast__status';
    const statusDot = document.createElement('span');
    statusDot.className = 'nn-voice-room-live-broadcast__status-dot';
    statusDot.setAttribute('aria-hidden', 'true');
    const statusText = document.createElement('span');
    statusText.textContent = liveLabel;
    status.append(statusDot, statusText);
    root.appendChild(status);

    const controls = document.createElement('div');
    controls.className = 'nn-voice-room-live-broadcast__controls';
    controls.addEventListener('dblclick', function(event) {
      event.stopPropagation();
    });
    const controlRow = document.createElement('div');
    controlRow.className = 'nn-voice-room-live-broadcast__control-row';

    const userInfo = document.createElement('div');
    userInfo.className = 'nn-voice-room-live-broadcast__user';
    const userIcon = document.createElement('span');
    userIcon.className = 'nn-voice-room-live-broadcast__user-icon';
    userIcon.innerHTML = '<i class="nnicon nicon-a-Sharedscreen-linegongxiangpingmu-xianxing"></i>';
    const userName = document.createElement('span');
    userName.className = 'nn-voice-room-live-broadcast__user-name';
    userName.textContent = liveUser.name || 'ArtMagic';
    userInfo.append(userIcon, userName);
    if (liveUser.levelImage) {
      const level = document.createElement('img');
      level.className = 'nn-voice-room-live-broadcast__level';
      level.src = liveUser.levelImage;
      level.alt = liveUser.levelAlt || '用户等级';
      userInfo.appendChild(level);
    }
    controlRow.appendChild(userInfo);

    const actions = document.createElement('div');
    actions.className = 'nn-voice-room-live-broadcast__actions';
    [
      { label: qualityLabel, selected: true },
      { label: replaceLabel, onClick: onReplace },
      { label: fullscreenLabel, onClick: onFullscreen },
      { label: endLabel, onClick: onEnd }
    ].forEach(function(action) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = [
        'nn-voice-room-live-broadcast__action',
        action.selected ? 'is-selected' : ''
      ].filter(Boolean).join(' ');
      button.textContent = action.label;
      button.setAttribute('aria-label', action.label);
      if (typeof action.onClick === 'function') button.addEventListener('click', action.onClick);
      actions.appendChild(button);
    });
    controlRow.appendChild(actions);
    controls.appendChild(controlRow);
    root.appendChild(controls);
  }

  return root;
}

function createVoiceRoomFloatingLiveBroadcast(options = {}) {
  injectVoiceRoomStyles();

  const {
    width = 232,
    image = '',
    mediaStream = null,
    user = { name: 'ArtMagic' },
    paused = false,
    onTogglePlayback = null
  } = options;
  const liveUser = user && typeof user === 'object' ? user : {};
  const root = document.createElement('div');
  root.className = 'nn-voice-room-floating-live-broadcast';
  root.style.setProperty(
    '--nn-voice-room-floating-live-broadcast-width',
    typeof width === 'number' ? `${width}px` : width
  );

  let media = null;
  if (mediaStream) {
    media = document.createElement('video');
    media.autoplay = !paused;
    media.muted = true;
    media.playsInline = true;
    media.srcObject = mediaStream;
  } else if (image) {
    media = document.createElement('img');
    media.src = image;
    media.alt = '';
  }
  if (media) {
    media.className = 'nn-voice-room-floating-live-broadcast__media';
    root.appendChild(media);
    if (media instanceof HTMLVideoElement && !paused) {
      const playMedia = function() {
        const playback = media.play();
        if (playback && typeof playback.catch === 'function') playback.catch(function() {});
      };
      media.addEventListener('loadedmetadata', playMedia, { once: true });
      playMedia();
    }
  }

  const overlay = document.createElement('div');
  overlay.className = 'nn-voice-room-floating-live-broadcast__overlay';
  const playbackButton = document.createElement('button');
  playbackButton.type = 'button';
  playbackButton.className = 'nn-voice-room-floating-live-broadcast__playback';
  const playbackIcon = document.createElement('i');
  let isPaused = Boolean(paused);

  function syncPlaybackButton() {
    playbackButton.setAttribute('aria-label', isPaused ? '播放屏幕分享' : '暂停屏幕分享');
    playbackIcon.className = `nnicon ${isPaused ? 'nicon-a-play-filebofang-mianxing' : 'nicon-a-Suspend-linezanting-xianxing'}`;
  }

  playbackButton.addEventListener('click', function(event) {
    event.stopPropagation();
    isPaused = !isPaused;
    if (media instanceof HTMLVideoElement) {
      if (isPaused) {
        media.pause();
      } else {
        const playback = media.play();
        if (playback && typeof playback.catch === 'function') playback.catch(function() {});
      }
    }
    syncPlaybackButton();
    if (typeof onTogglePlayback === 'function') onTogglePlayback(isPaused, media);
  });
  syncPlaybackButton();
  playbackButton.appendChild(playbackIcon);
  overlay.appendChild(playbackButton);
  root.appendChild(overlay);

  const userInfo = document.createElement('div');
  userInfo.className = 'nn-voice-room-floating-live-broadcast__user';
  const userName = document.createElement('span');
  userName.className = 'nn-voice-room-floating-live-broadcast__user-name';
  userName.textContent = `${liveUser.name || 'ArtMagic'}-屏幕分享`;
  userInfo.appendChild(userName);
  root.appendChild(userInfo);

  root.setAttribute('aria-label', `${liveUser.name || 'ArtMagic'}的屏幕分享`);
  return root;
}

function createVoiceRoomActionButton(options = {}) {
  injectVoiceRoomStyles();

  const {
    label = '',
    labelImage = '',
    fullImage = '',
    hoverImage = '',
    iconClass = '',
    image = '',
    badge = null,
    danger = false,
    className = '',
    ariaLabel = label,
    onClick = null
  } = options;

  const button = document.createElement('button');
  let hoverTargetImage = null;
  let defaultImage = '';
  button.type = 'button';
  button.className = [
    'nn-voice-room-action',
    fullImage ? 'is-full-image' : '',
    danger ? 'is-danger' : '',
    className
  ].filter(Boolean).join(' ');
  button.setAttribute('aria-label', ariaLabel || label || '功能按钮');

  if (fullImage) {
    const fullImg = document.createElement('img');
    fullImg.className = 'nn-voice-room-action__full-image';
    fullImg.src = fullImage;
    fullImg.alt = '';
    button.appendChild(fullImg);
    hoverTargetImage = fullImg;
    defaultImage = fullImage;
  } else if (image) {
    const img = document.createElement('img');
    img.className = 'nn-voice-room-action__gift';
    img.src = image;
    img.alt = '';
    button.appendChild(img);
  } else if (iconClass) {
    button.appendChild(createVoiceRoomIcon(iconClass));
  }

  if (label && !fullImage) {
    const text = document.createElement('span');
    text.className = 'nn-voice-room-action__label';
    if (labelImage) {
      const labelImg = document.createElement('img');
      labelImg.className = 'nn-voice-room-action__label-image';
      labelImg.src = labelImage;
      labelImg.alt = '';
      text.appendChild(labelImg);
    } else {
      text.textContent = label;
    }
    button.appendChild(text);
  }

  if (badge !== null && badge !== undefined && badge !== '') {
    const badgeEl = document.createElement('span');
    badgeEl.className = 'nn-voice-room-action__badge';
    badgeEl.textContent = String(badge);
    button.appendChild(badgeEl);
  }

  if (hoverImage && hoverTargetImage) {
    button.addEventListener('mouseenter', function() {
      hoverTargetImage.src = hoverImage;
    });
    button.addEventListener('mouseleave', function() {
      hoverTargetImage.src = defaultImage;
    });
  }

  if (typeof onClick === 'function') {
    button.addEventListener('click', onClick);
  }

  return button;
}

function createVoiceRoomCardIcon(iconClass) {
  const icon = document.createElement('span');
  icon.className = 'nn-voice-room-card__icon';
  icon.innerHTML = `<i class="nnicon ${iconClass}"></i>`;
  return icon;
}

function getVoiceRoomMicCardJoinButtonSize(width) {
  if (typeof width === 'number' && Number.isFinite(width)) {
    return width < 250 ? 'default' : 'large';
  }

  if (typeof width === 'string') {
    const trimmedWidth = width.trim();
    const pxMatch = trimmedWidth.match(/^(\d+(?:\.\d+)?)px$/);
    if (pxMatch) {
      return Number(pxMatch[1]) < 250 ? 'default' : 'large';
    }
  }

  return 'large';
}

function createVoiceRoomMicCardJoinButton(onClick, size = 'large') {
  const icon = '<i class="nnicon nicon-a-ConnectMiclianmai-xianxing"></i>';
  if (typeof window !== 'undefined' && typeof window.createButton === 'function') {
    return window.createButton({
      text: '连麦',
      variant: 'primary',
      level: 'primary',
      size,
      icon,
      className: 'nn-voice-room-card__join-button',
      onClick
    });
  }

  const button = document.createElement('button');
  button.type = 'button';
  button.className = `nn-voice-room-card__join-button nn-btn nn-btn-primary-primary nn-btn-${size} nn-btn-icon-left`;
  button.innerHTML = `${icon}<span>连麦</span>`;
  if (typeof onClick === 'function') button.addEventListener('click', onClick);
  return button;
}

function syncVoiceRoomMicCardJoinButtonSize(card, button, fallbackWidth) {
  const update = function() {
    const renderedWidth = card.getBoundingClientRect().width;
    const size = getVoiceRoomMicCardJoinButtonSize(renderedWidth || fallbackWidth);
    button.classList.toggle('nn-btn-default', size === 'default');
    button.classList.toggle('nn-btn-large', size === 'large');
  };

  update();
  if (typeof ResizeObserver === 'undefined') return;

  const observer = new ResizeObserver(update);
  observer.observe(card);
  card._voiceRoomMicCardJoinButtonObserver = observer;
}

function createVoiceRoomMicCard(options = {}) {
  injectVoiceRoomStyles();

  const {
    state = 'empty',
    permission = false,
    hover = false,
    index = '1',
    showIndex = true,
    cornerType = null,
    width = 300,
    seatImage = '../image/Community/chair.svg',
    user = {
      name: 'ArtMagic',
      avatar: '../image/Avatar/头像619.png',
      levelImage: '../image/User Level/Digital badge/ULVN20.svg',
      badges: [{ src: '../image/User Level/Digital badge/ULVN20.svg', alt: '用户等级' }]
    },
    screenSharing = false,
    screenShareCollapsed = false,
    screenShareMediaStream = null,
    onClick = null
  } = options;

  const isSpeaking = state === 'speaking' || state === 'occupied';
  const isGuest = state === 'guest';
  const isEmpty = !isSpeaking && !isGuest;
  const resolvedCornerType = cornerType || (isGuest ? 'mic' : showIndex ? 'index' : 'none');
  const userBadges = Array.isArray(user.badges) && user.badges.length
    ? user.badges
    : user.levelImage
      ? [{ src: user.levelImage, alt: '用户等级' }]
      : [];
  const isClickable = (isEmpty && permission) || isGuest || (isSpeaking && screenShareCollapsed);
  const root = document.createElement(isClickable ? 'button' : 'div');
  root.className = [
    'nn-voice-room-card',
    isEmpty ? 'is-empty' : '',
    isGuest ? 'is-guest' : '',
    isSpeaking ? 'is-speaking' : '',
    screenSharing ? 'is-screen-sharing' : '',
    screenShareCollapsed ? 'is-live-share-collapsed' : '',
    permission ? 'is-permission' : 'is-no-permission',
    hover ? 'is-hover-preview' : ''
  ].filter(Boolean).join(' ');
  root.style.setProperty('--nn-voice-room-card-width', typeof width === 'number' ? `${width}px` : width);
  if (root.tagName === 'BUTTON') {
    root.type = 'button';
    root.setAttribute('aria-label', screenShareCollapsed ? '单击放大屏幕' : isGuest ? '连麦' : '点击上麦');
    if (typeof onClick === 'function') root.addEventListener('click', onClick);
  }

  const image = document.createElement('div');
  image.className = 'nn-voice-room-card__image';
  root.appendChild(image);

  if (isSpeaking) {
    if (screenShareCollapsed && screenShareMediaStream) {
      image.appendChild(createVoiceRoomLiveBroadcast({
        width: '100%',
        mediaStream: screenShareMediaStream,
        compactPreview: true,
        hoverHint: '单击放大屏幕'
      }));
    } else {
      const avatar = document.createElement('img');
      avatar.className = 'nn-voice-room-card__user-image';
      avatar.src = user.avatar || '../image/Avatar/default.png';
      avatar.alt = user.name || '';
      image.appendChild(avatar);
    }
  } else {
    const seat = document.createElement('div');
    seat.className = 'nn-voice-room-card__seat';
    const seatImg = document.createElement('img');
    seatImg.src = seatImage;
    seatImg.alt = '';
    seat.appendChild(seatImg);
    root.appendChild(seat);
  }

  if (resolvedCornerType !== 'none') {
    const corner = document.createElement('div');
    corner.className = 'nn-voice-room-card__corner';
    if (resolvedCornerType === 'mic') {
      corner.classList.add('is-mic');
      corner.innerHTML = '<i class="nnicon nicon-a-ConnectMiclianmai-xianxing"></i>';
    } else {
      corner.textContent = String(index);
    }
    image.appendChild(corner);
  }

  const footer = document.createElement('div');
  footer.className = 'nn-voice-room-card__footer';
  root.appendChild(footer);

  if (isSpeaking) {
    const userRow = document.createElement('div');
    userRow.className = 'nn-voice-room-card__user';
    const name = document.createElement('span');
    name.className = 'nn-voice-room-card__name';
    name.textContent = user.name || 'ArtMagic';
    userRow.appendChild(name);
    if (screenSharing) {
      const shareIcon = document.createElement('i');
      shareIcon.className = 'nnicon nicon-a-Sharedscreen-linegongxiangpingmu-xianxing nn-voice-room-card__live-share-icon';
      shareIcon.setAttribute('aria-label', '正在分享屏幕');
      userRow.appendChild(shareIcon);
    }
    footer.appendChild(userRow);

    const status = document.createElement('div');
    status.className = 'nn-voice-room-card__status';
    userBadges.forEach(function(badge) {
      if (!badge || !badge.src) return;
      const badgeImage = document.createElement('img');
      badgeImage.className = 'nn-voice-room-card__badge';
      badgeImage.src = badge.src;
      badgeImage.alt = badge.alt || '';
      status.appendChild(badgeImage);
    });
    footer.appendChild(status);
  } else if (isGuest) {
    const joinButton = createVoiceRoomMicCardJoinButton(function(event) {
      if (event) event.stopPropagation();
      if (typeof onClick === 'function') onClick(event);
    }, getVoiceRoomMicCardJoinButtonSize(width));
    footer.appendChild(joinButton);
    syncVoiceRoomMicCardJoinButtonSize(root, joinButton, width);
  } else {
    const hint = document.createElement('div');
    hint.className = 'nn-voice-room-card__hint';
    hint.appendChild(createVoiceRoomCardIcon(permission ? 'nicon-a-micadd-lineshangmai-xianxing' : 'nicon-a-prohibit-linejinzhizanwu-xianxing'));
    const text = document.createElement('span');
    text.textContent = permission ? '点击上麦' : '上麦需要权限';
    hint.appendChild(text);
    footer.appendChild(hint);
  }

  return root;
}

function createVoiceRoomQueueActionButton(options = {}) {
  const {
    text,
    variant = 'system',
    level = 'secondary',
    onClick = null
  } = options;

  if (typeof window !== 'undefined' && typeof window.createButton === 'function') {
    return window.createButton({
      text,
      variant,
      level,
      size: 'small',
      className: 'nn-voice-room-mic-queue__action',
      onClick
    });
  }

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'nn-voice-room-mic-queue__action';
  button.textContent = text;
  if (typeof onClick === 'function') button.addEventListener('click', onClick);
  return button;
}

function createVoiceRoomMicQueueItem(item, index, options = {}) {
  const {
    editable = false,
    showQueueTag = true,
    showInviteStatus = true,
    onAction = null,
    onInvite = null,
    onRemove = null
  } = options;
  const isInvitePending = showInviteStatus && item.inviteStatus === 'pending';

  const row = document.createElement('div');
  row.className = [
    'nn-dropdown-item',
    'nn-voice-room-mic-queue__item',
    showQueueTag && item.isSelf ? 'is-self' : '',
    isInvitePending ? 'is-invite-pending' : '',
    editable ? 'is-editable' : ''
  ].filter(Boolean).join(' ');
  row.dataset.index = String(index);
  if (editable) {
    row.draggable = true;
  }

  const user = document.createElement('div');
  user.className = 'nn-voice-room-mic-queue__user';

  if (editable) {
    const drag = document.createElement('span');
    drag.className = 'nn-voice-room-mic-queue__drag';
    drag.setAttribute('aria-hidden', 'true');
    user.appendChild(drag);
  }

  const rank = document.createElement('span');
  rank.className = 'nn-voice-room-mic-queue__rank';
  rank.textContent = String(index + 1);
  user.appendChild(rank);

  const avatar = document.createElement('img');
  avatar.className = 'nn-voice-room-mic-queue__avatar';
  avatar.src = item.avatar;
  avatar.alt = '';
  user.appendChild(avatar);

  const name = document.createElement('span');
  name.className = 'nn-voice-room-mic-queue__name';
  name.textContent = item.name;
  user.appendChild(name);

  row.appendChild(user);

  if (isInvitePending) {
    const status = typeof window !== 'undefined' && typeof window.createLabel === 'function'
      ? window.createLabel({
        text: '邀请中等待确认',
        color: 'purple',
        type: 'soft',
        size: 'default',
        className: 'nn-voice-room-mic-queue__status'
      })
      : document.createTextNode('邀请中等待确认');
    row.appendChild(status);
  } else if (showQueueTag && item.tag) {
    const tag = typeof window !== 'undefined' && typeof window.createLabel === 'function'
      ? window.createLabel({
        text: item.tag,
        color: 'purple',
        type: 'soft',
        size: 'default'
      })
      : document.createTextNode(item.tag);
    row.appendChild(tag);
  }

  if (item.action) {
    const action = document.createElement('button');
    action.type = 'button';
    action.className = 'nn-voice-room-mic-queue__take';
    action.textContent = item.action;
    action.addEventListener('click', function(event) {
      event.stopPropagation();
      if (typeof onAction === 'function') {
        onAction(item, index);
      }
    });
    row.appendChild(action);
  }

  if (editable && !isInvitePending) {
    const actions = document.createElement('div');
    actions.className = 'nn-voice-room-mic-queue__actions';

    actions.appendChild(createVoiceRoomQueueActionButton({
      text: '邀请',
      variant: 'primary',
      level: 'primary',
      onClick: function(event) {
        event.stopPropagation();
        if (typeof onInvite === 'function') onInvite(item, index);
      }
    }));

    actions.appendChild(createVoiceRoomQueueActionButton({
      text: '移出',
      variant: 'system',
      level: 'secondary',
      onClick: function(event) {
        event.stopPropagation();
        if (typeof onRemove === 'function') onRemove(item, index);
      }
    }));

    row.appendChild(actions);
  }

  return row;
}

function createVoiceRoomMicTip(user = {}, tipText = '加入了队列', isLeaving = false) {
  const tip = document.createElement('div');
  tip.className = `nn-voice-room-mic-tip${isLeaving ? ' is-leaving' : ''}`;
  tip.setAttribute('role', 'status');
  const showIdentity = user.showIdentity !== false;

  if (showIdentity) {
    const avatarWrap = document.createElement('span');
    avatarWrap.className = 'nn-voice-room-mic-tip__avatar';
    if (typeof window !== 'undefined' && typeof window.createAvatar === 'function') {
      avatarWrap.appendChild(window.createAvatar({
        src: user.avatar || '',
        text: user.name || '',
        size: 20
      }));
    } else {
      const avatar = document.createElement('img');
      avatar.src = user.avatar || '';
      avatar.alt = '';
      avatarWrap.appendChild(avatar);
    }
    tip.appendChild(avatarWrap);

    const name = document.createElement('span');
    name.className = 'nn-voice-room-mic-tip__name';
    name.textContent = user.name || '';
    tip.appendChild(name);
  }

  const text = document.createElement('span');
  text.className = 'nn-voice-room-mic-tip__text';
  text.textContent = tipText;
  tip.appendChild(text);

  return tip;
}

function createVoiceRoomInviteToast(options = {}) {
  const {
    inviter = {},
    duration = 30,
    onAccept = null,
    onReject = null
  } = options;
  const content = document.createElement('div');
  content.className = 'nn-voice-room-invite-toast__content';

  const avatarWrap = document.createElement('span');
  avatarWrap.className = 'nn-voice-room-invite-toast__avatar';
  if (typeof window !== 'undefined' && typeof window.createAvatar === 'function') {
    avatarWrap.appendChild(window.createAvatar({
      src: inviter.avatar || '',
      text: inviter.name || '',
      size: 20
    }));
  } else {
    const avatar = document.createElement('img');
    avatar.src = inviter.avatar || '';
    avatar.alt = '';
    avatarWrap.appendChild(avatar);
  }
  content.appendChild(avatarWrap);

  const text = document.createElement('span');
  text.className = 'nn-voice-room-invite-toast__text';
  const name = document.createElement('span');
  name.className = 'nn-voice-room-invite-toast__name';
  name.textContent = inviter.name || '主播';
  text.appendChild(name);
  const message = document.createElement('span');
  message.className = 'nn-voice-room-invite-toast__message';
  message.textContent = '邀请你连麦';
  text.appendChild(message);
  content.appendChild(text);

  const toastOptions = {
    title: '',
    content,
    showHeader: false,
    showClose: false,
    footer: {
      layout: 'double-horizontal',
      buttons: [
        {
          text: '同意',
          variant: 'system',
          level: 'primary',
          size: 'default',
          onClick: onAccept
        },
        {
          text: '拒绝',
          variant: 'system',
          level: 'secondary',
          size: 'default',
          onClick: onReject
        }
      ]
    },
    className: 'nn-voice-room-invite-toast'
  };
  const toast = typeof window !== 'undefined' && typeof window.createToast === 'function'
    ? window.createToast(toastOptions)
    : content;

  if (toast instanceof HTMLElement) {
    toast.style.setProperty('--nn-voice-room-invite-duration', `${Math.max(Number(duration) || 30, 1)}s`);
    const progress = document.createElement('div');
    progress.className = 'nn-voice-room-invite-toast__progress';
    toast.appendChild(progress);
  }

  return toast;
}

function createVoiceRoomMicEmptyState(descriptionText = '申请后可直接上麦') {
  if (typeof window !== 'undefined' && typeof window.createEmptyPopup === 'function') {
    return window.createEmptyPopup({
      type: 'placeholder',
      title: '当前无人排队',
      description: descriptionText,
      showActions: false,
      className: 'nn-voice-room-mic-empty'
    });
  }

  const empty = document.createElement('div');
  empty.className = 'nn-empty nn-empty--popup nn-voice-room-mic-empty';

  const imageWrap = document.createElement('div');
  imageWrap.className = 'nn-empty__image-wrap';
  const image = document.createElement('img');
  image.className = 'nn-empty__image';
  image.src = '../image/Empty/类型=3,状态=空占位.png';
  image.alt = '当前无人排队';
  imageWrap.appendChild(image);
  empty.appendChild(imageWrap);

  const textWrap = document.createElement('div');
  textWrap.className = 'nn-empty__text';
  const title = document.createElement('p');
  title.className = 'nn-empty__title';
  title.textContent = '当前无人排队';
  textWrap.appendChild(title);
  const description = document.createElement('p');
  description.className = 'nn-empty__description';
  description.textContent = descriptionText;
  textWrap.appendChild(description);
  empty.appendChild(textWrap);

  return empty;
}

function createVoiceRoomMicPopover(options = {}) {
  const {
    queue = VoiceRoomDefaultQueue,
    queueCount = queue.length,
    state = 'idle',
    emptyDescription = state === 'host' ? '用户申请后可直接上麦' : '申请后可直接上麦',
    editable = false,
    showQueueTag = true,
    showInviteStatus = true,
    onAction = null,
    onInvite = null,
    onRemove = null,
    onReorder = null,
    onDragChange = null,
    animated = true
  } = options;

  const normalizedQueue = queue.map(function(item) {
    return Object.assign({}, item);
  });
  const isEmptyQueue = queueCount <= 0 || normalizedQueue.length === 0;

  const popover = document.createElement('div');
  popover.className = `nn-dropdown-panel nn-voice-room-mic-popover${isEmptyQueue ? ' is-empty' : ''}`;
  popover.classList.toggle('is-animation-muted', !animated);
  popover.setAttribute('role', 'dialog');
  popover.setAttribute('aria-label', '连麦排队');

  const panelContent = document.createElement('div');
  panelContent.className = 'nn-dropdown-panel-content';

  const header = document.createElement('div');
  header.className = 'nn-voice-room-mic-popover__header';

  const title = document.createElement('div');
  title.className = 'nn-voice-room-mic-popover__title';
  title.appendChild(document.createTextNode('连麦排队'));

  const count = document.createElement('span');
  count.className = 'nn-voice-room-mic-popover__count';
  count.textContent = String(queueCount);
  if (!isEmptyQueue) {
    title.appendChild(count);
  }

  header.appendChild(title);
  panelContent.appendChild(header);

  if (isEmptyQueue) {
    const emptySlot = document.createElement('div');
    emptySlot.className = 'nn-voice-room-mic-empty-slot';
    emptySlot.appendChild(createVoiceRoomMicEmptyState(emptyDescription));
    panelContent.appendChild(emptySlot);
    popover.appendChild(panelContent);
    return popover;
  }

  const queueEl = document.createElement('div');
  queueEl.className = 'nn-dropdown-list nn-voice-room-mic-queue';
  let dragIndex = null;

  if (editable) {
    queueEl.addEventListener('dragstart', function(event) {
      const itemEl = event.target.closest('.nn-voice-room-mic-queue__item');
      if (!itemEl) return;
      dragIndex = Number(itemEl.dataset.index);
      itemEl.classList.add('is-dragging');
      if (typeof onDragChange === 'function') onDragChange(true);
      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', String(dragIndex));
      }
    });

    queueEl.addEventListener('dragover', function(event) {
      const itemEl = event.target.closest('.nn-voice-room-mic-queue__item');
      if (!itemEl || dragIndex === null) return;
      event.preventDefault();
      itemEl.classList.add('is-drag-over');
      if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
    });

    queueEl.addEventListener('dragleave', function(event) {
      const itemEl = event.target.closest('.nn-voice-room-mic-queue__item');
      if (!itemEl || itemEl.contains(event.relatedTarget)) return;
      itemEl.classList.remove('is-drag-over');
    });

    queueEl.addEventListener('drop', function(event) {
      const itemEl = event.target.closest('.nn-voice-room-mic-queue__item');
      if (!itemEl || dragIndex === null) return;
      event.preventDefault();
      const dropIndex = Number(itemEl.dataset.index);
      queueEl.querySelectorAll('.is-drag-over, .is-dragging').forEach(function(el) {
        el.classList.remove('is-drag-over', 'is-dragging');
      });
      if (dropIndex !== dragIndex && typeof onReorder === 'function') {
        onReorder({ fromIndex: dragIndex, toIndex: dropIndex, queue: normalizedQueue.slice() });
      }
      dragIndex = null;
      if (typeof onDragChange === 'function') onDragChange(false);
    });

    queueEl.addEventListener('dragend', function() {
      queueEl.querySelectorAll('.is-drag-over, .is-dragging').forEach(function(el) {
        el.classList.remove('is-drag-over', 'is-dragging');
      });
      dragIndex = null;
      if (typeof onDragChange === 'function') onDragChange(false);
    });
  }

  normalizedQueue.forEach(function(item, index) {
    queueEl.appendChild(createVoiceRoomMicQueueItem(item, index, {
      editable,
      showQueueTag,
      showInviteStatus,
      onAction,
      onInvite,
      onRemove
    }));
  });

  panelContent.appendChild(queueEl);
  popover.appendChild(panelContent);
  return popover;
}

function getVoiceRoomMicButtonConfig(state, queueCount, queueEnabled) {
  if (state === 'waiting') {
    return {
      label: '取消',
      fullImage: '../image/Community/cancel-mic.svg',
      danger: true,
      badge: null
    };
  }

  if (state === 'speaking') {
    return {
      label: '下麦',
      fullImage: '../image/Community/out-mic.svg',
      danger: true,
      badge: null
    };
  }

  return {
    label: '上麦',
    fullImage: '../image/Community/link-mic.svg',
    danger: false,
    badge: queueEnabled && (state === 'host' || state === 'idle') ? Math.min(queueCount, 99) : null
  };
}

function createVoiceRoomMicButton(options = {}) {
  injectVoiceRoomStyles();

  const {
    state = 'idle',
    queue = VoiceRoomDefaultQueue,
    queueCount = queue.length,
    queueEnabled = false,
    open = false,
    interactive = true,
    emptyDescription = state === 'host' ? '用户申请后可直接上麦' : '申请后可直接上麦',
    tipUser = null,
    tipText = '加入了队列',
    tipLeaving = false,
    inviteRequest = null,
    inviteCountdownDuration = 30,
    popoverAnimated = true,
    queueEditable = false,
    showQueueTag = true,
    showInviteStatus = true,
    onQueueReorder = null,
    onQueueInvite = null,
    onQueueRemove = null,
    onInviteAccept = null,
    onInviteReject = null,
    onMicAction = null,
    onStateChange = null
  } = options;

  let currentState = state;
  let isOpen = Boolean(open);
  let closeTimer = null;
  let isQueueDragging = false;
  const wrapper = document.createElement('div');
  wrapper.className = 'nn-voice-room-mic';

  function clearCloseTimer() {
    if (!closeTimer) return;
    window.clearTimeout(closeTimer);
    closeTimer = null;
  }

  function setPopoverOpen(nextOpen) {
    clearCloseTimer();
    const nextOpenState = Boolean(nextOpen) && currentState !== 'speaking';
    if (nextOpenState) closeOtherDropdowns();
    if (isOpen === nextOpenState) return;
    isOpen = nextOpenState;
    render();
    if (typeof onStateChange === 'function') {
      onStateChange({ state: currentState, open: isOpen });
    }
  }

  const closeCurrentDropdown = function() {
    if (isQueueDragging) return;
    clearCloseTimer();
    if (isOpen) {
      isOpen = false;
      render();
    }
  };

  function closeOtherDropdowns() {
    if (typeof window === 'undefined' || !window.__nnDropdownCloseHandlers) return;
    window.__nnDropdownCloseHandlers.forEach(function(closeHandler) {
      if (closeHandler !== closeCurrentDropdown && typeof closeHandler === 'function') {
        closeHandler();
      }
    });
  }

  if (typeof window !== 'undefined') {
    window.__nnDropdownCloseHandlers = window.__nnDropdownCloseHandlers || new Set();
    window.__nnDropdownCloseHandlers.add(closeCurrentDropdown);
    setTimeout(function() {
      document.addEventListener('click', function(event) {
        if (isQueueDragging) return;
        if (!wrapper.contains(event.target)) {
          closeCurrentDropdown();
        }
      });
    }, 0);
  }

  wrapper.addEventListener('mouseenter', function() {
    if (!interactive) return;
    if (inviteRequest) return;
    setPopoverOpen(true);
  });

  wrapper.addEventListener('mouseleave', function() {
    if (!interactive) return;
    if (isQueueDragging) return;
    clearCloseTimer();
    closeTimer = window.setTimeout(function() {
      if (isQueueDragging) return;
      setPopoverOpen(false);
    }, 180);
  });

  function handleQueueDragChange(isDragging) {
    isQueueDragging = Boolean(isDragging);
    if (isQueueDragging) {
      clearCloseTimer();
      if (!isOpen) {
        isOpen = true;
        render();
      }
    }
  }

  function render() {
    wrapper.innerHTML = '';
    if (inviteRequest) {
      isOpen = false;
    }
    wrapper.classList.toggle('is-popover-open', isOpen);
    wrapper.classList.toggle('is-host', currentState === 'host');

    const config = getVoiceRoomMicButtonConfig(currentState, queueCount, queueEnabled);
    const button = createVoiceRoomActionButton(Object.assign({}, config, {
      ariaLabel: config.label,
      onClick: function(event) {
        if (event) event.stopPropagation();
        if (!interactive) return;
        if (typeof onMicAction === 'function') {
          onMicAction({ state: currentState, queueEnabled, queueCount });
          return;
        }

        if (currentState === 'waiting') {
          currentState = 'idle';
          isOpen = false;
        } else if (currentState === 'speaking') {
          currentState = 'idle';
          isOpen = false;
        }

        render();
        if (typeof onStateChange === 'function') {
          onStateChange({ state: currentState, open: isOpen });
        }
      }
    }));

    wrapper.appendChild(button);

    if (tipUser) {
      wrapper.appendChild(createVoiceRoomMicTip(tipUser, tipText, tipLeaving));
    }

    if (inviteRequest) {
      wrapper.appendChild(createVoiceRoomInviteToast({
        inviter: inviteRequest.inviter || {},
        duration: inviteRequest.duration || inviteCountdownDuration,
        onAccept: onInviteAccept,
        onReject: onInviteReject
      }));
    }

    if (currentState === 'host') {
      const hoverZone = document.createElement('div');
      hoverZone.className = 'nn-voice-room-mic__hover-zone';
      hoverZone.setAttribute('aria-hidden', 'true');
      wrapper.appendChild(hoverZone);
    }

    if (currentState !== 'speaking' && !inviteRequest) {
      wrapper.appendChild(createVoiceRoomMicPopover({
        queue: queueEnabled ? queue : [],
        queueCount: queueEnabled ? queueCount : 0,
        state: currentState,
        emptyDescription,
        editable: queueEditable && currentState === 'host',
        showQueueTag,
        showInviteStatus,
        onReorder: onQueueReorder,
        onInvite: onQueueInvite,
        onRemove: onQueueRemove,
        onDragChange: handleQueueDragChange,
        animated: popoverAnimated,
        onAction: function() {
          currentState = 'speaking';
          isOpen = false;
          render();
          if (typeof onStateChange === 'function') {
            onStateChange({ state: currentState, open: isOpen });
          }
        }
      }));
    }
  }

  wrapper.setMicState = function(nextState, nextOpen) {
    currentState = nextState;
    isOpen = Boolean(nextOpen);
    render();
  };

  render();
  return wrapper;
}

function createVoiceRoomActionGroup(options = {}) {
  injectVoiceRoomStyles();

  const {
    perspective = 'user',
    micState = perspective === 'host' ? 'host' : 'idle',
    micOpen = false,
    queueEnabled = false,
    queue = VoiceRoomDefaultQueue,
    queueCount = queue.length,
    emptyDescription = perspective === 'host' ? '用户申请后可直接上麦' : '申请后可直接上麦',
    micTipUser = null,
    micTipText = '加入了队列',
    micTipLeaving = false,
    inviteRequest = null,
    inviteCountdownDuration = 30,
    popoverAnimated = true,
    queueEditable = false,
    showQueueTag = true,
    showInviteStatus = true,
    onQueueReorder = null,
    onQueueInvite = null,
    onQueueRemove = null,
    onInviteAccept = null,
    onInviteReject = null,
    onMicAction = null,
    onStateChange = null,
    showPointsMall = true,
    pointsMallImage = '../image/Animation/Points Mall.png',
    pointsMallHoverImage = '../image/Animation/Points Mall.webp',
    showGift = true,
    giftImage = '../image/Animation/gift.png',
    giftHoverImage = '../image/Animation/gift.webp'
  } = options;

  const group = document.createElement('div');
  group.className = 'nn-voice-room-action-group';

  group.appendChild(createVoiceRoomMicButton({
    state: micState,
    open: micOpen,
    queueEnabled,
    queueCount,
    queue,
    emptyDescription,
    tipUser: micTipUser,
    tipText: micTipText,
    tipLeaving: micTipLeaving,
    inviteRequest,
    inviteCountdownDuration,
    popoverAnimated,
    queueEditable,
    showQueueTag,
    showInviteStatus,
    onQueueReorder,
    onQueueInvite,
    onQueueRemove,
    onInviteAccept,
    onInviteReject,
    onMicAction,
    onStateChange
  }));

  if (showPointsMall) {
    group.appendChild(createVoiceRoomActionButton({
      fullImage: pointsMallImage,
      hoverImage: pointsMallHoverImage,
      ariaLabel: '积分商城'
    }));
  }

  if (showGift) {
    group.appendChild(createVoiceRoomActionButton({
      fullImage: giftImage,
      hoverImage: giftHoverImage,
      ariaLabel: '礼物'
    }));
  }

  return group;
}

function renderVoiceRoomActionGroup(container, options = {}) {
  if (!container) return null;
  container.innerHTML = '';
  const group = createVoiceRoomActionGroup(options);
  container.appendChild(group);
  return group;
}

function renderVoiceRoomMicCard(container, options = {}) {
  if (!container) return null;
  container.innerHTML = '';
  const card = createVoiceRoomMicCard(options);
  container.appendChild(card);
  return card;
}

if (typeof window !== 'undefined') {
  window.VoiceRoomDefaultQueue = VoiceRoomDefaultQueue;
  window.injectVoiceRoomStyles = injectVoiceRoomStyles;
  window.createVoiceRoomActionButton = createVoiceRoomActionButton;
  window.createVoiceRoomLiveBroadcast = createVoiceRoomLiveBroadcast;
  window.createVoiceRoomFloatingLiveBroadcast = createVoiceRoomFloatingLiveBroadcast;
  window.createVoiceRoomMicCard = createVoiceRoomMicCard;
  window.createVoiceRoomMicButton = createVoiceRoomMicButton;
  window.createVoiceRoomInviteToast = createVoiceRoomInviteToast;
  window.createVoiceRoomActionGroup = createVoiceRoomActionGroup;
  window.renderVoiceRoomActionGroup = renderVoiceRoomActionGroup;
  window.renderVoiceRoomMicCard = renderVoiceRoomMicCard;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    injectVoiceRoomStyles,
    createVoiceRoomActionButton,
    createVoiceRoomLiveBroadcast,
    createVoiceRoomFloatingLiveBroadcast,
    createVoiceRoomMicCard,
    createVoiceRoomMicButton,
    createVoiceRoomInviteToast,
    createVoiceRoomActionGroup,
    renderVoiceRoomActionGroup,
    renderVoiceRoomMicCard
  };
}
