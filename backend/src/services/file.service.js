const fs = require('fs').promises;
const path = require('path');

const dataFilePath = path.join(process.cwd(), 'rti-data.json');

const readData = async () => {
  try {
    const jsonData = await fs.readFile(dataFilePath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (error) {
    // If the file doesn't exist or is invalid, return a default structure
    return { title: "Transparency Audit Disclosures", sections: [] };
  }
};

const writeData = async (data) => {
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error("Error writing to data file:", error);
    throw new Error('Failed to save data.');
  }
};

module.exports = { readData, writeData };