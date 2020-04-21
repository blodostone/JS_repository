function checkSum(arr) {
    let sum = 0;
    for (let g = 0; g < arr.length; g += 1) {
        sum += g;
        if (g > 100 === 0) {
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