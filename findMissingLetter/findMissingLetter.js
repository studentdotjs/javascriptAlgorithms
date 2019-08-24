let missingLetter = function (letterArr) {
    let lowerUpperCaseLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        firstLetterArrIndex = lowerUpperCaseLetters.indexOf(letterArr[0]),
        lasstLetterArrIndex = lowerUpperCaseLetters.indexOf(letterArr[letterArr.length - 1]),
        portion = lowerUpperCaseLetters.slice(firstLetterArrIndex, lasstLetterArrIndex + 1);

    for (let i = 0; i < portion.length; i++) {
        if (letterArr.includes(portion[i])) {
            continue;
        } else {
            console.log(`In [${letterArr}] array missing letter is "${portion[i]}".`);
            break;
        }
    }
};

missingLetter(["J", "K", "L", "M", "O", "P"]);
