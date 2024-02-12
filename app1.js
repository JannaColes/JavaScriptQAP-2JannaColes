const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

const app = express();

// Create logs directory if not exists
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

// Create a write stream for each day's log
const accessLogStream = fs.createWriteStream(path.join(logsDir, `${getCurrentDate()}.log`), { flags: 'a' });

// Log requests to console and file
app.use(morgan('combined', { stream: accessLogStream }));

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Function to get current date in YYYY-MM-DD format
function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
