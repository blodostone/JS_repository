function getSubArray(arr, n) {
    let result = [];
    for (let g = 0; g < arr.length; g++) {
        if (arr[g] % 2 == 0) {
            result[g] = arr[g] + n;
        }
    }
    return result;
}

const evenElements = getSubArray([11, 4, 8, 3], 2);
console.log(evenElements);