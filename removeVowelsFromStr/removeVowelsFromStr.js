let removeStrVowels = function (str) {
    let splitStr = str.split(""),
        strWithoutVowels = "",
        vowelArr = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

    for (let i = 0; i < splitStr.length; i++) {
        if (vowelArr.includes(splitStr[i])) {
            continue;
        } else {
            strWithoutVowels += splitStr[i];
        }
    }

    console.log(`Aftre removing all vowels from "${str} string we got "${strWithoutVowels}".`);

};

removeStrVowels("Javascript is best programming language.");
