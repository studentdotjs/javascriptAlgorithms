let capitalAlternateLetters = function (str) {
    let newStr = "",
        converterCount = 0,
        charsCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            newStr += " ";
        } else {
            if (charsCount % 2 === 0 && converterCount % 2 === 0) {
                newStr += str[i].toUpperCase();
            } else {
                newStr += str[i].toLowerCase();
            }

            converterCount++;
            charsCount++;
        }

    }

    console.log(`After alternating case of the letters in the "${str}" string we got "${newStr}".`);

};

capitalAlternateLetters("my name is naveen sharma");
