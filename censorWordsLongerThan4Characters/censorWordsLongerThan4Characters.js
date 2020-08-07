let censorWords = function (str) {
    let strSplit = str.split(" "),
        censoredStr = "";

    strSplit.forEach(function (word) {

        if (word.length > 4) {
            word = "*".repeat(word.length);
            censoredStr += word + " ";
        } else {
            censoredStr += word + " ";
        }

    });

    censoredStr = censoredStr.trimEnd();
    console.log(censoredStr);

};

censorWords("I am a JavaScript Developer.");
