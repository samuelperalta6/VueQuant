import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../../axiosConfig.js";


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', { username, password }); // ✅ Using your api instance

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token); // ✅ Store JWT
        navigate('/dashboard'); // Redirect to dashboard after login
      }
    } catch (error) {
      alert('Login failed: ' + (error.response?.data.error || 'Unknown error'));
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="text-black"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="text-black"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
