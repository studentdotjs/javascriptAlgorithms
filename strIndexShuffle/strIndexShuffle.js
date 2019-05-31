function shuffleStrIndex(str) {
    let splitStr = str.split("");
    let shuffleStr = "",
        evenIndexStr = "",
        oddIndexStr = "";
    for (let i = 0; i < splitStr.length; i++) {
        if (i % 2 === 0) {
            evenIndexStr += splitStr[i];
        } else {
            oddIndexStr += splitStr[i];
        }
    }
    shuffleStr = evenIndexStr.concat(oddIndexStr);
    console.log(`Before Shuffle : '${str}'.`);
    console.log(`Even - Index Characters of '${str}' : '${evenIndexStr}'.`);
    console.log(`Odd - Index Characters of '${str}' : '${oddIndexStr}'.`);
    console.log(`'${evenIndexStr}' (Even - Indexed) + '${oddIndexStr}' (Odd - Indexed) = '${shuffleStr}'.`);
    console.log(`After Shuffle : '${shuffleStr}'.`);
}

shuffleStrIndex("javascript");
