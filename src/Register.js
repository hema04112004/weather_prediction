import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './register.css';  // Import CSS here

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/auth/register', { email, password });

      if (response.data.status === "ok") {
        alert("Registration Successful");
        navigate('/');  // Redirect to login page after registration
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Failed to register. Please try again later.');
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-inner">
        <h2>Register</h2>
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
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
