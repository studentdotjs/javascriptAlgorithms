let calculateMean = function (intArr) {
    let total = 0,
        intCount = 0,
        mean = null;

    intArr.forEach(function (int) {

        total = total + int;

        intCount++;

    });

    mean = total / intCount;

    mean = Number(mean.toFixed(2));

    console.log(mean);

};

calculateMean([9, 16, 26, 4, 20, 6]);
