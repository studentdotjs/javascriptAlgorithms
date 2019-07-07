let sum2SmallestNums = function (numberArr) {

    let positiveNumberArr = numberArr.filter(function (number) {
        return number > 0;
    });

    let smallest2GreatestNumArr = positiveNumberArr.sort(function (x, y) {
        return x - y;
    });

    let sum = smallest2GreatestNumArr[0] + smallest2GreatestNumArr[1];

    console.log(`The sum of smallest two numbers in [${numberArr}] is ${sum}.`);

};

sum2SmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]);
