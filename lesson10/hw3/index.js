const superRound = (num, sum) => [
    Math.floor((num * sum) * 100) / 100,
    Math.round((num * sum) * 100) / 100,
    Math.ceil((num * sum) * 100) / 100,
    Math.trunc((num * sum) * 100) / 100, +num.toFixed(sum),
]
const result = superRound(-Math.PI, 2);

console.log(result)