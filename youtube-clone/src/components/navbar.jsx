import React from 'react';

const Navbar = (props) => {
  return (
    <nav className="youtube-search-bar">
      <span className="youtube-logo"></span>
      <span className="youtube-title">Youtube</span>
      <input type="text" className="youtube-search" placeholder="Search.." />
      <button className="search-btn">
        <i class="fas fa-search"></i>
      </button>
    </nav>
  );
};

export default Navbar;
