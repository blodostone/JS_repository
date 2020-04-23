const sum = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }

    const reduceResult = numbers.reduce(function(acc, num) {
        return acc + num;
    }, 0);
    return reduceResult;
}


const arr = [2, 5, 6, 8, 11, 9, 4];

console.log(sum(arr));

console.log(arr)