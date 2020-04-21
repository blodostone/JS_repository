function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let result = [];
    for (let g = 0; g < arr.length; g++) {
        if (arr[g] % 2 == 0) {
            result[g] = arr[g] + delta;
        }
    }
    return result;
}


const evenElements = increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20);
console.log(evenElements);