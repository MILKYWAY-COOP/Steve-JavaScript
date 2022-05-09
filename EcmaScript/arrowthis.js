// function sayHi() {

// }

// console.log(this);

// let Kenya = {
//     //add property
//     mountains: ['Kenya', 'Longonot', 'Elgon'],
//     //add method
//     printWithDash: function () {
//         setTimeout(function () {
//             console.log(this.mountains.join(' - '));
//         }, 3000)
//     }
// }

// alert(Kenya.printWithDash);
// When called the above function will return an error.

let Kenya = {
  //add property
  mountains: ['Kenya', 'Longonot', 'Elgon'],
  //add method
    printWithDash: function() {
        console.log('inside printWithDash', this);
        setTimeout(() => console.log(this.mountains.join(' - ')), 3000);
  }
};
alert(mountains.printWithDash);