const sortDesc = numbers => {
    numbers.sort((a, b) => b - a);


    return numbers;
}

const arr = [2, 4, 30, 1, 5, 21];

console.log(sortDesc(arr));