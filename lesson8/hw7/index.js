const obj1 = {
    name: 'Tom',
    age: 17
};
const obj2 = {
    name: 'Tom',
    age: 17
};

function compareObjects(obj1, obj2) {
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
        return true;
    } else
        return false;
}
const result = compareObjects(obj1, obj2)
console.log(result)