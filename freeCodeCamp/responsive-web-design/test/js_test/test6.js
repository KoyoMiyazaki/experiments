// freeCodeCamp - Missing letters
function fearNotLetter(str) {
    let result = "";
    for(let i = 0; i < str.length - 1; i++) {
        let [leftCharAscii, rightCharAscii] = [str[i].charCodeAt(0), str[i+1].charCodeAt(0)];
        let missingRange = rightCharAscii - leftCharAscii;
        if(missingRange !== 1) {
            for(let i = 1; i < missingRange; i++) {
                result += String.fromCharCode(leftCharAscii + i);
            }
        }
    }
    if(result === "") {
        return undefined;
    }
    return result;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));