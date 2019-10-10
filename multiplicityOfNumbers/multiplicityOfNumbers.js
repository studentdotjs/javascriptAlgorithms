let multiplicityNum = function (numberArr) {
    let numMultiplicityArr = [],
        count = 0,
        iteratedNums = [];

    for (let i = 0; i < numberArr.length; i++) {

        let currentNumIndex = numberArr.indexOf(numberArr[i]);

        if (iteratedNums.indexOf(numberArr[i]) === -1) {
            iteratedNums.push(numberArr[i]);
            while (currentNumIndex !== -1) {
                count++;
                currentNumIndex = numberArr.indexOf(numberArr[i], currentNumIndex + 1);
            }

            let valueWithTotalOccurence = [numberArr[i], count];
            numMultiplicityArr.push(valueWithTotalOccurence);
            count = 0;
            currentNumIndex = 0;
        }

    }

    console.log(numMultiplicityArr);

};

multiplicityNum([6, 3, 2, 3, 6, 2, 2, 6, 3]);
