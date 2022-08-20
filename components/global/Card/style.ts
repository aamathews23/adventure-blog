import { css } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const card = css({
  width: '100%',
  backgroundColor: '#313135',
  padding: 16,
  borderRadius: 4,
  '&:hover, &:focus': {
    cursor: 'pointer',
    transform: 'scale(1.03)',
    transition: 'transform 300ms',
  },
  '&:focus': {
    outline: '2px solid #fff',
    outlineOffset: 4,
  },
});

const header = css({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 16,
});

const title = css({
  fontSize: 24,
  fontWeight: 'bold',
  fontFamily: 'Karla, sans-serif',
  marginBottom: 8,
  width: 'fit-content',
  [breakpoints.sm]: {
    fontSize: 32,
  },
});

const date = css({
  fontSize: 16,
  fontFamily: 'Inconsolata, monospace',
  [breakpoints.lg]: {
    fontSize: 20,
  },
});

const body = css({
  fontSize: 16,
  fontFamily: 'Inconsolata, monospace',
  [breakpoints.lg]: {
    fontSize: 20,
  },
});

const img = css({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: 4,
  width: '100%',
  minHeight: 343,
  marginBottom: 8,
});

const style = {
  card,
  header,
  title,
  date,
  body,
  img,
};

export default style;
