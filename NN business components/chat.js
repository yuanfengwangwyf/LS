const ChatStyles = `
  .nn-chat-message {
    display: flex;
    gap: var(--space8);
    align-items: flex-end;
    width: 100%;
    max-width: 960px;
    min-width: 0;
    color: var(--gray-3);
    font-family: var(--font-family-main);
    box-sizing: border-box;
  }

  .nn-chat-message--mine {
    justify-content: flex-end;
  }

  .nn-chat-message__avatar {
    display: flex;
    align-items: flex-start;
    height: 100%;
    flex: 0 0 auto;
  }

  .nn-chat-message__main {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: var(--space4);
    min-width: 0;
  }

  .nn-chat-message--other .nn-chat-message__main {
    align-items: flex-start;
  }

  .nn-chat-message--mine .nn-chat-message__main {
    align-items: flex-end;
  }

  .nn-chat-message__meta {
    display: flex;
    align-items: flex-end;
    gap: var(--space8);
    width: 100%;
    min-width: 0;
  }

  .nn-chat-message--mine .nn-chat-message__meta {
    justify-content: flex-end;
    align-items: center;
  }

  .nn-chat-message__name {
    overflow: hidden;
    color: var(--gray-6);
    font-size: 16px;
    font-weight: var(--font-weight-medium);
    line-height: 22px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-chat-message__time {
    padding-bottom: var(--space2);
    color: var(--gray-7);
    font-size: 12px;
    font-weight: var(--font-weight-medium);
    line-height: 16px;
    white-space: nowrap;
  }

  .nn-chat-message__bubble-row {
    display: flex;
    align-items: flex-end;
    gap: var(--space8);
    width: 100%;
    min-width: 0;
  }

  .nn-chat-message--mine .nn-chat-message__bubble-row {
    justify-content: flex-end;
  }

  .nn-chat-message__bubble {
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
    gap: var(--space6);
    width: fit-content;
    max-width: min(80%, 900px);
    min-width: 0;
    padding: var(--space10);
    border-radius: var(--border-radius-4r, 4px);
    box-sizing: border-box;
  }

  .nn-chat-message--other .nn-chat-message__bubble {
    align-items: flex-end;
    background: var(--gray-10);
  }

  .nn-chat-message--mine .nn-chat-message__bubble {
    align-items: flex-end;
    background:
      linear-gradient(90deg, var(--Black-A6), var(--Black-A6)),
      linear-gradient(90deg, var(--Esports-Blue), var(--Esports-Blue));
  }

  .nn-chat-message__bubble--dragon-king {
    position: relative;
    display: block;
    min-width: 105px;
    min-height: 44px;
    padding:
      var(--space12)
      var(--space60)
      var(--space10)
      calc(var(--space20) + var(--space2));
    overflow: visible;
    background: transparent !important;
    border-radius: var(--space0);
  }

  .nn-chat-message__bubble--dragon-king::before {
    content: '';
    position: absolute;
    top: var(--space4);
    right: var(--space14);
    bottom: 0;
    left: var(--space8);
    z-index: 0;
    border: solid transparent;
    border-width: 14px 28px 14px 14px;
    border-image-slice: 14 28 14 14 fill;
    border-image-width: 14px 28px 14px 14px;
    border-image-repeat: stretch;
    box-sizing: border-box;
    pointer-events: none;
  }

  .nn-chat-message__bubble--dragon-king-lv1::before {
    border-image-source: url('../image/Chat/dragon-king-lv1/bubble-current.svg?v=20260921-opacity-90');
  }

  .nn-chat-message__bubble--dragon-king-lv2,
  .nn-chat-message__bubble--dragon-king-lv3 {
    padding-right: 59px;
  }

  .nn-chat-message__bubble--dragon-king-lv4 {
    min-width: 108px;
    padding-right: 62px;
  }

  .nn-chat-message__bubble--dragon-king-lv5 {
    min-width: 107px;
    padding-right: 59px;
    padding-left: var(--space24);
  }

  .nn-chat-message__bubble--dragon-king-lv2::before,
  .nn-chat-message__bubble--dragon-king-lv3::before,
  .nn-chat-message__bubble--dragon-king-lv4::before,
  .nn-chat-message__bubble--dragon-king-lv5::before {
    right: var(--space12);
  }

  .nn-chat-message__bubble--dragon-king-lv2::before {
    border-image-source: url('../image/Chat/dragon-king-lv2/bubble.svg?v=20260921');
  }

  .nn-chat-message__bubble--dragon-king-lv3::before {
    border-image-source: url('../image/Chat/dragon-king-lv3/bubble.svg?v=20260921');
  }

  .nn-chat-message__bubble--dragon-king-lv4::before {
    top: 5px;
    border-image-source: url('../image/Chat/dragon-king-lv4/bubble.svg?v=20260921');
  }

  .nn-chat-message__bubble--dragon-king-lv5::before {
    border-image-source: url('../image/Chat/dragon-king-lv5/bubble.svg?v=20260921');
  }

  .nn-chat-message__bubble--dragon-king .nn-chat-message__text {
    position: relative;
    z-index: 2;
    color: var(--gray-1);
    font-family: 'MiSans VF', var(--font-family-main);
    font-size: var(--font-size-subtitle);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-subtitle);
  }

  .nn-chat-message__dragon-decoration,
  .nn-chat-message__dragon-level-decoration,
  .nn-chat-message__dragon-character {
    position: absolute;
    z-index: 1;
    display: block;
    pointer-events: none;
  }

  .nn-chat-message__bubble--dragon-king-lv2 .nn-chat-message__dragon-level-decoration--group {
    top: 1.816px;
    left: 2.264px;
    width: 10.009px;
    height: 9.092px;
  }

  .nn-chat-message__dragon-level-decoration--top {
    left: 8.265px;
    width: 2.612px;
    height: 5.331px;
    transform: rotate(-26.41deg);
  }

  .nn-chat-message__dragon-level-decoration--bottom {
    left: 4.223px;
    width: 2.434px;
    height: 5.359px;
    transform: rotate(-57.26deg);
  }

  .nn-chat-message__bubble--dragon-king-lv3 .nn-chat-message__dragon-level-decoration--top,
  .nn-chat-message__bubble--dragon-king-lv5 .nn-chat-message__dragon-level-decoration--top {
    top: 3.255px;
  }

  .nn-chat-message__bubble--dragon-king-lv3 .nn-chat-message__dragon-level-decoration--bottom,
  .nn-chat-message__bubble--dragon-king-lv5 .nn-chat-message__dragon-level-decoration--bottom {
    top: 8.21px;
  }

  .nn-chat-message__bubble--dragon-king-lv4 .nn-chat-message__dragon-level-decoration--top {
    top: 2.755px;
  }

  .nn-chat-message__bubble--dragon-king-lv4 .nn-chat-message__dragon-level-decoration--bottom {
    top: 7.71px;
  }

  .nn-chat-message__dragon-decoration--left {
    top: var(--space2);
    left: var(--space3);
    width: var(--icon-size-x5);
    height: 8px;
  }

  .nn-chat-message__dragon-decoration--right {
    right: var(--space4);
    bottom: var(--space16);
    width: var(--icon-size-x5);
    height: 15px;
  }

  .nn-chat-message__dragon-character {
    right: var(--space0);
    bottom: var(--space0);
    height: 44px;
    width: auto;
    max-width: none;
    object-fit: contain;
  }

  .nn-chat-message__reply {
    display: flex;
    gap: var(--space8);
    align-items: center;
    width: 100%;
    min-width: 0;
  }

  .nn-chat-message__reply-line {
    align-self: stretch;
    width: 3px;
    flex: 0 0 3px;
    background: var(--gray-7);
  }

  .nn-chat-message--mine .nn-chat-message__reply-line {
    background: var(--White-A40);
  }

  .nn-chat-message__reply-content {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: var(--space4);
    min-width: 0;
    font-size: 14px;
    font-weight: var(--font-weight-normal);
  }

  .nn-chat-message__reply-title {
    overflow: hidden;
    color: var(--gray-6);
    font-size: 14px;
    line-height: 20px;
    overflow-wrap: anywhere;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-chat-message__reply-text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    color: var(--gray-7);
    font-size: 14px;
    line-height: 22px;
    overflow-wrap: anywhere;
    text-overflow: ellipsis;
    white-space: normal;
  }

  .nn-chat-message--mine .nn-chat-message__reply-title {
    color: var(--White-A80);
  }

  .nn-chat-message--mine .nn-chat-message__reply-text {
    color: var(--White-A60);
  }

  .nn-chat-message__text {
    width: 100%;
    min-width: 0;
    margin: var(--space0);
    color: var(--gray-5);
    font-size: 16px;
    font-weight: var(--font-weight-normal);
    line-height: 24px;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  .nn-chat-message--mine .nn-chat-message__text {
    color: var(--Neutral-0);
  }

  .nn-chat-message__actions {
    display: flex;
    gap: var(--space4);
    align-items: flex-start;
    flex: 0 0 auto;
    opacity: 0;
    transition: opacity 0.16s ease;
  }

  .nn-chat-message:hover .nn-chat-message__actions,
  .nn-chat-message.is-hover .nn-chat-message__actions {
    opacity: 1;
  }

  .nn-chat-message__action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: var(--space4);
    border: 0;
    border-radius: var(--border-radius-2r);
    background: var(--gray-10);
    color: var(--gray-5);
    cursor: pointer;
    box-sizing: border-box;
    transition:
      background-color 0.16s ease,
      color 0.16s ease;
  }

  .nn-chat-message__action:hover {
    background: var(--gray-9);
    color: var(--gray-3);
  }

  .nn-chat-message__action .nnicon {
    font-size: var(--icon-size-x8);
    line-height: 1;
  }

  .nn-chat-message__read {
    position: absolute;
    right: 24px;
    bottom: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x6);
    height: var(--icon-size-x6);
    color: var(--gray-7);
    font-size: var(--icon-size-x6);
    line-height: 1;
  }

  .nn-chat-message--mine {
    position: relative;
  }

  .nn-chat-message-menu-dropdown.nn-dropdown,
  .nn-chat-message-menu-dropdown.nn-dropdown.nn-dropdown-medium {
    position: fixed;
    z-index: 3000;
    width: 140px;
  }

  .nn-chat-message-menu-dropdown .nn-dropdown-trigger {
    display: none;
  }

  .nn-chat-message-menu-dropdown.nn-dropdown .nn-dropdown-panel {
    position: static;
    top: auto;
    left: auto;
    display: flex;
    width: 100%;
    background: var(--gray-1);
  }

  .nn-chat-message-menu-dropdown .nn-dropdown-list {
    max-height: none;
    overflow: visible;
  }

  .nn-chat-message-menu-dropdown .nn-dropdown-item-leading,
  .nn-chat-message-menu-dropdown .nn-dropdown-item-leading .nnicon {
    width: var(--icon-size-x9);
    height: var(--icon-size-x9);
    flex: 0 0 auto;
    font-size: var(--icon-size-x9);
    line-height: var(--icon-size-x9);
  }

  .nn-chat-voice-message {
    display: flex;
    max-width: 100%;
    min-width: 0;
    color: var(--gray-3);
    font-family: var(--font-family-main);
    box-sizing: border-box;
  }

  .nn-chat-voice-message--system {
    align-items: flex-start;
  }

  .nn-chat-voice-message--padded {
    padding-top: var(--space6);
    padding-bottom: var(--space6);
  }

  .nn-chat-voice-message--center {
    width: 280px;
    justify-content: center;
  }

  .nn-chat-voice-message__pill {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    max-width: 100%;
    min-width: 0;
    padding: var(--space4) var(--space8);
    overflow: hidden;
    border-radius: var(--border-radius-4r);
    background: var(--gray-10);
    box-sizing: border-box;
  }

  .nn-chat-voice-message__badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    flex: 0 0 var(--icon-size-x10);
    overflow: hidden;
  }

  .nn-chat-voice-message__badge img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .nn-chat-voice-message__mini-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    overflow: hidden;
  }

  .nn-chat-voice-message__mini-avatar {
    width: 18px;
    height: 18px;
    border-radius: var(--border-radius-4r);
  }

  .nn-chat-voice-message__mini-avatar img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .nn-chat-voice-message__name,
  .nn-chat-voice-message__text {
    overflow: hidden;
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: 22px;
    overflow-wrap: anywhere;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-chat-voice-message__name {
    color: var(--gray-6);
  }

  .nn-chat-voice-message__text {
    color: var(--gray-3);
  }

  .nn-chat-voice-message__gift-card {
    display: flex;
    align-items: center;
    gap: var(--space10);
    width: 280px;
    height: 72px;
    padding: var(--space10) var(--space16);
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-2r);
    background: transparent;
    box-sizing: border-box;
    transition: background-color 160ms ease;
  }

  .nn-chat-voice-message__gift-card:hover,
  .nn-chat-voice-message__gift-card.is-hover {
    background: var(--gray-10);
  }

  .nn-chat-voice-message__gift-image {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    flex: 0 0 48px;
    overflow: hidden;
  }

  .nn-chat-voice-message__gift-image img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .nn-chat-voice-message__gift-copy {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;
    gap: var(--space8);
    min-width: 0;
  }

  .nn-chat-voice-message__gift-title {
    overflow: hidden;
    color: var(--gray-3);
    font-size: var(--font-size-subtitle);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-subtitle);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-chat-voice-message__gift-action {
    display: inline-flex;
    align-items: center;
    gap: var(--space0);
    max-width: 150px;
    min-width: 0;
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-caption);
  }

  .nn-chat-voice-message__gift-action-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-chat-voice-message__gift-action .nnicon {
    width: var(--icon-size-x6);
    height: var(--icon-size-x6);
    flex: 0 0 var(--icon-size-x6);
    font-size: var(--icon-size-x6);
    line-height: var(--icon-size-x6);
  }

  .nn-chat-voice-message__gift-notice {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 223px;
    min-width: 0;
    padding: var(--space6) var(--space10);
    overflow: hidden;
    column-gap: var(--space4);
    border-radius: var(--border-radius-2r);
    background: var(--gray-10);
    box-sizing: border-box;
  }

  .nn-chat-voice-message__notice-name,
  .nn-chat-voice-message__notice-text,
  .nn-chat-voice-message__notice-mention,
  .nn-chat-voice-message__notice-gift {
    overflow: hidden;
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-chat-voice-message__notice-name,
  .nn-chat-voice-message__notice-gift {
    color: var(--gray-6);
    font-weight: var(--font-weight-medium);
  }

  .nn-chat-voice-message__notice-text {
    color: var(--gray-3);
    font-weight: var(--font-weight-normal);
  }

  .nn-chat-voice-message__notice-mention {
    color: var(--Magenta);
    font-weight: var(--font-weight-medium);
  }

  .nn-chat-voice-message__notice-image {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    flex: 0 0 var(--icon-size-x10);
  }

  .nn-chat-voice-message__notice-image img {
    display: block;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    object-fit: contain;
  }

  .nn-chat-voice-message__recall {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    min-width: 0;
    padding: var(--space8) var(--space10);
    overflow: hidden;
    border-radius: var(--border-radius-20r);
  }

  .nn-chat-voice-message__recall::before {
    position: absolute;
    inset: var(--space0);
    background: var(--gray-1);
    opacity: 0.5;
    content: "";
  }

  .nn-chat-voice-message__recall-text {
    position: relative;
    z-index: 1;
    overflow: hidden;
    color: var(--gray-6);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-chat-send-message {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space2);
    width: 336px;
    max-width: 100%;
    min-width: 0;
    overflow: hidden;
    border-radius: var(--border-radius-2r);
    background: transparent;
    color: var(--gray-4);
    font-family: var(--font-family-main);
    box-sizing: border-box;
    transition: background-color 160ms ease;
  }

  .nn-chat-send-message:hover,
  .nn-chat-send-message.is-hover {
    background: var(--gray-10);
  }

  .nn-chat-send-message--media,
  .nn-chat-send-message--forward {
    gap: var(--space4);
  }

  .nn-chat-send-message__text-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    min-width: 0;
    padding: var(--space8);
    overflow: hidden;
    box-sizing: border-box;
  }

  .nn-chat-send-message__text-block--media {
    padding-bottom: var(--space0);
  }

  .nn-chat-send-message__text-block--reply {
    padding-top: var(--space0);
  }

  .nn-chat-send-message__text-block--forward {
    justify-content: flex-start;
    padding-bottom: var(--space0);
  }

  .nn-chat-send-message__row {
    display: block;
    width: 100%;
    min-width: 0;
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-subtitle);
    overflow-wrap: anywhere;
  }

  .nn-chat-send-message__level {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    margin-right: var(--space4);
    overflow: hidden;
    vertical-align: text-bottom;
  }

  .nn-chat-send-message__level img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .nn-chat-send-message__phone {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    margin-right: var(--space4);
    color: var(--gray-6);
    vertical-align: text-bottom;
  }

  .nn-chat-send-message__phone .nnicon {
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-chat-send-message__inline {
    display: inline;
    min-width: 0;
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-subtitle);
    overflow-wrap: anywhere;
    white-space: normal;
  }

  .nn-chat-send-message__inline--grow {
    min-width: 0;
  }

  .nn-chat-send-message__name,
  .nn-chat-send-message__line {
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-subtitle);
  }

  .nn-chat-send-message__name {
    display: inline;
    color: var(--gray-6);
    white-space: nowrap;
  }

  .nn-chat-send-message__body {
    display: inline;
    color: var(--gray-4);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-subtitle);
    overflow-wrap: anywhere;
    white-space: pre-wrap;
  }

  .nn-chat-send-message__line {
    width: 100%;
    min-width: 0;
    margin: var(--space0);
    color: var(--gray-4);
    overflow-wrap: anywhere;
    white-space: pre-wrap;
  }

  .nn-chat-send-message__row > .nn-equity-community-role {
    margin-right: var(--space4);
    vertical-align: text-bottom;
  }

  .nn-chat-send-message__media {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    min-width: 0;
    padding: var(--space0) var(--space8) var(--space8);
    box-sizing: border-box;
  }

  .nn-chat-send-message__image {
    display: block;
    width: 100%;
    height: 138px;
    overflow: hidden;
    border-radius: var(--border-radius-4r);
    object-fit: cover;
  }

  .nn-chat-send-message__reply {
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 0;
    padding: var(--space2) var(--space8);
    overflow: hidden;
    border-radius: var(--border-radius-8r);
    box-sizing: border-box;
  }

  .nn-chat-send-message__reply-quote {
    display: block;
    width: 40px;
    height: 24px;
    flex: 0 0 40px;
    overflow: hidden;
  }

  .nn-chat-send-message__reply-quote img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .nn-chat-send-message__reply-name,
  .nn-chat-send-message__reply-text {
    overflow: hidden;
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-caption);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-chat-send-message__reply-name {
    flex: 0 0 auto;
    color: var(--Link);
  }

  .nn-chat-send-message__reply-text {
    flex: 1 1 auto;
    min-width: 0;
    color: var(--gray-6);
  }

  .nn-chat-send-message__forward {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    min-width: 0;
    padding: var(--space0) var(--space8) var(--space8);
    box-sizing: border-box;
  }

  .nn-chat-send-message__forward-card {
    display: flex;
    flex-direction: column;
    gap: var(--space10);
    width: 100%;
    min-width: 0;
    padding: var(--space12);
    overflow: hidden;
    border: 1px solid var(--gray-8);
    border-radius: var(--border-radius-4r);
    background: var(--gray-10);
    box-sizing: border-box;
  }

  .nn-chat-send-message__forward-title {
    display: flex;
    align-items: center;
    gap: var(--space4);
    width: 100%;
    min-width: 0;
  }

  .nn-chat-send-message__forward-title::before {
    width: 2.5px;
    height: 12px;
    flex: 0 0 2.5px;
    border-radius: var(--border-radius-8r);
    background: var(--gray-5);
    content: "";
  }

  .nn-chat-send-message__forward-title-text {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    color: var(--gray-5);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-caption);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-chat-send-message__divider {
    width: 100%;
    height: 1px;
    background: var(--gray-10);
  }

  .nn-chat-send-message__forward-content {
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 0;
    padding: var(--space2) var(--space0);
    border-radius: var(--border-radius-12r);
    box-sizing: border-box;
  }

  .nn-chat-send-message__forward-main {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;
    gap: var(--space6);
    min-width: 0;
  }

  .nn-chat-send-message__forward-name {
    overflow: hidden;
    color: var(--gray-3);
    font-size: var(--font-size-subtitle);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-subtitle);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-chat-send-message__game {
    display: flex;
    align-items: center;
    gap: var(--space4);
    width: 100%;
    min-width: 0;
  }

  .nn-chat-send-message__game-icon {
    display: block;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    flex: 0 0 var(--icon-size-x8);
    overflow: hidden;
    border-radius: var(--border-radius-2r);
    object-fit: cover;
  }

  .nn-chat-send-message__game-name {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    color: var(--gray-6);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-body);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-chat-voice-room-message-bar {
    --nn-chat-voice-room-message-bar-width: 232px;
    --nn-chat-voice-room-member-expanded-self-height: 48px;
    --nn-chat-voice-room-member-expanded-self-gap: var(--space2);
    --nn-chat-voice-room-member-panel-bottom-gap: var(--space8);
    position: relative;
    display: flex;
    flex-direction: column;
    width: var(--nn-chat-voice-room-message-bar-width);
    min-width: var(--nn-chat-voice-room-message-bar-width);
    max-width: var(--nn-chat-voice-room-message-bar-width);
    height: 1002px;
    max-height: 100%;
    min-height: 0;
    overflow: visible;
    background: var(--gray-1);
    color: var(--gray-3);
    font-family: var(--font-family-main);
    box-sizing: border-box;
  }

  @container voice-room-message-bar-frame (min-width: 1600px) {
    .nn-chat-voice-room-message-bar {
      --nn-chat-voice-room-message-bar-width: 280px;
    }
  }

  @container voice-room-message-bar-frame (min-width: 2560px) {
    .nn-chat-voice-room-message-bar {
      --nn-chat-voice-room-message-bar-width: 320px;
    }
  }

  .nn-chat-voice-room-message-bar__banner {
    position: relative;
    display: block;
    width: 100%;
    flex: 0 0 auto;
    padding-bottom: var(--space6);
    overflow: hidden;
  }

  .nn-chat-voice-room-message-bar__banner img {
    display: block;
    width: 100%;
    aspect-ratio: 464 / 199;
    height: auto;
  }

  .nn-chat-voice-room-message-bar__banner-close {
    position: absolute;
    top: var(--space4);
    right: var(--space4);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    padding: var(--space0);
    border: 0;
    border-radius: var(--border-radius-2r);
    background: var(--Black-A60);
    color: var(--gray-1);
    cursor: pointer;
  }

  .nn-chat-voice-room-message-bar__banner-close .nnicon {
    width: var(--icon-size-x7);
    height: var(--icon-size-x7);
    font-size: var(--icon-size-x7);
    line-height: var(--icon-size-x7);
  }

  .nn-chat-voice-room-message-bar__search {
    position: relative;
    z-index: 30;
    width: 100%;
    padding-top: var(--space4);
    flex: 0 0 auto;
    box-sizing: border-box;
  }

  .nn-chat-voice-room-message-bar__search .nn-dropdown.nn-dropdown-custom-trigger {
    display: block;
    width: 100%;
  }

  .nn-chat-voice-room-message-bar__search .nn-dropdown-panel {
    width: 100%;
  }

  .nn-chat-voice-room-message-bar__search-dropdown .nn-dropdown-list {
    align-items: center;
  }

  .nn-chat-voice-room-message-bar__search .nn-input-wrapper {
    width: 100%;
  }

  .nn-chat-voice-room-message-bar__search .nn-input.nn-input-default {
    width: 100%;
    box-sizing: border-box;
  }

  .nn-chat-voice-room-message-bar__online {
    display: flex;
    align-items: center;
    gap: var(--space4);
    width: 100%;
    min-width: 0;
    padding: var(--space10) var(--space8) var(--space6);
    color: var(--gray-6);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-body);
    box-sizing: border-box;
  }

  .nn-chat-voice-room-message-bar__online-text {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-chat-voice-room-message-bar__online .nnicon {
    width: var(--icon-size-x7);
    height: var(--icon-size-x7);
    flex: 0 0 var(--icon-size-x7);
    color: var(--gray-7);
    font-size: var(--icon-size-x7);
    line-height: var(--icon-size-x7);
  }

  .nn-chat-voice-room-message-bar__members {
    display: flex;
    flex-direction: column;
    gap: var(--space2);
    width: 100%;
    min-width: 0;
    max-height: 136px;
    padding: var(--space0);
    overflow: hidden;
    transition: max-height 0.2s cubic-bezier(0.2, 0, 0, 1);
    box-sizing: border-box;
  }

  .nn-chat-voice-room-message-bar__member-panel {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 0;
    flex: 0 0 auto;
    margin-bottom: var(--nn-chat-voice-room-member-panel-bottom-gap);
    outline: none;
  }

  .nn-chat-voice-room-message-bar__member-panel:hover .nn-chat-voice-room-message-bar__members,
  .nn-chat-voice-room-message-bar__member-panel:focus-within .nn-chat-voice-room-message-bar__members {
    height: var(--nn-chat-voice-room-member-expanded-list-height, 136px);
    max-height: var(--nn-chat-voice-room-member-expanded-list-height, 136px);
    flex: 0 0 var(--nn-chat-voice-room-member-expanded-list-height, 136px);
    overflow-y: auto;
  }

  .nn-chat-voice-room-message-bar__member-panel:hover .nn-chat-voice-room-message-bar__avatar-strip,
  .nn-chat-voice-room-message-bar__member-panel:focus-within .nn-chat-voice-room-message-bar__avatar-strip {
    max-height: 0;
    margin-top: var(--space0);
    padding-top: var(--space0);
    opacity: 0;
  }

  .nn-chat-voice-room-message-bar__member {
    display: flex;
    align-items: center;
    gap: var(--space4);
    width: 100%;
    min-width: 0;
    height: 44px;
    padding: var(--space10) var(--space8);
    border-radius: var(--border-radius-2r);
    background: transparent;
    color: var(--gray-3);
    box-sizing: border-box;
  }

  .nn-chat-voice-room-message-bar__member:hover {
    background: var(--gray-10);
  }

  .nn-chat-voice-room-message-bar__rank {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 16px;
    height: 16px;
    border-radius: var(--border-radius-8r) 0 var(--border-radius-8r) 0;
    background: var(--gray-3);
    color: var(--gray-3-reverse);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-normal);
    line-height: 16px;
    text-align: center;
    box-sizing: border-box;
  }

  .nn-chat-voice-room-message-bar__avatar {
    position: relative;
    display: inline-flex;
    width: 32px;
    height: 32px;
    flex: 0 0 32px;
  }

  .nn-chat-voice-room-message-bar__avatar .nn-avatar-wrapper {
    position: relative;
    display: inline-flex;
  }

  .nn-chat-voice-room-message-bar__avatar .nn-avatar-badge {
    top: auto !important;
    right: -1px !important;
    bottom: -1px !important;
    border: 2px solid var(--gray-1);
    transform: none !important;
    box-sizing: border-box;
  }

  .nn-chat-voice-room-message-bar__member-name {
    min-width: 0;
    overflow: hidden;
    color: var(--gray-5);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-body);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-chat-voice-room-message-bar__member-level {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x10);
    height: var(--icon-size-x10);
    flex: 0 0 var(--icon-size-x10);
    overflow: hidden;
  }

  .nn-chat-voice-room-message-bar__member-level img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .nn-chat-voice-room-message-bar__member .nn-equity-community-role {
    margin-left: var(--space0);
  }

  .nn-chat-voice-room-message-bar__avatar-strip {
    display: flex;
    align-items: center;
    gap: var(--space4);
    width: 100%;
    min-width: 0;
    padding: var(--space6) var(--space0) var(--space0) var(--space8);
    margin-top: var(--space2);
    max-height: 24px;
    overflow: hidden;
    opacity: 1;
    transition: max-height 0.16s cubic-bezier(0.2, 0, 0, 1), padding 0.16s cubic-bezier(0.2, 0, 0, 1), opacity 0.12s ease;
    box-sizing: border-box;
  }

  .nn-chat-voice-room-message-bar__avatar-list {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    gap: var(--space4);
    overflow: hidden;
  }

  .nn-chat-voice-room-message-bar__avatar-strip-more {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x8);
    height: var(--icon-size-x8);
    flex: 0 0 var(--icon-size-x8);
    color: var(--gray-6);
  }

  .nn-chat-voice-room-message-bar__avatar-strip-more .nnicon {
    font-size: var(--icon-size-x8);
    line-height: var(--icon-size-x8);
  }

  .nn-chat-voice-room-message-bar__member-self {
    display: flex;
    align-items: center;
    gap: var(--space4);
    width: 100%;
    height: 0;
    margin-top: var(--space0);
    padding: var(--space0);
    overflow: hidden;
    background: var(--gray-10);
    opacity: 0;
    transition: height 0.2s cubic-bezier(0.2, 0, 0, 1), padding 0.2s cubic-bezier(0.2, 0, 0, 1), opacity 0.14s ease;
    box-sizing: border-box;
  }

  .nn-chat-voice-room-message-bar__member-panel:hover .nn-chat-voice-room-message-bar__member-self,
  .nn-chat-voice-room-message-bar__member-panel:focus-within .nn-chat-voice-room-message-bar__member-self {
    height: var(--nn-chat-voice-room-member-expanded-self-height);
    margin-top: var(--nn-chat-voice-room-member-expanded-self-gap);
    padding: var(--space8);
    opacity: 1;
  }

  .nn-chat-voice-room-message-bar__member-panel:hover ~ .nn-chat-voice-room-message-bar__messages-scrollbar,
  .nn-chat-voice-room-message-bar__member-panel:focus-within ~ .nn-chat-voice-room-message-bar__messages-scrollbar {
    opacity: 0 !important;
    pointer-events: none;
  }

  .nn-chat-voice-room-message-bar__member-self .nn-chat-voice-room-message-bar__avatar {
    width: 32px;
    height: 32px;
    flex-basis: 32px;
  }

  .nn-chat-voice-room-message-bar__member-self-name {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    color: var(--gray-5);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-body);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nn-chat-voice-room-message-bar__messages {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    width: 100%;
    min-height: 0;
    padding: var(--space0) var(--space0) var(--space8);
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
  }

  .nn-chat-voice-room-message-bar__messages .nn-chat-send-message,
  .nn-chat-voice-room-message-bar__messages .nn-chat-voice-message {
    flex: 0 0 auto;
    width: 100%;
  }

  .nn-chat-voice-room-message-bar__messages .nn-chat-voice-message--center {
    width: 100%;
  }

  .nn-chat-voice-room-message-bar__messages .nn-chat-voice-message__gift-card {
    width: 100%;
  }

  .nn-chat-voice-room-message-bar__entry-ticker {
    position: relative;
    width: 100%;
    height: 34px;
    flex: 0 0 34px;
    margin-top: var(--space4);
    padding-top: var(--space4);
    box-sizing: content-box;
    overflow: hidden;
  }

  .nn-chat-voice-room-message-bar__entry-ticker-track {
    position: absolute;
    top: var(--space0);
    left: var(--space0);
    width: 100%;
    min-width: 0;
    will-change: transform;
    transition: transform 0.28s cubic-bezier(0.2, 0, 0, 1);
  }

  .nn-chat-voice-room-message-bar__entry-ticker-track.is-moving {
    transform: translateY(-34px);
  }

  .nn-chat-voice-room-message-bar__entry-ticker-track.is-resetting {
    transition: none;
  }

  .nn-chat-voice-room-message-bar__entry-ticker-item {
    position: relative;
    width: 100%;
    height: 34px;
    min-width: 0;
  }

  .nn-chat-voice-room-message-bar__entry-ticker-item .nn-chat-voice-message__pill {
    padding: var(--space6) var(--space8);
  }

  @media (prefers-reduced-motion: reduce) {
    .nn-chat-voice-room-message-bar__entry-ticker-track {
      transition: none;
    }
  }

  .nn-chat-voice-room-message-bar__input {
    width: 100%;
    flex: 0 0 auto;
    padding-bottom: var(--space8);
    box-sizing: border-box;
  }

  .nn-chat-voice-room-message-bar__input .nn-chat-message-input {
    width: 100%;
  }

  .nn-chat-voice-room-message-bar__input .nn-chat-message-input--small .nn-chat-message-input__bar {
    min-height: 48px;
  }

  .nn-chat-voice-room-message-bar__input .nn-chat-message-input--small .nn-chat-message-input__content-row {
    min-height: 46px;
  }
`;

function injectChatStyles() {
  if (document.getElementById('nn-chat-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-chat-styles';
  style.textContent = ChatStyles;
  document.head.appendChild(style);
}

function createChatIcon(iconClass) {
  const icon = document.createElement('i');
  icon.className = `nnicon ${iconClass}`;
  icon.setAttribute('aria-hidden', 'true');
  return icon;
}

function createChatAction(iconClass, label) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'nn-chat-message__action';
  button.setAttribute('aria-label', label);
  button.title = label;
  button.dataset.action = label === '更多' ? 'more' : 'reply';
  button.appendChild(createChatIcon(iconClass));
  return button;
}

function getChatMenuItems() {
  return [
    { key: 'reply', label: '回复消息', iconHtml: '<i class="nnicon nicon-a-Reply-linehuifu-xianxing"></i>' },
    { key: 'copy', label: '复制消息', iconHtml: '<i class="nnicon nicon-a-Copytext-linefuzhiwenben-xianxing"></i>' },
    { key: 'recall', label: '撤回消息', iconHtml: '<i class="nnicon nicon-a-Arrow-go-backchehui-xianxing"></i>' },
    { key: 'delete', label: '删除消息', iconHtml: '<i class="nnicon nicon-a-delete-lineshanchulajitong-xianxing"></i>' },
    { key: 'clear', label: '无痕删除', iconHtml: '<i class="nnicon nicon-a-Clearqingli"></i>' }
  ];
}

function closeChatMessageMenu() {
  const activeMenu = document.querySelector('.nn-chat-message-menu-dropdown');
  if (activeMenu) {
    activeMenu.remove();
  }
}

function clampChatMenuPosition(left, top, menuWidth, menuHeight) {
  const safeGap = 8;
  const maxLeft = Math.max(safeGap, window.innerWidth - menuWidth - safeGap);
  const maxTop = Math.max(safeGap, window.innerHeight - menuHeight - safeGap);
  return {
    left: Math.min(Math.max(safeGap, left), maxLeft),
    top: Math.min(Math.max(safeGap, top), maxTop)
  };
}

function createChatMessageMenu(options = {}) {
  const { message, onAction } = options;
  closeChatMessageMenu();

  if (typeof window === 'undefined' || typeof window.createDropdownMenu !== 'function') {
    return null;
  }

  const menuItems = getChatMenuItems();
  const menu = window.createDropdownMenu({
    appearance: 'filled',
    size: 'medium',
    open: true,
    items: menuItems,
    selectedIndex: -1,
    clearable: false,
    className: 'nn-chat-message-menu-dropdown',
    onChange: function(payload) {
      const item = payload && payload.item ? payload.item : null;
      if (item && typeof onAction === 'function') {
        onAction(item.key, {
          item,
          message,
          event: payload.event || null
        });
      }
      closeChatMessageMenu();
    }
  });
  menu.dataset.source = options.source || 'button';

  document.body.appendChild(menu);
  return menu;
}

function positionChatMenuFromButton(menu, trigger) {
  if (!menu) return;
  const triggerRect = trigger.getBoundingClientRect();
  const menuRect = menu.getBoundingClientRect();
  const container = trigger.closest('.chat-page-demo') || trigger.closest('.nn-chat-message') || document.documentElement;
  const containerRect = container.getBoundingClientRect();
  const gap = 8;
  const topSpace = triggerRect.top - containerRect.top;
  const shouldOpenBottom = topSpace < menuRect.height + gap;
  const rawLeft = triggerRect.right - menuRect.width;
  const rawTop = shouldOpenBottom
    ? triggerRect.bottom + gap
    : triggerRect.top - menuRect.height - gap;
  const position = clampChatMenuPosition(rawLeft, rawTop, menuRect.width, menuRect.height);
  menu.style.left = `${position.left}px`;
  menu.style.top = `${position.top}px`;
  menu.dataset.placement = shouldOpenBottom ? 'bottom' : 'top';
}

function positionChatMenuFromPoint(menu, clientX, clientY) {
  if (!menu) return;
  const menuRect = menu.getBoundingClientRect();
  const position = clampChatMenuPosition(clientX, clientY, menuRect.width, menuRect.height);
  menu.style.left = `${position.left}px`;
  menu.style.top = `${position.top}px`;
  menu.dataset.placement = 'point';
}

function openChatMessageMenuFromButton(trigger, message, options = {}) {
  const menu = createChatMessageMenu(Object.assign({}, options, {
    message,
    source: 'button'
  }));
  positionChatMenuFromButton(menu, trigger);
  return menu;
}

function openChatMessageMenuFromPoint(clientX, clientY, message, options = {}) {
  const menu = createChatMessageMenu(Object.assign({}, options, {
    message,
    source: 'contextmenu'
  }));
  positionChatMenuFromPoint(menu, clientX, clientY);
  return menu;
}

function bindChatMessageMenu(root, bubble, actions, options = {}) {
  const replyButton = actions.querySelector('[data-action="reply"]');
  const moreButton = actions.querySelector('[data-action="more"]');
  let lastContextMenuAt = 0;
  if (replyButton) {
    replyButton.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      if (typeof options.onAction === 'function') {
        options.onAction('reply', {
          item: { key: 'reply', label: '回复消息' },
          message: root,
          event
        });
      }
    });
  }
  if (moreButton) {
    moreButton.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      openChatMessageMenuFromButton(moreButton, root, options);
    });
  }

  bubble.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    lastContextMenuAt = Date.now();
    openChatMessageMenuFromPoint(event.clientX, event.clientY, root, options);
  });

  bubble.addEventListener('mousedown', function(event) {
    if (event.button !== 2) return;
    window.setTimeout(function() {
      if (Date.now() - lastContextMenuAt < 120) return;
      openChatMessageMenuFromPoint(event.clientX, event.clientY, root, options);
    }, 0);
  });
}

function createChatActions() {
  const actions = document.createElement('div');
  actions.className = 'nn-chat-message__actions';
  actions.appendChild(createChatAction('nicon-a-Reply-linehuifu-xianxing', '回复'));
  actions.appendChild(createChatAction('nicon-a-moregengduo', '更多'));
  return actions;
}

function createChatReply(options = {}) {
  const {
    replyUser = '冯宝宝',
    replyText = '😊影流有人吗，不想被演了还有为什么我游戏内打字一直说频道内就我一个人，开关屏蔽也没用，有没有大神带菜鸟起飞了'
  } = options;

  const reply = document.createElement('div');
  reply.className = 'nn-chat-message__reply';

  const line = document.createElement('div');
  line.className = 'nn-chat-message__reply-line';
  reply.appendChild(line);

  const content = document.createElement('div');
  content.className = 'nn-chat-message__reply-content';

  const title = document.createElement('div');
  title.className = 'nn-chat-message__reply-title';
  title.textContent = `回复: ${replyUser}`;
  content.appendChild(title);

  const text = document.createElement('div');
  text.className = 'nn-chat-message__reply-text';
  text.textContent = replyText;
  content.appendChild(text);

  reply.appendChild(content);
  return reply;
}

function createChatAvatar(options = {}) {
  const { avatarSrc = '../image/Avatar/头像480.png', avatarText = '' } = options;
  const avatar = document.createElement('div');
  avatar.className = 'nn-chat-message__avatar';
  if (typeof window !== 'undefined' && typeof window.createAvatar === 'function') {
    avatar.appendChild(window.createAvatar({ src: avatarSrc, text: avatarText, size: 36 }));
  } else {
    const img = document.createElement('img');
    img.src = avatarSrc;
    img.alt = avatarText || 'avatar';
    img.style.width = '36px';
    img.style.height = '36px';
    img.style.borderRadius = '9px';
    img.style.objectFit = 'cover';
    avatar.appendChild(img);
  }
  return avatar;
}

function createVoiceRoomInlineImage(src, className, alt = '') {
  const wrap = document.createElement('span');
  wrap.className = className;
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  wrap.appendChild(img);
  return wrap;
}

function createChatSendLevelBadge(src) {
  const badge = document.createElement('span');
  badge.className = 'nn-chat-send-message__level';
  const img = document.createElement('img');
  img.src = src;
  img.alt = '';
  badge.appendChild(img);
  return badge;
}

function createChatSendPhoneIcon(iconClass = 'nicon-a-Cellular-Linefillshouji-mianxing1') {
  const wrap = document.createElement('span');
  wrap.className = 'nn-chat-send-message__phone';
  wrap.appendChild(createChatIcon(iconClass));
  return wrap;
}

function createChatSendAdminBadge(options = {}) {
  if (typeof globalThis.createEquityCommunityRole !== 'function') {
    throw new Error('createEquityCommunityRole is required before creating chat admin badges.');
  }
  const {
    role = 'super-admin',
    text = ''
  } = options;
  return globalThis.createEquityCommunityRole({
    role,
    text
  });
}

function hasChatSendOption(options, key) {
  return Object.prototype.hasOwnProperty.call(options, key);
}

function resolveChatSendText(options, fallbackFirst = '', fallbackSecond = '') {
  if (hasChatSendOption(options, 'text')) return String(options.text || '');
  const hasFirst = hasChatSendOption(options, 'firstLine');
  const hasSecond = hasChatSendOption(options, 'secondLine');
  if (hasFirst || hasSecond) {
    const first = hasFirst ? options.firstLine : '';
    const second = hasSecond ? options.secondLine : '';
    return [first, second].filter(Boolean).join('');
  }
  const first = fallbackFirst;
  const second = fallbackSecond;
  return [first, second].filter(Boolean).join('');
}

function createChatSendHeader(options = {}) {
  const {
    name = '咩***',
    text = '希望新的一年会有始料不及的运希望',
    levelSrc = '',
    showPhone = false,
    phoneIconClass = 'nicon-a-Cellular-Linefillshouji-mianxing1',
    showAdmin = false,
    adminRole = 'super-admin',
    adminText = ''
  } = options;

  const row = document.createElement('div');
  row.className = 'nn-chat-send-message__row';
  if (showPhone) row.appendChild(createChatSendPhoneIcon(phoneIconClass));
  if (showAdmin) row.appendChild(createChatSendAdminBadge({ role: adminRole, text: adminText }));
  if (levelSrc && !isUserLevelBadgeSrc(levelSrc)) row.appendChild(createChatSendLevelBadge(levelSrc));

  const inline = document.createElement('div');
  inline.className = 'nn-chat-send-message__inline nn-chat-send-message__inline--grow';

  const nameEl = document.createElement('span');
  nameEl.className = 'nn-chat-send-message__name';
  nameEl.textContent = `${name}：`;
  inline.appendChild(nameEl);

  if (text) {
    const body = document.createElement('span');
    body.className = 'nn-chat-send-message__body';
    body.textContent = text;
    inline.appendChild(body);
  }

  row.appendChild(inline);
  return row;
}

function createChatSendLine(text = '') {
  const line = document.createElement('p');
  line.className = 'nn-chat-send-message__line';
  line.textContent = text;
  return line;
}

function appendChatSendImage(root, imageSrc, imageAlt = '') {
  const media = document.createElement('div');
  media.className = 'nn-chat-send-message__media';
  const image = document.createElement('img');
  image.className = 'nn-chat-send-message__image';
  image.src = imageSrc;
  image.alt = imageAlt;
  media.appendChild(image);
  root.appendChild(media);
}

function createChatSendReply(options = {}) {
  const {
    replyUser = '普***',
    replyText = '希望新的一年会有始料不及的运气，会有突如其来的欢喜',
    replyQuoteSrc = '../image/Chat/reply-quote.svg'
  } = options;

  const reply = document.createElement('div');
  reply.className = 'nn-chat-send-message__reply';

  const quote = document.createElement('span');
  quote.className = 'nn-chat-send-message__reply-quote';
  const quoteImage = document.createElement('img');
  quoteImage.src = replyQuoteSrc;
  quoteImage.alt = '';
  quote.appendChild(quoteImage);
  reply.appendChild(quote);

  const name = document.createElement('span');
  name.className = 'nn-chat-send-message__reply-name';
  name.textContent = `@ ${replyUser}：`;
  reply.appendChild(name);

  const text = document.createElement('span');
  text.className = 'nn-chat-send-message__reply-text';
  text.textContent = replyText;
  reply.appendChild(text);

  return reply;
}

function createChatSendForwardCard(options = {}) {
  const {
    forwardTitle = '我的游戏ID',
    forwardName = '这里是游戏ID',
    gameName = '炉石传说',
    gameIconSrc = '../image/Game logo/game1.webp'
  } = options;

  const wrap = document.createElement('div');
  wrap.className = 'nn-chat-send-message__forward';

  const card = document.createElement('div');
  card.className = 'nn-chat-send-message__forward-card';

  const title = document.createElement('div');
  title.className = 'nn-chat-send-message__forward-title';
  const titleText = document.createElement('span');
  titleText.className = 'nn-chat-send-message__forward-title-text';
  titleText.textContent = forwardTitle;
  title.appendChild(titleText);
  card.appendChild(title);

  const divider = document.createElement('div');
  divider.className = 'nn-chat-send-message__divider';
  card.appendChild(divider);

  const content = document.createElement('div');
  content.className = 'nn-chat-send-message__forward-content';
  const main = document.createElement('div');
  main.className = 'nn-chat-send-message__forward-main';

  const name = document.createElement('div');
  name.className = 'nn-chat-send-message__forward-name';
  name.textContent = forwardName;
  main.appendChild(name);

  const game = document.createElement('div');
  game.className = 'nn-chat-send-message__game';
  const icon = document.createElement('img');
  icon.className = 'nn-chat-send-message__game-icon';
  icon.src = gameIconSrc;
  icon.alt = '';
  game.appendChild(icon);
  const gameText = document.createElement('span');
  gameText.className = 'nn-chat-send-message__game-name';
  gameText.textContent = gameName;
  game.appendChild(gameText);
  main.appendChild(game);

  content.appendChild(main);
  card.appendChild(content);
  wrap.appendChild(card);
  return wrap;
}

function createChatSendMessage(options = {}) {
  injectChatStyles();
  const {
    kind: requestedKind = 'mobile',
    name = '咩***',
    firstLine = '',
    secondLine = '',
    levelSrc = '',
    imageSrc = '../image/Game logo/game1-cover.webp',
    imageAlt = '',
    className = ''
  } = options;
  const allowedKinds = ['mobile', 'text-image', 'reply', 'sender-name'];
  const kind = allowedKinds.indexOf(requestedKind) >= 0 ? requestedKind : 'mobile';
  const hasCompositionFlags = ['showReply', 'showImage', 'showCard'].some(function(key) {
    return Object.prototype.hasOwnProperty.call(options, key);
  });
  const hasShowPhone = Object.prototype.hasOwnProperty.call(options, 'showPhone');
  const hasShowAdmin = Object.prototype.hasOwnProperty.call(options, 'showAdmin');
  const showReply = hasCompositionFlags ? !!options.showReply : kind === 'reply';
  const showImage = hasCompositionFlags ? !!options.showImage : kind === 'text-image';
  const showCard = hasCompositionFlags ? !!options.showCard : kind === 'sender-name';

  const root = document.createElement('div');
  root.className = [
    'nn-chat-send-message',
    showImage ? 'nn-chat-send-message--media' : '',
    showCard ? 'nn-chat-send-message--forward' : '',
    className
  ].filter(Boolean).join(' ');
  root.dataset.sendKind = hasCompositionFlags
    ? ['mobile', showReply ? 'reply' : '', showImage ? 'text-image' : '', showCard ? 'sender-name' : ''].filter(Boolean).join('+')
    : kind;

  if (showReply) {
    root.appendChild(createChatSendReply(options));
  }

  const textBlock = document.createElement('div');
  textBlock.className = [
    'nn-chat-send-message__text-block',
    showImage ? 'nn-chat-send-message__text-block--media' : '',
    showCard ? 'nn-chat-send-message__text-block--forward' : '',
    showReply ? 'nn-chat-send-message__text-block--reply' : ''
  ].filter(Boolean).join(' ');

  const headerOptions = Object.assign({}, options, { name, firstLine, levelSrc });
  if (hasCompositionFlags || kind === 'mobile') {
    headerOptions.showPhone = hasShowPhone ? !!options.showPhone : true;
    headerOptions.showAdmin = hasShowAdmin ? !!options.showAdmin : false;
    headerOptions.text = resolveChatSendText(
      options,
      firstLine || '希望新的一年会有始料不及的运希望',
      secondLine || '的一年会有始料不及的运气，会有突如其来的欢喜'
    );
  } else if (kind === 'text-image') {
    headerOptions.showAdmin = true;
    headerOptions.text = resolveChatSendText(options, '有人来上岛吗，项链+5金，一起', '速来');
  } else if (kind === 'sender-name') {
    headerOptions.showAdmin = true;
    headerOptions.text = '';
  } else if (kind === 'reply') {
    headerOptions.showAdmin = true;
    headerOptions.text = resolveChatSendText(options, 'DC黄金困难兵不厌诈 古北路线 来', '个会的大佬带飞');
  }

  textBlock.appendChild(createChatSendHeader(headerOptions));
  root.appendChild(textBlock);

  if (showImage) {
    appendChatSendImage(root, options.imageSrc || imageSrc, imageAlt);
  }
  if (showCard) {
    root.appendChild(createChatSendForwardCard(options));
  }

  return root;
}

function renderChatSendMessage(container, options = {}) {
  if (!container) return null;
  container.innerHTML = '';
  const message = createChatSendMessage(options);
  container.appendChild(message);
  return message;
}

function createVoiceRoomSystemMessage(options = {}) {
  const {
    kind = 'entry',
    name = '咩噗茶',
    text = kind === 'entry' ? '欢迎来到房间' : '已连麦',
    badgeSrc = '',
    avatarSrc = '../image/Avatar/头像619.png'
  } = options;

  const root = document.createElement('div');
  root.className = [
    'nn-chat-voice-message',
    'nn-chat-voice-message--system',
    kind === 'entry' ? '' : 'nn-chat-voice-message--padded',
    options.className || ''
  ].filter(Boolean).join(' ');
  root.dataset.voiceKind = kind;

  const pill = document.createElement('div');
  pill.className = 'nn-chat-voice-message__pill';

  if (kind === 'entry') {
    if (badgeSrc && !isUserLevelBadgeSrc(badgeSrc)) {
      pill.appendChild(createVoiceRoomInlineImage(badgeSrc, 'nn-chat-voice-message__badge', ''));
    }
  } else {
    pill.appendChild(createVoiceRoomInlineImage(avatarSrc, 'nn-chat-voice-message__mini-avatar', name));
  }

  const nameEl = document.createElement('span');
  nameEl.className = 'nn-chat-voice-message__name';
  nameEl.textContent = name;
  pill.appendChild(nameEl);

  const textEl = document.createElement('span');
  textEl.className = 'nn-chat-voice-message__text';
  textEl.textContent = text;
  pill.appendChild(textEl);

  root.appendChild(pill);
  return root;
}

function createVoiceRoomGiftCard(options = {}) {
  const {
    kind = 'gift-received',
    title = kind === 'gift-received' ? '收到神秘盲盒礼*1314' : '送出礼物名字 * 1314',
    actionText = kind === 'gift-received' ? '查看我的钱包' : '',
    giftSrc = kind === 'gift-received' ? '../image/gift/2.png' : '../image/gift/3.png',
    className = ''
  } = options;

  const root = document.createElement('div');
  root.className = ['nn-chat-voice-message', className].filter(Boolean).join(' ');
  root.dataset.voiceKind = kind;

  const card = document.createElement('div');
  card.className = 'nn-chat-voice-message__gift-card';
  card.appendChild(createVoiceRoomInlineImage(giftSrc, 'nn-chat-voice-message__gift-image', ''));

  const copy = document.createElement('div');
  copy.className = 'nn-chat-voice-message__gift-copy';

  const titleEl = document.createElement('div');
  titleEl.className = 'nn-chat-voice-message__gift-title';
  titleEl.textContent = title;
  copy.appendChild(titleEl);

  if (actionText) {
    const action = document.createElement('div');
    action.className = 'nn-chat-voice-message__gift-action';
    const actionLabel = document.createElement('span');
    actionLabel.className = 'nn-chat-voice-message__gift-action-text';
    actionLabel.textContent = actionText;
    action.appendChild(actionLabel);
    action.appendChild(createChatIcon('nicon-a-Arrowright-linejiantouyou-xianxing'));
    copy.appendChild(action);
  }

  card.appendChild(copy);
  root.appendChild(card);
  return root;
}

function createVoiceRoomGiftNotice(options = {}) {
  const {
    sender = '小晴天',
    target = '@小小游戏王',
    giftName = '蓝色宝石*1',
    giftSrc = '../image/gift/1.png',
    className = ''
  } = options;

  const root = document.createElement('div');
  root.className = ['nn-chat-voice-message', className].filter(Boolean).join(' ');
  root.dataset.voiceKind = 'gift-notice';

  const notice = document.createElement('div');
  notice.className = 'nn-chat-voice-message__gift-notice';

  [
    ['nn-chat-voice-message__notice-name', sender],
    ['nn-chat-voice-message__notice-text', '给'],
    ['nn-chat-voice-message__notice-mention', target],
    ['nn-chat-voice-message__notice-text', '赠送了']
  ].forEach(function(item) {
    const part = document.createElement('span');
    part.className = item[0];
    part.textContent = item[1];
    notice.appendChild(part);
  });

  notice.appendChild(createVoiceRoomInlineImage(giftSrc, 'nn-chat-voice-message__notice-image', ''));

  const gift = document.createElement('span');
  gift.className = 'nn-chat-voice-message__notice-gift';
  gift.textContent = giftName;
  notice.appendChild(gift);

  root.appendChild(notice);
  return root;
}

function createVoiceRoomRecall(options = {}) {
  const { text = '管理员撤回了一条消息', className = '' } = options;
  const root = document.createElement('div');
  root.className = ['nn-chat-voice-message', 'nn-chat-voice-message--center', className].filter(Boolean).join(' ');
  root.dataset.voiceKind = 'recall';

  const recall = document.createElement('div');
  recall.className = 'nn-chat-voice-message__recall';
  const label = document.createElement('span');
  label.className = 'nn-chat-voice-message__recall-text';
  label.textContent = text;
  recall.appendChild(label);
  root.appendChild(recall);
  return root;
}

function createVoiceRoomMessage(options = {}) {
  injectChatStyles();
  const allowedSystemKinds = ['entry', 'mic-avatar'];
  let { kind = 'entry' } = options;
  if (kind === 'gift-received' || kind === 'gift-sent') {
    return createVoiceRoomGiftCard(options);
  }
  if (kind === 'gift-notice') {
    return createVoiceRoomGiftNotice(options);
  }
  if (kind === 'recall') {
    return createVoiceRoomRecall(options);
  }
  if (allowedSystemKinds.indexOf(kind) < 0) {
    kind = 'entry';
  }
  return createVoiceRoomSystemMessage(Object.assign({}, options, { kind }));
}

function renderVoiceRoomMessage(container, options = {}) {
  if (!container) return null;
  container.innerHTML = '';
  const message = createVoiceRoomMessage(options);
  container.appendChild(message);
  return message;
}

function createVoiceRoomMessageBarSearch(options = {}) {
  const {
    placeholder = '搜索成员',
    value = '',
    members = [],
    onInput = null,
    onSearch = null
  } = options;

  const search = document.createElement('div');
  search.className = 'nn-chat-voice-room-message-bar__search';
  const canUseComponents = typeof window !== 'undefined' &&
    typeof window.createInput === 'function' &&
    typeof window.createDropdownMenu === 'function';
  if (!canUseComponents) return search;

  let dropdown = null;
  const input = window.createInput({
    size: 'default',
    placeholder,
    value,
    showSearch: true,
    onInput: handleInput,
    onSearch: handleSearch,
    onClear: function() {
      updateSearch('');
    },
    onBlur: function() {
      window.setTimeout(function() {
        if (dropdown && dropdown._dropdownMenu) dropdown._dropdownMenu.setOpen(false);
      }, 120);
    }
  });

  function updateSearch(nextValue) {
    const keyword = String(nextValue || '').trim();
    if (!dropdown || !dropdown._dropdownMenu) return;
    dropdown._dropdownMenu.setFilterText(keyword);
    dropdown._dropdownMenu.setOpen(Boolean(keyword));
  }

  function handleInput(event) {
    const nextValue = event && event.value !== undefined ? event.value : '';
    updateSearch(nextValue);
    if (typeof onInput === 'function') onInput(event);
  }

  function handleSearch(event) {
    const nextValue = event && event.value !== undefined ? event.value : '';
    updateSearch(nextValue);
    if (typeof onSearch === 'function') onSearch(event);
  }

  dropdown = window.createDropdownMenu({
    appearance: 'no-padding',
    size: 'medium',
    clearable: false,
    triggerElement: input,
    items: members,
    className: 'nn-chat-voice-room-message-bar__search-dropdown',
    filterItems: function(member, keyword) {
      return Boolean(keyword) && String(member && member.name || '').toLocaleLowerCase().indexOf(keyword) !== -1;
    },
    itemRenderer: function(context) {
      const member = context.item || {};
      const item = document.createElement('div');
      item.setAttribute('aria-label', member.name || '成员');
      item.appendChild(createVoiceRoomMemberAvatar({
        avatarSrc: member.avatarSrc,
        name: member.name,
        online: member.online !== false
      }));
      const name = document.createElement('span');
      name.className = 'nn-dropdown-item-title';
      name.textContent = member.name || '';
      item.appendChild(name);
      return item;
    },
    emptyRenderer: function() {
      return typeof window.createEmptyPopup === 'function'
        ? window.createEmptyPopup({
            type: 'search',
            description: '没有搜索到成员',
            showDescription: true,
            showActions: false
          })
        : null;
    },
    onChange: function(payload) {
      if (payload && payload.item && input._inputEl) {
        input._inputEl.value = payload.item.name || '';
      }
    }
  });

  search.appendChild(dropdown);
  updateSearch(value);
  return search;
}

function createVoiceRoomMemberLevel(src) {
  if (!src) return null;
  const level = document.createElement('span');
  level.className = 'nn-chat-voice-room-message-bar__member-level';
  const image = document.createElement('img');
  image.src = src;
  image.alt = '';
  level.appendChild(image);
  return level;
}

function createVoiceRoomMemberTag(options = {}) {
  const { text = '', variant = 'red', role = '' } = options;
  if (!text) return null;

  let normalizedRole = role;
  if (!normalizedRole) {
    if (variant === 'blue' || text.indexOf('高管') !== -1) {
      normalizedRole = 'senior-admin';
    } else if (text.indexOf('管理') !== -1) {
      normalizedRole = 'admin';
    } else if (text.indexOf('核心') !== -1) {
      normalizedRole = 'core';
    } else {
      normalizedRole = 'super-admin';
    }
  }

  if (typeof window !== 'undefined' && typeof window.createEquityCommunityRole === 'function') {
    return window.createEquityCommunityRole({
      role: normalizedRole,
      text
    });
  }

  if (typeof window === 'undefined' || typeof window.createBadge !== 'function') return null;
  return window.createBadge({
    text,
    variant,
    size: 'small'
  });
}

function createVoiceRoomMemberAvatar(options = {}) {
  const {
    avatarSrc = '../image/Avatar/头像619.png',
    name = '',
    online = true
  } = options;

  const avatarWrap = document.createElement('span');
  avatarWrap.className = 'nn-chat-voice-room-message-bar__avatar';
  if (typeof window !== 'undefined' && typeof window.createAvatar === 'function') {
    avatarWrap.appendChild(window.createAvatar({
      src: avatarSrc,
      text: name,
      size: 32,
      status: online ? 'on' : null
    }));
  }
  return avatarWrap;
}

function createVoiceRoomMemberRow(options = {}, index = 0) {
  const {
    rank,
    name = '暖暖阳光min23',
    avatarSrc = '../image/Avatar/头像619.png',
    online = true,
    tag = '',
    tagVariant = 'red',
    tagRole = ''
  } = options;

  const row = document.createElement('div');
  row.className = 'nn-chat-voice-room-message-bar__member';

  const avatar = createVoiceRoomMemberAvatar({ avatarSrc, name, online });
  if (rank !== undefined && rank !== null && rank !== '') {
    const rankEl = document.createElement('span');
    rankEl.className = 'nn-chat-voice-room-message-bar__rank';
    rankEl.textContent = rank;
    avatar.appendChild(rankEl);
  }
  row.appendChild(avatar);

  const nameEl = document.createElement('span');
  nameEl.className = 'nn-chat-voice-room-message-bar__member-name';
  nameEl.textContent = name;
  row.appendChild(nameEl);

  const tagEl = createVoiceRoomMemberTag({ text: tag, variant: tagVariant, role: tagRole });
  if (tagEl) row.appendChild(tagEl);

  return row;
}

function createVoiceRoomAvatarStrip(options = {}) {
  const {
    avatars = [],
    expanded = false
  } = options;
  const strip = document.createElement('div');
  strip.className = 'nn-chat-voice-room-message-bar__avatar-strip';

  const list = document.createElement('div');
  list.className = 'nn-chat-voice-room-message-bar__avatar-list';
  const visibleAvatars = avatars.length ? avatars : [
    '../image/Avatar/头像10.png',
    '../image/Avatar/头像441.png',
    '../image/Avatar/头像498.png',
    '../image/Avatar/头像580.png',
    '../image/Avatar/头像634.png',
    '../image/Avatar/头像643.png',
    '../image/Avatar/头像655.png',
    '../image/Avatar/头像691.png',
    '../image/Avatar/头像719.png',
    '../image/Avatar/头像746.png',
    '../image/Avatar/头像773.png',
    '../image/Avatar/头像797.png',
    '../image/Avatar/头像800.png',
    '../image/Avatar/头像821.png',
    '../image/Avatar/头像829.png',
    '../image/Avatar/头像849.png',
    '../image/Avatar/头像902.png',
    '../image/Avatar/头像934.png',
    '../image/Avatar/头像967.png'
  ];
  strip.appendChild(list);

  const more = document.createElement('span');
  more.className = 'nn-chat-voice-room-message-bar__avatar-strip-more';
  more.appendChild(createChatIcon(expanded ? 'nicon-a-Arrowup-linejiantoushang-xianxing' : 'nicon-a-Arrow-down-linejiantouxia-xianxing'));
  strip.appendChild(more);

  function renderVisibleAvatars() {
    const avatarSize = 18;
    const avatarGap = 4;
    const stripStyle = window.getComputedStyle(strip);
    const horizontalPadding = parseFloat(stripStyle.paddingLeft) + parseFloat(stripStyle.paddingRight);
    const availableWidth = strip.clientWidth - horizontalPadding - more.offsetWidth - avatarGap;
    const visibleCount = availableWidth > 0
      ? Math.floor((availableWidth + avatarGap) / (avatarSize + avatarGap))
      : 0;

    list.innerHTML = '';
    visibleAvatars.slice(0, visibleCount).forEach(function(item) {
      const avatarOptions = typeof item === 'string' ? { src: item } : item;
      if (typeof window !== 'undefined' && typeof window.createAvatar === 'function') {
        list.appendChild(window.createAvatar({
          src: avatarOptions.src || avatarOptions.avatarSrc || '',
          text: avatarOptions.text || '',
          size: avatarSize
        }));
      }
    });
  }

  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(renderVisibleAvatars);
    observer.observe(strip);
  }

  if (typeof requestAnimationFrame === 'function') {
    requestAnimationFrame(renderVisibleAvatars);
  } else {
    setTimeout(renderVisibleAvatars, 0);
  }

  return strip;
}

function createVoiceRoomMemberSelf(options = {}) {
  const {
    name = '风见志郎',
    avatarSrc = '../image/Avatar/头像1098.png'
  } = options;
  const self = document.createElement('div');
  self.className = 'nn-chat-voice-room-message-bar__member-self';
  self.appendChild(createVoiceRoomMemberAvatar({ avatarSrc, name, online: false }));

  const nameEl = document.createElement('span');
  nameEl.className = 'nn-chat-voice-room-message-bar__member-self-name';
  nameEl.textContent = name;
  self.appendChild(nameEl);
  return self;
}

function isUserLevelBadgeSrc(src) {
  const value = String(src || '');
  return value.indexOf('/User Level/') >= 0 || value.indexOf('Digital badge') >= 0;
}

function createVoiceRoomMessageBarMessages(messages = []) {
  const list = document.createElement('div');
  list.className = 'nn-chat-voice-room-message-bar__messages';
  const defaultMessages = [
    {
      type: 'send',
      name: '咩***',
      showPhone: true,
      text: '希望新的一年会有始料不及的运气，会有突如其来的欢喜'
    },
    {
      type: 'send',
      name: '白***',
      text: '战队招人 老年娱乐 有人不，一起开黑'
    },
    {
      type: 'send',
      name: '颜***',
      text: '蹲个好老板，速来',
      showAdmin: true,
      adminRole: 'certified',
      adminText: '媒照认证'
    },
    {
      type: 'send',
      name: '普***',
      showPhone: true,
      text: '希望新的一年会有始料不及的运气，会有突如其来的欢喜'
    },
    {
      type: 'send',
      name: '咩***',
      text: 'DC黄金困难兵不厌诈 古北路线 来个会的大佬带飞'
    },
    {
      type: 'send',
      name: '咩***',
      text: '',
      showCard: true,
      forwardTitle: '我的游戏ID',
      forwardName: '这里是游戏ID',
      gameName: '炉石传说',
      gameIconSrc: '../image/Game logo/game1.webp'
    },
    {
      type: 'send',
      name: '白***',
      text: 'PanMan战队招人 老年娱乐 无要求，有人不，一起开黑'
    },
    {
      type: 'send',
      name: '白***',
      text: '有人来上岛吗，项链+5金'
    }
  ];

  (messages.length ? messages : defaultMessages).forEach(function(item) {
    if (item && item.element instanceof HTMLElement) {
      list.appendChild(item.element);
      return;
    }
    if (item.type === 'voice') {
      const voiceOptions = Object.assign({}, item);
      if (isUserLevelBadgeSrc(voiceOptions.badgeSrc)) voiceOptions.badgeSrc = '';
      list.appendChild(createVoiceRoomMessage(voiceOptions));
      return;
    }
    if (item.type === 'send') {
      const sendOptions = Object.assign({}, item, { levelSrc: '' });
      if (!Object.prototype.hasOwnProperty.call(sendOptions, 'showPhone')) sendOptions.showPhone = false;
      list.appendChild(createChatSendMessage(sendOptions));
      return;
    }
    const sendOptions = Object.assign({}, item, { levelSrc: '' });
    if (!Object.prototype.hasOwnProperty.call(sendOptions, 'showPhone')) sendOptions.showPhone = false;
    list.appendChild(createChatSendMessage(sendOptions));
  });
  return list;
}

function createVoiceRoomEntryTicker(entries = []) {
  const users = entries.length ? entries : [
    { name: '咩噗茶', text: '来了' },
    { name: '小晴天', text: '进入了房间' },
    { name: '木子', text: '来了' },
    { name: '南风', text: '进入了房间' }
  ];
  if (!users.length) return null;

  const ticker = document.createElement('div');
  ticker.className = 'nn-chat-voice-room-message-bar__entry-ticker';
  ticker.setAttribute('aria-live', 'polite');
  const track = document.createElement('div');
  track.className = 'nn-chat-voice-room-message-bar__entry-ticker-track';
  ticker.appendChild(track);
  let index = 0;

  function createTickerItem(item) {
    const message = createVoiceRoomMessage(Object.assign({ kind: 'entry' }, item));
    message.classList.add('nn-chat-voice-room-message-bar__entry-ticker-item');
    return message;
  }

  let current = createTickerItem(users[index]);
  track.appendChild(current);

  function scheduleNext() {
    window.setTimeout(function() {
      if (!ticker.isConnected || users.length < 2) return;
      index = (index + 1) % users.length;
      const next = createTickerItem(users[index]);
      track.appendChild(next);
      track.getBoundingClientRect();
      requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          if (!ticker.isConnected) return;
          track.classList.add('is-moving');
        });
      });
      let transitionFinished = false;
      function finishTransition() {
        if (transitionFinished || !ticker.isConnected) return;
        transitionFinished = true;
        track.classList.add('is-resetting');
        track.classList.remove('is-moving');
        current.remove();
        current = next;
        track.getBoundingClientRect();
        requestAnimationFrame(function() {
          track.classList.remove('is-resetting');
        });
        scheduleNext();
      }
      track.addEventListener('transitionend', function(event) {
        if (event.propertyName === 'transform') finishTransition();
      }, { once: true });
      window.setTimeout(finishTransition, 360);
    }, 2600);
  }

  if (users.length > 1 && typeof window !== 'undefined') scheduleNext();
  return ticker;
}

function createVoiceRoomMessageBarInput(options = {}) {
  const inputWrap = document.createElement('div');
  inputWrap.className = 'nn-chat-voice-room-message-bar__input';
  if (typeof window !== 'undefined' && typeof window.createChatMessageInput === 'function') {
    inputWrap.appendChild(window.createChatMessageInput(Object.assign({
      size: 'small',
      placeholder: '按Enter回车键发送消息',
      showUpload: true
    }, options)));
  }
  return inputWrap;
}

function createVoiceRoomMessageBar(options = {}) {
  injectChatStyles();
  const {
    bannerSrc = '../image/Chat/voice-room-message-bar-banner.png',
    searchPlaceholder = '搜索成员',
    searchValue = '',
    onlineCount = 126,
    members = [
      { name: '暖暖阳光min23', tag: '超管', tagRole: 'super-admin', avatarSrc: '../image/Avatar/头像619.png' },
      { name: '忧伤开满来时路', tag: '超级高管', tagRole: 'senior-admin', avatarSrc: '../image/Avatar/头像498.png' },
      { name: '茹菓', avatarSrc: '../image/Avatar/头像643.png' },
      { name: '能吃一缸', avatarSrc: '../image/Avatar/头像655.png' },
      { name: '牛大渡', avatarSrc: '../image/Avatar/头像691.png' },
      { name: 'yutsuki', avatarSrc: '../image/Avatar/头像719.png' },
      { name: 'Jiaxin xxx', avatarSrc: '../image/Avatar/头像746.png' },
      { name: 'mosquito', avatarSrc: '../image/Avatar/头像773.png' },
      { name: '林小满', avatarSrc: '../image/Avatar/头像797.png' },
      { name: '夏日汽水', avatarSrc: '../image/Avatar/头像800.png' }
    ],
    avatars = [],
    selfMember = {},
    messages = [],
    entryUsers = [],
    inputOptions = {},
    showBanner = true,
    showBannerClose = true,
    showSearch = true,
    showMembers = true,
    showInput = true,
    className = '',
    onSearchInput = null,
    onSearch = null,
    onBannerClose = null,
    onMessageSend = null
  } = options;

  const root = document.createElement('section');
  root.className = ['nn-chat-voice-room-message-bar', className].filter(Boolean).join(' ');
  root.setAttribute('aria-label', '语音房间消息栏');
  let online = null;
  let memberPanel = null;
  let memberList = null;
  let memberScrollbar = null;
  let messageScrollbar = null;
  let inputWrap = null;

  if (showBanner && bannerSrc) {
    const banner = document.createElement('div');
    banner.className = 'nn-chat-voice-room-message-bar__banner';
    const image = document.createElement('img');
    image.src = bannerSrc;
    image.alt = '';
    banner.appendChild(image);
    if (showBannerClose) {
      const close = document.createElement('button');
      close.type = 'button';
      close.className = 'nn-chat-voice-room-message-bar__banner-close';
      close.setAttribute('aria-label', '关闭 banner');
      close.appendChild(createChatIcon('nicon-a-close-lineguanbi-xianxing'));
      close.addEventListener('click', function() {
        banner.remove();
        if (typeof onBannerClose === 'function') onBannerClose();
      });
      banner.appendChild(close);
    }
    root.appendChild(banner);
  }

  if (showSearch) {
    root.appendChild(createVoiceRoomMessageBarSearch({
      placeholder: searchPlaceholder,
      value: searchValue,
      members,
      onInput: onSearchInput,
      onSearch
    }));
  }

  if (showMembers) {
    online = document.createElement('div');
    online.className = 'nn-chat-voice-room-message-bar__online';
    const onlineText = document.createElement('span');
    onlineText.className = 'nn-chat-voice-room-message-bar__online-text';
    onlineText.textContent = `在线成员 · ${onlineCount}`;
    online.appendChild(onlineText);
    online.appendChild(createChatIcon('nicon-a-Info-linexinxitishi-xianxing'));
    root.appendChild(online);

    memberPanel = document.createElement('div');
    memberPanel.className = 'nn-chat-voice-room-message-bar__member-panel';

    memberList = document.createElement('div');
    memberList.className = 'nn-chat-voice-room-message-bar__members';
    members.forEach(function(member, index) {
      memberList.appendChild(createVoiceRoomMemberRow(member, index));
    });
    memberPanel.appendChild(memberList);
    memberPanel.appendChild(createVoiceRoomAvatarStrip({ avatars }));
    memberPanel.appendChild(createVoiceRoomMemberSelf(selfMember));
    root.appendChild(memberPanel);

    if (typeof window !== 'undefined' && typeof window.createScrollbar === 'function') {
      memberScrollbar = window.createScrollbar({
        target: memberList,
        container: memberPanel,
        hoverTarget: memberPanel,
        variant: 'thin',
        right: 0,
        top: 0,
        bottom: function() {
          return Math.max(0, memberPanel.clientHeight - memberList.clientHeight);
        },
        minThumbSize: 24,
        className: 'nn-chat-voice-room-message-bar__member-scrollbar'
      });
      memberList.addEventListener('transitionend', function(event) {
        if (event.propertyName === 'max-height' && memberScrollbar) memberScrollbar.update();
      });
    }

    memberPanel.addEventListener('mouseleave', function() {
      memberList.scrollTop = 0;
      if (memberScrollbar) memberScrollbar.update();
    });
  }

  const messageList = createVoiceRoomMessageBarMessages(messages);
  root.appendChild(messageList);

  const entryTicker = createVoiceRoomEntryTicker(entryUsers);
  if (entryTicker) root.appendChild(entryTicker);

  if (showInput) {
    const inputOnSend = inputOptions.onSend;
    inputWrap = createVoiceRoomMessageBarInput(Object.assign({}, inputOptions, {
      onSend: function(payload) {
        const images = Array.isArray(payload.images) ? payload.images : [];
        const message = createChatSendMessage({
          name: selfMember.name || '风见志郎',
          text: payload.text,
          showPhone: false,
          showAdmin: false,
          levelSrc: '',
          showImage: images.length > 0,
          imageSrc: images[0] || ''
        });

        messageList.appendChild(message);
        messageList.scrollTop = messageList.scrollHeight;
        requestAnimationFrame(function() {
          messageList.scrollTop = messageList.scrollHeight;
          if (messageScrollbar) messageScrollbar.update();
        });

        if (typeof onMessageSend === 'function') {
          onMessageSend(Object.assign({}, payload, { element: message }));
        }
        if (typeof inputOnSend === 'function') {
          inputOnSend(payload);
        }
      }
    }));
    root.appendChild(inputWrap);
  }

  if (typeof window !== 'undefined' && typeof window.createScrollbar === 'function') {
    messageScrollbar = window.createScrollbar({
      target: messageList,
      container: root,
      hoverTarget: root,
      variant: 'thin',
      right: 0,
      top: function() {
        return messageList.offsetTop;
      },
      bottom: function() {
        return Math.max(0, root.clientHeight - messageList.offsetTop - messageList.clientHeight);
      },
      minThumbSize: 24,
      className: 'nn-chat-voice-room-message-bar__messages-scrollbar'
    });
  }

  function updateExpandedMemberHeight() {
    if (!online || !memberList) return;
    const onlineBottom = online.offsetTop + online.offsetHeight;
    const inputTop = inputWrap ? inputWrap.offsetTop : root.clientHeight;
    const availableHeight = Math.max(0, inputTop - onlineBottom);
    const rootStyle = window.getComputedStyle(root);
    const panelBottomGap = Number.parseFloat(rootStyle.getPropertyValue('--nn-chat-voice-room-member-panel-bottom-gap')) || 0;
    const selfHeight = Number.parseFloat(rootStyle.getPropertyValue('--nn-chat-voice-room-member-expanded-self-height')) || 0;
    const selfGap = Number.parseFloat(rootStyle.getPropertyValue('--nn-chat-voice-room-member-expanded-self-gap')) || 0;
    const listHeight = Math.max(0, Math.floor(availableHeight / 2 - panelBottomGap - selfHeight - selfGap));
    root.style.setProperty('--nn-chat-voice-room-member-expanded-list-height', `${listHeight}px`);
    if (memberScrollbar) memberScrollbar.update();
  }

  if (typeof ResizeObserver !== 'undefined') {
    const memberSizeObserver = new ResizeObserver(updateExpandedMemberHeight);
    memberSizeObserver.observe(root);
    if (online) memberSizeObserver.observe(online);
    if (inputWrap) memberSizeObserver.observe(inputWrap);
  }
  if (typeof requestAnimationFrame === 'function') {
    requestAnimationFrame(updateExpandedMemberHeight);
  } else {
    setTimeout(updateExpandedMemberHeight, 0);
  }

  return root;
}

function renderVoiceRoomMessageBar(container, options = {}) {
  if (!container) return null;
  container.innerHTML = '';
  const messageBar = createVoiceRoomMessageBar(options);
  container.appendChild(messageBar);
  return messageBar;
}

function createChatMessage(options = {}) {
  injectChatStyles();
  const {
    type = 'other',
    name = '和你隔了几片海',
    time = type === 'mine' ? '5分钟前' : '8分钟前',
    text = 'Text description of a chat messageText description of a chat message',
    showReply = false,
    showRead = type === 'mine',
    avatarSrc = type === 'mine' ? '../image/Avatar/头像496.png' : '../image/Avatar/头像480.png',
    avatarText = '',
    onMenuAction,
    bubbleVariant = '',
    className = ''
  } = options;
  const isMine = type === 'mine';

  const root = document.createElement('div');
  root.className = [
    'nn-chat-message',
    isMine ? 'nn-chat-message--mine' : 'nn-chat-message--other',
    className
  ].filter(Boolean).join(' ');
  root.dataset.type = isMine ? 'mine' : 'other';

  const main = document.createElement('div');
  main.className = 'nn-chat-message__main';

  const meta = document.createElement('div');
  meta.className = 'nn-chat-message__meta';
  const nameEl = document.createElement('div');
  nameEl.className = 'nn-chat-message__name';
  nameEl.textContent = name;
  const timeEl = document.createElement('div');
  timeEl.className = 'nn-chat-message__time';
  timeEl.textContent = time;
  if (isMine) {
    meta.appendChild(timeEl);
    meta.appendChild(nameEl);
  } else {
    meta.appendChild(nameEl);
    meta.appendChild(timeEl);
  }
  main.appendChild(meta);

  const bubbleRow = document.createElement('div');
  bubbleRow.className = 'nn-chat-message__bubble-row';

  const bubble = document.createElement('div');
  bubble.className = 'nn-chat-message__bubble';
  const dragonKingMatch = /^dragon-king-lv([1-5])$/.exec(bubbleVariant);
  if (dragonKingMatch) {
    bubble.classList.add('nn-chat-message__bubble--dragon-king', `nn-chat-message__bubble--${bubbleVariant}`);
    bubble.dataset.dragonKingLevel = dragonKingMatch[1];
  }
  if (showReply) {
    bubble.appendChild(createChatReply(options));
  }
  const messageText = document.createElement('p');
  messageText.className = 'nn-chat-message__text';
  messageText.textContent = text;
  bubble.appendChild(messageText);
  if (dragonKingMatch) {
    if (bubbleVariant === 'dragon-king-lv1') {
      const leftDecoration = document.createElement('img');
      leftDecoration.className = 'nn-chat-message__dragon-decoration nn-chat-message__dragon-decoration--left';
      leftDecoration.src = '../image/Chat/dragon-king-lv1/spark-left.svg';
      leftDecoration.alt = '';

      const rightDecoration = document.createElement('img');
      rightDecoration.className = 'nn-chat-message__dragon-decoration nn-chat-message__dragon-decoration--right';
      rightDecoration.src = '../image/Chat/dragon-king-lv1/spark-right.svg';
      rightDecoration.alt = '';
      bubble.append(leftDecoration, rightDecoration);
    }

    if (bubbleVariant === 'dragon-king-lv2') {
      const levelDecoration = document.createElement('img');
      levelDecoration.className = 'nn-chat-message__dragon-level-decoration nn-chat-message__dragon-level-decoration--group';
      levelDecoration.src = '../image/Chat/dragon-king-lv2/decor-left.svg';
      levelDecoration.alt = '';
      bubble.appendChild(levelDecoration);
    } else if (Number(dragonKingMatch[1]) >= 3) {
      ['top', 'bottom'].forEach(function(position) {
        const levelDecoration = document.createElement('img');
        levelDecoration.className = `nn-chat-message__dragon-level-decoration nn-chat-message__dragon-level-decoration--${position}`;
        levelDecoration.src = `../image/Chat/${bubbleVariant}/decor-left-${position}.svg`;
        levelDecoration.alt = '';
        bubble.appendChild(levelDecoration);
      });
    }

    const character = document.createElement('img');
    character.className = 'nn-chat-message__dragon-character';
    character.src = `../image/Chat/${bubbleVariant}/dragon-king-frame.png?v=20260921`;
    character.alt = '';
    bubble.appendChild(character);
  }

  const actions = createChatActions();
  bindChatMessageMenu(root, bubble, actions, {
    onAction: onMenuAction
  });

  if (isMine) {
    bubbleRow.appendChild(actions);
    bubbleRow.appendChild(bubble);
  } else {
    bubbleRow.appendChild(bubble);
    bubbleRow.appendChild(actions);
  }
  main.appendChild(bubbleRow);

  if (isMine) {
    root.appendChild(main);
    root.appendChild(createChatAvatar({ avatarSrc, avatarText }));
    if (showRead) {
      const read = document.createElement('span');
      read.className = 'nn-chat-message__read';
      read.appendChild(createChatIcon('nicon-a-Read-lineyidu-xianxing'));
      root.appendChild(read);
    }
  } else {
    root.appendChild(createChatAvatar({ avatarSrc, avatarText }));
    root.appendChild(main);
  }

  return root;
}

function renderChatMessage(container, options = {}) {
  if (!container) return null;
  container.innerHTML = '';
  const message = createChatMessage(options);
  container.appendChild(message);
  return message;
}

if (typeof window !== 'undefined') {
  window.createChatMessage = createChatMessage;
  window.renderChatMessage = renderChatMessage;
  window.createVoiceRoomMessage = createVoiceRoomMessage;
  window.renderVoiceRoomMessage = renderVoiceRoomMessage;
  window.createVoiceRoomMessageBar = createVoiceRoomMessageBar;
  window.renderVoiceRoomMessageBar = renderVoiceRoomMessageBar;
  window.createChatSendMessage = createChatSendMessage;
  window.renderChatSendMessage = renderChatSendMessage;
  window.injectChatStyles = injectChatStyles;
  window.closeChatMessageMenu = closeChatMessageMenu;
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.nn-chat-message-menu-dropdown') && !event.target.closest('.nn-chat-message__action[data-action="more"]')) {
      closeChatMessageMenu();
    }
  });
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeChatMessageMenu();
    }
  });
  window.addEventListener('resize', closeChatMessageMenu);
  window.addEventListener('scroll', closeChatMessageMenu, true);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    createChatMessage,
    renderChatMessage,
    createVoiceRoomMessage,
    renderVoiceRoomMessage,
    createVoiceRoomMessageBar,
    renderVoiceRoomMessageBar,
    createChatSendMessage,
    renderChatSendMessage,
    injectChatStyles,
    closeChatMessageMenu
  };
}
