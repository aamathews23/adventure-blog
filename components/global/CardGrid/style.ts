import { css } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const style = css({
  display: 'grid',
  gap: 16,
  [breakpoints.sm]: {
    gridTemplateColumns: '1fr 1fr',
  },
  [breakpoints.lg]: {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
});

export default style;
