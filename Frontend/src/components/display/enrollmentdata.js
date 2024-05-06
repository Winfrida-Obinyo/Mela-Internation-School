import React, { useState, useEffect } from 'react';
import './style.css'; 
import axios from 'axios';
import { CSVLink } from 'react-csv';

const DisplayEnrollmentData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from backend API when component mounts
    // eslint-disable-next-line
    fetchData();// eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/enrollment');
      // Format the dates before setting the data in state
      const formattedData = response.data.map(item => ({
        ...item,
        enrollment_date: formatDate(item.enrollment_date)
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
      <h2>Applicants for Enrollment</h2>             
          <legend>List of Applicants</legend>
            <div className='csv-btn'>
              <CSVLink data={data}>Export to CSV</CSVLink>
            </div>
          <table>
            <thead>
              <tr>
                <th>Full Name</th>                
                <th>Email</th>
                <th>Phone</th>
                <th>Program</th>
                <th>Enrollment Date</th>
                <th>Message</th>                
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.full_name}</td>                  
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.program}</td>
                  <td>{item.enrollment_date}</td>
                  <td>{item.message}</td>                  
                </tr>
              ))}
            </tbody>
          </table>

    </div>
  );
};

export default DisplayEnrollmentData;