// This is about multiplying a given number by eight if it is an even number and by nine otherwise.

const simpleMultiplication = (num) => {

    if (num % 2 === 0) {
        return num * 8
    }
    return num * 9

};

test('Testing for fixed tests', () => {
    expect(simpleMultiplication(2)).toBe(16);
    expect(simpleMultiplication(1)).toBe(9);
    expect(simpleMultiplication(8)).toBe(64);
    expect(simpleMultiplication(4)).toBe(32);
    expect(simpleMultiplication(5)).toBe(45);
});
