let isIsogramWord = function (word) {
    let wordSplit = word.toLowerCase().split(""),
        checkArr = [];

    for (let i = 0; i < wordSplit.length; i++) {
        if (checkArr.includes(wordSplit[i])) {
            console.log(`"${word} is not "Isogram"."`);
            break;
        } else {
            checkArr[i] = wordSplit[i];
        }
    }

    if (checkArr.length === wordSplit.length) {
        console.log(`"${word} is "Isogram"."`);
    }
};

isIsogramWord("Javascript");
