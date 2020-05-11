let memory = 0;

export function add(plus) {
    memory += plus;
}

export function decrease(minus) {
    memory -= minus;
}

export function reset() {
    memory = 0;
}

export function getMemo() {
    return memory;
}