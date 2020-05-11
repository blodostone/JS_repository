export function createArrayOfFunctions(num) {
    let arr = [];
    if (arr === undefined) {
        return [];
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