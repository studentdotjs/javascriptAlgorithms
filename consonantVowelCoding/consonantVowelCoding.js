let consonantVowelCount = function (str) {
    let strLowerCaseSplit = str.toLowerCase().split(" "),
        vowels = "aeiou",
        consonants = "bcdfghjklmnpqrstvwxyz",
        consVowCountArr = [],
        consGroup = "",
        vowelsGroup = "";

    strLowerCaseSplit.forEach(function (word) {
        let consonantCount = 0,
            vowelsCount = 0;

        word.split("").forEach(function (char) {
            if (vowels.includes(char)) {
                vowelsCount++;
            } else if (consonants.includes(char)) {
                consonantCount++;
            }

        });

        vowelsGroup += " " + vowelsCount;
        consGroup += " " + consonantCount;

    });

    vowelsGroup = vowelsGroup.trimLeft();
    consGroup = consGroup.trimLeft();
    consVowCountArr.push(consGroup, vowelsGroup);

    console.log(consVowCountArr);

};

consonantVowelCount("I am a self taught javascript developer.");
