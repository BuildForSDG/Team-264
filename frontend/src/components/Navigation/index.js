import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';
import './navigation.css'

const Navigation = () => {
  return (
    <nav id="nav">
      <div className='nav-wrapper container'>
        <Link className='brand-logo left'>Logo</Link>
        <LoggedInLinks />
        <LoggedOutLinks />
      </div>
    </nav>
  );
};

export default Navigation;
