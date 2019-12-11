let firstNoNRepeatedChar = function (str) {
    let nonRepeatStrChar = null,
        checkedStrChars = [],
        i;

    if (str.length > 0) {
        for (i = 0; i < str.length; i++) {
            let currentStrChar = str[i],
                currentStrCharIndex = str.indexOf(str[i]),
                currentStrCharCount = 0;

            if (checkedStrChars.indexOf(currentStrChar) === -1) {
                while (currentStrCharIndex !== -1) {
                    currentStrCharCount++;
                    currentStrCharIndex = str.indexOf(str[i], currentStrCharIndex + 1);
                }

                if (currentStrCharCount === 1) {
                    nonRepeatStrChar = currentStrChar;
                    console.log(`${true}. First non repeated character in the "${str}" string is "${nonRepeatStrChar}".`);
                    break;
                }

                checkedStrChars.push(currentStrChar);

            }
        }
    } else {
        console.log(`${false}, There are not any characters in the '${str}' string.`);
    }

    if (i === str.length) {
        console.log(`${false}, All the characters in the "${str}" string are repetitive.`);
    }

};

firstNoNRepeatedChar("naveen");
