import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
   <div>
      <nav>
      <Link to="/" className="brand">MyBrand</Link> {/* Brand on the left */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={menuOpen ? 'active' : ''}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/signin">SignIn</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    <Outlet />
   </div>
   
  );
};

export default Header;
