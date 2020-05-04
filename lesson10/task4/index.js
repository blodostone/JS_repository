const arr = [2, 16, -45, 54, -99];

const getMaxAbsoluteNumber = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }
    if (arr.length == 0) {
        return null;
    }

    const absoluteValues = arr
        .map(num => Math.abs(num));

    const max = Math.max(...absoluteValues);

    return max;
}

// console.log(getMaxAbsoluteNumber(arr));