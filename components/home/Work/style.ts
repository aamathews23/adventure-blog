import { css } from '@emotion/react';

const section = css`
  display: flex;
  flex-direction: column;
  max-width: 343px;
  margin: 0 auto 128px auto;

  @media screen and (min-width: 768px) {
    text-align: center;
  }
`;

const title = css`
  font-family: Karla, sans-serif;
  font-size: 32px;
  margin-bottom: 32px;

  @media screen and (min-width: 1440px) {
    font-size: 48px;
  }
`;

const style = {
  section,
  title,
};

export default style;
