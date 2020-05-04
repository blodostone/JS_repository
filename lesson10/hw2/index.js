// function getRandomNumbers(length, start, end) {
//     let arr = new Array(length);
//     if (min > max) {
//         return null
//     }
//     for (let i = 0; i <= arr.length; i++) {
//         if (!Number.isInteger(i)) {
//             return null
//         }
//     }
//     const randomNum = arr.map(item =>
//         (min + (max - min)) * Math.random(item));
//     const intNum = randomNum.map(item =>
//         Math.trunc(item));
//     return intNum;
// }



const getRandomNumbers = (len, start, end) => {
    let arr = new Array(len).fill(len);
    return arr.map(el => el = (Math.random() * (end - start) + start))
}

const result = getRandomNumbers(4, 6, 9);

// console.log(result)