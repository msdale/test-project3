import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import "./Header.css"
import Auth from '../../utils/auth';
//import images
import Logo from "../../assets/header/logo.png"
const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <nav className="navbar is-link has-text-light">
        {Auth.loggedIn() ? (
          <>
            <div className='navbar-brand'>
              <a className='navbar-item' href="/">
                <img src={Logo} alt="logo" />Sparkling Spaces
              </a>
            </div>
            <div className='navbar-menu is-active'>
              <div className='navbar-end'>
              <Link to="/profile" className='navbar-item'>
                  Profile
                </Link>
                <Link to="/maidlist" className='navbar-item'>
                  Maid Lists
                </Link>
                <Link to="/" onClick={logout} className='navbar-item'>
                  <strong>Logout</strong>
                </Link>

              </div>
            </div>
          </>
        ) : (
          <>
            <div className='navbar-brand'>
              <a className='navbar-item' href="/">
                <img src={Logo} alt="logo" />Sparkling Spaces
              </a>
            </div>
            <div className='navbar-menu'>
              <div className='navbar-end'>
              <div class="buttons">
          <a className="button is-link" href="/signup">
            <strong>Sign up</strong>
          </a>
          <a className="button is-primary" href="/login">
            <strong>Log in</strong>
          </a>
        </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};
export default Header;