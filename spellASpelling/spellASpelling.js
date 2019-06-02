function spellASpelling(str) {
    let spellSpellingArr = [""];
    let splitStr = str.split("");
    for (let i = 0; i < splitStr.length; i++) {
        spellSpellingArr.push(spellSpellingArr[i] + splitStr[i]);
    }
    spellSpellingArr.shift();
    console.log(`Spell of '${str}' spelling is [${spellSpellingArr}].`);
}

spellASpelling("javascript");
