const EventEmitter = require("events");
const ee = new EventEmitter();

ee.on("event", () => {console.log("event 1st.");});
ee.on("event", () => {console.log("event 2nd.");});
ee.on("event", () => {console.log("event 3rd.");});

ee.emit("event");