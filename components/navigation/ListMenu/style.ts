import { css } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const list = css({
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  li: {
    display: 'flex',
    width: 'fit-content',
    marginBottom: 16,
  },
  [breakpoints.sm]: {
    flexDirection: 'row',
    li: {
      marginBottom: 0,
      marginLeft: 16,
    },
  },
});

const number = css({
  marginRight: 8,
  color: '#53d670',
});

const style = {
  list,
  number,
};

export default style;
