let numericSeesaw = function (number) {
    let numToStr = String(number),
        argNumLength = parseInt(numToStr.length),
        divider = parseFloat(argNumLength / 2),
        firstHalf = null,
        secondHalf = null;

    if (argNumLength % divider === 0 && argNumLength % 2 === 0) {
        firstHalf = parseInt(numToStr.slice(0, divider));
        secondHalf = parseInt(numToStr.slice(divider, numToStr.length));

    } else {
        divider = Math.floor(divider);
        firstHalf = parseInt(numToStr.slice(0, divider));
        secondHalf = parseInt(numToStr.slice(divider + 1, numToStr.length));
    }

    if (firstHalf > secondHalf) {
        console.log("Left - Heavy");
    } else if (secondHalf > firstHalf) {
        console.log("Right - Heavy");
    } else {
        console.log("Balanced");
    }
};

numericSeesaw(243026);
