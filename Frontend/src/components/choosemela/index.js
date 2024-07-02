import React from 'react';
import './style.css'; 
import { FaSchool, FaUsers, FaChalkboardTeacher, FaHeart, FaRunning, FaHandsHelping, FaGraduationCap, FaShieldAlt, FaGlobe } from 'react-icons/fa';

const ReasonCard = ({ icon, title, description }) => {
  return (
    <div className="reason-card">
      <div className="icon-container">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const ReasonsToChooseMela = () => {
  return (
    <div className="reasons-container">
      <h2 className="choose-header">Why Choose New Premier Talent School</h2>
      <div className="reasons-row">
        <ReasonCard icon={<FaSchool />} title="Holistic Education" description="Comprehensive approach focusing on academic excellence and student development." />
        <ReasonCard icon={<FaUsers />} title="Diverse and Inclusive Community" description="Welcoming environment celebrating multiculturalism and global perspectives." />
        <ReasonCard icon={<FaChalkboardTeacher />} title="Innovative Teaching Methods" description="Engaging and creative teaching strategies to inspire curiosity and critical thinking." />
      </div>
      <div className="reasons-row">
        <ReasonCard icon={<FaHeart />} title="Focus on Character Development" description="Instilling values like leadership, empathy, and integrity in students." />
        <ReasonCard icon={<FaRunning />} title="Extracurricular Opportunities" description="Wide range of activities for students to explore interests and develop talents." />
        <ReasonCard icon={<FaHandsHelping />} title="Engaged and Supportive Faculty" description="Dedicated professionals providing mentorship and guidance to students." />
      </div>
      <div className="reasons-row">
        <ReasonCard icon={<FaGraduationCap />} title="College and Career Readiness" description="Preparation for higher education and future careers with rigorous programs." />
        <ReasonCard icon={<FaShieldAlt />} title="Safe and Stimulating Environment" description="Prioritizing student safety and well-being in a conducive learning atmosphere." />
        <ReasonCard icon={<FaGlobe />} title="Community Engagement" description="Active involvement in local community through service projects and outreach." />
      </div>
    </div>
  );
};

export default ReasonsToChooseMela;




