export const sumOfSquares = sum => {
    return [...sum].reduce((acc, elem) => {
        return acc + elem;
    }, 0);
}

const result = sumOfSquares([3, 5, 8, -16, 6]);

// console.log(result);