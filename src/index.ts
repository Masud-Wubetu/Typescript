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


// class Ride {
        //Passenger
        //pickUpLocation
        //dropOffLocation
        //private static _activerides: number = 0

//     start() {Ride._activerides++;}
//     stop() {Ride._activerides--;}


//     static get activerides() {
//         return Ride._activerides
//     }
// }


// let ride1 = new Ride();
// ride1.start();
// let ride2 = new Ride();
// ride2.start();

// console.log(Ride.activerides);


// class Person {
//     constructor(public firstName: string, public lastName: string) {}

//     get fullName() {
//         return this.firstName + ' ' + this.lastName
//     }

//     walk() {
//         console.log('Walking');
//     }
// }

// class Student extends Person {

//     constructor(public studentId: number, firstName: string, lastName: string) {
//         super(firstName, lastName);
//     }

//     takeTest() {
//         console.log('Taking a test');
        
//     }
// }


// class Teacher extends Person {

//     override get fullName() {
//         return 'Professor ' + super.fullName;
//     }
// }

// class Principal extends Person {
//     override get fullName() {
//         return "Principal " + super.fullName;
//     }
// }

// let teacher =  new Teacher("Masud", 'Wubetu');
// console.log(teacher.fullName);

// printNames([
//     new Student(1, "Masud", "Wubetu"),
//     new Teacher('Mosh', 'Hamedani'),
//     new Principal('Harun', 'Suleyman')
// ]);

// function printNames(people: Person[]) {
//     for(let person of people) {
//         console.log(person.fullName);
//     }
// }

// 

// abstract class Calendar {
//     constructor(public name: string) {}

//     abstract addEvent(): void;
//     abstract removeEvent(): void;
// }


// interface Calendar {
//     name: string;
//     addEvent(): void;
//     removeEvent(): void;
// }

// interface CloudCalendar extends Calendar{
//     sync(): void;
// }

// class GoogleCalendar implements Calendar {
//     constructor(public name: string) {}
//     addEvent(): void {
//         throw new Error("Method not implemented.");
//     }
//     removeEvent(): void {
//         throw new Error("Method not implemented.");
//     }
    
// }

// 

class ArrayUtils {
    static wrapInArray<T>(value: T) {
        return [value]
    }
}


let number = ArrayUtils.wrapInArray(1);
