let allZerosToEnd = function (intArr) {
    let zeroCount = 0;

    for (let i = 0; i < intArr.length; i++) {
        if (intArr[i] === 0) {
            intArr.splice(i, 1);
            zeroCount++;
            i--;
        }
    }

    for (let i = 0; i < zeroCount; i++) {
        intArr.push(0);
    }

    console.log(intArr);

};

allZerosToEnd([17, 0, 37, 0, 11, 20, 0]);
