import useEmojis from '@/common/useEmojis';
import useMarkdown from '@/common/useMarkdown';
import breakpoints from '@/common/breakpoints';
import 'highlight.js/styles/github-dark.css';

/**
 * The markdown component type
 */
type MarkdownProps = {
  content: string;
};

/**
 * Creates a markdown component to be used throughout the app
 *
 * @param {String} content
 * @returns a markdown component
 */
const Markdown = ({ content }: MarkdownProps) => (
  <section
    css={{
      '& h1': {
        fontSize: 48,
        fontWeight: 'bold',
        fontFamily: 'Karla, sans-serif',
        marginBottom: 24,
        [breakpoints.sm]: {
          fontSize: 64,
        },
      },
      '& h2': {
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'Karla, sans-serif',
        marginBottom: 24,
        [breakpoints.sm]: {
          fontSize: 48,
        },
      },
      '& h3': {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Karla, sans-serif',
        marginBottom: 16,
        [breakpoints.sm]: {
          fontSize: 32,
        },
      },
      '& h4': {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Karla, sans-serif',
        marginBottom: 16,
        [breakpoints.sm]: {
          fontSize: 24,
        },
      },
      '& h5': {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Karla, sans-serif',
        marginBottom: 8,
      },
      '& h6': {
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'Karla, sans-serif',
        marginBottom: 8,
      },
      '& h1, & h2, & h3, & h4, & h5, & h6': {
        width: 'fit-content',
      },
      '& p, & a, & li, & code': {
        fontSize: 16,
        fontFamily: 'Inconsolata, monospace',
      },
      '& p, & img, & blockquote, & pre': {
        marginBottom: 16,
      },
      '& p': {
        lineHeight: '20px',
      },
      '& li': {
        marginLeft: 16,
        marginBottom: 8,
        '& li': {
          marginLeft: 16,
        },
      },
      '& img': {
        width: '100%',
        borderRadius: 8,
        boxShadow: '0px 0px 12px 2px #0e0e0f',
      },
      '& pre': {
        backgroundColor: '#313135',
        paddingTop: 16,
        paddingRight: 16,
        paddingBottom: 16,
        borderRadius: 8,
      },
    }}
    data-testid="markdown"
    dangerouslySetInnerHTML={{ __html: useMarkdown(useEmojis(content)) }}
  />
);

export default Markdown;
