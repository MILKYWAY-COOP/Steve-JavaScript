function person (name, age) {
    this.name = name;
    this.age = age;
    //function inside object function
    this.changeName = function (name) {
        this.name = name;
    }
}

var p = new person("David", 21);
p.changeName("Stephen")

console.log(p.age)

// its is also possible to define function outside of a method
function person(name, age) {
    this.name= name;
    this.age = age;
    this.yearOfBirth = bornYear;
  }
  function bornYear() {
    return 2022 - this.age;
  }
var Steve = new person("Muchendu", 21)
console.log(Steve.yearOfBirth)