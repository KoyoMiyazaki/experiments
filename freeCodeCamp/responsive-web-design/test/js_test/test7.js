// freeCodeCamp - Sorted Union
function uniteUnique(...arr) {
    let result = [...arr[0]];
    let newArr = arr.slice(1);
    for(let i = 0; i < newArr.length; i++) {
        for(let j = 0; j < newArr[i].length; j++) {
            if(result.includes(newArr[i][j]) === false) {
                result.push(newArr[i][j]);
            }
        }
    }
    return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);