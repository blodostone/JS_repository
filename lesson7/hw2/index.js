const reverseArray = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    const copy = numbers.slice();

    copy.reverse((a, b) => b - a);

    return copy;
}

// const copy = numbers.slice();
// const copy = [...numbers];


const arr = [2, 4, 30, 1, 5, 21];

console.log(reverseArray(arr));

console.log(arr)