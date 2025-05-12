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
    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);
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
