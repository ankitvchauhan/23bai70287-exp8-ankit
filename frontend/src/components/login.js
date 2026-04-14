import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username: username,
        password: password
      });

      console.log(res.data); // debug

      sessionStorage.setItem("token", res.data.token);
      window.location.reload();

    } catch (err) {
      console.log(err.response?.data);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      <input
        className="form-control"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      /><br/>

      <input
        className="form-control"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      /><br/>

      <button className="btn btn-primary" onClick={login}>
        Login
      </button>
    </div>
  );
}

export default Login;