//a function that checks if an array contains all the arguments passed:
//indexOf - JS method to get index of array element.
// Returns -1 if not found
function containsAll(arr) {
    console.log(arguments)
    for (let k = 1; k < arguments.length; k++) {
        let num = arguments[k];
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
}

let x = [2, 4, 6, 7];
console.log(containsAll(x));
console.log(containsAll(x, 6, 4, 9));