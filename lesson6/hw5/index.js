function reverseArray(arr) {
    let result = [];
    if (!Array.isArray(arr)) {
        return null;
    }
    const [a, b, ...rest] = arr;

    return [...rest, b, a];
}

const number = [2, 6, 10, 14, 18];
const switchArray = reverseArray(number);

console.log(switchArray);
console.log(number);