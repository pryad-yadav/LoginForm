import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="landing-container">
        <div className="landing-Innercontainer">
      <h1>Welcome to Our Application</h1>
      <div className="button-group">
        <button onClick={handleLoginClick} className="landing-button">Login</button>
        <button onClick={handleRegisterClick} className="landing-button">Register</button>
      </div>
      </div>
    </div>
  );
}

export default LandingPage;
