const reverseArray = numbers => {
    if (!Array.isArray(arr)) {
        return null;
    }

    const result = numbers.slice().sort((a, b) => b - a);

    return result;
}

const arr = [2, 4, 30, 1, 5, 21];

console.log(reverseArray(arr));

console.log(arr)