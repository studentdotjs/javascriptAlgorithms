let indexOfCapitalLetters = function (word) {
    let capitalAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        captiaLettersIndexArr = [];

    for (let i = 0; i < word.length; i++) {
        if (capitalAlphabets.includes(word[i])) {
            if (captiaLettersIndexArr.includes(word.indexOf(word[i]))) {
                captiaLettersIndexArr.push(i);
            } else {
                captiaLettersIndexArr.push(word.indexOf(word[i]));
            }
        }
    }

    console.log(`Index of all capital letters in "${word}" are [${captiaLettersIndexArr}].`);

};

indexOfCapitalLetters("jAVaScRIpT");
