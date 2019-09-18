let noDuplicateLettersStrWords = function (str) {
    let splitStr = str.toLowerCase().split(" "),
        i, j;

    for (i = 0; i < splitStr.length; i++) {
        let splitByChar = splitStr[i].split("");

        for (j = 0; j < splitStr[i].length; j++) {
            if (splitStr[i].includes(splitByChar[j], j + 1)) {
                break;
            }
        }

        if (j === splitStr[i].length) {
            continue;
        } else {
            console.log(`${false}, In "${str}" string individual word / words contains duplicate letters.`)
            break;
        }
    }

    if (i === splitStr.length) {
        console.log(`${true}, In "${str}" string individual word / words does not contains duplicate letters.`)
    }

}

noDuplicateLettersStrWords("python is easy to learn.");
