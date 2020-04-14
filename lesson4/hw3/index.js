let m = 1000;
let sum = 0;

for (let g = 0; g <= m; g++) {
    if (g % 2 === 1) {
        sum += g;
        console.log('Found');
    }


    if (sum * 5 > 5000) {
        console.log("Bigger")
    } else {
        console.log('Smaller')
    }
}