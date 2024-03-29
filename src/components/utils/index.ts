import React from 'react';

export function nl2br(str: string) {
  const newlineRegex = /(\r\n|\r|\n)/g;

  return str.split(newlineRegex).map(function(line, index) {
    if (line.match(newlineRegex)) {
      return React.createElement('br', { key: index });
    }
    return line;
  });
};

interface Navigator {
  userLanguage?: string;
  browserLanguage?: string;
  languages: readonly string[];
  language: string;
}

export function getPriorityLanguage() {
  const navigator: Navigator = window.navigator;

  return (
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage ||
    navigator.browserLanguage
  );
}

export function getUserTimeZone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone
} 