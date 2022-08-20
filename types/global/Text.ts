import { Interpolation, Theme, SerializedStyles } from '@emotion/react';

type Text = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'li';
  style?: SerializedStyles;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
  'data-testid'?: string;
};

export default Text;
