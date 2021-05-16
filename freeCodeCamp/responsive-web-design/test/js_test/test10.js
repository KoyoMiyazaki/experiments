// freeCodeCamp - Sum All Primes
function sumPrimes(num) {
    let primeFlag;
    let primeArr = [2];
    for(let prime = 3; prime <= num; prime+=2) {
        primeFlag = 1;
        for(let i = 0; i < primeArr.length; i++) {
            if(prime % primeArr[i] === 0) {
                primeFlag = 0;
                break; 
            }
        }
        if(primeFlag === 1) {
            primeArr.push(prime);
        }
    }

    return primeArr.reduce((accu, curr) => accu + curr, 0);
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));