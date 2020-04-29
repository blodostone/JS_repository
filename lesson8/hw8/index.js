const keys = ['name', 'addres', 'age'];
const values = ['Bob', 'Ukraine', 34]

const buildObject = (keysList, valuesList) => {
    const newObject = keysList.reduce((acc, n, i) => (acc[n] = valuesList[i], acc), {})
    return newObject;
}

const result = buildObject(keys, values);
console.log(result);