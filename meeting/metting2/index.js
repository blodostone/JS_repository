// input: array
// output: bool (true/false)

function some(arr) {
    for (let g = 0; g < arr.length; g += 1) {
        if (arr[g] % 3 !== 0) {
            return true;
        }

    }
    return false;
}

const numbers = [32, 56, 31, 4, 55];

const result = some(numbers);

console.log(result);