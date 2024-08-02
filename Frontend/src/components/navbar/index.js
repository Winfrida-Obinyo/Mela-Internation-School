import React, { useState, useEffect } from 'react';
import './style.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <768);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <768);
    }

    // check and add event listeners
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    //cleanup after event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    if (window.innerWidth < 1024) {
      setActiveDropdown(activeDropdown === dropdown ? '' : dropdown);
    }
  };

  const renderDropdownIcon = (dropdown) => {
    return activeDropdown === dropdown ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />;
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
            <a href="/" className="nav-link Home og">Home</a>
          </li>
          <li className="nav-item">
            <a
              href="#ourschools"
              className="nav-link"
              onClick={() => toggleDropdown('schools')}
            >
              Our Schools {renderDropdownIcon('schools')}
            </a>
            {(activeDropdown === 'schools' || window.innerWidth >= 1024) && (
              <ul className="dropdown-menu">
                <li><a href="#cbc-keumbu">Kenyan CBC Keumbu</a></li>
                <li><a href="#cbc-narok">Kenyan CBC Narok</a></li>
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
            {(activeDropdown === 'academic' || window.innerWidth >= 1024) && (
              <ul className="dropdown-menu">
                <li><a href={isMobile ? "/kindergarten" : "#kindergarten"}>Kindergarten</a></li>
                <li><a href={isMobile ? "/preparatory" : "#preparatory"}>Preparatory</a></li>
                <li><a href={isMobile ? "/junior" : "#junior-high-school"}>Junior High School</a></li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a
              href="#school-life"
              className="nav-link Home"
              onClick={() => toggleDropdown('schoolLife')}
            >
              School Life {renderDropdownIcon('schoolLife')}
            </a>
            {(activeDropdown === 'schoolLife' || window.innerWidth >= 1024) && (
              <ul className="dropdown-menu">
                <li><a href="/clubs">Extracurricular Activities</a></li>
                <li><a href="/timetables">Time Tables</a></li>
                <li><a href="/events">Events</a></li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a href="/news" className="nav-link Home">News</a>
          </li>
          <li className="nav-item">
            <a
              href={isMobile ? "/notfound" : "#about"}
              className="nav-link"
              onClick={() => toggleDropdown('about')}
            >
              About {renderDropdownIcon('about')}
            </a>
            {(activeDropdown === 'about' || window.innerWidth >= 1024) && (
              <ul className="dropdown-menu">
                <li><a href="#mission">Mission</a></li>
                <li><a href="#vision">Vision</a></li>
                <li><a href="#core-values">Core Values</a></li>
              </ul>
            )}
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
