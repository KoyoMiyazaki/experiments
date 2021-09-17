const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "test.txt"), "utf8");
fs.writeFileSync(path.join(__dirname, "sample-copy.txt"), data, "utf8");
