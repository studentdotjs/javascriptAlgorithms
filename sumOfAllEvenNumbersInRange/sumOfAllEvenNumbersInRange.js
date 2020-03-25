let sumEvenNumsInRange = function (start, stop) {
    let total = 0;

    for (let i = start; i <= stop; i++) {
        if (i % 2 === 0) {
            total = total + i;
        }
    }

    console.log(total);

};

sumEvenNumsInRange(5, 23);
