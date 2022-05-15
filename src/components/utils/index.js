import { jsx as _jsx } from 'react/jsx-runtime';

export const nl2br = (str) => {
  const newlineRegex = /(\r\n|\r|\n)/g;

  if (typeof str === 'number') {
    return str;
  } else if (typeof str !== 'string') {
    return '';
  }

  return str.split(newlineRegex).map(function(line, index) {
    if (line.match(newlineRegex)) {
      return _jsx('br', { key: index });
    }
    return line;
  });
};

export const getPriorityLanguage = () => {
  return (
    (window.navigator.languages && window.navigator.languages[0]) ||
    window.navigator.language ||
    window.navigator.userLanguage ||
    window.navigator.browserLanguage
  );
}
