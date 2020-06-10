const getValueWithDaley = (value, delay) => new Promise(resolve => {
    setTimeout(() => {
        console.log(value);
        resolve(value);
    }, delay)
});

const asyncNum1 = getValueWithDaley(56, 1000)
const asyncNum2 = getValueWithDaley(undefined, 2000)
const asyncNum3 = getValueWithDaley('9', 3000)

export const asyncSum = (...asyncNumbers) => {
    return Promise.allSettled(asyncNumbers)
        .then(numbers => console.log(numbers))

}

asyncSum(asyncNum1, Promise.reject(new Error('error')), asyncNum3)
    .then(result => console.log(result))