//Spread
var mountains = ['Everest', 'Kenya', 'Kilimanjaro'];
var mountainsfromJapan = ['Fuji'];
var allMountains = [...mountains, ...mountainsfromJapan];
console.log(allMountains);


var day = {
    breakfast: 'toast with milk',
    lunch: 'rice with chicken'
}
var night = {
    dinner: 'noodle soup'
}
var foods = { ...day, ...night }
console.log(foods);

//rest
var rivers = ['Sagana', 'Malewa', 'Congo'];
var [first, ...rest] = rivers;
console.log(rest);