import { calc } from './calculator.js'

it('check operation', () => {
    const result = calc(5, '+', 5);

    expect(result).toEqual(10)
});