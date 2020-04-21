// input: array (массив)
// output: array (массив)


function squareArr(arr) {
    const result = [];
    for (let g = 0; g < arr.length; g += 1) {
        const square = arr[g] * arr[g];
        result.push(square);
    }
    return result;
}

const number = [1, 2, 3, 4, 5];
const result = squareArr(number);

console.log(result);

console.log(number);