import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Rita Barragan: Personal</h1>
        <div className="topnav">
          <Link to="/">ABOUT</Link>
          <Link to="/education">EDUCATION</Link>
          <Link to="/experience">EXPERIENCE</Link>
          <Link to="/extracurricular">EXTRACURRICULAR</Link>
          <Link to="/hero">HERO</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    );
  }
}

export default Header;
