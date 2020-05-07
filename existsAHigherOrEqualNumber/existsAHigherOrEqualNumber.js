let existsHigherNumberOrNot = function (numArr, n) {
    let i = null;

    if (numArr.length > 0) {
        for (i = 0; i < numArr.length; i++) {
            if (numArr[i] >= n) {
                console.log(true);
                break;
            }
        }

        if (i === numArr.length) {
            console.log(false);
        }

    } else {
        console.log(false);
    }

};

existsHigherNumberOrNot([21, 36, 16, 3, 20], 44);
