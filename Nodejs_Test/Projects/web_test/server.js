const http = require("http");
const url = require("url");
const { route } = require("./router");

const start = (route, handle) => {
    const onRequest = (req, res) => {
        let pathname = url.parse(req.url).pathname;
        console.log(`Request for ${pathname} received.`);

        res.writeHead(200, {"Content-Type": "text/plain"});
        let content = route(handle, pathname);
        res.write(content);
        res.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;