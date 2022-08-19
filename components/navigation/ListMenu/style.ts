import { css } from '@emotion/react';

const list = css`
  display: flex;
  flex-direction: column;
  list-style: none;

  li {
    display: flex;
    width: fit-content;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;

    li {
      margin-bottom: 0;
      margin-left: 16px;
    }
  }
`;

const number = css`
  margin-right: 8px;
  color: #53d670;
`;

const style = {
  list,
  number,
};

export default style;
