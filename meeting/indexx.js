// Что принимает и что выдает функция
//input: number 1;
//output: nothing;

// => 10
//to console 2, 3, 5, 7

// 1. Прошлись по всем числам от 1 до 10;
// 2. Проверить простое или нет m (искали делитель);
//      2.1 Пройтись от 2 до m - 1
//      2.2 Проверить делиться без остатка m на каждое
// 3. Вывели в консоль подходящее;

// input: 1 number
// output: true / false
// 6
function isPrime(m) {
    for (let i = 2; i < m; i += 1) { // 2..5
        // console.log(i);
        if (m % i === 0) {
            return false;
        }
        return true;
    }
}

// console.log(isPrime(9));

function getPrimes(n) {
    for (let i = 2; i <= n; i += 1) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

console.log(getPrimes(7));