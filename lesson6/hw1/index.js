function createEmptyArray(len) {
    let emptyArray = [len.length, len[0], len[len.length - 1]];
    return emptyArray;
}

const array = createEmptyArray([, , , , , ]);

console.log(array);