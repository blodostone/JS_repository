const cloneArr = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    const newArray = numbers.slice();

    return newArray;

}

const arr = [2, 5, 6, 8, 11, 9, 4];

console.log(cloneArr(arr));

console.log(arr)