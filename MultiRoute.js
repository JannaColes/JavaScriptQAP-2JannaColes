const http = require('http');

// The server is created and the request event is handled in the same file
const server = http.createServer((request, response) => {
  const { url } = request;
  console.log('Requested URL:', url);
  switch (url) {
    case '/about':
      response.end('About Page');
      break;
      case '/contact':
        response.end('Contact Page');
        break;
        case '/products':
          response.end('Products Page');
            break;
            case '/':
              response.end('Home Page');
              break;
              case '/subscribe':
                response.end('Subscribe Page');
                break;
                default:
                  response.writeHead(404, { 'Content-Type': 'text/plain'});
                  response.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});