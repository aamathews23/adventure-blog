import { css } from '@emotion/react';

const style = css({
  display: 'inline-flex',
  fontFamily: 'Karla, sans-serif',
  fontSize: 16,
  fontWeight: 'bold',
  border: '1px solid #53d670',
  padding: '12px 32px',
  width: 'fit-content',
  textDecoration: 'none',
  borderRadius: 4,
  '&:hover, &:focus': {
    backgroundColor: '#53d670',
    color: '#28282c',
    transition: 'background-color 300ms, color 300ms',
  },
  '&:focus': {
    borderRadius: 4,
    outline: '2px solid #fff',
    outlineOffset: 4,
  },
});

export default style;
