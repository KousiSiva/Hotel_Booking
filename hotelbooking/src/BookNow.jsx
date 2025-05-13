import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./BookNow.css";
import Header from "./Header";

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

  const fakeBookingAPI = async (bookingData) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { success: true };
  };

  return (
    <>
      <Header />
      <div className="book-now-container">
        <div className="back-arrow" onClick={() => navigate(-1)}>
          ←
        </div>
        <h2>Book Your Stay</h2>

        <div className="booking-form">
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            placeholder="Check-in Date"
          />
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            placeholder="Check-out Date"
          />
          <input
            type="number"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            placeholder="Adults"
          />
          <input
            type="number"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            placeholder="Children"
          />
        </div>

        <h3 className="guest-title">Guest Details</h3>
        <div className="guest-info">
          <input
            type="text"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="Guest Name"
          />
          <input
            type="number"
            value={guestAge}
            onChange={(e) => setGuestAge(e.target.value)}
            placeholder="Guest Age"
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
          />
        </div>

        <div className="price-info">
          <p>Price Per Night: RS.{pricePerNight}/night</p>
          <p>Total Price: RS.{calculatePrice()}</p>
        </div>

        <button className="confirm-btn" onClick={handleConfirmBooking}>
          CONFIRM BOOKING
        </button>
      </div>
    </>
  );
};

export default BookNow;
