const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = 'http://api.moemoe.tokyo/anime/v1/master/2021/2?ogp=1';

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer();

server.on('request', (req, res) => {
    http.get(url, (apiRes) => {
        let body = '';
        apiRes.setEncoding('utf8');

        apiRes.on('data', (chunk) => {
            body += chunk;
        });

        apiRes.on('end', () => {
            let data = {};
            data.animes = JSON.parse(body);
            let template = fs.readFileSync('./practice2.ejs', 'utf-8');
            let page = ejs.render(template, data);
            res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
            res.write(page);
            res.end();
        });
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});