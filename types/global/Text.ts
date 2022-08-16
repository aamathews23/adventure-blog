import { Interpolation, Theme } from '@emotion/react';

type Text = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'li';
  css?: Interpolation<Theme>;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
  'data-testid'?: string;
};

export default Text;
