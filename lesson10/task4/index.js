const arr = [2, 16, -45, 54, -99];

// const getMaxAbsoluteNumber = arr => {
//     let max = -Infinity;
//     let now = new Array();

//     const absoluteValues = arr
//         .map(num => Math.abs(num));
//     if (arr === now) {
//         return null;
//     }

//     return max;
// }

const getMaxAbsoluteNumber = arr => {
    let now = new Array();
    if (arr === now) {
        return null;
    }

    const absoluteValues = arr
        .map(num => Math.abs(num));

    const max = Math.max(...absoluteValues);

    return max;
}

console.log(getMaxAbsoluteNumber(arr));