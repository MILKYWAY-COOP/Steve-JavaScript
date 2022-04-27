let map = new Map([['k1', 'v1'], ['k2', 'v2']]);

console.log(map.size); // 2

let mapp = new Map();
mapp.set('k1', 'v1').set('k2', 'v2');

console.log(mapp.get('k1')); // v1
console.log(mapp.has('k2')); // true

for (let kv of mapp.entries())
    console.log(kv[0] + " : " + kv[1]);
