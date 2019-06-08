let reverseTheCase = function (str) {
    let reversedCaseStr = "",
        splitStr = null;
    splitStr = str.split("");
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === splitStr[i].toLowerCase() || splitStr[i] === splitStr[i].toUpperCase()) {
            if (splitStr[i] === splitStr[i].toLowerCase()) {
                reversedCaseStr += splitStr[i].toUpperCase();
            } else {
                reversedCaseStr += splitStr[i].toLowerCase();
            }
        }
    }
    console.log(`Before : '${str}' After : '${reversedCaseStr}'.`);
};

reverseTheCase('Javascript');
