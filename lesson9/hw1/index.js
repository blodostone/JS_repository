const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
    'customer-id-3': {
        name: 'Andry',
        age: 19
    },
}

const getCustomersList = (mans) => {
    return Object.entries(mans)
        .map(([id, customer]) => ({ id, ...customer }))
        .sort((a, b) => a.age - b.age);
}
const result = getCustomersList(customers);
console.log(result)

// const getCustomersList1 = (mans, keys, values) =>
//     Object.assign({}, mans, {
//         [keys]: values
//     })
//     // Object.entries(mans)
//     //     .filter(users => users[1] >= 18)
//     //     .map(users => users[0]);
// const result1 = getCustomersList1(customers['customer-id-2'], 'id', 'customer-id-2');
// console.log(result1)

// const getCustomersList2 = (mans, keys, values) =>
//     Object.assign({}, mans, {
//         [keys]: values
//     })
//     // Object.entries(mans)
//     //     .filter(users => users[1] >= 18)
//     //     .map(users => users[0]);
// const result2 = getCustomersList2(customers['customer-id-3'], 'id', 'customer-id-3');
// console.log(result2)



// const addPropertyV3 = (obj, key, value) => {
//     const computedProperty3 = Object.assign({}, obj, {
//         [key]: value
//     })
//     return computedProperty3;
// }
// const result3 = addPropertyV1(user, "currency", 'USD');
// console.log(result3)