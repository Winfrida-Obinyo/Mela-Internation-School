import React from 'react';
import './style.css';
import { FaBabyCarriage, FaGraduationCap, FaUserGraduate} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Offer = () => {
  return (
    <div className="offer-container">
      <h1>What We Offer</h1>
      <div className="offer-items">
        <div className="offer-item" id = "kindergarten">
          <img src="/images/gerarnarok3.jpeg" alt="Kindergarten" />
          <div className="offer-content">
            <FaBabyCarriage className="offer-icon" />
            <h3>Kindergarten</h3>
            <p>
              Our kindergarten program focuses on providing a nurturing and stimulating environment
              where young learners can develop foundational skills and social interactions.
            </p>
            <Link to="/kindergarten">
            <button className="learn-more-button">Learn More</button>
            </Link>
          </div>
        </div>
        <div className="offer-item" id = "preparatory">
          <img src="/images/children_playing1.jpeg" alt="Preparatory" />
          <div className="offer-content">
            <FaGraduationCap className="offer-icon" />
            <h3>Preparatory School</h3>
            <p>
              In our preparatory school, students engage in comprehensive learning experiences that
              prepare them for the academic challenges of higher levels.
            </p>
            <Link to="/preparatory">
            <button className="learn-more-button">Learn More</button>
            </Link>
          </div>
        </div>
        <div className="offer-item" id = "junior-high-school">
          <img src="/images/gerarnarok2.jpeg" alt="Junior High School" />
          <div className="offer-content">
            <FaUserGraduate className="offer-icon" />
            <h3>Junior High School</h3>
            <p>
              Our junior high school curriculum emphasizes critical thinking, exploration of diverse
              subjects, and character development to equip students for future success.
            </p>
            <Link to="/junior">
            <button className="learn-more-button">Learn More</button>
            </Link>
          </div>
        </div>
        {/* <div className="offer-item">
          <img src="/images/senior.jpg" alt="Senior High School" />
          <div className="offer-content">
            <FaUserTie className="offer-icon" />
            <h3>Senior High School</h3>
            <p>
              Our senior high school program provides advanced education and specialized tracks
              to prepare students for college and career pathways.
            </p>
            <a href="/senior">
            <button className="learn-more-button">Learn More</button>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Offer;


