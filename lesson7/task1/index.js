const getSpecialNumbers = numbers => {

    const result = numbers.filter(num => num % 3 === 0);

    //     const result = numbers.filter(num => {
    //         return num % 3 === 0;
    // });

    // const result = numbers.filter(num => {
    //     if (num % 3 == 0) {
    //         return true
    //     }
    //     return false
    // });


    // numbers.forEach(num => {
    //     if (num % 3 == 0) {
    //         specialNumber.push(num);
    //     }
    // });

    // for (let g = 0; g < numbers.length; g++) {
    //     if (numbers[g] % 3 == 0) {
    //         specialNumber.push(numbers[g]);
    //     }
    // }
    // return specialNumber;

    return result;
}

const arr = [1, 2, 3, 4, 5, 6]

console.log(getSpecialNumbers(arr));