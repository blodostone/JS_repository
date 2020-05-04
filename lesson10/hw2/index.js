// 1. Создать ф-цию `getRandomNumbers`, которая принимает нужные аргументы и возвращает массив
// 2. Вернуть `null`, если задан неверный промежуток
// 3. Вернуть `null`, если в промежутке нету целых чисел
// 4. Создать массив нужной длинны
// 5. Заполнить его случайными числами по формуле `(from + (to - from) * Math.random())` в цикле `.map`
// 6. Округлить все значение в нужную сторону в еще одном цикле `.map`



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
    let arr = new Array(len).fill();
    if (start > end) {
        return null
    }
    const getMathCeil = end - start < 1 && Math.ceil(end) === Math.ceil(start);
    if (getMathCeil) {
        return null;
    }
    const getRandomNum = arr.map(el => Math.random(el) * (end - start) + start);
    const getMathTrunc = getRandomNum.map(el => Math.trunc(el));

    return getMathTrunc;
}

const result = getRandomNumbers(2, 8, 12);

// console.log(result)