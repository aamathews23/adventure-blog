import { css } from '@emotion/react';

const section = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 343px;
  margin: 0 auto 128px auto;

  @media screen and (min-width: 768px) {
    text-align: center;
  }
`;

const title = css`
  width: 100%;
  font-size: 32px;
  font-family: Karla, sans-serif;
  margin-bottom: 32px;

  @media screen and (min-width: 1440px) {
    font-size: 48px;
  }
`;

const body = css`
  font-size: 16px;
  font-family: Inconsolata, monospace;
  margin-bottom: 32px;
`;

const list = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
  row-gap: 4px;
`;

const item = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  font-family: Inconsolata, monospace;

  &::before {
    display: inline-block;
    content: '';
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid #53d670;
    margin-right: 8px;
  }
`;

const img = css`
  border-radius: 50%;
  overflow: hidden;
  margin-top: 48px;

  & > span {
    display: block !important;
  }
`;

const style = {
  section,
  title,
  body,
  list,
  item,
  img,
};

export default style;
