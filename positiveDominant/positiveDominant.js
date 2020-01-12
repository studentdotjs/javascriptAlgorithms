let positiveDominantOrNot = function (intArr) {
    let positiveNumCount = [],
        negativeNumCount = [];

    intArr.forEach(function (int) {

        if (int > 0 && positiveNumCount.indexOf(int) === -1) {
            positiveNumCount.push(int)
        } else if (int < 0 && negativeNumCount.indexOf(int) === -1) {
            negativeNumCount.push(int);
        }

    });

    if (positiveNumCount.length > negativeNumCount.length) {
        console.log(`${true}, [${intArr}] array is positive dominant.`);
    } else {
        console.log(`${false}, [${intArr}] array is not a positive dominant.`);
    }

};

positiveDominantOrNot([5, 6, -10, 12, -20, 19]);
