let removeSpecialChars = function (str) {
    let lowercaseStr = str.toLowerCase(),
        allowedChars = "abcdefghijklmnopqrstuvwxyz0123456789-_ ",
        strWithoutSpecialChars = "";

    for (let i = 0; i < lowercaseStr.length; i++) {
        if (allowedChars.includes(lowercaseStr[i])) {
            strWithoutSpecialChars += str[i];
        } else {
            continue;
        }
    }

    console.log(`After removing special characters from "${str}" we have "${strWithoutSpecialChars}".`);

};

removeSpecialChars("j@v@script i$ my f@vourite progr@mming l@ngu@ge.");
