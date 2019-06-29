let strIntoBinary = function (str) {
    let strictStrSplitLowerCase = str.toLowerCase().split(""),
        alphabetArr = 'abcdefghijklm',
        strBinary = "";

    for (let i = 0; i < strictStrSplitLowerCase.length; i++) {
        if (alphabetArr.includes(strictStrSplitLowerCase[i])) {
            strBinary += 0;
        } else {
            strBinary += 1;
        }
    }

    console.log(`After converting "${str}" string into binary string = "${strBinary}".`);
};

strIntoBinary("Javascript")
