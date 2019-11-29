let alliterationCorrectOrNot = function (str) {
    let strToArr = str.toLowerCase().split(" "),
        char = null,
        i = null;

    char = strToArr.find(function (element) {
        return element.length > 3;
    });

    char = char[0];

    for (i = 0; i < strToArr.length; i++) {
        if (strToArr[i].length > 3) {
            if (strToArr[i].startsWith(char)) {
                continue;
            } else {
                console.log(`${false}, "${str}" is not correctly alliterated.`);
                break;
            }
        }
    }

    if (i === strToArr.length) {
        console.log(`${true}, "${str}" is correctly alliterated.`);
    }

};

alliterationCorrectOrNot("I love javascreipt programming language.");
