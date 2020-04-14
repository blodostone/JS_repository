let result = 1;
for (let m = 20; m <= 30; m++) {
    if (m % 2 === 1) {
        result *= m;
    }
}

console.log('Result: ' + result);