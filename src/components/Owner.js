import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Owner.css'; // Ensure the styles are correctly applied

const OwnerSpace = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const navigate = useNavigate();

  // Fetch feedback from the server2
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/feedback', { withCredentials: true });
        console.log(response.data)
        setFeedbackList(response.data);
      } catch (error) {
        console.error('error:', error);
      }
    };

    fetchFeedback();
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3000/api/logout', {}, { withCredentials: true });
      localStorage.removeItem("token");
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Error logging out. Please try again later.');
    }
  };

  return (
    <div className="owner-space">
      {/* Sidebar */}
      <div className="sidebar">
        <img src='../../images/logo.png' alt="Logo" className="logo" />
        <button onClick={handleLogout} className="sidebar-button">Logout</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Feedback List</h2>
        <ul>
          {feedbackList.length === 0 ? (
            <li>No feedback available</li>
          ) : (
            feedbackList.map((feedback) => (
              <li key={feedback.id}>
                <strong>{feedback.user}</strong>: {feedback.description}
              </li>
            
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default OwnerSpace;
