import React, { useState, useEffect } from 'react';
import './admission.css'; 
// import { Link } from 'react-router-dom';
import axios from 'axios';
import {CSVLink} from 'react-csv';

const DisplayAdmissionData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from backend API when component mounts    
    fetchData();// eslint-disable-next-line    
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/data');
      // Format the dates before setting the data in state
      const formattedData = response.data.map(item => ({
        ...item,
        date_of_birth: formatDate(item.date_of_birth)
      }));
      setData(formattedData); // Set the fetched data in state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to format date in the desired format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    // Use Date methods to get year, month, and day
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(date.getDate()).padStart(2, '0');
    // Concatenate the year, month, and day with hyphens
    return `${year}-${month}-${day}`;
  };
  
 

  return (    
    <div className="display-applicants">
      <h2>Applicants for Admission</h2>             
          <legend>List of Applicants</legend>
            <div className='csv-btn'>
              <CSVLink data={data}>Export to CSV</CSVLink>
            </div>
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
          {/* <Link to="/signin" onClick={handleLogout}>Logout</Link>  */}
        
    </div>   
  );
};

export default DisplayAdmissionData;