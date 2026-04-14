import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState("");
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      window.location.href = "/";
    }
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/protected", {
        headers: {
          Authorization: "Bearer " + token
        }
      });

      setData(res.data.message);
    } catch (err) {
      alert("Unauthorized");
    }
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>

      <button className="btn btn-success me-2" onClick={fetchData}>
        Fetch Data
      </button>

      <button className="btn btn-danger" onClick={logout}>
        Logout
      </button>

      <p className="mt-3">{data}</p>
    </div>
  );
}

export default Dashboard;