"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function KgToLib(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
KgToLib(10);
KgToLib('10');
//# sourceMappingURL=index.js.map