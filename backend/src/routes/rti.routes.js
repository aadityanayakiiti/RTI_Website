const express = require('express');
const { getRtiData, updateRtiData } = require('../controllers/rti.controller.js');
const { verifyToken, isAdmin } = require('../middleware/auth.middleware.js');
const router = express.Router();

// Public route to get data
router.get('/', getRtiData);

// Protected route to update data
router.put('/', [verifyToken, isAdmin], updateRtiData);

module.exports = router;