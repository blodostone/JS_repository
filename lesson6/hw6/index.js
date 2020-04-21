function cloneArr(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let clone = arr.slice(0);
    return clone;
}