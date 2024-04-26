import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import './style.css'; 

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    program: '',
    message: '',
    enrollmentDate: null 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, enrollmentDate: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      fullname: '',
      email: '',
      phone: '',
      program: '',
      message: '',
      enrollmentDate: null
    });
  };

  return (
    <div>
      <h2>Enroll Now</h2>
      <p>Fill out the form below to begin your enrollment process:</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name:</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={formData.fullname}
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

        <label htmlFor="enrollmentDate">Preferred Enrollment Date:</label>
        <DatePicker
          id="enrollmentDate"
          selected={formData.enrollmentDate}
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
    </div>
  );
};

export default EnrollmentForm;

