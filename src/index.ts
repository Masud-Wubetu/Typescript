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

// class ArrayUtils {
//     static wrapInArray<T>(value: T) {
//         return [value]
//     }
// }

// let number = ArrayUtils.wrapInArray(1);


// interface Result<T> {
//     data: T | null;
//     error: string | null;
// }

// function fetch<T>(url: string): Result<T> {
//     return { data: null, error: null };
// }

// interface User {
//     username: string;
// }

// interface Product {
//     title: string;
// }

// let result = fetch<Product>('url');
// result.data?.title;

// let result2 = fetch<User>('url');
// result2.data?.username;

// class Person {
//     constructor(public name: string) {}
// }

// class Customer extends Person {

// }

// function echo<T extends Person>(value:T): T {
//     return value;
// }

// echo(new Customer('a'));

// interface Product {
//     name: string;
//     price: number;
// }

// class Store<T> {
//     protected _objects: T[] = [];

//     add(obj: T): void {
//         this._objects.push(obj);
//     }
       // if T is Product
       // key of T is name | price
//     find(property: keyof T, value: unknown): T | undefined {
//         return this._objects.find(obj => obj[property] === value)
//     }
// }
   // Pass on the generic type parameter
// class CompressibleStore<T> extends Store<T> {
//     compress() {}
// }

// let store = new CompressibleStore<Product>();
// store.add({name: 'abebe', price: 12});

// Restrict the generic type parameter
// class SearchableStore<T extends { name: string }> extends Store<T> {
//     find(name: string): T | undefined {
//         return this._objects.find(obj => obj.name === name);
//     }
// }

// Fix the generic type parameter
// class ProductStore extends Store<Product> {
//     filterByCategory(category: string): Product[] {
//         return [];
//     }
// }

// let store = new Store<Product>();
// store.add({ name: 'a', price: 1 });
// store.find('name', 'a');
// store.find('price', 1);
// store.find('nonExistingProperty', 1);


interface Product {
    name: string;
    price: number
}

type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
}

type Optional<T> = {
    [K in keyof T]?: T[K];
}

type Nullable<T> = {
    [K in keyof T]: T | null;
}
 
let product: ReadOnly<Product> = {
    name: 'a',
    price: 1
};