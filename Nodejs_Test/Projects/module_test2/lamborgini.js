const Car = require("./car");

const Lamborgini = class extends Car {
    constructor(name) {
        super(name);
    }

    echo() {
        super.drive();
    }

    drive() {
        console.log(`fire ${this.name}`);
    }
}

module.exports = Lamborgini;