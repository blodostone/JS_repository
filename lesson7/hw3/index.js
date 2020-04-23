const increaseEvenEl = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }

    const evenEl = numbers.map((num) => (num % 2 + delta));


    return evenEl;
}

const arr = [2, 5, 6, 8, 11, 9, 4];
const delta = 20;

console.log(increaseEvenEl(arr, delta));