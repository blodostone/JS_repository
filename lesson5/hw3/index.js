function increaser(a, index) {
    for (; a * index; a++) {

        if (a > index) {
            return a;
        } else if (a <= index) {
            return false;
        }
    }
    return a;
}

console.log(increaser(12, 6));