const EventEmitter = require("events");
const ee = new EventEmitter();

ee.on("event", function() {
    console.log("function : \r\n", this);
});
ee.on("event", () => {
    console.log("arrow : \r\n", this);
});

ee.emit("event");