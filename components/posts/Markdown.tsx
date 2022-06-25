import { Remarkable } from 'remarkable';

// Styles
import styles from '../../styles/components/posts/markdown.module.scss';

// Types
type MarkdownType = {
  content: string;
};

const Markdown = ({ content }: MarkdownType) => {
  const md = new Remarkable();
  return (
    <section
      className={styles.markdown}
      data-testid="markdown"
      dangerouslySetInnerHTML={{ __html: md.render(content) }}
    />
  );
};

export default Markdown;
