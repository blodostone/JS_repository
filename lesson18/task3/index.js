export function sumOfSquares() {
    return [...sum]
        .map((elem) => elem * elem)
        .reduce((acc, elem) => acc += elem);
}

const result = sumOfSquares([3, 5, 8, -16, 6]);

// console.log(result);