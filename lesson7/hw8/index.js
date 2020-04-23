const arrAverage = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    const avgArray = numbers.reduce((a, b) => a + b, 0)

    return avgArray;
}

const arr = [2, 5, 6, 8, 11, 9, 4];

console.log(arrAverage(arr));

console.log(arr)