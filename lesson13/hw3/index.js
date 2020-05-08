export const squareArray = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }

    const result = numbers.map(num => num * num);


    return result;
}

export const reverseArray = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    const copy = numbers.slice();

    copy.reverse((a, b) => b - a);

    return copy;
}

export const increaseEvenEl = (arr, delta) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    let sum = [];
    const evenElr = arr.map(item => {
        return item + delta;
    });

    return evenElr;
}

export const cloneArr = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    }
    const newArray = numbers.slice();

    return newArray;

}

export const buildObject = (keysList, valuesList) => {
    const newObject = keysList.reduce((acc, n, i) => (acc[n] = valuesList[i], acc), {})
    return newObject;
}

export const pickProps = (obj, arr) => {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in obj) {
            result[arr[i]] = obj[arr[i]];
        }
    }
    return result;
};

export const mergeObjectsV1 = (obj1, obj2) => {
    const assignObject1 = Object.assign({}, obj1, obj2);
    return assignObject1;
}

export const getKeys = user => {
    const keyForArray = Object.keys(user)

    keyForArray.forEach(el => {
        console.log(el);
    })
}

export function findDivCount(a, b, n) {
    let result = 0;
    for (let g = a; g <= b; g++) {
        if (g % n === 0) {
            result += 1;
        }
    }
    return result;
};

export function increaser(a, index) {
    if (a > index) {
        return a + index;
    } else {
        return a;
    }
};

export function compareSums(a, b, c, d) {
    if ([a, b] > [c, d]) {
        return true;
    } else {
        return false;
    }
};

export function getPrimes(n) {
    outer: for (let i = 2; i <= n; i++) {
        for (let g = 2; g * g <= i; g++) {
            if (i % g == 0) {
                continue outer;
            }
        }
        console.log(i);
    }
}