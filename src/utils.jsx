export function convertMarkdownToJSX(text) {
  // const BOLD_REGEXP = /\*\*([\w\s]+)\*\*/g;
  // const CODE_REGEXP = /\+(.*)\+/g;
  const ITALIC_REGEXP = /\*([\w.\<\>\s]+)\*/g;

  const jsx = text.split(ITALIC_REGEXP).map((match, index) => {
    return index % 2 === 0 ? <span>{match}</span> : <code>{match}</code>;
  });

  // const jsx = text.split(CODE_REGEXP).map((match, index) => {
  //   return index % 2 === 0 ? <span>{match}</span> : <code>{match}</code>;
  // });

  return jsx;
}

export function matchAndCapture(regexp, text) {
  const matches = [];
  let match;
  while ((match = regexp.exec(text)) !== null) {
    matches.push(match[0]);
  }
  return matches;
}
