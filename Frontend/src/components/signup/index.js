import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import axios from 'axios';

const SignUpAdmin = () => {
  const [formData, setFormData] = useState({
    first_name: '', 
    last_name: '',
    phone_number: '', 
    email: '',
    password:'',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission 
    try {
      const response =await axios.post('http://localhost:5000/api/signup', formData);
      console.log(response.data);
      // clear fields after submission
    setFormData({
      first_name: '', 
      last_name: '',
      phone_number: '', 
      email: '',
      password:'',
      confirmPassword: '' 
    });

    }
    catch(error)
    {
      console.error(error);
    }
     
  };

  return (
    <div className="signup-container">
      <h2>Admin Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first_name">First Name:</label>
          <div className="input-container">
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              required
            />
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="last_name">Last Name:</label>
          <div className="input-container">
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              required
            />
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="phone_number">Phone Number:</label>
          <div className="input-container">
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleInputChange}
              required
            />
            <FontAwesomeIcon icon={faPhone} className="icon" />
          </div>
        </div>

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
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="icon password-toggle-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <div className="input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="icon password-toggle-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpAdmin;






