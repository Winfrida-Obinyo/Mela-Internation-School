import React, { useState, useEffect } from 'react';
import './style.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [schoolsDropdownOpen, setSchoolsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [academicDropdownOpen, setAcademicDropdownOpen] = useState(false);
  const [schoolLifeDropdownOpen, setSchoolLifeDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const toggleDropdown = (dropdown) => {
  //   switch (dropdown) {
  //     case 'schools':
  //       setSchoolsDropdownOpen(!schoolsDropdownOpen);
  //       break;
  //     case 'about':
  //       setAboutDropdownOpen(!aboutDropdownOpen);
  //       break;
  //     case 'academic':
  //       setAcademicDropdownOpen(!academicDropdownOpen);
  //       break;
  //     case 'schoolLife':
  //       setSchoolLifeDropdownOpen(!schoolLifeDropdownOpen);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const toggleDropdown = (dropdown) => {
    setSchoolsDropdownOpen(dropdown === 'schools' ? !schoolsDropdownOpen : false);
    setAboutDropdownOpen(dropdown === 'about' ? !aboutDropdownOpen : false);
    setAcademicDropdownOpen(dropdown === 'academic' ? !academicDropdownOpen : false);
    setSchoolLifeDropdownOpen(dropdown === 'schoolLife' ? !schoolLifeDropdownOpen : false);
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

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.classList.toggle('inactive-background', !mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src="/images/gerar2.png" alt="School Logo" />
        </a>

        <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <div className="close-button" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a
              href="#ourschools"
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
              href="#about"
              className="nav-link"
              onClick={() => toggleDropdown('about')}
            >
              About {renderDropdownIcon('about')}
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
              href="#academic"
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
              href="#school-life"
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

        <div className="new-nav-container">
          <a href="https://share-eu1.hsforms.com/1xNxowBcySfG0y7CTKSu_bw2e4e7p" className="enroll-button">Enroll Now</a>
          <div className="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
