"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
    render() { }
}
class Circle extends Shape {
    radius;
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log('Rendering a circle');
    }
}
let shape = new Shape('Red');
shape.render();
//# sourceMappingURL=index.js.map