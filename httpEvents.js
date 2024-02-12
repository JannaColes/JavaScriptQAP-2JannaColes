// Import the event emitter
const myEmitter = require('./eventEmitter');

// HTTP Status Codes
myEmitter.on('httpStatus', (statusCode) => {
    let message;
    switch (statusCode) {
        case 200:
            message = 'OK - Request successful';
            break;
        case 404:
            message = 'Not Found - The requested resource was not found';
            break;
        case 500:
            message = 'Internal Server Error - Something went wrong on the server';
            break;
        default:
            // Emit event for unknown status codes
            myEmitter.emit('unknownStatusCode', statusCode);
            message = `Unknown status code: ${statusCode}`;
            break;
    }
    console.log(`HTTP Status ${statusCode}: ${message}`);
});

// Handle unknown status codes
myEmitter.on('unknownStatusCode', (statusCode) => {
    console.log(`Unknown status code: ${statusCode}`);
});
