// src/controllers/file.controller.js
const db = require('../models');
const File = db.files;
const fs = require('fs');
const path = require('path');

// Upload a file and save its info to the DB
const uploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded.' });
  }

  try {
    const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

    const file = await File.create({
      originalName: req.file.originalname,
      filename: req.file.filename,
      mimeType: req.file.mimetype,
      size: req.file.size,
      url: fileUrl,
    });

    res.status(201).json(file);
  } catch (error) {
    res.status(500).json({ message: 'Error saving file information to database.' });
  }
};

// Get a list of all uploaded files
const getAllFiles = async (req, res) => {
  try {
    const files = await File.findAll({
      order: [['createdAt', 'DESC']]
    });
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving files from database.' });
  }
};

// Delete a file from the filesystem and the DB
const deleteFile = async (req, res) => {
  const { id } = req.params;
  try {
    const file = await File.findByPk(id);
    if (!file) {
      return res.status(404).json({ message: 'File not found.' });
    }

    // 1. Delete file from the filesystem
    const filePath = path.join(__dirname, '../../public/uploads', file.filename);
    fs.unlink(filePath, async (err) => {
      if (err) {
        console.error("Error deleting physical file:", err);
        // If file doesn't exist on disk, we might still want to remove the DB entry
      }
      
      // 2. Delete file record from the database
      await file.destroy();
      res.status(200).json({ message: 'File deleted successfully.' });
    });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting file.' });
  }
};


module.exports = {
  uploadFile,
  getAllFiles,
  deleteFile,
};