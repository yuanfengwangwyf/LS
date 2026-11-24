const CodePreviewStyles = `
  .nn-code-preview-toggle-fallback,
  .nn-code-preview-copy-fallback {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space4);
    min-height: 24px;
    padding: var(--space4) var(--space8);
    border: 0;
    border-radius: var(--border-radius-2r);
    background: var(--gray-9);
    box-shadow: inset 0 0 0 1px var(--gray-9);
    color: var(--gray-4);
    font-family: var(--font-family-main);
    font-size: 12px;
    line-height: 16px;
    font-weight: var(--font-weight-normal);
    cursor: pointer;
  }

  .nn-code-preview-toggle-fallback:hover,
  .nn-code-preview-copy-fallback:hover {
    background: var(--gray-8);
    box-shadow: inset 0 0 0 1px var(--gray-8);
  }

  .nn-code-preview-copy-fallback {
    width: 24px;
    height: 24px;
    padding: var(--space0);
  }

  .button-code-toggle.nn-btn,
  .button-code-toggle.nn-code-preview-toggle-fallback {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space4);
    min-height: 24px;
    padding: var(--space4) var(--space8) !important;
    border: 0;
    border-radius: var(--border-radius-2r);
    background: var(--gray-9);
    box-shadow: inset 0 0 0 1px var(--gray-9);
    color: var(--gray-4);
    font-family: var(--font-family-main);
    font-size: 12px;
    line-height: 16px;
    font-weight: var(--font-weight-normal);
  }

  .button-code-toggle.nn-btn:hover,
  .button-code-toggle.nn-code-preview-toggle-fallback:hover {
    background: var(--gray-8);
    box-shadow: inset 0 0 0 1px var(--gray-8);
    color: var(--gray-4);
  }

  .button-code-copy-button.nn-btn,
  .button-code-copy-button.nn-code-preview-copy-fallback {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px !important;
    height: 24px !important;
    min-width: 24px;
    min-height: 24px;
    padding: var(--space0) !important;
    border: 0;
    border-radius: var(--border-radius-2r);
    background: transparent;
    box-shadow: none;
    color: var(--gray-4);
  }

  .button-code-copy-button.nn-btn:hover,
  .button-code-copy-button.nn-code-preview-copy-fallback:hover {
    background: var(--gray-10);
    box-shadow: none;
    color: var(--gray-4);
  }

  .button-code-copy-button .nn-btn-icon,
  .button-code-copy-button.nn-code-preview-copy-fallback i {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-size-x7);
    height: var(--icon-size-x7);
    margin: var(--space0);
    font-size: var(--icon-size-x7);
    line-height: 1;
  }

  .button-code-toolbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    min-height: 40px;
    padding: var(--space8) var(--space48) var(--space8) var(--space8);
    border-bottom: 1px solid var(--gray-8);
    background: var(--button-code-toolbar-bg, #f7f8fa);
    box-sizing: border-box;
  }

  .button-code-tabs-fallback {
    display: inline-flex;
    align-items: center;
    gap: var(--space4);
    padding: var(--space0);
    border-radius: var(--border-radius-2r);
    background: var(--gray-10);
    font-family: var(--font-family-main);
    font-size: 12px;
    line-height: 16px;
  }

  .button-code-tabs-fallback__tab {
    min-width: 32px;
    height: 24px;
    padding: var(--space4) var(--space8);
    border: 0;
    border-radius: var(--border-radius-2r);
    background: transparent;
    color: var(--gray-6);
    font: inherit;
    cursor: pointer;
  }

  .button-code-tabs-fallback__tab:hover {
    color: var(--gray-4);
  }

  .button-code-tabs-fallback__tab.is-active {
    background: var(--gray-11);
    box-shadow: inset 0 0 0 1px var(--gray-9);
    color: var(--gray-3);
  }
`;

function injectCodePreviewStyles() {
  if (document.getElementById('nn-code-preview-styles')) return;
  const style = document.createElement('style');
  style.id = 'nn-code-preview-styles';
  style.textContent = CodePreviewStyles;
  document.head.appendChild(style);
}

function ensureCodePreviewIconfont() {
  if (document.querySelector('link[href*="iconfont/iconfont.css"]')) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '../iconfont/iconfont.css?v=20260602-code-preview-icons';
  document.head.appendChild(link);
}

function escapeCodePreviewHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function formatCodePreviewAttributes(element) {
  return Array.from(element.attributes).map(function(attribute) {
    return ` ${attribute.name}="${attribute.value}"`;
  }).join('');
}

function formatCodePreviewNode(node, indent) {
  const space = '  '.repeat(indent);

  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent.replace(/\s+/g, ' ').trim();
    return text ? [`${space}${text}`] : [];
  }

  if (node.nodeType !== Node.ELEMENT_NODE) return [];

  const tagName = node.tagName.toLowerCase();
  const attrs = formatCodePreviewAttributes(node);
  const children = Array.from(node.childNodes).flatMap(function(child) {
    return formatCodePreviewNode(child, indent + 1);
  });
  const isVoid = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'].includes(tagName);

  if (isVoid) return [`${space}<${tagName}${attrs}>`];
  if (!children.length) return [`${space}<${tagName}${attrs}></${tagName}>`];
  return [`${space}<${tagName}${attrs}>`].concat(children, [`${space}</${tagName}>`]);
}

function formatCodePreviewHtml(html) {
  const template = document.createElement('template');
  template.innerHTML = String(html || '').trim();
  return Array.from(template.content.childNodes).flatMap(function(node) {
    return formatCodePreviewNode(node, 0);
  }).join('\n');
}

function getCodePreviewClassNames(demo) {
  const classNames = new Set();
  Array.from(demo.querySelectorAll('[class]')).forEach(function(element) {
    String(element.className || '').split(/\s+/).forEach(function(name) {
      if (name && !name.startsWith('is-') && !name.startsWith('active')) {
        classNames.add(name);
      }
    });
  });
  return Array.from(classNames);
}

function formatCodePreviewCssRuleText(text) {
  const normalized = String(text || '').replace(/\s+/g, ' ').trim();
  if (!normalized) return '';

  let formatted = '';
  let indent = 0;
  let buffer = '';

  function appendBuffer() {
    const value = buffer.trim();
    if (value) {
      formatted += `${'  '.repeat(indent)}${value}\n`;
    }
    buffer = '';
  }

  for (let index = 0; index < normalized.length; index += 1) {
    const char = normalized[index];
    if (char === '{') {
      const selector = buffer.trim();
      if (selector) formatted += `${'  '.repeat(indent)}${selector} {\n`;
      buffer = '';
      indent += 1;
      continue;
    }

    if (char === ';') {
      buffer += ';';
      appendBuffer();
      continue;
    }

    if (char === '}') {
      appendBuffer();
      indent = Math.max(0, indent - 1);
      formatted += `${'  '.repeat(indent)}}\n`;
      buffer = '';
      continue;
    }

    buffer += char;
  }

  appendBuffer();
  return formatted.trimEnd();
}

function getCodePreviewCss(demo) {
  const classNames = getCodePreviewClassNames(demo);
  if (!classNames.length) return '/* No related CSS found for this demo. */';

  const matches = [];
  Array.from(document.styleSheets).forEach(function(sheet) {
    let rules;
    try {
      rules = sheet.cssRules;
    } catch (error) {
      return;
    }
    Array.from(rules || []).forEach(function(rule) {
      const text = rule.cssText || '';
      if (classNames.some(function(name) {
        return text.includes('.' + name);
      })) {
        matches.push(formatCodePreviewCssRuleText(text));
      }
    });
  });

  return matches.length ? matches.join('\n\n') : '/* No related CSS found for this demo. */';
}

function getCodePreviewPageScriptText() {
  const rawSource = Array.from(document.scripts).map(function(script) {
    return script.textContent || '';
  }).filter(function(text) {
    return /create[A-Z]|render[A-Z]|appendChild|document\.getElementById/.test(text);
  }).join('\n\n');

  const withoutEmbeddedCodeText = rawSource.replace(/\b(?:const|let|var)\s+[A-Za-z_$][\w$]*CodeText\s*=\s*`[\s\S]*?`;/g, '');
  return unwrapCodePreviewDomReady(withoutEmbeddedCodeText);
}

function unwrapCodePreviewDomReady(source) {
  return String(source || '')
    .replace(/document\.addEventListener\(\s*['"]DOMContentLoaded['"]\s*,\s*function\s*\(\)\s*\{\s*/g, '')
    .replace(/\s*\}\s*\)\s*;\s*$/g, '')
    .trim();
}

function extractCodePreviewDomReadyBodies(source) {
  const bodies = [];
  const marker = 'document.addEventListener';
  let searchIndex = 0;

  while (searchIndex < source.length) {
    const markerIndex = source.indexOf(marker, searchIndex);
    if (markerIndex === -1) break;
    const domReadyIndex = source.indexOf('DOMContentLoaded', markerIndex);
    if (domReadyIndex === -1) {
      searchIndex = markerIndex + marker.length;
      continue;
    }

    const functionIndex = source.indexOf('function', domReadyIndex);
    const openBraceIndex = source.indexOf('{', functionIndex);
    if (functionIndex === -1 || openBraceIndex === -1) {
      searchIndex = domReadyIndex + 1;
      continue;
    }

    const closeBraceIndex = findCodePreviewMatchingBrace(source, openBraceIndex);
    if (closeBraceIndex === -1) {
      searchIndex = openBraceIndex + 1;
      continue;
    }

    bodies.push(source.slice(openBraceIndex + 1, closeBraceIndex).trim());
    searchIndex = closeBraceIndex + 1;
  }

  return bodies.join('\n\n');
}

function findCodePreviewMatchingBrace(source, openBraceIndex) {
  let depth = 0;
  let quote = '';
  let escaped = false;

  for (let index = openBraceIndex; index < source.length; index += 1) {
    const char = source[index];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === quote) {
        quote = '';
      }
      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      quote = char;
      continue;
    }

    if (char === '{') depth += 1;
    if (char === '}') {
      depth -= 1;
      if (depth === 0) return index;
    }
  }

  return -1;
}

function getCodePreviewChildIds(demo) {
  return Array.from(demo.querySelectorAll('[id]')).map(function(element) {
    return element.id;
  }).filter(Boolean);
}

function splitCodePreviewStatements(source) {
  const statements = [];
  let start = 0;
  let depth = 0;
  let quote = '';
  let escaped = false;

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === quote) {
        quote = '';
      }
      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      quote = char;
      continue;
    }

    if (char === '(' || char === '{' || char === '[') depth += 1;
    if (char === ')' || char === '}' || char === ']') depth = Math.max(0, depth - 1);

    if (char === ';' && depth === 0) {
      statements.push(source.slice(start, index + 1).trim());
      start = index + 1;
      continue;
    }

    if (char === '\n' && next === '\n' && depth === 0) {
      const part = source.slice(start, index).trim();
      if (part) statements.push(part);
      start = index + 2;
    }
  }

  const last = source.slice(start).trim();
  if (last) statements.push(last);
  return statements;
}

function getCodePreviewIdentifierFromDeclaration(statement) {
  const match = statement.match(/\b(?:const|let|var|function)\s+([A-Za-z_$][\w$]*)\s*(?:=|\()/);
  return match ? match[1] : '';
}

function getCodePreviewDeclarationMap(statements) {
  return statements.reduce(function(map, statement) {
    const identifier = getCodePreviewIdentifierFromDeclaration(statement);
    if (identifier && !map.has(identifier)) {
      map.set(identifier, statement);
    }
    return map;
  }, new Map());
}

function getCodePreviewDependencies(statement) {
  return Array.from(statement.matchAll(/\b([A-Za-z_$][\w$]*)\b/g)).map(function(match) {
    return match[1];
  }).filter(function(name) {
    return ![
      'const', 'let', 'var', 'function', 'return', 'if', 'else', 'forEach', 'appendChild',
      'document', 'getElementById', 'createElement', 'Object', 'assign', 'true', 'false',
      'null', 'undefined'
    ].includes(name);
  });
}

function formatCodePreviewJs(code) {
  return String(code || '')
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map(function(line) {
      return line.replace(/\s+$/g, '');
    })
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function escapeCodePreviewRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getCodePreviewContainerNames(source, ids) {
  const names = new Set();
  ids.forEach(function(id) {
    const pattern = new RegExp('\\b(?:const|let|var)\\s+([A-Za-z_$][\\w$]*)\\s*=\\s*document\\.getElementById\\((["\\\'])' + escapeCodePreviewRegExp(id) + '\\2\\)\\s*;', 'g');
    let match;
    while ((match = pattern.exec(source))) {
      names.add(match[1]);
    }
  });
  return names;
}

function findCodePreviewLineStart(source, index) {
  const lineStart = source.lastIndexOf('\n', index);
  return lineStart === -1 ? 0 : lineStart + 1;
}

function findCodePreviewStatementEnd(source, startIndex) {
  let depth = 0;
  let quote = '';
  let escaped = false;

  for (let index = startIndex; index < source.length; index += 1) {
    const char = source[index];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === quote) {
        quote = '';
      }
      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      quote = char;
      continue;
    }

    if (char === '(' || char === '{' || char === '[') depth += 1;
    if (char === ')' || char === '}' || char === ']') depth = Math.max(0, depth - 1);
    if (char === ';' && depth === 0) return index + 1;
  }

  return source.length;
}

function extractCodePreviewStatementAt(source, index) {
  const start = findCodePreviewLineStart(source, index);
  const end = findCodePreviewStatementEnd(source, start);
  return source.slice(start, end).trim();
}

function extractCodePreviewEnclosingBlock(source, index) {
  const before = source.slice(0, index);
  const blockStartMatch = before.match(/([A-Za-z_$][\w$]*\.forEach\s*\(\s*function\s*\([^)]*\)\s*\{)[\s\S]*$/);
  if (!blockStartMatch) return '';

  const start = before.length - blockStartMatch[0].length;
  const end = findCodePreviewStatementEnd(source, start);
  const block = source.slice(start, end).trim();
  return block.includes(source.slice(index, index + 20).trim().slice(0, 8)) ? block : '';
}

function extractCodePreviewForContainer(source, containerName) {
  const pieces = [];
  const declarationPattern = new RegExp('\\b(?:const|let|var)\\s+' + escapeCodePreviewRegExp(containerName) + '\\s*=\\s*document\\.getElementById\\([^;]+;', 'g');
  const declarationMatch = declarationPattern.exec(source);
  if (declarationMatch) pieces.push(declarationMatch[0].trim());

  const appendPattern = new RegExp('\\b' + escapeCodePreviewRegExp(containerName) + '\\.appendChild\\s*\\(', 'g');
  let appendMatch;
  while ((appendMatch = appendPattern.exec(source))) {
    const block = extractCodePreviewEnclosingBlock(source, appendMatch.index);
    pieces.push(block || extractCodePreviewStatementAt(source, appendMatch.index));
  }

  const renderPattern = new RegExp('\\brender[A-Z][A-Za-z0-9_$]*\\s*\\(\\s*' + escapeCodePreviewRegExp(containerName) + '\\b', 'g');
  let renderMatch;
  while ((renderMatch = renderPattern.exec(source))) {
    pieces.push(extractCodePreviewStatementAt(source, renderMatch.index));
  }

  return pieces;
}

function extractCodePreviewDirectRenderCalls(source, ids) {
  const pieces = [];
  ids.forEach(function(id) {
    const selector = '#' + id;
    const renderPattern = new RegExp('\\brender[A-Z][A-Za-z0-9_$]*\\s*\\(\\s*(["\\\'])' + escapeCodePreviewRegExp(selector) + '\\1', 'g');
    let match;
    while ((match = renderPattern.exec(source))) {
      pieces.push(extractCodePreviewStatementAt(source, match.index));
    }
  });
  return pieces.filter(function(piece, index, list) {
    return piece && list.indexOf(piece) === index;
  });
}

function buildCodePreviewFromScript(demo) {
  const ids = getCodePreviewChildIds(demo);
  if (!ids.length) return '';

  const source = getCodePreviewPageScriptText();
  if (!source) return '';

  const directRenderPieces = extractCodePreviewDirectRenderCalls(source, ids);
  if (directRenderPieces.length) {
    return formatCodePreviewJs(directRenderPieces.join('\n\n'));
  }

  const directContainerNames = getCodePreviewContainerNames(source, ids);
  if (directContainerNames.size) {
    const directPieces = Array.from(directContainerNames).flatMap(function(name) {
      return extractCodePreviewForContainer(source, name);
    }).filter(function(piece, index, list) {
      return piece && list.indexOf(piece) === index;
    });

    if (directPieces.length > directContainerNames.size) {
      return formatCodePreviewJs(directPieces.join('\n\n'));
    }
  }

  const statements = splitCodePreviewStatements(source).filter(function(statement) {
    return !/basicButtonsCode|codeToggleButton|basic-buttons-code|CodePreview|button-code/.test(statement);
  });
  const selected = new Set();
  const containerNames = new Set();
  const declarationMap = getCodePreviewDeclarationMap(statements);

  statements.forEach(function(statement) {
    ids.forEach(function(id) {
      const idPattern = new RegExp('\\b(?:const|let|var)\\s+([A-Za-z_$][\\w$]*)\\s*=\\s*document\\.getElementById\\((["\\\'])' + escapeCodePreviewRegExp(id) + '\\2\\)');
      const match = statement.match(idPattern);
      if (match) {
        containerNames.add(match[1]);
        selected.add(statement);
      }
    });
  });

  statements.forEach(function(statement) {
    const normalized = statement.replace(/\s+/g, ' ');
    const usesContainer = Array.from(containerNames).some(function(name) {
      return new RegExp('\\b' + escapeCodePreviewRegExp(name) + '\\b').test(normalized);
    });
    const touchesTargetId = ids.some(function(id) {
      return normalized.includes(`getElementById('${id}')`) ||
        normalized.includes(`getElementById("${id}")`);
    });
    const hasRenderableCall = /appendChild|create[A-Z][A-Za-z0-9_$]*\s*\(|render[A-Z][A-Za-z0-9_$]*\s*\(/.test(normalized);

    if ((usesContainer || touchesTargetId) && hasRenderableCall) {
      selected.add(statement);
      const identifier = getCodePreviewIdentifierFromDeclaration(statement);
      if (identifier) containerNames.add(identifier);
    }
  });

  Array.from(selected).forEach(function(statement) {
    getCodePreviewDependencies(statement).forEach(function(name) {
      const declaration = declarationMap.get(name);
      if (declaration && !selected.has(declaration)) {
        selected.add(declaration);
      }
    });
  });

  const cleaned = statements.filter(function(statement) {
    return selected.has(statement);
  }).filter(function(statement) {
    return !/button-code|CodePreview|showCopiedMessage|copyButtonCode/.test(statement);
  });

  return formatCodePreviewJs(cleaned.join('\n\n'));
}

function highlightCodePreview(code) {
  return escapeCodePreviewHtml(code).replace(/("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(\b(?:const|let|var|function|return|if|else|for|while|new)\b)|(\b(?:true|false|null|undefined)\b)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_:][-A-Za-z0-9_:.]*(?=\s*=))|(&lt;\/?|\/?&gt;|[{}\[\]().,:;=])|(\b[A-Za-z_$][\w$]*(?=\s*\())|(\b[A-Za-z_$][\w$]*\b)/g, function(match, stringValue, keyword, booleanValue, numberValue, propertyName, punctuation, functionName, variableName) {
    if (stringValue) return '<span class="button-code-token-string">' + stringValue + '</span>';
    if (keyword) return '<span class="button-code-token-keyword">' + keyword + '</span>';
    if (booleanValue) return '<span class="button-code-token-boolean">' + booleanValue + '</span>';
    if (numberValue) return '<span class="button-code-token-number">' + numberValue + '</span>';
    if (functionName) return '<span class="button-code-token-function">' + functionName + '</span>';
    if (propertyName) return '<span class="button-code-token-property">' + propertyName + '</span>';
    if (punctuation) return '<span class="button-code-token-punctuation">' + punctuation + '</span>';
    if (variableName) return '<span class="button-code-token-variable">' + variableName + '</span>';
    return match;
  });
}

function copyCodePreviewText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  return Promise.resolve();
}

function createCodePreviewButton(options) {
  if (typeof window !== 'undefined' && typeof window.createButton === 'function') {
    return window.createButton(options);
  }

  const button = document.createElement('button');
  button.type = 'button';
  button.className = options.text ? 'nn-code-preview-toggle-fallback' : 'nn-code-preview-copy-fallback';
  button.innerHTML = [
    options.text ? `<span>${options.text}</span>` : '',
    options.icon || ''
  ].join('');
  if (typeof options.onClick === 'function') {
    button.addEventListener('click', options.onClick);
  }
  return button;
}

function createCodePreviewTabs(onChange) {
  const tabItems = [
    { name: 'JS', value: 'js' },
    { name: 'HTML', value: 'html' },
    { name: 'CSS', value: 'css' }
  ];

  if (typeof window !== 'undefined' && typeof window.createTabs === 'function') {
    const tabs = window.createTabs({
      type: 'tertiary',
      defaultActive: 0,
      tabs: tabItems.map(function(item) {
        return { name: item.name };
      }),
      onChange: function(event) {
        const item = tabItems[event.index] || tabItems[0];
        onChange(item.value);
      }
    });
    tabs.classList.add('button-code-tabs');
    return tabs;
  }

  const fallback = document.createElement('div');
  fallback.className = 'button-code-tabs-fallback';
  tabItems.forEach(function(item, index) {
    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = 'button-code-tabs-fallback__tab' + (index === 0 ? ' is-active' : '');
    tab.textContent = item.name;
    tab.addEventListener('click', function() {
      fallback.querySelectorAll('.button-code-tabs-fallback__tab').forEach(function(other) {
        other.classList.remove('is-active');
      });
      tab.classList.add('is-active');
      onChange(item.value);
    });
    fallback.appendChild(tab);
  });
  return fallback;
}

function showCodePreviewCopiedMessage() {
  if (typeof window !== 'undefined' && typeof window.showMessage === 'function') {
    window.showMessage({
      state: 'success',
      text: '已复制',
      duration: 1800
    });
    return;
  }

  const message = document.createElement('div');
  message.textContent = '已复制';
  message.style.cssText = 'position:fixed;top:50px;left:50%;z-index:3000;transform:translate(-50%,-12px);padding:var(--space8) var(--space16);border:1px solid var(--gray-8);border-radius:var(--border-radius-4r);background:var(--gray-2);color:var(--gray-5);box-shadow:var(--shadow-sm);font-family:var(--font-family-main);font-size:14px;line-height:20px;opacity:0;transition:opacity 180ms ease,transform 240ms cubic-bezier(0.22,1,0.36,1);';
  document.body.appendChild(message);
  requestAnimationFrame(function() {
    message.style.opacity = '1';
    message.style.transform = 'translate(-50%,0)';
  });
  window.setTimeout(function() {
    message.style.opacity = '0';
    message.style.transform = 'translate(-50%,-12px)';
    window.setTimeout(function() {
      if (message.parentNode) message.parentNode.removeChild(message);
    }, 200);
  }, 1800);
}

function createCodePreviewForDemo(demo) {
  if (!demo || demo.dataset.codePreviewReady === 'true') return;
  if (demo.nextElementSibling && demo.nextElementSibling.classList && demo.nextElementSibling.classList.contains('button-code-actions')) {
    demo.dataset.codePreviewReady = 'true';
    return;
  }

  demo.dataset.codePreviewReady = 'true';

  const actions = document.createElement('div');
  actions.className = 'button-code-actions';

  const panel = document.createElement('div');
  panel.className = 'button-code-panel';
  panel.setAttribute('aria-hidden', 'true');
  panel.innerHTML = `
    <div class="button-code-panel__inner">
      <div class="button-code-card">
        <div class="button-code-toolbar"></div>
        <div class="button-code-copy"></div>
        <pre class="button-code-pre"><code></code></pre>
      </div>
    </div>
  `;

  let currentCode = '';
  let currentCodeType = 'js';
  let codeByType = null;
  const codeEl = panel.querySelector('code');
  const copyHost = panel.querySelector('.button-code-copy');
  const toolbar = panel.querySelector('.button-code-toolbar');

  function getCodeByType() {
    if (!codeByType) {
      codeByType = {
        js: demo.dataset.codeJs || buildCodePreviewFromScript(demo) || formatCodePreviewHtml(demo.innerHTML),
        html: demo.dataset.codeHtml || formatCodePreviewHtml(demo.innerHTML),
        css: demo.dataset.codeCss || getCodePreviewCss(demo)
      };
    }
    return codeByType;
  }

  function renderCode(type) {
    currentCodeType = type || currentCodeType;
    currentCode = getCodeByType()[currentCodeType] || '';
    codeEl.innerHTML = highlightCodePreview(currentCode);
  }

  function syncCode() {
    renderCode(currentCodeType);
  }

  const toggleButton = createCodePreviewButton({
    text: 'Code',
    variant: 'system',
    level: 'secondary',
    size: 'small',
    icon: '<i class="nnicon nicon-a-Arrow-down-linejiantouxia-xianxing"></i>',
    iconPosition: 'right',
    onClick: function() {
      const willOpen = !panel.classList.contains('is-open');
      if (willOpen) {
        document.querySelectorAll('.button-code-panel.is-open').forEach(function(openPanel) {
          if (openPanel === panel) return;
          openPanel.classList.remove('is-open');
          openPanel.setAttribute('aria-hidden', 'true');
          const openIcon = openPanel.previousElementSibling && openPanel.previousElementSibling.querySelector('.button-code-toggle .nn-btn-icon i, .button-code-toggle i');
          if (openIcon) {
            openIcon.className = 'nnicon nicon-a-Arrow-down-linejiantouxia-xianxing';
          }
        });
      }
      const isOpen = panel.classList.toggle('is-open', willOpen);
      panel.setAttribute('aria-hidden', String(!isOpen));
      const icon = toggleButton.querySelector('.nn-btn-icon i, i');
      if (icon) {
        icon.className = `nnicon ${isOpen ? 'nicon-a-Arrowup-linejiantoushang-xianxing' : 'nicon-a-Arrow-down-linejiantouxia-xianxing'}`;
      }
      if (isOpen) syncCode();
    }
  });
  toggleButton.classList.add('button-code-toggle');

  const copyButton = createCodePreviewButton({
    text: '',
    variant: 'system',
    level: 'tertiary',
    size: 'small',
    icon: '<i class="nnicon nicon-a-Copytext-linefuzhiwenben-xianxing"></i>',
    onClick: function() {
      if (!currentCode) syncCode();
      copyCodePreviewText(currentCode).then(showCodePreviewCopiedMessage);
    }
  });
  copyButton.classList.add('button-code-copy-button');

  toolbar.appendChild(createCodePreviewTabs(function(type) {
    renderCode(type);
  }));
  actions.appendChild(toggleButton);
  copyHost.appendChild(copyButton);

  const group = document.createElement('div');
  group.className = 'button-code-preview-group';
  demo.insertAdjacentElement('beforebegin', group);
  group.appendChild(demo);
  const demoWidth = demo.getBoundingClientRect().width;
  if (demoWidth > 0) {
    group.style.width = `${Math.ceil(demoWidth)}px`;
  }
  group.appendChild(actions);
  actions.insertAdjacentElement('afterend', panel);
}

function initCodePreviews(root = document) {
  ensureCodePreviewIconfont();
  injectCodePreviewStyles();
  const demos = Array.from(root.querySelectorAll('[class*="-page-demo"], [data-code-preview="true"]')).filter(function(demo) {
    return !demo.classList.contains('button-code-panel') && !demo.closest('.button-code-panel');
  });
  demos.forEach(createCodePreviewForDemo);
}

if (typeof window !== 'undefined') {
  window.injectCodePreviewStyles = injectCodePreviewStyles;
  window.initCodePreviews = initCodePreviews;
  window.createCodePreviewForDemo = createCodePreviewForDemo;
  document.addEventListener('DOMContentLoaded', function() {
    window.setTimeout(function() {
      initCodePreviews();
    }, 0);
  });
}
