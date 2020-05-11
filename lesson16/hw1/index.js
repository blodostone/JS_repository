export function createArrayOfFunctions(num) {
    if (typeof Number !== num) {
        return null;
    }
    for (let g = 0; g < num; g++) {
        num.push(function() {
            return g;
        })
    }
    return num;

}

const result = createArrayOfFunctions();
console.log(result);