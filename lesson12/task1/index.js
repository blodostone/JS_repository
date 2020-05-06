const calc = exp => {
    const [a, operator, b] = exp.split(" ");
    let result;

    switch (operator) {
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        case '+':
            result = Number(a) + +b;
            break;
        case '-':
            result = a - b;
    }
    return `${exp} = ${result}`;
};

console.log(calc('6 * 4'));