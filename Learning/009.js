function contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = output;
}
    function output() {
        console.log(this.name + ":" + this.number.toString())
    }

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
a.print();
b.print();