export const getMinSquaredNumber = arr => {
    let emptyArray = new Array();
    if (!Array.isArray(arr)) {
        return null
    }
    if (arr === emptyArray) {
        return null
    }
    const absNumber = arr.Math.abs(arr);
    const minNumber = absNumber.Math.min(arr);
    const mapingNumber = minNumber.map(arr);
    return mapingNumber
}