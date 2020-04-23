const increaseEvenEl = (arr, delta) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    let sum = [];
    const evenElr = arr.map(item => {
        return item + delta;
    });

    return evenElr;
}

const numbers = [2, 5, 6, 8, 11, 9, 4];
console.log(increaseEvenEl(numbers, 20));