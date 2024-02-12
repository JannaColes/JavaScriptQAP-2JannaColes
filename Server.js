const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
    let filePath = request.url === '/' ? './views/index.html' : `./views${request.url}.html`;

    console.log('Requested URL:', request.url);
    console.log('Resolved File Path:', filePath);

    fs.readFile(filePath, (error, content) => {
        if (error) {
            console.error('File Read Error:', error);
            if (error.code === 'ENOENT') {
                response.writeHead(404, { 'Content-Type': 'text/html' });
                response.end('404 Not Found');
            } else {
                response.writeHead(500);
                response.end('Internal Server Error: ' + error.code);
            }
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(content, 'utf-8');
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});