//Objects can contain functions as properties. These are called methods.

const account = {
  name: `Oscar`,
  age: 32,
  gender: `male`,
  numberAccount: 23462,
  amount: 100,
  deposit: function (quantity) {
    this.amount = this.amount + quantity;
    return "saldo actual " + this.amount;
  },
  withdraw: function (quantity) {
    this.amount = this.amount - quantity;
    return "saldo actual " + this.amount;
  },
};

console.log(account.amount);
//100

account.deposit(550);

console.log(account.amount);
//650

account.withdraw(300);

console.log(account.amount);
