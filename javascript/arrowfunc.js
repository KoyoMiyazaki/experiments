const hello = (str1, str2) => console.log('hello ' + str1 + str2);
hello('javascript', ' and world');

const arrowFunc = (name, age) => {
    console.log('hello ' + name);
    console.log('you\'re ' + age + ' years old');
}
arrowFunc('Bob', 20);

const returnFunc = () => 10;
const returnVal = returnFunc();
console.log(returnVal);

const arry = [1, 2, 3, 4, 5, 6];
arry.forEach((cur, index, array) => {
    console.log('cur: ' + cur);
    console.log('index: ' + index);
    console.log('array: ' + array);
});

const doubledArry = arry.map(cur => cur * 2);
console.log(doubledArry);