function firstVowelInStr(str) {
    let strCopy = str.toLowerCase();
    let strSplit = strCopy.split("");
    let indexOfFirstVowel = null;
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i] === 'a' || strSplit[i] === 'e' ||
            strSplit[i] === 'i' || strSplit[i] === 'o' || strSplit[i] === 'u') {
            indexOfFirstVowel = strCopy.indexOf(strSplit[i]);
            console.log(`First Voewl in '${str}' is '${strSplit[i]}' and Index of '${strSplit[i]}' is ${indexOfFirstVowel}.`);
            break;
        }
    }
}

firstVowelInStr('javascript');
