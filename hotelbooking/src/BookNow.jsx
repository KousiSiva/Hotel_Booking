import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./BookNow.css";
import Header from "./Header";
import { TextField, Button, Typography, Box } from "@mui/material";

const BookNow = () => {
  const { roomName } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const passedPrice = location.state?.price;
  const parsePrice = (priceStr) => {
    const match = priceStr?.match(/(\d+)/);
    return match ? parseInt(match[0], 10) : 0;
  };

  const pricePerNight = parsePrice(passedPrice);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [guestName, setGuestName] = useState("");
  const [guestAge, setGuestAge] = useState("");
  const [phone, setPhone] = useState("");

  const calculatePrice = () => {
    if (!checkIn || !checkOut) return 0;
    const days = Math.ceil(
      (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
    );
    return days * pricePerNight;
  };

  const handleConfirmBooking = async () => {
    const totalPrice = calculatePrice();
    if (!checkIn || !checkOut || !guestName || !guestAge || !phone) {
      alert("Please fill in all required fields.");
      return;
    }

    const newBooking = {
      roomName,
      checkIn,
      checkOut,
      adults,
      children,
      guestName,
      guestAge,
      phone,
      pricePerNight,
      totalPrice,
    };

    try {
      // Simulate API call (Replace with real API call later)
      const response = await fakeBookingAPI(newBooking);

      if (response.success) {
        alert(`Booking confirmed for ${roomName}!`);
        navigate("/");
      } else {
        alert("Failed to confirm booking.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  // Dummy API simulation (replace with real API call later)
  const fakeBookingAPI = async (bookingData) => {
    console.log("Sending booking data to API...", bookingData);
    await new Promise((resolve) => setTimeout(resolve, 500)); // simulate network delay
    return { success: true };
  };

  return (
    <>
      <Header />
      <div className="book-now-container">
        <Typography variant="h4" className="title">Book Your Stay</Typography>

        <div className="booking-form">
          <TextField
            label="Check-in Date"
            type="date"
            fullWidth
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Check-out Date"
            type="date"
            fullWidth
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Adults"
            type="number"
            fullWidth
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
          />
          <TextField
            label="Children"
            type="number"
            fullWidth
            value={children}
            onChange={(e) => setChildren(e.target.value)}
          />
        </div>

        <Typography variant="h5" className="guest-title">Guest Details</Typography>
        <div className="guest-info">
          <TextField
            label="Guest Name"
            fullWidth
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
          />
          <TextField
            label="Guest Age"
            type="number"
            fullWidth
            value={guestAge}
            onChange={(e) => setGuestAge(e.target.value)}
          />
          <TextField
            label="Phone Number"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <Box mt={3}>
          <Typography variant="h6">Price Per Night: RS.{pricePerNight}/night</Typography>
          <Typography variant="h6">Total Price: RS.{calculatePrice()}</Typography>
        </Box>

        <Button className="confirm-btn" onClick={handleConfirmBooking}>
          CONFIRM BOOKING
        </Button>
      </div>
    </>
  );
};

export default BookNow;
