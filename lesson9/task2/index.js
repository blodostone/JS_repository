const user = {
    name: 'Tom',
    key: 17,
};

const copyObj = man => {
    const copyUser = Object.assign({}, man);
    return copyUser;
}

console.log(user);