const express = require('express');
const { login, logout, authStatus } = require('../controllers/auth.controller');
// --- ENSURE verifyToken IS IMPORTED ---
const { verifyToken } = require('../middleware/auth.middleware');
const router = express.Router();


router.post('/login', login);
router.post('/logout', logout); // This route is technically optional
router.get('/status', verifyToken, authStatus);


module.exports = router;