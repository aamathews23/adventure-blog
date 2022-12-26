import { css, keyframes } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const section = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  marginTop: 72,
  marginBottom: 72,
});

const title = css({
  fontSize: 48,
  fontFamily: 'Karla, sans-serif',
  marginBottom: 24,
  [breakpoints.lg]: { fontSize: 64 },
});

const body = css({
  fontSize: 16,
  fontFamily: 'Inconsolata, monospace',
  marginBottom: 32,
  maxWidth: 300,
  [breakpoints.lg]: {
    fontSize: 24,
    marginBottom: 48,
  },
});

const fade = keyframes`
  0%, 10% {
    opacity: 0;
  }

  20%, 80% {
    opacity: 1;
  }

  90%, 100% {
    opacity: 0;
  }
`;

const activity = css({
  color: '#53d670',
  animation: `${fade} 3s ease infinite`,
});

const borderShift = keyframes`
  0% {
    border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
  }

  25% {
    border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
  }

  50% {
    border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
  }

  75% {
    border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
  }

  100% {
    border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
  }
`;

const img = css({
  width: 288,
  height: 288,
  backgroundColor: '#313135',
  animation: `${borderShift} 10s ease infinite`,
  overflow: 'hidden',
  marginTop: 64,
  boxShadow: '0px 0px 12px 2px #0e0e0f',
  '& > span': { display: 'block !important' },
});

const style = {
  section,
  title,
  body,
  activity,
  img,
};

export default style;
