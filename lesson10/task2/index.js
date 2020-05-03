const arr = [7, 3.94, 8, 67, '5.23klkl', null, NaN];



const getParsedFloats = arr => {
    const ParsedFloats = arr
        .map(el => Number.parseFloat(el));
    return ParsedFloats;
}
console.log(getParsedFloats(arr));

const getParsedFloatsV2 = arr => {
    const ParsedFloatsV2 = arr
        .map(el => parseFloat(el));
    return ParsedFloatsV2;
}
console.log(getParsedFloatsV2(arr));


const compareParseFloat = getParsedFloats(arr) === getParsedFloatsV2(arr);
console.log(compareParseFloat);