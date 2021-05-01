function init() {
    let cnt = 0;

    return function () {
        return cnt++;
    }
}

let next = init();
console.log(next());
console.log(next());
console.log(next());
console.log(next());