let isPanDigitalNum = function (int) {
    let intToStr = int.toString(),
        i = 0;

    while (i <= 9) {
        if (intToStr.includes(i.toString())) {
            i++;
        } else {
            console.log(`${false}, ${intToStr} is not a pandigital number.`);
            break;
        }
    }

    if (i === 10) {
        console.log(`${true}, ${intToStr} is a pandigital number.`);
    }

};

isPanDigitalNum(1015082019);
