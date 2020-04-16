function isPrime(m) {
    for (let g = 2; g < m; g += 1) {
        if (m % g === 0) {
            return false;
        }
        return true;
    }
}


function getPrimes(n) {
    for (let g = 2; g <= n; g += 1) {
        if (isPrime(g)) {
            console.log(g);
        }
    }
}

console.log(getPrimes(10));