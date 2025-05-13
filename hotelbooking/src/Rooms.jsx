import React, { useState } from "react";
import "./Rooms.css";
import Header from "./Header";
import { Link } from "react-router-dom";

import room1 from './room1.png';
import room2 from './room2.png';
import room3 from './room3.png';
import room4 from './room4.png';
import room5 from './room5.png';
import room6 from './room6.png';
import room7 from './room7.png';
import room8 from './room8.png';
import room9 from './room9.png';
import room10 from './room10.png';

const rooms = [
  {
    name: "Junior Suite",
    price: "RS.4000/night",
    beds: "2 Bed",
    baths: "1 Bath",
    wifi: "Wifi",
    image: room1,
    subRooms: [
      { name: "Junior Standard", price: "RS.3500/night", image: room7, description: "Cozy room with essential amenities." },
      { name: "Junior Deluxe", price: "RS.4000/night", image: room8, description: "Elegant room with a beautiful view." },
      { name: "Junior Premium", price: "RS.4500/night", image: room9, description: "Spacious with premium furnishings." },
      { name: "Junior Luxury", price: "RS.5000/night", image: room10, description: "Ultimate luxury experience with modern decor." },
    ]
  },
  {
    name: "Executive Suite",
    price: "RS.8000/night",
    beds: "3 Bed",
    baths: "2 Bath",
    wifi: "Wifi",
    image: room2,
    subRooms: [
      { name: "Executive Standard", price: "RS.7500/night", image: room10, description: "Modern executive suite with workspace." },
      { name: "Executive Deluxe", price: "RS.8000/night", image: room8, description: "Elegant executive suite with luxury bedding." },
      { name: "Executive Premium", price: "RS.8500/night", image: room6, description: "Spacious premium executive suite." },
      { name: "Executive Luxury", price: "RS.9000/night", image: room7, description: "High-end executive suite with premium decor." },
    ]
  },
  {
    name: "Super Deluxe",
    price: "RS.11000/night",
    beds: "3 Bed",
    baths: "2 Bath",
    wifi: "Wifi",
    image: room3,
    subRooms: [
      { name: "Deluxe Standard", price: "RS.10500/night", image: room9, description: "Deluxe suite with essential amenities." },
      { name: "Deluxe Premium", price: "RS.11000/night", image: room5, description: "Spacious deluxe suite with balcony view." },
      { name: "Deluxe Luxury", price: "RS.11500/night", image: room10, description: "High-end deluxe suite with premium features." },
    ]
  },
  {
    name: "Luxury King Room",
    price: "RS.14000/night",
    beds: "1 King Bed",
    baths: "2 Bath",
    wifi: "Wifi",
    image: room4,
    subRooms: [
      { name: "Luxury Standard", price: "RS.13500/night", image: room7, description: "King-sized luxury suite with elegant decor." },
      { name: "Luxury Premium", price: "RS.14000/night", image: room8, description: "Top-tier luxury suite with modern amenities." },
    ]
  },
  {
    name: "Premium Family Suite",
    price: "RS.18000/night",
    beds: "4 Bed",
    baths: "3 Bath",
    wifi: "Wifi",
    image: room5,
    subRooms: [
      { name: "Family Standard", price: "RS.17500/night", image: room10, description: "Spacious family suite for comfort." },
      { name: "Family Premium", price: "RS.18000/night", image: room1, description: "Luxury family suite with multiple rooms." },
    ]
  },
  {
    name: "Penthouse Presidential",
    price: "RS.22000/night",
    beds: "5 Bed",
    baths: "4 Bath",
    wifi: "Wifi",
    image: room6,
    subRooms: [
      { name: "Penthouse Deluxe", price: "RS.21500/night", image: room7, description: "Exclusive penthouse with panoramic views." },
      { name: "Penthouse Premium", price: "RS.22000/night", image: room9, description: "Luxury penthouse with modern amenities." },
    ]
  },
];

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedSubRoom, setSelectedSubRoom] = useState(null);

  const handleOpenModal = (room) => {
    setSelectedRoom(room);
    setSelectedSubRoom(null);
  };

  const handleCloseModal = () => {
    setSelectedRoom(null);
  };

  return (
    <>
      <Header />
      <div className="rooms-container">
        <h2>Explore Our <span className="highlight">ROOMS</span></h2>
        <div className="rooms-scroll-wrapper">
          <div className="rooms-list">
            {rooms.map((room, index) => (
              <div key={index} className="room-card">
                <img src={room.image} alt={room.name} className="room-image" />
                <div className="room-info">
                  <h3>{room.name}</h3>
                  <p className="price">{room.price}</p>
                  <p>{room.beds} | {room.baths} | {room.wifi}</p>
                  <button className="detail-btn" onClick={() => handleOpenModal(room)}>VIEW DETAILS</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedRoom && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <div className="modal-header">
  <span className="back-arrow-symbol" onClick={handleCloseModal}>←</span>

</div>
            <h2 className="modal-title">{selectedRoom.name.toUpperCase()} OPTIONS</h2>
            <div className="modal-content">
              {selectedRoom.subRooms.map((subRoom, index) => (
                <label key={index} className="sub-room-card">
                  <input
                    type="radio"
                    name="subRoom"
                    value={subRoom.name}
                    checked={selectedSubRoom?.name === subRoom.name}
                    onChange={() => setSelectedSubRoom(subRoom)}
                  />
                  <img src={subRoom.image} alt={subRoom.name} className="room-image" />
                  <h3>{subRoom.name}</h3>
                  <p className="price">{subRoom.price}</p>
                  <p>{subRoom.description}</p>
                </label>
              ))}
            </div>
            <div className="buttons">
              {selectedSubRoom && (
                <Link
                  to={`/book/${encodeURIComponent(selectedSubRoom.name)}`}
                  state={{ price: selectedSubRoom.price }}
                  className="book-btn"
                >
                  BOOK NOW
                </Link>
              )}
              <button className="detail-btn" onClick={handleCloseModal}>CLOSE</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Rooms;
