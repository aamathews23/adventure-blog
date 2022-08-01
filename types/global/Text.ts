type Text = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'li';
  className?: string;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
  'data-testid'?: string;
};

export default Text;
