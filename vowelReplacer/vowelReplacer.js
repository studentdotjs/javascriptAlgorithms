let replaceVowelsWithSpecialChar = function (str, specialChar) {
    let vowels = "aeiou",
        newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            newStr += specialChar;
        } else {
            newStr += str[i];
        }
    }

    console.log(`After replacing every vowel of "${str}" to "${specialChar}" we have "${newStr}".`);

};

replaceVowelsWithSpecialChar("i am a javascript programmer", "$");
