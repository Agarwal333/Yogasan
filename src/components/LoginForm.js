import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./LoginForm.css";

function LoginForm() {
  const Navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === 'DESN3037') {
      alert('You are logged in!');
     Navigate("/home");
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='LoginFormMain'>
    <div className='Header'>
          <h1 className='LogoLink'>Yogasan</h1>
        </div>
    <div className='LoginFormContainer'>   
      <h2 className='Logiin'>Login</h2>
      <form onSubmit={handleSubmit}>
          <div class="form-group">
            <input type="text" id="username" placeholder=" " value={username} onChange={handleUsernameChange}/>
            <label for="username">Username</label>
          </div>
          <div class="form-group">
            <input id="password" placeholder=" " type="password" value={password} onChange={handlePasswordChange}/>
            <label for="username">Password</label>
          </div>
            <span className='Forgot'>Forgot password?</span>

      {/* <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label> */}
      <br />
      {/* <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label> */}
      <br />
      <button className='LoginBtn' type="submit">Log In</button>

    </form>
    <span className='Register'>Don’t have an account? Register Free</span>
    </div>

    </div>
    
  );
}

export default LoginForm;
