var a = 17;

if (a) {

    var a = 1;

    console.log(a);

    if (false) {
        var a;
    }

}

console.log(a);