const multiRound = num => [
    Math.round(num * 100) / 100,
    Math.floor(num * 100) / 100,
    Math.ceil(num * 100) / 100,
    Math.trunc(num * 100) / 100, +num.toFixed(2),
];

const result = multiRound(-Math.PI);

console.log(multiRound(-Math.PI));


// const multiRound = (num, sum) => [
//     Math.round(num * 100) / 100,
//     // Math.round(sum * 100) / 100,

//     // Math.floor(num * 100) / 100,
//     // Math.floor(sum * 100) / 100,

//     // Math.ceil(num * 100) / 100,
//     // Math.ceil(sum * 100) / 100,

//     // Math.trunc(num * 100) / 100,
//     // Math.trunc(sum * 100) / 100,

//     Number(num.toFixed(2)),
//     Number(sum.toFixed(2)),
// ];

// const result3 = multiRound(-Math.PI, Math.PI);
// console.log(result3);