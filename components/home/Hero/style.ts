import { css, keyframes } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const section = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const title = css({
  fontSize: 48,
  fontFamily: 'Karla, sans-serif',
  marginBottom: 24,
  [breakpoints.lg]: { fontSize: 64 },
});

const activities = css({
  position: 'relative',
  fontSize: 24,
  fontFamily: 'Inconsolata, monospace',
  marginBottom: 32,
  width: 200,
  [breakpoints.lg]: {
    fontSize: 32,
    marginBottom: 48,
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

const img = css({
  borderRadius: '50%',
  overflow: 'hidden',
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
