

const enum Size { Small, Medium, Large };

let mySize: Size = Size.Medium
console.log(mySize);

function calculateTax(income: number, taxYear: number = 2022): number {
    if( taxYear < 2022) 
        return income * 1.2
    return income * 1.3
}

calculateTax(10_000);

let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = { 
    id: 1,
    name: 'Masud Wubetu', 
    retire: (date: Date) => {
        console.log(date)
    }
 }
 let Masud: number = 9348;
