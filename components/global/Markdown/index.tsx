import { Remarkable } from 'remarkable';
import hljs from 'highlight.js';
import MarkdownType from '../../../types/global/Markdown';
import style from './style';
import 'highlight.js/styles/github-dark.css';

/**
 * Creates a markdown component to be used throughout the app
 *
 * @param {String} content
 * @returns a markdown component
 */
const Markdown = ({ content }: MarkdownType) => {
  const md = new Remarkable({
    highlight: function (str: string, lang: string) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (err) {}
      }

      try {
        return hljs.highlightAuto(str).value;
      } catch (err) {}

      return '';
    },
  });
  return (
    <section
      css={style}
      data-testid="markdown"
      dangerouslySetInnerHTML={{ __html: md.render(content) }}
    />
  );
};

export default Markdown;
