const myEmitter = require('./eventEmitter');

require('./httpEvents');
require('./fileEvents');

myEmitter.emit('httpStatus', 200);
myEmitter.emit('httpStatus', 404);
myEmitter.emit('httpStatus', 500);

myEmitter.emit('ServerError', 'Internal server error occurred');

myEmitter.emit('routeAccess', '/dashboard');
myEmitter.emit('routeAccess', '/about');

myEmitter.emit('nonHomeRouteAccess', '/about');
myEmitter.emit('nonHomeRouteAccess', '/contact');

myEmitter.emit('fileReadSuccess', 'example.txt');

myEmitter.emit('fileNotAvailable', 'missing.txt');


