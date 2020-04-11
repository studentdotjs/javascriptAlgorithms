let reverseWords5OrMoreLettersStr = function (str) {
    let strSplitInArr = str.split(" "),
        newStr = "";

    for (let i = 0; i < strSplitInArr.length; i++) {

        if (strSplitInArr[i].length >= 5) {
            newStr += strSplitInArr[i].split("").reverse().join("") + " ";
        } else {
            newStr += strSplitInArr[i].concat(" ");
        }
    }

    newStr = newStr.trimRight();

    console.log(`After reversing those words in "${str}" who have letters 5 or more than 5 we have "${newStr}".`);

};

reverseWords5OrMoreLettersStr("My name is naveen sharma.");
