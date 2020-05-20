export class Wallet {
    openBalance = 0;

    getBalance() {
        return this.openBalance;
    }
    deposit(amount) {
        this.openBalance += amount;
    }

    withdraw(amount) {
        if (amount > this.openBalance) {
            console.log("No enough funds");
            return;
        }

        this.openBalance -= amount;
    }
}

const wallet1 = new Wallet();