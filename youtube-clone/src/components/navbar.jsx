import React from 'react';

const Navbar = (props) => {
  return (
    <nav className="youtube-search-bar">
      <img className="youtube-logo" src="images/logo.png" alt="logo" />
      <span className="youtube-title">Youtube</span>
      <input type="text" className="youtube-search" placeholder="Search.." />
      <button className="search-btn">
        <i className="fas fa-search"></i>
      </button>
    </nav>
  );
};

export default Navbar;
