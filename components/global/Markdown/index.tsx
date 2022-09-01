import { Remarkable } from 'remarkable';
import MarkdownType from '../../../types/global/Markdown';
import style from './style';

/**
 * Creates a markdown component to be used throughout the app
 *
 * @param {String} content
 * @returns a markdown component
 */
const Markdown = ({ content }: MarkdownType) => {
  const md = new Remarkable();
  return (
    <section
      css={style}
      data-testid="markdown"
      dangerouslySetInnerHTML={{ __html: md.render(content) }}
    />
  );
};

export default Markdown;
