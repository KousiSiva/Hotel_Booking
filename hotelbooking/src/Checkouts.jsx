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
  Paper,
  Checkbox
} from "@mui/material";
import Sidebar from "./Sidebar";
import "./Checkouts.css";

const Checkouts = () => {
  const [bookings, setBookings] = useState([]);
  const [paymentStatus, setPaymentStatus] = useState({});

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);

    const storedStatus = JSON.parse(localStorage.getItem("paymentStatus")) || {};
    setPaymentStatus(storedStatus);
  }, []);

  const handlePaymentChange = (index) => {
    const updatedStatus = {
      ...paymentStatus,
      [index]: !paymentStatus[index]
    };
    setPaymentStatus(updatedStatus);
    localStorage.setItem("paymentStatus", JSON.stringify(updatedStatus));
  };

  return (
    <div className="checkout-layout">
      <Sidebar />
      <Box className="checkout-content" p={4}>
        <Typography variant="h4" gutterBottom style={{ color: "#ff9800" }}>
          Checkout List
        </Typography>

        {bookings.length === 0 ? (
          <Typography>No bookings found.</Typography>
        ) : (
          <TableContainer component={Paper} className="checkout-table">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Customer</TableCell>
                  <TableCell>Room</TableCell>
                  <TableCell>Check-in</TableCell>
                  <TableCell>Check-out</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Payment Received</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookings.map((b, index) => (
                  <TableRow key={index}>
                    <TableCell>{b.guestName}</TableCell>
                    <TableCell>{b.roomName}</TableCell>
                    <TableCell>{new Date(b.checkIn).toLocaleDateString()}</TableCell>
                    <TableCell>{new Date(b.checkOut).toLocaleDateString()}</TableCell>
                    <TableCell>RS.{b.totalPrice}</TableCell>
                    <TableCell>
                      <Checkbox
                        checked={paymentStatus[index] || false}
                        onChange={() => handlePaymentChange(index)}
                        color="success"
                      />
                    </TableCell>
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

export default Checkouts;
