"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subclass = exports.Superclass = void 0;
class Superclass {
    constructor(isSuper) {
        this.isSuper = isSuper;
        this.sayHello = () => {
            console.log('Olá mundo!');
        };
        this.isSuper = isSuper;
    }
    ;
}
exports.Superclass = Superclass;
class Subclass extends Superclass {
    constructor() {
        super(false);
    }
}
exports.Subclass = Subclass;
const myFunc = (obj) => {
    obj.sayHello();
    const isSuper = obj.isSuper ? 'Super' : 'Sub';
    console.log(isSuper);
};
const superclass = new Superclass(true);
const sub = new Subclass();
myFunc(superclass);
myFunc(sub);
