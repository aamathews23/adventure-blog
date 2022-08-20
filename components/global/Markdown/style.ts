import { css } from '@emotion/react';
import breakpoints from '../../../common/breakpoints';

const style = css({
  '& h1': {
    fontSize: 48,
    fontWeight: 'bold',
    fontFamily: 'Karla, sans-serif',
    marginBottom: 24,
    [breakpoints.sm]: {
      fontSize: 64,
    },
  },
  '& h2': {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Karla, sans-serif',
    marginBottom: 24,
    [breakpoints.sm]: {
      fontSize: 48,
    },
  },
  '& h3': {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Karla, sans-serif',
    marginBottom: 16,
    [breakpoints.sm]: {
      fontSize: 32,
    },
  },
  '& h4': {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Karla, sans-serif',
    marginBottom: 16,
    [breakpoints.sm]: {
      fontSize: 24,
    },
  },
  '& h5': {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Karla, sans-serif',
    marginBottom: 8,
  },
  '& h6': {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Karla, sans-serif',
    marginBottom: 8,
  },
  '& h1, & h2, & h3, & h4, & h5, & h6': {
    width: 'fit-content',
  },
  '& p, & a, & li': {
    fontSize: 16,
    fontFamily: 'Inconsolata, monospace',
  },
  '& p, & img, & blockquote': {
    marginBottom: 16,
  },
  '& p': {
    lineHeight: '20px',
  },
  '& li': {
    marginBottom: 8,
    '& li': {
      marginLeft: 16,
    },
  },
  '& img': {
    width: '100%',
    borderRadius: 8,
  },
});

export default style;
