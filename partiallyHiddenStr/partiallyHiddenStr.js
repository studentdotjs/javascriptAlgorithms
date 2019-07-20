let partiallyHideStr = function (str) {
    let strSplit = str.split(" "),
        newStr = "";
    console.log(`Before Transforom : "${str}"`);

    for (let i = 0; i < strSplit.length; i++) {

        if (strSplit[i].length > 2) {

            let lengthGreaterThan2 = strSplit[i].split("");

            for (let j = 1; j < lengthGreaterThan2.length - 1; j++) {
                lengthGreaterThan2[j] = "-";
            }

            newStr += " " + lengthGreaterThan2.join("");

        } else {
            newStr += " " + strSplit[i];
        }
    }

    newStr = newStr.trimLeft();
    console.log(`After Transforom : "${newStr}"`);

};

partiallyHideStr('I am a javascript developer');
