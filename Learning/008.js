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