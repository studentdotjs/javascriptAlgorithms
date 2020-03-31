let xoInSameNumbers = function (str) {
    let xCharCount = 0,
        oCharCount = 0,
        lowerCaseStr = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (lowerCaseStr[i] === "x") {
            xCharCount++;
        } else if (lowerCaseStr[i] === "o") {
            oCharCount++;
        }
    }

    if (xCharCount === 0 && oCharCount === 0) {
        console.log(`${true}. "${str}" does not has any single "x" and "o" character.`);
    } else if (xCharCount > 0 && oCharCount > 0) {
        if ((xCharCount + oCharCount) % 2 === 0) {
            console.log(`${true}, "${str}" has same number of "x" and "o" characters.`);
        } else {
            console.log(`${false}, "${str}" has not same number of "x" and "o" characters.`);
        }
    } else {
        console.log(`${false}, "${str}" does not has any single character of "x" or "o".`);
    }

};

xoInSameNumbers("naveenx");
