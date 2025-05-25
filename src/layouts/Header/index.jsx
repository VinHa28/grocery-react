import React, { useState } from 'react';
import './Header.scss';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import ThemeButton from '../../components/Button/ThemeButton';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className='header'>
      <div className="container">
        <div className="top-bar">
          <button className="top-bar__more d-none d-lg-block" onClick={() => setOpen(true)}>
            <img src="../src/assets/icons/document.svg" className="icon top-bar__more-icon" />
          </button>

          <Logo className='header__logo '/>
          <Navbar open={open} setOpen={setOpen}/>
          <div className="navbar__overlay" onClick={() => setOpen(false)}></div>
          <div className="top-action">
            <ThemeButton className='d-md-none'/>

            <Link to="/login" >
              <Button className="btn btn--text d-md-none">Sign In</Button>
            </Link>
            <Link to='/signup'>
              <Button className="btn btn--primary top-action__sign-up">Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
