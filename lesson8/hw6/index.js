const obj1 = {
    name: 'Tom',
    age: 17,
};

const obj2 = {
    name: 'Bob',
    student: false
};

const mergeObjectsV1 = (obj1, obj2) => {
    const assignObject1 = Object.assign({}, obj1, obj2);
    return assignObject1;
}

const result = mergeObjectsV1(obj1, obj2);
console.log(result);

const mergeObjectsV2 = (obj2, obj1) => {
    const assignObject2 = Object.assign({}, obj2, obj1);
    return assignObject2;
}

const resulted = mergeObjectsV2(obj2, obj1);
console.log(resulted);

const mergeObjectsV3 = (obj1, obj2) => {
    const assignObject3 = {...obj1, ...obj2 };
    return assignObject3;
}
const result3 = mergeObjectsV3(obj1, obj2);
console.log(result3);

const mergeObjectsV4 = (obj2, obj1) => {
    const assignObject4 = {...obj2, ...obj1 };
    return assignObject4;
}
const result4 = mergeObjectsV4(obj2, obj1);
console.log(result4);