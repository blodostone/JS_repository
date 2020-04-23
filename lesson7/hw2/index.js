const reverseArray = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }

    numbers.reverse((a, b) => b - a);

    return numbers;
}

// const copy = numbers.slice();
// const copy = [...numbers];


const arr = [2, 4, 30, 1, 5, 21];

console.log(reverseArray(arr));

console.log(arr)