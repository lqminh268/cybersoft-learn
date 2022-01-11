import React from 'react';
import { Link } from 'react-router-dom';
import boxLight from '../../assets/svg/box-light.svg';
import eventbriteLight from '../../assets/svg/eventbrite-light.svg';
import nasdaqLight from '../../assets/svg/nasdaq-light.svg';
import netflixLight from '../../assets/svg/netflix-light.svg';
import volkswagenLight from '../../assets/svg/volkswagen-light.svg';
import { MdLanguage } from 'react-icons/md';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__teach">
        <div className="footer__teach__description">
          <p className="footer-p-el">Teach the world online</p>
          <p>
            Create an online video course, reach students across the globe, and
            earn money
          </p>
        </div>
        <button className="primary-button">Teach on Cybersoft</button>
      </div>
      <div className="footer__companies">
        <p className="footer-p-el">
          Top companies choose{' '}
          <span className="highlight-test">Cybersoft Business</span> to build
          in-demand career skills.
        </p>
        <div className="logo-companies">
          <ul className="d-flex">
            <li className="logo-companies-item">
              <img src={nasdaqLight} alt="" />
            </li>
            <li className="logo-companies-item">
              <img src={volkswagenLight} alt="" />
            </li>
            <li className="logo-companies-item">
              <img src={boxLight} alt="" />
            </li>
            <li className="logo-companies-item">
              <img src={netflixLight} alt="" />
            </li>
            <li className="logo-companies-item last-logo-item">
              <img src={eventbriteLight} alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__menu">
        <div className="menu__list">
          <div className="menu__list__items">
            <ul>
              <li>
                <a href="/#">Cybersoft Business</a>
              </li>
              <li>
                <a href="/#">Teach on Cybersoft</a>
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
          <button className="primary-button">
            <MdLanguage />English
          </button>
        </div>
        <div className="footer__logo">
          <Link to="/" className="footer__content__logo">
            Cybersoft Learn
          </Link>
          <span>© 2022 Cybersoft, Inc.</span>
        </div>
      </div>
    </div>
  );
}
