var person = {
    name: "John",
    age: 31,
    favcolor: "Yellow",
    height: 183,
}
var x = person.age;
var y = person['age'];

console.log(x)
console.log(y)

console.log(person.name.length)

//constructors
function person (name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}
// The above function (person) is an object constructor,
// which takes parameters and assigns them to the object properties.

var Muchendu = new person ("Stephen", 18, "Yellow")
console.log(Muchendu.age)
