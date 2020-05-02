let numTimesCharAppearsInStr = function (str, char) {
    let strLowercaseSplit = str.toLowerCase().split(" "),
        charCountArr = [];

    strLowercaseSplit.forEach(function (word) {
        let currentWordCharIndex = word.indexOf(char),
            currentWordCharCount = 0;

        while (currentWordCharIndex !== -1) {
            currentWordCharCount++;
            currentWordCharIndex = word.indexOf(char, currentWordCharIndex + 1);
        }

        charCountArr.push(currentWordCharCount);
        currentWordCharCount = 0;

    });

    console.log(`In "${str}"s each word, "${char}" is appearing these number of times : [${charCountArr}].`);

};

numTimesCharAppearsInStr("I am javascript god.", "i");
