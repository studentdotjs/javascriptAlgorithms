let ifEveryDigitShares = function (intArr) {
    let i, count = 0;

    for (i = 1; i < intArr.length; i++) {
        let previousValue = intArr[i - 1].toString().split(""),
            currentValue = intArr[i].toString();
        for (let j = 0; j < previousValue.length; j++) {
            if (currentValue.includes(previousValue[j])) {
                count++;
                j = previousValue.length;
            }
        }

        if (count < i) {
            break;
        }

    }

    if (count === intArr.length - 1) {
        console.log(`${true}, each pair of adjacent intgers in [${intArr}] array shares at least one digit`);
    } else {
        console.log(`${false}, each pair of adjacent intgers in [${intArr}] array not shares even at least one digit`);
    }

};

ifEveryDigitShares([17, 37, 70, 7, 20179]);
