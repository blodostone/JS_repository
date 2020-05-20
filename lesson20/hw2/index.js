export class User {
    constructor(id, name, sessionId) {
        this.id = id;
        this.name = name;
        this.sessionId = sessionId;
    }
    get id() {
        return this.id;
    }
    get name() {
        return this.name;
    }
    get sessionId() {
        return this.sessionId;
    }
}
export class UserRepository {
    constructor(users) {
        this.users = Object.freeze(users);
    }
    get users() {
        return this.users;
    }
    getUserNames() {
        return this.users.map(({ name }) => name);
    }
    getUserIds() {
        return this.users.map(({ id }) => id);
    }
    getUserNameById(id) {
        const user = this.users.find((user) => user.id === id);
        return user ? user.name : null;
    }
}

let user1 = new User('465732', "Adam", '1');
let user2 = new User('5421', "Dennis", '2');
let usersConcat = [user1, user2];

let getRepUsers = new UserRepository(usersConcat);
console.log(getRepUsers);