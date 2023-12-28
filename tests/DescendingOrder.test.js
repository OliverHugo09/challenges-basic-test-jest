// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

const descendingOrder = (n) => {

    //n.toString(): Convierte el número n en una cadena de texto. Por ejemplo, si n es 1021, esto resultaría en la cadena '1021'.

    //.split(''): Divide la cadena de texto en un array de caracteres individuales. '1021' se convierte en ['1', '0', '2', '1'].

    //.sort((a, b) => b - a): El método sort() ordena los elementos de un array, y al proporcionarle una función de comparación 
    //que resta b - a, se establece un orden descendente. En este caso, ['1', '0', '2', '1'] se convierte en ['2', '1', '1', '0'].

    //.join(''): Une los elementos del array nuevamente en una sola cadena. ['2', '1', '1', '0'] se convierte en la cadena '2110'.

    //parseInt(...): Convierte la cadena resultante en un número entero. '2110' se convierte en el número 2110.

    return parseInt(n.toString().split('').sort((a, b) => b - a).join(''));

}

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        expect(descendingOrder(0)).toBe(0);
        expect(descendingOrder(1)).toBe(1);
        expect(descendingOrder(111)).toBe(111);
        expect(descendingOrder(15)).toBe(51);
        expect(descendingOrder(1021)).toBe(2110);
        expect(descendingOrder(123456789)).toBe(987654321);
    });
});