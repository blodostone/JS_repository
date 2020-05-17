// const users = {
//     'John Doe': 19,
//     'Tom': 17,
//     'Bob': 18,
// }


// const getAdults = mans => {
//     const newAdults = mans.filter(persons => );
//     return newAdults;
// }

// const result = getAdults(users)
// console.log(result)


// function getAdults(users) {
//     let result = {};
//     for (let g in users) {
//         if (users[g] >= 18) {
//             result[g] = users[g];
//         }
//     }
//     return result;
// }

// console.log(getAdults(users));

const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', '18'];

function buildObject(keysList, valuesList) {
    let obj = {};
    for (let i = 0; i <= keysList.length; i++) {
        for (let j = 0; j <= valuesList.length; j++) {
            if (i == j) {
                obj[keysList[i]] = valuesList[j];
                obj[keysList[i + 1]] = valuesList[j + 1];
                obj[keysList[i + 2]] = valuesList[j + 2];
            }
        }
        return obj;
    }
}