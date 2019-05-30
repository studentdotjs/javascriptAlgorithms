function repeatLettters(str, repeatN) {
    let splitStr = str.split("");
    let repetedStr = "";
    for (let i = 0; i < splitStr.length; i++) {
        for (let j = 0; j < repeatN; j++) {
            repetedStr += str[i];
        }
    }
    console.log(`'${str}' string's each character will repeat ${repeatN} times.`);
    console.log(`String After repeation: ${repetedStr}.`);
}

repeatLettters('naveen', 5);
