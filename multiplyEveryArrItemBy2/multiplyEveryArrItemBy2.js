let multiplyedBy2 = function (numArr) {
    let multipliedArr = [];

    numArr.forEach(function (number) {
        number = number * 2;
        multipliedArr.push(number);
    });

    console.log(multipliedArr);

};

multiplyedBy2([4, 50, 2, 20]);
