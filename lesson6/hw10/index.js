// let n = 3;
// let number = [1, 2, 3, 4, 5];

// number.forEach(getSubArray => {

//     }

//     function getSubArray(arr) {

//     })


const numbers = [1, 2, 3, 4, 5];

function getSubArray(arr, n) {

    let num = [];

    arr.forEach(function(a, index) {
        if (index < n) {
            num.push(a)
        }
    });
    return num;
}
const subArray = getSubArray(numbers, 3)
console.log(subArray)




function getSubArray(arr) {

    return [arr[0], arr[1]]
}

let number = [11, 4, 8, 3, 5];

const arrayAnswer = getSubArray(number);

console.log(arrayAnswer);