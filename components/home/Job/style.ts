import { css } from '@emotion/react';

const job = css`
  margin: 0;
  padding: 0;
  text-align: left;
`;

const title = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Karla, sans-serif;
  font-size: 16px;

  &::before {
    display: inline-block;
    content: '';
    width: 24px;
    height: 24px;
    border: 1px solid #53d670;
    border-radius: 50%;
    margin-right: 8px;
  }
`;

const titleActive = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Karla, sans-serif;
  font-size: 16px;

  &::before {
    display: inline-block;
    content: '';
    width: 24px;
    height: 24px;
    border: 1px solid #53d670;
    border-radius: 50%;
    margin-right: 8px;
    background-color: #53d670;
  }
`;

const duration = css`
  font-family: Inconsolata, monospace;
  font-size: 16px;
  margin-left: 13px;
  padding-top: 16px;
  padding-left: 22px;
  border-left: 1px solid #53d670;
`;

const description = css`
  font-family: Inconsolata, monospace;
  font-size: 16px;
  margin-left: 13px;
  padding-top: 16px;
  padding-left: 22px;
  padding-bottom: 32px;
  border-left: 1px solid #53d670;
`;

const style = {
  job,
  title,
  titleActive,
  duration,
  description,
};

export default style;
