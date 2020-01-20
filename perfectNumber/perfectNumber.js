let perfectNumberOrNot = function (int) {
    let sumOfFactors = 0;

    for (let i = 1; i < int; i++) {
        if (int % i === 0) {
            sumOfFactors = sumOfFactors + i;
        }
    }

    if (sumOfFactors === int) {
        console.log(`${true}, ${int} is a perfect number.`);
    } else {
        console.log(`${false}, ${int} is not a perfect number.`);
    }

};

perfectNumberOrNot(96);
