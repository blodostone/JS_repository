const m = 30;
const n = 40;
let result = 1;
let g = 1;

do {
    if (g % 2 === 1) {
        result *= g;
    }

    g++;
} while (g <= m);


console.log('Result: ' + result);