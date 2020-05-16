'use strict';

export const event = {
    guests: [
        { name: 'John', age: 18, email: 'example@sever.com' },
    ],
    message: 'Welcome to the party!',
    getInvitations() {
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({ name, email }) => ({
                text: `Dear ${name}! ${this.message}`,
                email
            }));
    }
}