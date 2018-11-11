function checkCashRegister(price, cash, cid) {
  const money = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];
  const moneyNames = ['PENNY', 'NICKEL', 'DIME', 'QUARTER', 'ONE', 'FIVE', 'TEN', 'TWENTY', 'ONE HUNDRED'];
  let change = (cash - price).toFixed(2);
  let message = { status: 'OPEN', change: []};
  const totalInDrawer = cid.reduce((a, b) => a + b[1], 0).toFixed(2);

  // return immediately if money in drawer is equal to the change due
  if (change == totalInDrawer){
    message.status = 'CLOSED';
    message.change = cid;
    return message;
  }

  // while there is still change due pull values from the money array
  while (change >= 0.01){
    let denom = money.findIndex((el) => el > change) - 1;
    
    // if there is not enough in current denomination move to next lower denomination
    if (cid[denom][1] - money[denom] < 0) denom--;
    
    // deduct from change
    change -= money[denom];
    change = change.toFixed(2);
    cid[denom][1] -= money[denom];

    // add/edit monetary value in message
    let idx = -1;
    for (let i = 0; i < message.change.length; i++){
      if (message.change[i][0] === moneyNames[denom]) idx = i;
    }
    // if not in message add, else update
    if (idx < 0){
      message.change.push([moneyNames[denom],money[denom]]);
    } else {
      message.change[idx][1] += money[denom];
    }

    // return immediately if exact change cannot be made
    if (cid[denom][1] < 0){
      message.status = 'INSUFFICIENT_FUNDS';
      message.change = [];
      return message;
    }
  }

  return message;
}
