// freeCodeCamp - Roman Numeral Converter
function convertToRoman(num) {
    let result = "";
    // "M" means 1,000
    for(let i = 0; i < Math.floor(num / 1000); i++) {
        result += "M";
    }
    num = num % 1000;

    // "CM" means 900
    result += num >= 900 && num <= 999 ? "CM" : "";
    num = num % 900;

    // "D" means 500
    result += num >= 500 && num <= 899 ? "D" : "";
    num = num % 500;

    // "CD" means 400
    result += num >= 400 && num <= 499 ? "CD" : "";
    num = num % 400;

    // "C" means 100
    for(let i = 0; i < Math.floor(num / 100); i++) {
        result += "C";
    }
    num = num % 100;

    // "XC" means 90
    result += num >= 90 && num <= 99 ? "XC" : "";
    num = num % 90;

    // "L" means 50
    result += num >= 50 && num <= 89 ? "L" : "";
    num = num % 50;

    // "XL" means 40
    result += num >= 40 && num <= 49 ? "XL" : "";
    num = num % 40;

    // "X" means 10
    for(let i = 0; i < Math.floor(num / 10); i++) {
        result += "X";
    }
    num = num % 10;

    // "IX" means 9
    result += num === 9 ? "IX" : "";
    num = num % 9;

    // "V" means 5
    result += num >= 5 && num <= 8 ? "V" : "";
    num = num % 5;

    // "IV" means 4
    result += num === 4 ? "IV" : "";
    num = num % 4;

    // "I" means 1
    for(let i = 0; i < num; i++) {
        result += "I";
    }

    return result;
}
console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(9));
console.log(convertToRoman(12));
console.log(convertToRoman(16));
console.log(convertToRoman(29));
console.log(convertToRoman(44));
console.log(convertToRoman(45));
console.log(convertToRoman(68));
console.log(convertToRoman(83));
console.log(convertToRoman(97));
console.log(convertToRoman(99));
console.log(convertToRoman(400));
console.log(convertToRoman(500));
console.log(convertToRoman(501));
console.log(convertToRoman(649));
console.log(convertToRoman(798));
console.log(convertToRoman(891));
console.log(convertToRoman(1000));
console.log(convertToRoman(1004));
console.log(convertToRoman(1006));
console.log(convertToRoman(1023));
console.log(convertToRoman(2014));
console.log(convertToRoman(3999));