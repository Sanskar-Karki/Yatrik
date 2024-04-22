import { useState } from 'react';
import styles from './Login.module.css';
import { FiFacebook, FiGift, FiGithub } from 'react-icons/fi';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';

const getPasswordStrength = (password) => {
    if (password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password)) {
        return 'Strong';
    } else if (password.length >= 6) {
        return 'Medium';
    } else {
        return 'Weak';
    }
};

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password1: '',
        password2: '',
    });

    const [error, setError] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');

    const handleChange = (e) => {
        const newPassword = e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: newPassword,
        });

        const strength = getPasswordStrength(newPassword);
        setPasswordStrength(strength);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (!formData.username  || !formData.email || !formData.password1 || !formData.password2) {
            setError('All fields are required');
            return;
        }

        if (formData.password1 !== formData.password2) {
            setError('Passwords do not match');
            return;
        }

        setError('');

        try {
            console.log(formData);
            const response = await fetch('http://localhost:8000/login/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                
              },
              body: JSON.stringify({
                'username':formData.username,
                'password1': formData.password1,
                'email' : formData.email,
                'password2':formData.password2,
                
              }),
            });
      
            
      
            console.log(response.status)
            if (response.status===200) {
              // Handle successful registration, e.g., redirect to home page
              console.log('Registration successful');
              window.location.href="http://localhost:5173/"
              // You may want to redirect to the login page or handle it based on your application flow
            } else {
              // Handle registration error
              console.error('Login failed');
              setError('Login failed. Please try again.');
            }
          } catch (error) {
            console.error('Error during Login:', error);
            setError('An error occurred during registration. Please try again.');
          }
    };

    return (
        <>
            <Navbar />
            <div className={styles["signup-container"]}>
                <div className={styles["signup-content"]}>
                    <h1>Login</h1>
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
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="password1"
                            placeholder="Password"
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
                        {passwordStrength && <p className={styles[`password-strength ${passwordStrength.toLowerCase()}`]}>{`Password Strength: ${passwordStrength}`}</p>}
                        <button className={styles['login--butt']} type="submit">Login</button>
                        {error && <p className={["error"]}>{error}</p>}
                    </form>
                    <div className={styles["social-signup"]}>
                        <p>Login with:</p>
                        <div className={styles["social-icons"]}>
                            <a href="#facebook">
                                <FiFacebook />
                            </a>
                            <a href="#Google">
                                <FiGift />
                            </a>
                            <a href="#Github">
                                <FiGithub />
                            </a>
                        </div>
                    </div>
                    <button className={styles['login--btn']}>
                        <a href="/signup">New User?</a>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;