function person(name, age) {
    this.name= name;
    this.age = age;
    this.yearOfBirth = bornYear;
  }
  function bornYear() {
    return 2022 - this.age;
  }
var Steve = new person("Muchendu", 21)
console.log(Steve.bornYear)