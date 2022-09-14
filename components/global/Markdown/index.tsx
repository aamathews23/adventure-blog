import MarkdownType from '../../../types/global/Markdown';
import useEmojis from '../../../common/useEmojis';
import useMarkdown from '../../../common/useMarkdown';
import style from './style';
import 'highlight.js/styles/github-dark.css';

/**
 * Creates a markdown component to be used throughout the app
 *
 * @param {String} content
 * @returns a markdown component
 */
const Markdown = ({ content }: MarkdownType) => {
  return (
    <section
      css={style}
      data-testid="markdown"
      dangerouslySetInnerHTML={{ __html: useMarkdown(useEmojis(content)) }}
    />
  );
};

export default Markdown;
