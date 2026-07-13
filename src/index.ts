
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

type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date}
}

let customer = getCustomer(1)

if (customer !== null && customer !== undefined)
    console.log(customer.birthday)