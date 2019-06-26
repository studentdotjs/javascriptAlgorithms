let strAlphabetIndex = function (str) {
    let strSplit = str.toLowerCase().split(""),
        alphabetArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        alphabetIndexStr = "";

    for (let i = 0; i < strSplit.length; i++) {

        if (alphabetArr.indexOf(strSplit[i]) !== -1) {
            alphabetIndexStr += 1 + alphabetArr.indexOf(strSplit[i]) + " ";
        }
    }

    alphabetIndexStr = alphabetIndexStr.trimRight();
    console.log(`"${str}" string's each letter's position in alphabet is "${alphabetIndexStr}".`);

};

strAlphabetIndex("i love javascript");
