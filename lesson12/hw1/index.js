const reverseString = string => {
    if (typeof string !== 'string') {
        return null;
    }
    return [...string].reverse().join('');
}

// function reverseString(string) {
//     if (typeof string !== 'string') {
//         return null;
//     }
//     return string.split("").reverse().join("");

// }

const result = reverseString('AbcdeF');

console.log(result);