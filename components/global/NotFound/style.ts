import { css } from '@emotion/react';

const notFound = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 343,
  width: 343,
  borderRadius: '50%',
  backgroundColor: '#313135',
  padding: 16,
  margin: '48px 0',
});

const icon = css({
  width: 50,
  height: 66.67,
  marginBottom: 32,
});

const text = css({
  fontFamily: 'Inconsolata, monospace',
  fontSize: 20,
  textAlign: 'center',
});

const style = {
  notFound,
  icon,
  text,
};

export default style;
