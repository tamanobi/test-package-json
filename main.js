const http = require('http');

const port = 3303
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello World\n');
}).listen(port, () => console.log(`Server http://localhost:${port}`));