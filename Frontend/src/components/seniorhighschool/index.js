import React, { useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const SeniorHighSchool = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (dropdownId) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <div className="senior-high-school-container">
      <section className="left-section">
        <h2 className="section-title">Senior High School</h2>

        <div className="image-container">
          <div className="image-item">
            <img src="/images/sen8.jpg" alt="Senior High School Image" />
          </div>
          <div className="image-item">
            <img src="/images/sen7.jpg" alt="Senior High School Image" />
          </div>
          <div className="image-item">
            <img src="/images/sen6.jpg" alt="Senior High School Image" />
          </div>
          <div className="image-item">
            <img src="/images/sen10.jpg" alt="Senior High School Image" />
          </div>
          <div className="image-item">
            <img src="/images/sen9.jpg" alt="Senior High School Image" />
          </div>
          <div className="image-item">
            <img src="/images/sen3.jpg" alt="Senior High School Image" />
          </div>
          <div className="image-item">
            <img src="/images/sen4.jpg" alt="Senior High School Image" />
          </div>
          <div className="image-item">
            <img src="/images/sen5.jpg" alt="Senior High School Image" />
          </div>
        </div>

        <div className="info-container">
          <div className="info-left">
            <h3>Curriculum Overview</h3>
            <p>
              Our senior high school curriculum builds on foundational knowledge
              and prepares students for higher education and career pathways.
              Students engage in a diverse range of subjects including advanced
              mathematics, sciences, humanities, and vocational studies.
            </p>
            <p>
              The curriculum emphasizes critical thinking, problem-solving, and
              practical skills necessary for success in college and beyond.
              We offer specialized tracks tailored to students' interests and
              career aspirations, providing a comprehensive educational experience.
            </p>
            <p>
              In addition to academic excellence, our senior high school fosters
              personal development through leadership opportunities, extracurricular
              activities, and community service initiatives. We prioritize holistic
              growth and lifelong learning.
            </p>
          </div>
          <div className="info-right">
  <div className="dropdown">
    <button
      className="dropdown-btn"
      onClick={() => handleDropdownClick('advanced-mathematics')}
    >
      Advanced Mathematics
    </button>
    {activeDropdown === 'advanced-mathematics' && (
      <div className="dropdown-content">
        <p>
          Explore complex mathematical concepts and applications
          to prepare for higher-level studies in STEM fields.
        </p>
      </div>
    )}
  </div>

  <div className="dropdown">
    <button
      className="dropdown-btn"
      onClick={() => handleDropdownClick('sciences')}
    >
      Sciences Program
    </button>
    {activeDropdown === 'sciences' && (
      <div className="dropdown-content">
        <p>
          Dive deep into biology, chemistry, physics, and applied sciences
          through hands-on experiments and research projects.
        </p>
      </div>
    )}
  </div>

  <div className="dropdown">
    <button
      className="dropdown-btn"
      onClick={() => handleDropdownClick('computer-science')}
    >
      Computer Science Program
    </button>
    {activeDropdown === 'computer-science' && (
      <div className="dropdown-content">
        <p>
          Immerse yourself in programming, algorithms, and software development.
          Our computer science program emphasizes coding skills and computational thinking,
          preparing students for careers in technology and innovation.
        </p>
      </div>
    )}
  </div>

  <div className="dropdown">
    <button
      className="dropdown-btn"
      onClick={() => handleDropdownClick('engineering')}
    >
      Engineering Studies
    </button>
    {activeDropdown === 'engineering' && (
      <div className="dropdown-content">
        <p>
          Engage in hands-on engineering projects and design challenges.
          Our engineering program focuses on problem-solving and innovation,
          equipping students with skills for designing and building solutions
          to real-world problems.
        </p>
      </div>
    )}
  </div>



          </div>
        </div>

        <div className="additional-section">
          <div className="additional-left">
            <h3>Specialized Tracks</h3>
            <p>
    Our senior high school offers diverse specialized tracks tailored to students' interests and career aspirations. In the <strong>Arts and Humanities</strong> track, students delve into creative expression, literature, history, and cultural studies. Through hands-on projects and performances, they develop critical thinking, communication, and artistic skills. Opportunities to showcase talents in art exhibitions, theatrical productions, and literary events enrich their experience in this track.
  </p>
  <p>
    The <strong>Business and Entrepreneurship</strong> track explores business principles, economics, marketing, and entrepreneurship. Students learn to develop business plans, analyze market trends, and participate in startup initiatives. Networking events and business competitions provide practical insights into the world of commerce and innovation, preparing students for future leadership roles.
  </p>
  <p>
    In the <strong>STEM (Science, Technology, Engineering, and Mathematics)</strong> Fields track, students engage in advanced science, mathematics, computer science, and engineering coursework. They apply theoretical knowledge to real-world challenges, collaborate on research projects, and build robots. Participation in STEM competitions fosters creativity and problem-solving skills, preparing students for diverse careers in science and technology.
  </p>
  <p>
    The <strong>Vocational Studies</strong> track focuses on practical skills in trades such as automotive technology, culinary arts, healthcare, or construction. Through internships and certifications aligned with industry standards, students gain hands-on experience and industry-specific knowledge. Working alongside professionals in their chosen fields prepares them for successful transitions to the workforce.
  </p>

  <p>
    Our goal is to empower students with the expertise and confidence to succeed in higher education or enter the workforce with specialized skills and practical experience.
  </p>
          </div>

          <div className="additional-right">
            <img src="/images/high.jpg" alt="Additional Image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeniorHighSchool;
