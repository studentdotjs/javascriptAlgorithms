let sumAllArrNums = function (numArr) {
    let sum = 0;

    numArr.forEach(function (number) {
        sum = sum + number;
    });

    console.log(sum);

};

sumAllArrNums([17, 31, 3, 2, 20, 20]);
