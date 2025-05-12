import React from 'react';
import './Service.css';
import Header from "./Header"; 
import { FaHotel, FaUtensils, FaSpa, FaGamepad, FaBirthdayCake, FaDumbbell } from 'react-icons/fa';

const services = [
  { icon: <FaHotel />, title: 'Rooms & Apartment', desc: 'Contrary to popular belief, ipsum is not simply random.' },
  { icon: <FaUtensils />, title: 'Food & Restaurant', desc: 'Contrary to popular belief, ipsum is not simply random.' },
  { icon: <FaSpa />, title: 'Spa & Fitness', desc: 'Contrary to popular belief, ipsum is not simply random.' },
  { icon: <FaGamepad />, title: 'Sports & Gaming', desc: 'Contrary to popular belief, ipsum is not simply random.' },
  { icon: <FaBirthdayCake />, title: 'Event & Party', desc: 'Contrary to popular belief, ipsum is not simply random.' },
  { icon: <FaDumbbell />, title: 'GYM & Yoga', desc: 'Contrary to popular belief, ipsum is not simply random.' },
];

const Service = () => {
  return (
    <>
      <Header />
      <div className="service-container">
        <h2>Explore Our <span className="highlight">SERVICES</span></h2>
        <div className="cards">
          {services.map((service, index) => (
            <div key={index} className="card">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
