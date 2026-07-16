
// function calculateTax(income: number, taxYear = 2022 ): number {

//     if (taxYear < 2022 ) 
//         return income * 1.2
//     return income * 1.3
// } 

// calculateTax(10_000, 2023)

// type Employee = {
//     id: number,
//     name: string,
//     retire: (date: Date) => void
// }

// let employee: Employee{
// } = {
//     id: 1,
//     name: "Masud",
//     retire: (date: Date) => {
//         console.log(date)
//     }
// }

// function greet(name: string | null | undefined) {
//     if (name)
//         console.log(name.toUpperCase)
//     else 
//         console.log('Hola!')
// }

// greet(undefined)

// type Customer = {
//     birthday?: Date
// }

// function getCustomer(id: number): Customer | null | undefined {
//     return id === 0 ? null : { birthday: new Date}
// }

// let customer = getCustomer(1)
// // Optional property access operator
//     console.log(customer?.birthday?.getFullYear())


// let log: any = null;

// log?.('a')

// let speed:number | null = null;

// let ride = {
//     //Falsy(undefined, null, '', false, 0)
//     speed: speed ?? 30
// }

// let phone = document.getElementById('phone') as HTMLInputElement;

// phone.value


function render(document: unknown) {
    if (typeof document === 'string') {
        document.toUpperCase()
    }
    document.fly();
    document.whatEverWeWant();
}