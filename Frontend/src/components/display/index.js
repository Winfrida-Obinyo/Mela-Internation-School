import React from 'react';
import './style.css'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';


const DisplayApplicants = ({ history}) => {
  // const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleLogout = () => {
     // Display confirmation dialog
    const confirmed = window.confirm('Are you sure you want to log out?');
    
    // If user confirms, perform logout actions
    if (confirmed) {
      // Perform logout actions (e.g., clear session, etc.)
      localStorage.removeItem('token');
          
      // Redirect to the homepage
      navigate('/');
    
    // Replace the current URL in the history stack with the homepage URL
    navigate('/', { replace: true });
  }
};

  return (
    <div className="body">
    <Container className='btn-container'>      
      <div >
        <Link to="/admission-data" className="button">Admission Data</Link>
        <Link to="/enrollment-data" className='button'>Enrollment Data</Link>    
        <button onClick={handleLogout}>Logout</button>
      </div>        
        {/* <Link to="/" className='button'>Logout</Link> */}
        {/* <button href="/signin">Logout</button>    */}     
  </Container>
  </div>
  )
}


export default DisplayApplicants;




