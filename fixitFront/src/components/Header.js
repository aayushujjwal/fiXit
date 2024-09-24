import React from 'react';
import { Link } from 'react-router-dom';
import companylogo from '../Assets/fixit_white_bg.3734d2d4.svg';

function Header({ user, handleLogout }) {
  return (
    <nav className="nav bg-black text-white flex items-center justify-between px-20 py-3">
      <div className=" px-10 left-buttons flex items-center">
        <Link to="/" className="logo-container flex items-center">
          <img
            alt="fixit"
            width="25"
            height="25"
            src={companylogo}
            className="logo-image mr-2"
          />
          <span className="logo-text text-3xl font-light tracking-wide">fiXit</span>
        </Link>
      </div>
      <div className="px-20 gap-6 text right-buttons flex space-x-6">
        <Link to="/aboutus" className="button text-sm hover:underline">About Us</Link>
        {user ? (
          <button onClick={handleLogout} className="button text-sm hover:underline">Logout</button>
        ) : (
          <Link to="/login" className="button text-sm hover:underline">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
