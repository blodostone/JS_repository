//перебрать массив для того чтобы убрать все лишнее
//установить лимит на знаки после запятой(2)
// к каждому числу добавить знак $

const cleanTransactionList = (money) => {
    // let arr = new Array();
    // const maping = money.map(sum => sum);
    const cleaningTransaction = money.filter(el => isFinite(el));
    const mapingTransaction = cleaningTransaction.map((el) => `${'$'.concat(el)}`);
    // const mapingTransaction = cleaningTransaction.map(sum => sum.concat('$' + money));
    return mapingTransaction;
}

const result = cleanTransactionList(['1.9', '16.4', '17', '1 dollar']);

console.log(result);


//toFixed
//isFinite