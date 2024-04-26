import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './style.css'; // Import your CSS file for styling

const SigninPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData); // Replace with your form submission logic
    // Add form submission logic here (e.g., sending data to backend)
    // Reset form fields if needed
    setFormData({ email: '', password: '' });
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
      </form>
    </div>
  );
};

export default SigninPage;

