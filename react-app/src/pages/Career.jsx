import React from 'react';
import Header from '../components/Header';
import './Career.css';

const Career = () => {
  return (
    <>
      <Header />
      <div className="hero">
        <h1>Build Your Career With MediCare</h1>
        <p>Join our mission to transform healthcare with compassion, technology, and innovation. Discover exciting opportunities below.</p>
      </div>

      <div className="container">
        <h2 className="section-title">Why Work With Us?</h2>
        <div className="card-grid">
          <div className="card" style={{animationDelay: '.3s'}}>
            <h3>Growth Opportunities</h3>
            <p>We provide world-class training and mentorship to help you grow in your medical career.</p>
          </div>
          <div className="card" style={{animationDelay: '.6s'}}>
            <h3>Innovative Environment</h3>
            <p>Work with cutting-edge technology and be part of groundbreaking research in healthcare.</p>
          </div>
          <div className="card" style={{animationDelay: '.9s'}}>
            <h3>Work-Life Balance</h3>
            <p>We care for our team with flexible schedules, health benefits, and a positive work culture.</p>
          </div>
        </div>

        <h2 className="section-title" style={{marginTop: '60px'}}>Open Positions</h2>
        <div className="job-list">
          <div className="job" style={{animationDelay: '1s'}}>
            <div className="job-info">
              <h4>Senior Cardiologist</h4>
              <p>Department: Cardiology | Timing: Full-time | Charges: ₹2,500/hr</p>
            </div>
            <button className="apply-btn" type="button">Apply Now</button>
          </div>
          <div className="job" style={{animationDelay: '1.2s'}}>
            <div className="job-info">
              <h4>Neurologist</h4>
              <p>Department: Neurology | Timing: Part-time | Charges: ₹1,800/hr</p>
            </div>
            <button className="apply-btn" type="button">Apply Now</button>
          </div>
          <div className="job" style={{animationDelay: '1.4s'}}>
            <div className="job-info">
              <h4>Medical Lab Technician</h4>
              <p>Department: Diagnostics | Timing: Full-time | Charges: ₹900/hr</p>
            </div>
            <button className="apply-btn" type="button">Apply Now</button>
          </div>
          <div className="job" style={{animationDelay: '1.6s'}}>
            <div className="job-info">
              <h4>Orthopedic Surgeon</h4>
              <p>Department: Orthopedics | Timing: Full-time | Charges: ₹2,200/hr</p>
            </div>
            <button className="apply-btn" type="button">Apply Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
