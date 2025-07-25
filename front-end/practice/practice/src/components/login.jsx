import { useState } from 'react';
import Mybutton from '../global/button.jsx';
import '../styles.css';
import axios from 'axios';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8001/users", 
        null, 
        {
          params: {
            username: username,
            password: password,
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Login</h1>

        <label htmlFor="username">
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <Mybutton
          variant="contained"
          color="primary"
          text="Login"
          type="submit" 
        /> 
      </form>
    </>
  );
};

export default Login;
