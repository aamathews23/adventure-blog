import { css } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const header = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 48,
  [breakpoints.lg]: { height: 64 },
});

const title = css({
  fontSize: 24,
  fontWeight: 'bold',
  fontFamily: 'Karla, sans-serif',
  color: '#53d670',
  [breakpoints.sm]: { fontSize: 32 },
});

const drawer = css({
  [breakpoints.sm]: {
    display: 'none',
  },
});

const list = css({
  display: 'none',
  [breakpoints.sm]: {
    display: 'initial',
  },
});

const style = {
  header,
  title,
  drawer,
  list,
};

export default style;
