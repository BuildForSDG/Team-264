import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedInLinks = () => {
  return (
    <ul className='right'>
      <li>
        <NavLink to='/logout'>Logout</NavLink>
      </li>
      <li>
        <NavLink to='/account'>Account</NavLink>
      </li>
    </ul>
  );
};

export default LoggedInLinks;
