import React, { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const images = [
    '/images/play.jpg',
    '/images/cbc2.jpg',
    '/images/cbc1.jpg',
    '/images/students.jpg'
  ];

  const captions = [
    {
      title: 'Welcome to New Premier Talent SCHOOL',
      description: 'Empowering students to thrive in a dynamic world.'
    },
    {
      title: 'Explore a World of Learning',
      description: 'Where curiosity meets knowledge.'
    },
    {
      title: 'Engaging Education Experience',
      description: 'Transforming young minds into future leaders.'
    },
    {
      title: 'Unleashing Creativity and Innovation',
      description: 'Inspiring a passion for learning.'
    }
  ];

  const handleImageChange = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setFade(false);
    }, 500); // Match the CSS transition duration (adjust if needed)
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleImageChange((currentImageIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]); // Include currentImageIndex as a dependency

  const handleApplyForAdmission = () => {
    console.log('Apply for Admission button clicked');
    // Redirect to admission page or perform other actions
  };

  return (
    <div className="home-page">
      <div className="banner">
        <div className="image-slider">
          <img
            src={images[currentImageIndex]}
            alt="Slideshow"
            className={fade ? 'fade-out' : ''}
          />
          <div className="overlay"></div>
          <div className="banner-content">
            <h1>{captions[currentImageIndex].title}</h1>
            <p>{captions[currentImageIndex].description}</p>
            <Link to="/apply">
              <button className="apply-button" onClick={handleApplyForAdmission}>
                Apply for Admission
              </button>
            </Link>
            {/* Place the AdminSignIn button below the Apply for Admission button */}
            {/* <div className="admin-signin-button">
              <a href="/signin" className="admin-button">AdminSignIn</a>
            </div> */}
          </div>
        </div>
        <div className="navigation-dots">
          {images.map((image, index) => (
            <button
              key={index}
              className={`dot ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => handleImageChange(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
