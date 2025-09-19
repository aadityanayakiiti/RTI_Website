// src/server.js
require('dotenv').config(); // <-- Load environment variables FIRST

const app = require('./app');
const db = require('./models');

const PORT = process.env.PORT || 3001;

// Sync database
db.sequelize.sync().then(() => {
    console.log('Database synced successfully.');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error("Failed to sync db: " + err.message);
});