// src/routes/file.routes.js
const express = require('express');
const router = express.Router();
const { uploadFile, getAllFiles, deleteFile } = require('../controllers/file.controller');
const { verifyToken, isAdmin } = require('../middleware/auth.middleware');
const uploadMiddleware = require('../middleware/upload.middleware');

const protectedAdminRoutes = [verifyToken, isAdmin];

// GET all files
router.get('/', protectedAdminRoutes, getAllFiles);

// POST a new file
router.post('/upload', protectedAdminRoutes, uploadMiddleware, uploadFile);

// DELETE a file by ID
router.delete('/:id', protectedAdminRoutes, deleteFile);

module.exports = router;