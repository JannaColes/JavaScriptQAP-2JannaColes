// Define an EventEmitter Class
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

// Initialize a new emitter objet
const myEmitter = new MyEmitter();

module.exports = myEmitter;