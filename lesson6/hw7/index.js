function checker(arr) {

    let min = arr[0];
    let max = arr[0];

    if (!Array.isArray(arr)) {
        return null;
    }

    for (let g = 0; g < arr.length; g++) {

        if (arr[g] < min) {
            min = arr[g];
        }
        if (arr[g] > max) {
            max = arr[g];
        }
    }
    if (min + max > 1000) {
        return true;
    } else {
        return false;
    }
}

const number = [23, 13, 9, 999];
const checkerAnswer = checker(number);

console.log(checkerAnswer);