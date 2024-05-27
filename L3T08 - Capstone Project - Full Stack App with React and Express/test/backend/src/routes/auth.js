const express = require('express');
const jwt = require('jwt-simple');
const jwtConfig = require('../config/jwtConfig');

const router = express.Router();

router.post('/token', (req, res) => {
    const payload = { user: 'testuser' }; // Adjust the payload as needed
    const token = jwt.encode(payload, jwtConfig.secret);
    res.json({ token });
});

module.exports = router;
