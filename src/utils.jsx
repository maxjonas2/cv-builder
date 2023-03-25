const API_KEY = "API_KEY";

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

export async function translateIntoPortuguese(text) {
  const requestBody = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content:
          "Translate the following piece of English text into Portuguese: " +
          text,
      },
    ],
    temperature: 0.5,
  };

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  const json = await response.json();
  return json.choices[0].message.content;
}
