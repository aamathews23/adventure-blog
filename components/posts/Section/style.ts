import { css } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const section = css({
  margin: '48px 0',
  width: '100%',
});

const title = css({
  fontSize: 32,
  fontWeight: 'bold',
  fontFamily: 'Karla, sans-serif',
  marginBottom: 48,
  [breakpoints.sm]: {
    fontSize: 48,
  },
  [breakpoints.lg]: {
    textAlign: 'center',
  },
});

const style = {
  section,
  title,
};

export default style;
