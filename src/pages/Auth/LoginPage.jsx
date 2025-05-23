import React from 'react'
import './Auth.scss'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

export default function LoginPage() {
  return (
    <main className="auth">
      <div className="auth__intro d-md-none">
        <img src="../src/assets/img/auth/intro.svg" alt="" className="auth__intro-img" />
        <p className="auth__intro-text">
          The best of luxury brand values, high quality products, and innovative
          services
        </p>
      </div>

      <div className="auth__content">
        <div className="auth__content-inner">
          <a href="./" className="logo">
            <img src="../src/assets/icons/logo.svg" alt="grocerymart" className="logo__img" />
            <h2 className="logo__title">grocerymart</h2>
          </a>
          <h1 className="auth__heading">Hello Again!</h1>
          <p className="auth__desc auth__desc-sign-in">
            Welcome back to sign in. As a returning customer, you have access to your previously saved all information.
          </p>
          <form action="./index-logined.html" className="form auth__form">
            <div className="form__group">
              <div className="form__text-input">
                <input type="email" name="" id="" className="form__input" placeholder="Email" required />
                <img src="../src/assets/icons/form__error.svg" alt="" className="form__input-icon form__input-icon--error" />
                <img src="../src/assets/icons/mail.svg" alt="" className="form__input-icon" />
              </div>
              <p className="form__error">The email is incorrect format!</p>
            </div>
            <div className="form__group">
              <div className="form__text-input">
                <input type="password" name="" id="" className="form__input" placeholder="Password" required minlength="6" />
                <img src="../src/assets/icons/lock.svg" alt="" className="form__input-icon" />
                <img src="../src/assets/icons/form__error.svg" alt="" className="form__input-icon form__input-icon--error" />
              </div>
              <p className="form__error">Password must be at least 6 characters!</p>
            </div>
            <div className="form__group form__row">
              <label className="form__label-checkbox">
                <input type="checkbox" name="" id="" className="form__checkbox d-none" />
                Set as default card
              </label>
              <a href="./reset-password.html" className="auth__link form__pull-right">Forgot password?</a>
            </div>
            <div className="form__group auth__btn-group">
              <Button className="btn--primary auth__btn form__submit-btn">Login</Button>
              <Button className="btn--outline auth__btn auth__btn--outline">
                <img src="../src/assets/icons/google.svg" alt="" className="btn__icon" />
                Sign in with Gmail
              </Button>
            </div>
          </form>

          <div className="auth__row">
            <p className="auth__text">Don’t have an account yet?</p>
            <Link to='/signup' className="auth__link auth__link--larger">Sign Up</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
