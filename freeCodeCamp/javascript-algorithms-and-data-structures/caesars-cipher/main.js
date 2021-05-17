// freeCodeCamp - Telephone Number Validator
function telephoneCheck(str) {
    if(str.match(/\(/g) !== null) {
        if(str.match(/\)/g) === null) {
            return false;
        }
    }
    if(str.match(/\)/g) !== null) {
        if(str.match(/\(/g) === null) {
            return false;
        }
    }
    const regex = /^1*\s*\(*\d{3}\)*[\-\s]*\d{3}[\-\s]*\d{4}$/g;
    return str.match(regex) !== null;
}

console.log(telephoneCheck("1 555-555-5555"), " should true");
console.log(telephoneCheck("1 (555) 555-5555"), " should true");
console.log(telephoneCheck("5555555555"), " should true");
console.log(telephoneCheck("555-555-5555"), " should true");
console.log(telephoneCheck("(555)555-5555"), " should true");
console.log(telephoneCheck("1(555)555-5555"), " should true");
console.log(telephoneCheck("555-5555"), " should false");
console.log(telephoneCheck("5555555"), " should false");
console.log(telephoneCheck("1 555)555-5555"), " should false");
console.log(telephoneCheck("1 555 555 5555"), " should true");
console.log(telephoneCheck("1 456 789 4444"), " should true");
console.log(telephoneCheck("123**&!!asdf#"), " should false");
console.log(telephoneCheck("55555555"), " should false");
console.log(telephoneCheck("(6054756961)"), " should false");
console.log(telephoneCheck("2 (757) 622-7382"), " should false");
console.log(telephoneCheck("0 (757) 622-7382"), " should false");
console.log(telephoneCheck("-1 (757) 622-7382"), " should false");
console.log(telephoneCheck("2 757 622-7382"), " should false");
console.log(telephoneCheck("10 (757) 622-7382"), " should false");
console.log(telephoneCheck("27576227382"), " should false");
console.log(telephoneCheck("(275)76227382"), " should false");
console.log(telephoneCheck("2(757)6227382"), " should false");
console.log(telephoneCheck("2(757)622-7382"), " should false");
console.log(telephoneCheck("555)-555-5555"), " should false");
console.log(telephoneCheck("(555-555-5555"), " should false");
console.log(telephoneCheck("(555)5(55?)-5555"), " should false");
console.log(telephoneCheck("55 55-55-555-5"), " should false");