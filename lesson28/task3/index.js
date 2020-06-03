// const add3 = value => value + 3;
// const mult2 = value => value * 2;
// const div4 = value => value / 4;

// const compose = (...funcs) => value => {
//     return funcs.reduce((acc, func) => func(acc), value)
// };

// const doEverything = compose(
//     add3,
//     mult2,
//     div4,
// );

// console.log(doEverything(3));

export const mult = a => b => a * b;


export const twice = mult(2);

// const result = twice(4)

export const triple = mult(3);

// console.log(result);