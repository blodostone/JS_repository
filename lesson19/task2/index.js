const vehicle = {
    name: 'Argo',
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    }
};
const ship = {
    startMachine() {
        console.log(`${this.name} lifting anchor up`)
        this.move();
    },
    stopMachine() {
        console.log(`${this.name} lifting anchor down`)
        this.stop();
    },
    // __proto__: vehicle
};

Object.setPrototypeOf(ship, vehicle);


export function getOwnProps() {
    for (let prop in ship) {
        if (ship.hasOwnProperty(prop)) {
            console.log(prop);
        }
    }
}