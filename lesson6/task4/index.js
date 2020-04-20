const number = [2, 6, 10, 14, 18]

function swap(arr) {
    const [start, ...rest] = arr;

    return [...rest, start];
}

console.log(swap(number));