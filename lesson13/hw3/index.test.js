import { squareArray, reverseArray, increaseEvenEl, cloneArr, buildObject, pickProps, mergeObjectsV1, getKeys, getPrimes, compareSums, increaser, findDivCount } from './index.js'

it('should get reverse array', () => {
    const result = reverseArray([2, 4, 30, 1, 5, 21]);

    expect(result).toEqual([21, 5, 1, 30, 4, 2]);
});

it('should get squared array', () => {
    const result = squareArray([1, 2, 3, 4, 5, 6]);

    expect(result).toEqual([1, 4, 9, 16, 25, 36]);
});

it('should get increase even elements for array', () => {
    const result = increaseEvenEl([2, 5, 6, 8, 11, 9, 4]);

    expect(result).toEqual([22, 25, 26, 28, 31, 29, 24]);
});

it('should get clone array', () => {
    const result = cloneArr([2, 5, 6, 8, 11, 9, 4]);

    expect(result).toEqual([2, 5, 6, 8, 11, 9, 4]);
});

it('should build new object', () => {
    const result = buildObject(keysList, valuesList);

    expect(result).toEqual({ name: "Bob", addres: "Ukraine", age: 34 });
});

it('should build new object', () => {
    const result = pickProps(obj, arr);

    expect(result).toEqual({ b: 2, d: 4 });
});

it('should merge object', () => {
    const result = mergeObjectsV1(obj1, obj2);

    expect(result).toEqual({ name: "Bob", age: 17, student: false });
});

it('should merge object', () => {
    const result = getKeys(user);

    expect(result).toEqual(["name", "age", "interest"]);
});

//getPrimes, compareSums, increaser, findDivCount

it('should get simple number', () => {
    const result = getPrimes(9);

    expect(result).toEqual(9);
});

it('should get simple number', () => {
    const result = compareSums(12, 13, 6, 5);

    expect(result).toEqual(false);
});

it('should get simple number', () => {
    const result = increaser(12, 6);

    expect(result).toEqual(18);
});

it('should get simple number', () => {
    const result = findDivCount(1, 12, 2);

    expect(result).toEqual(6);
});