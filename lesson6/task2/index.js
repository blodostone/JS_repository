const numbers = [2, 6, 10, 14, 18]

function getSum(numbers) {
    let sumOfNumber = 0;

    for (let g = 0; g < numbers.length; g++) {
        sumOfNumber += numbers[g];

        if (!Array.isArray(numbers)) {
            return null;
        }
    }
    return sumOfNumber;
}

const sumOfElements = getSum(numbers);

console.log('Result: ' + sumOfElements);