import React from 'react';
import './style.css';

const OurSchools = () => {
  return (
    <div className="extracurricular-container">
      <h2>Our Schools</h2>
      <div className="extracurricular">
      <div className="extracurricular-item">
          <img src="/images/studying.jpg" alt="Academic Trips" />
          <p>British Curriculum</p>
        </div>
        <div className="extracurricular-item">
          <img src="/images/cbc2.jpg" alt="Clubs and Membership" />
          <p>Kenyan CBC Curriculum</p>
        </div>
        <div className="extracurricular-item">
          <img src="/images/cbc1.jpg" alt="Competence Based Curriculum" />
          <p>East African Curriculum</p>
        </div>





      </div>
    </div>
  );
};

export default OurSchools;