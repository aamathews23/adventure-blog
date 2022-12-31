import { useState, useEffect } from 'react';
import { SerializedStyles, css, keyframes } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import ListMenu from '@/navigation/ListMenu';
import breakpoints from '@/common/breakpoints';

const fadeIn = keyframes`
  from {
    z-index: -1;
    background-color: #00000000;
  }

  to {
    z-index: 999;
    background-color: #00000080;
  }
`;

const fadeOut = keyframes`
  from {
    z-index: 999;
    background-color: #00000080;
  }

  to {
    z-index: -1;
    background-color: #00000000;
  }
`;

const slideIn = keyframes`
  from {
    right: -100%;
  }

  to {
    right: 0;
  }
`;

const slideOut = keyframes`
  from {
    right: 0;
  }

  to {
    right: -100%;
  }
`;

/**
 * Creates a drawer menu component to be used throughout the pages.
 *
 * @returns a drawer menu component
 */
const DrawerMenu = () => {
  const aside: SerializedStyles = css({
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    height: '100%',
    width: '100%',
    animation: `0.5s forwards ${fadeIn}`,
  });

  const asideFadeOut = css({
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    height: '100%',
    width: '100%',
    animation: `1s forwards ${fadeOut}`,
    overflowX: 'hidden',
  });

  const drawer = css({
    position: 'absolute',
    top: '0',
    width: '80%',
    height: '100%',
    backgroundColor: '#28282c',
    padding: '48px 16px',
    animation: `1s forwards ${slideIn}`,
  });

  const drawerSlideOut = css({
    position: 'absolute',
    top: '0',
    width: '80%',
    height: '100%',
    backgroundColor: '#28282c',
    padding: '48px 16px',
    animation: `0.5s forwards ${slideOut}`,
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [asideStyle, setAsideStyle] = useState<SerializedStyles>(aside);
  const [drawerStyle, setDrawerStyle] = useState<SerializedStyles>(drawer);

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
      setAsideStyle(aside);
      setDrawerStyle(drawer);
    }
  };

  // Closes the drawer
  const handleClose = () => {
    if (document && typeof document !== 'undefined') {
      const body = document.querySelector('body');
      body?.classList.remove('no-scroll');
      setAsideStyle(asideFadeOut);
      setDrawerStyle(drawerSlideOut);
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
      css={{
        '& svg': {
          height: 24,
        },
      }}
      data-testid="drawer-menu"
    >
      <div
        css={{
          '&:focus': {
            borderRadius: '4px',
            outline: '2px solid #fff',
            outlineOffset: '4px',
          },
        }}
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
            <header
              css={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 24,
              }}
            >
              <h3
                css={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  fontFamily: 'Karla, sans-serif',
                  [breakpoints.sm]: { fontSize: 32 },
                }}
              >
                Where to next?
              </h3>
              <div
                css={{
                  '&:focus': {
                    borderRadius: '4px',
                    outline: '2px solid #fff',
                    outlineOffset: '4px',
                  },
                }}
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
