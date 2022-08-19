import { css } from '@emotion/react';

const footer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 96px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 64px;
  }
`;

const icon = css`
  color: #fff;
  height: 24px;

  svg {
    height: 24px;
    width: 24px;
    overflow: hidden;
  }

  &:not(:last-child) {
    margin-right: 16px;
  }

  &:hover,
  &:focus {
    svg {
      transition: transform 300ms;
      transform: scale(1.25);
    }
  }

  &:focus {
    outline: none;
  }
`;

const copyright = css`
  font-size: 16px;
  font-family: Inconsolata, monospace;
  color: #53d670;
  margin-top: 24px;
`;

const style = {
  footer,
  icon,
  copyright,
};

export default style;
