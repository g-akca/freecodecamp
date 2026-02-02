class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }

    this.transactions.push({type: "deposit", amount: amount});
    this.balance += amount;
    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }

    this.transactions.push({type: "withdraw", amount: amount});
    this.balance -= amount;
    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
  }

  checkBalance() {
    return "Current balance: $" + this.balance;
  }

  listAllDeposits() {
    const amounts = [];

    this.transactions.forEach(transaction => {
      if (transaction.type == "deposit") {
        amounts.push(transaction.amount);
      }
    });

    return `Deposits: ${amounts.join(",")}`;
  }

  listAllWithdrawals() {
    const amounts = [];

    this.transactions.forEach(transaction => {
      if (transaction.type == "withdraw") {
        amounts.push(transaction.amount);
      }
    });

    return `Withdrawals: ${amounts.join(",")}`;
  }
}

const myAccount = new BankAccount();
myAccount.deposit(20);
myAccount.deposit(150);
myAccount.withdraw(30);
myAccount.deposit(180);
myAccount.withdraw(125);