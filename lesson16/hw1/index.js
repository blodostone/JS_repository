export function createArrayOfFunctions(num) {
    let arr = [];
    if (typeof Number !== num) {
        return null;
    }
    for (let g = 0; g < num; g++) {
        arr.push(function() {
            return g;
        })
    }
    return arr;

}

const result = createArrayOfFunctions();
console.log(result);