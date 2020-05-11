export function createArrayOfFunctions(num) {
    let arr = [];
    let emptyArray = new Array();
    if (arr === undefined) {
        return emptyArray;
    }
    if (!Number(num)) {
        return null;
    }
    for (let g = 0; g < num; g++) {
        arr[g] = (function() {
            return g;
        });
    }
    return arr;

}

// const result = createArrayOfFunctions(7);
// console.log(result);