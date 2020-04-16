function getEvenOdd(choice) {
    if (choice % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

let result = getEvenOdd(10);
console.log(result);