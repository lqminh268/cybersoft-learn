import React, { useEffect, useState } from 'react';

import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import { Link, useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen(p => !p);
  };

  const ctaClickHandler = () => {
    menuToggleHandler();
    history.push('/page-cta');
  };

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__content__logo">
          Cybersoft Learn
        </Link>
        <nav className={`header__content__nav ${menuOpen && window.innerWidth < 768 ? 'isMenu' : ''}`}>
          <ul>
            <li>
              <Link to="/page-one" onClick={menuToggleHandler}>
                Hi! Lê Quang Minh
              </Link>
            </li>
            <li>
              <Link to="/page-two" onClick={menuToggleHandler}>
                Categories
              </Link>
            </li>
            <li>
              <Link to="/page-three" onClick={menuToggleHandler}>
                Profile
              </Link>
            </li>
          </ul>
          <button onClick={ctaClickHandler}>Logout</button>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
