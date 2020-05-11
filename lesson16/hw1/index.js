function createArrayOfFunctions(num) {
    let arr = [];
    if (arr === undefined) {
        return null;
    }
    if (typeof Number !== Number(num)) {
        return null;
    }
    for (let g = 0; g < num; g++) {
        arr.push(function() {
            return g;
        })
    }
    return arr;

}

const result = createArrayOfFunctions(7);
console.log(result);