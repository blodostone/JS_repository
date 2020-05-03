const arr = [2, 16, -45, 54, -99];

const getMaxAbsoluteNumber = arr => {
    let max = -Infinity;

    arr.forEach(num => {
        if (Math.abs(num) > max) {
            max = Math.abs(num);
        } else {
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

// const arr = [2, 16, -45, 54, -99]

console.log(getMaxAbsoluteNumber(arr));