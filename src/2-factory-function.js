function bankAccountFactory(initialBalance = 0) {
  let balance = initialBalance;

  return {
    checkBalance() {
      return balance;
    },
    add(amount) {
      if (amount > 0) {
        balance += amount;
        console.log(`$${amount} added.`);
      }
    },
    subtract(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`$${amount} subtracted.`);
      }
    }
  };
}


module.exports = {
  bankAccountFactory,
};
