function createArrayOfFunction(num) {
    if (!Number(num)) {
        return null;
    }
    for (let g = 0; g < num; g++) {
        num.push(function() {
            return g;
        })
    }
    return num;

}

const result = createArrayOfFunction();
console.log(result);