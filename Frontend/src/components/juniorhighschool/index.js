import React, { useState } from 'react';
import './style.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const JuniorHighSchool = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (dropdownId) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <div className="junior-high-school-container">
      <section className="left-section">
        <h2 className="section-title">Junior High School</h2>

        <div className="image-container">
          <div className="image-item">
            <img src="/images/jun8.jpg" alt="Junior High School Image" />
          </div>
          <div className="image-item">
            <img src="/images/jun7.jpg" alt="Junior High School Image" />
          </div>
          <div className="image-item">
            <img src="/images/jun6.jpg" alt="Junior High School Image" />
          </div>
          <div className="image-item">
            <img src="/images/jun0.jpg" alt="Junior High School Image" />
          </div>
          <div className="image-item">
            <img src="/images/jun2.jpg" alt="Junior High School Image" />
          </div>
          <div className="image-item">
            <img src="/images/jun3.jpg" alt="Junior High School Image" />
          </div>
          <div className="image-item">
            <img src="/images/jun4.jpg" alt="Junior High School Image" />
          </div>
          <div className="image-item">
            <img src="/images/jun5.jpg" alt="Junior High School Image" />
          </div>
          

        </div>

        <div className="info-container">
          <div className="info-left">
            <h3>Curriculum Overview</h3>
            <p>
              Our junior high school curriculum emphasizes academic rigor and holistic development.
              Students engage in advanced studies across various subjects including mathematics,
              science, language arts, social studies, and more.
            </p>
            <p>
              We aim to challenge students intellectually while also nurturing their creativity
              and critical thinking abilities. Our curriculum is designed to prepare students
              for the demands of high school education and beyond, fostering a lifelong love for
              learning and exploration.
            </p>
            <p>
              In addition to core academic subjects, our junior high school offers enrichment
              programs in arts, technology, and extracurricular activities such as sports,
              music, and community service. We believe in providing a well-rounded educational
              experience that promotes personal growth and character development.
            </p>
            <p>
              Our dedicated faculty and staff are committed to supporting each student's
              individual academic journey. We prioritize personalized learning and
              mentorship, ensuring that every student receives the guidance and resources
              they need to thrive academically and personally during these formative years.
            </p>
            <p>
              We focus on preparing students for high school by fostering critical thinking,
              problem-solving skills, and effective communication.
            </p>
          </div>

          <div className="info-right">
            <div className="dropdown">
              <button
                className="dropdown-btn"
                onClick={() => handleDropdownClick('mathematics')}
              >
                Mathematics Program
              </button>
              {activeDropdown === 'mathematics' && (
                <div className="dropdown-content">
                  <p>
                    Our mathematics program challenges students with advanced concepts,
                    problem-solving strategies, and real-world applications.
                  </p>
                </div>
              )}
            </div>

            <div className="dropdown">
              <button
                className="dropdown-btn"
                onClick={() => handleDropdownClick('science')}
              >
                Science Curriculum
              </button>
              {activeDropdown === 'science' && (
                <div className="dropdown-content">
                  <p>
                    Explore the wonders of science through hands-on experiments,
                    lab activities, and scientific inquiry. Our science curriculum
                    encourages curiosity and critical thinking.
                  </p>
                </div>
              )}
            </div>

            <div className="dropdown">
              <button
                className="dropdown-btn"
                onClick={() => handleDropdownClick('language-arts')}
              >
                Language Arts Program
              </button>
              {activeDropdown === 'language-arts' && (
                <div className="dropdown-content">
                  <p>
                    Develop strong communication skills through literature analysis,
                    writing workshops, and oral presentations. Our language arts
                    program fosters creativity and effective expression.
                  </p>
                </div>
              )}
            </div>

            <div className="dropdown">
              <button
                className="dropdown-btn"
                onClick={() => handleDropdownClick('social-studies')}
              >
                Social Studies Curriculum
              </button>
              {activeDropdown === 'social-studies' && (
                <div className="dropdown-content">
                  <p>
                    Dive into history, geography, and civics. Our social studies
                    curriculum promotes cultural understanding and global awareness
                    through interactive learning experiences.
                  </p>
                </div>
              )}
            </div>
            
          </div>
        </div>

        <div className="additional-section">
          <div className="additional-left">
            <h3>Advanced Studies</h3>
            <p>
              Students at our junior high school delve into specialized subjects,
              preparing them for high school and future academic pursuits.
            </p>
            <p>
              Our advanced studies program offers elective courses in areas such as
              computer science, robotics, fine arts, and foreign languages. Students
              have the opportunity to explore their interests and develop specialized
              skills under the guidance of experienced instructors.
            </p>
            <p>
              In addition to academic subjects, our junior high school provides
              career exploration programs and guest speaker sessions to expose
              students to various professions and industries, helping them make
              informed decisions about their future educational and career paths.
            </p>
            <p>
              Students at our junior high school delve into specialized subjects,
              preparing them for high school and future academic pursuits.
            </p>
          </div>

          <div className="additional-right">
            <img src="/images/jun1.jpg" alt="Additional Image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default JuniorHighSchool;

