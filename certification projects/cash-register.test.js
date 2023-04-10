const checkCashRegister = require('./cash-register');

test('Palindrome Checker Free Code Camp Tests', () => {
    const situacao_um = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20]];
    expect(checkCashRegister(19.5, 20, situacao_um)).toHaveProperty('status', "OPEN");
    expect(checkCashRegister(19.5, 20, situacao_um)).toHaveProperty('change', [["QUARTER", 0.5]]);

    const situacao_dois = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];
    expect(checkCashRegister(3.26, 100, situacao_dois)).toHaveProperty('status', "OPEN");
    expect(checkCashRegister(3.26, 100, situacao_dois))
        .toHaveProperty('change', [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]);

    const situacao_tres = [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
    expect(checkCashRegister(19.5, 20, situacao_tres)).toHaveProperty('status', "INSUFFICIENT_FUNDS");
    expect(checkCashRegister(19.5, 20, situacao_tres)).toHaveProperty('change', []);

    const situacao_quatro = [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
    expect(checkCashRegister(19.5, 20, situacao_quatro)).toHaveProperty('status', "INSUFFICIENT_FUNDS");
    expect(checkCashRegister(19.5, 20, situacao_quatro)).toHaveProperty('change', []);

    const situacao_cinco = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
    expect(checkCashRegister(19.5, 20, situacao_cinco)).toHaveProperty('status', "CLOSED");
    expect(checkCashRegister(19.5, 20, situacao_cinco))
        .toHaveProperty('change', [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
});
