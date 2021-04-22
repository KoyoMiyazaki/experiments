// const arry = new Array(1,2,3,4,5,6);
const arry = [1, 2, 3, 4, 5, 6, 'str', true];
console.log(arry[2]);

arry[5] = 8;
console.log(arry[5]);

console.log(arry.length);
console.log(typeof arry);
arry.push('new item');
console.log(arry);
arry.unshift('new item2');
console.log(arry);

const popped = arry.pop();
console.log(arry);
console.log(popped);

const shifted = arry.shift();
console.log(arry);
console.log(shifted);