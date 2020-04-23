const increaseEvenEl = (numbers) => {
    if (!Array.isArray(numbers)) {
        return null;
    }


    const evenEl =
        arr.map(item => {
            return item + delta;
        });
    arr.filter(item => {
        return item % 2;
    });

    return evenEl;
}

const arr = [2, 5, 6, 8, 11, 9, 4];
const delta = 20;

console.log(increaseEvenEl(arr, delta));