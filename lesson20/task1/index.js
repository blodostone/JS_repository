export class User {
    createUser(name, age) {
        this.name = name;
        this.age = age;
    }


    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }
    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    }
    setAge(age) {
        this.age = age;
        if (age >= 25) {
            console.log(`New photo request was sent for ${this.name}`);
        } else if (age >= 0) {
            return age;
        } else if (age < 0) {
            return false;
        }
    }

    static createEmpty() {
        return new User("", null);
    }
}

const user1 = new User('John', 17);
const user2 = new User('Bob', 20);
const user3 = new User('Donald', -20);

user2.setAge(20);