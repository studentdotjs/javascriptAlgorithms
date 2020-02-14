let sumConsecutiveInts = function (intArr) {
    let newArr = []

    for (let i = 0; i < intArr.length; i++) {
        let currentInt = intArr[i],
            currentIntCount = 1,
            currentIntTotal = null;
        while (currentInt === intArr[i + 1]) {
            i++;
            currentIntCount++;
        }

        currentIntTotal = currentInt * currentIntCount;
        newArr.push(currentIntTotal);
    }

    console.log(newArr);

};

sumConsecutiveInts([0, 7, 7, 7, 5, 4, 9, 9, 0]);
