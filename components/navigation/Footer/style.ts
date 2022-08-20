import { css } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const footer = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
  height: 96,
  [breakpoints.sm]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
  },
});

const icon = css({
  color: '#fff',
  height: 24,
  '& svg': {
    height: 24,
    width: 24,
    overflow: 'hidden',
  },
  '&:not(:last-child)': { marginRight: 16 },
  '&:hover, &:focus': {
    '& svg': {
      transform: 'scale(1.25)',
      transition: 'transform 300ms',
    },
  },
  '&:focus': { outline: 'none' },
});

const copyright = css({
  fontSize: 16,
  fontFamily: 'Inconsolata, monospace',
  color: '#53d670',
  marginTop: 24,
});

const style = {
  footer,
  icon,
  copyright,
};

export default style;
