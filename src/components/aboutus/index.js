import React, { useState } from 'react';

const AboutUs = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/images/about2.jpg',
    '/images/about1.jpg', // Add more images as needed
  ];

  // Function to handle changing the image index
  const handleChangeImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  // Background image URL based on current image index
  const backgroundImage = images[currentImageIndex];

  return (
    <div className="home-banner">
      {/* Background image container */}
      <div
        className="about-us-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '400px', // Set minimum height to ensure content visibility
          position: 'relative', // Required for absolute positioning of inner content
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* About Us content positioned on top of the image */}
        <div className="about-banner" style={aboutBannerStyle}>
          {/* Content */}
          <h1>Welcome to The Mela International School</h1>
          <p>
            At The Mela International School, we are dedicated to empowering students to thrive
            in a dynamic world. Our mission is to provide an engaging and transformative education
            experience that nurtures young minds and inspires a passion for learning.
          </p>
          <p>
            Explore our world of learning, where curiosity meets knowledge, and discover the
            exceptional opportunities that await your child.
          </p>
        </div>
      </div>
    </div>
  );
};

// CSS-in-JS styles for the about-banner
const aboutBannerStyle = {
  padding: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  maxWidth: '1000px',
  textAlign: 'center',
};

export default AboutUs;




