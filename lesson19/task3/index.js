export function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.sayHi = function() {
    console.log(`Hi, I am ${this.name}`);
}
User.prototype.requestNewPhoto = function() {
    console.log(`New photo request was sent for ${this.name}`);
}
User.prototype.setAge = function(age) {
    this.age = age;
    if (age >= 25) {
        console.log(`New photo request was sent for ${this.name}`);
    } else if (age >= 0) {
        return age;
    } else if (age < 0) {
        return false;
    }
}

const user1 = new User('John', 17);
const user2 = new User('Bob', 20);
const user3 = new User('Donald', -20);