import React from 'react';
import './Help.css';
import Header from '../components/Header';

const Help = () => {
  return (
    <>
      <Header/>
      <div className="container">
        <h1>Contact & Enquiry</h1>

        <div className="contact-info">
          <h2>Hospital Contact Details</h2>
          <p><strong>Address:</strong> MediCare Hospital, 123 Health Street, New Delhi</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> support@medicareportal.com</p>
          <p><strong>Working Hours:</strong> Mon – Sat, 9:00 AM – 7:00 PM</p>
        </div>

        <form>
          <h2>Enquiry Form</h2>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Type your enquiry here..." required></textarea>

          <button type="submit">Submit Enquiry</button>
        </form>
      </div>
    </>
  );
};

export default Help;
