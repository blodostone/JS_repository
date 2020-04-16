function isPrime(m) {
    for (let i = 2; i < m; i += 1) {
        if (m % i === 0) {
            return false;
        }
        return true;
    }
}

function getPrimes(n) {
    for (let i = 2; i <= n; i += 1) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

console.log(getPrimes(7));