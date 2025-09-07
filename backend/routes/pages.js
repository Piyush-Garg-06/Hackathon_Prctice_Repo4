const express = require('express');
const router = express.Router();

// Example in-memory data for pages/cards
const pages = [
  { id: 'growth-opportunities', title: 'Growth Opportunities', content: 'We provide world-class training and mentorship to help you grow in your medical career.' },
  { id: 'innovative-environment', title: 'Innovative Environment', content: 'Work with cutting-edge technology and be part of groundbreaking research in healthcare.' },
  { id: 'work-life-balance', title: 'Work-Life Balance', content: 'We care for our team with flexible schedules, health benefits, and a positive work culture.' },
  { id: 'senior-cardiologist', title: 'Senior Cardiologist', content: 'Department: Cardiology | Timing: Full-time | Charges: ₹2,500/hr' },
  { id: 'neurologist', title: 'Neurologist', content: 'Department: Neurology | Timing: Part-time | Charges: ₹1,800/hr' },
  { id: 'medical-lab-technician', title: 'Medical Lab Technician', content: 'Department: Diagnostics | Timing: Full-time | Charges: ₹900/hr' },
  { id: 'orthopedic-surgeon', title: 'Orthopedic Surgeon', content: 'Department: Orthopedics | Timing: Full-time | Charges: ₹2,200/hr' },
  { id: 'dr-a-sharma', title: 'Dr. A. Sharma', content: 'Cardiologist with 15 years of experience in advanced cardiac care.' },
  { id: 'dr-p-verma', title: 'Dr. P. Verma', content: 'Pediatrician specializing in child healthcare and wellness.' },
  { id: 'dr-r-gupta', title: 'Dr. R. Gupta', content: 'Orthopedic surgeon focused on minimally invasive procedures.' },
  { id: 'dr-m-khan', title: 'Dr. M. Khan', content: 'Neurologist with expertise in neurodegenerative diseases.' },
  { id: 'our-mission', title: 'Our Mission', content: 'To deliver compassionate and affordable healthcare solutions that meet international standards.' },
  { id: 'our-vision', title: 'Our Vision', content: 'To be a leader in healthcare innovation and research, ensuring better outcomes for every patient.' },
  { id: 'our-values', title: 'Our Values', content: 'Integrity, empathy, and excellence guide everything we do at MediCare Hospital.' },
  { id: 'dr-s-verma', title: 'Dr. S. Verma', content: 'Pediatrician dedicated to child health and family care.' }
];

// Get all pages/cards
router.get('/', (req, res) => {
  res.json(pages);
});

// Get page by ID
router.get('/:id', (req, res) => {
  const page = pages.find(p => p.id === req.params.id);
  if (page) {
    res.json(page);
  } else {
    res.status(404).json({ message: 'Page not found' });
  }
});

module.exports = router;
