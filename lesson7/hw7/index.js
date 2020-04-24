// const filterItems = (people, text) => {
//     const dfgdfg = .filter


const filterItems = (people, text) => {
    const filterPeople = people.filter(name => {
        return name.includes(text) && name.length > 5;
    });
    return filterPeople;

}


// const filterItems = (people) => arr.filter((item) =>
//     item.toLowerCase().indexOf(people.toLowerCase()) > -1
// );


const arr = ['Aleksandr', 'Anatoliy', 'Marina', 'Kate', 'Bob', 'Tom'];
console.log(filterItems(arr, 'a'));