const superRound = (num, sum) => [
    Math.floor(num * Math.pow(10, sum)) / Math.pow(10, sum),
    Math.round(num * Math.pow(10, sum)) / Math.pow(10, sum),
    Math.ceil(num * Math.pow(10, sum)) / Math.pow(10, sum),
    Math.trunc(num * Math.pow(10, sum)) / Math.pow(10, sum), +num.toFixed(sum),
]
const result = superRound(-Math.PI, 2);

console.log(result);