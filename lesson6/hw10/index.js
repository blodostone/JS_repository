let n = 3;

let number = [1, 2, 3, 4, 5];
let myObject = {
    test: function getSubArray(arr) {
        return arr <= n;
    }
};

let filtered = number.filter(
    function getSubArray(arr) {
        return this.test(arr);
    }, myObject
);

console.log(filtered);