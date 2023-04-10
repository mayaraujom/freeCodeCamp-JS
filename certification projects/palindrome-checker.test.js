const palindromeChecker = require('./palindrome-checker');

test('Palindrome Checker Free Code Camp Tests', () => {
    //True
    expect(palindromeChecker("eye")).toBe(true);
    expect(palindromeChecker("_eye")).toBe(true);
    expect(palindromeChecker("race car")).toBe(true);
    expect(palindromeChecker("A man, a plan, a canal. Panama")).toBe(true);
    expect(palindromeChecker("never odd or even")).toBe(true);
    expect(palindromeChecker("My age is 0, 0 si ega ym.")).toBe(true);
    expect(palindromeChecker("0_0 (: /-\ :) 0-0")).toBe(true);

    //False
    expect(palindromeChecker("not a palindrome")).toBe(false);
    expect(palindromeChecker("nope")).toBe(false);
    expect(palindromeChecker("almostomla")).toBe(false);
    expect(palindromeChecker("1 eye for of 1 eye.")).toBe(false);
    expect(palindromeChecker("five|\_/|four")).toBe(false);  
});