const squareArray = numbers => {
    // if (!Array.isArray(arr)) {
    //     return null;
    // }

    const result = numbers.map(num => num * num);
    if (!Array.isArray(arr)) {
        return null;
    }

    return result;
}

const arr = [1, 2, 3, 4, 5, 6]

console.log(squareArray(arr));

console.log(arr);