import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import './AdminFeedbackPage.css';

const AdminFeedbackPage = () => {
  const [feedbackList, setFeedbackList] = useState([
    { name: "John", message: "Good", rating: 5 },
    { name: "Rani", message: " Super", rating: 4 }
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

  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= count) {
        stars.push(<span key={i} style={{ color: "#ff9800" }}>★</span>);
      } else {
        stars.push(<span key={i} style={{ color: "#ccc" }}>★</span>);
      }
    }
    return stars;
  };

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content" style={{ padding: "2rem" }}>
        <h2 style={{ color: "#ff9800" }}>Feedbacks</h2>

        {feedbackList.length === 0 ? (
          <p>No feedback submitted yet.</p>
        ) : (
          <div className="feedback-table-container">
            <table className="feedback-table">
              <thead>
                <tr style={{ backgroundColor: "#ffe0b2" }}>
                  <th>Name</th>
                  <th>Message</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {feedbackList.map((feedback, index) => (
                  <tr key={index}>
                    <td>{feedback.name}</td>
                    <td>{feedback.message}</td>
                    <td>{renderStars(feedback.rating)}</td>
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

export default AdminFeedbackPage;
