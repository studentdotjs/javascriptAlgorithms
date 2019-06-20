let particularLetterReverse = function (str, letter) {
    let splitStr = str.split(" "),
        reversedStr = null;

    console.log(`Before reverse : "${str}"`);

    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i].startsWith(letter)) {
            reversedStr = splitStr[i].split("").reverse().join("");
            str = str.replace(splitStr[i], reversedStr);
        }
    }

    console.log(`After reverse : "${str}".`);

};

particularLetterReverse("my name is naveen sharma", "n");
