import { css } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const section = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginBottom: 128,
  [breakpoints.sm]: { alignItems: 'center' },
  [breakpoints.lg]: {
    alignItems: 'flex-start',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 1440,
  },
});

const title = css({
  fontFamily: 'Karla, sans-serif',
  fontSize: 32,
  marginBottom: 32,
  [breakpoints.lg]: { fontSize: 48 },
});

const grid = css({
  display: 'grid',
  gridTemplateColumns: '1fr',
  rowGap: 24,
  width: '100%',
  marginBottom: 32,
  [breakpoints.sm]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
    columnGap: 16,
    rowGap: 32,
    '& > *': {
      gridColumn: 'span 2',
      '&:last-child': { gridColumn: '2 / span 2' },
    },
  },
  [breakpoints.lg]: {
    marginBottom: 48,
    gridTemplateColumns: '1fr 1fr 1fr',
    '& > *': {
      gridColumn: 'span 1',
      '&:last-child': { gridColumn: 'span 1' },
    },
  },
});

const style = {
  section,
  title,
  grid,
};

export default style;
