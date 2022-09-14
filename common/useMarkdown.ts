import { Remarkable } from 'remarkable';
import hljs from 'highlight.js';

/**
 * Highlights all of the code in a given string.
 * @param str
 * @param lang
 * @returns syntax highlighting
 */
const highlight = (str: string, lang: string) => {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(str, { language: lang }).value;
    } catch (err) {
      console.error(err);
    }
  }

  try {
    return hljs.highlightAuto(str).value;
  } catch (err) {
    console.error(err);
  }

  return '';
};

/**
 * Converts a markdown string to html
 * @param value
 * @returns an html string
 */
const useMarkdown = (value: string) => {
  const md = new Remarkable({ highlight });
  return md.render(value);
};

export default useMarkdown;
