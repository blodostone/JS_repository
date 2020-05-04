const arr = [2, 16, -45, 54, -99];

const getMaxAbsoluteNumber = arr => {
    let max = -Infinity;
    let sum = [];

    arr.forEach(num => {
        if (Math.abs(num) > max) {
            max = Math.abs(num);
        } else if (Math.abs(num) == sum) {
            return null;
        }
    })

    return max;
}

// const getMaxAbsoluteNumber = arr => {
//     const absoluteValues = arr
//         .map(num => Math.abs(num));

//     const max = Math.max(...absoluteValues);

//     return max;
// }

// console.log(getMaxAbsoluteNumber(arr));