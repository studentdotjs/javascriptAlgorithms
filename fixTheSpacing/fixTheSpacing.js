let correctStrSpacing = function (str) {
    let strSplit = str.split(" "),
        newStr = "";

    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > 0) {
            newStr += strSplit[i] + " ";
        }
    }

    newStr = newStr.trimRight();
    console.log(`After removing uncessary spaces in "${str}", we have "${newStr}".`);

};

correctStrSpacing(" I am a    self  -   taught   javascript     developer.");
