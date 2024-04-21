import React from 'react';
import './style.css'; // Import the CSS file for styling

const Mission = () => {
  return (

    <div className="mission-container">
      <div className="mission-vision-container">
        <div className="mission">MISSION</div>
          <div className="vision">VISION</div>
          <div className="covalues">CORE VALUES</div>
        
      </div>
      <div className="mission-item">
        <h2>Mission</h2>
        <p>
          Our mission is to empower students to excel academically and personally, preparing them to thrive in a dynamic world.
        </p>
      </div>
      <div className="mission-item">
        <h2>Vision</h2>
        <p>
        To be a leading institution that fosters creativity, innovation, and global citizenship
          among students, preparing them to become future leaders in a diverse and interconnected world.        </p>
      </div>
      <div className="mission-item">
        <h2>Core Values</h2>
        <p>
          Our core values include integrity, respect, collaboration, and excellence in all endeavors.
        </p>
      </div>
    </div>
  );
};

export default Mission;
