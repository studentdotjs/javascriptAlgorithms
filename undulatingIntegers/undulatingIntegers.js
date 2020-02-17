let isUndulatingInt = function (int) {
    let intToStr = String(int),
        i;

    if (intToStr.length >= 3) {
        let firstDigit = intToStr[0],
            secondDigit = intToStr[1];

        for (i = 0; i < intToStr.length; i++) {
            if (i % 2 === 0 && intToStr.charAt(i) === firstDigit) {
                continue;
            } else if (i % 2 !== 0 && intToStr.charAt(i) === secondDigit) {
                continue;
            } else {
                console.log(false);
                break;
            }
        }
    } else {
        console.log(false);
    }

    if (i === intToStr.length) {
        console.log(true);
    }

};

isUndulatingInt(1212121212);
