// src/models/file.model.js
module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define('file', {
    originalName: {
      type: DataTypes.STRING,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mimeType: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.INTEGER,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return File;
};