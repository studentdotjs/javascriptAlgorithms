let additiveInverse = function (numberArr) {
    let additiveInverseArr = [];

    numberArr.forEach(function (number) {
        if (number > 0) {
            additiveInverseArr.push(0 - number);
        } else {
            let negToPos = Math.sqrt(number * number);
            additiveInverseArr.push(negToPos);
        }

    });

    console.log(additiveInverseArr);

}

additiveInverse([10, -49, -18, 4, 20, -9]);
