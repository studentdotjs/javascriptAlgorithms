let convertIntoOrdinalNumber = function (number) {
    let numToStrSplit = String(number).split(""),
        lastElement = Number(numToStrSplit[numToStrSplit.length - 1]),
        ordinalNumber = "";

    if (lastElement === 0 || lastElement > 3) {
        ordinalNumber += String(number).concat("-TH");
    } else if (lastElement === 1) {
        ordinalNumber += String(number).concat("-ST");
    } else if (lastElement === 2) {
        ordinalNumber += String(number).concat("-ND");
    } else {
        ordinalNumber += String(number).concat("-RD");
    }

    console.log(ordinalNumber);

};

convertIntoOrdinalNumber(559);
