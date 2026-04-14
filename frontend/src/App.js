import React from "react";
import Login from "./components/login";
import Dashboard from "./components/dashboard";

function App() {
  const token = sessionStorage.getItem("token");

  if (!token) {
    return <Login />;
  }

  return <Dashboard />;
}

export default App;