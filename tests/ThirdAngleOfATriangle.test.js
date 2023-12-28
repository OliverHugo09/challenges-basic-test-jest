// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.
// https://en.wikipedia.org/wiki/Triangle

const otherAngle = (a, b) => {
    if (a > 0 && b > 0)
        return 180 - (a + b);
}

describe("Tests", () => {
    it("test", () => {
        expect(otherAngle(30, 60)).toBe(90);
        expect(otherAngle(60, 60)).toBe(60);
        expect(otherAngle(43, 78)).toBe(59);
        expect(otherAngle(10, 20)).toBe(150);
    });
});