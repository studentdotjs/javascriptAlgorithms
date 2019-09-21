let doubleCharSwap = function (str, char1, char2) {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char1) {
            newStr += char2;
        } else if (str[i] === char2) {
            newStr += char1;
        } else {
            newStr += str[i];
        }
    }

    console.log(`After replacing all instances of "${char1}" with "${char2}" and vice versa of "${str}", we have "${newStr}".`);

};

doubleCharSwap("javascript is my favourite programming language.", "a", "n");
