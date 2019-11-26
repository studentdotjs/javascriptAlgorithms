let arrayOfIntMultiples = function (int, length) {
    let arrMultiples = [];

    for (let i = 1; i <= length; i++) {
        arrMultiples.push(int * i);
    }

    console.log(`${int}'s multiples upto ${length} are [${arrMultiples}].`);
};

arrayOfIntMultiples(13, 4);
