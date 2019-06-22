let compundStrLetters = function (str) {
    let splitStr = str.split(""),
        compundLettersStr = "",
        upperCaseChar = null;

    for (let i = 0; i < splitStr.length; i++) {
        upperCaseChar = splitStr[i].toUpperCase();
        compundLettersStr += upperCaseChar + splitStr[i].toLowerCase().repeat(i) + "-";
    }

    compundLettersStr = compundLettersStr.substring(0, compundLettersStr.length - 1);
    console.log(`Compounding of "${str}" each letter is "${compundLettersStr}".`);
};

compundStrLetters("javascript");
