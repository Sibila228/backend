const http = require('http');
const requestURL = 'https://api.test.profcomff.com/auth/openapi.json'
const xhr = new XMLHttpRequest()

xhr.open('GET', requestURL)

xhr.send()
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        const queryObject = url.parse(req.url,true).query;
        console.log(`Token: ${queryObject.token}`);
        console.log(`Scopes: ${queryObject.scopes}`);
        console.log(`User ID: ${queryObject.user_id}`);

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('GET параметры получены!');
    }
});

server.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});

