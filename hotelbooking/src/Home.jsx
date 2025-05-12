import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Header from "./Header";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
        <Header />
      <nav className="navbar">
       
      </nav>

      <div className="home-content">
        <p className="tagline">LUXURY LIVING</p>
        <h1>Discover A Luxurious Hotel</h1>
        <div className="home-buttons">
          <button className="btn orange" onClick={() => navigate('/login')}>
            BOOK ROOM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
