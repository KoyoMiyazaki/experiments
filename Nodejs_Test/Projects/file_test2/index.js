const fs = require("fs");
const path = require("path");
const util = require("util");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

(async function() {
    try {
        let data = await readFile(path.join(__dirname, "sample.txt"), "utf8");
        await writeFile(path.join(__dirname, "sample-copy.txt"), data, "utf8");
        console.log("OK");
    } catch(err) { 
        console.log(err.message);
    }
})();