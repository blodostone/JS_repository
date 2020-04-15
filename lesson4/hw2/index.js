const m = 20;
const n = 30;
let result = 0;

for (let g = m; g <= n; g++) {
    if (g % 2 === 0 && g % 4 != 0) {
        result += g;
        if (g % 5 === 0) {
            console.log(g);
        }
    } else if (g % 3 === 0) {
        result -= g;
        if (g % 5 === 0) {
            console.log(g);
        }
    } else if (g % 4 === 0) {
        result *= g;
        if (g % 5 === 0) {
            console.log(g);
        }
    } else if (g % 5 === 0) {
        console.log(g);
    } else {
        continue;
    }

}