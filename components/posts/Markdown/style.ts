import { css } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const style = css({
  '& h1': {
    fontSize: '48px',
    fontWeight: 'bold',
    fontFamily: 'Karla, sans-serif',
    marginBottom: '24px',
    [breakpoints[0]]: {
      fontSize: '64px',
    },
  },
  '& h2': {
    fontSize: '32px',
    fontWeight: 'bold',
    fontFamily: 'Karla, sans-serif',
    marginBottom: '24px',
    [breakpoints[0]]: {
      fontSize: '48px',
    },
  },
  '& h3': {
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: 'Karla, sans-serif',
    marginBottom: '16px',
    [breakpoints[0]]: {
      fontSize: '32px',
    },
  },
  '& h4': {
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: 'Karla, sans-serif',
    marginBottom: '16px',
    [breakpoints[0]]: {
      fontSize: '24px',
    },
  },
  '& h5': {
    fontSize: '16px',
    fontWeight: 'bold',
    fontFamily: 'Karla, sans-serif',
    marginBottom: '8px',
  },
  '& h6': {
    fontSize: '12px',
    fontWeight: 'bold',
    fontFamily: 'Karla, sans-serif',
    marginBottom: '8px',
  },
  '& h1, & h2, & h3, & h4, & h5, & h6': {
    width: 'fit-content',
  },
  '& p, & a, & li': {
    fontSize: '16px',
    fontFamily: 'Inconsolata, monospace',
  },
  '& p, & img, & blockquote': {
    marginBottom: '16px',
  },
  '& ul, & ol': {
    listStylePosition: 'inside',
  },
  '& p': {
    lineHeight: '20px',
  },
  '& li': {
    marginBottom: '8px',
    '& li': {
      marginLeft: '16px',
    },
  },
  '& img': {
    width: '100%',
    borderRadius: '8px',
  },
});

export default style;
