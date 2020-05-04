const superRound = num => [+num.toFixed(2),
    Math.floor(num * 100) / 100,
    Math.round(num * 100) / 100,
    Math.ceil(num * 100) / 100,
    Math.trunc(num * 100) / 100,
]
const result = superRound(Math.PI);

console.log(result)