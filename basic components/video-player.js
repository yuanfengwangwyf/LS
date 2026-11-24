const NNVideoPlayerDefaultSource = (function() {
  try {
    const scriptSource = document.currentScript && document.currentScript.src;
    return new URL('../image/Game Detail/monster-hunter-wilds-trailer.mp4', scriptSource || window.location.href).href;
  } catch (error) {
    return '../image/Game Detail/monster-hunter-wilds-trailer.mp4';
  }
})();

const NNVideoPlayerDefaultPoster = (function() {
  try {
    const scriptSource = document.currentScript && document.currentScript.src;
    return new URL('../image/Game Detail/monster-hunter-wilds-video-poster.jpg', scriptSource || window.location.href).href;
  } catch (error) {
    return '../image/Game Detail/monster-hunter-wilds-video-poster.jpg';
  }
})();

const VideoPlayerStyles = `
  .nn-video-player {
    position: relative;
    width: var(--nn-video-player-width, 690px);
    height: var(--nn-video-player-height, 388px);
    overflow: hidden;
    border-radius: var(--border-radius-4r);
    background: var(--Neutral-2);
    color: var(--Neutral-0);
    font-family: var(--font-family-main);
    isolation: isolate;
  }

  .nn-video-player:focus-visible {
    outline: 2px solid var(--Esports-Blue-LD);
    outline-offset: var(--space2);
  }

  .nn-video-player__media {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
    background: var(--Neutral-2);
    object-fit: cover;
    cursor: pointer;
  }

  .nn-video-player__overlay {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    height: 280px;
    align-items: flex-end;
    background: linear-gradient(180deg, var(--Black-A0) 47%, var(--Black-A90) 100%);
    pointer-events: none;
  }

  .nn-video-player__toolbar {
    position: relative;
    display: flex;
    width: 100%;
    height: 60px;
    align-items: flex-end;
    justify-content: space-between;
    padding: var(--space8) var(--space12);
    box-sizing: border-box;
    pointer-events: auto;
  }

  .nn-video-player__primary,
  .nn-video-player__actions {
    display: flex;
    height: 32px;
    align-items: center;
  }

  .nn-video-player__primary {
    gap: var(--space10);
  }

  .nn-video-player__actions {
    gap: var(--space4);
  }

  .nn-video-player__time {
    display: inline-flex;
    align-items: center;
    gap: var(--space2);
    color: var(--Neutral-0);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-caption);
    white-space: nowrap;
  }

  .nn-video-player__duration {
    color: var(--White-A60);
  }

  .nn-video-player__control {
    display: inline-flex;
    flex: 0 0 auto;
    height: 32px;
    align-items: center;
    justify-content: center;
    padding: var(--space0);
    border: 0;
    background: transparent;
    color: var(--White-A60);
    font-family: var(--font-family-main);
    cursor: pointer;
    appearance: none;
    opacity: 0.75;
    transition: color 0.12s ease, opacity 0.12s ease;
  }

  .nn-video-player__control:hover,
  .nn-video-player__control:focus-visible {
    outline: none;
    background: transparent;
    color: var(--Neutral-0);
    opacity: 1;
  }

  .nn-video-player__control:active {
    background: transparent;
    color: var(--Neutral-0);
    opacity: 0.8;
  }

  .nn-video-player__text-control {
    padding: var(--space0) var(--space8);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-body);
  }

  .nn-video-player__icon-control {
    width: 32px;
  }

  .nn-video-player__play i {
    font-size: var(--icon-size-x10);
  }

  .nn-video-player__volume i,
  .nn-video-player__fullscreen i {
    font-size: var(--icon-size-x9);
  }

  .nn-video-player .nn-video-player__dropdown.nn-dropdown.nn-dropdown-medium {
    width: auto;
    height: 32px;
    gap: var(--space0);
  }

  .nn-video-player__dropdown .nn-dropdown-panel {
    top: auto;
    bottom: calc(100% + var(--space4));
    left: 50%;
    width: max-content;
    min-width: 88px;
    transform: translateX(-50%);
  }

  .nn-video-player__dropdown .nn-dropdown-item {
    color: var(--gray-4);
    white-space: nowrap;
  }

  .nn-video-player .nn-video-player__progress.nn-slider[data-direction="horizontal"] {
    position: absolute;
    top: 0;
    right: var(--space12);
    left: var(--space12);
    width: auto;
    height: 18px;
    color: var(--Neutral-0);
    --nn-slider-cross-size: 18px;
    --nn-slider-track-thickness: 4px;
    --nn-slider-track-bg: var(--White-A40);
    --nn-slider-fill-bg: var(--White-A80);
    --nn-slider-thumb-width: 16px;
    --nn-slider-thumb-height: 10px;
    cursor: pointer;
    touch-action: none;
  }

  .nn-video-player .nn-video-player__progress.nn-slider[data-direction="horizontal"] .nn-slider__main {
    width: 100%;
    height: 18px;
  }

  .nn-video-player .nn-video-player__progress.nn-slider[data-direction="horizontal"] .nn-slider__track {
    height: 4px;
    overflow: visible;
    border-radius: var(--border-radius-1r);
    background: var(--White-A40);
  }

  .nn-video-player .nn-video-player__progress.nn-slider .nn-slider__fill {
    background: var(--White-A80);
  }

  .nn-video-player .nn-video-player__progress.nn-slider .nn-slider__thumb-wrap {
    display: inline-flex;
    opacity: 0;
    transition: opacity 0.12s ease;
    transition-delay: 0s;
  }

  .nn-video-player .nn-video-player__progress.nn-slider .nn-slider__thumb {
    width: 16px;
    height: 10px;
    border: 0;
    border-radius: var(--border-radius-2r);
    background: var(--White-A80);
    box-shadow: none;
    transform: scale(0.5);
    transition: transform 0.12s ease;
    transition-delay: 0s;
  }

  .nn-video-player .nn-video-player__progress.nn-slider .nn-slider__thumb::before {
    display: none;
  }

  .nn-video-player .nn-video-player__progress.nn-slider:hover .nn-slider__thumb-wrap,
  .nn-video-player .nn-video-player__progress.nn-slider:focus-within .nn-slider__thumb-wrap {
    opacity: 1;
    transition-delay: 0.5s;
  }

  .nn-video-player .nn-video-player__progress.nn-slider:hover .nn-slider__thumb,
  .nn-video-player .nn-video-player__progress.nn-slider:focus-within .nn-slider__thumb {
    transform: scale(1);
    transition-delay: 0.5s;
  }

  .nn-video-player .nn-video-player__progress.nn-slider .nn-slider__input {
    pointer-events: none;
  }

  .nn-video-player .nn-video-player__progress.nn-slider[data-tooltip="tooltip"] .nn-slider__tooltip {
    display: none;
  }

  .nn-video-player[data-controls-visible="false"] .nn-video-player__overlay {
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .nn-video-player:hover .nn-video-player__overlay,
  .nn-video-player:focus-within .nn-video-player__overlay,
  .nn-video-player[data-state="paused"] .nn-video-player__overlay {
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    .nn-video-player__overlay {
      transition: none;
    }
  }
`;

function injectVideoPlayerStyles() {
  if (document.getElementById('nn-video-player-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-video-player-styles';
  style.textContent = VideoPlayerStyles;
  document.head.appendChild(style);
}

function createVideoPlayer(options = {}) {
  injectVideoPlayerStyles();
  if (typeof injectButtonStyles === 'function') injectButtonStyles();
  if (typeof injectSliderStyles === 'function') injectSliderStyles();
  if (typeof injectDropdownMenuStyles === 'function') injectDropdownMenuStyles();

  const {
    src = NNVideoPlayerDefaultSource,
    poster = NNVideoPlayerDefaultPoster,
    width = 690,
    height = 388,
    objectFit = 'cover',
    muted = true,
    volume = 1,
    autoplay = false,
    loop = false,
    preload = 'metadata',
    initialTime = 0,
    showPlaybackRate = true,
    showQuality = true,
    showVolume = true,
    showFullscreen = true,
    playbackRates = [0.5, 1, 1.5, 2],
    playbackRate = 1,
    playbackRateLabel = '倍数',
    qualities = null,
    quality = '720p',
    className = '',
    id = '',
    ariaLabel = '视频播放器',
    onPlay = null,
    onPause = null,
    onTimeUpdate = null,
    onVolumeChange = null,
    onPlaybackRateChange = null,
    onQualityChange = null,
    onFullscreenChange = null,
    onReady = null
  } = options;

  const toCssSize = function(value, fallback) {
    if (value == null || value === '') return fallback;
    return typeof value === 'number' ? `${value}px` : String(value);
  };

  const normalizedQualities = Array.isArray(qualities) && qualities.length
    ? qualities.map(function(item) {
        return typeof item === 'string'
          ? { label: item, value: item, src }
          : Object.assign({ label: quality, value: item.label || quality, src }, item);
      })
    : [{ label: quality, value: quality, src }];
  let selectedQualityIndex = Math.max(0, normalizedQualities.findIndex(function(item) {
    return item.value === quality || item.label === quality;
  }));
  let selectedPlaybackRate = Number(playbackRate) || 1;
  let controlsTimer = null;
  let dropdownOpenCount = 0;
  let pendingSeekTime = Math.max(0, Number(initialTime) || 0);
  let requestedSeekTime = pendingSeekTime;
  let pendingSeekPercentage = null;
  let isScrubbing = false;
  let resumeAfterSourceChange = false;
  let initialMetadataHandled = false;

  const root = document.createElement('div');
  root.className = ['nn-video-player', className].filter(Boolean).join(' ');
  root.dataset.state = 'paused';
  root.dataset.controlsVisible = 'true';
  root.tabIndex = 0;
  root.setAttribute('role', 'group');
  root.setAttribute('aria-label', ariaLabel);
  root.style.setProperty('--nn-video-player-width', toCssSize(width, '690px'));
  root.style.setProperty('--nn-video-player-height', toCssSize(height, '388px'));
  if (id) root.id = id;

  const video = document.createElement('video');
  video.className = 'nn-video-player__media';
  video.src = normalizedQualities[selectedQualityIndex].src || src;
  video.preload = preload;
  video.muted = muted !== false;
  const initialVolume = Number(volume);
  video.volume = Number.isFinite(initialVolume) ? Math.max(0, Math.min(1, initialVolume)) : 1;
  video.loop = Boolean(loop);
  video.autoplay = Boolean(autoplay);
  video.playsInline = true;
  video.controls = false;
  video.style.objectFit = objectFit;
  if (poster) video.poster = poster;
  root.appendChild(video);

  const overlay = document.createElement('div');
  overlay.className = 'nn-video-player__overlay';

  const toolbar = document.createElement('div');
  toolbar.className = 'nn-video-player__toolbar';

  const progress = typeof createSlider === 'function'
    ? createSlider({
        value: 0,
        min: 0,
        max: 100,
        step: 0.1,
        size: 'small',
        direction: 'horizontal',
        tooltip: 'tooltip',
        length: '100%',
        className: 'nn-video-player__progress',
        onChange: function(event) {
          pendingSeekPercentage = event.value;
          if (!Number.isFinite(video.duration) || video.duration <= 0) {
            return;
          }
          video.currentTime = video.duration * (event.value / 100);
        }
      })
    : null;

  if (progress) {
    const progressInput = progress.querySelector('.nn-slider__input');
    if (progressInput) {
      progressInput.addEventListener('change', function() {
        isScrubbing = false;
        pendingSeekPercentage = Number(progressInput.value);
        if (Number.isFinite(video.duration) && video.duration > 0) {
          video.currentTime = video.duration * (pendingSeekPercentage / 100);
        }
        updateProgress();
      });
      progressInput.addEventListener('blur', function() {
        isScrubbing = false;
        updateProgress();
      });

      const updateScrubPreview = function(event) {
        const rect = progress.getBoundingClientRect();
        const ratio = rect.width > 0
          ? Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width))
          : 0;
        const percentage = ratio * 100;
        pendingSeekPercentage = percentage;
        progress._render(percentage);
        if (Number.isFinite(video.duration) && video.duration > 0) {
          currentTime.textContent = formatTime(video.duration * ratio);
        }
      };

      const commitScrub = function() {
        if (pendingSeekPercentage === null) return;
        if (!Number.isFinite(video.duration) || video.duration <= 0) return;
        const targetTime = video.duration * (pendingSeekPercentage / 100);
        if (Math.abs(video.currentTime - targetTime) <= 0.05) {
          pendingSeekPercentage = null;
          return;
        }
        video.currentTime = targetTime;
      };

      const endScrubbing = function(event) {
        if (!isScrubbing) return;
        updateScrubPreview(event);
        isScrubbing = false;
        progress.dataset.scrubbing = 'false';
        if (typeof progress.releasePointerCapture === 'function') {
          try {
            progress.releasePointerCapture(event.pointerId);
          } catch (error) {
          }
        }
        commitScrub();
        updateProgress();
      };

      progress.addEventListener('pointerdown', function(event) {
        isScrubbing = true;
        progress.dataset.scrubbing = 'true';
        if (typeof progress.setPointerCapture === 'function') {
          progress.setPointerCapture(event.pointerId);
        }
        progressInput.focus({ preventScroll: true });
        updateScrubPreview(event);
        event.preventDefault();
      });
      progress.addEventListener('pointermove', function(event) {
        if (!isScrubbing) return;
        updateScrubPreview(event);
      });
      progress.addEventListener('pointerup', endScrubbing);
      progress.addEventListener('pointercancel', function(event) {
        isScrubbing = false;
        pendingSeekPercentage = null;
        progress.dataset.scrubbing = 'false';
        if (typeof progress.releasePointerCapture === 'function') {
          try {
            progress.releasePointerCapture(event.pointerId);
          } catch (error) {
          }
        }
        updateProgress();
      });
    }
    toolbar.appendChild(progress);
  }

  const primary = document.createElement('div');
  primary.className = 'nn-video-player__primary';

  const createControlButton = function(config) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = config.className || 'nn-video-player__control';
    if (config.icon) button.innerHTML = config.icon;
    if (config.text) {
      const label = document.createElement('span');
      label.className = 'nn-video-player__control-label';
      label.textContent = config.text;
      button.appendChild(label);
    }
    if (config.ariaLabel) button.setAttribute('aria-label', config.ariaLabel);
    return button;
  };

  const playButton = createControlButton({
    text: '',
    icon: '<i class="nnicon nicon-a-play-linebofang-xianxing" aria-hidden="true"></i>',
    iconPosition: 'only',
    iconSize: 'var(--icon-size-x10)',
    className: 'nn-video-player__control nn-video-player__icon-control nn-video-player__play',
    ariaLabel: '播放视频'
  });
  if (playButton) primary.appendChild(playButton);

  const time = document.createElement('span');
  time.className = 'nn-video-player__time';
  const currentTime = document.createElement('span');
  currentTime.className = 'nn-video-player__current-time';
  currentTime.textContent = '00:00';
  const duration = document.createElement('span');
  duration.className = 'nn-video-player__duration';
  duration.textContent = '/ 00:00';
  time.appendChild(currentTime);
  time.appendChild(duration);
  primary.appendChild(time);

  const actions = document.createElement('div');
  actions.className = 'nn-video-player__actions';

  const createPlayerDropdown = function(config) {
    if (typeof createDropdownMenu !== 'function') return null;
    let isOpen = false;
    const trigger = createControlButton({
      text: config.text,
      className: 'nn-video-player__control nn-video-player__text-control',
      ariaLabel: config.ariaLabel
    });
    const dropdown = createDropdownMenu({
      appearance: 'no-padding',
      size: 'medium',
      triggerElement: trigger,
      items: config.items,
      selectedIndex: config.selectedIndex,
      className: `nn-video-player__dropdown ${config.className || ''}`.trim(),
      onChange: config.onChange,
      onOpenChange: function(nextOpen) {
        isOpen = nextOpen;
        dropdownOpenCount += nextOpen ? 1 : -1;
        dropdownOpenCount = Math.max(0, dropdownOpenCount);
        if (nextOpen) showControls();
      }
    });
    trigger.addEventListener('click', function(event) {
      event.stopPropagation();
      dropdown._dropdownMenu.setOpen(!isOpen);
    });
    return { root: dropdown, trigger };
  };

  let playbackRateControl = null;
  if (showPlaybackRate) {
    const rateItems = playbackRates.map(function(rate) {
      const numericRate = Number(rate) || 1;
      return { label: `${numericRate}x`, value: numericRate, rate: numericRate };
    });
    const selectedRateIndex = Math.max(0, rateItems.findIndex(function(item) {
      return item.rate === selectedPlaybackRate;
    }));
    playbackRateControl = createPlayerDropdown({
      text: playbackRateLabel,
      ariaLabel: '选择播放倍速',
      items: rateItems,
      selectedIndex: selectedRateIndex,
      className: 'nn-video-player__rate',
      onChange: function(event) {
        selectedPlaybackRate = Number(event.item && event.item.rate) || 1;
        video.playbackRate = selectedPlaybackRate;
        const triggerText = playbackRateControl && playbackRateControl.trigger.querySelector('.nn-video-player__control-label');
        if (triggerText) triggerText.textContent = selectedPlaybackRate === 1 ? playbackRateLabel : `${selectedPlaybackRate}x`;
        if (typeof onPlaybackRateChange === 'function') {
          onPlaybackRateChange({ playbackRate: selectedPlaybackRate, video, root });
        }
      }
    });
    if (playbackRateControl) actions.appendChild(playbackRateControl.root);
  }

  let qualityControl = null;
  if (showQuality) {
    qualityControl = createPlayerDropdown({
      text: normalizedQualities[selectedQualityIndex].label,
      ariaLabel: '选择视频清晰度',
      items: normalizedQualities,
      selectedIndex: selectedQualityIndex,
      className: 'nn-video-player__quality',
      onChange: function(event) {
        const nextIndex = Math.max(0, event.selectedIndex);
        const nextQuality = normalizedQualities[nextIndex];
        const triggerText = qualityControl && qualityControl.trigger.querySelector('.nn-video-player__control-label');
        if (triggerText) triggerText.textContent = nextQuality.label;
        if (nextQuality.src && nextQuality.src !== video.currentSrc && nextQuality.src !== video.src) {
          pendingSeekTime = video.currentTime;
          requestedSeekTime = pendingSeekTime;
          resumeAfterSourceChange = !video.paused;
          video.src = nextQuality.src;
          video.load();
        }
        selectedQualityIndex = nextIndex;
        if (typeof onQualityChange === 'function') {
          onQualityChange({ quality: nextQuality, selectedIndex: nextIndex, video, root });
        }
      }
    });
    if (qualityControl) actions.appendChild(qualityControl.root);
  }

  const volumeButton = showVolume ? createControlButton({
    text: '',
    icon: '<i class="nnicon nicon-a-Soundoff-lineshengyinguanbi-xianxing" aria-hidden="true"></i>',
    iconPosition: 'only',
    iconSize: 'var(--icon-size-x9)',
    className: 'nn-video-player__control nn-video-player__icon-control nn-video-player__volume',
    ariaLabel: '打开声音'
  }) : null;
  if (volumeButton) actions.appendChild(volumeButton);

  const fullscreenButton = showFullscreen ? createControlButton({
    text: '',
    icon: '<i class="nnicon nicon-a-Fullscreen-linequanping-xianxing" aria-hidden="true"></i>',
    iconPosition: 'only',
    iconSize: 'var(--icon-size-x9)',
    className: 'nn-video-player__control nn-video-player__icon-control nn-video-player__fullscreen',
    ariaLabel: '进入全屏'
  }) : null;
  if (fullscreenButton) actions.appendChild(fullscreenButton);

  toolbar.appendChild(primary);
  toolbar.appendChild(actions);
  overlay.appendChild(toolbar);
  root.appendChild(overlay);

  const formatTime = function(seconds) {
    const safeSeconds = Number.isFinite(seconds) ? Math.max(0, Math.floor(seconds)) : 0;
    const hours = Math.floor(safeSeconds / 3600);
    const minutes = Math.floor((safeSeconds % 3600) / 60);
    const remainingSeconds = safeSeconds % 60;
    const pad = function(value) { return String(value).padStart(2, '0'); };
    return hours > 0
      ? `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`
      : `${pad(minutes)}:${pad(remainingSeconds)}`;
  };

  const updatePlayState = function() {
    const isPlaying = !video.paused && !video.ended;
    root.dataset.state = isPlaying ? 'playing' : 'paused';
    if (!playButton) return;
    const icon = playButton.querySelector('i');
    if (icon) {
      icon.className = `nnicon ${isPlaying ? 'nicon-a-Suspend-linezanting-xianxing' : 'nicon-a-play-linebofang-xianxing'}`;
    }
    playButton.setAttribute('aria-label', isPlaying ? '暂停视频' : '播放视频');
  };

  const updateVolumeState = function() {
    if (!volumeButton) return;
    const isMuted = video.muted || video.volume === 0;
    const icon = volumeButton.querySelector('i');
    if (icon) {
      icon.className = `nnicon ${isMuted ? 'nicon-a-Soundoff-lineshengyinguanbi-xianxing' : 'nicon-a-Soundon-lineshengyindakai-xianxing'}`;
    }
    volumeButton.setAttribute('aria-label', isMuted ? '打开声音' : '静音');
  };

  const updateProgress = function() {
    const total = Number.isFinite(video.duration) ? video.duration : 0;
    const played = total > 0 ? (video.currentTime / total) * 100 : 0;
    const displayedPercentage = pendingSeekPercentage === null ? played : pendingSeekPercentage;
    const displayedTime = pendingSeekPercentage !== null && total > 0
      ? total * (pendingSeekPercentage / 100)
      : video.currentTime;
    currentTime.textContent = formatTime(displayedTime);
    duration.textContent = `/ ${formatTime(total)}`;
    if (!isScrubbing && progress && typeof progress._render === 'function') {
      progress._render(displayedPercentage);
    }
    if (typeof onTimeUpdate === 'function') {
      onTimeUpdate({ currentTime: video.currentTime, duration: total, percentage: played, video, root });
    }
  };

  function showControls() {
    root.dataset.controlsVisible = 'true';
    window.clearTimeout(controlsTimer);
    if (!video.paused) {
      controlsTimer = window.setTimeout(function() {
        if (dropdownOpenCount === 0) root.dataset.controlsVisible = 'false';
      }, 2200);
    }
  }

  const togglePlayback = function() {
    if (video.paused || video.ended) {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') playPromise.catch(function() {});
    } else {
      video.pause();
    }
  };

  const toggleMuted = function() {
    video.muted = !video.muted;
    if (!video.muted && video.volume === 0) video.volume = 1;
  };

  const toggleFullscreen = function() {
    if (document.fullscreenElement === root) {
      if (document.exitFullscreen) document.exitFullscreen();
      return;
    }
    if (root.requestFullscreen) {
      const request = root.requestFullscreen();
      if (request && typeof request.catch === 'function') request.catch(function() {});
    }
  };

  if (playButton) playButton.addEventListener('click', togglePlayback);
  if (volumeButton) volumeButton.addEventListener('click', toggleMuted);
  if (fullscreenButton) fullscreenButton.addEventListener('click', toggleFullscreen);
  video.addEventListener('click', togglePlayback);
  root.addEventListener('pointermove', showControls);
  root.addEventListener('pointerleave', function() {
    if (!video.paused && dropdownOpenCount === 0) root.dataset.controlsVisible = 'false';
  });
  root.addEventListener('keydown', function(event) {
    if (event.target !== root) return;
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      togglePlayback();
    }
  });

  const handleLoadedMetadata = function() {
    initialMetadataHandled = true;
    const targetTime = Math.min(video.duration || 0, pendingSeekTime);
    if (targetTime > 0) {
      video.currentTime = targetTime;
      window.setTimeout(function() {
        if (Math.abs(video.currentTime - targetTime) > 0.25) video.currentTime = targetTime;
        updateProgress();
      }, 120);
    }
    pendingSeekTime = 0;
    video.playbackRate = selectedPlaybackRate;
    if (pendingSeekPercentage != null && video.duration > 0) {
      video.currentTime = video.duration * (pendingSeekPercentage / 100);
    }
    updateProgress();
    if (resumeAfterSourceChange || autoplay) {
      resumeAfterSourceChange = false;
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') playPromise.catch(function() {});
    }
    if (typeof onReady === 'function') onReady({ video, root });
  };
  video.addEventListener('loadedmetadata', handleLoadedMetadata);
  video.addEventListener('durationchange', updateProgress);
  video.addEventListener('seeked', function() {
    if (pendingSeekPercentage !== null && Number.isFinite(video.duration) && video.duration > 0) {
      const targetTime = video.duration * (pendingSeekPercentage / 100);
      if (Math.abs(video.currentTime - targetTime) <= 0.25) {
        pendingSeekPercentage = null;
      }
    }
    updateProgress();
  });
  video.addEventListener('loadeddata', function() {
    if (requestedSeekTime > 0 && Number.isFinite(video.duration)) {
      const targetTime = Math.min(video.duration, requestedSeekTime);
      if (Math.abs(video.currentTime - targetTime) > 0.25) {
        video.currentTime = targetTime;
      } else {
        requestedSeekTime = 0;
      }
    }
    updateProgress();
  });
  video.addEventListener('timeupdate', updateProgress);
  video.addEventListener('play', function() {
    updatePlayState();
    showControls();
    if (typeof onPlay === 'function') onPlay({ video, root });
  });
  video.addEventListener('pause', function() {
    updatePlayState();
    showControls();
    if (typeof onPause === 'function') onPause({ video, root });
  });
  video.addEventListener('ended', updatePlayState);
  video.addEventListener('volumechange', function() {
    updateVolumeState();
    if (typeof onVolumeChange === 'function') {
      onVolumeChange({ muted: video.muted, volume: video.volume, video, root });
    }
  });
  document.addEventListener('fullscreenchange', function() {
    const isFullscreen = document.fullscreenElement === root;
    if (fullscreenButton) {
      const icon = fullscreenButton.querySelector('i');
      if (icon) {
        icon.className = `nnicon ${isFullscreen ? 'nicon-a-Exitfullscreen-linetuichuquanping-xianxing' : 'nicon-a-Fullscreen-linequanping-xianxing'}`;
      }
      fullscreenButton.setAttribute('aria-label', isFullscreen ? '退出全屏' : '进入全屏');
    }
    if (typeof onFullscreenChange === 'function') onFullscreenChange({ isFullscreen, video, root });
  });

  updatePlayState();
  updateVolumeState();
  video.load();
  window.setTimeout(function() {
    if (!initialMetadataHandled && video.readyState >= 1) handleLoadedMetadata();
  }, 0);

  root._videoPlayer = {
    video,
    play: function() { return video.play(); },
    pause: function() { video.pause(); },
    toggle: togglePlayback,
    setMuted: function(nextMuted) { video.muted = Boolean(nextMuted); },
    setPlaybackRate: function(nextRate) {
      selectedPlaybackRate = Number(nextRate) || 1;
      video.playbackRate = selectedPlaybackRate;
    },
    setCurrentTime: function(nextTime) {
      video.currentTime = Math.max(0, Math.min(video.duration || 0, Number(nextTime) || 0));
    }
  };

  return root;
}

if (typeof window !== 'undefined') {
  window.injectVideoPlayerStyles = injectVideoPlayerStyles;
  window.createVideoPlayer = createVideoPlayer;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createVideoPlayer, injectVideoPlayerStyles };
}
