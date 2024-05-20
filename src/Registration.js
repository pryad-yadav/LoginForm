import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Registration.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
  const [msg,setmsg]=useState("");
  const [showPassword, setShowPassword] = useState(false);
    const validate = () => {
      const errors = {};
      
      if (!name) {
        errors.name = 'Name is required';
      }
  
      if (!email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email address is invalid';
      }
  
      if (!password) {
        errors.password = 'Password is required';
      } else if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
      }
  
      setErrors(errors);
      return Object.keys(errors).length === 0;
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (validate()) {
        const user = { name, email, password };
        const isuserExisting=localStorage.getItem('user').includes(name)
        // ?alert("existing user"): localStorage.setItem('user', JSON.stringify(user));;
       if(!isuserExisting){
           localStorage.setItem('user', JSON.stringify(user))
           alert("User registered successfully");
        }else{

            alert("existing user")
        }

        console.log('User registered:', user,isuserExisting);
        // setmsg("User registered successfully");
        setName("");
        setEmail("");
        setPassword("");
      }
    };
  
    return (
      <div className="register-container">
<div className='register-Innercontainer'>
        <form onSubmit={handleSubmit} className="register-form">
        <h1 style={{fontWeight:"bolder" ,color:"white"}}>Register</h1>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email" 
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group-password" >
            {/* <label htmlFor="password">Password</label> */}
            <input
               type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? "error" : "passwordInput"}
              placeholder="Password"

            />

<span
       
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
        }}
      
            className="password-toggle-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          <button type="submit">Register</button>
        <Link to="/login" className="login-link">Already have an account? Log in!</Link>
        </form>
        </div>
      </div>
    );
  };
  
export default Register;
