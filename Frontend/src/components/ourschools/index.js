import React from 'react';
import './style.css';

const OurSchools = () => {
  return (
    <div className="extracurricular-container" >
      <h2>Our Schools</h2>
      <div className="extracurricular">
        <div className="extracurricular-item" id="cbc-keumbu">
          <img src="/images/children_playing3.jpeg" alt="Academic Trips" />
          <p>Kenyan CBC Curriculum Keumbu</p>
        </div>
        <div className="extracurricular-item" id="cbc-narok">
          <img src="/images/gerarnarok1.jpeg" alt="Clubs and Membership" />
          <p>Kenyan CBC Curriculum Narok</p>
        </div>
        {/* <div className="extracurricular-item" id="east-african">
          <img src="/images/cbc1.jpg" alt="Competence Based Curriculum" />
          <p>East African Curriculum</p>
        </div> */}
      </div>
    </div>
  );
};

export default OurSchools;
