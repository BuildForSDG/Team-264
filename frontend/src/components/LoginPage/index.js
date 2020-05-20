import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className='container'>
      <form className='card-panel z-depth-0 green lighten-5' action=''>
        <div className='input-field'>
          <input id='name' type='text' />
          <label htmlFor='name'>Name</label>
        </div>
        <div className='input-field'>
          <input id='password' type='password' />
          <label htmlFor='password'>Password</label>
        </div>
        <div className='input-field'>
          <button className='btn green darken-4' type='submit'>
            Login
          </button>
        </div>
        <small className='grey-text'>
          Don't have an account? <Link to='/signup'>Signup</Link>
        </small>
      </form>
    </div>
  );
};

export default LoginPage;
