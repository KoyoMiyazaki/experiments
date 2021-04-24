function hello(callback) {
    console.log(callback)
    console.log('hello ' + callback());
}

function getName() {
    return 'Bob Marley';
}

function getFirstName() {
    return 'Bob';
}

hello(getName);
console.log('--------------------------------------');
hello(getFirstName);
console.log('--------------------------------------');

hello(function() {
    return 'Tom';
});
console.log('--------------------------------------');

hello(() => 'Emily');