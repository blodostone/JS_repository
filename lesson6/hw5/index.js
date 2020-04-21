const number = [2, 6, 10, 14, 18]

function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    const reversed = arr.reverse();

    console.log(reversed)
}

const reverseAnwser = reverseArray(number);

console.log(reverseAnwser);