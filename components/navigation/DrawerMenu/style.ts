import { css, keyframes } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const fadeIn = keyframes`
  from {
    z-index: -1;
    background-color: #00000000;
  }

  to {
    z-index: 999;
    background-color: #00000080;
  }
`;

const fadeOut = keyframes`
  from {
    z-index: 999;
    background-color: #00000080;
  }

  to {
    z-index: -1;
    background-color: #00000000;
  }
`;

const slideIn = keyframes`
  from {
    right: -100%;
  }

  to {
    right: 0;
  }
`;

const slideOut = keyframes`
  from {
    right: 0;
  }

  to {
    right: -100%;
  }
`;

const menu = css({
  '& svg': {
    height: 24,
  },
});

const aside = css({
  position: 'absolute',
  top: '0',
  left: '0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  height: '100%',
  width: '100%',
  animation: `0.5s forwards ${fadeIn}`,
});

const asideFadeOut = css({
  position: 'absolute',
  top: '0',
  left: '0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  height: '100%',
  width: '100%',
  animation: `1s forwards ${fadeOut}`,
  overflowX: 'hidden',
});

const drawer = css({
  position: 'absolute',
  top: '0',
  width: '80%',
  height: '100%',
  backgroundColor: '#28282c',
  padding: '48px 16px',
  animation: `1s forwards ${slideIn}`,
});

const drawerSlideOut = css({
  position: 'absolute',
  top: '0',
  width: '80%',
  height: '100%',
  backgroundColor: '#28282c',
  padding: '48px 16px',
  animation: `0.5s forwards ${slideOut}`,
});

const header = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 24,
});

const title = css({
  fontSize: 24,
  fontWeight: 'bold',
  fontFamily: 'Karla, sans-serif',
  [breakpoints.sm]: { fontSize: 32 },
});

const button = css({
  '&:focus': {
    borderRadius: '4px',
    outline: '2px solid #fff',
    outlineOffset: '4px',
  },
});

const style = {
  menu,
  aside,
  asideFadeOut,
  drawer,
  drawerSlideOut,
  header,
  title,
  button,
};

export default style;
