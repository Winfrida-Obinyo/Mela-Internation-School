import React, { useState } from 'react';
import './style.css'; 

const DisplayApplicants = () => {
  const [applicants, setApplicants] = useState([
    { id: 1, name: 'Sam Smith' },
    { id: 2, name: 'Jane Benard' },
    { id: 3, name: 'Mike Johnson' },
    { id: 4, name: 'Emily Brown' },
    { id: 5, name: 'Alex Wilson' }
  ]);

  return (
    <div className="display-applicants">
      <h2>Applicants for Admission</h2>
      <form className="applicants-form">
        <fieldset>
          <legend>List of Applicants</legend>
          <ul className="applicants-list">
            {applicants.map(applicant => (
              <li key={applicant.id}>
                <label>
                  <input type="checkbox" />
                  {applicant.name}
                </label>
              </li>
            ))}
          </ul>
          <button type="submit">Process Selected Applicants</button>
        </fieldset>
      </form>
    </div>
  );
};

export default DisplayApplicants;


