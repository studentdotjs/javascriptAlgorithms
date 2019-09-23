let censoredString = function (censoredStr, removedVowels) {
    let uncensoredStr = "",
        j = 0;

    for (let i = 0; i < censoredStr.length; i++) {
        if (censoredStr[i] === "*") {
            uncensoredStr += removedVowels[j];
            j++;
        } else {
            uncensoredStr += censoredStr[i];
        }
    }

    console.log(`After uncensoring "${censoredStr}" string we have "${uncensoredStr}".`);

};

censoredString("j*v*scr*pt", "aai");
