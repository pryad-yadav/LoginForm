import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loginError, setLoginError] = useState('');
  
    const validate = () => {
      const errors = {};
  
      if (!email) {
        errors.email = 'Email is required';
      }
  
      if (!password) {
        errors.password = 'Password is required';
      }
  
      setErrors(errors);
      return Object.keys(errors).length === 0;
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (validate()) {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
          if (storedUser.email === email && storedUser.password === password) {
            console.log('Login successful');
            setLoginError('');
            // Proceed with login
          } else {
            setLoginError('Invalid email or password');
          }
        } else {
          setLoginError('No user found, please register first');
        }
      }
    };
  
    return (
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
            <div className="login-Innercontainer">

            
          <h2 style={{marginLeft:"40%" ,fontWeight:"bolder",color:"white"}}>Login</h2>
          <div className="form-group">
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? 'error' : ""}
              placeholder='Email or username'
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group">
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? 'error' : ''}
              placeholder='Password'
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          <button  type="submit">Login</button>
          {loginError && <span className="error-message">{loginError}</span>}
        <Link to="/register" className="register-link">Don't have an account?Register</Link>
          </div>
        </form>
        {/* <button >Register</button> */}
      </div>
    );
  };

export default Login;
