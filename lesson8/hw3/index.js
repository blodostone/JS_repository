const user = {
    name: 'John Doe',
    age: 17,
    interest: 'football',
}

const getKeys = user => {
    const keyForArray = Object.keys(user)

    keyForArray.forEach(el => {
        console.log(el);
    })
}

console.log(Object.keys(user));