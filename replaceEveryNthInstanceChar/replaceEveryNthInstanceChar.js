let replaceStrNthChar = function (str, nth, strOldChar, strNewChar) {
    let strOldCharOccurence = str.indexOf(strOldChar),
        totalOccurence = 0,
        newStr = null,
        strSplit = str.split("");

    if (nth >= 1 && nth < str.length) {

        while (strOldCharOccurence !== -1) {
            totalOccurence++;
            if (totalOccurence === nth) {
                strSplit.splice(strOldCharOccurence, 1, strNewChar);
                totalOccurence = 0;
            }

            strOldCharOccurence = str.indexOf(strOldChar, strOldCharOccurence + 1);
        }

        newStr = strSplit.join("");
        console.log(`After replacing every ${nth} instance of character "${strOldChar}" with "${strNewChar}" we have "${newStr}".`);

    } else {
        console.log(`Instance value is ${nth}, so we have "${str}" unchanged.`);
    }

};

replaceStrNthChar("javascript is my best programming language.", 0, "a", "$");
