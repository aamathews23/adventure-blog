import { css } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const section = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: 1024,
  minHeight: '75vh',
  padding: '64px 0',
  [breakpoints.sm]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const content = css({
  marginBottom: 48,
  [breakpoints.sm]: {
    marginBottom: 0,
    paddingRight: 64,
    width: '50%',
  },
  [breakpoints.lg]: {
    paddingRight: 100,
  },
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
  marginBottom: 24,
});

const img = css({
  maxWidth: 500,
  maxHeight: 500,
  borderRadius: '50%',
  overflow: 'hidden',
  '& > span': { display: 'block !important' },
  [breakpoints.sm]: {
    width: '50%',
  },
});

const style = {
  section,
  content,
  title,
  body,
  img,
};

export default style;
