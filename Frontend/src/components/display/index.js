import React from 'react';
import './style.css'; // Import CSS file
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const DisplayApplicants = ({ history }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to log out?');
    if (confirmed) {
      localStorage.removeItem('token');
      navigate('/');
    }
  };

  return (
    <div className="body">
      <Container className="btn-container">
        <div>
          <Link to="/admission-data" className="button">
            Admission Data
          </Link>
          <Link to="/enrollment-data" className="button">
            Enrollment Data
          </Link>
          <button
            className="button"
            style={{ marginLeft: '320px' }} // Apply inline style
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </Container>
    </div>
  );
};

export default DisplayApplicants;





