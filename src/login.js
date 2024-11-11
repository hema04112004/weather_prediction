import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";  // Import Link for navigation to Register page
import axios from 'axios';
import './login.css';  // Import CSS

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/auth/login', { email, password });

      if (response.data.status === "ok") {
        localStorage.setItem('token', response.data.token);  // Store JWT in local storage
        alert("Login Successful");
        navigate('/wheather');  // Redirect after successful login
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-inner">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {/* Add Register link below the form */}
        <div className="register-link">
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="register-text">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
