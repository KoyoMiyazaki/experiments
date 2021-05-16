// freeCodeCamp - Make a Person
let Person = function (firstAndLast) {
    let firstName;
    let lastName;
    [firstName, lastName] = [...firstAndLast.split(" ")];

    this.getFirstName = function() {
        return firstName;
    };
    this.getLastName = function() {
        return lastName;
    };
    this.getFullName = function () {
        return `${firstName} ${lastName}`;
    };

    this.setFirstName = function(first) {
        firstName = first;
    };
    this.setLastName = function(last) {
        lastName = last;
    };
    this.setFullName = function(firstAndLast) {
        [firstName, lastName] = [...firstAndLast.split(" ")];
    };
};

let bob = new Person('Bob Ross');
console.log(Object.keys(bob).length);
console.log(bob.getFirstName());
bob.setFirstName("AAAA");

console.log(bob.getFirstName());
bob.getFullName();