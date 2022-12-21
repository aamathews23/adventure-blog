import { css } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const card = css({
  width: '100%',
  backgroundColor: '#313135',
  padding: 16,
  borderRadius: 4,
  boxShadow: '2px 2px 8px #0e0e0f',
  '&:hover, &:focus': {
    cursor: 'pointer',
    transform: 'translateY(-4px)',
    boxShadow: '2px 2px 16px 4px #0e0e0f',
    transition: 'transform 300ms, box-shadow 300ms',
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

const body = css({
  fontSize: 16,
  fontFamily: 'Inconsolata, monospace',
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
  body,
  img,
};

export default style;
