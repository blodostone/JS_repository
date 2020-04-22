// function includes(arr, b) {
//     let result = 0;
//     for (let g = 0; g <= arr.length; g++) {
//         if (arr[g] === b) {
//             result = true;
//         } else {
//             result = false;
//         }
//     }
//     return result
// }

// const displaysResult = includes([1, 4, 8, 3], 3);
// console.log(displaysResult);

function includes(arr, b) {

    let choice = false;
    arr.forEach(function(value) {
        if (value == b) {
            choice = true;
        }

    });
    return choice;
}

const number = [1, 4, 8, 3];
const displaysResult = includes(number, 3)

console.log(displaysResult);