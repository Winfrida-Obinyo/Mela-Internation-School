import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import './style.css'; 
import axios from 'axios';
import { Container } from 'react-bootstrap';

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
    enrollment_date: null // New state for the enrollment date
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, enrollment_date: date.toISOString().split('T')[0], }); // Format the date
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    try {
      const response = await axios.post('http://localhost:5000/api/enrollment', formData);
      console.log(response.data);
    // Reset form after submission
    setFormData({
      full_name: '',
      email: '',
      phone: '',
      program: '',
      message: '',
      enrollment_date: ''
    });
  } 
  
  catch (error) 
  {
    console.error(error);
  }
  };


  return (
    <Container>
      <h2>Enroll Now</h2>
      <p>Fill out the form below to begin your enrollment process:</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="full_name">Full Name:</label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          value={formData.full_name}
          onChange={handleInputChange}
          required
        /><br /><br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        /><br /><br />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        /><br /><br />

        <label htmlFor="program">Program of Interest:</label>
        <select
          id="program"
          name="program"
          value={formData.program}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a program</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Business Administration">Business Administration</option>
          <option value="Engineering">Engineering</option>
          <option value="Other">Other</option>
        </select><br /><br />

        <label htmlFor="enrollment_date">Preferred Enrollment Date:</label>
        <DatePicker
          id="enrollment_date"
          selected={formData.enrollment_date ? new Date(formData.enrollment_date) : null}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          isClearable
          placeholderText="Select Date"
          required
        /><br /><br />

        <label htmlFor="message">Message (optional):</label><br />
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows="4"
          cols="50"
        ></textarea><br /><br />

        <div className="button-container">
          <button type="submit">Enroll</button>
          <button type="button" onClick={handleSubmit}>Reset</button>
        </div>
      </form>
    </Container>
  );
};

export default EnrollmentForm;

