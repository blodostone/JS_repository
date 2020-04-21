const number = ['', '', '', '', '']


function createEmptyArray(len) {
    let emptyArray = [];
    for (let g = 0; g < len.length; g++) {
        emptyArray.push(g);
    }
    return emptyArray;
}

const arrayEmpty = createEmptyArray(number);

console.log(arrayEmpty);