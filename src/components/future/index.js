import React from 'react';
import './style.css'; // Assuming you have a CSS file named Future.css for styling

const Future = () => {
  return (
    <div className="future-container">
      <div className="future-background">
        {/* Background image */}
        <img src="/images/preparatory.jpg" alt="Studying" className="background-image" />
      </div>
      <div className="future-content">
        <h2 className="future-header">YOUR FUTURE STARTS HERE</h2>
        <p className="future-paragraph">
          At THE MELA INTERNATIONAL SCHOOL, we are committed to shaping the future of our students
          by providing quality education and nurturing their talents and abilities.
          Join us on this journey towards success!
        </p>
        <div className="future-buttons">
          <button className="future-button">FEE STRUCTURE</button>
          <button className="future-button">ENROLL NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Future;

