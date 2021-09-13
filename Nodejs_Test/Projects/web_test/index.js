// https://www.nodebeginner.org/index-jp.html#a-full-blown-web-application-with-nodejs

const server = require("./server");
const router = require("./router");
const requestHandlers = require("./requestHandlers");

let handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);