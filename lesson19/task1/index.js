export const vehicle = {
    name: 'Argo',
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    }
};

export const ship = {
    startMachine() {
        console.log(`${this.name} lifting anchor up`)
    },
    stopMachine() {
        console.log(`${this.name} lifting anchor down`)
    },
    __proto__: vehicle
};

// console.log(ship);