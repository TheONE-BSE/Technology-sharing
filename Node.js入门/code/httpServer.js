var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, { 'Content-Type': 'text-plain' });
    response.end('兆鹏给大家拜年啦\n');
    console.log('Server started!')
}).listen(9876);

