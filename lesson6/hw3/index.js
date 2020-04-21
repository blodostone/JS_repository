function checkSum(arr) {
    let sum = 0;
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let g = 0; g < arr.length; g += 1) {
        sum += arr[g];

    }
    if (sum > 100) {
        return true;
    } else {
        return false;
    }
}
const number = (23, 13, 9, 42);
const sumAnswer = checkSum(9);

console.log(sumAnswer);