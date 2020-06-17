export const getUsersBlogs = async userList => {
    const requests = userList.map(userUrl => fetch(`https://api.github.com/users/${userUrl}`)
        .then(response => response.json()));

    const getBlogs = await Promise.all(requests);
    const persons = getBlogs.map(persons => persons.blog)
    return persons;
}
const result = getUsersBlogs(['Telegram', 'Git', 'Slack']);

// console.log(result);