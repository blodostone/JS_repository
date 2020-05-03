const getFininteNumbers = num => Number.isFinite(num);
const result = getFininteNumbers(12, '12', -Infinity);
console.log(result)

const getFininteNumbersV2 = num => isFinite(num);
const resultV2 = getFininteNumbers('12');
console.log(resultV2);

const getNaN = nan => Number.isNaN(nan);
const resultNaN = getNaN(NaN);
console.log(resultNaN);

const getNaNV2 = nan => isNaN(nan);
const resultNaNV2 = getNaN(NaN);
console.log(resultNaNV2);

const getIntegers = dontfull => Number.isInteger(dontfull);
const resultIntergers = getIntegers(1.0);
console.log(resultIntergers);