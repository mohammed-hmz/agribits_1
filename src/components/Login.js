import React, { useState } from 'react';
import styles from '../styles/Login.module.css'; // Import the CSS module
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OwnerLogin = ({ lan }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/login', { email, password }, { withCredentials: true });

      // Assuming the token is in res.data.token
      const token = res.data.token;

      // Store the token in localStorage
      localStorage.setItem('token', token);

      // Navigate to the owner page
      navigate('/owner');
    } catch (err) {
      // Handle axios error more clearly
      if (err.response) {
        // Server responded with a status other than 2xx
        console.error('Server responded with an error:', err.response.status, err.response.data);
        setError(lan === 'English' ? err.response.data.message || 'فشل في تسجيل الدخول' : err.response.data.message || 'Login failed');
      } else if (err.request) {
        // No response was received from the server
        console.error('No response received from server:', err.request);
        setError(lan === 'English' ? 'لا يوجد استجابة من الخادم. يرجى المحاولة لاحقًا.' : 'No response from server. Please try again later.');
      } else {
        // Something else happened during the request
        console.error('Error during request:', err.message);
        setError(lan === 'English' ? err.message : err.message);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>{lan === 'English' ? 'تسجيل الدخول للمالك' : 'Owner Login'}</h2>
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label>{lan === 'English' ? 'البريد الإلكتروني' : 'Email'}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
              placeholder={lan === 'English' ? 'ادخل بريدك الإلكتروني' : 'Your email'}
         
            />
          </div>
          <div className={styles.inputGroup}>
            <label>{lan === 'English' ? 'كلمة المرور' : 'Password'}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
              placeholder={lan === 'English' ? 'ادخل كلمة المرور' : 'Your password'}
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.submitButton}>
            {lan === 'English' ? 'تسجيل الدخول' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OwnerLogin;
