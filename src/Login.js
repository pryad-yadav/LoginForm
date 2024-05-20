import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { ImEye } from "react-icons/im";
import { IoEyeOffOutline } from "react-icons/io5";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const validate = () => {
    const errors = {};

    if (!email) {
      errors.email = "Email is required";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      const storedUser = JSON.parse(localStorage.getItem("users"));
      if (storedUser) {
        console.log(storedUser, "sssss");
        storedUser.map((user) => {
          console.log(user);

          return (user.email === email && user.password === password
            ? ((console.log("Login successful"), alert("Login successful")),
              setLoginError(""))
            : setLoginError("Invalid email or password"))
        });
      } else {
        setLoginError("No user found, please register first");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-Innercontainer">
        <form onSubmit={handleSubmit} className="login-form">
          <h2
            style={{ marginLeft: "40%", fontWeight: "bolder", color: "white" }}
          >
            Login
          </h2>
          <div className="form-group">
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? "error" : ""}
              placeholder="Email or username"
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
          {/* <div class="password-container">
    <input type="password" id="password" class="password-field" placeholder="Enter your password"></input>
    <span class="toggle-password" onclick="togglePasswordVisibility()">
      <i id="eye-icon" class="fas fa-eye"></i>
    </span>
  </div> */}
          <div className="form-group-password">
            {/* <label htmlFor="password">Password</label> */}
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? "error" : "passwordInput"}
              placeholder="Password"
            />

            <span
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
              className="password-toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOffOutline /> : <ImEye />}
            </span>
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>
          <button type="submit">Login</button>
          {loginError && <span className="error-message">{loginError}</span>}
          <Link to="/register" className="register-link">
            Don't have an account?Register
          </Link>
        </form>
      </div>
      {/* <button >Register</button> */}
    </div>
  );
};

export default Login;
