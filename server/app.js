const http = require('http');

const server = http.createServer((req, res) => {
    console.log('test')
});

server.listen(8080);
