const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('10');
});

const port = 8088;

server.listen(port, () => {
    console.log('Server running at', port);
});
