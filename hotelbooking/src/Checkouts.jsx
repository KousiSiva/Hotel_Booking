import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./Checkouts.css";

const Checkouts = () => {
  const [bookings, setBookings] = useState([
    {
      guestName: "John",
      roomName: "Executive Suite",
      checkIn: "2025-05-01",
      checkOut: "2025-05-05",
      totalPrice: 20000,
    },
    {
      guestName: "Rani",
      roomName: "Luxury King Room",
      checkIn: "2025-05-03",
      checkOut: "2025-05-07",
      totalPrice: 35000,
    },
  ]);

  const [paymentStatus, setPaymentStatus] = useState({
    0: true,
    1: false,
  });

  const handlePaymentChange = (index) => {
    const updatedStatus = {
      ...paymentStatus,
      [index]: !paymentStatus[index],
    };
    setPaymentStatus(updatedStatus);
  };

  return (
    <div className="checkout-layout">
      <Sidebar />
      <div className="checkout-content">
        <h2 className="checkout-title">CHECKOUT LIST</h2>

        {bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          <div className="checkout-table-wrapper">
            <table className="checkout-table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Room</th>
                  <th>Check-in</th>
                  <th>Check-out</th>
                  <th>Amount</th>
                  <th>Payment Received</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, index) => (
                  <tr key={index}>
                    <td>{b.guestName}</td>
                    <td>{b.roomName}</td>
                    <td>{new Date(b.checkIn).toLocaleDateString()}</td>
                    <td>{new Date(b.checkOut).toLocaleDateString()}</td>
                    <td>Rs. {b.totalPrice}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={paymentStatus[index] || false}
                        onChange={() => handlePaymentChange(index)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkouts;
