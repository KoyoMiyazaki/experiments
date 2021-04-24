const arry = [1, 2, 3, 4, 5];

arry.reduce((accu, curr) => {
    console.log(accu, curr);
    return accu + curr;
}, 10);

const str = 'animation';
const strArry = str.split('');
console.log(strArry);

const result = strArry.reduce((accu, curr) => `${accu}<${curr}>`, "");
console.log(result);