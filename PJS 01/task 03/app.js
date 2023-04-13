class BankAccount {
  constructor(owner, add, subtract, interestRate, termOfLoan) {
    this.owner = owner;
    this.balance = 1000;
    this.interestRate = interestRate;
    this.add = add;
    this.subtract = subtract;
    this.termOfLoan = termOfLoan;
  }
  deposit() {
    console.log(this.balance + this.add);
  }
  withdraw() {
    console.log(this.balance - this.subtract);
  }
  calculateInterest() {
    console.log(this.balance * this.interestRate * this.termOfLoan);
  }
}

const bank = new BankAccount("zain", 2200, 100, 10, 2);
bank.deposit();
bank.withdraw();
bank.calculateInterest();
