// freeCodeCamp - Pig Latin
function translatePigLatin(str) {
    let regexp = RegExp(/^[^aeiuo]+/g).exec(str);
    if(regexp !== null) {
        let consonants = regexp[0];
        let restStr = str.substring(consonants.length);
        return restStr + consonants + "ay";
    }
    return str + "way";
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));
