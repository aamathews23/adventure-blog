import { Remarkable } from 'remarkable';
import MarkdownType from '../../../types/posts/Markdown';
import style from './style';

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
