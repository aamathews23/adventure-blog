import { css } from '@emotion/react';

const card = css`
  width: 100%;
  background-color: #313135;
  padding: 16px;
  border-radius: 4px;

  &:hover,
  &:focus {
    cursor: pointer;
    transition: transform 300ms;
    transform: scale(1.03);

    .card__title {
      &::before {
        transform: translate3d(0, 0, 0);
      }
    }
  }

  &:focus {
    outline: 2px solid #fff;
    outline-offset: 4px;
  }
`;

const header = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const title = css`
  font-size: 24px;
  font-weight: bold;
  font-family: Karla, sans-serif;
  margin-bottom: 8px;
  width: fit-content;
  position: relative;
  padding-bottom: 8px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #fff;
    opacity: 1;
    transition: opacity 300ms, transform 300ms;
    transform: translate3d(-105%, 0, 0);
  }

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

const date = css`
  font-size: 16px;
  font-family: Inconsolata, monospace;

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

const body = css`
  font-size: 16px;
  font-family: Inconsolata, monospace;

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

const img = css`
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  width: 100%;
  min-height: 343px;
  margin-bottom: 8px;
`;

const style = {
  card,
  header,
  title,
  date,
  body,
  img,
};

export default style;
