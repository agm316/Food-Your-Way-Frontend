import React from 'react';
import './Login.css';

export default function Login() {
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="Username" name="Username" placeholder="Username"/>
        </label>
        <label>
          <p>Password</p>
          <input type="Password" name="Password" placeholder="Password"/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}