import { css } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const section = css({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 500,
  margin: '128px auto',
  [breakpoints.sm]: { textAlign: 'center' },
});

const title = css({
  fontFamily: 'Karla, sans-serif',
  fontSize: 32,
  marginBottom: 32,
  [breakpoints.lg]: { fontSize: 48 },
});

const style = {
  section,
  title,
};

export default style;
