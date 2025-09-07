const express = require('express');
const router = express.Router();

// In-memory users array (shared with server.js)
let users = [
  { id: 1, email: 'doctor@example.com', password: 'password123', role: 'Doctor' },
  { id: 2, email: 'patient@example.com', password: 'password123', role: 'Patient' }
];

// Get all users (for admin or testing)
router.get('/', (req, res) => {
  res.json(users.map(u => ({ id: u.id, email: u.email, role: u.role })));
});

// Get user by ID
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json({ id: user.id, email: user.email, role: user.role });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Update user role (example of user management)
router.put('/:id/role', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    const { role } = req.body;
    if (role) {
      user.role = role;
      res.json({ success: true, user });
    } else {
      res.status(400).json({ message: 'Role is required' });
    }
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router;
