import React, { useState } from 'react';
import axios from 'axios';

function FeedbackForm({ mode, lan }) {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');
  const [success, setsuccess] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("")

    if (!name || !feedback) {
      setMessage(lan === "English"? 'يرجى ملء جميع الحقول.' : 'Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/feedback', {
        name,
        feedback,
      });

      setsuccess(response.data.message);
      setName('');
      setFeedback('');
    setTimeout(() => {
      setsuccess("")
    },6000);
    } catch (error) {
      setMessage(lan === "English" ? 'خطأ في إرسال الملاحظات: ' : 'Error submitting feedback: ' );
      
      
    }
  };

  return (
    <div style={styles.container(mode)}>
      <h2 style={styles.title(mode, lan)}>{lan === "English" ? '!نود أن نسمع منك' : "We'd love to hear from you!"}</h2>
      <form onSubmit={handleSubmit} style={styles.form(mode, lan)}>
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label(mode, lan)}>{lan === "English" ? ':اسمك' : 'Your Name:'}</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              ...styles.input(mode), 
              textAlign: lan === "English" ? "right" : "left"
            }}
            
            placeholder={lan === "English" ? 'أدخل اسمك' : 'Enter your name'}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="feedback" style={styles.label(mode, lan)}>{lan === "English" ? ':ملاحظاتك' : 'Your Feedback:'}</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows="4"
            style={{
              ...styles.textarea(mode), 
              textAlign: lan === "English" ? "right" : "left"
            }}
            
            placeholder={lan === "English" ? 'أدخل ملاحظاتك' : 'Enter your feedback'}
          />
           <p style={styles.message(mode)}>{message}</p>
           <p style={styles.success}>{success}</p>
        </div>

        <button type="submit" style={styles.button(mode)}>
          {lan === "English" ? 'إرسال' : 'Submit Feedback'}
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: (mode) => ({
    backgroundColor: mode === 'Light' ? '#f9f9f9' : '#333',
    color: mode === 'Light' ? '#333' : '#f9f9f9',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '500px',
    margin: 'auto',
    boxShadow: mode === 'Light' ? '0 4px 8px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
    width: '90%',
  }),
  title: (mode, lan) => ({
    textAlign: lan === "English" ? 'right' : 'left',
    fontSize: '24px',
    fontWeight: 'bold',
    color: mode === 'Light' ? '#333' : '#f9f9f9',
  }),
  message: (mode) => ({
    textAlign: 'center',
    marginBottom: '10px',
    color: mode === 'Light' ? 'red' : 'lightcoral',
  }),
  success: {
    textAlign: 'center',
    marginBottom: '10px',
    color: "88D66C"
  },
  form: (mode, lan) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: lan === "English" ? 'flex-end' : 'flex-start',
  }),
  inputGroup: {
    marginBottom: '15px',
    width: '100%',
  },
  label: (mode, lan) => ({
    fontSize: '16px',
    marginBottom: '5px',
    display: 'block',
    color: mode === 'Light' ? '#333' : '#f9f9f9',
    textAlign: lan === "English" ? 'right' : 'left',
    
  }),
  input: (mode) => ({
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: mode === 'Light' ? '#ccc' : '#555',
    backgroundColor: mode === 'Light' ? '#fff' : '#444',
    color: mode === 'Light' ? '#333' : '#f9f9f9',
    fontSize: '16px',
    
    outline: 'none',
    transition: 'border 0.3s',
  }),
  textarea: (mode) => ({
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: mode === 'Light' ? '#ccc' : '#555',
    backgroundColor: mode === 'Light' ? '#fff' : '#444',
    color: mode === 'Light' ? '#333' : '#f9f9f9',
    fontSize: '16px',
    outline: 'none',
    resize: 'none',
    transition: 'border 0.3s',
}),

  button: (mode) => ({
    padding: '10px 20px',
    backgroundColor: mode === 'Light' ? '#007bff' : '#444',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    width: '50%',
    alignSelf:"center"
  }),
};

export default FeedbackForm;
