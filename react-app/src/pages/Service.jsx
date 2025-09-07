import React from 'react';
import Header from '../components/Header';
import './Service.css';

const Service = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Our Doctors & Services</h1>
        <div className="grid">
          <div className="card" style={{cursor: 'pointer'}} onClick={() => window.location.href = '/page/dr-a-sharma'}>
            <img src="https://img.freepik.com/free-photo/portrait-smiling-doctor_144627-15054.jpg" alt="Doctor" />
            <h3>Dr. A. Sharma</h3>
            <p>Speciality: Cardiologist</p>
            <p>Timing: 9:00 AM – 1:00 PM</p>
            <p>Charge: ₹800</p>
          </div>
          <div className="card" style={{cursor: 'pointer'}} onClick={() => window.location.href = '/page/dr-p-verma'}>
            <img src="https://img.freepik.com/free-photo/female-doctor-office_144627-20372.jpg" alt="Doctor" />
            <h3>Dr. P. Verma</h3>
            <p>Speciality: Pediatrician</p>
            <p>Timing: 10:00 AM – 4:00 PM</p>
            <p>Charge: ₹600</p>
          </div>
          <div className="card" style={{cursor: 'pointer'}} onClick={() => window.location.href = '/page/dr-r-gupta'}>
            <img src="https://img.freepik.com/free-photo/doctor-with-stethoscope-hospital_1150-21714.jpg" alt="Doctor" />
            <h3>Dr. R. Gupta</h3>
            <p>Speciality: Orthopedic</p>
            <p>Timing: 2:00 PM – 6:00 PM</p>
            <p>Charge: ₹700</p>
          </div>
          <div className="card" style={{cursor: 'pointer'}} onClick={() => window.location.href = '/page/dr-m-khan'}>
            <img src="https://img.freepik.com/free-photo/portrait-confident-young-doctor_1098-18186.jpg" alt="Doctor" />
            <h3>Dr. M. Khan</h3>
            <p>Speciality: Neurologist</p>
            <p>Timing: 11:00 AM – 3:00 PM</p>
            <p>Charge: ₹1000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
