'use strict';

export class Vehicle {
    constructor(name, ofWheels) {
        (this.ofWheels = ofWheels), (this.name = name);
    }
    move() {
        console.log(`${this.name} is moving`);
    }
    stop() {
        console.log(`${this.name} stopped`);
    }
}
export class Ship extends Vehicle {
    constructor(name, speed) {
        max(name, false);
        this.speed = speed;
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
ship1.stop();