import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Registration';
import Login from './Login';
import LandingPage from './LandingPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<LandingPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
