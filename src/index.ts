
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

function KgToLib(weight: number | string): number {
    //Narrowing
    if ( typeof weight === 'number')
        return weight * 2.2 
    else
        return parseInt(weight) * 2.2
}

KgToLib(10);
KgToLib('10');


type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable; 

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Matric = 'CM' | "inch";
