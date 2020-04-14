let g = 1;
const m = 30;
const n = 40;
let result = 1;

do {
    if (g % 2 === 1) {
        result *= g;
    }

    g++;
} while (g <= n);


console.log('Result: ' + result);