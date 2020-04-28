const userData = {
    name: 'Sam'
}


const addPropertyV1 = (userData, userId) => {
    const firstProperty = userData.id = userId;
    return firstProperty;
}
const result = addPropertyV1(userData, 2345);
console.log(result);




const addPropertyV2 = (userData, userId) => {
    const secondProperty = Object.assign(userData, { id: userId });
    return secondProperty;
}
const result1 = addPropertyV2(userData, 2345);
console.log(result1);

const addPropertyV3 = (userData2, userId) => {
    const thirdProperty = Object.assign(userData2, { id: userId });
    return thirdProperty;
}
const result2 = addPropertyV3(userData2, 2345);
console.log(result2);