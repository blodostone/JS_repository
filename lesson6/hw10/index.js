// let n = 3;

// let number = [1, 2, 3, 4, 5];
// let myObject = {
//     test: function getSubArray(arr) {
//         return arr <= n;
//     }
// };

// let result = number.filter(
//     function getSubArray(arr) {
//         return this.test(arr);
//     }, myObject
// );

// console.log(result);

let n = 3;

let thirdArray = [1, 2, 3, 4, 5].filter(function getSubArray(arr) {
    return arr <= n;
})

console.log(thirdArray);


function getSubArray(arr) {

    return [arr[0], arr[1]]
}

let number = [11, 4, 8, 3, 5];

const arrayAnswer = getSubArray(number);

console.log(arrayAnswer);