const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    let transaction = {amount, type};
    return transaction;

  },

  deposit(amount) {
    const arrOfTrans = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += Number(arrOfTrans[0]);

    // const accountDetails = Object.values(account);
    // const newBal = accountDetails[0] + amount;
    // this.balance = newBal;

    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  withdraw(amount) {
    this.balance - amount;
    this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
  },

  getBalance() {
      return this.balance;
  },

  getTransactionDetails(id) {
      return this.transactions[id];
  },
};

account.deposit(100);
console.log(account);

