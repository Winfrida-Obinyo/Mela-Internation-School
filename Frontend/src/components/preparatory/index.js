import React, { useState } from 'react';
import './style.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const PreparatorySchool = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (dropdownId) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <div className="preparatory-school-container">
      <section className="left-section">
        <h2 className="section-title">Preparatory School</h2>

        <div className="image-container">
          <div className="image-item">
            <img src="/images/prep1.jpg" alt="Preparatory School" />
          </div>
          <div className="image-item">
            <img src="/images/prep2.jpg" alt="Preparatory School" />
          </div>
          <div className="image-item">
            <img src="/images/prep3.jpg" alt="Preparatory School" />
          </div>
          <div className="image-item">
            <img src="/images/prep4.jpg" alt="Preparatory School" />
          </div>
          <div className="image-item">
            <img src="/images/prep5.jpg" alt="Preparatory School" />
          </div>
          <div className="image-item">
            <img src="/images/prep6.jpg" alt="Preparatory School" />
          </div>
          <div className="image-item">
            <img src="/images/prep7.jpg" alt="Preparatory School" />
          </div>
          <div className="image-item">
            <img src="/images/prep8.jpg" alt="Preparatory School" />
          </div>
        </div>

        <div className="info-container">
          <div className="info-left">
            <h3>School Curriculum Highlights</h3>
            <p>
              Our preparatory school curriculum emphasizes academic rigor, critical thinking,
              and character development to prepare students for advanced education and lifelong success.
            </p>
            <p>
              Students engage in comprehensive studies across various subjects,
              including mathematics, science, humanities, and arts, fostering a well-rounded education.
            </p>

          </div>

          <div className="info-right">
            <div className="dropdown">
              <button
                className="dropdown-btn"
                onClick={() => handleDropdownClick('academics')}
              >
                Academic Programs
              </button>
              {activeDropdown === 'academics' && (
                <div className="dropdown-content">
                  <p>
                    Explore our diverse academic programs designed to challenge and inspire students,
                    covering advanced coursework, honors tracks, and enrichment opportunities.
                  </p>
                </div>
              )}
            </div>

            <div className="dropdown">
              <button
                className="dropdown-btn"
                onClick={() => handleDropdownClick('extracurricular')}
              >
                Extracurricular Activities
              </button>
              {activeDropdown === 'extracurricular' && (
                <div className="dropdown-content">
                  <p>
                    Discover our range of extracurricular activities, including sports, clubs,
                    community service initiatives, and leadership programs to complement academic studies.
                  </p>
                </div>
              )}
            </div>

            <div className="dropdown">
              <button
                className="dropdown-btn"
                onClick={() => handleDropdownClick('college-prep')}
              >
                College Preparation
              </button>
              {activeDropdown === 'college-prep' && (
                <div className="dropdown-content">
                  <p>
                    Prepare for higher education with dedicated college counseling,
                    SAT/ACT preparation, and college application guidance to support students
                    in achieving their academic and career aspirations.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="additional-section">
          <div className="additional-left">
  <h3>Early Years Curriculum</h3>
  <br></br>
  <h4>Prime Areas of Learning:</h4>
  <p>
    Personal, Social and Emotional Development: Building positive relationships,
    self-awareness, and emotional regulation.
  </p>
  <p>
    Communication and Language: Developing listening, speaking, and early
    literacy skills through interactions and language activities.
  </p>
  <p>
    Physical Development: Promoting physical health, coordination, and motor skills
    through play and movement.
  </p>
  <h4>Specific Areas of Learning:</h4>
  <p>
    Literacy: Cultivating reading and writing readiness, fostering a joy for books,
    and early language exploration.
  </p>
  <p>
    Mathematics: Building numeracy skills, understanding numbers, shapes, and basic
    mathematical concepts through hands-on activities.
  </p>
  <p>
    Expressive Arts and Design: Encouraging creativity through art, music, movement,
    and imaginative play, fostering self-expression and exploration.
  </p>

  <h3>Curriculum Focus</h3>
  <p>
    Our preparatory school curriculum is designed to cultivate critical thinking skills,
    foster intellectual curiosity, and nurture a passion for lifelong learning.
  </p>
  <p>
    Students are encouraged to explore interdisciplinary connections,
    engage in research projects, and develop leadership qualities
    through academic challenges and collaborative endeavors.
  </p>
</div>

          <div className="additional-right">
            <img src="/images/pre.jpg" alt="Curriculum Focus" />
          </div>
        </div>

      </section>
    </div>
  );
};

export default PreparatorySchool;
