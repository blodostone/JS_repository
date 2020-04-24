const filterItems = (people) => arr.filter((item) =>
    item.toLowerCase().indexOf(people.toLowerCase()) > -1
);


const arr = ['Kolya', 'Tolya', 'Marina', 'Kate'];
const text = ('ya');

console.log(filterItems(text));

console.log(arr);