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
  const [feedbackList, setFeedbackList] = useState([
    { name: "John", message: "Good", rating: 5 },
    { name: "Rani", message: "Service Super", rating: 4 }
  ]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch('/api/admin/feedbacks');
        if (!response.ok) {
          throw new Error('Failed to fetch feedbacks');
        }
        const data = await response.json();
        setFeedbackList(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFeedbacks();
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
