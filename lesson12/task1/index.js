const calc = exp => {
    const [a, operator, b] = exp.split(" ");
    let result;

    switch (operator) {
        case '+':
            result = Number(a) + +b;
            break;
        case '-':
            result = a - +b;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;

    }
    return `${exp} = ${result}`;
};

console.log(calc('1 + 2'));