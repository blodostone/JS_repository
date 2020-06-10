export const asyncSum = (value, delay) =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log(value);
            resolve(value);
        }, delay);
    });

const asyncNumber1 = asyncSum(56, 1000);
const asyncNumber2 = asyncSum(undefined, 2000);
const asyncNumber3 = asyncSum('9', 2000);

const getSum = (numbers) =>
    numbers
    .filter((value) => !isNaN(value))
    .reduce((acc, num) => acc + Number(num), 0);
const asyncSumNumber = (...asyncNumbers) =>
    Promise.all(asyncNumbers).then((numbers) => getSum(numbers));

asyncSumNumber(asyncNumber1, asyncNumber2, asyncNumber3).then((result) =>
    console.log(result)
);