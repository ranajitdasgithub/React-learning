// src/components/Register.js
import "../styles/register.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register({ username, password }));
    alert("Registration successful");
    navigate("/login");
  };

  return (
    <>
      <h2>Register page</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
    </>
  );
};

export default Register;
