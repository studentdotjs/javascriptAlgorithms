let countStrLettersAndDigits = function (str) {
    let alphabets = "abcdefghijklmnopqrstuvwxyz",
        lettersCount = 0,
        digits = "0123456789",
        digitsCount = 0;

    str.toLowerCase().split("").forEach(function (char) {
        if (alphabets.includes(char)) {
            lettersCount++;
        } else if (digits.includes(char)) {
            digitsCount++;
        }
    });

    let lettersDigitsCounterObj = {
        "LETTERS": null,
        "DIGITS": null
    };

    lettersDigitsCounterObj.LETTERS = lettersCount;
    lettersDigitsCounterObj.DIGITS = digitsCount;

    console.log(`In "${str}" there is ${lettersDigitsCounterObj.LETTERS} letters and ${lettersDigitsCounterObj.DIGITS} digits.`);

};

countStrLettersAndDigits("Naveen 23");
