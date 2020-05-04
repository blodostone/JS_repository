const superRound = (num) => [
    Math.floor(num) * (Math.pow(10, 2)) / 100,
    Math.round(num) * (Math.pow(10, 2)) / 100,
    Math.ceil(num) * (Math.pow(10, 2)) / 100,
    Math.trunc(num) * (Math.pow(10, 2)) / 100, +num.toFixed(2),
]
const result = superRound(-Math.PI, 2);

console.log(result);