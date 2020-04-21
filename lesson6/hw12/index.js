function removeDuplicates(array) {
    const sum = [];
    if (!Array.isArray(array)) {
        return null;
    }
    const removeArray = [...new Set(array)]

    return removeArray;
}

const number = [1, 2, 3, 1, 4, 3, 5];
const result = removeDuplicates(number);

console.log(result);
console.log(number);