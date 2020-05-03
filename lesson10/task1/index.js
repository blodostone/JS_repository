function getFininteNumbers(num) {
    const getNum = num.filter(sum => getFininteNumbers.isFinite(item));
    return getNum;
}

function getFininteNumbersV2(num) {
    const isFiniteNum = num.filter(sum => isFinite(num));
    return isFiniteNum;
}


function getNaN(nan) {
    const getNanFun = nan.filter(sum => Number.isNaN(nan));
    return getNanFun;
}


function getNaNV2(nan) {
    const getNanFunV2 = nan.filter(sum => Number.isNaN(nan));
    return getNanFunV2;
}


function getIntegers(dontfull) {
    const intArr = dontfull.filter(sum => Number.isInteger(dontfull));
    return intArr;
}


const arr = [12, 12.5, NaN, Infinity, 'text'];