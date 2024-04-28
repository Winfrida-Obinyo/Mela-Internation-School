import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './style.css'; 
import axios from 'axios';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email_address: '',
    phone_number: '',
    date_of_birth: '',
    class_level: '',
    former_school: '',
    start_month: '',
    location: '',
    additional_comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend, show success message)
    try {
      const response = await axios.post('http://localhost:5000/api/user', formData);
      console.log(response.data);
       // Clear form fields after submission (optional)
    setFormData({
      first_name: '',
      last_name: '',
      email_address: '',
      phone_number: '',
      date_of_birth: '',
      class_level: '',
      former_school: '',
      start_month: '',
      location: '',
      additional_comments: ''
    });

    } 
    
    catch (error) 
    {
      console.error(error);
    }
  };
    // console.log(UserData); // For demonstration, log form data to console
  return (
    <Container className="admission-form-container">
      <h2 className="form-title">ADMISSION FORM</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="first_name" className="form-group">
          <Form.Label className="form-label">First Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
        </Form.Group>

        <Form.Group controlId="last_name" className="form-group">
          <Form.Label className="form-label">Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
        </Form.Group>

        <Form.Group controlId="email_address" className="form-group">
          <Form.Label className="form-label">Email Address</Form.Label>
          <Form.Control
            type="email_address"
            name="email_address"
            value={formData.email_address}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group controlId="phone_number" className="form-group">
          <Form.Label className="form-label">Phone Number</Form.Label>
          <Form.Control
            type="tel"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </Form.Group>

        <Form.Group controlId="date_of_birth" className="form-group">
          <Form.Label className="form-label">Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="class_level" className="form-group">
          <Form.Label className="form-label">Grade Level/Class</Form.Label>
          <Form.Control
            type="text"
            name="class_level"
            value={formData.class_level}
            onChange={handleChange}
            placeholder="Enter grade level/class"
            required
          />
        </Form.Group>

        <Form.Group controlId="former_school" className="form-group">
          <Form.Label className="form-label">Former School</Form.Label>
          <Form.Control
            type="text"
            name="former_school"
            value={formData.former_school}
            onChange={handleChange}
            placeholder="Enter former school name"
            required
          />
        </Form.Group>

        <Form.Group controlId="start_month" className="form-group">
          <Form.Label className="form-label">Start Month</Form.Label>
          <Form.Control
            as="select"
            name="start_month"
            value={formData.start_month}
            onChange={handleChange}
            required
          >
            <option value="">Select start month</option>
            <option value="January">January</option>
            <option value="May">May</option>
            <option value="September">September</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="location" className="form-group">
          <Form.Label className="form-label">Location (City, Country)</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter your location"
            required
          />
        </Form.Group>

        <Form.Group controlId="additional_comments" className="form-group">
          <Form.Label className="form-label">Additional Comments</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="additional_comments"
            value={formData.additional_comments}
            onChange={handleChange}
            placeholder="Enter any additional comments"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-button">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AdmissionForm;





