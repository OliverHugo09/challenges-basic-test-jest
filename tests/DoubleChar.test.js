// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

const doubleChar = (str) => {

    let double = "";

    for (let i = 0; i < str.length; i++) {
        double += str[i].repeat(2);
    }
    return double
}

// Test de JEST
describe('doubleChar', () => {
    it('works for some examples', () => {
        expect(doubleChar("abcd")).toBe("aabbccdd");
        expect(doubleChar("Adidas")).toBe("AAddiiddaass");
        expect(doubleChar("1337")).toBe("11333377");
        expect(doubleChar("illuminati")).toBe("iilllluummiinnaattii");
        expect(doubleChar("123456")).toBe("112233445566");
        expect(doubleChar("%^&*(")).toBe("%%^^&&**((");
    });
});