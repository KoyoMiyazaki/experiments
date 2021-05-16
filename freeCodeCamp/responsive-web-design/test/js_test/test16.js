// freeCodeCamp - Arguments Optional
function addTogether(arg1, arg2) {
    if(typeof arg1 !== "number") { return undefined; }
    if(typeof arg2 === "undefined") {
        return function(subArg) {
            if(typeof subArg !== "number") { return undefined; }
            return arg1 + subArg;
        }
    }
    if(typeof arg2 !== "number") { return undefined; }
    return arg1 + arg2;
}

console.log(addTogether(2, 3));
console.log(addTogether(23, 30));
console.log(addTogether(5)(7));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));