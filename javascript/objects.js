const person = {
    firstName: 'Bob',
    lastName: 'Tailer',
    age: 20,
    gender: 'male',
    interests: {
        sports: 'soccer',
        music: 'guitar'
    },
    getFullName: function() {
        console.log(this.firstName + ' ' + this.lastName);
    }
};
// person.name = 'Bob';
console.log(person);
console.log(person.interests.sports);
person.age = 21;
console.log(person.age);

const ageKey = 'age';
person[ageKey] = 12;
console.log(person.age);

person.getFullName();