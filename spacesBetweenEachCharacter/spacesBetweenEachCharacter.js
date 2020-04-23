let giveMeSpace = function (str) {
    let newStr = "",
        strSplit = str.split(" ");

    strSplit.forEach(function (word) {
        let newWord = "";

        word.split("").forEach(function (char) {
            newWord += char + " ";
        });

        newStr += "  " + newWord;

    });

    newStr = newStr.trim();
    console.log(newStr);

};

giveMeSpace("javascript developer");
