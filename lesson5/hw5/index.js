function findDivCount(a, b, n) {
    let result = 0;
    for (let g = a; g <= b; g++) {
        if (g % n === 0) {
            result += 1;
        }
    }
    return result;
}
console.log(findDivCount(1, 12, 2))