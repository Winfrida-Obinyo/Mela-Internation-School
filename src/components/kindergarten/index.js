import React, { useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Kindergarten = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (dropdownId) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <div className="kindergarten-container">
      <section className="left-section">
        <h2 className="section-title">Kindergarten</h2>

        <div className="image-container">
          <div className="image-item">
            <img src="/images/kinder1.jpg" alt="Kindergarten Image" />
          </div>
          <div className="image-item">
            <img src="/images/kinder2.jpg" alt="Kindergarten Image" />
          </div>
          <div className="image-item">
            <img src="/images/kinder3.jpg" alt="Kindergarten Image" />
          </div>
          <div className="image-item">
            <img src="/images/kinder4.jpg" alt="Kindergarten Image" />
          </div>
          <div className="image-item">
            <img src="/images/kinder6.jpg" alt="Kindergarten Image" />
          </div>
          <div className="image-item">
            <img src="/images/kinder5.jpg" alt="Kindergarten Image" />
          </div>
          <div className="image-item">
            <img src="/images/kinder7.jpg" alt="Kindergarten Image" />
          </div>
          <div className="image-item">
            <img src="/images/kinder8.jpg" alt="Kindergarten Image" />
          </div>
        </div>

        <div className="info-container">
          <div className="info-left">
            <h3>Early Learning Targets</h3>
            <p>
              Our early learning targets focus on promoting social, emotional,
              and cognitive development. Children will learn through play,
              exploration, and hands-on activities.
            </p>
            <p>
              We aim to foster a sense of curiosity and discovery in children,
              encouraging them to ask questions and seek answers through
              exploration of their environment.
            </p>
            <p>
              Through our activities, children develop key skills such as
              problem-solving, collaboration, and creativity, preparing them
              for future academic success and lifelong learning.
            </p>
          </div>

          <div className="info-right">
            <div className="dropdown">
              <button
                className="dropdown-btn"
                onClick={() => handleDropdownClick('foundation')}
              >
                Early Years Foundation Curriculum
              </button>
              {activeDropdown === 'foundation' && (
                <div className="dropdown-content">
                  <p>
                    Our curriculum is based on the Early Years Foundation Stage
                    (EYFS) framework. It covers seven areas of learning,
                    including communication, physical development, literacy,
                    and more.
                  </p>
                </div>
              )}
            </div>

            <div className="dropdown">
              <button
                className="dropdown-btn"
                onClick={() => handleDropdownClick('online')}
              >
                Online Learning Adventures
              </button>
              {activeDropdown === 'online' && (
                <div className="dropdown-content">
                  <p>
                    Dive into exciting online learning adventures! Our digital
                    platform offers interactive games, educational videos, and
                    engaging activities to enhance learning beyond the classroom.
                  </p>
                </div>
              )}
            </div>

            <div className="dropdown">
              <button
                className="dropdown-btn"
                onClick={() => handleDropdownClick('forest')}
              >
                Forest Explore Program
              </button>
              {activeDropdown === 'forest' && (
                <div className="dropdown-content">
                  <p>
                    Experience nature firsthand with our Forest Explore Program.
                    Children engage in outdoor exploration, nature walks,
                    gardening, and ecological learning to foster a deeper
                    connection with the environment.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="additional-section">
          <div className="additional-left">
            <h3>Early Years Foundation Curriculum (Age 3-5)</h3>
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

          </div>

          <div className="additional-right">
            <img src="/images/kinder5.jpg" alt="Additional Image" />
          </div>
        </div>

      </section>
    </div>
  );
};

export default Kindergarten;





