import React from 'react';
import './style.css';

const HeadteacherWelcome = () => {
  return (
    <div className="headteacher-welcome-container">
      <div className="image-and-text">
        <img src="/images/gerar1.jpg" alt="Headteacher" className="welcome" />
        <div className="text-content">
          <p className="paragraph">
            On behalf of the entire school community, I extend a warm and heartfelt welcome to all our learners, parents, and guardians.
            We are thrilled to have you join our vibrant and dynamic learning environment. At New Premier School, we are committed to providing
            an exceptional education that nurtures the holistic development of every child. Our learner-centered approach ensures that each
            student’s unique potential is recognized and fostered. We believe that every child deserves opportunities to excel academically,
            socially, and emotionally.
          </p>
        </div>
      </div>
      <div className="bottom-paragraphs">
        <p>
          Our school is proud to be a leader in quality education within the region. Guided by our core values of integrity, respect,
          collaboration, and excellence, we strive to create a nurturing and stimulating learning environment where students can thrive.
          Our mission is to empower learners to excel holistically and prepare them to thrive in a dynamic world. We envision a future where
          our students become innovative, global citizens who are equipped to shape the world positively.
        </p>
        <p>
          We invite you to be an integral part of our school community. Together, we can create a remarkable learning journey for your child.
          I encourage you to explore our website, attend our school events, and engage with our dedicated staff. Your partnership is essential
          in helping us achieve our shared goal of providing an outstanding education for all. Welcome once again, and let’s embark on this
          exciting educational adventure together!
        </p>
      </div>
    </div>
  );
};

export default HeadteacherWelcome;
