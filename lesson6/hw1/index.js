function createEmptyArray(len) {
    let emptyArray = [];
    for (let g = 0; g <= len.length; g++) {
        emptyArray.push();
    }
    return emptyArray;
}

const arrayEmpty = createEmptyArray([]);

console.log(arrayEmpty);