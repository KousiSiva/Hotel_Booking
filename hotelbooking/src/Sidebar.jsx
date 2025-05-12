
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="sidebar">
      <h2 className="logo">HOTELIER</h2>
      <nav>
        <NavLink to="/admin" className="nav-item">Dashboard</NavLink>
        <NavLink to="/rooms-available" className="nav-item">Rooms Available</NavLink>
<NavLink to="/booking-details" className="nav-item">Booking Details</NavLink>

        <NavLink to="/checkouts" className="nav-item">Checkouts</NavLink>
        <NavLink to="/feedback" className="nav-item">Feedback</NavLink>
        <button onClick={handleLogout} className="nav-item logout">Logout</button>
      </nav>
    </div>
  );
};

export default Sidebar;
