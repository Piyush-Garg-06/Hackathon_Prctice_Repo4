

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <header className="header">
      <div className="logo">
        <svg fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 12h20" />
        </svg>
        MediCare Portal
      </div>
      <nav>
        <ul>
          {!isLoginPage && (
            <>
              <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>Home</NavLink></li>
              <li><NavLink to="/service" className={({ isActive }) => (isActive ? 'active' : '')}>Service</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink></li>
              <li><NavLink to="/career" className={({ isActive }) => (isActive ? 'active' : '')}>Career</NavLink></li>
              <li><NavLink to="/help" className={({ isActive }) => (isActive ? 'active' : '')}>Help Us</NavLink></li>
            </>
          )}
          <li><NavLink to="/login" className="logout-btn">Login</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
