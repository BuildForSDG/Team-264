import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div className='container'>
      <form className='card-panel green lighten-5' action=''>
        <div className='input-field'>
          <input id='name' type='text' />
          <label htmlFor='name'>Name</label>
        </div>
        <div className='input-field'>
          <input id='password' type='password' />
          <label htmlFor='password'>Password</label>
        </div>
        <div className='input-field'>
          <input id='confirm_password' type='password' />
          <label htmlFor='confirm_password'>Confirm Password</label>
        </div>
        <div className='input-field'>
          <button className='btn green darken-4' type='submit'>
            Sign up
          </button>
        </div>
        <small className='grey-text'>
          Already have an account? <Link to='/login'>Login</Link>
        </small>
      </form>
    </div>
  );
};

export default SignupPage;
