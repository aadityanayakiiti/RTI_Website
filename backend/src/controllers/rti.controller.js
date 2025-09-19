const { readData, writeData } = require('../services/file.service.js');

const getRtiData = async (req, res) => {
  try {
    const data = await readData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to read RTI data' });
  }
};

const updateRtiData = async (req, res) => {
  try {
    const newData = req.body;
    if (!newData) {
        return res.status(400).json({ message: 'No data provided' });
    }
    await writeData(newData);
    res.json({ message: 'RTI data updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update RTI data' });
  }
};

module.exports = { getRtiData, updateRtiData };