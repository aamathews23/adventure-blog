import { css } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const page = css({
  padding: 16,
  width: '100%',
  maxWidth: 1440,
  margin: 'auto',
  [breakpoints.lg]: { padding: 32 },
});

const body = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  minHeight: 'calc(100vh - 144px - 32px)',
  [breakpoints.sm]: {
    minHeight: 'calc(100vh - 112px - 32px)',
  },
  [breakpoints.lg]: {
    minHeight: 'calc(100vh - 128px - 64px)',
  },
});

const style = {
  page,
  body,
};

export default style;
