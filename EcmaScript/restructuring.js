var CarBudget = {
    car:'Mercedes',
    price:numberWithCommas(2300000),
    output() {
        console.log(`${this.car} is ${this.price} Kenyan Shillings`)
    },
    numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }};
CarBudget.output();
