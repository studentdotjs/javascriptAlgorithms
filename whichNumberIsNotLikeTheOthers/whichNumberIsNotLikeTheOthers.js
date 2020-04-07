let uniqueNumber = function (intArr) {
    let uniqueValue = null;

    for (let i = 0; i < intArr.length; i++) {
        let currentInt = intArr[i],
            currentIntIndex = intArr.indexOf(intArr[i]),
            currentIntCounter = 0;

        while (currentIntIndex !== -1) {
            currentIntIndex = intArr.indexOf(intArr[i], currentIntIndex + 1);
            currentIntCounter++;
        }

        if (currentIntCounter === 1) {
            uniqueValue = currentInt;
            console.log(`Uniqu value in the [${intArr}] is ${uniqueValue}.`);
            break;
        }

    }

};

uniqueNumber([10, 30, 30, 30, 30, 30]);
