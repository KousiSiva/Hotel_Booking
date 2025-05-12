import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import Sidebar from "./Sidebar";
import "./BookingDetails.css";

const BookingDetails = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const defaultBookings = [
      {
        guestName: "John ",
        roomName: "Junior Suite",
        adults: 2,
        children: 1,
        phone: "9876543210",
        checkIn: "2025-05-10",
        checkOut: "2025-05-14"
      },
      {
        guestName: "Rani",
        roomName: "Executive Suite",
        adults: 3,
        children: 0,
        phone: "9123456789",
        checkIn: "2025-05-12",
        checkOut: "2025-05-16"
      }
    ];
    setBookings(defaultBookings);
  }, []);

  return (
    <div className="booking-layout">
      <Sidebar />
      <Box className="booking-content" p={4}>
        <Typography variant="h4" gutterBottom style={{ color: "#ff9800" }}>
          Booking Details
        </Typography>

        {bookings.length === 0 ? (
          <Typography>No bookings available.</Typography>
        ) : (
          <TableContainer component={Paper} className="booking-table">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Booking Date</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Room Type</TableCell>
                  <TableCell>Persons</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Check-in</TableCell>
                  <TableCell>Check-out</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookings.map((b, index) => (
                  <TableRow key={index}>
                    <TableCell>{new Date().toLocaleDateString()}</TableCell>
                    <TableCell>{b.guestName}</TableCell>
                    <TableCell>{b.roomName}</TableCell>
                    <TableCell>
                      {b.adults} adults
                      {b.children > 0 ? ` x ${b.children} ${b.children > 1 ? "Children" : "Child"}` : ""}
                    </TableCell>
                    <TableCell>
                      <a href={`tel:${b.phone}`} className="phone-link">{b.phone}</a>
                    </TableCell>
                    <TableCell>{new Date(b.checkIn).toLocaleDateString()}</TableCell>
                    <TableCell>{new Date(b.checkOut).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </div>
  );
};

export default BookingDetails;
