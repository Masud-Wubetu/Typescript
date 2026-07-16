class Account {
    nickname?: string

    constructor(
        public readonly id:number, 
        public owner: string,
        private _balance: number) {
    }

    deposit(amount: number) {
        if ( amount <= 0) 
            throw new Error('Invalid amount')
        this._balance += amount
    }

    private calculateTax() {

    }

    get balance(): number {
        return this._balance
    }

}

let account = new Account(1, 'Masud', 0);

account.deposit(100);
console.log(account.balance);

class SeatAssignment {
    [seatNumber: string]: string
}

let seats = new SeatAssignment();
seats.A1 = 'Mosh';
seats.A2 = "Harun Suleyman";
seats.A3 = "Abdisa Kedir";
seats.A4 = "Miftah Ebrahim";
seats.A5 = "Masud Wubetu"