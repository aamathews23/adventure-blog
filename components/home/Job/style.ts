import { css } from '@emotion/react';

const job = css({
  margin: 0,
  padding: 0,
  textAlign: 'left',
});

const title = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontFamily: 'Karla, sans-serif',
  fontSize: 16,
  '&::before': {
    display: 'inline-block',
    content: "''",
    width: 24,
    height: 24,
    border: '1px solid #53d670',
    borderRadius: '50%',
    marginRight: 8,
  },
});

const titleActive = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontFamily: 'Karla, sans-serif',
  fontSize: 16,
  '&::before': {
    display: 'inline-block',
    content: "''",
    width: 24,
    height: 24,
    border: '1px solid #53d670',
    borderRadius: '50%',
    marginRight: 8,
    backgroundColor: '#53d670',
  },
});

const duration = css({
  fontFamily: 'Inconsolata, monospace',
  fontSize: 16,
  marginLeft: 13,
  paddingTop: 16,
  paddingLeft: 22,
});

const description = css({
  fontFamily: 'Inconsolata, monospace',
  fontSize: 16,
  marginLeft: 13,
  paddingTop: 16,
  paddingLeft: 22,
  paddingBottom: 32,
});

const style = {
  job,
  title,
  titleActive,
  duration,
  description,
};

export default style;
