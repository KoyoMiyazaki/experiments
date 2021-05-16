// freeCodeCamp - Smallest Common Multiple
function smallestCommons(arr) {
    let [start, end] = arr[0] > arr[1] ? [arr[1], arr[0]] : [arr[0], arr[1]];
    let result = 1;
    
    const gcd = function(a, b) {
        if(b === 0) { return a; }
        return gcd(b, a % b);
    };

    const lcm = function(a, b) {
        return a * b / gcd(a, b);
    }

    for(let i = start; i <= end; i++) {
        result = lcm(result, i);
    }
    return result;
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));