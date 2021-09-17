const Clock = require("./clock");
let i = 0;

const clock = new Clock();
clock.on("tick", () => {
    console.log(++i);
    if (i > 3) {
        clock.stop();
    }
});
clock.start();