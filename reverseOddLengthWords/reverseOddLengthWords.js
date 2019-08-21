let reverseOddLengthWords = function (str) {
    let strSplit = null,
        newStr = "";

    if (str.includes(" ")) {
        strSplit = str.split(" ");
    } else {
        strSplit = str.split();
    }

    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length % 2 !== 0) {
            newStr += strSplit[i].split("").reverse().join("") + " ";
        } else {
            newStr += strSplit[i] + " ";
        }
    }

    newStr = newStr.trimRight();
    console.log(`After reversing odd length words of "${str}" we have "${newStr}".`);

};

reverseOddLengthWords("programming");
