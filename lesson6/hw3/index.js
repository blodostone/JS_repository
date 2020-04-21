function checkSum(arr) {
    let sum = [];
    for (let g = 0; g < arr.length; g += 1) {
        sum += arr[g];
        if (arr[g] > 100 === 0) {
            return true;
        } else {
            return false;
        }
    }
    if (!Array.isArray(arr)) {
        return null;
    }
    return sum;
}

let number = (23, 13, 9, 42)
const sumAnswer = checkSum(number);

console.log(sumAnswer);