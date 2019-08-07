let splitCodes = function (str) {
    let strSplit = str.split(""),
        letterArr = "",
        numArr = "",
        splitCodesArr = [];

    for (let i = 0; i < strSplit.length; i++) {
        if (isNaN(strSplit[i])) {
            letterArr += strSplit[i];
        } else {
            numArr += strSplit[i];
        }
    }

    numArr = parseInt(numArr);
    splitCodesArr.push(letterArr, numArr);
    console.log(`After splitting letters and numbers from "${str}" we have [${splitCodesArr}]."`);

};

splitCodes("naveen23261996");
