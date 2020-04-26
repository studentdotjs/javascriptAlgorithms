let getAbsoluteSum = function (intArr) {
    let absSum = 0;

    intArr.forEach(function (number) {
        absSum = absSum + Math.abs(number);
    });

    console.log(absSum);

};

getAbsoluteSum([8, -13, 2, -3, -20]);
