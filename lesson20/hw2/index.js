export class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get sessionId() {
        return this._sessionId;
    }
}
export class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users);
    }
    get users() {
        return this._users;
    }
    getUserNames() {
        return this._users.map(({ name }) => name);
    }
    getUserIds() {
        return this._users.map(({ id }) => id);
    }
    getUserNameById(id) {
        const user = this._users.find((user) => user.id === id);
        return user ? user.name : null;
    }
}

let user1 = new User('465732', "Adam", '1');
let user2 = new User('5421', "Dennis", '2');
let usersConcat = [user1, user2];

let getRepUsers = new UserRepository(usersConcat);
console.log(getRepUsers);