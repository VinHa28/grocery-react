import React from 'react'
import './Auth.scss'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Logo from '../../components/Logo'
import { Form, FormCheckbox, FormInput } from '../../components/Form'

export default function LoginPage() {
  const navigate = useNavigate();
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
          <Logo/>
          <h1 className="auth__heading">Hello Again!</h1>
          <p className="auth__desc auth__desc-sign-in">
            Welcome back to sign in. As a returning customer, you have access to your previously saved all information.
          </p>
          <Form onSubmit={() => navigate('/')} className="auth__form">
            <FormInput 
              errMessage={'The email is incorrect format!'}
              id='email'
              name='email'
              type='email'
              placeholder='Email'
              hasIcon={true}
              icon='../src/assets/icons/mail.svg'
              require={true}
            />
            <FormInput 
              errMessage={'Password must be at least 6 characters!'}
              id='password'
              name='password'
              type='password'
              placeholder='Password'
              hasIcon={true}
              minLength="6"
              icon='../src/assets/icons/lock.svg'
              require={true}
            />

            <div className="form__group form__row">
              <FormCheckbox label={'Set as default'}/>
              <Link to="/reset-password" className="auth__link form__pull-right">Forgot password?</Link>
            </div>
            <div className="form__group auth__btn-group">
              <Button type='submit' className="btn--primary auth__btn form__submit-btn">Login</Button>
              <Button className="btn--outline auth__btn auth__btn--outline">
                <img src="../src/assets/icons/google.svg" alt="" className="btn__icon" />
                Sign in with Gmail
              </Button>
            </div>
          </Form>

          <div className="auth__row">
            <p className="auth__text">Don’t have an account yet?</p>
            <Link to='/signup' className="auth__link auth__link--larger">Sign Up</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
