"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    name;
    balance;
    constructor(id, name, balance) {
        this.id = id,
        this.name = name,
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this.balance += amount;
    }
}
Account;
//# sourceMappingURL=index.js.map