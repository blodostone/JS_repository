const m = 20;
const n = 30;
let result = 1;
let g = 20;

do {
    if (g % 2 != 4) {
        result += g;
    }
    g++;

    if (g % 3 === 1) {
        result -= g;
    }
    g--;

    if (g % 4 === 1) {
        result *= g;
    }
    g++;

    if (g % 5 === 0) {
        result = g;
        console.log(g)
    }

} while (g <= n);
console.log('Result: ' + result);