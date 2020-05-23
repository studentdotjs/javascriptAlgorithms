let limitedRangeNumber = function (number, lowerLimit, upperLimit) {
    let limitNumber = null;

    if (number > lowerLimit && number < upperLimit) {
        limitNumber = number;
    } else if (number <= lowerLimit) {
        limitNumber = lowerLimit;
    } else {
        limitNumber = upperLimit;
    }

    console.log(limitNumber);

};

limitedRangeNumber(3, 17, 20);
