import React from 'react';
import './style.css'; 
import { Link } from 'react-router-dom';

const Future = () => {
  return (
    <div className="future-container">
      <div className="future-background">
        <img src="/images/preparatory.jpg" alt="Studying" className="background-image" />
      </div>
      <div className="future-content">
        <h2 className="future-header">YOUR FUTURE STARTS HERE</h2>
        <p className="future-paragraph">
          At NEW PREMIER TALENT SCHOOL, we are committed to shaping the future of our students
          by providing quality education and nurturing their talents and abilities.
          Join us on this journey towards success!
        </p>
        <div className="future-buttons">
          <Link to="/feestructure"><button className="future-button">FEE STRUCTURE</button></Link>
          <Link to="https://share-eu1.hsforms.com/1xNxowBcySfG0y7CTKSu_bw2e4e7p"><button className="future-button">ENROLL NOW</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Future;

