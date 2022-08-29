import { css } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const section = (isReverse: boolean) =>
  css({
    display: 'grid',
    gridTemplateColumns: '1fr',
    maxWidth: 1024,
    minHeight: '75vh',
    rowGap: 64,
    margin: '64px 0',
    alignItems: 'center',
    gridTemplateAreas: '"leftCol" "rightCol"',
    [breakpoints.sm]: {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateAreas: isReverse
        ? '"rightCol leftCol"'
        : '"leftCol rightCol"',
      columnGap: 64,
    },
    [breakpoints.lg]: {
      columnGap: 128,
    },
  });

const left = css({
  gridArea: 'leftCol',
});

const right = css({
  gridArea: 'rightCol',
});

const style = {
  section,
  left,
  right,
};

export default style;
