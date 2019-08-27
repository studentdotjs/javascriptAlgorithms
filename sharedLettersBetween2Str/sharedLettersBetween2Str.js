let sharedLettersBetween2Str = function (str1, str2) {
    let sharedLettersStr = "",
        str1LowerCase = str1.toLowerCase().split(""),
        str2LowerCase = str2.toLowerCase().split(""),
        length = str1.length > str2.length ? str1.length : str2.length;

    for (let i = 0; i < length; i++) {
        if (str1LowerCase.includes(str2LowerCase[i])) {
            if (sharedLettersStr.indexOf(str2LowerCase[i]) === -1) {
                sharedLettersStr += str2LowerCase[i];
            }
        }
    }

    sharedLettersStr = sharedLettersStr.split("").sort().join("");
    console.log(`Shared letters between "${str1}" and "${str2}" are "${sharedLettersStr}".`);

};

sharedLettersBetween2Str('JavaScript', 'Programming');
