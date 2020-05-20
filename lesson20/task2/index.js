export class Vehicle {
    constructor(name, numberOfWheels) {
        (this.numberOfWheels = numberOfWheels), (this.name = name);
    }
    move() {
        console.log(`${this.name} is moving`);
    }
    stop() {
        console.log(`${this.name} stopped`);
    }
}
export class Ship extends Vehicle {
    constructor(name, maxSpeed) {
        max(name, false);
        this.maxSpeed = maxSpeed;
    }
    move() {
        console.log(`${this.name} lifting anchor up`)
        max.move();
    }
    stop() {
        console.log(`${this.name} lifting anchor down`)
        max.stop();
    }
};

const ship1 = new Ship('Argo', 20);