import React, { useState } from 'react';
import './style.css'; // Import your CSS file for styling

const EnrollForm = () => {
  // State to manage enrolled people
  const [enrolledPeople, setEnrolledPeople] = useState([]);

  return (
    <div className="enroll-form-container">
      {/* Display list of enrolled people */}
      {enrolledPeople.length > 0 && (
        <div className="enrolled-people-section">
          <h2>Enrolled People</h2>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {enrolledPeople.map((person, index) => (
                <tr key={index}>
                  <td>{person.firstName}</td>
                  <td>{person.lastName}</td>
                  <td>{person.email}</td>
                  <td>{person.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EnrollForm;



