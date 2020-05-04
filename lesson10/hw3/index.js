const superRound = (num, sum) => [
    Math.floor(Math.pow(num, sum) * 100) / 100,
    Math.round(Math.pow(num, sum) * 100) / 100,
    Math.ceil(Math.pow(num, sum) * 100) / 100,
    Math.trunc(Math.pow(num, sum) * 100) / 100, +num.toFixed(sum),
]
const result = superRound(-Math.PI, 2);

console.log(result);