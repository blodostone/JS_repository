export function createCalculator() {

    let memory = 0;

    function add(plus) {
        memory += plus;
    }

    function decrease(minus) {
        memory -= minus;
    }

    function reset() {
        memory = 0;
    }

    function getMemo() {
        return memory;
    }

    return {
        add,
        decrease,
        reset,
        getMemo,
    }

}

// const counter1 = createCalculator();
// const counter2 = createCalculator();
// const counter3 = createCalculator();
// const counter4 = createCalculator();