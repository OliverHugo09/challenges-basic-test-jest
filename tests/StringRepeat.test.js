// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

repeatStr = (n, s) => s.repeat(n)

// ¿Qué hace repeat() en JavaScript?
// Repetición de cadenas: Toma la cadena original y la replica la cantidad de veces especificada por el número dado como argumento.
// Creación de una nueva cadena: Devuelve una nueva cadena que consiste en la concatenación de la cadena original repetida el número de veces indicado.
// Es importante tener en cuenta que el argumento pasado al método repeat() debe ser un número entero no negativo. Si el argumento es cero o negativo,
// el método repeat() devolverá una cadena vacía ''. Si el argumento no es un número, se convertirá a un número entero antes de aplicar la repetición.

// Test de JEST
describe('Tests', () => {
    it('Basic tests', () => {
        expect(repeatStr(3, '*')).toBe('***');
        expect(repeatStr(5, '#')).toBe('#####');
        expect(repeatStr(2, 'ha ')).toBe('ha ha ');
    });
});
