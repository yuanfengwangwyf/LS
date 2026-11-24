(function() {
  'use strict';

  const VERTEX_SHADER = [
    'attribute vec2 a_position;',
    'varying vec2 v_uv;',
    'void main() {',
    '  v_uv = a_position * 0.5 + 0.5;',
    '  gl_Position = vec4(a_position, 0.0, 1.0);',
    '}'
  ].join('\n');

  const FRAGMENT_SHADER = [
    '#ifdef GL_FRAGMENT_PRECISION_HIGH',
    'precision highp float;',
    '#else',
    'precision mediump float;',
    '#endif',
    'varying vec2 v_uv;',
    'uniform vec2 u_resolution;',
    'uniform float u_time;',
    'uniform float u_tileSize;',
    'uniform vec2 u_pointer;',
    'uniform vec3 u_base;',
    'uniform vec3 u_tile;',
    'uniform vec3 u_accent;',
    'uniform vec3 u_hot;',
    'uniform vec4 u_line;',
    'uniform vec4 u_core;',
    'float roundedBox(vec2 p, vec2 b, float r) {',
    '  vec2 q = abs(p) - b + r;',
    '  return min(max(q.x, q.y), 0.0) + length(max(q, vec2(0.0))) - r;',
    '}',
    'float band(float x, float width) {',
    '  float t = x / width;',
    '  return exp(-t * t);',
    '}',
    'float hash(vec2 p) {',
    '  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);',
    '}',
    'void main() {',
    '  vec2 res = u_resolution;',
    '  float aspect = res.x / res.y;',
    '  vec2 uv = v_uv;',
    '  vec2 sc = (uv - 0.5) * vec2(aspect, 1.0);',
    '  vec2 cell = (uv * res) / u_tileSize;',
    '  vec2 f = fract(cell);',
    '  float d = roundedBox(f - 0.5, vec2(0.47), 0.085);',
    '  float inside = 1.0 - smoothstep(-0.006, 0.006, d);',
    '  float rim = 1.0 - smoothstep(0.0, 0.010, abs(d));',
    '  vec2 q = abs(f - 0.5) - 0.47;',
    '  vec2 n2 = normalize(q + vec2(0.0001));',
    '  vec3 normal = normalize(vec3(n2 * 0.55, 0.8));',
    '  vec3 lightDir = normalize(vec3(-0.35, 0.55, 0.75));',
    '  float diff = clamp(dot(normal, lightDir), 0.0, 1.0);',
    '  float diag = clamp(0.5 + dot(f - 0.5, vec2(-0.6, 0.7)), 0.0, 1.0);',
    '  vec3 tileColor = u_tile * (0.85 + diff * 0.45) * (0.9 + diag * 0.2);',
    '  tileColor += u_line.rgb * u_line.a * (rim * 1.1 + diag * 0.45);',
    '  vec3 color = mix(u_base * 0.62, tileColor, inside);',
    '  color = mix(color, u_line.rgb, rim * u_line.a * inside * 0.9);',
    '  vec2 beamDir = normalize(vec2(0.32, -1.0));',
    '  float coord = dot(sc, beamDir);',
    '  float drift = sin(u_time * 0.22) * 0.03;',
    '  float b1 = band(coord - 0.03 + drift, 0.075);',
    '  float b2 = band(coord + 0.22 - drift * 0.7, 0.05);',
    '  float b3 = band(coord + 0.46 + drift * 0.4, 0.11);',
    '  float source = exp(-length(sc - vec2(0.48, -0.30)) * 5.0);',
    '  vec2 center = (u_pointer - 0.5) * vec2(0.05, 0.06);',
    '  float radius = length((sc - center) * vec2(0.85, 1.0));',
    '  float glow = exp(-radius * radius * 4.2);',
    '  float core = exp(-radius * radius * 16.0);',
    '  float light = b1 * 0.62 + b2 * 0.32 + b3 * 0.14 + source * 0.5;',
    '  vec3 beamColor = mix(u_accent, u_hot, 0.35);',
    '  color += beamColor * light * (0.45 + 0.55 * inside);',
    '  color += u_accent * glow * 0.42;',
    '  color += u_hot * core * 0.12;',
    '  color += u_core.rgb * u_core.a * core * 0.5;',
    '  color *= 1.0 - smoothstep(0.38, 1.0, radius) * 0.8;',
    '  color += (hash(gl_FragCoord.xy) - 0.5) / 255.0;',
    '  gl_FragColor = vec4(color, 1.0);',
    '}'
  ].join('\n');

  function readColor(name) {
    const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    if (!raw) return null;
    if (raw.charAt(0) === '#') {
      let hex = raw.slice(1);
      if (hex.length === 3) hex = hex.split('').map(function(ch) { return ch + ch; }).join('');
      if (hex.length !== 6) return null;
      const red = parseInt(hex.slice(0, 2), 16);
      const green = parseInt(hex.slice(2, 4), 16);
      const blue = parseInt(hex.slice(4, 6), 16);
      if ([red, green, blue].some(function(value) { return Number.isNaN(value); })) return null;
      return [red / 255, green / 255, blue / 255, 1];
    }
    const match = raw.match(/^rgba?\(([^)]+)\)$/);
    if (!match) return null;
    const parts = match[1].split(',').map(function(part) { return parseFloat(part); });
    if (parts.length < 3 || parts.slice(0, 3).some(function(value) { return Number.isNaN(value); })) return null;
    return [parts[0] / 255, parts[1] / 255, parts[2] / 255, parts.length > 3 && !Number.isNaN(parts[3]) ? parts[3] : 1];
  }

  function compileShader(gl, type, source) {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      if (window.console && console.warn) console.warn('DeveloperCenterHero shader:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  function createProgram(gl) {
    const vertex = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragment = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vertex || !fragment) return null;
    const program = gl.createProgram();
    if (!program) return null;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      if (window.console && console.warn) console.warn('DeveloperCenterHero link:', gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return null;
    }
    return program;
  }

  function init() {
    const hero = document.querySelector('.developer-intro-hero');
    if (!hero) return;
    const canvas = hero.querySelector('.developer-intro-hero__canvas');
    if (!canvas) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const contextAttributes = { alpha: false, antialias: false, depth: false, stencil: false, premultipliedAlpha: false, powerPreference: 'low-power' };
    const gl = canvas.getContext('webgl2', contextAttributes) || canvas.getContext('webgl', contextAttributes) || canvas.getContext('experimental-webgl', contextAttributes);
    if (!gl) return;

    const colors = {
      base: readColor('--Neutral-2'),
      tile: readColor('--Neutral-1'),
      accent: readColor('--Esports-Blue-dark'),
      hot: readColor('--Esports-Blue'),
      line: readColor('--White-A8'),
      core: readColor('--White-A16')
    };
    if (!colors.base || !colors.tile || !colors.accent || !colors.hot || !colors.line || !colors.core) return;

    const program = createProgram(gl);
    if (!program) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uniform = {
      resolution: gl.getUniformLocation(program, 'u_resolution'),
      time: gl.getUniformLocation(program, 'u_time'),
      tileSize: gl.getUniformLocation(program, 'u_tileSize'),
      pointer: gl.getUniformLocation(program, 'u_pointer'),
      base: gl.getUniformLocation(program, 'u_base'),
      tile: gl.getUniformLocation(program, 'u_tile'),
      accent: gl.getUniformLocation(program, 'u_accent'),
      hot: gl.getUniformLocation(program, 'u_hot'),
      line: gl.getUniformLocation(program, 'u_line'),
      core: gl.getUniformLocation(program, 'u_core')
    };

    gl.uniform3f(uniform.base, colors.base[0], colors.base[1], colors.base[2]);
    gl.uniform3f(uniform.tile, colors.tile[0], colors.tile[1], colors.tile[2]);
    gl.uniform3f(uniform.accent, colors.accent[0], colors.accent[1], colors.accent[2]);
    gl.uniform3f(uniform.hot, colors.hot[0], colors.hot[1], colors.hot[2]);
    gl.uniform4f(uniform.line, colors.line[0], colors.line[1], colors.line[2], colors.line[3]);
    gl.uniform4f(uniform.core, colors.core[0], colors.core[1], colors.core[2], colors.core[3]);

    const pointer = { x: 0.5, y: 0.5 };
    const target = { x: 0.5, y: 0.5 };
    let running = false;
    let visible = true;
    let ready = false;
    let frameId = 0;
    let startedAt = performance.now();
    let lastWidth = 0;
    let lastHeight = 0;
    let lastDpr = 0;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.round(rect.width * dpr));
      const height = Math.max(1, Math.round(rect.height * dpr));
      if (width === lastWidth && height === lastHeight && dpr === lastDpr) return;
      lastWidth = width;
      lastHeight = height;
      lastDpr = dpr;
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
      gl.uniform2f(uniform.resolution, width, height);
      gl.uniform1f(uniform.tileSize, 56 * dpr);
    }

    function paint(now) {
      pointer.x += (target.x - pointer.x) * 0.06;
      pointer.y += (target.y - pointer.y) * 0.06;
      gl.uniform1f(uniform.time, (now - startedAt) / 1000);
      gl.uniform2f(uniform.pointer, pointer.x, pointer.y);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      if (!ready) {
        ready = true;
        hero.classList.add('is-webgl-ready');
      }
    }

    function loop(now) {
      if (!running) return;
      if (!visible || document.hidden) {
        running = false;
        return;
      }
      resize();
      paint(now);
      frameId = requestAnimationFrame(loop);
    }

    function start() {
      if (running || !visible || document.hidden) return;
      running = true;
      frameId = requestAnimationFrame(loop);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(frameId);
    }

    function renderOnce() {
      resize();
      paint(performance.now());
    }

    resize();
    renderOnce();
    start();

    if ('ResizeObserver' in window) {
      const resizeObserver = new ResizeObserver(function() {
        resize();
        if (!running) renderOnce();
      });
      resizeObserver.observe(canvas);
    }

    if ('IntersectionObserver' in window) {
      const intersectionObserver = new IntersectionObserver(function(entries) {
        visible = entries[entries.length - 1].isIntersecting;
        if (visible) start(); else stop();
      }, { threshold: 0 });
      intersectionObserver.observe(hero);
    }

    document.addEventListener('visibilitychange', function() {
      if (document.hidden) stop(); else start();
    });

    hero.addEventListener('pointermove', function(event) {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      target.x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
      target.y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
    });

    hero.addEventListener('pointerleave', function() {
      target.x = 0.5;
      target.y = 0.5;
    });

    canvas.addEventListener('webglcontextlost', function(event) {
      event.preventDefault();
      stop();
      hero.classList.remove('is-webgl-ready');
      ready = false;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
