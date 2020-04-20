function getSpecialNumbers(m, n) {
    let specialNumbers = [];

    for (let g = m; g <= n; g++) {
        if (g % 3 === 0) {
            specialNumbers.push(g);
        }
    }
    return specialNumbers;
}
const specialNumbers = getSpecialNumbers(5, 15);

console.log(specialNumbers);