//The Prototype Chain
//The prototype chain is a mechanism that allows objects to inherit features from other objects.

const myObject = {
  city: 'Nairobi',
  greet() {
    console.log(`Greetings from ${this.city}`);
  }
};

myObject.greet(); // Greetings from Nairobi

const myDate = new Date();
// console.log the properties of myDate
console.log(Object.getOwnPropertyNames(myDate)); // 2019-07-01T10:00:00.000Z
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);


const personPrototype = {
    greet() {
        console.log('Hello');
    }
};

const carl = Object.create(personPrototype);
carl.greet() // Hello


const person2Prototype = {
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

function Person(name) {
    this.name = name;
}

Object.assign(Person.prototype, person2Prototype);

const reuben = new Person('Reuben');
reuben.greet(); // Hello, my name is Reuben
