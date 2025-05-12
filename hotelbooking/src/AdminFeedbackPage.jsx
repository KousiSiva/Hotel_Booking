import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Rating,
} from "@mui/material";
import Sidebar from "./Sidebar";
import './AdminFeedbackPage.css';

const AdminFeedbackPage = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem("feedbackList")) || [];
    setFeedbackList(storedFeedback);
  }, []);

  return (
    <div className="admin-layout">
      <Sidebar />
      <Box className="admin-content" p={4}>
        <Typography variant="h4" gutterBottom style={{ color: "#ff9800" }}>
          Feedbacks
        </Typography>

        {feedbackList.length === 0 ? (
          <Typography>No feedback submitted yet.</Typography>
        ) : (
          <TableContainer component={Paper}>
            <Table>
              <TableHead style={{ backgroundColor: "#ffe0b2" }}>
                <TableRow>
                  <TableCell><strong>Name</strong></TableCell>
                  <TableCell><strong>Message</strong></TableCell>
                  <TableCell><strong>Rating</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {feedbackList.map((feedback, index) => (
                  <TableRow key={index}>
                    <TableCell>{feedback.name}</TableCell>
                    <TableCell>{feedback.message}</TableCell>
                    <TableCell>
                      <Rating value={feedback.rating} readOnly />
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

export default AdminFeedbackPage;
