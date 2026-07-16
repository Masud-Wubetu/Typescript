// class Account {
//     nickname?: string

//     constructor(
//         public readonly id:number, 
//         public owner: string,
//         private _balance: number) {
//     }

//     deposit(amount: number) {
//         if ( amount <= 0) 
//             throw new Error('Invalid amount')
//         this._balance += amount
//     }

//     private calculateTax() {

//     }

//     get balance(): number {
//         return this._balance
//     }

// }

// let account = new Account(1, 'Masud', 0);

// account.deposit(100);
// console.log(account.balance);

// class SeatAssignment {
//     [seatNumber: string]: string
// }

// let seats = new SeatAssignment();
// seats.A1 = 'Mosh';
// seats.A2 = "Harun Suleyman";
// seats.A3 = "Abdisa Kedir";
// seats.A4 = "Miftah Ebrahim";
// seats.A5 = "Masud Wubetu"


class Ride {
    //Passenger
    //pickUpLocation
    //dropOffLocation
   private static _activerides: number = 0

    start() {Ride._activerides++;}
    stop() {Ride._activerides--;}


    static get activerides() {
        return Ride._activerides
    }
}


let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();

console.log(Ride.activerides);


