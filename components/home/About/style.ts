import { css } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const section = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto 128px auto',
  maxWidth: 1024,
  [breakpoints.sm]: {
    flexDirection: 'row-reverse',
  },
});

const title = css({
  width: '100%',
  fontSize: 32,
  fontFamily: 'Karla, sans-serif',
  marginBottom: 32,
  [breakpoints.lg]: { fontSize: 48 },
});

const body = css({
  fontSize: 16,
  fontFamily: 'Inconsolata, monospace',
  marginBottom: 32,
});

const list = css({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: 32,
  rowGap: 4,
});

const item = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontSize: 16,
  fontFamily: 'Inconsolata, monospace',
  '&::before': {
    display: 'inline-block',
    content: "''",
    borderTop: '6px solid transparent',
    borderBottom: '6px solid transparent',
    borderLeft: '6px solid #53d670',
    marginRight: 8,
  },
});

const img = css({
  borderRadius: '50%',
  overflow: 'hidden',
  '& > span': { display: 'block !important' },
});

const style = {
  section,
  title,
  body,
  list,
  item,
  img,
};

export default style;
