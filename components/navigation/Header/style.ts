import { css } from '@emotion/react';

const header = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 48px;

  @media screen and (min-width: 1440px) {
    height: 64px;
  }
`;

const title = css`
  font-size: 24px;
  font-weight: bold;
  font-family: Karla, sans-serif;
  color: #53d670;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

const drawer = css`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const list = css`
  display: none;

  @media screen and (min-width: 768px) {
    display: initial;
  }
`;

const style = {
  header,
  title,
  drawer,
  list,
};

export default style;
