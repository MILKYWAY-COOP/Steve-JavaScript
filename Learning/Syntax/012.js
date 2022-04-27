//Comparison of an ECMAScript function with a normal JS function

//Normal JS Function
var arr = [2, 3, 7, 8];

arr.forEach(function(el) {
    console.log(el * 2);
});


//inline ECMAScript functions
const arr = [2, 3, 7, 8];

arr.forEach(v => {
    console.log(v * 2);
});