import { css } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const style = css({
  display: 'grid',
  rowGap: 48,
  [breakpoints.sm]: {
    gridTemplateColumns: '1fr 1fr',
    columnGap: 16,
    rowGap: 32,
  },
  [breakpoints.lg]: {
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: 48,
  },
});

export default style;
