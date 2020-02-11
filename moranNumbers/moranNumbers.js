let moranOrHarshedInt = function (int) {
    let intToStr = String(int).split(""),
        digitSum = 0;

    intToStr.forEach(function (digit) {
        digitSum = Number(digit) + digitSum;
    });

    let quotient = int / digitSum;

    if (int % digitSum === 0) {

        let i;

        for (i = 2; i < quotient; i++) {
            if (quotient % i === 0) {
                break;
            }
        }

        if (i === quotient) {
            console.log("M");
        } else {
            console.log("H");
        }

    } else {
        console.log("Neither");
    }

};

moranOrHarshedInt(612);
