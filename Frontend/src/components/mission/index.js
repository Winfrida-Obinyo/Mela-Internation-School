import React from 'react';
import './style.css'; 

const Mission = () => {
  return (
    <div className="mission-container">
      <div className="mission-vision-container">
        <div className="mission" id="mission">MISSION</div>
        <div className="core-values" id ="core-values">CORE VALUES</div>

        <div className="vision" id="vision">VISION</div>
      </div>
      <div className="mission-item">
        <h2>Mission</h2>
        <p>
          Our mission is to empower learners to excel holistically and preparing them to thrive in a dynamic world.
        </p>
      </div>
      <div className="mission-item">
        <h2>Vision</h2>
        <p>
          To be a leading institution that fosters creativity, innovation, and global citizenship among learners, preparing them to become future leaders in a diverse and interconnected world.
        </p>
      </div>
      <div className="mission-item">
        <h2>Core Values</h2>
        <p>
          Integrity, respect, collaboration, and excellence in all endeavors.
        </p>
      </div>
    </div>
  );
};

export default Mission;



