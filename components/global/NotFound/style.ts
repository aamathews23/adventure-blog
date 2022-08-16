import { css } from '@emotion/react';

const notFound = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 343px;
  width: 343px;
  border-radius: 50%;
  background-color: #313135;
  padding: 16px;
  margin: 48px 0;
`;

const icon = css`
  width: 50px;
  height: 66.67px;
  margin-bottom: 32px;
`;

const text = css`
  font-family: Inconsolata, monospace;
  font-size: 20px;
  text-align: center;
`;

const style = {
  notFound,
  icon,
  text,
};

export default style;
