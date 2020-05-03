const multiRound = num => [
    Math.round(num * 100) / 100,
    Math.floor(num * 100) / 100,
    Math.ceil(num * 100) / 100,
    Math.trunc(num * 100) / 100,
    Number(num.toFixed(2)),
];

const result = multiRound(-Math.PI)
console.log(result);

const result2 = multiRound(Math.PI)
console.log(result2);