import { useState, useEffect } from 'react';
import { SerializedStyles } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import ListMenu from '../ListMenu';
import Text from '../../global/Text';
import style from './style';

/**
 * Creates a drawer menu component to be used throughout the pages.
 *
 * @returns a drawer menu component
 */
const DrawerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [asideStyle, setAsideStyle] = useState<SerializedStyles>(style.aside);
  const [drawerStyle, setDrawerStyle] = useState<SerializedStyles>(
    style.drawer,
  );

  useEffect(() => {
    if (typeof document !== 'undefined' && document) {
      const body = document.querySelector('body');
      body?.classList.remove('no-scroll');
    }
  }, []);

  // Opens the drawer
  const handleOpen = () => {
    setIsOpen(true);
    if (document && typeof document !== 'undefined') {
      const body = document.querySelector('body');
      body?.classList.add('no-scroll');
      setAsideStyle(style.aside);
      setDrawerStyle(style.drawer);
    }
  };

  // Closes the drawer
  const handleClose = () => {
    if (document && typeof document !== 'undefined') {
      const body = document.querySelector('body');
      body?.classList.remove('no-scroll');
      setAsideStyle(style.asideFadeOut);
      setDrawerStyle(style.drawerSlideOut);
    }
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  // Open / close the drawer on key press
  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      if (isOpen) {
        handleClose();
      } else {
        handleOpen();
      }
    }
  };

  return (
    <div
      css={style.menu}
      data-testid="drawer-menu"
    >
      <div
        css={style.button}
        data-testid="drawer-menu-button"
        role="button"
        aria-label="Open menu"
        tabIndex={0}
        onClick={handleOpen}
        onKeyUp={handleKeyPress}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      {isOpen && (
        <aside
          css={asideStyle}
          data-testid="drawer-menu-aside"
        >
          <div
            css={drawerStyle}
            data-testid="drawer-menu-drawer"
          >
            <header css={style.header}>
              <Text
                tag="h3"
                style={style.title}
              >
                Where to next?
              </Text>
              <div
                css={style.button}
                role="button"
                aria-label="Close menu"
                tabIndex={0}
                onClick={handleClose}
                onKeyUp={handleKeyPress}
              >
                <FontAwesomeIcon icon={faXmark} />
              </div>
            </header>
            <ListMenu />
          </div>
        </aside>
      )}
    </div>
  );
};

export default DrawerMenu;
