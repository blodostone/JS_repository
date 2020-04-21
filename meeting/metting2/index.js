// input: array
// output: bool (true/false)

function some(arr) {
    for (let g = 0; g < arr.length; g += 1) {
        console.log('==> run');

        if (arr[g] % 3 !== 0) {
            return true;
        }

    }
    return false;
}

const numbers = [32, 56, 3, 4, 55];

const result = some(numbers);

console.log(result);