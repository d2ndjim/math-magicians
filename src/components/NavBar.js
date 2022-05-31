import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navigation">
    <h1>Math Magicians</h1>
    <nav>
      <Link to="/" className="links">
        Home
      </Link>
      <Link to="/calculator" className="links">
        Calculator
      </Link>
      <Link to="/quote" className="links">
        Quote
      </Link>
    </nav>
  </div>
);

export default NavBar;
