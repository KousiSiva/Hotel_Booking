import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import './AvailableRooms.css';
import Sidebar from "./Sidebar";

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


const dummyRoomsData = [
  {
    name: "Junior Suite",
    image: room1,
    subRooms: [
      { name: "Junior Standard", available: 3, image: room7 },
      { name: "Junior Deluxe", available: 5, image: room8 },
      { name: "Junior Premium", available: 2, image: room9 },
      { name: "Junior Luxury", available: 1, image: room10 },
    ],
  },
  {
    name: "Executive Suite",
    image: room2,
    subRooms: [
      { name: "Executive Standard", available: 4, image: room10 },
      { name: "Executive Deluxe", available: 2, image: room8 },
      { name: "Executive Premium", available: 1, image: room6 },
      { name: "Executive Luxury", available: 3, image: room7 },
    ],
  },
  {
    name: "Super Deluxe",
    image: room3,
    subRooms: [
      { name: "Deluxe Standard", available: 2, image: room9 },
      { name: "Deluxe Premium", available: 3, image: room5 },
      { name: "Deluxe Luxury", available: 1, image: room10 },
    ],
  },
  {
    name: "Luxury King Room",
    image: room4,
    subRooms: [
      { name: "Luxury Standard", available: 3, image: room7 },
      { name: "Luxury Premium", available: 1, image: room8 },
    ],
  },
  {
    name: "Premium Family Suite",
    image: room5,
    subRooms: [
      { name: "Family Standard", available: 2, image: room10 },
      { name: "Family Premium", available: 1, image: room1 },
    ],
  },
  {
    name: "Penthouse Presidential",
    image: room6,
    subRooms: [
      { name: "Penthouse Deluxe", available: 1, image: room7 },
      { name: "Penthouse Premium", available: 1, image: room9 },
    ],
  },
];

const AvailableRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(null);

  const fetchRooms = async () => {
    try {

      await new Promise(resolve => setTimeout(resolve, 500));

      const data = dummyRoomsData; 

      setRooms(data);
    } catch (error) {
      console.error("Failed to fetch rooms", error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const openModal = (index) => setSelectedRoomIndex(index);
  const closeModal = () => setSelectedRoomIndex(null);

  return (
    <div className="available-rooms-page">
      <Sidebar />
      <div className="available-rooms-container">
        <h2>Available Rooms</h2>
        <div className="room-grid">
          {rooms.map((room, idx) => (
            <div className="room-card" key={idx} onClick={() => openModal(idx)}>
              <img src={room.image} alt={room.name} />
              <h3>{room.name}</h3>
            </div>
          ))}
        </div>

        {selectedRoomIndex !== null && (
          <Dialog open onClose={closeModal} maxWidth="md" fullWidth>
            <DialogTitle className="dialog-title">
              {rooms[selectedRoomIndex].name} - Sub Room Types
            </DialogTitle>
            <DialogContent>
              <div className="subroom-grid">
                {rooms[selectedRoomIndex].subRooms.map((sub, idx) => (
                  <div className="subroom-card" key={idx}>
                    <img src={sub.image} alt={sub.name} />
                    <div className="subroom-info">
                      <h4>{sub.name}</h4>
                      <p>Available: {sub.available}</p>
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={closeModal} color="secondary">Close</Button>
            </DialogActions>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default AvailableRooms;
