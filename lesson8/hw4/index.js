const userData = {
    name: 'Sam'
}


const addPropertyV1 = (userData, userId) => {
    userData.id = userId;
    return userData;
}
const result = addPropertyV1(userData, 2345);
console.log(result);





const addPropertyV2 = (userData, userId) => {
    const secondProperty = Object.assign(userData, { id: userId });
    return secondProperty;
}
const result2 = addPropertyV2(userData, 2345);
console.log(result2);


const addPropertyV3 = (userData, userId) => {
    const thirdProperty = Object.assign({}, userData, { id: userId });
    return thirdProperty;
}
const result3 = addPropertyV3(userData, 2345);
console.log(result3);


const addPropertyV4 = (userData, userId) => {
    const firstProperty = {...userData, id: userId };
    return firstProperty;

}
const result4 = addPropertyV4(userData, 2345);
console.log(result4);