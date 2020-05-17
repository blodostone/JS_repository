export const sumOfSquares = sum => {
    return [...sum].map((elem) => {
        return elem * elem;
    });
}

const result = sumOfSquares([3, 5, 8, -16, 6]);

// console.log(result);