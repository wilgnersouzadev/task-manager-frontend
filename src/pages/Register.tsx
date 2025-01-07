import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert("All fields are required.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/api/auth/register", {
        name,
        email,
        password,
      });
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <div className="register-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <button onClick={handleRegister}>Register</button>
        <button className="back-button" onClick={() => navigate("/login")}>
          Back
        </button>
      </div>
    </div>
  );
}

export default Register;
