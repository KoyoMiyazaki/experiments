// freeCodeCamp - Convert HTML Entities
function sumFibs(num) {
    if (num < 2) { return 1; }
    let fibArray = [1, 1];
    let i = 0;
    while (true) {
        let fibNum = fibArray[i] + fibArray[i+1];
        if(fibNum > num) {
            break;
        }
        fibArray.push(fibNum);
        i++;
    }
    
    return fibArray.reduce((accu, curr) => accu + (curr % 2 === 1 ? curr : 0), 0);
}

console.log(sumFibs(1));
console.log(sumFibs(10));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
console.log(sumFibs(75024));
console.log(sumFibs(75025));