const {echo, area} = require("./methods");
const Lamborgini = require("./lamborgini");
const config = require("./config");

echo("Hello World!");
console.log(area(5, 10));

let car = new Lamborgini("lamborgini");
car.echo();
car.drive();

console.log(JSON.stringify(config));