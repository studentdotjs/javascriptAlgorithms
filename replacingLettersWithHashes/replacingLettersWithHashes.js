let replaceWithHashes = function (str, range) {
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        strSplit = str.split(""),
        startRangeIndex = letters.indexOf(range[0]),
        endRangeIndex = letters.indexOf(range[2]),
        lettersCopyArr = letters.slice(startRangeIndex, endRangeIndex + 1),
        strCopy = str;

    for (let i = 0; i <= str.length; i++) {
        if (lettersCopyArr.includes(strSplit[i])) {
            str = str.replace(strSplit[i], '#');
        }
    }

    console.log(`After removing all letters between "${range}" from "${strCopy}" we have "${str}".`);

};


replaceWithHashes("javascript", "m-s");
