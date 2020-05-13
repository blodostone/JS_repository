 export const user = {
     firstName: 'John',
     lastName: 'Doe',
     getFullName(firstName, lastName) {
         return (`${this.firstName} ${this.lastName}`);
     },
     setFullName(name) {
         this.firstName = name.split()
         this.lastName = name.split()
     }

 }