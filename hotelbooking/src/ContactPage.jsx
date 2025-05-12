import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Rating, Box, Typography } from "@mui/material";
import './ContactPage.css';
import Header from "./Header";

const ContactPage = () => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedback = { name, message, rating };

    try {
      const response = await fakeSubmitFeedbackAPI(feedback);

      if (response.success) {
        alert("Your message has been submitted.");
        navigate("/");
      } else {
        alert("Failed to submit feedback.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const fakeSubmitFeedbackAPI = async (feedback) => {
    console.log("Submitting feedback to API...", feedback);
    await new Promise((resolve) => setTimeout(resolve, 500)); 
    return { success: true };
  };

  return (
    <>
      <Header />
      <div className="contact-page">
        <div className="contact-form">
          <Typography variant="h4" gutterBottom>
            Feedback
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
            />

            <TextField
              label="Your Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              margin="normal"
            />
            <Box mt={2}>
              <Typography>Rate Us</Typography>
              <Rating
                name="rating"
                value={rating}
                onChange={(e, newValue) => setRating(newValue)}
              />
            </Box>
            <Box mt={3}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </form>
        </div>

        <div className="contact-info">
          <Typography variant="h5" gutterBottom>
            Contact Information
          </Typography>
          <div>
            <Typography variant="body1">Address: 123 North Street, Chrompet, Chennai.</Typography>
            <Typography variant="body1">Phone: +91 9790083156</Typography>
            <Typography variant="body1">Email: hotelier@example.com</Typography>
          </div>
          <div>
            <Typography variant="body1">Follow Us:</Typography>
            <div>
              <a href="https://facebook.com">Facebook</a> | 
              <a href="https://twitter.com">Twitter</a> | 
              <a href="https://instagram.com">Instagram</a> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
