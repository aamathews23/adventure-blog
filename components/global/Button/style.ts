import { css } from '@emotion/react';

const style = css`
  display: inline-flex;
  font-family: Karla, sans-serif;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #53d670;
  padding: 12px 32px;
  width: fit-content;
  text-decoration: none;
  border-radius: 4px;

  &:hover,
  &:focus {
    background-color: #53d670;
    color: #28282c;
    transition: background-color 300ms, color 300ms;
  }

  &:focus {
    border-radius: 4px;
    outline: 2px solid #fff;
    outline-offset: 4px;
  }
`;

export default style;
