  import React from 'react';
import Header from '../components/Header';
import './About.css';

const About = () => {
  return (
    <>
      <Header />
      <div className="hero">
        <h1>About MediCare Portal</h1>
        <p>We are committed to providing world-class healthcare with compassion, innovation, and technology. Our hospital brings together experienced doctors, advanced facilities, and a patient-first approach.</p>
      </div>

      <div className="container">
        <h2 className="section-title">Our Mission, Vision & Values</h2>
        <div className="card-grid">
          <div className="card" style={{animationDelay: '.3s'}}>
            <h3>Our Mission</h3>
            <p>To deliver compassionate and affordable healthcare solutions that meet international standards.</p>
          </div>
          <div className="card" style={{animationDelay: '.6s'}}>
            <h3>Our Vision</h3>
            <p>To be a leader in healthcare innovation and research, ensuring better outcomes for every patient.</p>
          </div>
          <div className="card" style={{animationDelay: '.9s'}}>
            <h3>Our Values</h3>
            <p>Integrity, empathy, and excellence guide everything we do at MediCare Hospital.</p>
          </div>
        </div>

        <h2 className="section-title" style={{marginTop: '60px'}}>Meet Our Experts</h2>
        <div className="team-grid">
          <div className="team-card" style={{animationDelay: '1s'}}>
            <img src="https://img.freepik.com/free-photo/smiling-doctor-with-stethoscope-white-coat_23-2147896097.jpg" alt="Doctor 1" />
            <h4>Dr. A. Sharma</h4>
            <p>Cardiologist</p>
          </div>
          <div className="team-card" style={{animationDelay: '1.2s'}}>
            <img src="https://img.freepik.com/free-photo/doctor-with-stethoscope-his-neck-smiling_1150-19226.jpg" alt="Doctor 2" />
            <h4>Dr. R. Gupta</h4>
            <p>Neurologist</p>
          </div>
          <div className="team-card" style={{animationDelay: '1.4s'}}>
            <img src="https://img.freepik.com/free-photo/portrait-young-female-doctor_23-2147896288.jpg" alt="Doctor 3" />
            <h4>Dr. S. Verma</h4>
            <p>Pediatrician</p>
          </div>
          <div className="team-card" style={{animationDelay: '1.6s'}}>
            <img src="https://img.freepik.com/free-photo/portrait-smiling-male-doctor_23-2147896077.jpg" alt="Doctor 4" />
            <h4>Dr. M. Khan</h4>
            <p>Orthopedic Surgeon</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
