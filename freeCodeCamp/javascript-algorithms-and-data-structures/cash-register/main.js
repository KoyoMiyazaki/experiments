// freeCodeCamp - Cash Register
function checkCashRegister(price, cash, cid) {
    const currencyUnit = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    }

    let changeDue = cash - price;
    let newCid = cid.slice();
    let strCid = JSON.stringify(cid);
    let result = [];
    let resultCounter = 0;

    newCid.sort((a, b) => currencyUnit[b[0]] - currencyUnit[a[0]]);
    
    for(let i = 0; i < newCid.length; i++) {
        let currencyKey = newCid[i][0];
        let currencyValue = currencyUnit[newCid[i][0]];
        // console.log(currencyValue);
        if(changeDue >= currencyValue) {
            result.push([currencyKey, 0]);
            while(true) {
                // console.log(changeDue, newCid[i][1]);
                if(newCid[i][1] === 0 || changeDue < currencyValue) {
                    break;
                }
                changeDue = Math.round((changeDue - currencyValue) * 100) / 100;
                newCid[i][1] = Math.round((newCid[i][1] - currencyValue) * 100) / 100;
                result[resultCounter][1] += Math.round(currencyValue * 100) / 100;
            }
            resultCounter++;
        }
    }

    if(changeDue > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }

    return newCid.reduce((accu, curr) => accu + curr[1], 0) === 0 ? {status: "CLOSED", change: JSON.parse(strCid)}
                                                                  : {status: "OPEN", change: result};
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));