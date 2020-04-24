// const filterItems = (people, text) => {
//     const dfgdfg = .filter


const filterNames = (arr, text) => {
    const filterPeople = arr.filter(name => {
        return name.includes(text) && name.length > 5;
    });
    return filterPeople;

}


// const filterItems = (people) => arr.filter((item) =>
//     item.toLowerCase().indexOf(people.toLowerCase()) > -1
// );


const arr = ['Aleksandr', 'Anatoliy', 'Marina', 'Kate', 'Bob', 'Tom'];
console.log(filterNames(arr, 'a'));