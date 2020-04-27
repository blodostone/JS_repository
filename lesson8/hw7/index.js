const obj1 = {
    name: 'Tom',
    age: 17
};
const obj2 = {
    name: 'Bob',
    age: 17
};
const obj3 = {
    name: 'Bob',
    age: 17,
    student: false
};
const obj4 = {
    name: 'Tom',
    age: 17
};


function compareObjects(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function compareObjects(obj2, obj3) {
    return JSON.stringify(obj2) === JSON.stringify(obj3);
}

function compareObjects(obj1, obj4) {
    return JSON.stringify(obj1) === JSON.stringify(obj4);
}

console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj2, obj3));
console.log(compareObjects(obj1, obj4));