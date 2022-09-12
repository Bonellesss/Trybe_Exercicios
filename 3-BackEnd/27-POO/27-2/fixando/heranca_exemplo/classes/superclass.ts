export class Superclass {
  constructor(public isSuper: boolean) {
    this.isSuper = isSuper;
  };

  sayHello = () => {
    console.log('Olá mundo!')
  }
}

export class Subclass extends Superclass {
  constructor () {
    super(false);
  }
}

const myFunc = (obj: Superclass) => {
  obj.sayHello();
  const isSuper = obj.isSuper ? 'Super' : 'Sub'; 
  console.log(isSuper);
}

const superclass = new Superclass(true);
const sub = new Subclass();

myFunc(superclass);
myFunc(sub);