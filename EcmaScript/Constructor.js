// Classes
//We could create a function and add methods on the function
//object using the prototype
//in JS functions are objects - inherit the behaviour of object
//whenever you create an object, the prototype object is also
//created behind the scene

function Holiday(destination, days) {
  this.destination = destination;
  this.days = days;
}
Holiday.prototype.info = function () {
  console.log(this.destination + ' | ' + this.days + ' days');
};
var Nepal = new Holiday('Nepal', 30);
console.log(Nepal.info());

//Now using ECMAScript
class Holidays {
  constructor(destinations, day) {
    this.destinations = destinations;
    this.day = day;
  }
  info() {
    console.log(`${this.destinations} will take ${this.day} days.`);
  }
}
const trip = new Holidays('Kenya', 30);
console.log(trip.info());

// Super Class
class Places {
  constructor(Hotel, Price) {
    this.Hotel = Hotel;
    this.Price = Price;
  }
  info() {
    console.log(`${this.Hotel} is ${this.Price} shillings for 3 nights.`);
  }
}
const Motel = new Places('Kwa Martin', 500);
console.log(Motel.info());

//Sub Class
class Expedition extends Places {
  constructor(Hotel, Price, gear) {
    super(Hotel, Price);
    this.gear = gear;
  }

  info() {
    super.info();
    console.log(`Bring your ${this.gear.join(" and your ")}`);
  }
}

const tripWithGear = new Expedition("Kwa Mother", 30, ["Sun Glasses", "Camera"]);
tripWithGear.info();
