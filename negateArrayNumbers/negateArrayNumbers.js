let negateNumbers = function (numArr) {
    let newArr = [];

    numArr.forEach(function (number) {
        if (number > 0) {
            newArr.push(0 - number);
        } else {
            newArr.push(Math.abs(number));
        }
    });

    console.log(newArr);

};

negateNumbers([6, -9, -3, 20, 7]);
