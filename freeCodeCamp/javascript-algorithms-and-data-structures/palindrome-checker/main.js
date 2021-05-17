// freeCodeCamp - Map the Debris
function palindrome(str) {
    const strReverse = str => str.split("").reverse().join("");
    const removeNonAlNumChar = str => str.replace(/[^a-zA-Z0-9]/g, "");
    
    const processedStr = removeNonAlNumChar(str).toLowerCase();
    const reverseProcessedStr = removeNonAlNumChar(strReverse(str)).toLowerCase();
    return processedStr === reverseProcessedStr;
}

console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("nope"));
console.log(palindrome("almostomla"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("five|\_/|four"));