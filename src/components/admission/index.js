import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './style.css'; 

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    gradeLevel: '',
    formerSchool: '',
    startMonth: '',
    location: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      dateOfBirth: '',
      gradeLevel: '',
      formerSchool: '',
      startMonth: '',
      location: '',
      comment: ''
    });
  };

  return (
    <Container className="admission-form-container">
      <h2 className="form-title">ADMISSION FORM</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="firstName" className="form-group">
          <Form.Label className="form-label">First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
        </Form.Group>

        <Form.Group controlId="lastName" className="form-group">
          <Form.Label className="form-label">Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
        </Form.Group>

        <Form.Group controlId="email" className="form-group">
          <Form.Label className="form-label">Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group controlId="phoneNumber" className="form-group">
          <Form.Label className="form-label">Phone Number</Form.Label>
          <Form.Control
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </Form.Group>

        <Form.Group controlId="dateOfBirth" className="form-group">
          <Form.Label className="form-label">Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="gradeLevel" className="form-group">
          <Form.Label className="form-label">Grade Level/Class</Form.Label>
          <Form.Control
            type="text"
            name="gradeLevel"
            value={formData.gradeLevel}
            onChange={handleChange}
            placeholder="Enter grade level/class"
            required
          />
        </Form.Group>

        <Form.Group controlId="formerSchool" className="form-group">
          <Form.Label className="form-label">Former School</Form.Label>
          <Form.Control
            type="text"
            name="formerSchool"
            value={formData.formerSchool}
            onChange={handleChange}
            placeholder="Enter former school name"
            required
          />
        </Form.Group>

        <Form.Group controlId="startMonth" className="form-group">
          <Form.Label className="form-label">Start Month</Form.Label>
          <Form.Control
            as="select"
            name="startMonth"
            value={formData.startMonth}
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

        <Form.Group controlId="comment" className="form-group">
          <Form.Label className="form-label">Additional Comments</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="comment"
            value={formData.comment}
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





