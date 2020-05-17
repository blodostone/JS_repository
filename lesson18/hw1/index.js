export function saveCalls(num) {
    const calls = [];

    function withMemory(...arguments) {
        calls.push(arguments);
        return num.apply(this, arguments);
    }
    withMemory.calls = calls;
    return withMemory;
}