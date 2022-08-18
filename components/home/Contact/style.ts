import { css } from '@emotion/react';

const section = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75vh;
`;

const content = css`
  max-width: 343px;

  @media screen and (min-width: 768px) {
    text-align: center;
  }

  @media screen and (min-width: 1440px) {
    max-width: 405px;
  }
`;

const title = css`
  font-size: 32px;
  font-family: Karla, sans-serif;
  margin-bottom: 16px;

  @media screen and (min-width: 1440px) {
    font-size: 48px;
  }
`;

const body = css`
  font-size: 16px;
  font-family: Inconsolata, monospace;
  margin-bottom: 32px;
`;

const style = {
  section,
  content,
  title,
  body,
};

export default style;
