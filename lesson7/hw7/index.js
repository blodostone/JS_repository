// const filterItems = (people, text) => {
//     const dfgdfg = .filter


const filterItems = (people, text) => {
    const filterPeople = people
        .filter(name => name.includes(text));




    return filterPeople;

}


// const filterItems = (people) => arr.filter((item) =>
//     item.toLowerCase().indexOf(people.toLowerCase()) > -1
// );


const arr = ['Kolya', 'Tolya', 'Marina', 'Kate'];
const text = ('ya');

console.log(filterItems(arr, text));

// console.log(arr);