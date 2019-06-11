function doubleChar(str) {
    let repeatedStr = "",
        splitStr = null;
    splitStr = str.split("");
    for (let i = 0; i < splitStr.length; i++) {
        repeatedStr += splitStr[i].concat(splitStr[i]);
    }
    console.log(`After repeating '${str}'s each character one time = '${repeatedStr}'.`);
}

doubleChar('SATuarday');
