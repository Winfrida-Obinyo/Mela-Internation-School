import React, { useState, useEffect } from 'react';
import './style.css'; 
import { Link } from 'react-router-dom';
import axios from 'axios';

const DisplayApplicants = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from backend API when component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/data');
      setData(response.data); // Set the fetched data in state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // Function to handle logout
  const handleLogout = () => {
    // Clear authentication tokens (e.g., JWT token)
    localStorage.removeItem('token');
  }

  return (
    <div className="display-applicants">
      <h2>Applicants for Admission</h2>             
          <legend>List of Applicants</legend>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Date of Birth</th>
                <th>Class Level</th>
                <th>Former School</th>
                <th>Start Month</th>
                <th>Location</th>
                <th>Additional Comments</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email_address}</td>
                  <td>{item.phone_number}</td>
                  <td>{item.date_of_birth}</td>
                  <td>{item.class_level}</td>
                  <td>{item.former_school}</td>
                  <td>{item.start_month}</td>
                  <td>{item.location}</td>
                  <td>{item.additional_comments}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* <button type="submit">Process Selected Applicants</button> */}        
        <Link to="/signin" onClick={handleLogout}>Logout</Link>      
    </div>
  );
};

export default DisplayApplicants;


