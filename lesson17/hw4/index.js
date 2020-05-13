 export const user = {
     firstName: 'John',
     lastName: 'Doe',
     getFullName(firstName, lastName) {
         return (`${this.firstName} ${this.lastName}`);
     },
     setFullName(name) {
         this.firstName = name.split(' ')[0];
         this.lastName = name.split(' ')[1];
     }

 };

 user.getFullName('John Doe');