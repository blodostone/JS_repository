const obj1 = {
    name: 'Tom',
    age: 17,
};
const obj2 = {
    name: 'Bob',
    age: 17,
};
const obj3 = {
    name: 'Bob',
    age: 17,
    student: false
};
const obj4 = {
    name: 'Tom',
    age: 17,
};


function compareObjects(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    return false;
}

function compareObjects(obj2, obj3) {
    if (obj2 === obj3) {
        return true;
    }
    return false;
}

function compareObjects(obj1, obj4) {
    if (obj1 == obj4) {
        return true;
    }
    return false;
}



console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj2, obj3));
console.log(compareObjects(obj1, obj4));