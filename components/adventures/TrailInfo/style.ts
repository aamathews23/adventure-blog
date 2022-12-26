import { css } from '@emotion/react';

const container = css({
  display: 'flex',
  gap: 16,
  position: 'relative',
  width: 'fit-content',
  '& > *': {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    paddingBottom: 8,
  },
});

const rating = css({
  fontFamily: 'Karla, sans-serif',
});

const date = css({
  fontFamily: 'Karla, sans-serif',
});

const style = {
  container,
  rating,
  date,
};

export default style;
