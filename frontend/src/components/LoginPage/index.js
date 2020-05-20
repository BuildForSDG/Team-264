import React from 'react';

const LoginPage = () => {
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
          <button className="btn green darken-4" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
