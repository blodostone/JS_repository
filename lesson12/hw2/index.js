//перебрать массив для того чтобы убрать все лишнее
//установить лимит на знаки после запятой(2)
// к каждому числу добавить знак $

const cleanTransactionsList = (money) => {
    // let arr = new Array();
    // const maping = money.map(sum => sum);
    const cleaningTransaction = money.filter(el => isFinite(el));
    const mapingTransaction = cleaningTransaction.map((el) => `${'$'.concat(el)}`);
    const formatTransaction = mapingTransaction.map((el) => el.toFixed(2));
    // const mapingTransaction = cleaningTransaction.map(sum => sum.concat('$' + money));
    return formatTransaction;
}

const result = cleanTransactionsList(['1.9', '16.4', '17', '1 dollar']);

// console.log(result);


//toFixed
//isFinite