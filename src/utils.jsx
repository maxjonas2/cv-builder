export function convertMarkdownToJSX(text) {
  // const BOLD_REGEXP = /\*\*([\w\s]+)\*\*/g;
  const ITALIC_REGEXP = /\*([\w\s]+)\*/g;

  const jsx = text.split(ITALIC_REGEXP).map((match, index) => {
    return index % 2 === 0 ? <span>{match}</span> : <em>{match}</em>;
  });

  return jsx;
}
