import { css } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const section = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '75vh',
});

const content = css({
  maxWidth: 400,
});

const title = css({
  fontSize: 32,
  fontFamily: 'Karla, sans-serif',
  marginBottom: 16,
  [breakpoints.lg]: { fontSize: 48 },
});

const body = css({
  fontSize: 16,
  fontFamily: 'Inconsolata, monospace',
  marginBottom: 32,
  [breakpoints.lg]: { marginBottom: 48 },
});

const style = {
  section,
  content,
  title,
  body,
};

export default style;
