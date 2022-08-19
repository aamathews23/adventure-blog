import { css } from '@emotion/react';

const page = css`
  padding: 16px;
  width: 100%;
  max-width: 1440px;
  margin: auto;

  @media screen and (min-width: 1440px) {
    padding: 32px;
  }
`;

const body = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: calc(100vh - 144px - 32px);

  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 112px - 32px);
  }

  @media screen and (min-width: 1440px) {
    min-height: calc(100vh - 128px - 64px);
  }
`;

const style = {
  page,
  body,
};

export default style;
