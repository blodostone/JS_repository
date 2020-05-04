const arr = [7, 3.94, 8, 67, '5.23klkl', null, NaN];



function getParsedFloats(nan) {
    const getNanFun = nan.map(sum => Number.parseFloat(sum));
    return getNanFun;
}
// const result2 = getParsedFloats(arr);
// console.log(result2);


function getParsedFloatsV2(nan) {
    const getNanFun = nan.map(sum => parseFloat(sum));
    return getNanFun;
}
// const result3 = getParsedFloatsV2(arr);
// console.log(result3);

// const compareParseFloat = result2 === result3;
// console.log(compareParseFloat);

const getParsedIntegers = arr => {
    const ParsedIntegersArr = arr
        .map(el => Number.parselnt(el));
    return ParsedIntegersArr;
};

// console.log(getParsedIntegers(arr));

const getParsedIntegersV2 = arr => {
    const ParsedIntegersArrV2 = arr
        .map(el => parselnt(el));
    return ParsedIntegersArrV2;
};

// console.log(getParsedIntegersV2(arr));


// const getParsedFloats = arr => {
//     const ParsedFloats = arr
//         .map(el => Number.parseFloat(el));
//     return ParsedFloats;
// }
// console.log(getParsedFloats(arr));

// const getParsedFloatsV2 = arr => {
//     const ParsedFloatsV2 = arr
//         .map(el => parseFloat(el));
//     return ParsedFloatsV2;
// }
// console.log(getParsedFloatsV2(arr));


// const compareParselnt = getParsedIntegersV2(arr) === getParsedIntegers(arr);


// const compareParseFloat = getParsedFloats(arr) === getParsedFloatsV2(arr);
// console.log(compareParseFloat);