// input: array
// output: bool (true/false)

function some(arr) {
    for (let g = 0; g < arr.length; g++) {

        if (arr[g] % 3 === 0) {
            return true;
        }
    }
    return false;
}

const numbers = [3, 53, 12, 6, 35]
const result = some(numbers);

console.log(result)