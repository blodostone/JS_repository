const getMessagesForBestStudents = (allStudents, bestStudents) => {
    const passedStudents = allStudents
        .filter(name => !bestStudents.includes(name));

    const messagers = passedStudents
        .map(name => 'Good job, ' + name);

    return messagers;

}
const allStudents = ['Ann', 'Tom', 'Bob', 'Kate'];
const bestStudents = ['Tom', 'Bob'];

console.log(getMessagesForBestStudents(allStudents, bestStudents));

console.log(allStudents);