const hello = function(name, age) {
     // let name = 'Bob';
    console.log('hello ' + name + '(' + age + 'years old)');
    return name + age;
}

// function hello(name, age) {
//     // let name = 'Bob';
//     console.log('hello ' + name + '(' + age + 'years old)');
//     return name + age;
// }

const result1 = hello('Bob', 20);
const result2 = hello('Tom', 35);

console.log(result1);
console.log(result2);