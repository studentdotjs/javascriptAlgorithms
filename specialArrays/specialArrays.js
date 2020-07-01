let specialArr = function (intArr) {
    let i = null;

    for (i = 0; i < intArr.length; i++) {
        if (i % 2 === 0 && intArr[i] % 2 === 0) {
            continue;
        } else if (i % 2 !== 0 && intArr[i] % 2 !== 0) {
            continue;
        } else {
            console.log(false);
            break;
        }
    }

    if (i === intArr.length) {
        console.log(true);
    }

};

specialArr([9, 49, 15, 4, 20, 16]);
