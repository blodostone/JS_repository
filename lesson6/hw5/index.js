const number = [2, 6, 10, 14, 18]

function reverseArray(arr) {
    let result = 0;
    if (!Array.isArray(arr)) {
        return null;
    }
    const reversed = arr.reverse();
    result = reversed;

    return result;
}

const reverseAnwser = reverseArray(number);

console.log(reverseAnwser);