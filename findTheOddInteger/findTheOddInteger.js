let findOddOccurenceNum = function (intArr) {
    let checkedNumsArr = [];

    for (let i = 0; i < intArr.length; i++) {
        if (checkedNumsArr.indexOf(intArr[i]) === -1) {
            let currentNumIndex = intArr.indexOf(intArr[i]),
                currentNumIndexCount = 0;

            while (currentNumIndex !== -1) {
                currentNumIndexCount++;
                currentNumIndex = intArr.indexOf(intArr[i], currentNumIndex + 1);
            }

            checkedNumsArr.push(intArr[i]);

            if (currentNumIndexCount % 2 !== 0) {
                let answer = intArr[i];
                console.log(`In [${intArr}] array ${answer} appears an odd number of times.`);
                break;
            }

        }

    }

};

findOddOccurenceNum([5, 51, 21, 5, 21, 51, 51, 21, 11, 11, 51]);
