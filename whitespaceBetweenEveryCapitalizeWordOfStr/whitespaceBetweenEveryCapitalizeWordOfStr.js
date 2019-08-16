let insertWhitespaceBetween = function (capitalizeStr) {
    let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        newStr = "";

    for (let i = 0; i < capitalizeStr.length; i++) {
        if (capitalLetters.includes(capitalizeStr[i + 1])) {
            newStr += capitalizeStr[i] + " ";
        } else {
            newStr += capitalizeStr[i];
        }
    }

    console.log(`Afrer adding white space between every word of "${capitalizeStr}" we have "${newStr}".`);

};

insertWhitespaceBetween("MyAgeIsTwentyThree.");
