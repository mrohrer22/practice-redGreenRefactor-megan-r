const countVowel = require('./green-code.js');

describe('countVowel()', () => {
    test('counts lowercase vowels in a standard string', () => {
        expect(countVowel('test')).toBe(1);
        expect(countVowel('hello')).toBe(2);
    });
});