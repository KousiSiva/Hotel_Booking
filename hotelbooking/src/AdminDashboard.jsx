import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";
import Sidebar from "./Sidebar";

const AdminDashboard = () => {
  const navigate = useNavigate();

navigate("/booking-details");

  const handleCheckDetails = () => {
    navigate('/booking-details');
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="dashboard-content">
        <div className="home-content">
          <p className="tagline">LUXURY LIVING</p>
          <h1>Discover A Luxurious Hotel</h1>
          <div className="home-buttons">
            <button className="check-details-button" onClick={handleCheckDetails}>
              Check Details
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
