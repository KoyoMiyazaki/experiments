// freeCodeCamp - Search and Replace
function myReplace(str, before, after) {
    if(before.match(/^[A-Z]/)) { // 先頭が大文字
        after = after[0].toUpperCase() + after.substring(1);
        return str.replace(before, after);
    }
    after = after[0].toLowerCase() + after.substring(1);
    return str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));