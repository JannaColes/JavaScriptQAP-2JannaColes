// Import the event emitter
const myEmitter = require('./eventEmitter');

// File Read Success
myEmitter.on('fileReadSuccess', (filename) => {
    console.log(`File Read Successful: ${filename}`);
});

// File Not Available
myEmitter.on('fileNotAvailable', (filename) => {
    console.warn(`File Not Found: ${filename}`);
});
