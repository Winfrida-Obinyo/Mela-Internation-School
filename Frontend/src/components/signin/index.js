import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './style.css'; // Import your CSS file for styling
import axios from 'axios';



const SigninPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      console.log(response.data.token); //log the token

      // Write success message to console
    console.log('Sign-in successful');

      // Store token in local storage or session storage
    localStorage.setItem('token', response.data.token);

      // Check if authentication is successful (you should customize this based on your server response)
      // if (response.data.success) {
      //   window.location.href = '/adminpage';
      // } else{
      //   console.log('Invalid Credentials');
      // }
      // const token = response.data.token;
      // localStorage.setItem('token', token);
      // Redirect to the ShowData page
      // history.push('/adminpage');
      window.location.href = '/adminpage';
    }
    catch (error) {
      // Handle login error
      console.error('Login failed', error);
    }
    // Add form submission logic here (e.g., sending data to backend)
    // Reset form fields if needed
     setFormData({ 
      email: '', 
      password: '' 
    });

    
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form className="signin-form" onSubmit={handleSubmit}>
          <div className="form-group">
          <label htmlFor="email">Email:</label>
          <div className="input-container">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="input-container">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <FontAwesomeIcon icon={faLock} className="icon" />
          </div>
        </div>

        <button type="submit">Sign In</button>

        {/* "Having trouble logging in?" note */}
        <div className="trouble-logging-in">
          <p><a href="/signup">Having trouble logging in?</a></p>
          {/* <p>Reset your password <a href="/password-reset">Having trouble logging in?</a>.</p> */}
        </div>
      </form>
    </div>
  );
};

export default SigninPage;


