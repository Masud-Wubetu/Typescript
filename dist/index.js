"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ride {
    activerides = 0;
    start() { this.activerides++; }
    stop() { this.activerides--; }
}
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(ride1.activerides);
console.log(ride2.activerides);
//# sourceMappingURL=index.js.map