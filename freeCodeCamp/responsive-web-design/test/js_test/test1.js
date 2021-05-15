// freeCodeCamp - Wherefore art thou
let test_data = [{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }];
let test_obj = { "apple": 1, "bat": 2 };
let arr = test_data.slice();
Object.keys(test_obj).forEach(function(key) {
    console.log("start: " + arr);
    let value = test_obj[key];
    // console.log(key + ": " + test_obj[key]);
    arr = arr.filter(elem => {
        if(elem.hasOwnProperty(key) && elem[key] === value) {
            return true;
        }
        return false;
    });
    console.log("end: " + arr);
})
console.log(arr);
