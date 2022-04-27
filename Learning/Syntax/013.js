let tree = {
    height: 10,
    color: 'green',
    grow() { 
        this.height += 2;
    }
};

console.log(tree.height); // 12

let prop = 'name';
let id = '1234';
let mobile = '08923';

let user = {
  [prop]: 'Jack',
  [`user_${id}`]: `${mobile}`
};

console.log(user.name); // Jack
console.log(user.user_1234); // 08923

var param = 'size';
var config = {
    [param]: 12,
    ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};

console.log(config.mobileSize); // 4