import React, {useEffect} from 'react';
import './style.css';

const PreparatorySchool = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // Instant scroll
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []); // This will scroll to top when Kindergarten component mounts
  return (
    <div className="preparatory-school-container">
      <section className="content-section">
        <h2 className="section-title">Welcome to Our Preparatory School</h2>

        <div className="highlights-container">
          <div className="highlight">
            <p>
              At our preparatory school, we believe in fostering academic excellence, critical
              thinking, and a love for learning. Our curriculum is designed to prepare students
              for future success in a supportive and dynamic environment.
            </p>
            <img src="/images/prep1.jpg" alt="Preparatory School Highlight 1" />
          </div>
          <div className="highlight reverse">
            <img src="/images/prep3.jpg" alt="Preparatory School Highlight 2" />
            <p>
              Our diverse curriculum spans across mathematics, science, humanities, and arts,
              ensuring that students receive a well-rounded education that ignites their curiosity
              and passion for discovery.
            </p>
          </div>
        </div>

        <div className="info-container">
          <div className="info-content">
            <h3 className="info-header">
              Academic Programs
            </h3>
            
              <div className="info-details">
                <p>
                  Our academic programs are designed to challenge and inspire. Students can explore
                  advanced coursework, honors tracks, and enrichment opportunities that push the
                  boundaries of traditional learning.
                </p>
              </div>
            
          </div>

          <div className="info-content">
            <h3 className="info-header">
              Extracurricular Activities
            </h3>
            
              <div className="info-details">
                <p>
                  Beyond the classroom, our school offers a wide range of extracurricular activities,
                  including sports, arts, and leadership programs. These activities provide students
                  with valuable skills and experiences that complement their academic journey.
                </p>
              </div>
            
          </div>

          <div className="info-content">
            <h3 className="info-header">
              College Preparation
            </h3>
            
              <div className="info-details">
                <p>
                  Preparing for college is a significant aspect of our program. We provide dedicated
                  college counseling, SAT/ACT preparation, and guidance through the application process
                  to help students achieve their academic and career goals.
                </p>
              </div>
           
          </div>
        </div>

        <div className="additional-section">
          <h3 className='info-header bottom'>Our Curriculum Highlights</h3>
          <div className="curriculum-content">
            <div className="curriculum-item">
              <p>
                Our curriculum emphasizes critical thinking and intellectual curiosity. Students
                engage in collaborative projects, research, and discussions that foster a deep
                understanding of various subjects.
              </p>
              <img src="/images/pre.jpg" alt="Curriculum Focus" />
            </div>
            <div className="curriculum-item reverse">
              <p>
                We encourage students to explore interdisciplinary connections and develop leadership
                skills through academic challenges and teamwork. Our goal is to prepare students
                for success in a rapidly changing world.
              </p>
            </div>
          </div>
          <h4>Prime Areas of Learning:</h4>
          <p>
            <strong>Personal, Social and Emotional Development:</strong> Building positive relationships,
            self-awareness, and emotional regulation.
          </p>
          <p>
            <strong>Communication and Language:</strong> Developing listening, speaking, and early
            literacy skills through interactions and language activities.
          </p>
          <p>
            <strong>Physical Development:</strong> Promoting physical health, coordination, and motor skills
            through play and movement.
          </p>
          <h4>Specific Areas of Learning:</h4>
          <p>
            <strong>Literacy:</strong> Cultivating reading and writing readiness, fostering a joy for books,
            and early language exploration.
          </p>
          <p>
            <strong>Mathematics:</strong> Building numeracy skills, understanding numbers, shapes, and basic
            mathematical concepts through hands-on activities.
          </p>
          <p>
            <strong>Expressive Arts and Design:</strong> Encouraging creativity through art, music, movement,
            and imaginative play, fostering self-expression and exploration.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PreparatorySchool;
