import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const SignUpAdmin = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <div className="signup-container">
      <h2>Admin Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <div className="input-container">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <div className="input-container">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <div className="input-container">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
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






