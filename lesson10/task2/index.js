const arr = [7, 3.94, 8, 67, '5.23klkl', null, NaN];

function getParsedFloats(nan) {
    const getNanFun = nan.map(sum => Number.parseFloat(sum));
    return getNanFun;
}
const result2 = getParsedFloats(arr);
console.log(result2);


function getParsedFloatsV2(nan) {
    const getNanFun = nan.map(sum => parseFloat(sum));
    return getNanFun;
}
const result3 = getParsedFloatsV2(arr);
console.log(result3);

const compareParseFloat = result2 === result3;
console.log(compareParseFloat);