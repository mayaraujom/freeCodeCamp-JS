const telephoneCheck = require('./telephone-number-validation');

test('Telephone Number Validation Free Code Camp Tests', () => {
    expect(telephoneCheck("1 555-555-5555")).toBe(true);
    expect(telephoneCheck("1(555)555-5555")).toBe(true);
    expect(telephoneCheck("1 456 789 4444")).toBe(true);
    expect(telephoneCheck("55 55-55-555-5")).toBe(false);
    expect(telephoneCheck("2 (757) 622-7382")).toBe(false);
    expect(telephoneCheck("555)-555-5555")).toBe(false);
});
