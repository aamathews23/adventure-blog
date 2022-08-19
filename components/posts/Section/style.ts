import { css } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const section = css({
  margin: '48px 0',
  width: '100%',
});

const title = css({
  fontSize: '32px',
  fontWeight: 'bold',
  fontFamily: 'Karla, sans-serif',
  marginBottom: '48px',
  [breakpoints[0]]: {
    fontSize: '48px',
  },
  [breakpoints[1]]: {
    textAlign: 'center',
  },
});

const style = {
  section,
  title,
};

export default style;
