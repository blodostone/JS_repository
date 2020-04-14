const m = 30;
const n = 40;
let result = 1;
let g = 2;

do {
    if (g % 2 === 1) {
        result *= g;
    }

    g++;
} while (g <= n);


console.log('Result: ' + result);