let checkLetter = function (strArray) {
    strArray[0] = strArray[0].toLowerCase(), strArray[1] = strArray[1].toLowerCase();
    let count = 0;

    for (let i = 0; i < strArray[1].length; i++) {
        if (strArray[0].includes(strArray[1][i])) {
            count++;
        }
    }

    if (count === strArray[1].length) {
        console.log(`True, All letters of "${strArray[1]}" are present in the "${strArray[0]}".`);
    } else {
        console.log(`False, All letters of "${strArray[1]}" are not present in the "${strArray[0]}".`);
    }

};

checkLetter(["javascript", "java"]);
