import { css, keyframes } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const section = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 72,
  marginBottom: 72,
  [breakpoints.sm]: {
    marginTop: 144,
    marginBottom: 144,
  },
  [breakpoints.lg]: {
    marginTop: 216,
    marginBottom: 216,
  },
});

const title = css({
  fontSize: 32,
  fontFamily: 'Karla, sans-serif',
  marginBottom: 24,
  [breakpoints.lg]: { fontSize: 48 },
});

const activities = css({
  position: 'relative',
  fontSize: 16,
  fontFamily: 'Inconsolata, monospace',
  marginBottom: 32,
  width: 150,
  [breakpoints.lg]: {
    fontSize: 24,
    marginBottom: 48,
    width: 200,
  },
});

const fade = keyframes`
  0%, 5% {
    top: 20px;
    opacity: 0;
  }

  16.67%, 66.67% {
    top: 0;
    opacity: 1;
  }

  95%, 100% {
    top: -20px;
    opacity: 0;
  }
`;

const activity = css({
  display: 'inline-block',
  position: 'absolute',
  color: '#53d670',
  width: 150,
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
  boxShadow: '2px 2px 10px #0e0e0f',
  '& > span': { display: 'block !important' },
});

const style = {
  section,
  title,
  activities,
  activity,
  img,
};

export default style;
