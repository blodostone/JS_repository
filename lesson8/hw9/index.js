const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
}


const pickProps = (mainobj, arr) => {
    const chaiceArr = Object.values(mainobj = arr);
    return chaiceArr;
}

const result = pickProps(obj, [2, 4]);

console.log(result);