const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Import users routes
const usersRouter = require('./routes/users');

// In-memory data storage (array of objects)
let users = [
  { id: 1, email: 'doctor@example.com', password: 'password123', role: 'Doctor' },
  { id: 2, email: 'patient@example.com', password: 'password123', role: 'Patient' }
];

// Simple authentication endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ success: true, user: { id: user.id, email: user.email, role: user.role } });
  } else {
    res.status(401).json({ success: false, message: 'Invalid email or password' });
  }
});

// Simple signup endpoint
app.post('/api/signup', (req, res) => {
  const { email, password, role } = req.body;
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ success: false, message: 'Email already exists' });
  }
  const newUser = { id: users.length + 1, email, password, role };
  users.push(newUser);
  res.json({ success: true, user: { id: newUser.id, email: newUser.email, role: newUser.role } });
});

// Use users router for /api/users routes
app.use('/api/users', usersRouter);

// Use pages router for /api/pages routes
const pagesRouter = require('./routes/pages');
app.use('/api/pages', pagesRouter);

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
