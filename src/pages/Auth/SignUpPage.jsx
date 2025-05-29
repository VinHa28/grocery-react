import React from 'react'
import './Auth.scss'

export default function SignUpPage() {
  return (
    <main class="auth">
      <div class="auth__intro">
        <a href="./" class="logo d-none d-md-flex auth__intro-logo">
          <img src="../src/assets/icons/logo.svg" alt="grocerymart" class="logo__img" />
          <h2 class="logo__title">grocerymart</h2>
        </a>
        <img src="../src/assets/img/auth/intro.svg" alt="" class="auth__intro-img" />
        <p class="auth__intro-text">
          The best of luxury brand values, high quality products, and innovative
          services
        </p>
        <button class="auth__intro-next d-none d-md-block js-toggle" toggle-target="#auth-content">
          <img src="../src/assets/img/auth/intro-arrow.svg" alt="" />
        </button>
      </div>
      <div class="auth__content hide" id="auth-content">
        <div class="auth__content-inner">
          <a href="./" class="logo">
            <img src="../src/assets/icons/logo.svg" alt="grocerymart" class="logo__img" />
            <h2 class="logo__title">grocerymart</h2>
          </a>
          <h1 class="auth__heading">Sign Up</h1>
          <p class="auth__desc">
            Let’s create your account and Shop like a pro and save money.
          </p>
          <form action="./index-logined.html" class="form auth__form">
            <div class="form__group">
              <div class="form__text-input">
                <input type="email" name="" id="" class="form__input" placeholder="Email" required />
                <img src="../src/assets/icons/form__error.svg" alt="" class="form__input-icon form__input-icon--error" />
                <img src="../src/assets/icons/mail.svg" alt="" class="form__input-icon" />
              </div>
              <p class="form__error">The email is incorrect format!</p>
            </div>
            <div class="form__group">
              <div class="form__text-input">
                <input type="password" name="" id="" class="form__input" placeholder="Password" required minlength="6" />
                <img src="../src/assets/icons/lock.svg" alt="" class="form__input-icon" />
                <img src="../src/assets/icons/form__error.svg" alt="" class="form__input-icon form__input-icon--error" />
              </div>
              <p class="form__error">Password must be at least 6 characters!</p>
            </div>
            <div class="form__group">
              <div class="form__text-input">
                <input type="password" name="" id="" class="form__input" placeholder="Confirm Password" required minlength="6" />
                <img src="../src/assets/icons/lock.svg" alt="" class="form__input-icon" />
                <img src="../src/assets/icons/form__error.svg" alt="" class="form__input-icon form__input-icon--error" />
              </div>
              <p class="form__error">Re-enter incorrect password!</p>
            </div>

            <div class="form__group form__row">
              <label class="form__label-checkbox">
                <input type="checkbox" name="" id="" class="form__checkbox d-none" />
                Set as default card
              </label>
            </div>

            <div class="form__group auth__btn-group">
              <button class="btn btn--primary auth__btn form__submit-btn">Sign Up</button>
              <button class="btn btn--outline auth__btn auth__btn--outline">
                <img src="../src/assets/icons/google.svg" alt="" class="btn__icon" />
                Sign in with Gmail
              </button>
            </div>
          </form>

          <div class="auth__row">
            <p class="auth__text">You have an account yet?</p>
            <a href="./sign-in.html" class="auth__link auth__link--larger">Sign In</a>
          </div>
        </div>
      </div>
    </main>
  )
}
