import { useState } from 'react';
import { FiFacebook, FiGift, FiGithub } from 'react-icons/fi';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import styles from './Signup.module.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.username || !formData.email || !formData.password1 || !formData.password2) {
      setError('All fields are required');
      return;
    }

    try {
      console.log(formData);
      const response = await fetch('http://localhost:8000/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({
          'username' : formData.username,
          'password1': formData.password1,
          'email' : formData.email,
          'password2': formData.password2
        }),
      });

      

      console.log(response.status)
      if (response.status===200) {
        // Handle successful registration, e.g., redirect to login page
        console.log('Registration successful');
        window.location.href="http://localhost:5173/login"
        // You may want to redirect to the login page or handle it based on your application flow
      } else {
        // Handle registration error
        console.error('Registration failed');
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('An error occurred during registration. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles["signup-container"]}>
        <div className={styles["signup-content"]}>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
          <input
              type="text"
              name="username"
              placeholder="Full Name"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password1"
              placeholder="password"
              value={formData.password1}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password2"
              placeholder="Confirm Password"
              value={formData.password2}
              onChange={handleChange}
            />
            <button type="submit">Sign Up</button>
            {error && <p className={styles["error"]}>{error}</p>}
          </form>
          <div className={styles["social-signup"]}>
            <p>Sign Up <br />with :</p>
            <div className={styles["social-icons"]}>
              <a href="www.facebook.com">
                <FiFacebook />
              </a>
              <a href="www.google.com">
                <FiGift />
              </a>
              <a href="www.github.com">
                <FiGithub />
              </a>
            </div>
            <div className={styles['new-user']}>
              <button type='submit' className={styles['login-button']}><a href='/login'>New user?</a></button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;