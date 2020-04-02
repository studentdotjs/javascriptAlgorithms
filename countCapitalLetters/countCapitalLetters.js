let totalCapitalLetters = function (str) {
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        totalCapLetters = 0;

    for (let i = 0; i < str.length; i++) {
        if (alphabets.includes(str[i])) {
            totalCapLetters++;
        }
    }

    console.log(totalCapLetters);

};

totalCapitalLetters("BcfUwmIWklO");
