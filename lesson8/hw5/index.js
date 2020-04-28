const user = {
    value: 170,
}




const addPropertyV1 = (obj, key, value) => {
    const computedProperty1 = obj
    return computedProperty1;
}
const result = addPropertyV1(user, "currency", 'USD');
// console.log(result);


const addPropertyV2 = (obj, key, value) => {
    const computedProperty2 = Object.assign(obj, {
        [key]: value
    });
    return computedProperty2;
}
const result2 = addPropertyV2(user, "currency", 'USD');
console.log(result2)


const addPropertyV3 = (obj, key, value) => {
    const computedProperty3 = Object.assign({}, obj, {
        [key]: value
    })
    return computedProperty3;
}
const result3 = addPropertyV1(user, "currency", 'USD');
console.log(result3)



// const addPropertyV4 = (obj, key, value) => {
//     const computedProperty4 = {},
//         obj, { key: value };
//     return computedProperty4;
// }
// const result4 = addPropertyV1(user, "currency", 'USD');

// console.log(result4);