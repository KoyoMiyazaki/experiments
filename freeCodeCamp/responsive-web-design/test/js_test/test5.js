// freeCodeCamp - DNA Pairing
function pairElement(str) {
    let result = [];
    for(let i = 0; i < str.length; i++) {
        switch(str[i]) {
            case "A":
                result.push(["A", "T"]);
                break;
            case "T":
                result.push(["T", "A"]);
                break;
            case "C":
                result.push(["C", "G"]);
                break;
            case "G":
                result.push(["G", "C"]);
                break;
        }
    }
    return result;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));