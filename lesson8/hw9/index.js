const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
}


// const pickProps = (mainobj, arr) => {
//     const chaiceArr = Object.keys(mainobj = arr);
//     return chaiceArr;
// }

// const result = pickProps(obj, ['b', 'd']);

// console.log(result);

const arr = ['b', 'd'];
const pickProps = (obj, arr) => {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in obj) {
            result[arr[i]] = obj[arr[i]];
        }
    }
    return result;
};
const result = pickProps(obj, arr)
console.log(result)