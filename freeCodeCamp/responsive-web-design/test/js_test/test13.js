// freeCodeCamp - Steamroller
function steamrollArray(arr) {
    const flatten = (arr) => {
        return arr.reduce((accu, curr) => {
            return Array.isArray(curr) ? accu.concat(flatten(curr)) : accu.concat(curr);
        }, []);
    };

    return flatten(arr);
}

console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));