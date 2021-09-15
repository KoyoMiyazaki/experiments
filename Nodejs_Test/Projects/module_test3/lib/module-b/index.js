const moduleA = require("../module-a/index");
const a = require("../module-a/index");

module.exports = function() {
    a();
    console.log("call module-b index.js");
}