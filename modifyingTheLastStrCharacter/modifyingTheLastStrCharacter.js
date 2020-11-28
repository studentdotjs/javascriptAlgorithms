const modifyStrLastChar = (str, repeatN) => {

    let lastStrChar = str[str.length - 1],
        newStr = str.concat(lastStrChar.repeat(repeatN - 1));

    console.log(newStr);

};

modifyStrLastChar("JavaScript", 11);
