import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__teach">
        <div className="footer__teach__description">
          <h3>Teach the world online</h3>
          <p>
            Create an online video course, reach students across the globe, and
            earn money
          </p>
        </div>
        <button className="primary-button">Teach on Udemy</button>
      </div>
      <div className="footer__companies">
        <h3>
          Top companies choose Udemy Business to build in-demand career skills.
        </h3>
        <div className="logo-companie" />
      </div>
      <div className="footer__menu">
        <div className="menu__list">
          <div className="menu__list__items">
            <ul>
              <li>
                <a href="/#">Udemy Business</a>
              </li>
              <li>
                <a href="/#">Teach on Udemy</a>
              </li>
              <li>
                <a href="/#">Get the app</a>
              </li>
              <li>
                <a href="/#">About us</a>
              </li>
              <li>
                <a href="/#">Contact us</a>
              </li>
              <li>
                <a href="/#">Careers</a>
              </li>
              <li>
                <a href="/#">Blog</a>
              </li>
              <li>
                <a href="/#">Help and Support</a>
              </li>
              <li>
                <a href="/#">Affiliate</a>
              </li>
              <li>
                <a href="/#">Investors</a>
              </li>
              <li>
                <a href="/#">Terms</a>
              </li>
              <li>
                <a href="/#">Privacy policy</a>
              </li>
              <li>
                <a href="/#">Cookies settings</a>
              </li>
              <li>
                <a href="/#">Sitemap</a>
              </li>
              <li>
                <a href="/#">Accessibility statement</a>
              </li>
            </ul>
          </div>
          <button className="primary-button">English</button>
        </div>
        <div className="footer__logo">
          <Link to="/" className="footer__content__logo">
            Cybersoft Learn
          </Link>
          <span>© 2022 Udemy, Inc.</span>
        </div>
      </div>
    </div>
  );
}
