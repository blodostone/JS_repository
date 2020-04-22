let number = [1, 2, 3, 4, 5];
let myObject = {
    test: function getSubArray(arr) {
        return arr < 4;
    }
};

let filtered = number.filter(
    function getSubArray(arr) {
        return this.test(arr);
    }, myObject
);

console.log(filtered);