import { css } from '@emotion/react';

const menu = css`
  svg {
    height: 24px;
  }
`;

const aside = css`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  animation: 0.5s forwards fadein;
  overflow-x: hidden;

  @keyframes fadein {
    from {
      z-index: -1;
      background-color: #00000000;
    }

    to {
      z-index: 999;
      background-color: #00000080;
    }
  }
`;

const asideFadeOut = css`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  animation: 1s forwards fadeout;
  overflow-x: hidden;

  @keyframes fadeout {
    from {
      z-index: 999;
      background-color: #00000080;
    }

    to {
      z-index: -1;
      background-color: #00000000;
    }
  }
`;

const drawer = css`
  position: absolute;
  top: 0;
  width: 80%;
  height: 100%;
  background-color: #28282c;
  padding: 48px 16px;
  animation: 1s forwards slidein;

  @keyframes slidein {
    from {
      right: -100%;
    }

    to {
      right: 0;
    }
  }
`;

const drawerSlideOut = css`
  position: absolute;
  top: 0;
  width: 80%;
  height: 100%;
  background-color: #28282c;
  padding: 48px 16px;
  animation: 0.5s forwards slideout;

  @keyframes slideout {
    from {
      right: 0;
    }

    to {
      right: -100%;
    }
  }
`;

const header = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const title = css`
  font-size: 24px;
  font-weight: bold;
  font-family: Karla, sans-serif;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

const button = css`
  &:focus {
    border-radius: 4px;
    outline: 2px solid #fff;
    outline-offset: 4px;
  }
`;

const style = {
  menu,
  aside,
  asideFadeOut,
  drawer,
  drawerSlideOut,
  header,
  title,
  button,
};

export default style;
