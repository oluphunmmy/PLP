const http = require('http')

const server = http.createServer((request, response) => {
    console.log(`Requested URL: ${request.url}`);
    // response.statusCode = 200;
    // response.setHeader('Content-Type', 'text/plain')
    // response.end('Hello, Web Development Class!');

//the server configuration could be the one above or below:

    if(request.url === '/'){
        response.writeHead(200, {'Content-Type' : 'text/plain'})
        response.end('Welcome to the landing page.')
    } else if(request.url === '/about'){
        response.writeHead(200, {'Content-Type' : 'text/plain'})
        response.end('Welcome to About page.')
    }else {
        response.writeHead(404, {'Content-Type' : 'text/plain'})
        response.end('Page not found.')
    }
})
const PORT = 3005;

server.listen(PORT, () => {
    console.log('server is running on port 3005')
})