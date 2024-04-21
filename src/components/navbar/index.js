
import React, { useState } from 'react';
import './style.css'; // Import CSS file for styling
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
        {/* Logo */}
        <a href="/" className="navbar-logo">
          <img src="/path/to/your/logo.png" alt="School Logo" />
        </a>

        {/* Navbar Menu */}
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#"
              className="nav-link"
              onClick={() => toggleDropdown('schools')}
            >
              Our Schools {renderDropdownIcon('schools')}
            </a>
            {schoolsDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="#primary">Bitish Curriculum</a></li>
                <li><a href="#middle">Kenyan CBC Curriculum</a></li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a href="#"
              className="nav-link"
              onClick={() => toggleDropdown('about')}
            >
              About Our School {renderDropdownIcon('about')}
            </a>
            {aboutDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="#history">History</a></li>
                <li><a href="#mission">Mission & Vision</a></li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a href="#"
              className="nav-link"
              onClick={() => toggleDropdown('academic')}
            >
              Academic {renderDropdownIcon('academic')}
            </a>
            {academicDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="#curriculum">Fee Structure</a></li>
                <li><a href="#facilities">Preparatory</a></li>
                <li><a href="#Junior High school">Preparatory</a></li>
                <li><a href="#Academic Support">Academic Support</a></li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a href="#"
              className="nav-link"
              onClick={() => toggleDropdown('schoolLife')}
            >
              School Life {renderDropdownIcon('schoolLife')}
            </a>
            {schoolLifeDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="#clubs">Extarcurricular Activities</a></li>
                <li><a href="#TimeTables">TimeTables</a></li>
                <li><a href="#events">Events</a></li>


              </ul>
            )}
          </li>
          <li className="nav-item">
            <a href="#news" className="nav-link">News</a>
          </li>
        </ul>

        {/* Search Icon */}
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>

        {/* Enroll Now Button */}
        <a href="#enroll" className="enroll-button">Enroll Now</a>
      </div>
    </nav>
  );
};

export default Navbar;
