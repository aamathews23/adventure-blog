import { css } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const style = css({
  display: 'grid',
  rowGap: '48px',
  [breakpoints[0]]: {
    gridTemplateColumns: '1fr 1fr',
    columnGap: '16px',
    rowGap: '32px',
  },
  [breakpoints[1]]: {
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: '48px',
  },
});

export default style;
