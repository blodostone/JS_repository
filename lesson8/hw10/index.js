const users = {
    'John Doe': 19,
    'Tom': 17,
    'Bob': 18,
}


// const getAdults = mans => {
//     const newAdults = mans.filter(persons => );
//     return newAdults;
// }

// const result = getAdults(users)
// console.log(result)


function getAdults(users) {
    let result = {};
    for (let g in users) {
        if (users[g] >= 18) {
            result[g] = users[g];
        }
    }
    return result;
}

console.log(getAdults(users));