const obj1 = {
    name: 'Tom',
    age: 17,
};

const obj2 = {
    name: 'Bob',
    student: false
};

const mergeObjectsV1 = (obj1, obj2) => {
    const assignObject1 = Object.assign(obj1, obj2);
    console.log(assignObject1);
}
console.log();

const mergeObjectsV2 = (obj1, obj2) => {
        const assignObject2 = Object.assign(obj2, obj1);
    }
    // console.log(obj2);

const mergeObjectsV3 = (obj1, obj2) => {
        const assignObject3 = obj2.concat(obj1);
    }
    // console.log(obj2);

const mergeObjectsV4 = (obj1, obj2) => {
    const assignObject4 = obj1.concat(obj2);
    // return assignObject4;
    console.log(assignObject4);
}
console.log(mergeObjectsV4);