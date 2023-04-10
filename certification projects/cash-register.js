// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), 
// and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

function checkCashRegister(price, cash, cid) {
  const values = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]
  let changeValue = cash - price;

  let available = [];

  for (let i = 0; i < cid.length; i++) {
    available.push(Math.round(cid[i][1] / values[i]))
  }

  const change = [];

  for (let i = values.length - 1; i >= 0; i--) {
    let troco = changeValue.toFixed(2)
    let divisao = Number(troco / values[i]);
    if (divisao > 1) {
      const parteInteira = Math.floor(divisao);
      if (available[i] > 1) {
        const moeda = [];
        moeda.push(cid[i][0]);
        const multiplier = available[i] > parteInteira ? parteInteira : available[i];
        moeda.push(values[i] * multiplier);
        changeValue -= values[i] * multiplier;
        change.push(moeda);
        available[i] -= multiplier;
      }
    }
  }

  if (changeValue > 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  }

  if (available.every((item) => item === 0)) {
    return {
      status: "CLOSED",
      change: cid
    }
  }

  return {
    status: "OPEN",
    change
  };
}

module.exports = checkCashRegister;
