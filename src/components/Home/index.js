import React, { useEffect, useState } from 'react';
import './style.css'; 

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/images/play.jpg',
    '/images/cbc2.jpg',
    '/images/cbc1.jpg',
    '/images/studying.jpg'
  ];

  const captions = [
    {
      title: 'Welcome to THE MELA INTERNATIONAL SCHOOL',
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
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const handleApplyForAdmission = () => {
    console.log('Apply for Admission button clicked');
    // Redirect to admission page or perform other actions
  };

  return (
    <div className="home-page">
      <div className="banner">
        <div
          className="image-slider"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`
          }}
        >
          <div className="overlay"></div>
          <div className="banner-content">
            <h1>{captions[currentImageIndex].title}</h1>
            <p>{captions[currentImageIndex].description}</p>
            <button className="apply-button" onClick={handleApplyForAdmission}>
              Apply for Admission
            </button>
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
