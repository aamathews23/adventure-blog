import { css } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const title = css({
  fontSize: 48,
  fontFamily: 'Karla, sans-serif',
  marginBottom: 24,
  [breakpoints.lg]: { fontSize: 64 },
});

const body = css({
  fontSize: 16,
  fontFamily: 'Inconsolata, monospace',
  marginBottom: 24,
});

const img = css({
  borderRadius: '50%',
  overflow: 'hidden',
  '& > span': { display: 'block !important' },
});

const style = {
  title,
  body,
  img,
};

export default style;
