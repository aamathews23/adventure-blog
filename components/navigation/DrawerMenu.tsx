import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

// Styles
import styles from '../../styles/components/navigation/drawer-menu.module.scss';

// Components
import ListMenu from './ListMenu';
import Text from '../global/Text';

const DrawerMenu = () => {
  const mainClass = 'drawer-menu';
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
    }
  };

  // Closes the drawer
  const handleClose = () => {
    if (document && typeof document !== 'undefined') {
      const body = document.querySelector('body');
      const aside = document.querySelector('[data-testid="drawer-menu-aside"]');
      const drawer = document.querySelector(
        '[data-testid="drawer-menu-drawer"]',
      );
      body?.classList.remove('no-scroll');
      drawer?.classList.add(styles[`${mainClass}--slide-out`]);
      aside?.classList.add(styles[`${mainClass}--fade-out`]);
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
      className={styles[mainClass]}
      data-testid={mainClass}
    >
      <div
        className={styles[`${mainClass}__button`]}
        data-testid={`${mainClass}-button`}
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
          className={styles[`${mainClass}__aside`]}
          data-testid={`${mainClass}-aside`}
        >
          <div
            className={styles[`${mainClass}__drawer`]}
            data-testid={`${mainClass}-drawer`}
          >
            <header className={styles[`${mainClass}__drawer-header`]}>
              <Text tag="h3">Where to next?</Text>
              <div
                className={styles[`${mainClass}__button`]}
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
