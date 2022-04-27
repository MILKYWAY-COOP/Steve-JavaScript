let tree = {
    height: 10,
    color: 'green',
    grow() { 
        this.height += 2;
    }
};

console.log(tree.height); // 12