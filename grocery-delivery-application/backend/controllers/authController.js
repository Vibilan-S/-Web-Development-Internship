const express = require('express');
const router = express.Router();
// For simplicity, you might include basic auth logic here; integrate with JWT in production

// Dummy login endpoint
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Dummy logic for authentication
  if (username === 'user' && password === 'pass') {
    res.json({ token: 'dummy-jwt-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
