getFininteNumbers = num => Number.isFinite(num);
const result = getFininteNumbers('12');
console.log(result)

getFininteNumbersV2 = num => isFinite(num);
const resultV2 = getFininteNumbers('12');
console.log(resultV2);

getNaN = nan => Number.isNaN(nan);
const resultNaN = getNaN(NaN);
console.log(resultNaN);

getNaNV2 = nan => isNaN(nan);
const resultNaNV2 = getNaN(NaN);
console.log(resultNaNV2);

getIntegers = dontfull => Number.isInteger(dontfull);
const resultIntergers = getIntegers(1.0);
console.log(resultIntergers);