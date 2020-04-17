function getSum(min, max) {
    let result = 0;
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            result += i;
        }
    }
    return result;
}