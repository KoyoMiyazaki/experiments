// freeCodeCamp - Caesars Cipher
function rot13(str) {
    let result = "";
    
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        if(char.search(/[A-Z]/) !== -1) {
            let charCodeAt = char.charCodeAt(0);
            result += charCodeAt + 13 > 90 ? String.fromCharCode(65 + (13 - 1 - (90 - charCodeAt)))
                                           : String.fromCharCode(charCodeAt + 13);
        } else {
            result += char;
        }
    }
    return result;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));