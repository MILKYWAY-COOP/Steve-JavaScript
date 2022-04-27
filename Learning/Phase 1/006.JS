function main(depth) {
    var climb = 0;
    var day = 0;
    while (climb <= depth)
    {
        climb += 7;
        day += 1;
        climb -= 2;
    }
    //your code goes here
    console.log(day);
}

main(50)