import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SingupPage';

function App() {
  return (
    <Router>
      <Navigation />
      <div className='routes'>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/signup'>
          <SignupPage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
