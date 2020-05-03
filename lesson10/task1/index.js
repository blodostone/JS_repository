const arr = [12, 12.5, NaN, Infinity, 'text'];

function getFininteNumbers(num) {
    const getNum = num.filter(sum => Number.isFinite(sum));
    return getNum;
}
// const result = getFininteNumbers(arr);
// console.log(result);

function getFininteNumbersV2(num) {
    const isFiniteNum = num.filter(sum => isFinite(sum));
    return isFiniteNum;
}
// const result2 = getFininteNumbersV2(arr);
// console.log(result2);


function getNaN(nan) {
    const getNanFun = nan.filter(sum => Number.isNaN(sum));
    return getNanFun;
}
// const result3 = getNaN(arr);
// console.log(result3);


function getNaNV2(nan) {
    const getNanFunV2 = nan.filter(sum => Number.isNaN(sum));
    return getNanFunV2;
}
// const result4 = getNaNV2(arr);
// console.log(result4);


function getIntegers(dontfull) {
    const intArr = dontfull.filter(sum => Number.isInteger(sum));
    return intArr;
}
// const result5 = getIntegers(arr);
// console.log(result5);


// const compareIsFinite = result1 == result2;
// console.log(compareIsFinite);


// const compareIsNan = result3 == result4;
// console.log(compareIsNan);