let number = [1, 2, 3, 4, 5];
let myObject = {
    test: function(arr) {
        return arr < 4;
    }
};

let filtered = number.filter(
    function(arr) {
        return this.test(arr);
    }, myObject
);

console.log(filtered);