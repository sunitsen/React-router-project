import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const storedIsSignedIn = localStorage.getItem('isSignedIn') === 'true';
    setIsSignedIn(storedIsSignedIn);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSignOut = () => {
    localStorage.removeItem('isSignedIn');
    localStorage.removeItem('user');
    setIsSignedIn(false);
    toast('You have signed out!');
  };

  const handleSignIn = () => {
    localStorage.setItem('isSignedIn', 'true');
    setIsSignedIn(true);
  };

  return (
    <div>
      <nav>
        <Link to="/" className="brand">MyBrand</Link>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          ☰
        </button>
        <ul className={menuOpen ? 'active' : ''}>
          <li><Link to="/">Home</Link></li>
          {isSignedIn ? (
            <>
              <li><Link to="/" onClick={handleSignOut}>SignOut</Link></li>
            </>
          ) : (
            <li><Link to="/signin" onClick={handleSignIn}>SignIn</Link></li>
          )}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <ToastContainer />
      <Outlet />
    </div>
  );
};

export default Header;
