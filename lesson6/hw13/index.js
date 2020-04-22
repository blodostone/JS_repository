function uniqueCount(arr) {
    let result = 1;
    let unique_choice = true;
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let g = 1; g < arr.length; g++) {
        unique_choice = true;

        for (let i = g - 1; i >= 0; i--) {
            if (arr[g] == arr[i]) {
                unique_choice = false;
            }
        }
        if (unique_choice) {
            result++;
        }
    }
    return result;
}

const uniqueAnswer = uniqueCount([1, 4, 1, 8, 3, 4, 8, 8]);
console.log(uniqueAnswer);