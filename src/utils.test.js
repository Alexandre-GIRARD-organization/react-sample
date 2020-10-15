import { addNumber } from './utils';

describe("add function", () => {
    it('1 and 4', () => {
        expect(addNumber(1, 4)).toBe(5);
    })

    it('1 and 5', () => {
        expect(addNumber(1, 5)).toBe(6);
    })
});