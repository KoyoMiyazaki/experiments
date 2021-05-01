const a = { a: 'a'};
const b = { b: 'b'};
const c = Object.assign({}, a, b);
console.log('a:', a);
console.log('b:', b);
console.log('c:', c);