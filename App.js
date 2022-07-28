const http = require('http');

const HOSTNAME = '127.0.0.1';
const PORT =3000;

const server = http.createServer((req,res) => {
 res.statusCode = 200;
 res.setHeader('Content-type','text/plain');
 res.end('Hello Chinmay\n');
});

server.listen(PORT, HOSTNAME, () =>{
console.log('Server running at ${HOSTNAME} on port ${PORT}.');
});