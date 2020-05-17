export const vehicle = {
    name: 'Argo',
    move() {
        console.log(`${name} is moving`);
    },
    stop() {
        console.log(`${name} stopped`);
    }
};

export const ship = {
    startMachine() {
        console.log(`${name} lifting anchor up`)
    },
    stopMachine() {
        console.log(`${name} lifting anchor down`)
    },
    __proto__: vehicle
};

// console.log(ship);