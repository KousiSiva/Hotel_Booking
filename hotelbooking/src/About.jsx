import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import Pool from './pool.png';
import Spa from './spa.png';
import Hotel from './hotel.png';
import Room from './room.png';
import Header from "./Header";

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = "about-page";
    return () => {
      document.body.className = "";
    };
  }, []);

  return (
    <div className="about-section">
      <Header />
      <div className="about-content">
        <div className="about-text">
          <h5 className="about-subtitle">ABOUT US</h5>
          <h1 className="about-title">Welcome to <span>HOTELIER</span></h1>
          <p>
            Welcome to Hotelier – your perfect getaway for luxury and comfort.
            We offer elegant stays, personalized service, and top-tier amenities.
            Experience hospitality that feels like home, wherever you are.
          </p>
          <div className="about-stats">
            <div className="stat-box">
              <h2>996</h2>
              <p>Rooms</p>
            </div>
            <div className="stat-box">
              <h2>342</h2>
              <p>Staffs</p>
            </div>
            <div className="stat-box">
              <h2>1731</h2>
              <p>Clients</p>
            </div>
          </div>
          <button className="explore-btn" onClick={() => navigate("/services")}>EXPLORE MORE</button>
        </div>

        <div className="about-images">
          <img src={Pool} alt="Pool" />
          <img src={Spa} alt="Relaxing Spa" />
          <img src={Hotel} alt="Hotel View" />
          <img src={Room} alt="Dining Area" />
        </div>
      </div>
    </div>
  );
};

export default About;
