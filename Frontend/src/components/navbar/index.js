import React, { useState } from 'react';
import './style.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [schoolsDropdownOpen, setSchoolsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [academicDropdownOpen, setAcademicDropdownOpen] = useState(false);
  const [schoolLifeDropdownOpen, setSchoolLifeDropdownOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    switch (dropdown) {
      case 'schools':
        setSchoolsDropdownOpen(!schoolsDropdownOpen);
        break;
      case 'about':
        setAboutDropdownOpen(!aboutDropdownOpen);
        break;
      case 'academic':
        setAcademicDropdownOpen(!academicDropdownOpen);
        break;
      case 'schoolLife':
        setSchoolLifeDropdownOpen(!schoolLifeDropdownOpen);
        break;
      default:
        break;
    }
  };

  const renderDropdownIcon = (dropdown) => {
    const isOpen = dropdown === 'schools'
      ? schoolsDropdownOpen
      : dropdown === 'about'
        ? aboutDropdownOpen
        : dropdown === 'academic'
          ? academicDropdownOpen
          : schoolLifeDropdownOpen;

    return isOpen ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src="/images/logo6.png" alt="School Logo" />
        </a>

        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link"
              onClick={() => toggleDropdown('schools')}
            >
              Our Schools {renderDropdownIcon('schools')}
            </a>
            {schoolsDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="#primary">British Curriculum</a></li>
                <li><a href="#middle">Kenyan CBC Curriculum</a></li>
                <li><a href="#middle">East African Curriculum</a></li>

              </ul>
            )}
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link"
              onClick={() => toggleDropdown('about')}
            >
              About Our School {renderDropdownIcon('about')}
            </a>
            {aboutDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="#mission">Mission</a></li>
                <li><a href="#vision">Vision</a></li>
                <li><a href="#core values">Core Values</a></li>


              </ul>
            )}
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link"
              onClick={() => toggleDropdown('academic')}
            >
              Academic {renderDropdownIcon('academic')}
            </a>
            {academicDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="/kindergarten">Kindergarten</a></li>
                <li><a href="/preparatory">Preparatory</a></li>
                <li><a href="/junior">Junior High School</a></li>
                <li><a href="/senior">Senior High School</a></li>

              </ul>
            )}
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link"
              onClick={() => toggleDropdown('schoolLife')}
            >
              School Life {renderDropdownIcon('schoolLife')}
            </a>
            {schoolLifeDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="#clubs">Extracurricular Activities</a></li>
                <li><a href="#timetables">Time Tables</a></li>
                <li><a href="#events">Events</a></li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a href="#news" className="nav-link">News</a>
          </li>
        </ul>
        <a href="/enrollment" className="enroll-button">Enroll Now</a>




        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
        <div className="admin-signin-button">
          <a href="/signin" className="admin-button">Admin SignIn</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

