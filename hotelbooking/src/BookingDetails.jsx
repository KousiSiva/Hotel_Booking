import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./BookingDetails.css";

const BookingDetails = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const defaultBookings = [
      {
        guestName: "John",
        roomName: "Junior Suite",
        adults: 2,
        children: 1,
        phone: "9876543210",
        checkIn: "2025-05-10",
        checkOut: "2025-05-14",
      },
      {
        guestName: "Rani",
        roomName: "Executive Suite",
        adults: 3,
        children: 0,
        phone: "9123456789",
        checkIn: "2025-05-12",
        checkOut: "2025-05-16",
      },
    ];
    setBookings(defaultBookings);
  }, []);

  return (
    <div className="booking-layout">
      <Sidebar />
      <div className="booking-content">
        <h2 className="booking-title">BOOKING DETAILS</h2>

        {bookings.length === 0 ? (
          <p>No bookings available.</p>
        ) : (
          <div className="booking-table-wrapper">
            <table className="booking-table">
              <thead>
                <tr>
                  <th>Booking Date</th>
                  <th>Customer</th>
                  <th>Room Type</th>
                  <th>Persons</th>
                  <th>Phone</th>
                  <th>Check-in</th>
                  <th>Check-out</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, index) => (
                  <tr key={index}>
                    <td>{new Date().toLocaleDateString()}</td>
                    <td>{b.guestName}</td>
                    <td>{b.roomName}</td>
                    <td>
                      {b.adults} Adults
                      {b.children > 0 ? ` x ${b.children} ${b.children > 1 ? "Children" : "Child"}` : ""}
                    </td>
                    <td>
                      <a href={`tel:${b.phone}`} className="phone-link">
                        {b.phone}
                      </a>
                    </td>
                    <td>{new Date(b.checkIn).toLocaleDateString()}</td>
                    <td>{new Date(b.checkOut).toLocaleDateString()}</td>
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

export default BookingDetails;
