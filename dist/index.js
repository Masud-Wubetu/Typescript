"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends Person {
    studentId;
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking a test');
    }
}
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return "Principal " + super.fullName;
    }
}
let teacher = new Teacher("Masud", 'Wubetu');
console.log(teacher.fullName);
printNames([
    new Student(1, "Masud", "Wubetu"),
    new Teacher('Mosh', 'Hamedani'),
    new Principal('Harun', 'Suleyman')
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
//# sourceMappingURL=index.js.map