function getPrimes(n) {
    outer: for (let i = 2; i <= n; i++) {
        for (let g = 2; g * g <= i; g++) {
            if (i % g == 0) {
                continue outer;
            }
        }
        console.log(i);
    }
}