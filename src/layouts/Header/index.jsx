import React from 'react';
import './Header.scss';
import Logo from '../../components/Logo';
import Button from '../../components/Button';

export default function Header() {
  return (
    <header className='header'>
      <div className="container">
        <div className="top-bar">
          <button className="top-bar__more d-none d-lg-block">
            <img src="./src/assets/icons/document.svg" className="icon top-bar__more-icon" />
          </button>
          {/* <a href="./" className="logo header__logo">
            <img src="./src/assets/icons/logo.svg" alt="grocerymart" className="logo__img header__logo-img" />
            <h2 className="logo__title header__logo-title">grocerymart</h2>
          </a> */}

          <Logo className='header__logo '/>
          <nav className="navbar hide" id="navbar">
            <button className="navbar__close-btn">
              <img src="./src/assets/icons/arrow-left.svg" alt="" />
            </button>


            <a href="#!" className="theme-btn d-none d-md-block" id="switch-theme-btn">
              <label htmlFor="theme-checkbox" className="theme-btn__label">
                <img src="./src/assets/icons/moon.svg" alt="" className="theme-btn__icon" />
                <img src="./src/assets/icons/sun-light.svg" alt="" className="theme-btn__icon--sun theme-btn__icon" />
              </label>
            </a>

            <a href="./cart.html" className="nav-btn d-none d-md-flex">
              <img src="./src/assets/icons/buy.svg" alt="" className="icon nav-btn__icon" />
              <span className="nav-btn__title">Card</span>
              <span className="nav-btn__qnt">3</span>
            </a>

            <a href="./favorite.html" className="nav-btn d-none d-md-flex">
              <img src="./src/assets/icons/heart.svg" alt="" className="icon nav-btn__icon" />
              <span className="nav-btn__title">Favorite</span>
              <span className="nav-btn__qnt">3</span>
            </a>

            <ul className="navbar__menu js-dropdown-list">
              <li className="navbar__item ">
                <a href="#" className="navbar__link">
                  Departments
                  <img src="./src/assets/icons/arrow-down.svg" alt="" className="navbar__arrow icon" />
                </a>
              </li>
              <li className="navbar__item ">
                <a href="#" className="navbar__link">
                  Grocery
                  <img src="./src/assets/icons/arrow-down.svg" alt="" className="navbar__arrow icon" />
                </a>
              </li>
              <li className="navbar__item ">
                <a href="#" className="navbar__link">
                  Beaty
                  <img src="./src/assets/icons/arrow-down.svg" alt="" className="navbar__arrow icon" />
                </a>
              </li>
            </ul>
          </nav>
          <div className="top-action">
            <a href="#!" className="theme-btn d-md-none" id="switch-theme-btn">
              <label htmlFor="theme-checkbox" className="theme-btn__label">
                <img src="./src/assets/icons/moon.svg" alt="" className="theme-btn__icon" />
                <img src="./src/assets/icons/sun-light.svg" alt="" className="theme-btn__icon--sun theme-btn__icon" />
              </label>
            </a>

            <a href="./sign-in.html" >
              <Button className="btn btn--text d-md-none">Sign In</Button>
            </a>
            <a href="./sign-up.html">
              <Button className="btn btn--primary top-action__sign-up">Sign Up</Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
