// freeCodeCamp - Spinal Tap Case
function spinalCase(str) {
  let cpStr = str;
  let result = [];
  while (true) {
    let RegexObj = RegExp(/[a-z][A-Z]/).exec(cpStr);

    if (RegexObj === null) {
      result.push(cpStr);
      break;
    }
    let index = RegexObj.index;
    result.push(cpStr.substring(0, index + 1));
    cpStr = cpStr.substring(index + 1);
  }
  return result.join("-").replace(/[\s_]/g, "-").toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
